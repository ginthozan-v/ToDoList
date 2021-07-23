import React, { useState, useEffect } from "react";
import "./App.css";
import CompletedList from "./components/completedList";
import ToDoList from "./components/toDoList";

import { FaAlignLeft } from "react-icons/fa";

function App() {
  const [todo, setToDo] = useState([]);
  const [input, setInput] = useState("");
  const [completedTask, setCompletedTask] = useState([]);
  const [quote, setQuote] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    setToDo([...todo, input]);
    setInput("");
  };

  const completeTask = (value) => {
    const index = todo.indexOf(value);
    if (index > -1) {
      todo.splice(index, 1);
    }
    setCompletedTask([...completedTask, value]);
  };

  const removeCompleteTask = (value) => {};

  const clearCompleted = () => {
    setCompletedTask([]);
  };

  useEffect(() => {
    const fetchQuote = async () => {
      await fetch(`https://type.fit/api/quotes`)
        .then((res) => res.json())
        .then((data) => {
          var randomItem = data[Math.floor(Math.random() * data.length)];
          setQuote(randomItem);
        });
    };

    fetchQuote();
  }, []);

  return (
    <div className="App">
      <div className="app_card">
        <h2>TODO LIST</h2>

        <div className="quotes">
          <p>{quote.text}</p>
          <h6>-{quote.author}</h6>
        </div>

        <div className="list_doDo">
          {todo.map((list, i) => (
            <ToDoList key={i} label={list} complete={completeTask} />
          ))}
        </div>

        <div className="list_completed">
          {completedTask.length > 0 ? (
            <div>
              <h5>Completed</h5>
              <a href="#" onClick={clearCompleted}>
                <h5>Clear completed</h5>
              </a>
            </div>
          ) : null}
          {completedTask.map((list, i) => (
            <CompletedList
              key={i}
              label={list}
              removeCompleted={removeCompleteTask}
            />
          ))}
        </div>

        <div className="todo_input">
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="write a new task"
            />
            <button type="submit" onClick={addTask}>
              <FaAlignLeft />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
