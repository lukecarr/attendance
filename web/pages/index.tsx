import Link from 'next/link'

const Home = () => {
  return (
    <div className="container px-8 mx-auto">
      <main className="min-h-screen py-16 flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center font-extrabold">
          DfE Attendance Scraper
        </h1>

        <p className="text-2xl text-center my-16">
          API endpoints for obtaining attendance data scraped from the DfE&apos;s statistics website!
          <br /><br />
          <span className="font-semibold">
            This website is not affiliated or associated with the DfE!
          </span>
        </p>

        <div className="flex flex-col w-full sm:flex-row items-center justify-center flex-wrap max-w-3xl">
          <Link href="/api/daily" passHref>
            <a className="m-4 p-6 text-left text-inherit no-underline border border-slate-200 max-w-xs rounded-lg hover:text-blue-600 hover:border-blue-600">
              <h2 className="mb-4 text-2xl font-bold">Daily Attendance &rarr;</h2>
              <p className="text-xl font-medium">Daily attendance data for schools from Sep 2020 to present!</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

Home.title = 'Home'

export default Home
