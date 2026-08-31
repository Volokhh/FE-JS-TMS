export const createDomElement = (tag, options) => {
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


export const dateBlock = () => {
   const date = document.createElement('p');
   date.classList.add('todo__item-date');

   const now = new Date();

   const day = String(now.getDate()).padStart(2, '0');
   const month = String(now.getMonth() + 1).padStart(2, '0');
   const year = now.getFullYear();

   date.textContent = `${day}.${month}.${year}`;

   return date;
};


export const createTask = (text) => {
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