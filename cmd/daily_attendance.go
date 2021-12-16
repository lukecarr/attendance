package cmd

import (
	"github.com/lukecarr/dfe-attendance/internal/scraper"
	"github.com/spf13/cobra"
)

func MakeDailyAttendanceCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "daily",
		Short: "Scrapes daily attendance data for schools",
		Run: func(cmd *cobra.Command, args []string) {
			url, _ := cmd.Root().Flags().GetString("dfe-url")
			out, _ := cmd.Flags().GetString("output")
			scraper.DailyAttendance(url, out)
		},
	}
}

func init() {
	cmd := MakeDailyAttendanceCmd()
	cmd.PersistentFlags().String("output", "daily_attendance.csv", "The output CSV file for daily attendance data")
	rootCmd.AddCommand(cmd)
}
