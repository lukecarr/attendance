import type { FunctionComponent } from 'react'
import Link from 'next/link'
import ThemeChanger from './theme-changer'

const Nav: FunctionComponent = () => {
  return (
    <nav className="bg-white z-20 sticky top-0 left-0 right-0 border-b border-gray-200 dark:bg-black dark:border-gray-900 bg-opacity-95 gap-2">
      <div className="flex items-center justify-between mx-auto w-full h-16 px-4 sm:px-6 md:px-8 max-w-screen-xl">
        <div className="flex items-center">
          <Link href="/" passHref>
            <a className="inline-flex items-center text-current no-underline hover:opacity-80 font-bold">
              DfE Attendance Scraper
              <span className="bg-blue-600 rounded-lg text-white py-1 px-2 uppercase tracking-widest font-mono text-xs font-bold ml-4">Unofficial</span>
            </a>
          </Link>
        </div>
        <div className="space-x-8">
          <ThemeChanger />
        </div>
      </div>
    </nav>
  )
}

export default Nav
