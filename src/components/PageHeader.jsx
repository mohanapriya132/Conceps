export default function PageHeader({ title, sub, action }) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-[22px] font-bold text-gray-900 leading-tight">{title}</h1>
        {sub && <p className="text-sm text-gray-500 mt-0.5">{sub}</p>}
      </div>
      {action && (
        <button className="text-sm font-semibold text-blue-600 border border-blue-200 px-4 py-1.5 rounded-lg hover:bg-blue-50 transition-colors">
          {action}
        </button>
      )}
    </div>
  )
}
