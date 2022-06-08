import React, { useMemo, useCallback } from 'react'
import { Slate, Editable, withReact } from '@jay.kou/slate-react'
import { createEditor } from '@jay.kou/slate'
import type { TomatoEditorType } from './types'
import EditorBody from './editor-body'

export default function Editor(props: TomatoEditorType) {
  const editor = useMemo(() => withReact(createEditor()), [])

  const { initialValue = [] } = props

  return (
    <Slate value={initialValue} editor={editor}>
      <EditorBody />
    </Slate>
  )
}
