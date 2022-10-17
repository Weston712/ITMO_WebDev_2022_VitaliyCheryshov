const domInpTodoTitle = document.getElementById('inpTodoTitle');
const domBtnCreateTodo = document.getElementById('btnCreateTodo');
const domListOfTodos = document.getElementById('listOfTodos');

domBtnCreateTodo.addEventListener('click', onBtnCreateTodoClick);

const LOCAL_LIST_OF_TODOS = 'listOfTodos';

class TodoVO {
  constructor(id, title, date = new Date()) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.isCompleted = false;
  }
}

const listOfTodos = JSON.parse (localStorage.getItem(LOCAL_LIST_OF_TODOS));
console.log(listOfTodos);

function onBtnCreateTodoClick(event) {
  // console.log('onBtnCreateTodo -> handle(ckick)', event);
  const todoTitleValueFromDomInput = domInpTodoTitle.value;
  // console.log('onBtnCreateTodo -> domInpTodoTitle:', todoTitleValueFromDomInput);
}

const canCreateTodo = validateTodoInputTitleValue(todoTitleValueFromDomInput);

if (canCreateTodo) {
  const todoId = createTodoVO(todoTitleValueFromDomInput);
  listOfTodos.push(todoId);
  localStorage.setItem('listOfTodos', JSON.stringify(listOfTodos));
  renderTodoListInContainer(listOfTodos, domListOfTodos);
}

function renderTodo(list, container) {
  let output = '';
  for (let index in listOfTodos) {
    output += `<li>${listOfTodos[index].title}</li>`;
  }
  container.innerHTML = output;
}

function validateTodoInputTitleValue(value) {
  const isInputValueString = typeof value === 'string';
  const todoTitleValueFromDomInput = isNaN(parseInt(value));
  const canCreateTodo = isInputValueString && isInputValueString && value.length > 0;
  console.log('validateTodoInputTitleValue -> result', {
    result,
    isInputValueString,
    isInputValueNotNumber,
  });
  return result;
}

domBtnCreateTodo.addEventListener('click', (e) => {
  console.log('> domBtnCreateTodo -> handle(click)', e);
  const todoTitleValueFromDomInput = domInpTodoTitle.value;
  console.log('> domBtnCreateTodo -> todoInputTitleValue:', todoTitleValueFromDomInput);
});

function createTodoVO(title) {
  const todoId = Date.now().toString();
  const todoVO = new TodoVO(todoId, title);
  return todoId;
}
