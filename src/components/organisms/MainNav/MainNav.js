import React from 'react'
import useGetMainNav from '../../../hooks/useGetMainNav'
import useGetMainNavChildren from '../../../hooks/useGetMainNavChildren'
import { Link } from '../../atoms'
import { Dropdown } from '../../molecules'
import * as styles from './MainNav.module.scss'

const MainNav = () => {
  const main = useGetMainNav()
  main.forEach(node => {
    node.children = []
  })
  const children = useGetMainNavChildren()
  children.forEach(childNode => {
    main.forEach(mainNode => {
      if (mainNode.slug === childNode.parentMainMenuItem.slug) {
        mainNode.children.push({
          slug: childNode.slug,
          title: childNode.title
        })
      }
    })
  })
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
        {
          main.map((link, i) =>
            link.children.length
              ? (<li key={i}><Dropdown parentLink={link} childLinks={link.children} /></li>)
              : (<li key={i}><Link href={`/${link.slug}`} type='menu'>{link.title}</Link></li>)
          )
        }
      </ul>
    </nav>
  )
}

export default MainNav
