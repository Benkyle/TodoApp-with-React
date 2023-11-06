import React from 'react'
import ListItem from './ListItem'


function DIsplaytodo({ todos, deleteTodo, editTodo }) {
  return (
    <div>
        <p>Display TOdo</p>
            {todos.map((todo, index) => {
                return (
                  <ListItem key={index} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
                )   
            })}
    </div>
  )
}

export default DIsplaytodo
