import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignIn        from './pages/SignIn.jsx'
import SignUp        from './pages/SignUp.jsx'
import OTPVerify     from './pages/OTPVerify.jsx'
import Layout        from './components/Layout.jsx'
import Dashboard     from './pages/Dashboard.jsx'
import RegistrationForm from './pages/RegistrationForm.jsx'
import List          from './pages/List.jsx'
import StoreGrid     from './pages/StoreGrid.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<Navigate to="/signin" replace />} />
        <Route path="/signin"  element={<SignIn />} />
        <Route path="/signup"  element={<SignUp />} />
        <Route path="/verify"  element={<OTPVerify />} />
        <Route element={<Layout />}>
          <Route path="/dashboard"    element={<Dashboard />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/list"         element={<List />} />
          <Route path="/store"        element={<StoreGrid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
