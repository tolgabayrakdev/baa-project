import { Outlet } from 'react-router-dom'
import AuthWrapper from '../wrappers/AuthWrapper';
import { Helmet } from 'react-helmet-async';

type Props = {}

function BoardLayout({ }: Props) {
  return (
    <div>
      <Helmet>
        <title>
          Baa - Main
        </title>
      </Helmet>
      <Outlet />
    </div>
  )
}

export default AuthWrapper(BoardLayout);