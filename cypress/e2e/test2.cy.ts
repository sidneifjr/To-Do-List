describe('Login', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })

  // it('Adiciona um novo componente em uma página', () => {
  //   // Login
  //   cy.visit('localhost/admin')
  //   cy.get('input[placeholder="Digite seu usuário"').click().type("root")
  //   cy.get('input[placeholder="Digite sua senha"').click().type("wagtail123")

  //   // Antivírus precisa estar desabilitado, para carregar o iframe.
  //   cy.frameLoaded('iframe[title="reCAPTCHA"]').its('0.contentDocument.body').then(cy.wrap).find('span[role="checkbox"]').should('be.visible').click()

  //   cy.wait(2000)
  //   cy.get('button[type="submit"]').click()

  //   // Resto
  //   cy.contains('Páginas').click()
  //   cy.contains('Home').click()
  // })

  it('Testando menu mobile', () => {
    cy.viewport(480, 1080);
    cy.visit('localhost:3000').wait(1000);
    // cy.contains('Header').click().wait(1000);
    cy.get('.hamburger').click({force: true});

    cy.get('#header').should('have.class', 'active');
    cy.get('.hamburger').should('have.class', 'is-active');

    cy.contains('Quem Somos').click().wait(1000);
    cy.contains('Tecnologia').click().wait(1000);
    cy.contains('Soluções Net Zero').click().wait(1000);
    cy.contains('Sustentabilidade').click().wait(1000);
    cy.contains('Centro de Mídia').click().wait(1000).click();

    cy.get('.hamburger').wait(1000).click();
    cy.log('Teste bem-sucedido!');
  })

  // it('Testando webdoor', () => {
  //   cy.viewport(480, 1080);
  //   cy.visit('https://granbio.homolog.sirius.com.br/').wait(1000);
  //   cy.get('.webdoor > .swiper > .swiper-pagination > :nth-child(2)').click()
  //   cy.get('.webdoor > .swiper > .swiper-pagination > :first-child').click()
  // })
})