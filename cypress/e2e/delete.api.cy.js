/// <reference types="cypress" />

describe('Excluir objetos', () => {
    const OBJETO = require('../fixtures/cadastrar_objeto_dados.json')

    it('Excluir um objeto cadastrado', () => {
        cy.adicionarUmObjeto(OBJETO).then((response_post) => {
            expect(response_post.status).equal(200)
            cy.apagarObjeto(response_post.body.id).then((response_del) => {
                expect(response_del.status).equal(200)
                expect(response_del.body.message).equal(`Object with id = ${response_post.body.id} has been deleted.`)
            })
        })     
    })

    it('Excluir um objeto não cadastrado', () => {
        const ID_INEXISTENTE = 1111111111
        cy.apagarObjeto(ID_INEXISTENTE).then((response_del) => {
            expect(response_del.status).equal(404)
            expect(response_del.body.error).equal(`Object with id = ${ID_INEXISTENTE} doesn't exist.`)
        })
    })  
})