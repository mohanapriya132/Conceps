import { useLocation } from 'react-router-dom'
import { Search, Bell, MessageSquare, Grid2x2, ChevronRight } from 'lucide-react'

const TITLES = {
  '/dashboard':    { title: 'Dashboard',          sub: 'Central Hub for Personal Customization' },
  '/registration': { title: 'Registration Form',   sub: 'Central Hub for Personal Customization' },
  '/list':         { title: 'List',                sub: 'Central Hub for Personal Customization' },
  '/store':        { title: 'Search Results · Grid', sub: null },
}

export default function Topbar() {
  const loc = useLocation()
  const page = TITLES[loc.pathname] || { title: 'Page', sub: '' }

  return (
    <header className="bg-white border-b border-gray-100 px-6 h-[52px] flex items-center justify-between shrink-0">
      {/* breadcrumb */}
      <div className="flex items-center gap-1 text-[13px] text-gray-500">
        <span>Dashboards</span>
        <ChevronRight size={13} />
        <span className="text-gray-800 font-semibold">Default</span>
      </div>

      {/* actions */}
      <div className="flex items-center gap-1">
        {[Search, Bell, MessageSquare, Grid2x2].map((Icon, i) => (
          <button
            key={i}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Icon size={16} />
          </button>
        ))}
        <div className="w-8 h-8 ml-1 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 flex items-center justify-center text-white text-[11px] font-bold cursor-pointer select-none">
          JD
        </div>
      </div>
    </header>
  )
}
