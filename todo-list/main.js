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

const item = createDomElement('div', {
   className: 'todo__item',
});

const taskWrapper = createDomElement('div', {
   className: 'todo__task-wrapper'
});

const btnDone = createDomElement('button', {
   className: 'todo__item-done',
   textContent: '\u2713'
});

const itemText = createDomElement('p', {
   className: 'todo__item-text',
   textContent: 'Todo text'
});

const btnItemDelete = createDomElement('button', {
   className: 'todo__item-delete',
   textContent: '\u0078'
});

const date = dateBlock();

const item2 = createDomElement('div', {
   className: 'todo__item',
});

const taskWrapper2 = createDomElement('div', {
   className: 'todo__task-wrapper'
});

const btnDone2 = createDomElement('button', {
   className: 'todo__item-done',
   textContent: '\u2713'
});

const itemText2 = createDomElement('p', {
   className: 'todo__item-text',
   textContent: 'Todo text'
});

const btnItemDelete2 = createDomElement('button', {
   className: 'todo__item-delete',
   textContent: '\u0078'
});

const date2 = dateBlock();


options.appendChild(btnDelete);
options.appendChild(taskContent);
options.appendChild(btnAdd);

taskWrapper.appendChild(btnDone);
taskWrapper.appendChild(itemText);
taskWrapper.appendChild(btnItemDelete);

item.appendChild(taskWrapper);
item.appendChild(date);

taskWrapper2.appendChild(btnDone2);
taskWrapper2.appendChild(itemText2);
taskWrapper2.appendChild(btnItemDelete2);

item2.appendChild(taskWrapper2);
item2.appendChild(date2);

container.appendChild(options);
container.appendChild(item);
container.appendChild(item2);

todo.appendChild(container);

root.appendChild(todo);