"use client";

import { useState } from "react";

export default function RightColumns() {
  const [friendStatus, setFriendStatus] = useState("pending");
  const [showInfo, setShowInfo] = useState(false);

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
          <div className="text-sm text-gray-600 mt-2">Holiday</div>
          <div className="mb-3 text-sm text-gray-600">Friday 15:00</div>

          {showInfo && (
            <div className="mb-3 p-3 bg-gray-50 border border-gray-100 rounded-md text-sm text-gray-800 transition-all duration-300">
              <p className="font-semibold text-gray-900">ONEPAGE</p>
              <p>Trung Văn, Trung Thư</p>
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowInfo(!showInfo)}
            className="w-full rounded bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-black transition-colors"
          >
            {showInfo ? "Hide Info" : "Info"}
          </button>
        </div>
      </Card>

      {friendStatus !== "declined" && (
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
                <div className="flex items-center gap-2">
                  <div className="font-semibold">Jane Doe</div>
                  {friendStatus === "accepted" && (
                    <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 uppercase tracking-wide">
                      Accepted
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500">Wants to connect</div>
              </div>
            </div>

            {friendStatus === "pending" && (
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFriendStatus("accepted")}
                  className="rounded bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition"
                >
                  Accept
                </button>
                <button
                  type="button"
                  onClick={() => setFriendStatus("declined")}
                  className="rounded bg-rose-600 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-700 transition"
                >
                  Decline
                </button>
              </div>
            )}
          </div>
        </Card>
      )}

      <Card>
        <div className="bg-white shadow-md rounded-md p-4 text-center border border-gray-200">
          <p className="text-gray-800 font-medium">ADS</p>
        </div>
      </Card>

      <Card>
        <div className="bg-white shadow-md rounded-md p-8 text-center border border-gray-200">
          <p>
            <i className="fa fa-bug text-5xl text-gray-800 opacity-80"></i>
          </p>
        </div>
      </Card>
    </aside>
  );
}
