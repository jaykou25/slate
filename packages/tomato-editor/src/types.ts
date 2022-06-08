export interface TomatoEditorType {
  /**
   * editor是内部受控的, 只接受初始值
   */
  initialValue?: any

  /**
   * 光标改变不会引起onChange
   */
  onChange?: (val: any) => void
}
