import { useEffect, useRef } from "react";

interface props {
  children: string;
}
export const Typing = ({ children }: props) => {
  const estiloCSS = document.createElement("style");
  estiloCSS.innerHTML = `
  .bar::before {
    animation: type 2.5s steps(${children.length}) forwards, typing 0.5s 3s step-end infinite alternate;

  }
  @keyframes typing {
    50% {
      border-color: transparent;
    }
  }

  @keyframes type {
    0% {
      left: 0;
      width:100%;
    }
    100% {
      left: 100%;
      width:0%;

    }
  }
  
}
`;
  useEffect(() => {
    document.head.appendChild(estiloCSS);
  }, []);
  const element = useRef(null as unknown as HTMLSpanElement);
  return (
    <span
      className="bar dark:before:bg-dbackground before:absolute relative before:border-l-[2px] before:border-solid left-0 before:border-primary before:h-full before:w-full before:bg-background "
      ref={element}
    >
      {children}
    </span>
  );
};
