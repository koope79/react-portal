import { FC, ReactNode, ReactPortal } from "react";

type PortalProps = {
  children: ReactNode
}

export type PortalCreate = (
  id: string,
  isShow: boolean,
) => (
  { children }: PortalProps
) => ReactPortal | null

type Props = {
  id: string
  defaultShow?: boolean
}

type UsePortalReturn = {
  Portal: FC<PortalProps>
  isShow: boolean
  show: () => void
  close: () => void
}

export type UsePortal = ({ id }: Props) => UsePortalReturn
