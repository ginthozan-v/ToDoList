import React from "react";

function toDoList(props) {
  const { label } = props;

  return (
    <div className="todo_list_card">
      <label className="container">
        {label}
        <input
          type="radio"
          name="radio"
          id={label}
          onClick={() => props.complete(label)}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default toDoList;
