import React from 'react'
import PropTypes from 'prop-types'
import { heading } from './Heading.module.scss'

const Heading = ({
  level,
  size,
  id,
  children,
  ...props
}) => {
  const headingSize = size || `h${level}`
  const className = `${headingSize} ${heading}`
  switch (level) {
    case 1:
      return (
        <h1 id={id} className={className}>{children}</h1>
      )
    case 2:
      return (
        <h2 id={id} className={className}>{children}</h2>
      )
    case 3:
      return (
        <h3 id={id} className={className}>{children}</h3>
      )
    case 4:
      return (
        <h4 id={id} className={className}>{children}</h4>
      )
    case 5:
      return (
        <h5 id={id} className={className}>{children}</h5>
      )
    case 6:
      return (
        <h6 id={id} className={className}>{children}</h6>
      )
  }
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  id: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Heading
