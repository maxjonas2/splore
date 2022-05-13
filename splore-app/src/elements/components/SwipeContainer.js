import React, { useEffect, useRef } from "react";
import { useObserver } from "../../hooks";

const SwipeContainer = ({ children, centeredItems, ...props }) => {
  const containerRef = useRef();
  const textRef = useRef();

  const elementVisible = useObserver(textRef);

  useEffect(() => {
    if (elementVisible) {
      console.log("element VISIBLE");
      console.log(textRef.current);
    } else {
      console.log("element out of sight");
    }
  });

  return (
    <div
      ref={containerRef}
      className={"swipe-container" + (centeredItems ? " centered-items" : "")}
      {...props}
    >
      {children}
      <p ref={textRef}>Whatever</p>
    </div>
  );
};

export default SwipeContainer;
