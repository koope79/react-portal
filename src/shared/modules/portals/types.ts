import { FC, ReactNode, ReactPortal } from "react";

type PortalArgs = {
  id: string
  isOpen: boolean
}

type PortalProps = {
  children: ReactNode
}

export type PortalCreate = ({ id, isOpen }: PortalArgs) => ({ children }: PortalProps) => ReactPortal | null

type UsePortalProps = {
  id: string
  defaultOpen?: boolean
}

type UsePortalReturn = {
  Portal: FC<PortalProps>
  isOpen: boolean
  open: () => void
  close: () => void
}

export type UsePortal = ({ id, defaultOpen }: UsePortalProps) => UsePortalReturn
