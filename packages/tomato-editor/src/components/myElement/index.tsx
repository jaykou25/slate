import React from 'react'

function MyElement(props) {
  const { attributes, children, element } = props

  return <div {...attributes}>{children}</div>
}

export default MyElement
