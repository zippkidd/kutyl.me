import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({
  label,
  type,
  href,
  ...props
}) => {
  const internal = /^\/(?!\/)/.test(href)
  if (internal) {
    return (
      <GatsbyLink
        className={type || 'tertiary'}
        to={href}
      >
        {label}
      </GatsbyLink>
    )
  }
  return (
    <a
      className={type || 'tertiary'}
      href={href}
    >
      {label}
    </a>
  )
}

Link.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  href: PropTypes.string.isRequired
}

export default Link
