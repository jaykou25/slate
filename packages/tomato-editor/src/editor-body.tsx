import { Component, useEffect } from 'react'
import { Range } from '@jay.kou/slate'
import {
  Editable,
  ReactEditor,
  useSlateStatic,
  useSlate,
} from '@jay.kou/slate-react'
import { SlideCard } from '@jay.kou/tomato-editor-design'

import styles from './styles.module.css'
import MyElement from './components/myElement'
import MyLeaf from './components/myLeaf'
import { isSelectionChange } from './utils'

class EditorBody extends Component<any, any> {
  private isPointerDown: Boolean
  private isPointerUp: Boolean

  constructor(props) {
    super(props)

    this.state = {
      toolbarVisible: false,
      triggerDom: document.getElementById('docContainer'),
    }

    this.isPointerDown = false
    this.isPointerUp = false
  }

  componentDidUpdate(prevProps) {
    if (isSelectionChange(prevProps.selection, this.props.selection)) {
      if (this.isPointerUp) {
        this.handleShowToolbar()
      }
    }
  }

  handleShowToolbar = () => {
    const { editor, selection } = this.props
    // 有些情况触发up后选区还没有立即变(比如cypress). 需要在上面的监听中显示工具栏
    if (selection) {
      if (ReactEditor.isFocused(editor) && !Range.isCollapsed(selection)) {
        const dom = ReactEditor.toDOMRange(editor, selection)
        this.setState({ toolbarVisible: true, triggerDom: dom })
      }
    }
  }

  handlePointerUp = () => {
    /**
     * 如果光标被选中并且有选中的文字, 显示工具栏
     */
    this.isPointerUp = true
    this.handleShowToolbar()

    document.removeEventListener('mouseup', this.handlePointerUp)
  }

  handlePointerDown = () => {
    this.isPointerUp = false
    if (this.state.toolbarVisible) {
      this.setState({ toolbarVisible: false })
    }
    document.addEventListener('pointerup', this.handlePointerUp)
  }

  render() {
    const { toolbarVisible, triggerDom } = this.state

    return (
      <div
        id="docContainer"
        className={styles.docContainer}
        onPointerDown={this.handlePointerDown}
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
          content={<div id="tomatoEditorToolbar">hi</div>}
          triggerDom={triggerDom}
          offset={2}
        />
      </div>
    )
  }
}

function EditorBodyWrapper() {
  const editor = useSlate()

  return <EditorBody editor={editor} selection={editor.selection} />
}

export default EditorBodyWrapper
