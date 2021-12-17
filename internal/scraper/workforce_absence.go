package scraper

func WorkforceAbsence(url, out string) {
	Generic(url, "data/table_1d_daily_workforce_absence_in_education_settings_during_covid_19_.csv", out)
}
