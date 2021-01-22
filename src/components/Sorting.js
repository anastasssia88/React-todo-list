import React from 'react'

export default function Sorting({handleSelect, filter}) {

    return (
        <div className="mt-3">
            <div className="flex justify-center px-3 pt-4 pb-3 bg-gray-800 
            text-gray-400 font-bold text-sm rounded">
                <span onClick={() => handleSelect('all')} className={`${filter==='all' ? 'text-gray-200' : '' } mr-4 cursor-pointer hover:text-gray-300`}>All</span>
                <span onClick={() => handleSelect('active')} className={`${filter==='active' ? 'text-gray-200' : '' } cursor-pointer hover:text-gray-300`}>Active</span>
                <span onClick={() => handleSelect('completed')}  className={`ml-4 ${filter==='completed' ? 'text-gray-200' : '' } cursor-pointer hover:text-gray-300`}>Completed</span>
            </div>
        </div>
    )
}
