import { Outlet } from 'react-router-dom'
import AuthWrapper from '../wrappers/AuthWrapper';

type Props = {}

function BoardLayout({}: Props) {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default AuthWrapper(BoardLayout);