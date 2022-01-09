/// <reference types="Cypress"/>

//const { data } = require("cypress/types/jquery");
    describe('Listagem', () => {

        it('Quando não houver cadastros, então a listagem deve estar vazia', () => {
            cy.fixture('listagem-vazia').then(data => {
                window.localStorage.setItem('data', JSON.stringify(data))
            })
    
            cy.visit('https://form-agilizei.netlify.app/listagem.html')
            cy.get('table tbody tr').should('have.length', 0)
            
        });

        it('Quando houver um ou mais cadastros, então a listagem deve exibir cada registro', () => {
            cy.fixture('listagem-itens').then(data => {
                window.localStorage.setItem('data', JSON.stringify(data))
            })
    
            cy.visit('https://form-agilizei.netlify.app/listagem.html')
            cy.get('table tbody tr').should('have.length.below', 3)
            cy.get('table tbody tr').should('have.length', 2)

        });
        
    });