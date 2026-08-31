
import { setData } from "./storage.js";

export const createHandlers = (todos, renderTodos) => {

   function handleBtnDelete() {

      const isConfirmed = confirm('Вы действительно хотите удалить все Tasks?')
      if (isConfirmed === false) {
         return;
      }

      todos.length = 0;

      setData(todos)
      renderTodos()
   };

   function handleIteTomDel(e) {

      if (e.target.classList.contains('todo__item-delete')) {
         const targetItemToDel = e.target.closest('.todo__item');
         const idTargetItemToDel = Number(targetItemToDel.dataset.id);

         const index = todos.findIndex(
            (todo) => todo.id === idTargetItemToDel
         );

         todos.splice(index, 1);

         setData(todos)

         renderTodos()
      }
   };

   function handleBtnDone(e) {

      if (e.target.classList.contains('todo__item-done')) {
         const idTargetItemToChange = Number(e.target.closest('.todo__item').dataset.id);
         const todo = todos.find((todo) => todo.id === idTargetItemToChange);

         if (todo) {
            todo.isChecked = e.target.checked;
            setData(todos)
            renderTodos()
         }
      }
   };

   return {
      handleBtnDelete,
      handleIteTomDel,
      handleBtnDone,
   };
}
