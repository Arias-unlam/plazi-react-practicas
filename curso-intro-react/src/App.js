
import React from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de React', completed: false },
  { text: 'Llorar con la llorona', completed: true }
]

function App(props) {
  return (
    <>
      <TodoCounter />
    
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
