describe('Ciclo de vida do item', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    cy.viewport(1920, 1080)
  })

  // Happy path.
  it('Adiciona um novo item', () => {
    cy.get('[data-cy="form"]').find('input').click().type("Ir ao mercado e comprar verduras").wait(1000) // Adiciona um item.
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="lists"] > :nth-child(7) > input').click() // Marca o item recém-adicionado.
    cy.get('.active > [data-cy="deleteButton"] > img').wait(1000).click() // Exclui o item.
  })

  // Fail case, então corrigido para um happy path.
  it('Adiciona um item inválido', () => {
    cy.get('[data-cy="form"]').find('input').click().type(" ") // Adiciona um item.
    cy.get('[data-cy="submit"]').click()
    cy.get('form').click().type("testando validade") // Tenta resolver o erro, cadastrando um novo valor.
    cy.get('button[type="submit"]').click()
    cy.get('[data-cy="lists"] > :nth-child(7) > input').click()
    cy.get('.active > [data-cy="deleteButton"] > img').wait(1000).click()
  })
})