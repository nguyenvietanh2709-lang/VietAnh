export default function Interests() {
  const tags = [
    { name: "News", color: "bg-slate-800 text-white" },
    { name: "W3Schools", color: "bg-slate-700 text-white" },
    { name: "Labels", color: "bg-slate-600 text-white" },
    { name: "Games", color: "bg-slate-500 text-white" },
    { name: "Friends", color: "bg-slate-400 text-white" },
    { name: "Games", color: "bg-[#607d8b] text-white" }, // Màu theme gốc
    { name: "Friends", color: "bg-blue-300 text-gray-800" },
    { name: "Food", color: "bg-blue-200 text-gray-800" },
    { name: "Design", color: "bg-blue-100 text-gray-800" },
    { name: "Art", color: "bg-slate-100 text-gray-800" },
    { name: "Photos", color: "bg-slate-50 text-gray-800" },
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-4 hidden sm:block border border-gray-200">
      <p className="text-gray-700 mb-3 font-semibold">Interests</p>
      
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`${tag.color} px-2 py-0.5 text-xs rounded transition-hover hover:opacity-80 cursor-default`}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}