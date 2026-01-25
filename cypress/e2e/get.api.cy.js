/// <reference types="cypress" />

describe('Buscar objetos', () => {
    it('Buscar um objeto específico', () => {
        const ID_OBJETO = '7'
        cy.buscarObjetoEspecifico(ID_OBJETO).then((response) => {
            expect(response.status).equal(200)
            expect(response.body).not.empty
            expect(response.body.id).equal('7')
            expect(response.body.name).equal('Apple MacBook Pro 16')
            expect(response.body.data).to.deep.equal({
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            })
        })
    })

    it('Buscar um objeto não cadastrado', () => {
        const ID_OBJETO = '111111111'
        cy.buscarObjetoEspecifico(ID_OBJETO).then((response) => {
            expect(response.status).equal(404)
            expect(response.body.error).equal(`Oject with id=${ID_OBJETO} was not found.`)
        })
    })

    it('Listar todos os objetos', () => {
        cy.buscarTodosOsObjetos().then((response) => {
            expect(response.status).equal(200)
            expect(response.body).not.empty
        })
    })

    it('Buscar alguns objetos', () => {
        const ID_1 = '3'
        const ID_2 = '5'
        const ID_3 = '10'
        cy.buscarTresObjetos(ID_1, ID_2, ID_3).then((response) => {
            expect(response.status).equal(200)
            expect(response.body).not.empty
            expect(response.body[0].id).equal(ID_1)
            expect(response.body[1].id).equal(ID_2)
            expect(response.body[2].id).equal(ID_3)
            expect(response.body[0].data).to.deep.equal({
                "color": "Cloudy White",
                "capacity GB": 512
            })
            expect(response.body[1].data).to.deep.equal({
                "price": 689.99,
                "color": "Brown"
            })
            expect(response.body[2].data).to.deep.equal({
                "Capacity": "64 GB",
                "Screen size": 7.9
            })
        })
    })
})