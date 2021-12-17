package cmd

import (
	"github.com/lukecarr/dfe-attendance/internal/scraper"
	"github.com/spf13/cobra"
)

func MakeWorkforceAbsenceCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "workforce",
		Short: "Scrapes (daily) workforce absence data for schools",
		Run: func(cmd *cobra.Command, args []string) {
			url, _ := cmd.Root().Flags().GetString("dfe-url")
			out, _ := cmd.Flags().GetString("output")
			scraper.WorkforceAbsence(url, out)
		},
	}
}

func init() {
	cmd := MakeWorkforceAbsenceCmd()
	cmd.PersistentFlags().String("output", "workforce_absence.csv", "The output CSV file for workforce absence data")
	rootCmd.AddCommand(cmd)
}
