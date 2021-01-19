import React from "react";
import "./../App.css";

const TodoList = (props) => {
  console.log(props);
  const handleToggle = (id) => {
    props.dispatch({ type: "COMPLETED", id: id });
  };

  return (
    <div className="todoArea">
      {props.state.map((todo) => {
        return (
          <div
            className={`todo${todo.completed ? " completed" : ""}`}
            onClick={() => handleToggle(todo.id)}
            key={todo.id}
          >
            <p>{todo.item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
