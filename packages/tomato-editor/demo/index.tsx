import React from 'react'
import ReactDOM from 'react-dom/client'
import TomatoEditor from '../src/index'
import './style.css'

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ', id: 'jay' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="main">
      <TomatoEditor initialValue={initialValue} />
    </div>
  </React.StrictMode>
)
