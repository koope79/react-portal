import React, { PropsWithChildren } from "react";

export type ButtonComp = React.FC<PropsWithChildren<{
  onClick: () => void
}>>
