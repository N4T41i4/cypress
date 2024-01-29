///<reference types="cypress"/>

describe('Teste',()=>{
    beforeEach(()=>{
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })
    it('inclusão',()=>{
        cy.get("input[type='text']").type('Natalia')
        cy.get("input[type='email']").type('natalia@gmail.com')
        cy.get("input[type='tel']").type('328484848')
        cy.get('.adicionar').click()
    })
    it('alteração',()=>{
        cy.get('.edit').last().click()
        cy.get("input[type='text']").click().clear().type('Daniela')
        // cy.get("button[type='submit']").click()
        cy.get('.alterar').click()
        cy.get('.adicionar').click()
      
        
    })
    it('remoção de um contato',()=>{
        cy.get(' .delete').last().click()
    })
})