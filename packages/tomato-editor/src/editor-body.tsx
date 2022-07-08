import { Component } from 'react'
import { Range } from '@jay.kou/slate'
import { Editable, ReactEditor, useSlateStatic } from '@jay.kou/slate-react'
import { SlideCard } from '@jay.kou/tomato-editor-design'

import styles from './styles.module.css'
import MyElement from './components/myElement'
import MyLeaf from './components/myLeaf'

class EditorBody extends Component<any, any> {
  constructor(props) {
    super(props)

    this.state = {
      toolbarVisible: false,
      triggerDom: document.getElementById('docContainer'),
    }
  }

  handleMouseUp = () => {
    /**
     * 如果光标被选中并且有选中的文字, 显示工具栏
     */
    const { editor } = this.props
    const { selection } = editor
    if (ReactEditor.isFocused(editor) && !Range.isCollapsed(selection)) {
      const dom = ReactEditor.toDOMRange(editor, selection)
      this.setState({ toolbarVisible: true, triggerDom: dom })
    }

    document.removeEventListener('mouseup', this.handleMouseUp)
  }

  handleMouseDown = () => {
    this.setState({ toolbarVisible: false })
    document.addEventListener('mouseup', this.handleMouseUp)
  }

  render() {
    const { toolbarVisible, triggerDom } = this.state

    return (
      <div
        id="docContainer"
        className={styles.docContainer}
        onMouseDown={this.handleMouseDown}
      >
        <Editable
          placeholder="请输入内容"
          style={{ position: 'unset' }}
          renderElement={(attr) => <MyElement {...attr} />}
          renderLeaf={(attr) => <MyLeaf {...attr} />}
          onBlur={() => {
            this.setState({ toolbarVisible: false })
          }}
        />

        <SlideCard
          visible={toolbarVisible}
          content={<div>hi</div>}
          triggerDom={triggerDom}
          offset={2}
        />
      </div>
    )
  }
}

function EditorBodyWrapper() {
  const editor = useSlateStatic()
  return <EditorBody editor={editor} />
}

export default EditorBodyWrapper
