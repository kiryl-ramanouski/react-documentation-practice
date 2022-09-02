import React, { useRef } from 'react';

export const UncontrolledForm = () => {
  const input = useRef();
  const textarea = useRef();
  const select = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      input: input.current.value,
      textarea: textarea.current.value,
      select: select.current.value,
    });
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      Regular input
      <input ref={input} type="text" />
      textarea
      <textarea ref={textarea}></textarea>
      select
      <select ref={select}>
        <option value="red">red</option>
        <option value="green">green</option>
      </select>
      <button type="submit">submit</button>
    </form>
  );
};
