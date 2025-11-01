import React from 'react'

export default function Button() {
  return (
    <button className="hidden lg:flex items-center gap-8 cursor-pointer pl-5 pr-1 bg-blue text-background h-9 rounded-lg">
        <div className="font-bold">
            Booking
        </div>
        <div className="bg-background rounded p-1">
            <svg className="w-5 h-5 text-blue rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
            </svg>
        </div>
    </button>
  )
}
