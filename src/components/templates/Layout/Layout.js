import React from 'react'
import { wrapper } from './Layout.module.scss'
import '../../../styles/globals.scss'

const Layout = ({
  children,
  ...props
}) => {
  return (
    <>
      <main className={wrapper}>
        {children}
      </main>
      <footer>
        This is the footer
      </footer>
    </>
  )
}

export default Layout
