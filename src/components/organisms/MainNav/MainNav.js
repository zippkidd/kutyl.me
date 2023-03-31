import React from 'react'
import useGetMainNav from '../../../hooks/useGetMainNav'
import { Link } from '../../atoms'
import * as styles from './MainNav.module.scss'

const MainNav = () => {
  const data = useGetMainNav()
  const links = data.map((node, i) => (
    <Link
      type='menu'
      href={`/${node.slug}`}
      key={i}
    >
      {node.title}
    </Link>
  ))
  return (
    <nav className={styles.mainNav}>
      <Link
        type='menu'
        href='/'
      >
        Home
      </Link>
      {links}
    </nav>
  )
}

export default MainNav
