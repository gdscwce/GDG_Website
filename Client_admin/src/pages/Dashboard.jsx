import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import api from '../api/axios'
import SidebarYears from '../Components/SidebarYears'
import EventsSection from '../Components/EventSection'
import MembersSection from '../Components/MemberSection'
import CreateYearModal from '../Components/CreatYearModal'
import { useNavigate } from 'react-router-dom'

function Dashboard () {
  const [years, setYears] = useState([])
  const [selectedYear, setSelectedYear] = useState(null)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
      return
    }


    const fetchyears = async () => {
      const res = await api.get('public/years')
      setYears(res.data.years)
      console.log(res.data.years)
    
      if (res.data.years.length === 0) {
        setShowCreateModal(true);
      }
    }
    fetchyears()
  }, [])


  const handleYearCreated = (newYear) => {
    setYears((prev) => [...prev, newYear]);
    setSelectedYear(newYear);
  };

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
            <button
              onClick={() => setShowCreateModal(true)}
              className="border px-6 py-2 rounded"
            >
              Create Year
            </button>
          </div>
        ) : (
          <>
            <EventsSection year={selectedYear} />
            {/* MembersSection will come next */}
            <MembersSection year={selectedYear} />
          </>
        )}
      </div>


       {/* CREATE YEAR MODAL */}
       {showCreateModal && (
        <CreateYearModal
          onClose={() => setShowCreateModal(false)}
          onSuccess={handleYearCreated}
        />
      )}
    </div>
    </>
  )
}

export default Dashboard
