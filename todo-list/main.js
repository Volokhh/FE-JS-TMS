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

const btnDone = createDomElement('input', {
   className: 'todo__item-done',
   //value: '\u2713',
   type: 'checkbox',
});

const itemText = createDomElement('p', {
   className: 'todo__item-text',
   textContent: 'Todo text'
});

const btnItemDelete = createDomElement('button', {
   className: 'todo__item-delete',
   textContent: '\u0078',
});

const date = dateBlock();

const item2 = createDomElement('div', {
   className: 'todo__item',
});

const taskWrapper2 = createDomElement('div', {
   className: 'todo__task-wrapper'
});

const btnDone2 = createDomElement('input', {
   className: 'todo__item-done',
   //value: '\u2713',
   type: 'checkbox',
});

const itemText2 = createDomElement('p', {
   className: 'todo__item-text',
   textContent: 'Todo text'
});

const btnItemDelete2 = createDomElement('button', {
   className: 'todo__item-delete',
   textContent: '\u0078',
});

const date2 = dateBlock();


options.append(btnDelete);
options.append(taskContent);
options.append(btnAdd);

taskWrapper.append(btnDone);
taskWrapper.append(itemText);
taskWrapper.append(btnItemDelete);

item.append(taskWrapper);
item.append(date);

taskWrapper2.append(btnDone2);
taskWrapper2.append(itemText2);
taskWrapper2.append(btnItemDelete2);

item2.append(taskWrapper2);
item2.append(date2);

items.append(item);
items.append(item2);

container.append(options);
container.append(items);

todo.append(container);

root.append(todo);

btnAdd.addEventListener('click', () => {

   const itemText = taskContent.value;

   if (itemText.trim() === '') {
      return;
   }

   const newItem = createDomElement('div', {
      className: 'todo__item',
   });

   const newTaskWrapper = createDomElement('div', {
      className: 'todo__task-wrapper'
   });

   const newBtnDone = createDomElement('input', {
      className: 'todo__item-done',
      //value: '\u2713',
      type: 'checkbox',
   });

   const newItemText = createDomElement('p', {
      className: 'todo__item-text',
      textContent: itemText
   });

   const newBtnItemDelete = createDomElement('button', {
      className: 'todo__item-delete',
      textContent: '\u0078',
   });

   const newDate = dateBlock();

   newTaskWrapper.append(newBtnDone);
   newTaskWrapper.append(newItemText);
   newTaskWrapper.append(newBtnItemDelete);

   newItem.append(newTaskWrapper);
   newItem.append(newDate);

   items.append(newItem);

   taskContent.value = ' ';
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
})


items.addEventListener('click', (e) => {

   if (e.target.classList.contains('todo__item-delete')) {
      const targetItemToDel = e.target.closest('.todo__item');
      targetItemToDel.remove();
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
   }
})
