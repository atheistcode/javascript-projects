import { useEffect, useState } from "react";

// a custom hook to listen to the changes in the width of an element and returns the current width
// the hook receives a ref pointing to an element
// it returns a number that represents the element width in px
export default function useWidthObserver(elem) {
  const [elemWidth, setElemWidth] = useState(0);

  const resizeObserverHandler = (entries) => {
    setElemWidth(entries[0].borderBoxSize.inlineSize);
  };

  useEffect(() => {
    let widthObserver = new ResizeObserver(resizeObserverHandler);

    if (elem && elem.current) widthObserver.observe(elem.current);

    return () => {
      widthObserver.disconnect();
    };
  }, []);

  return [elemWidth];
}
