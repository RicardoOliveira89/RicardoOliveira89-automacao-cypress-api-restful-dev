/// <reference types="cypress" />

describe('Cadastrar objetos', () => {
    const OBJETO = require('../fixtures/cadastrar_objeto_dados.json')

    it('Cadastrar um objeto', () => {
        cy.adicionarUmObjeto(OBJETO).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            expect(response.body.name).equal(OBJETO.name)
        })
    })

    it('Cadastrar um objeto sem informações', () => {
        cy.adicionarUmObjeto('').then((response) => {
            expect(response.status).equal(400)
            expect(response.body.error).equal('400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.')
        })
    })
})