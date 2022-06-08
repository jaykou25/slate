import React, { Component } from 'react'
import { Editable } from '@jay.kou/slate-react'
import { SlideCard } from '@jay.kou/tomato-editor-design'

import styles from './styles.module.css'
import MyElement from './components/myElement'
import MyLeaf from './components/myLeaf'

export default class EditorBody extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toolbarVisible: false,
      triggerDom: document.getElementById('docContainer'),
    }
  }

  handleMouseUp = () => {
    this.setState({ toolbarVisible: true })
    document.removeEventListener('mouseup', this.handleMouseUp)
  }

  handleMouseDown = () => {
    document.addEventListener('mouseup', this.handleMouseUp)
  }

  render() {
    const { toolbarVisible, triggerDom } = this.state

    return (
      <div
        id="docContainer"
        className={styles.docContainer}
        // onMouseDown={this.handleMouseDown}
      >
        <Editable
          placeholder="请输入内容"
          style={{ position: 'unset' }}
          renderElement={(attr) => <MyElement {...attr} />}
          renderLeaf={(attr) => <MyLeaf {...attr} />}
        />

        <button id="jay">id</button>

        <SlideCard
          visible={toolbarVisible}
          content={<div>hi</div>}
          triggerDom={document.getElementById('jay')}
        />
      </div>
    )
  }
}
