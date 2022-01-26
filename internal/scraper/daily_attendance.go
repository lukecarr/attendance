package scraper

func DailyAttendance(url, out string) {
	Generic(url, "table_1b", out)
}
