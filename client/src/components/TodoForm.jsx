import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter new todo..."
        className="input"
        onChange={handleChange}
        value={text}
      />
    </form>
  );
};

export default TodoForm;
