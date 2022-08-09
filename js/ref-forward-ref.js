import React, { useRef } from "react";

function TextInput() {
  const ref = useRef();

  const handleClick = () => {
    console.log(ref.current);
    ref.current.focus();
  };

  return (
    <>
      <input type="text" ref={ref}></input>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

const TextInput2 = React.forwardRef((props, ref) => {
  return (
    <>
      <button ref={ref} className="FancyButton">
        {props.children}
      </button>
    </>
  );
});

export { TextInput, TextInput2 };
