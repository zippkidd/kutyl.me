import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({
  children,
  expanded,
  href,
  type,
  ...props
}) => {
  const internal = /^\/(?!\/)/.test(href)
  if (internal) {
    return (
      <GatsbyLink
        aria-expanded={expanded || undefined}
        className={type || 'tertiary'}
        to={href || '#'}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a
      aria-expanded={expanded || undefined}
      className={type || 'tertiary'}
      href={href}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'menu'])
}

export default Link
