package util

import (
	"archive/zip"
	"io"
	"os"
)

func ExtractFile(z *zip.Reader, in, out string) error {
	inFile, err := z.Open(in)
	if err != nil {
		return err
	}

	outFile, err := os.Create(out)
	if err != nil {
		return err
	}

	defer outFile.Close()

	_, err = io.Copy(outFile, inFile)
	return err
}
