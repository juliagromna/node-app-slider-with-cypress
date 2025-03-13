describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

// describe('Swiper Gallery Test', function () {
//   it('Checks if buttons next and prev work properly', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.get('.swiper-slide-active').parent().children().eq(1).should('have.class', 'swiper-slide-active');
//     cy.wait(2000);
//     cy.get('.swiper-button-next').click({ force: true });
//     cy.get('.swiper-slide-active').parent().children().eq(2).should('have.class', 'swiper-slide-active');
//     cy.wait(2000);
//     cy.get('.swiper-button-next').click({ force: true });
//     cy.get('.swiper-slide-active').parent().children().eq(0).should('have.class', 'swiper-slide-active');
//     cy.wait(2000);
//     cy.get('.swiper-button-prev').click({ force: true });
//     cy.get('.swiper-slide-active').parent().children().eq(2).should('have.class', 'swiper-slide-active');
//     cy.wait(2000);
//     cy.get('.swiper-button-prev').click({ force: true });
//     cy.get('.swiper-slide-active').parent().children().eq(1).should('have.class', 'swiper-slide-active');
//     cy.wait(2000);
//     cy.get('.swiper-button-prev').click({ force: true });
//     cy.get('.swiper-slide-active').parent().children().eq(0).should('have.class', 'swiper-slide-active');
//     cy.wait(2000);
//   });
// });