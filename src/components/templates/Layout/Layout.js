import React from 'react'
import { MainNav } from '../../organisms'
import * as styles from './Layout.module.scss'
import '../../../styles/globals.scss'

const Layout = ({
  children,
  ...props
}) => {
  return (
    <>
      <MainNav />
      <main className={styles.wrapper}>
        {children}
      </main>
      <footer>
        This is the footer
      </footer>
    </>
  )
}

export default Layout
