package util

import (
	"archive/zip"
	"bytes"
	"errors"
	"io"
	"net/http"
)

func DownloadZip(url string) (*bytes.Buffer, int64, error) {
	resp, err := http.Get(url)

	if err != nil {
		return nil, -1, err
	}

	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		return nil, -1, errors.New("Received non-200 HTTP response status code!")
	}

	buf := &bytes.Buffer{}
	nRead, err := io.Copy(buf, resp.Body)

	return buf, nRead, err
}

func NewZip(url string) (*zip.Reader, error) {
	buf, size, err := DownloadZip(url)

	if err != nil {
		return nil, err
	}

	reader := bytes.NewReader(buf.Bytes())

	return zip.NewReader(reader, size)
}
