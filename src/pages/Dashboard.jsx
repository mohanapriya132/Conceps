import { MoreHorizontal, TrendingUp, TrendingDown, MapPin, Users, ChevronLeft, ChevronRight, Search } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'

const SOCIAL = [
  { icon: '💼', label: 'Amazing mates',  value: '9.3k',  color: 'bg-blue-500',  iconBg: 'bg-blue-600' },
  { icon: '▶️', label: 'Lessons Views',  value: '24k',   color: 'bg-red-500',   iconBg: 'bg-red-600' },
  { icon: '📸', label: 'New subscribers',value: '608',   color: 'bg-pink-500',  iconBg: 'bg-pink-600' },
  { icon: '🎵', label: 'Stream audience', value: '2.5k', color: 'bg-gray-800',  iconBg: 'bg-gray-900' },
]

const EARNINGS_DATA = [28, 18, 32, 22, 24, 34, 18, 26, 28, 20, 22, 24]
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const TEAMS = [
  { name: 'Product Management', sub: 'Product development & lifecycle', rating: 5,  modified: '21 Oct, 2024', members: 4 },
  { name: 'Marketing Team',     sub: 'Campaigns & market analysis',     rating: 3.5,modified: '15 Oct, 2024', members: 4 },
  { name: 'HR Department',      sub: 'Talent acquisition, employee welfare', rating: 5, modified: '10 Oct, 2024', members: 4 },
  { name: 'Sales Division',     sub: 'Customer relations, sales strategy', rating: 4, modified: '05 Oct, 2024', members: 4 },
]

const SALES_ROWS = [
  { label: 'Online Store', icon: '🛒', value: '$172k', change: 3.9,  up: true  },
  { label: 'Facebook',     icon: '👤', value: '$85k',  change: 0.7,  up: false },
  { label: 'Instagram',    icon: '📸', value: '$36k',  change: 8.2,  up: true  },
]

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={`text-sm ${i <= rating ? 'star-filled' : i - 0.5 <= rating ? 'star-filled opacity-50' : 'star-empty'}`}>★</span>
      ))}
    </div>
  )
}

function MemberAvatars({ count }) {
  const colors = ['bg-blue-400','bg-green-400','bg-purple-400','bg-orange-400','bg-pink-400']
  return (
    <div className="flex -space-x-1.5">
      {Array.from({length: Math.min(count, 4)}).map((_, i) => (
        <div key={i} className={`w-6 h-6 rounded-full ${colors[i]} border-2 border-white flex items-center justify-center text-[9px] text-white font-bold`}>
          {String.fromCharCode(65 + i)}
        </div>
      ))}
    </div>
  )
}

export default function Dashboard() {
  const maxVal = Math.max(...EARNINGS_DATA)

  return (
    <div>
      <PageHeader title="Dashboard" sub="Central Hub for Personal Customization" action="View Profile" />

      {/* Row 1: Social cards + Promo banner */}
      <div className="grid grid-cols-3 gap-5 mb-5">
        {/* Social grid */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {SOCIAL.map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 px-4 py-4 flex items-center gap-3">
              <div className={`w-10 h-10 ${s.iconBg} rounded-xl flex items-center justify-center text-lg shrink-0`}>
                {s.icon}
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900 leading-tight">{s.value}</div>
                <div className="text-[12px] text-gray-500">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Promo banner */}
        <div className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col justify-between overflow-hidden relative">
          <div className="flex items-start gap-3">
            <div className="flex -space-x-2 shrink-0">
              {['bg-blue-400','bg-green-400','bg-yellow-400'].map((c,i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white`} />
              ))}
              <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">3</div>
            </div>
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-gray-900 leading-snug mt-3">
              Connect Today &amp; Join<br />the KeenThemes Network
            </h3>
            <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
              Enhance your projects with premium themes and templates. Join the KeenThemes community today for top-quality designs and resources.
            </p>
            <button className="mt-3 text-[13px] font-semibold text-blue-600 hover:underline">
              Got Started
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Highlights + Earnings */}
      <div className="grid grid-cols-2 gap-5 mb-5">
        {/* Highlights */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-bold text-gray-900">Highlights</h3>
            <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={16} /></button>
          </div>
          <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-1">All time sales</p>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[26px] font-bold text-gray-900">$295.7k</span>
            <span className="text-[12px] text-green-600 bg-green-50 px-2 py-0.5 rounded-md font-semibold">+2.7%</span>
          </div>

          {/* Progress bars */}
          <div className="space-y-1.5 mb-4">
            <div className="flex gap-1 h-2">
              <div className="flex-1 bg-blue-500 rounded-l-full" />
              <div className="w-[30%] bg-blue-300" />
              <div className="w-[20%] bg-blue-800 rounded-r-full" />
            </div>
            <div className="flex gap-1.5 text-[10px] text-gray-500">
              <span>● Metronic</span>
              <span>● Bundle</span>
              <span>● MetronicNest</span>
            </div>
          </div>

          <div className="space-y-2.5 mt-3">
            {SALES_ROWS.map(r => (
              <div key={r.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-base">{r.icon}</span>
                  <span className="text-[13px] text-gray-600 font-medium">{r.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold text-gray-900">{r.value}</span>
                  <span className={`flex items-center gap-0.5 text-[11px] font-semibold ${r.up ? 'text-green-600' : 'text-red-500'}`}>
                    {r.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />} {r.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Earnings chart */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-bold text-gray-900">Earnings</h3>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-gray-500">Referrals only</span>
              <div className="w-8 h-4 bg-gray-200 rounded-full relative cursor-pointer">
                <div className="w-3 h-3 bg-white rounded-full shadow absolute top-0.5 left-0.5" />
              </div>
              <span className="text-[12px] text-gray-500">12 months</span>
            </div>
          </div>

          {/* Simple bar chart */}
          <div className="relative h-32 flex items-end gap-1">
            {EARNINGS_DATA.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <div
                  className={`w-full rounded-sm ${i === 5 ? 'bg-blue-500' : 'bg-blue-200'} transition-all`}
                  style={{ height: `${(v / maxVal) * 100}%` }}
                />
              </div>
            ))}
            {/* Tooltip on June */}
            <div className="absolute top-0 left-[43%] bg-gray-900 text-white text-[10px] rounded-lg px-2 py-1 whitespace-nowrap">
              June, 2024 Sales<br />
              <span className="font-bold">$34,233.00</span>
              <span className="text-green-400 ml-1">+29%</span>
            </div>
          </div>
          <div className="flex justify-between mt-1">
            {MONTHS.map(m => (
              <span key={m} className="text-[9px] text-gray-400">{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3: Team Meeting + Teams table */}
      <div className="grid grid-cols-2 gap-5">
        {/* Team Meeting */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[15px] font-bold text-gray-900">Team Meeting</h3>
              <p className="text-[12px] text-gray-400 mt-0.5">09:00 - 09:30</p>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">14</span>
            </div>
          </div>
          <p className="text-[13px] text-gray-600 mt-3 leading-relaxed">
            Team meeting to discuss strategies, outline project milestones, define key goals, and establish clear timelines.
          </p>
          <div className="flex gap-6 mt-4">
            <div>
              <div className="flex items-center gap-1 text-[11px] text-gray-400 mb-1">
                <MapPin size={11} /> Location
              </div>
              <span className="text-[13px] font-semibold text-gray-800">Amsterdam</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[11px] text-gray-400 mb-1">
                <Users size={11} /> Team
              </div>
              <MemberAvatars count={3} />
            </div>
          </div>
          <button className="mt-4 w-full text-[13px] font-semibold text-blue-600 border border-blue-200 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Join Meeting
          </button>
        </div>

        {/* Teams table */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-bold text-gray-900">Teams</h3>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5">
              <Search size={13} className="text-gray-400" />
              <input placeholder="Search Teams" className="text-[12px] outline-none w-24 placeholder-gray-400" />
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="pb-2 text-left w-8"><input type="checkbox" className="accent-blue-600" /></th>
                <th className="pb-2 text-left text-[11px] font-semibold text-gray-400">Team ◇</th>
                <th className="pb-2 text-left text-[11px] font-semibold text-gray-400">Rating ◇</th>
                <th className="pb-2 text-left text-[11px] font-semibold text-gray-400">Last Modified ◇</th>
                <th className="pb-2 text-left text-[11px] font-semibold text-gray-400">Members ◇</th>
              </tr>
            </thead>
            <tbody>
              {TEAMS.map(t => (
                <tr key={t.name} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-3"><input type="checkbox" className="accent-blue-600" /></td>
                  <td className="py-3">
                    <div className="text-[13px] font-semibold text-gray-800">{t.name}</div>
                    <div className="text-[11px] text-gray-400">{t.sub}</div>
                  </td>
                  <td className="py-3"><Stars rating={t.rating} /></td>
                  <td className="py-3 text-[12px] text-gray-500">{t.modified}</td>
                  <td className="py-3"><MemberAvatars count={t.members} /></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2 text-[12px] text-gray-500">
              <span>Show</span>
              <select className="border border-gray-200 rounded px-1 py-0.5 text-[12px]">
                <option>5</option><option>10</option>
              </select>
              <span>per page</span>
              <span className="text-gray-400 ml-1">1-10 of 52</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-700">
                <ChevronLeft size={14} />
              </button>
              {[1,2,3,4,5].map(n => (
                <button key={n} className={`w-6 h-6 text-[12px] rounded font-semibold ${n===2 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>{n}</button>
              ))}
              <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-700">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
