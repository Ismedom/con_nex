"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-white text-xl">Not Found</h2>
        <h3 className="text-white text-xl">Something When Wrong!</h3>
        <Link href="/" className="text-white border rounded-xl px-2 py-1 bg-yellow-900">
          Return Home
        </Link>
      </div>
    </div>
  );
}
