import React from 'react'

function ListItem({todo, deleteTodo, editTodo}) {
  return (
   <div>
   <div className='list-container'>
     <p className='todo-p'>{todo?.text}</p>
     <div>
       <button className='delete-btn' onClick={() => deleteTodo(todo.id)}>Del</button>
       <button className='update-btn' onClick={() => editTodo(todo?.id)}>Edit</button>
     </div>
   </div>  
   
 </div>
  )
}

export default ListItem
