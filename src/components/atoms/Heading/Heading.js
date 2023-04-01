import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import * as styles from './Heading.module.scss'

const Heading = ({
  children,
  id,
  level,
  size,
  ...props
}) => {
  const header = useMemo(() => {
    const headingSize = size && `h${size}`
    switch (level) {
      case '1':
        return <h1 id={id} className={styles[headingSize]}>{children}</h1>
      case '2':
        return <h2 id={id} className={styles[headingSize]}>{children}</h2>
      case '3':
        return <h3 id={id} className={styles[headingSize]}>{children}</h3>
      case '4':
        return <h4 id={id} className={styles[headingSize]}>{children}</h4>
      case '5':
        return <h5 id={id} className={styles[headingSize]}>{children}</h5>
      case '6':
        return <h6 id={id} className={styles[headingSize]}>{children}</h6>
      default:
        return <h1 id={id} className={styles[headingSize]}>{children}</h1>
    }
  }, [level, size, id, children])
  return header
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6'])
}

export default Heading
