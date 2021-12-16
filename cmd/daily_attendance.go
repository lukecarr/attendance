package cmd

import (
	"github.com/lukecarr/dfe-attendance/internal/scraper"
	"github.com/spf13/cobra"
)

const URL = "https://explore-education-statistics.service.gov.uk/find-statistics/attendance-in-education-and-early-years-settings-during-the-coronavirus-covid-19-outbreak"

func MakeDailyAttendanceCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "daily",
		Short: "Scrapes daily attendance data for schools",
		Run: func(cmd *cobra.Command, args []string) {
			scraper.DailyAttendance(URL, "daily_attendance.csv")
		},
	}
}

func init() {
	rootCmd.AddCommand(MakeDailyAttendanceCmd())
}
