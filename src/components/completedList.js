import React from "react";

function completedList(props) {
  const { label } = props;

  return (
    <>
      <div className="completed_list_card">
        <label className="label">{label}</label>
        <button onClick={props.removeCompleted}>X</button>
      </div>
    </>
  );
}

export default completedList;
