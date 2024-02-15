/// <reference types ="cypress" /> 
describe("Sucasa", () => {
  it("passes", () => {
    cy.visit('https://www.staysucasa.com/');
    
    cy.get('.standard > .d-flex').scrollIntoView();
    cy.get('.standard-item').eq(1).should('contain.text', 'Transparent Pricing');
    cy.get('.standard-item').eq(2).should('contain.text', 'Premium Properties');
    cy.get('.standard-item').eq(0).should('contain.text', 'Work From Anywhere');
   
    cy.get('.discover-text-side').scrollIntoView();
    
  
    
    //cy.get('.discover-text-side .mx-auto.mx-md-0').contains('Find Stays').click(); 
    cy.url().should('eq', 'https://www.staysucasa.com/index#featured');
    cy.screenshot('full-page-screenshot');
    cy.writeFile('E:\zapta/FIRST_[HH-MM-SS].png', '')
    
    
    
  });
});

  