import { useState } from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'

const PEOPLE = [
  { no:'01', name:'Mani',  email:'mani123@gmail.com',  dept:'Product Management', deptSub:'Product development & lifecycle', number:'9874563211', location:'Coimbatore, TamilNadu', address:'Sree Mahalakshmi Garden Layout', working:'Yes', exp:'1 year' },
  { no:'02', name:'Velu',  email:'velu123@gmail.com',  dept:'Marketing Team',     deptSub:'Campaigns & market analysis',     number:'9874563211', location:'Coimbatore, TamilNadu', address:'Sree Mahalakshmi Garden Layout', working:'No',  exp:'2 Years' },
  { no:'03', name:'Kavi',  email:'kavi123@gmail.com',  dept:'HR Department',      deptSub:'Talent acquisition, employee welfare', number:'9874563211', location:'Coimbatore, TamilNadu', address:'Sree Mahalakshmi Garden Layout', working:'Yes', exp:'5 Years' },
  { no:'04', name:'Ram',   email:'ram123@gmail.com',   dept:'Sales Division',     deptSub:'Customer relations, sales strategy', number:'9874563211', location:'Coimbatore, TamilNadu', address:'Sree Mahalakshmi Garden Layout', working:'No',  exp:'3 Years' },
]

export default function List() {
  const [search, setSearch] = useState('')
  const [page, setPage]     = useState(2)
  const [perPage, setPerPage] = useState(5)

  const filtered = PEOPLE.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.dept.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <PageHeader title="List" sub="Central Hub for Personal Customization" action="View Profile" />

      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 className="text-[14px] font-bold text-gray-900">List</h3>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 w-full sm:w-auto">
            <Search size={13} className="text-gray-400 shrink-0" />
            <input
              placeholder="Search Teams"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="text-[12px] outline-none w-28 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                {['No','Name','Department','Number','Location','Address','Currently working','Experience'].map(h => (
                  <th key={h} className="pb-2.5 text-left text-[11px] font-bold text-gray-500 pr-4 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.no} className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors">
                  <td className="py-3 pr-4 text-[13px] font-semibold text-gray-500">{p.no}</td>
                  <td className="py-3 pr-4">
                    <div className="text-[13px] font-semibold text-gray-900">{p.name}</div>
                    <div className="text-[11px] text-gray-400">{p.email}</div>
                  </td>
                  <td className="py-3 pr-4">
                    <div className="text-[13px] font-semibold text-gray-900">{p.dept}</div>
                    <div className="text-[11px] text-gray-400">{p.deptSub}</div>
                  </td>
                  <td className="py-3 pr-4 text-[13px] text-gray-700">{p.number}</td>
                  <td className="py-3 pr-4 text-[13px] text-gray-700">{p.location}</td>
                  <td className="py-3 pr-4 text-[13px] text-gray-700">{p.address}</td>
                  <td className="py-3 pr-4 text-[13px] text-gray-700">{p.working}</td>
                  <td className="py-3 text-[13px] text-gray-700">{p.exp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 text-[12px] text-gray-500">
            <span>Show</span>
            <select value={perPage} onChange={e => setPerPage(Number(e.target.value))}
              className="border border-gray-200 rounded px-1.5 py-0.5 text-[12px] focus:outline-none">
              <option>5</option><option>10</option><option>25</option>
            </select>
            <span>per page</span>
            <span className="ml-2 text-gray-400">1-10 of 52</span>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setPage(p => Math.max(1,p-1))}
              className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
              <ChevronLeft size={14} />
            </button>
            {[1,2,3,4,5].map(n => (
              <button key={n} onClick={() => setPage(n)}
                className={`w-7 h-7 text-[12px] font-semibold rounded transition-colors
                  ${page===n ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                {n}
              </button>
            ))}
            <span className="text-gray-400 text-[12px] px-1">…</span>
            <button onClick={() => setPage(p => Math.min(11,p+1))}
              className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
