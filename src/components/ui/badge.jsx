import React from "react"

export function Badge({ children }) {
  return (
    <span className="px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-full">
      {children}
    </span>
  )
}