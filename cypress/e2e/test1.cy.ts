describe('Ciclo de vida do item', () => {
  beforeEach(() => {
    cy.visit('https://to-do-list-neon-one.vercel.app/')
    cy.viewport(1920, 1080)
  })

  // Teste sequencial.
  it('Adiciona um novo item', () => {
    let text = "Ir ao mercado e comprar verduras";

    // Adiciona um item.
    cy.get('form').click().type(text).get('button[type="submit"]').click()

    // Marca o item recém-adicionado.
    cy.get('.Lists-sc-gqgo16-1 > :nth-child(7) > input').click()

    // Exclui o item.
    cy.get('.active > .DeleteButton-sc-1813rzx-1 > img').wait(1200).click()
  })
})