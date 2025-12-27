import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import api from '../api/axios'
import SidebarYears from '../Components/SidebarYears'
import EventsSection from '../Components/EventSection'
import MembersSection from '../Components/MemberSection'

function Dashboard () {
  const [years, setYears] = useState([])
  const [selectedYear, setSelectedYear] = useState(null)

  useEffect(() => {
    const fetchyears = async () => {
      const res = await api.get('public/years')
      setYears(res.data.years)
      console.log(res.data.years)
    }
    fetchyears()
  }, [])

  return (
    <>
     <div className="flex h-screen bg-black text-white">
      {/* LEFT SIDEBAR */}
      <SidebarYears
        years={years}
        selectedYear={selectedYear}
        onSelect={setSelectedYear}
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">
        {!selectedYear ? (
          <div className="flex justify-center items-center h-full">
            <button className="border px-6 py-2 rounded">
              Create Year
            </button>
          </div>
        ) : (
          <>
            <EventsSection year={selectedYear} />
            <MembersSection year={selectedYear} />
          </>
        )}
      </div>
    </div>
    </>
  )
}

export default Dashboard
