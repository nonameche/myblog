import React from 'react'
import PropTypes from 'prop-types'
import { any } from 'sequelize/types/lib/operators'

// iconfont svg
const SvgIcon = props => {
  return (
    <svg className={`svg-icon ${props.className}`} aria-hidden='true' style={props.style}>
      <use xlinkHref={`#${props.type}`} />
    </svg>
  )
}

SvgIcon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: { marginRight: Number }
}

SvgIcon.defaultProps = {
  className: ''
}

export default SvgIcon
