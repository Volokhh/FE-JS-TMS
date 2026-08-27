const createDomElement = (tag, options) => {
   const newElement = document.createElement(tag)

   if (options.className) {
      newElement.classList.add(options.className)
   }

   if (options.textContent) {
      newElement.textContent = options.textContent
   }

   if (options.placeholder) {
      newElement.placeholder = options.placeholder
   }

   if (options.name) {
      newElement.name = options.name
   }

   if (options.id) {
      newElement.id = options.id
   }

   if (options.type) {
      newElement.type = options.type
   }

   return newElement;
}

const dateBlock = () => {
   const date = document.createElement('p');
   date.classList.add('todo__item-date');

   const now = new Date();

   const day = String(now.getDate()).padStart(2, '0');
   const month = String(now.getMonth() + 1).padStart(2, '0');
   const year = now.getFullYear();

   date.textContent = `${day}.${month}.${year}`;

   return date;
};

const getFormattedDate = () => {
   const now = new Date();
   const day = String(now.getDate()).padStart(2, '0');
   const month = String(now.getMonth() + 1).padStart(2, '0');
   const year = now.getFullYear();

   return `${day}.${month}.${year}`
};

const createTask = (text) => {
   const item = createDomElement('div', {
      className: 'todo__item',
   });

   const taskWrapper = createDomElement('div', {
      className: 'todo__task-wrapper'
   });

   const btnDone = createDomElement('input', {
      className: 'todo__item-done',
      type: 'checkbox',
   });

   const itemText = createDomElement('p', {
      className: 'todo__item-text',
      textContent: text
   });

   const btnItemDelete = createDomElement('button', {
      className: 'todo__item-delete',
      textContent: '\u0078',
   });

   const date = dateBlock();

   taskWrapper.append(btnDone);
   taskWrapper.append(itemText);
   taskWrapper.append(btnItemDelete);

   item.append(taskWrapper);
   item.append(date);

   return item;
}

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


btnDelete.addEventListener('click', () => {

   const isConfirmed = confirm('Вы действительно хотите удалить все Tasks?')
   if (isConfirmed === false) {
      return;
   }

   todos = [];

   setData(todos)
   renderTodos()
});


items.addEventListener('click', (e) => {

   if (e.target.classList.contains('todo__item-delete')) {
      const targetItemToDel = e.target.closest('.todo__item');
      const idTargetItemToDel = Number(targetItemToDel.dataset.id);

      todos = todos.filter((todo) => todo.id !== idTargetItemToDel)

      setData(todos)

      renderTodos()
   }
});

items.addEventListener('click', (e) => {

   if (e.target.classList.contains('todo__item-done')) {
      const idTargetItemToChange = Number(e.target.closest('.todo__item').dataset.id);
      const todo = todos.find((todo) => todo.id === idTargetItemToChange);

      if (todo) {
         todo.isChecked = e.target.checked;
         setData(todos)
         renderTodos()
      }
   }
});




const todosLSKey = 'todos';

const getData = () => {
   const savedTodo = localStorage.getItem(todosLSKey);

   if (!savedTodo) {
      return [];
   }

   try {
      return JSON.parse(savedTodo);
   } catch (error) {
      console.log('Parsing error:', error);
      return [];
   }
};

const setData = (todos) => {
   localStorage.setItem(todosLSKey, JSON.stringify(todos));
};


let idCounter = Date.now();
const generatedId = () => {
   return idCounter++
};

let todos = [];
const savedTodos = getData();
todos = savedTodos;


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