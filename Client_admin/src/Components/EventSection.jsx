import { useEffect, useState } from 'react'
import api from '../api/axios'
import EventCard from './EventCard'
import AddEventModal from './AddEventModal'
import EventDetailsModal from './EventDetailsModal'

function EventsSection ({ year }) {
  const [events, setEvents] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await api.get(`/public/events/${year._id}`)
      setEvents(res.data.events)
    }
    fetchEvents()
  }, [year])

  return (
    <div className='mb-10'>
      <h2 className='text-xl mb-4'>Events</h2>

      <div className='flex gap-4 flex-wrap'>
        {events.map(event => (
          <EventCard
            key={event._id}
            event={event}
            onClick={() => setSelectedEvent(event)}
            onDeleted={id => setEvents(prev => prev.filter(e => e._id !== id))}
          />
        ))}

        <button
          onClick={() => setShowAddModal(true)}
          className='w-40 h-28 border rounded'
        >
          + Add Event
        </button>
      </div>

      {showAddModal && (
        <AddEventModal
          yearId={year._id}
          onClose={() => setShowAddModal(false)}
          onSuccess={newEvent => setEvents(prev => [...prev, newEvent])}
        />
      )}

      {selectedEvent && (
        <EventDetailsModal
          eventId={selectedEvent._id}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  )
}

export default EventsSection
