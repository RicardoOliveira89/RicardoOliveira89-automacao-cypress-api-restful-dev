/// <reference types="cypress" />

describe('Editar parcialmente objetos', () => {
    const OBJETO = require('../fixtures/cadastrar_objeto_dados.json')

    it('Editar o nome de um objeto', () => {
        const NOME = {
                    "name": "Apple MacBook Pro 19 - Ricardo Oliveira",
        }
        cy.adicionarUmObjeto(OBJETO).then((response_post) => {
            expect(response_post.status).equal(200)
            cy.alterarUmDado(response_post.body.id, NOME).then((response_edit) => {
                expect(response_edit.status).equal(200)
                expect(response_edit.body.id).equal(response_post.body.id)
                expect(response_edit.body.name).equal('Apple MacBook Pro 19 - Ricardo Oliveira')
                expect(response_edit.body.data).to.deep.equal({
                    "year": 2026,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                })
            })
        })     
    })

    it('Editar o preço de um objeto', () => {
        const PRECO = {
                "data": {
                    "price": 2500.00
                }
        }
        cy.adicionarUmObjeto(OBJETO).then((response_post) => {
            expect(response_post.status).equal(200)
            cy.alterarUmDado(response_post.body.id, PRECO).then((response_edit) => {
                expect(response_edit.status).equal(200)
                expect(response_edit.body.id).equal(response_post.body.id)
                expect(response_edit.body.data).to.deep.equal({
                    "price": 2500.00,
                })
            })
        })     
    })
})