/// <reference types="cypress" />

describe('Editar objetos', () => {
    const OBJETO = require('../fixtures/cadastrar_objeto_dados.json')

    it('Editar um objeto', () => {
        const NOVO_OBJETO = require('../fixtures/atualizar_objeto_dados.json')
        cy.adicionarUmObjeto(OBJETO).then((response_post) => {
            expect(response_post.status).equal(200)
            cy.alterarUmObjeto(response_post.body.id, NOVO_OBJETO).then((response_edit) => {
                expect(response_edit.status).equal(200)
                expect(response_edit.body.id).equal(response_post.body.id)
                expect(response_edit.body.name).equal(NOVO_OBJETO.name)
                expect(response_edit.body.data).to.deep.equal({
                    "year": 2026,
                    "price": 2000.0,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "2 TB"
                })
            })
        })     
    })

    it('Editar um objeto sem informar o body', () => {
        cy.adicionarUmObjeto(OBJETO).then((response_post) => {
            expect(response_post.status).equal(200)

           cy.alterarUmObjeto(response_post.body.id, '').then((response_edit) => {
                expect(response_edit.status).equal(400)
                expect(response_edit.body.error).equal('400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.')
            })
        })     
    })
})