import React from 'react'

function MyLeaf(props) {
  const { attributes, children, leaf } = props

  return (
    <span id={leaf.id} {...attributes}>
      {children}
    </span>
  )
}

export default MyLeaf
