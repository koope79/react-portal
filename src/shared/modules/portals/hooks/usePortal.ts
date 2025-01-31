import { useCallback, useMemo, useState } from "react";
import { portalCreate } from "../functions/portalCreate";
import { UsePortal } from "../types";

const usePortal: UsePortal = ({
  id,
  defaultShow = false,
}) => {
  const [isShow, setIsShow] = useState(defaultShow);

  const { show, close } = useMemo(() => ({
    show: () => {
      setIsShow(true);
    },
    close: () => {
      setIsShow(false);
    },
  }), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Portal = useCallback(portalCreate(id, isShow), [id, isShow]);

  return { Portal, isShow, show, close };
};

export default usePortal;
