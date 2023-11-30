import { ReactNode } from "react";

interface NotificationAcitonsProps {
  children: ReactNode
}

export function NotificationActions({ children }: NotificationAcitonsProps) {
  return (
    <div className='flex gap-2 self-center'>
      {children}
    </div>
  )
}