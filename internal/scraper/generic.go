package scraper

import (
	"fmt"
	"os"

	"github.com/gocolly/colly"
	"github.com/lukecarr/dfe-attendance/internal/util"
	"github.com/pterm/pterm"
)

func Generic(url, in, out string) {
	var spinner1 *pterm.SpinnerPrinter
	var spinner2 *pterm.SpinnerPrinter
	var downloadHref string

	c := colly.NewCollector()

	c.OnHTML("a[href]", func(e *colly.HTMLElement) {
		if e.Text == "Download all data" {
			spinner2.Success("Found 'Download all data' button!")
			downloadHref = e.Attr("href")

			spinner, _ := pterm.DefaultSpinner.Start("Downloading attendance data zip archive")
			zip, err := util.NewZip(downloadHref)
			if err != nil {
				spinner.Fail(err.Error())
				os.Exit(1)
			}
			spinner.Success("Downloaded attendance data archive!")

			spinner1, _ := pterm.DefaultSpinner.Start("Extracting CSV file from archive")
			if err := util.ExtractFile(zip, in, out); err != nil {
				spinner1.Fail(err.Error())
				os.Exit(1)
			}
			spinner1.Success(fmt.Sprintf("Extracted CSV file to '%s'!", out))
		}
	})

	c.OnScraped(func(r *colly.Response) {
		if downloadHref == "" {
			spinner2.Fail("Couldn't find 'Download all data' button!")
			os.Exit(1)
		}
	})

	c.OnRequest(func(r *colly.Request) {
		spinner1, _ = pterm.DefaultSpinner.Start(fmt.Sprintf("Visiting %s", r.URL))
	})

	c.OnResponse(func(r *colly.Response) {
		spinner1.Success("Fetched website data successfully!")
		spinner2, _ = pterm.DefaultSpinner.Start("Searching for 'Download all data' button")
	})

	c.OnError(func(r *colly.Response, e error) {
		spinner1.Fail(e.Error())
		os.Exit(1)
	})

	c.Visit(url)
}
