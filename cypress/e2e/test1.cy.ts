describe('Ciclo de vida do item', () => {
  beforeEach(() => {
    cy.visit('https://to-do-list-neon-one.vercel.app/')
    cy.viewport(1920, 1080)
  })

  // Happy path.
  it('Adiciona um novo item', () => {
    // Adiciona um item.
    cy.get('form').click().type("Ir ao mercado e comprar verduras")
    
    cy.get('button[type="submit"]').click()

    // Marca o item recém-adicionado.
    cy.get('.Lists-sc-gqgo16-1 > :nth-child(7) > input').click()

    // Exclui o item.
    cy.get('.active > .DeleteButton-sc-1813rzx-1 > img').wait(1200).click()
  })

  // Fail case, então corrigido para um happy path.
  it('Adiciona um item inválido', () => {
    cy.get('form').click().type(" ")

    cy.get('button[type="submit"]').click()

    // Tenta resolver o erro, cadastrando um novo valor.
    cy.get('form').click().type("testando validade")

    cy.get('button[type="submit"]').click()

    cy.get('.Lists-sc-gqgo16-1 > :nth-child(7) > input').click()

    cy.get('.active > .DeleteButton-sc-1813rzx-1 > img').wait(1200).click()
  })
})