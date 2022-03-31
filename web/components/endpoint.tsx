import clsx from 'clsx'
import Link from 'next/link'
import type { FunctionComponent, ReactElement } from 'react'

type Props = {
  href: string
  title: string
  width?: number
  height?: number
  rowStart?: number
  colStart?: number
  className?: string
  icon?: () => ReactElement
}

const Endpoint: FunctionComponent<Props> = ({ className, href, title, children, width, height, rowStart, colStart, icon }) => {
  return (
    <Link href={`/api/${href}`} passHref>
      <a
        className={clsx(
          'flex flex-col justify-end items-start rounded-xl px-4 py-8 text-white hover:shadow-xl',
          className,
        )}
        style={{
          gridColumn: typeof width !== 'undefined' && `span ${width} / span ${width}`,
          gridRow: typeof height !== 'undefined' && `span ${height} / span ${height}`,
          gridColumnStart: colStart,
          gridRowStart: rowStart,
        }}
      >
        {icon && (
          <span className="p-4 mb-4 text-lg sm:text-xl lg:text-2xl rounded-full bg-white bg-opacity-10">
            {icon()}
          </span>
        )}
        <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h3>
        <p className="mt-2 sm:mt-3 sm:text-lg">{children}</p>
      </a>
    </Link>
  )
}

export default Endpoint
