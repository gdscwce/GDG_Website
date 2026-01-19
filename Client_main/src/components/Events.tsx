import { useEffect, useState } from "react";
import { useYear } from "@/contexts/YearContext";
import EventCard, { Event } from "./EventCard";
import CONFIG from "../../config";

const Events = () => {
  const { selectedYearId, availableYears } = useYear();

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get numeric year for display
  const selectedYearLabel =
    availableYears.find((y) => y._id === selectedYearId)?.year;

  useEffect(() => {
    if (!selectedYearId) return;

    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `${CONFIG.API_BASE_URL}/public/events/${selectedYearId}`
        );

        const data = await res.json();
        if (!data.ok) throw new Error("API error");

        const formattedEvents: Event[] = data.events.map((event: any) => ({
          id: event._id,
          title: event.eventName,
          description: event.eventInfo,
          date: new Date(event.eventDate).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          image: event.eventThumbnailKey
        }));

        setEvents(formattedEvents);
      } catch (err) {
        setError("Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [selectedYearId]);

  return (
    <section id="events" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Events in {selectedYearLabel ?? "—"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our past and upcoming events.
          </p>
        </div>

        {loading && (
          <p className="text-center text-muted-foreground">
            Loading events...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <p className="text-center text-muted-foreground">
            No events found for this year.
          </p>
        )}
      </div>
    </section>
  );
};

export default Events;
