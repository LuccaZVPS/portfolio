import { useEffect, useRef } from "react";

interface props {
  children: string;
}
export const Typing = ({ children }: props) => {
  const element = useRef(null as unknown as HTMLDivElement);
  useEffect(() => {
    const parent = element.current.parentNode as HTMLParagraphElement;
    parent.style.minWidth = `${parent.offsetWidth}px`;
    parent.style.height = `${parent.offsetHeight}px`;
    element.current.innerText = "";
    let counter = 0;
    const interval = setInterval(() => {
      if (counter > children.length - 1) {
        return clearInterval(interval);
      }
      element.current.innerHTML += children[counter];
      counter++;
    }, 20);
  }, []);
  return (
    <span
      className="after:absolute relative after:h-full blink after:border-primary after:border-solid after:border-r-2"
      ref={element}
    >
      {children}
    </span>
  );
};
