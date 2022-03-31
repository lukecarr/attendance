import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { useImmer } from 'use-immer'
import type { FunctionComponent } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeChanger: FunctionComponent = () => {
  const [mounted, setMounted] = useImmer(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <button className="text-current p-2 cursor-pointer focus:ring outline-none" onClick={toggle} aria-label="Toggle Theme">
      {theme === 'light' ? <FiSun /> : <FiMoon />}
    </button>
  )
}

export default ThemeChanger