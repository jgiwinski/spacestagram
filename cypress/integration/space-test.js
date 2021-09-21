describe('Spacestagram', () => {

    it('should have a header', () => {
        cy.fixture('samplePost.js').then(() => {
            cy.intercept('https://api.nasa.gov/planetary/apod?api_key=2WzXOGECSP2UYaVWcoxhmakrh0WO3mltcT9B3iyO')
        })
        cy.visit('http://localhost:3000')
        cy.get('header').get('.page-title').contains('h1', 'SPACESTAGRAM')
    });
    
    it('should create planet posts and display their relevant data', () => {
        cy.get('[data-cy=main-content]').get('article').first()
            .get('img').should('have.class', 'apod').should('be.visible')
            .get('h2').should('be.visible')
            .get('p').should('have.class', 'desc').should('be.visible')
            .get('h3').should('be.visible')
    });
    
    it('should like and unlike a photo', () => {
        cy.get('[data-cy=unlike]').first().click()
            .get('svg').should('have.class', 'heart').should('exist')
            .get('[data-cy=like]').first().click()
    });

    it('should show a 404 error page if the user navigates to an undefined page', () => {
        cy.visit('http://localhost:3000/mars')
        cy.contains('return to the home page')
        cy.get('.lost-error').click()
        cy.url('eq', 'http://localhost:3000/')
    });
})

// I would have liked to get further along with testing and figured out why my fixture isn't catching. 
// I would have added sad path testing and more specific tests for what is displayed on the DOM. 