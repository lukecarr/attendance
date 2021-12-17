import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const title = (Component as any).title ? `${(Component as any).title} :: DfE Attendance Scraper` : 'DfE Attendance Scraper'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
