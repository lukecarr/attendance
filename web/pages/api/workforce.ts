import { createHandler } from 'lib/csv'

export default createHandler('table_1d', 'daily_workforce_absence.csv', 60 * 60 * 24)
