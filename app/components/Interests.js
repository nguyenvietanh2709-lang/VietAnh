"use client";

export default function Interests() {
  const interestTags = [
    "News",
    "W3Schools",
    "Labels",
    "Games",
    "Friends",
    "Food",
    "Design",
    "Art",
    "Photos",
  ];

  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="p-4">
        <h3 className="mb-3 font-semibold">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {interestTags.map((t) => (
            <span
              key={t}
              className="rounded border border-blue-100 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

