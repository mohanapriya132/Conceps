import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

const DEPARTMENTS = ['Product Management','Marketing Team','HR Department','Sales Division','Engineering','Finance']
const STATES      = ['Tamil Nadu','Karnataka','Maharashtra','Delhi','Kerala','Gujarat']
const CITIES      = ['Chennai','Coimbatore','Madurai','Salem','Tiruchirappalli','Erode']

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullName: '', email: '', contact: '', department: '',
    state: '', city: '', address: '', working: 'yes', experience: []
  })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const toggleExp = v => {
    setForm(f => ({
      ...f,
      experience: f.experience.includes(v)
        ? f.experience.filter(e => e !== v)
        : [...f.experience, v]
    }))
  }

  const inputCls = 'w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-[13px] placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition bg-white'

  return (
    <div>
      <PageHeader title="Registration Form" sub="Central Hub for Personal Customization" action="View Profile" />

      <div className="bg-white rounded-xl border border-gray-100 p-6 max-w-4xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Full Name*" value={form.fullName}
              onChange={e => set('fullName', e.target.value)} className={inputCls} />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
            <input type="email" placeholder="Email Address*" value={form.email}
              onChange={e => set('email', e.target.value)} className={inputCls} />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Contact Number <span className="text-red-500">*</span></label>
            <input type="tel" placeholder="Contact Number*" value={form.contact}
              onChange={e => set('contact', e.target.value)} className={inputCls} />
          </div>

          {/* Department */}
          <div>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Department <span className="text-red-500">*</span></label>
            <select value={form.department} onChange={e => set('department', e.target.value)}
              className={inputCls}>
              <option value="">Department</option>
              {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}
            </select>
          </div>

          {/* State */}
          <div>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">State <span className="text-red-500">*</span></label>
            <select value={form.state} onChange={e => set('state', e.target.value)}
              className={inputCls}>
              <option value="">State*</option>
              {STATES.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">City <span className="text-red-500">*</span></label>
            <select value={form.city} onChange={e => set('city', e.target.value)}
              className={inputCls}>
              <option value="">City*</option>
              {CITIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>

          {/* Address — full width */}
          <div className="col-span-2">
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Address</label>
            <textarea placeholder="Address" rows={3} value={form.address}
              onChange={e => set('address', e.target.value)}
              className={`${inputCls} resize-none`} />
          </div>

          {/* Currently Working */}
          <div className="col-span-2">
            <label className="block text-[13px] font-semibold text-gray-700 mb-2">Currently Working or not</label>
            <div className="flex gap-6">
              {['Yes','No'].map(opt => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="working"
                    value={opt.toLowerCase()}
                    checked={form.working === opt.toLowerCase()}
                    onChange={e => set('working', e.target.value)}
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-[13px] text-gray-700 font-medium">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Years of Experience */}
          <div className="col-span-2">
            <label className="block text-[13px] font-semibold text-gray-700 mb-2">Years of Experience</label>
            <div className="space-y-2">
              {['1 year','2+ year','4+ year'].map(opt => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.experience.includes(opt)}
                    onChange={() => toggleExp(opt)}
                    className="accent-blue-600 w-4 h-4 rounded"
                  />
                  <span className="text-[13px] text-gray-700 font-medium">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <button
          className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-bold text-[13px] px-7 py-2.5 rounded-lg transition-colors"
          onClick={() => alert('Form submitted!')}
        >
          Submit
        </button>
      </div>
    </div>
  )
}
