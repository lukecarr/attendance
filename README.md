[![latest version](https://img.shields.io/github/v/release/lukecarr/dfe-attendance?color=blue&label=latest&sort=semver)](https://github.com/lukecarr/dfe-attendance/releases)
[![maintainability](https://img.shields.io/codeclimate/maintainability/lukecarr/dfe-attendance)](https://codeclimate.com/github/lukecarr/dfe-attendance)
[![code coverage](https://img.shields.io/codeclimate/coverage/lukecarr/dfe-attendance)](https://codeclimate.com/github/lukecarr/dfe-attendance)

- 💪 **Simple to use.** Scrape attendance data with a single command!
- 🏇 **Super fast.** Automatically scrapes, downloads ZIP archives, and extracts CSV files in seconds!
- 🎉 **Support for Windows, MacOS (Intel & Apple Silicon), Linux, and FreeBSD!**

## 🚀 Quick Start

### Install

Head over to the [Releases page](https://github.com/lukecarr/dfe-attendance/releases) and download the latest version for your target OS.

Alternatively, you can install the `dfe-attendance` binary using `go install`:

```bash
go install github.com/lukecarr/dfe-attendance@latest
```

### Scrape Daily Attendance (Example Usage)

Now you can invoke the `dfe-attendance` binary and start scraping data from the DfE's statistics website:

```bash
/path/to/your/dfe-attendance daily --output /path/to/output/daily.csv
```

This will scrape daily attendance data for schools and save the data to `/path/to/output/daily.csv`.

## ⚖ License

dfe-attendance is licensed under the [`Apache-2.0 License`](LICENSE).

## Attribution

dfe-attendance's banner background is sourced from SVGBackgrounds.com.
