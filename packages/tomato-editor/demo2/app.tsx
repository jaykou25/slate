import React, { useEffect } from 'react'

const App = () => {
  console.log('set')

  useEffect(() => {
    console.log('hi')

    return () => {
      console.log('unmount')
    }
  }, [])
  return <div>App</div>
}

export default App
