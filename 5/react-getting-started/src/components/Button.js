import { useState } from "react";

function Button({ children }) {
  const [count, setCount] = useState(0);
  return (
    <button
      className="btn"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {children} {count}
    </button>
  );
}

export default Button;
