import { useYear } from "@/contexts/YearContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  const { selectedYearId, setSelectedYearId, availableYears } = useYear();

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Google-colored dots animation */}
          <div className="flex justify-center gap-3 mb-8 animate-fade-in">
            <span
              className="w-4 h-4 rounded-full bg-google-blue animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-4 h-4 rounded-full bg-google-red animate-bounce"
              style={{ animationDelay: "100ms" }}
            />
            <span
              className="w-4 h-4 rounded-full bg-google-yellow animate-bounce"
              style={{ animationDelay: "200ms" }}
            />
            <span
              className="w-4 h-4 rounded-full bg-google-green animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>

          {/* GDG Heading */}
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Google Developer Group
          </h1>

          {/* GDG Description */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            Building a community of developers who are passionate about Google
            technologies. Join us for events, workshops, and networking
            opportunities.
          </p>

          {/* Year Selector */}
          <div
            className="flex flex-col items-center gap-4 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <label className="text-sm font-medium text-muted-foreground">
              Select Year to View Events & Team
            </label>

            <Select
              value={selectedYearId}
              onValueChange={(value) => setSelectedYearId(value)}
            >
              <SelectTrigger className="w-40 bg-card card-shadow">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>

              <SelectContent className="bg-popover">
                {availableYears.map((yg) => (
                  <SelectItem key={yg._id} value={yg._id}>
                    {yg.year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="p-6 rounded-xl bg-card card-shadow">
              <div className="text-3xl font-bold text-google-blue">500+</div>
              <div className="text-sm text-muted-foreground mt-1">
                Members
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card card-shadow">
              <div className="text-3xl font-bold text-google-red">50+</div>
              <div className="text-sm text-muted-foreground mt-1">
                Events
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card card-shadow">
              <div className="text-3xl font-bold text-google-yellow">20+</div>
              <div className="text-sm text-muted-foreground mt-1">
                Speakers
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card card-shadow">
              <div className="text-3xl font-bold text-google-green">4</div>
              <div className="text-sm text-muted-foreground mt-1">
                Years Active
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
