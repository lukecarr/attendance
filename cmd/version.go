package cmd

import (
	"github.com/lukecarr/dfe-attendance/internal/info"
	"github.com/pterm/pterm"
	"github.com/spf13/cobra"
)

func MakeVersionCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "version",
		Short: "Print the version string of dfe-attendance",
		Run: func(cmd *cobra.Command, args []string) {
			pterm.DefaultTable.WithData(pterm.TableData{
				{"Version", info.Version},
				{"Build Date", info.Date},
				{"Build Commit", info.Commit},
			}).Render()
		},
	}
}

func init() {
	rootCmd.AddCommand(MakeVersionCmd())
}
