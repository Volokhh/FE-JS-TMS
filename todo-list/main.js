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

   currentState();
});


btnDelete.addEventListener('click', () => {

   const isConfirmed = confirm('Вы действительно хотите удалить все Tasks?')
   if (isConfirmed === false) {
      return;
   }

   const allItemsToDel = document.querySelectorAll('.todo__item');

   allItemsToDel.forEach((item) => {
      item.remove();
   });

   setData([]);
})


items.addEventListener('click', (e) => {

   if (e.target.classList.contains('todo__item-delete')) {
      const targetItemToDel = e.target.closest('.todo__item');
      targetItemToDel.remove();

      currentState();
   };
})

items.addEventListener('click', (e) => {

   if (e.target.classList.contains('todo__item-done')) {
      const targetItemToChange = e.target.closest('.todo__item');
      const targetTextToChange = targetItemToChange.querySelector('.todo__item-text');



      if (e.target.checked) {
         targetItemToChange.style.backgroundColor = 'rgb(173, 208, 179)';
         targetTextToChange.style.textDecoration = 'line-through';

      } else {
         targetItemToChange.style.backgroundColor = '';
         targetTextToChange.style.textDecoration = '';
      }

      currentState();
   }
})




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

const currentState = () => {
   const todos = [];
   const items = document.querySelectorAll('.todo__item');

   items.forEach((item) => {
      if (!item.dataset.id) {
         item.dataset.id = generatedId();
      }
      const id = Number(item.dataset.id);
      const date = item.querySelector('.todo__item-date').textContent;
      const text = item.querySelector('.todo__item-text').textContent;
      const isChecked = item.querySelector('.todo__item-done').checked;


      todos.push({
         id: id,
         date: date,
         text: text,
         isChecked: isChecked
      });
   });
   setData(todos)
}


const renderTodos = () => {

   const todos = getData();

   items.innerHTML = '';

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

      items.append(item);
   });
};

renderTodos();