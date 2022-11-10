describe('Test - todo creation', () => {
  before(() => {});

  it('goto index page enter todo text and press create', () => {
    const TEST_TODO_TEXT = 'New Todo';
    cy.visit('http://localhost:8089');
    cy.get('body').then(() => {});
    cy.get('#inpTodoTitle').should('exist').should('contain.text', '').type(TEST_TODO_TEXT);
    cy.get('#btnCreateTodo').click();
    // expect(cy.get('#listOfTodos')).to.have.text(TEST_TODO_TEXT);
    cy.get('#listOfTodos').should('contain.text', TEST_TODO_TEXT);
  });
});
