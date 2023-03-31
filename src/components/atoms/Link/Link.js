import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({
  type,
  href,
  ...props
}) => {
  const internal = /^\/(?!\/)/.test(href)
  if (internal) {
    return (
      <GatsbyLink
        className={type || 'tertiary'}
        to={href || '#'}
      >
        {props.children}
      </GatsbyLink>
    )
  }
  return (
    <a
      className={type || 'tertiary'}
      href={href}
    >
      {props.children}
    </a>
  )
}

Link.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  href: PropTypes.string
}

export default Link
