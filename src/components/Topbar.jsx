import { useLocation } from 'react-router-dom'
import { Search, Bell, MessageSquare, Grid2x2, ChevronRight, Menu } from 'lucide-react'

const TITLES = {
  '/dashboard':    { title: 'Dashboard',          sub: 'Central Hub for Personal Customization' },
  '/registration': { title: 'Registration Form',   sub: 'Central Hub for Personal Customization' },
  '/list':         { title: 'List',                sub: 'Central Hub for Personal Customization' },
  '/store':        { title: 'Search Results · Grid', sub: null },
}

export default function Topbar({ setIsMobileMenuOpen }) {
  const loc = useLocation()
  const page = TITLES[loc.pathname] || { title: 'Page', sub: '' }

  return (
    <header className="bg-white border-b border-gray-100 px-4 sm:px-6 h-[52px] flex items-center justify-between shrink-0 gap-2">
      {/* breadcrumb */}
      <div className="flex items-center gap-1 text-[13px] text-gray-500 truncate">
        <button
          className="lg:hidden mr-1 sm:mr-2 text-gray-500 hover:text-gray-700"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={18} />
        </button>
        <span className="hidden sm:inline">Dashboards</span>
        <ChevronRight size={13} className="hidden sm:inline" />
        <span className="text-gray-800 font-semibold truncate">{page.title}</span>
      </div>

      {/* actions */}
      <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
        {[Search, Bell, MessageSquare, Grid2x2].map((Icon, i) => (
          <button
            key={i}
            className={`w-8 h-8 items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors ${i === 0 ? 'flex' : 'hidden sm:flex'}`}
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
