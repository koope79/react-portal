import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PortalCreate } from "../types";

export const portalCreate: PortalCreate = (id, isShow) => ({ children }) => {
  const [portal, setPortal] = useState<HTMLElement>();

  useEffect(() => {
    if (id) {
      const portalContainer = document.getElementById(id);

      if (!portalContainer) {
        throw new Error("There is no portal container in markup");
      }

      setPortal(portalContainer);
    }
  }, []);

  return (isShow && portal) ? createPortal(children, portal) : null;
};
