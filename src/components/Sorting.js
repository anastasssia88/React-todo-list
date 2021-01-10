import React from 'react'

export default function Sorting() {
    return (
        <div className="mt-3">
            <div className="flex justify-center px-3 pt-4 pb-3 bg-gray-800 
            text-gray-400 font-bold text-sm rounded">
                <span className="mr-4 cursor-pointer hover:text-gray-300">All</span>
                <span className="cursor-pointer hover:text-gray-300">Active</span>
                <span className="ml-4 cursor-pointer hover:text-gray-300">Completed</span>
            </div>
        </div>
    )
}
