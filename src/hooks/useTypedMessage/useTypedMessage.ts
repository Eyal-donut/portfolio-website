import { useState, useEffect } from "react";
import waitFunction from "./waitFunction";

export const useTypedMessage = (message: string) => {
  const [typedMessage, setTypedMessage] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const CURSOR_INTERVAL_TIME = 500;

  useEffect(() => {
    setTypedMessage("");
    if (message) {
      (async () => {
        let visibleMessage = "";
        setShowCursor(true);
        for (let i = 0; i < message.length; i++) {
          await waitFunction(100);
          visibleMessage = `${visibleMessage}${message[i]}`;
          setTypedMessage(visibleMessage);
        }
        setIsTyping(false)
      })();
    }
  }, [message]);

  useEffect(() => {
    if (!isTyping) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, CURSOR_INTERVAL_TIME);
      return () => {
        clearInterval(cursorInterval);
      };
    }
  }, [isTyping]);

  return { typedMessage, showCursor };
};
