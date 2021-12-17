import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import * as cheerio from 'cheerio'
import AdmZip from 'adm-zip'
import Redis from 'ioredis'

const cache = typeof process.env.REDIS_URI !== 'undefined' && new Redis(process.env.REDIS_URI)

const getCsvText = async () => {
  const { data } = await axios.get('https://explore-education-statistics.service.gov.uk/find-statistics/attendance-in-education-and-early-years-settings-during-the-coronavirus-covid-19-outbreak')

  const $ = cheerio.load(data)

  const downloadUrl = $('a[href]').filter(function () { return $(this).text() === 'Download all data' }).first().attr('href')

  const { data: zipData } = await axios.get(downloadUrl, { responseType: 'arraybuffer' })
  const zip = new AdmZip(zipData)
  const csvText = zip.readAsText('data/table_1b_daily_attendance_in_state_schools_during_covid_19_.csv', 'utf8')

  cache && await cache.set('daily_attendance', csvText, 1000 * 60 * 60 * 24)

  return csvText
}

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const csvText = (cache && await cache.get('daily_attendance')) || await getCsvText()

  res.status(200)
    .setHeader('Content-Type', 'text/csv')
    .setHeader('Content-Disposition', 'attachment;filename=daily_attendance.csv')
    .send(csvText)
}
