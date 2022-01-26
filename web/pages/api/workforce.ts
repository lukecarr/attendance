import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import * as cheerio from 'cheerio'
import AdmZip from 'adm-zip'

const getCsvText = async () => {
  const { data } = await axios.get('https://explore-education-statistics.service.gov.uk/find-statistics/attendance-in-education-and-early-years-settings-during-the-coronavirus-covid-19-outbreak')

  const $ = cheerio.load(data)

  const downloadUrl = $('nav[aria-labelledby="data-downloads"] li:last-child a[href]').filter(function () { return $(this).text() === 'Download all data' }).first().attr('href')

  const { data: zipData } = await axios.get(downloadUrl, { responseType: 'arraybuffer' })
  const zip = new AdmZip(zipData)

  let csvText: string | null = null

  for (const entry of zip.getEntries()) {
    if (!entry.isDirectory && entry.entryName.includes('table_1d')) {
      csvText = zip.readAsText(entry.entryName, 'utf8')
      break
    }
  }

  return csvText
}

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const csvText = await getCsvText()

  if (process.env.NODE_ENV === 'production') res.setHeader('Cache-Control', `public,max-age=${60 * 60 * 24},immutable`)

  res.status(200)
    .setHeader('Content-Type', 'text/csv')
    .setHeader('Content-Disposition', 'attachment;filename=daily_workforce_absence.csv')
    .send(csvText ?? '')
}
