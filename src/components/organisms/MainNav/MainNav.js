import React from 'react'
import useGetMainNav from '../../../hooks/useGetMainNav'
import { Link } from '../../atoms'
import { Dropdown } from '../../molecules'
import * as styles from './MainNav.module.scss'

const MainNav = () => {
  const data = useGetMainNav()
  const links = data.map((node, i) => (
    <li key={i}>
      <Link
        type='menu'
        href={`/${node.slug}`}
      >
        {node.title}
      </Link>
    </li>
  ))
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li>
          <Link
            type='menu'
            href='/'
          >
            Home
          </Link>
        </li>
        {links}
        <li>
          <Dropdown />
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
