import { useEffect, useState } from "react";
import { isServer } from "./utils";

const useWindowScroll = (): State => {
  const [state, setState] = useState<State>({
    x: isServer ? 0 : window.pageXOffset,
    y: isServer ? 0 : window.pageYOffset
  });

  useEffect(() => {
    const setScrollPosition = () => {
      setState({
        x: window.pageXOffset,
        y: window.pageYOffset
      });
    };

    window.addEventListener("scroll", setScrollPosition, {
      capture: false,
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", setScrollPosition);
    };
  }, []);

  return state;
};

export default useWindowScroll;

interface State {
  x: number;
  y: number;
}
