import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../atoms'
import * as styles from './Dropdown.module.scss'

const Dropdown = ({
  parentLink = { href: '#', title: 'Parent' },
  subLinks = [{ href: '#', title: 'Child' }],
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const children = useMemo(() => subLinks.map((link, i) => (
    <li key={i}>
      <Link
        href={link.href}
        type='menu'
      >
        {link.title}
      </Link>
    </li>
  )), [subLinks])
  return (
    <>
      <Link
        href={parentLink.href}
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
      <ul className={isOpen || styles.dd__hide}>
        {children}
      </ul>
    </>
  )
}

Dropdown.propTypes = {
  parentLink: PropTypes.object.isRequired,
  subLinks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Dropdown
