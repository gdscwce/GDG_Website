import React from 'react'

function SidebarYears ({ years, selectedYear, onSelect }) {
  return (
    <>
      <div className='w-48 border-r border-gray-700 p-4'>
        {years.map(year => (
          <div
            key={year._id}
            onClick={() => onSelect(year)}
            className={`cursor-pointer p-2 mb-2 rounded
            ${
              selectedYear?._id === year._id
                ? 'bg-blue-600'
                : 'hover:bg-gray-800'
            }`}
          >
            {year.year}
          </div>
        ))}
      </div>
    </>
  )
}

export default SidebarYears
