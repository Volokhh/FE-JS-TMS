import { createDomElement, dateBlock, createTask } from './dom.js'
import { createHandlers } from './handlers.js';
import { todosLSKey, getData, setData } from './storage.js';

const getFormattedDate = () => {
   const now = new Date();
   const day = String(now.getDate()).padStart(2, '0');
   const month = String(now.getMonth() + 1).padStart(2, '0');
   const year = now.getFullYear();

   return `${day}.${month}.${year}`
};

const todo = createDomElement('div', {
   className: 'todo',
});

const container = createDomElement('div', {
   className: 'todo__container',
});

const options = createDomElement('div', {
   className: 'todo__options',
});

const btnDelete = createDomElement('button', {
   className: 'todo__btn-delete',
   textContent: 'Delete All'
});

const taskContent = createDomElement('textarea', {
   className: 'todo__task-content',
   placeholder: 'Enter todo...'
});

const btnAdd = createDomElement('button', {
   className: 'todo__btn-add',
   textContent: 'Add'
});

const items = createDomElement('div', {
   className: 'todo__items',
});

options.append(btnDelete);
options.append(taskContent);
options.append(btnAdd);

container.append(options);
container.append(items);

todo.append(container);

root.append(todo);



let idCounter = Date.now();
const generatedId = () => {
   return idCounter++
};

let todos = [];
todos = getData();


const renderTodos = () => {
   items.innerHTML = '';

   const fragment = document.createDocumentFragment();

   todos.forEach(todo => {
      const item = createTask(todo.text);

      item.dataset.id = todo.id;

      const checkbox = item.querySelector('.todo__item-done');
      const text = item.querySelector('.todo__item-text');

      checkbox.checked = todo.isChecked;

      if (todo.isChecked) {
         item.style.backgroundColor = 'rgb(173, 208, 179)';
         text.style.textDecoration = 'line-through';
      }

      item.querySelector('.todo__item-date').textContent = todo.date;

      fragment.append(item);
   });

   items.append(fragment);
};

renderTodos();



const { handleBtnDelete, handleIteTomDel, handleBtnDone } = createHandlers(todos, renderTodos);

btnDelete.addEventListener('click', handleBtnDelete);
items.addEventListener('click', handleIteTomDel);
items.addEventListener('click', handleBtnDone);
btnAdd.addEventListener('click', () => {

   const itemText = taskContent.value;

   if (itemText.trim() === '') {
      return;
   }

   const newItem = createTask(itemText)

   items.append(newItem);
   taskContent.value = '';

   const newTodo = {
      id: generatedId(),
      text: itemText,
      date: getFormattedDate(),
      isChecked: false,
   }

   todos.push(newTodo);

   setData(todos)

   renderTodos()
});






