import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.moderninput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter todo item"
        />
        <button className={styles.modernbtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
