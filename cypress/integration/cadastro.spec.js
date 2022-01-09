/// <reference types="cypress" />

var Chance = require ('chance')
var chance = new Chance()

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado ', () => {
        cy.visit('/')
        cy.get('input[name=firstName]').type(chance.name())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[class=form-control]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())
        cy.get('input[value=f]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Livros')
        cy.get('select#countries').select('Japão', {force: true})
        cy.get('select#years').select('2016', {force: true})
        cy.get('select#months').select('Dezembro', {force: true})
        cy.get('select#days').select('21', {force: true})
        cy.get('input#firstpassword').type('123456Mi')
        cy.get('input#secondpassword').type('123456Mi')
        cy.contains('Finalizar cadastro').click()

        cy.url().should('contain', 'listagem')
    });
});