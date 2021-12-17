import Link from 'next/link'

import styles from 'styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          DfE Attendance Scraper
        </h1>

        <p className={styles.description}>
          API endpoints for obtaining attendance data scraped from the DfE&apos;s statistics website!
          <br /><br />
          <strong>This website is not affiliated or associated with the DfE!</strong>
        </p>

        <div className={styles.grid}>
          <Link href="/api/daily" passHref>
            <a className={styles.card}>
              <h2>Daily Attendance &rarr;</h2>
              <p>Daily attendance data for schools from Sep 2020 to present!</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

Home.title = 'Home'

export default Home
