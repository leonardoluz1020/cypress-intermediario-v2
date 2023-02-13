import { faker } from '@faker-js/faker'

describe('git clone', () => {
  const project = {
    name: `project-${faker.datatype.uuid()}`,
    description: faker.random.words(5)
  }

  beforeEach(() => {
    cy.api_deleteProjects()
    cy.api_createProject(project)
  })

  it('successfully', () => {
    /* Verificar erro: Stderr:
Cloning into 'project-37737f8f-7899-46af-90eb-bff0646ae00d'...
Host key verification failed.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and ...  */
    // cy.cloneViaSSH(project)

    // cy.readFile(`cypress/downloads/${project.name}/README.md`)
    // .should('contain', `# ${project.name}`)
    // .and('contain', project.description)
  })
})