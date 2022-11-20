describe('Test - todo creation', () => {
  before(() => {
    cy.visit('http://127.0.0.1:8089');
  });

  it('goto index page enter todo text and press create', () => {
    const TEST_TODO_TEXT = 'New Todo';

    cy.get('body').then(() => {});
    cy.get('#inpTodoTitle').should('exist').should('contain.text', '').type(TEST_TODO_TEXT);
    cy.get('#btnCreateTodo').click();
    // expect(cy.get('#listOfTodos')).to.have.text(TEST_TODO_TEXT);
    cy.get('#listOfTodos').should('contain.text', TEST_TODO_TEXT);
  });
});
