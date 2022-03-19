import { useState, useEffect } from "react";
import buttonStyle from "./Button.module.css";

function Button() {
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setCount(count + 1);
  };

  //side effect - hieu ung phu
  useEffect(() => {
    console.log("Da render xong");
  }, [count]);
  return (
    <button className={buttonStyle.normal} onClick={onClickHandler}>
      +{count}
    </button>
  );
}
export default Button;
