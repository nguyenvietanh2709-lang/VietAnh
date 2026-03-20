"use client";

export default function MyProfile() {
  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="p-4">
        <h3 className="mb-3 text-lg font-semibold">My Profile</h3>

        <div className="flex flex-col items-center">
          <img
            className="h-24 w-24 rounded-full object-cover"
            src="https://www.w3schools.com/w3images/avatar3.png"
            alt="profile"
          />

          <div className="mt-3 w-full space-y-1 text-sm text-gray-600">
            <div>Designer, UI</div>
            <div>London, UK</div>
            <div>April 1, 1988</div>
          </div>
        </div>
      </div>
    </div>
  );
}

