import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../atoms'
import * as styles from './Dropdown.module.scss'

const Dropdown = ({
  parentLink = { slug: '#', title: 'Parent' },
  childLinks = [{ slug: '#', title: 'Child' }],
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const children = useMemo(() => childLinks.map((link, i) => (
    <li key={i}>
      <Link
        href={`/${link.slug}`}
        type='menu'
      >
        {link.title}
      </Link>
    </li>
  )), [childLinks])
  return (
    <>
      <Link
        href={`/${parentLink.slug}`}
        type='menu'
        expanded={`${isOpen}`}
      >
        {parentLink.title}
      </Link>
      <button
        aria-expanded={isOpen || 'false'}
        className={styles.dd__btn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={styles.dd__arrow} aria-hidden='true' />
        <span className='visually-hidden'>{isOpen ? 'Hide' : 'Show'} submenu for {parentLink.title}</span>
      </button>
      <ul className={isOpen ? undefined : styles.dd__hide}>
        {children}
      </ul>
    </>
  )
}

Dropdown.propTypes = {
  parentLink: PropTypes.object.isRequired,
  childLinks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Dropdown
