import React, { useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

function InputField({ todo, setTodo, handleAdd }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur()
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a task"
          className="inputBox"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="inputSubmit" type="submit">
          Go
        </button>
      </form>
    </>
  );
}

export default InputField;
