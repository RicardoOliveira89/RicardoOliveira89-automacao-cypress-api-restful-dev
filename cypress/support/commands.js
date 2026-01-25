Cypress.Commands.add('buscarObjetoEspecifico', (id_objeto) => { 
    cy.request({
            method: 'GET',
            url: `/objects/${id_objeto}`,
            failOnStatusCode: false
    }).then((resposta) => { return resposta})
})

Cypress.Commands.add('buscarTodosOsObjetos', () => { 
    cy.request({
            method: 'GET',
            url: `/objects`,
            failOnStatusCode: false
    }).then((resposta) => { return resposta})
})

Cypress.Commands.add('buscarTresObjetos', (id_1, id_2, id_3) => { 
    cy.request({
            method: 'GET',
            url: `/objects?id=${id_1}&id=${id_2}&id=${id_3}`,
            failOnStatusCode: false
    }).then((resposta) => { return resposta})
})

Cypress.Commands.add('adicionarUmObjeto', (payload) => {
    cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: payload
    }).then((resposta) => {return resposta})
})

Cypress.Commands.add('apagarObjeto', (id_objeto) => {
    cy.request({
            method: 'DELETE',
            url: `/objects/${id_objeto}`,
            failOnStatusCode: false
    }).then((resposta) => {return resposta})
})

Cypress.Commands.add('alterarUmDado', (id_objeto, payload) => {
    cy.request({
            method: 'PATCH',
            url: `/objects/${id_objeto}`,
            failOnStatusCode: false,
            body: payload
    }).then((resposta) => {resposta})
})

Cypress.Commands.add('alterarUmObjeto', (id_objeto, payload) => {
    cy.request({
            method: 'PUT',
            url: `/objects/${id_objeto}`,
            failOnStatusCode: false,
            body: payload
    }).then((resposta) => {return resposta})
})