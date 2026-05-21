import { useState } from 'react'
import { Search, Filter, ShoppingCart, Heart, User, X, Star, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react'

/* ── Shoe colours for placeholder images ── */
const SHOE_COLORS = [
  '#C8B89A','#2C2C2C','#E8CAAD','#1A1A2E',
  '#4A4A4A','#D4A854','#8BC34A','#E91E63',
  '#2196F3','#FF5722','#9C27B0','#00BCD4',
]

function ShoeImg({ color, size=80, save }) {
  return (
    <div className="relative flex items-center justify-center" style={{height: size+20}}>
      {save && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
          SAVE {save}%
        </span>
      )}
      <svg width={size} height={size*0.6} viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="62" rx="55" ry="8" fill="#E5E7EB" opacity="0.6"/>
        <path d="M10 55 Q20 20 50 18 Q80 16 100 30 Q115 40 110 55 Q95 62 60 64 Q25 66 10 55Z"
          fill={color} />
        <path d="M40 18 Q50 8 65 12 Q80 16 85 25 Q70 20 55 22 Q42 24 40 18Z"
          fill="white" opacity="0.4"/>
        <path d="M30 45 Q50 35 80 42" stroke="white" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>
        <circle cx="25" cy="50" r="3" fill="white" opacity="0.6"/>
        <circle cx="35" cy="47" r="3" fill="white" opacity="0.6"/>
        <circle cx="45" cy="45" r="3" fill="white" opacity="0.6"/>
      </svg>
    </div>
  )
}

const PRODUCTS = [
  { id:1,  name:'Cloud Shift Lightweight Runner Pro Edition',       price:99,   orig:null,  save:null, rating:3, color:SHOE_COLORS[0] },
  { id:2,  name:'Titan Edge High Impact Stability Lightweight Trainers', price:65.99, orig:null, save:null, rating:4, color:SHOE_COLORS[1] },
  { id:3,  name:'Wave Strike Dynamic Boost Lightweight Trainers',  price:120,  orig:null,  save:null, rating:5, color:SHOE_COLORS[2] },
  { id:4,  name:'Wave Strike Dynamic Boost Sneaker',               price:140,  orig:170,   save:25,   rating:4, color:SHOE_COLORS[3] },
  { id:5,  name:'Cloud Shift Lightweight Runner Pro Edition',       price:99,   orig:140,   save:46,   rating:3, color:SHOE_COLORS[4] },
  { id:6,  name:'Titan Edge High Impact Stability Lightweight Trainers', price:65.99, orig:null, save:null, rating:4, color:SHOE_COLORS[5] },
  { id:7,  name:'Velocity Boost Xtreme High Shock Absorbers',      price:280,  orig:315,   save:11,   rating:5, color:SHOE_COLORS[6] },
  { id:8,  name:'Velocity Boost Xtreme High Shock Absorbers',      price:110,  orig:null,  save:null, rating:3, color:SHOE_COLORS[7] },
  { id:9,  name:'Cloud Shift Lightweight Runner Pro Edition',       price:99,   orig:null,  save:null, rating:4, color:SHOE_COLORS[8] },
  { id:10, name:'Titan Edge High Impact Stability Lightweight Trainers', price:46, orig:110, save:56,  rating:3, color:SHOE_COLORS[9] },
  { id:11, name:'Wave Strike Dynamic Boost Sneaker',               price:120,  orig:null,  save:null, rating:5, color:SHOE_COLORS[10] },
  { id:12, name:'Velocity Boost Xtreme High Shock Absorbers',      price:110,  orig:null,  save:null, rating:4, color:SHOE_COLORS[11] },
]

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={`text-[12px] ${i<=n ? 'star-filled' : 'star-empty'}`}>★</span>
      ))}
    </div>
  )
}

function ProductCard({ p, onClick }) {
  return (
    <div
      onClick={() => onClick(p)}
      className="bg-white rounded-xl border border-gray-100 p-3 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group relative"
    >
      {p.save && (
        <span className="absolute top-3 right-3 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
          SAVE {p.save}%
        </span>
      )}
      <div className="flex items-center justify-center h-[100px] mb-2">
        <ShoeImg color={p.color} size={90} />
      </div>
      <p className="text-[12px] font-semibold text-gray-800 leading-snug mb-2 line-clamp-2 min-h-[32px]">{p.name}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Stars n={p.rating} />
          <div className="flex items-baseline gap-1">
            {p.orig && <span className="text-[10px] text-gray-400 line-through">${p.orig}</span>}
            <span className="text-[13px] font-bold text-gray-900">${p.price}</span>
          </div>
        </div>
        <button
          onClick={e => { e.stopPropagation() }}
          className="flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <ShoppingBag size={11} /> Add
        </button>
      </div>
    </div>
  )
}

function ProductModal({ p, onClose }) {
  if (!p) return null
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end p-4 sm:p-5" onClick={onClose}>
      <div
        className="bg-white rounded-2xl w-full max-w-[380px] h-full flex flex-col shadow-2xl fade-up"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100 shrink-0">
          <h3 className="text-[14px] font-bold text-gray-900">Product Details</h3>
          <button onClick={onClose} className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-700">
            <X size={16} />
          </button>
        </div>
        <div className="px-5 py-4 overflow-y-auto flex-1">
          {/* image */}
          <div className="relative bg-gray-50 rounded-xl flex items-center justify-center min-h-[160px] h-[160px] mb-4 shrink-0">
            {p.save && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                SAVE {p.save}%
              </span>
            )}
            <ShoeImg color={p.color} size={130} />
            {/* Nike logo */}
            <div className="absolute bottom-2 right-3 text-gray-300">
              <svg width="28" height="18" viewBox="0 0 120 48" fill="currentColor">
                <path d="M120 4.8L45.9 43.2c-7.2 3.6-13.2 4.8-18 4.8-7.2 0-12-3.6-12-10.8 0-4.8 2.4-9.6 7.2-14.4L96 0 120 4.8z"/>
              </svg>
            </div>
          </div>

          <h4 className="text-[15px] font-bold text-gray-900 mb-2">{p.name}</h4>
          <p className="text-[12px] text-gray-500 leading-relaxed mb-4">
            Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.
          </p>

          <div className="space-y-2 text-[13px] mb-4">
            {[
              ['Availability', <span className="bg-green-100 text-green-700 text-[11px] font-bold px-2 py-0.5 rounded">In Stock</span>],
              ['SKU',         'SH-001-BLK-42'],
              ['Category',    'Sneakers'],
              ['Rating',      <Stars n={p.rating} />],
              ['Mor Info',    '18g powder, powder measure & water dispensing bottle (empty)'],
            ].map(([label, val]) => (
              <div key={label} className="flex items-start gap-2">
                <span className="text-gray-400 w-24 shrink-0">{label}</span>
                <span className="text-gray-800 font-medium">{val}</span>
              </div>
            ))}
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            {p.orig && <span className="text-gray-400 line-through text-[14px]">${p.orig}.00</span>}
            <span className="text-[22px] font-bold text-gray-900">${p.price}.00</span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[13px] py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
            <ShoppingCart size={15} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default function StoreGrid() {
  const [selected, setSelected] = useState(null)
  const [search, setSearch]     = useState('Nike')
  const [page, setPage]         = useState(1)

  return (
    <div className="relative">
      {/* Store Topbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div className="w-full sm:flex-1 flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 bg-white sm:max-w-md">
          <Search size={14} className="text-gray-400 shrink-0" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 text-[13px] outline-none placeholder-gray-400 w-full"
            placeholder="Search products..."
          />
          <span className="text-[10px] text-gray-300 border border-gray-200 rounded px-1.5 py-0.5 font-mono shrink-0">⌘ K</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-white rounded-lg border border-gray-200 transition-colors">
            <User size={16} />
          </button>
          <button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-white rounded-lg border border-gray-200 transition-colors">
            <Heart size={16} />
          </button>
          <button className="relative w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-white rounded-lg border border-gray-200 transition-colors">
            <ShoppingCart size={16} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">2</span>
          </button>
          <span className="text-[12px] text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-lg">$94.66</span>
          <button className="flex items-center gap-2 bg-blue-600 text-white text-[12px] font-semibold px-3 py-2 rounded-xl hover:bg-blue-700 transition-colors">
            <Filter size={13} /> Filter
          </button>
        </div>
      </div>

      {/* Result count + filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
        <p className="text-[13px] text-gray-600">
          1 - 12 over 280 results for{' '}
          <span className="text-blue-600 font-semibold">{search}</span>
        </p>
        <div className="flex items-center gap-2">
          <select className="border border-gray-200 rounded-lg px-2.5 py-1.5 text-[12px] font-medium text-gray-700 focus:outline-none bg-white">
            <option>Price High to Low</option>
            <option>Price Low to High</option>
            <option>Newest</option>
          </select>
          {['Week','Today','Month','All'].map(f => (
            <button key={f}
              className={`text-[12px] font-semibold px-2.5 py-1.5 rounded-lg transition-colors ${f==='Today' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-5">
        {PRODUCTS.map(p => (
          <ProductCard key={p.id} p={p} onClick={setSelected} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white rounded-xl border border-gray-100 px-5 py-3">
        <div className="flex items-center gap-2 text-[12px] text-gray-500">
          <span>Show</span>
          <select className="border border-gray-200 rounded px-1.5 py-0.5 text-[12px] focus:outline-none">
            <option>10</option><option>25</option><option>50</option>
          </select>
          <span>Per page</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
            <ChevronLeft size={14} />
          </button>
          {[1,2,3,4,5].map(n => (
            <button key={n} onClick={() => setPage(n)}
              className={`w-7 h-7 text-[12px] font-semibold rounded transition-colors
                ${page===n ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
              {n}
            </button>
          ))}
          <button className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Modal */}
      <ProductModal p={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
