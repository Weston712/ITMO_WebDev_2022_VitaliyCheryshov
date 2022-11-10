class TodoView {
  static TODO_VIEW_ITEM = 'todoitem';

  static isDomElementOfType(domElement) {
    return domElement.dataset['type'] === TodoView.TODO_VIEW_ITEM;
  }

  static getSimpleView(index, vo) {
    const checked = vo.isComleted ? 'checked' : '';
    return `<li style="..." data-type="${TodoView.TODO_VIEW_ITEM}" id="${vo.id}"><input type="checkbox" id="${index}" ${checked}>${vo.title}</li>`;
  }
}

export default TodoView;
