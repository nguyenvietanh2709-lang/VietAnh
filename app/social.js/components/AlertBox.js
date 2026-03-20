"use client";

export default function AlertBox() {
  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="p-4">
        <div className="mb-1 font-semibold">Hey!</div>
        <div className="text-sm text-gray-600">
          People are looking at your profile. Find out who.
        </div>
      </div>
    </div>
  );
}

