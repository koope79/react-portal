import React from "react";
import { Button, ExampleModal, WrapperModal } from "src/components";
import { usePortal } from "src/shared/modules/portals";
import "./App.css";

export default function App() {
  const { Portal, open, close } = usePortal({ id: "_base_portal" });

  console.log("render App");

  return (
    <>
      <div className={"App"}>
        <div id={"_base_portal"}></div>
        <Portal>
          <WrapperModal onClose={close}>
            <ExampleModal />
          </WrapperModal>
        </Portal>
        <Button onClick={open}>Accept</Button>
      </div>
    </>
  );
}
