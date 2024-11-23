import PropTypes from 'prop-types'
import React from 'react'

const Divider = ({ width = 'w-64', bgColor = 'bg-primary', ...props }) => {
  return (
    <div className={`w-full mb-4`} {...props}>
      <div
        data-testid="divider"
        className={`h-1 mx-auto ${bgColor} ${width} opacity-25 my-0 py-0 rounded-xl-t mb-10`}
      ></div>
    </div>
  )
}

Divider.propTypes = {
  width: PropTypes.string,
  bgColor: PropTypes.string
}

export default Divider
