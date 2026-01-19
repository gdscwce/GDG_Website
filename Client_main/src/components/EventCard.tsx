import { Calendar } from "lucide-react";
import CONFIG from "../../config";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  return (
    <article
      className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={`https://${CONFIG.S3_BASE_URL}/${event.image}`}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="w-4 h-4 text-google-blue" />
          <time>{event.date}</time>
        </div>

        <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>
      </div>
    </article>
  );
};

export default EventCard;
