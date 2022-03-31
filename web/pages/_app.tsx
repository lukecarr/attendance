import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const title = (Component as any).title ? `${(Component as any).title} :: DfE Attendance Scraper` : 'DfE Attendance Scraper'

  return (
    <>
      <Head>
        <link rel="canonical" href="https://attendance.carr.sh" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
