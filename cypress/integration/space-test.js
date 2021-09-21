describe('Spacestagram', () => {

    it('should have a header ', () => {
        cy.fixture('sample_post.js').then(() => {
            cy.intercept('https://api.nasa.gov/planetary/apod?api_key=2WzXOGECSP2UYaVWcoxhmakrh0WO3mltcT9B3iyO')
        })
        cy.visit('http://localhost:3000')
        cy.get('header').get('.page-title').contains('h1', 'SPACESTAGRAM')
    });
    
    it('should create planet cards and display their relevant data', () => {
        cy.get('[data-cy=main-content]').get('article').first()
            .get('img').should('have.class', 'apod').should('be.visible')
            .get('h2').contains('Orange Moon')
            .get('p').should('have.class', 'desc').contains('This remarkable telescopic image')
    });

    // it('should show a 404 error page if the user navigates to an undefined page', () => {
    //     cy.visit('http://localhost:3000/mars')
    //     cy.contains('return to the home page')
    //     cy.get('.lost-error').click()
    //     cy.url('eq', 'http://localhost:3000/')
    // });


    // it('should  click FAVORITES button and change URL path', () => {
    //     cy.get('header').get('div').get('.nav-btn').contains('FAVORITES').click()
    //         .url().should('include', '/favorites')
    // });

    // it('should  click HOME button and change URL path', () => {
    //     cy.get('header').get('div').get('.nav-btn').contains('HOME').click()
    //         .url().should('include', '/')
    // });

    // it('should display new photo after selecting date', () => {
    //     cy.get('form').get('div').should('be.visible').and('have.class', 'radio-toolbar')
    //         .get('input[type=date]').type('2020-04-20')
    //         .should('have.value', '2020-04-20')
    //         .get('.launch-btn').click()
    //         .get('.main-container').get('.photo-container')
    //         .get('img').should('have.class', 'main-image')
    // });

    // it('should show photo details on right side of screen', () => {
    //     cy.get('form').get('div').should('be.visible').and('have.class', 'radio-toolbar')
    //     .get('label').first()
    //     .contains('BIRTHDAY').click()
    //     .get('input[type=date]').type('2015-06-03')
    //     .should('have.value', '2015-06-03')
    //     .get('.launch-btn').click()
    //     .get('.main-container').get('.details-container')
    //     .get('h1').contains('Happy Birthday')
    //     .get('h2').contains('Photo Taken By: Curiosity')
    //     .get('h1').contains('June 3')
    // });

    // it('should favorite a photo', () => {
    //     cy.get('form').get('div').should('be.visible').and('have.class', 'radio-toolbar')
    //     .get('label').first()
    //     .contains('BIRTHDAY').click()
    //     .get('input[type=date]').type('2015-06-03')
    //     .should('have.value', '2015-06-03')
    //     .get('.launch-btn').click()
    //     .get('.main-container').get('.details-container')
    //     .get('button').contains('ADD TO FAVORITES').click()
    //     .get('.swal2-container').get('.swal2-popup').get('.swal2-actions')
    //     .get('.swal2-confirm').click()
    // });

    // it('should show an error message when a user tries to favorite a photo twice', () => {
    //     cy.get('[data-cy=favorite]').click()
    //     .get('.swal2-container').get('.swal2-popup').get('.swal2-actions')
    //     .get('.swal2-confirm').click()
    // }); 

    // it('should view favorited photos', () => {
    //     cy.get('header').get('div').get('.nav-btn').contains('FAVORITES').click()
    //     .get('section').get('article').should('have.class', 'fav-photo-container')
    // });

    // it('should delete a photo from the favorites page', () => {
    //     cy.get('section')
    //     .get('article').first()
    //     .get('.remove-btn').should('have.id', '102685').click()
    // }); 

})
