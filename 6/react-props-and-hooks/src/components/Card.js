import cardStyle from "./Card.module.css";
import Button from "./Button";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

function Card({ title, content, isPrimary = false }) {
  const theme = useContext(ThemeContext);
  return (
    <section className={theme ? cardStyle.light : cardStyle.dark}>
      <h1 className={isPrimary ? cardStyle.isPrimary : ""}>
        {title}
      </h1>
      <p>{content}</p>
      <Button></Button>
    </section>
  );
}

export default Card;
