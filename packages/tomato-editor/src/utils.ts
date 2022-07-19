export const isSelectionChange = (prevSelection: any, selection: any) => {
  return JSON.stringify(prevSelection) !== JSON.stringify(selection)
}
