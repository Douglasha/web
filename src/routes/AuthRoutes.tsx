import {Routes, Route} from 'react-router'

import {AuthLayout} from '../components/AuthLayout'
import {SignIn} from '../pages/SignIn'
import {SignUP} from '../pages/SignUp'
import {NotFound} from '../pages/NotFound'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUP />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}