import React, { useState } from 'react';

export const ControlledForm = () => {
  const [input, setInput] = useState('');
  const [textarea, setTextarea] = useState('');
  const [select, setSelect] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ input: input, textarea: textarea, select: select });
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      Regular input
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      Text area
      <textarea
        type="text"
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
      />
      Select
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="red">red</option>
        <option value="green">green</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};
