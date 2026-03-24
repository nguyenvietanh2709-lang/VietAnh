"use client";

export default function RightColumns() {
  function Card({ children, className = "" }) {
    return (
      <div className={`rounded-lg border bg-white shadow-sm ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <aside className="space-y-6 lg:col-span-3">
      <Card>
        <div className="p-4">
          <div className="mb-3 font-semibold">Upcoming Events:</div>
          <img
            src="https://www.w3schools.com/w3images/forest.jpg"
          />
          <div className="text-sm text-gray-600">Holiday</div>
          <div className="mb-3 text-sm text-gray-600">Friday 15:00</div>
          <button
            type="button"
            className="w-full rounded bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-black"
          >
            Info
          </button>
        </div>
      </Card>

      <Card>
        <div className="p-4">
          <div className="mb-3 font-semibold">Friend Request</div>
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://www.w3schools.com/w3images/avatar6.png"
              alt=""
            />
            <div>
              <div className="font-semibold">Jane Doe</div>
              <div className="text-xs text-gray-500">Wants to connect</div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              className="rounded bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Accept
            </button>
            <button
              type="button"
              className="rounded bg-rose-600 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-700"
            >
              Decline
            </button>
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-4">
          <div className="mb-2 font-semibold">ADS</div>
        </div>
      </Card>
    </aside>
  );
}

