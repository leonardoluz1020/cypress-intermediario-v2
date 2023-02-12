import { faker } from '@faker-js/faker'

describe('Create Project', () => {
    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login();
    })

    it('successfully', () => {
        const projet = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
        cy.gui_createProject(projet)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${projet.name}`)
        cy.contains(projet.name).should('be.visible')
        cy.contains(projet.description).should('be.visible')

    })
})