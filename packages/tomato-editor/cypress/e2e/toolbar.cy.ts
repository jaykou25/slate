describe('toolbar', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('选中1个字显示toolbar', () => {
    cy.get('span[data-slate-string="true"]')
      .eq(0)
      .type('{selectall}')
      .get('#tomatoEditorToolbar')
      .should('exist')
  })

  it('光标状态不显示toolbar', () => {
    cy.get('span[data-slate-string="true"]')
      .eq(0)
      .click({ force: true })
      .get('#tomatoEditorToolbar')
      .should('not.exist')
  })

  it('focus并选中文字', () => {
    cy.get('span[data-slate-string="true"]')
      .eq(0)
      .click()
      .setSelection('This')
      .get('#tomatoEditorToolbar')
      .should('exist')
  })

  it('focus并选中文字并将光标落在后面', () => {
    cy.get('span[data-slate-string="true"]')
      .eq(0)
      .click({ force: true })
      .setCursorAfter('This')
      .get('#tomatoEditorToolbar')
      .should('not.exist')
  })
})
