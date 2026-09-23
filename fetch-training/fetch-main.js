const todoList = document.querySelector('.todo__list');
todoList.style.listStyleType = 'none';

function createTodo(todo) {
   const todoText = document.createElement('li');
   todoText.classList.add('todo__item');

   todoText.textContent = todo.id + " " + todo.title;

   return todoText
}

function printTodos(todos) {
   todoList.innerHTML = '';
   const fragment = document.createDocumentFragment();

   todos.forEach((todo) => {
      const todoItem = createTodo(todo);

      fragment.append(todoItem);
   });

   todoList.append(fragment);
};

const todos = fetch('https://jsonplaceholder.typicode.com/todos')
   .then(res => {
      if (!res.ok) {
         throw new Error("Ошибка запроса. Статус: " + res.status);
      }
      return res.json();
   })
   .then((todos) => printTodos(todos))
   .catch(error => {
      console.log(error);
   });