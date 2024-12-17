import React, { useState } from "react";
import "./form.css";
const Form = ({ students, setStudent }) => {
  const [inputname, setInputName] = useState("");
  const [inputage, setInputAge] = useState(0);
  function Submit(e) {
    e.preventDefault();
    if (inputname && inputage) {
      const student = {
        id: Date.now(),
        inputname,
        inputage,
      };
      setStudent([...students, student]);
      setInputName("");
      setInputAge("");
      setGpa(0);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter the name"
        value
        onChange={(e) => {
          setInputName(e.value.trim());
        }}
      />
      <input
        type="text"
        placeholder="age"
        onChange={(e) => {
          setInputAge(+e.value.trim());
        }}
      />
      <button onClick={Submit}>Submit</button>
    </div>
  );
};

export default Form;
