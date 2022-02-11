import AdmZip from 'adm-zip'
import axios from 'axios'
import * as cheerio from 'cheerio'
import type { NextApiRequest, NextApiResponse } from 'next'

const endpoint = () => process.env.DFE_ENDPOINT ?? 'https://explore-education-statistics.service.gov.uk/find-statistics/attendance-in-education-and-early-years-settings-during-the-coronavirus-covid-19-outbreak'

export const getCsv = async (search: string) => {
  const { data } = await axios.get(endpoint())

  const $ = cheerio.load(data)

  const downloadUrl = $('nav[aria-labelledby="data-downloads"] li:last-child a[href]').filter(function () { return $(this).text() === 'Download all data' }).first().attr('href')

  const { data: zipData } = await axios.get(downloadUrl, { responseType: 'arraybuffer' })
  const zip = new AdmZip(zipData)

  let csvText: string | null = null

  for (const entry of zip.getEntries()) {
    if (!entry.isDirectory && entry.entryName.includes(search)) {
      csvText = zip.readAsText(entry.entryName, 'utf8')
      break
    }
  }

  return csvText
}

export const createHandler = (search: string, filename: string, cache: number) => async (_: NextApiRequest, res: NextApiResponse) => {
  const csvText = await getCsv(search)

  if (process.env.NODE_ENV === 'production') res.setHeader('Cache-Control', `public,max-age=${cache},immutable`)

  res.status(200)
    .setHeader('Content-Type', 'text/csv')
    .setHeader('Content-Disposition', `attachment;filename=${filename}.csv`)
    .send(csvText ?? '')
}
