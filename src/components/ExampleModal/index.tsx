import React, { useState } from "react";
import { useEvent } from "src/shared/hooks/useEvent";
import { Button, WrapperModal } from "src/components";
import { ExampleModalComp } from "./types";
import { usePortal } from "src/shared/modules/portals";

const ExampleModal: ExampleModalComp = () => {
  const [value, setValue] = useState("");

  const { Portal, show, close } = usePortal({ id: "_base_portal" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = useEvent(() => {
    console.log(value);
    show();
  });

  console.log("re-render ExampleModal");

  return (
    <>
      <h1>Modal title</h1>
      <p>Some text</p>
      <input value={value} onChange={onChange} />
      <Button onClick={onClick}>Send</Button>
      <Portal>
        <WrapperModal onClose={close}>
          <h1>SECOND MODAL</h1>
        </WrapperModal>
      </Portal>
    </>
  );
};

export default ExampleModal;
