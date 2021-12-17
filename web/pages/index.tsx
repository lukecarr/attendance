import type { FunctionComponent } from 'react'
import Nav from '@/c/nav'
import Endpoint from '@/c/endpoint'
import { faCalendarDay } from '@fortawesome/pro-solid-svg-icons'

const Home: FunctionComponent & { title?: string } = () => {
  return (
    <>
      <Nav />
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 dark:text-white dark:bg-black">
        <div className="box-border max-w-screen-xl mx-auto px-6 md:px-8 gap-20 w-full">
          <div className="mx-auto text-center max-w-screen-lg">
            <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Access national attendance data <span className="bg-clip-text text-transparent bg-gradient-to-tr from-orange-500 via-rose-500 to-violet-700 gradient-fix">programmatically</span>
            </h2>
            <p className="max-w-lg mx-auto my-6 sm:my-8 lg:my-10 text-lg font-medium leading-tight text-center text-gray-500 dark:text-gray-200 sm:max-w-4xl sm:text-xl lg:text-2xl">
              API endpoints for obtaining attendance data scraped from the DfE&apos;s statistics website! <em>This site is not affiliated with nor endorsed by the DfE!</em>
            </p>
            <a href="https://github.com/lukecarr/dfe-attendance" className="inline-flex items-center justify-center border border-black bg-black hover:bg-white text-white hover:text-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white px-8 py-3 md:px-10 md:leading-6 font-semibold no-underline text-base md:text-lg rounded-md">
              View on GitHub
            </a>
          </div>
        </div>
      </section>
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 max-w-screen-xl" id="endpoints">
        <div className="space-y-6 md:grid md:space-y-0 grid-cols-6 grid-rows-3 gap-6">
          <Endpoint className="bg-gradient-to-tr from-blue-400 to-blue-700" title="Daily Attendance" href="daily" width={3} height={2} icon={faCalendarDay}>
            Daily attendance data for schools from Sep 2020 to present!
          </Endpoint>
          <Endpoint className="bg-gradient-to-tr from-orange-400 to-red-700" title="Workforce Absence" href="workforce" width={3} height={2} icon={faCalendarDay}>
            Daily workforce absence data for schools from Sep 2020 to present!
          </Endpoint>
        </div>
      </div>
    </>
  )
}

Home.title = 'Home'

export default Home
