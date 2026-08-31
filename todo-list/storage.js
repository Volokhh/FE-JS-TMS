export const todosLSKey = 'todos';

export const getData = () => {
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

export const setData = (todos) => {
   localStorage.setItem(todosLSKey, JSON.stringify(todos));
};