/// <reference types="Cypress"/>
import loc from "../support/locatorsBEE";

describe("Fluxo de Armazenamento", function () {

    it('Armazenando produto', function(){
        cy.visit("http://192.168.50.121:8481/login");
        cy.get(loc.LOGIN.USER).type("cy.automacao");
        cy.get(loc.LOGIN.SENHA).type("Cypress01@");
        cy.get(loc.LOGIN.BTN_LOGIN).click();
        cy.get('h4.mb-3').should("contain", "Sua Área de Trabalho");
    // 5656565435 111202327 111202305
        cy.contains("a", "Movimentação").find("span").click();
        cy.contains("span", "Recebimento").parent("a").click();
        cy.contains("span", "Monitor de Recebimento").parent("a").click(); 
        cy.get(':nth-child(7) > select').select('Em armazenagem')
        
        cy.contains("span", "Armazenamento").parent("a").click(); 
        cy.get('.input-group > .form-control').type('111202303')
        cy.get('.btn-primary > .fa').click()
        cy.get('.page-header').should('contain', 'Armazenamento')
        cy.get('.input-group #0').click().type('100').wait(500).type('{enter}')
        cy.get('.input-group-append > .btn-primary').click()
        cy.get('.rt-tbody > :nth-child(3)').click()
    })

 
})