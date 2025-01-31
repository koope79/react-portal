import { FC, PropsWithChildren } from "react";

export type WrapperModalComp = FC<
  PropsWithChildren<{
    onClose: () => void
  }>
>
