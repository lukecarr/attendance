package scraper

func DailyAttendance(url, out string) {
	Generic(url, "data/table_1b_daily_attendance_in_state_schools_during_covid_19_.csv", out)
}
