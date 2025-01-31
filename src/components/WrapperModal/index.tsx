import React, { useEffect, useRef, useState } from "react";
import { WrapperModalComp } from "./types";
import "./styles.css";

const WrapperModal: WrapperModalComp = ({ onClose, children }) => {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);

  const closeModal = () => {
    ref.current && ref.current.classList.add("wrapperModalClose");
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        onClose();
      }, 300);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [visible, onClose]);

  return (
    <div ref={ref} className="wrapperModal">
      <div className={"backdrop"}>
        <div className={"container"}>
          <button onClick={closeModal}>X</button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default WrapperModal;
