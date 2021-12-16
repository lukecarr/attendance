package cmd

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

func MakeRootCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "dfe-attendance",
		Short: "Scrape attendance data from the DfE's statistics website",
	}
}

var rootCmd = MakeRootCmd()

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		if _, err = fmt.Fprintln(os.Stderr, err); err != nil {
			panic(err.Error())
		}

		os.Exit(1)
	}
}
