import React from 'react'

function MyElement(props) {
  const { attributes, children, element } = props

  return <div>{children}</div>
}

export default MyElement
