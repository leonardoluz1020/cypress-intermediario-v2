import { faker } from '@faker-js/faker'

describe('Create Project', () => {
    beforeEach(() => cy.api_deleteProjects())

    beforeEach(() => cy.login())

    it('successfully', () => {
        const projet = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }

        cy.api_createProject(projet)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.name).to.equal(projet.name)
                expect(response.body.description).to.equal(projet.description)
            })


    })
})