import { FC } from "react";
import { useTypedMessage } from "../../../../hooks/useTypedMessage/useTypedMessage";
import classes from "./TypedMessage.module.css";

interface TypedMessageProps {
  message: string;
}

const TypedMessage: FC<TypedMessageProps> = ({ message }) => {
  const { typedMessage, showCursor } = useTypedMessage(message);

  return (
    <h2 className={classes.typedMessage}>
      {typedMessage}
      <span
        style={{
          color: showCursor ? "black" : "transparent",
        }}
      >
        |
      </span>
    </h2>
  );
};

export default TypedMessage;
