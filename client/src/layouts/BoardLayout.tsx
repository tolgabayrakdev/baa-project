import { Outlet } from 'react-router-dom'

type Props = {}

export default function BoardLayout({}: Props) {
  return (
    <div>
        <Outlet />
    </div>
  )
}