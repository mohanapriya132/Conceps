import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"/>
      <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46 790.7 0 663 0 541.8c0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
    </svg>
  )
}

export default function SignUp() {
  const [showPw, setShowPw]       = useState(false)
  const [showConf, setShowConf]   = useState(false)
  const [accepted, setAccepted]   = useState(false)
  const navigate = useNavigate()

  return (
    <div className="auth-bg">
      <div className="relative z-10 w-full max-w-[440px] mx-4 bg-white rounded-2xl shadow-lg shadow-gray-200/60 px-8 py-9 fade-up">
        <div className="text-center mb-7">
          <h1 className="text-[22px] font-bold text-gray-900">Sign up</h1>
          <p className="text-sm text-gray-500 mt-1">
            Already have an Account?{' '}
            <Link to="/signin" className="text-blue-600 font-semibold hover:underline">Sign in</Link>
          </p>
        </div>

        <div className="flex gap-3 mb-5">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <GoogleIcon /> Use Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <AppleIcon /> Use Apple
          </button>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-[11px] font-semibold text-gray-400 tracking-wider">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <form onSubmit={e => { e.preventDefault(); navigate('/verify') }} className="space-y-4">
          <div>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Email</label>
            <input type="email" placeholder="email@email.com"
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-[13px] placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition" />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Password</label>
            <div className="relative">
              <input type={showPw ? 'text' : 'password'} placeholder="Enter Password"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-[13px] placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition pr-10" />
              <button type="button" onClick={() => setShowPw(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Confirm Password</label>
            <div className="relative">
              <input type={showConf ? 'text' : 'password'} placeholder="Re-enter Password"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-[13px] placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition pr-10" />
              <button type="button" onClick={() => setShowConf(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showConf ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" checked={accepted} onChange={e => setAccepted(e.target.checked)}
              className="w-4 h-4 rounded accent-blue-600" />
            <span className="text-[13px] text-gray-600 font-medium">
              I accept{' '}
              <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Terms &amp; Conditions</span>
            </span>
          </label>

          <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm transition-colors mt-1">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
