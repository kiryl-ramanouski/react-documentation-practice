import React, { forwardRef, useImperativeHandle, useRef } from 'react';

function FancyInput(ref, props) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return <input ref={inputRef} type="text" />;
}

// eslint-disable-next-line no-func-assign
FancyInput = forwardRef(FancyInput);

export default FancyInput;
