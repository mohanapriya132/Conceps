import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {
  LayoutDashboard, List, FileText, User, Settings,
  Users, ShieldCheck, ShoppingBag, Package, Wrench,
  Sparkles, Receipt, Mail, Share2, ChevronLeft, ChevronRight, Plus
} from 'lucide-react'

const USER_NAV = [
  { label: 'Dashboards',       icon: LayoutDashboard, to: '/dashboard' },
  { label: 'List',             icon: List,            to: '/list' },
  { label: 'Registration Form',icon: FileText,        to: '/registration' },
  { label: 'Public Profile',   icon: User,            to: '#' },
  { label: 'My Account',       icon: Settings,        to: '#', plus: true },
  { label: 'Community',        icon: Users,           to: '#', plus: true },
  { label: 'User Management',  icon: Users,           to: '#' },
  { label: 'Authentication',   icon: ShieldCheck,     to: '#' },
]

const APP_NAV = [
  { label: 'Store Client',      icon: ShoppingBag, to: '/store' },
  { label: 'Store Admin',       icon: Package,     to: '#', badge: 'Soon' },
  { label: 'Store - Services',  icon: Wrench,      to: '#', badge: 'Soon' },
  { label: 'AI Promt',          icon: Sparkles,    to: '#', badge: 'Soon' },
  { label: 'Invoice Generator', icon: Receipt,     to: '#', badge: 'Soon' },
  { label: 'Email Client',      icon: Mail,        to: '#', badge: 'Soon' },
  { label: 'Social Network',    icon: Share2,      to: '#', badge: 'Soon' },
]

function NavItem({ item, collapsed }) {
  const isDisabled = item.to === '#'
  const base = 'flex items-center gap-2.5 px-2.5 py-[7px] rounded-lg text-[13px] font-medium transition-colors duration-150 w-full'

  if (isDisabled) {
    return (
      <div className={`${base} text-gray-500 hover:bg-gray-50 cursor-default`}>
        <item.icon size={15} className="shrink-0 text-gray-400" />
        {!collapsed && (
          <>
            <span className="flex-1 truncate">{item.label}</span>
            {item.plus && <Plus size={13} className="text-gray-300" />}
            {item.badge && (
              <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-md font-semibold">
                {item.badge}
              </span>
            )}
          </>
        )}
      </div>
    )
  }

  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        `${base} ${isActive
          ? 'bg-blue-50 text-blue-700'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
      }
    >
      {({ isActive }) => (
        <>
          <item.icon size={15} className={`shrink-0 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
          {!collapsed && <span className="flex-1 truncate">{item.label}</span>}
        </>
      )}
    </NavLink>
  )
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`
        ${collapsed ? 'w-[58px]' : 'w-[220px]'}
        bg-white border-r border-gray-100 flex flex-col h-screen
        sticky top-0 shrink-0 transition-all duration-300 z-20
      `}
    >
      {/* Logo row */}
      <div className="flex items-center justify-between px-4 h-[52px] border-b border-gray-100 shrink-0">
        {!collapsed && (
          <span className="text-[17px] font-extrabold tracking-tight text-gray-900 select-none">
            CONCEPS
          </span>
        )}
        <button
          onClick={() => setCollapsed(c => !c)}
          className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors ml-auto"
        >
          {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto sidebar-scroll py-3 px-2 space-y-0.5">
        {!collapsed && (
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 py-1">
            USER
          </p>
        )}
        {USER_NAV.map(item => (
          <NavItem key={item.label} item={item} collapsed={collapsed} />
        ))}

        <div className="pt-2">
          {!collapsed && (
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 py-1 mt-1">
              APPS
            </p>
          )}
          {APP_NAV.map(item => (
            <NavItem key={item.label} item={item} collapsed={collapsed} />
          ))}
        </div>
      </nav>
    </aside>
  )
}
