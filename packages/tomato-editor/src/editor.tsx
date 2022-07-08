import React, { useMemo, useCallback, useState, Component } from 'react'
import { Slate, Editable, withReact } from '@jay.kou/slate-react'
import { createEditor } from '@jay.kou/slate'
import type { TomatoEditorType } from './types'
import EditorBody from './editor-body'

import '@jay.kou/tomato-editor-design/dist/style.css'

export default function Editor(props: TomatoEditorType) {
  const [editor] = useState(() => withReact(createEditor()))

  const { initialValue = [] } = props

  return (
    <Slate value={initialValue} editor={editor}>
      <EditorBody />
    </Slate>
  )
}
