import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Smartphone } from 'lucide-react'

export default function OTPVerify() {
  const [otp, setOtp]       = useState(['', '', '', '', '', ''])
  const [timer, setTimer]   = useState(37)
  const refs               = Array.from({ length: 6 }, () => useRef(null))
  const navigate           = useNavigate()

  useEffect(() => {
    if (timer <= 0) return
    const t = setTimeout(() => setTimer(v => v - 1), 1000)
    return () => clearTimeout(t)
  }, [timer])

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return
    const next = [...otp]
    next[i] = val
    setOtp(next)
    if (val && i < 5) refs[i + 1].current?.focus()
  }

  const handleKey = (i, e) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) refs[i - 1].current?.focus()
  }

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="auth-bg">
      <div className="relative z-10 w-full max-w-[400px] mx-4 bg-white rounded-2xl shadow-lg shadow-gray-200/60 px-8 py-10 fade-up text-center">
        {/* Phone icon */}
        <div className="flex justify-center mb-5">
          <div className="w-[72px] h-[88px] relative">
            {/* Phone body */}
            <div className="absolute inset-0 rounded-[14px] border-2 border-gray-200 bg-gray-50 flex items-center justify-center">
              <div className="w-[44px] h-[62px] rounded-[8px] bg-blue-100/80" />
            </div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-gray-200 rounded-b-md" />
          </div>
        </div>

        <h2 className="text-[20px] font-bold text-gray-900 mb-2">Verify your phone</h2>
        <p className="text-[13px] text-gray-500 mb-1">Enter the verification code we sent to</p>
        <p className="text-[13px] font-semibold text-gray-800 mb-7">&#42;&#42;&#42;&#42;&#42;&#42;7859</p>

        <form onSubmit={handleSubmit}>
          {/* OTP boxes */}
          <div className="flex justify-center gap-2.5 mb-5">
            {otp.map((v, i) => (
              <input
                key={i}
                ref={refs[i]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={v}
                onChange={e => handleChange(i, e.target.value)}
                onKeyDown={e => handleKey(i, e)}
                className="otp-box"
              />
            ))}
          </div>

          {/* Resend */}
          <p className="text-[13px] text-gray-500 mb-7">
            Didn't receive a code? ({timer}s){' '}
            <button
              type="button"
              onClick={() => setTimer(60)}
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Resend
            </button>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}
