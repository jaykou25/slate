import React from 'react'

function MyLeaf(props) {
  const { attributes, children, leaf } = props

  return <span>{children}</span>
}

export default MyLeaf
