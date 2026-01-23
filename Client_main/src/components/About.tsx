import { Code2, Users, Lightbulb, Globe } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Technical Excellence',
    description: 'We dive deep into Google technologies including Android, Flutter, Cloud, and AI/ML.',
    color: 'text-google-blue',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Building an inclusive space where developers of all levels can learn and grow together.',
    color: 'text-google-red',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Fostering creativity and innovative thinking through hackathons and study jams.',
    color: 'text-google-yellow',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Part of a worldwide network of Google Developer Groups with 1M+ members.',
    color: 'text-google-green',
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About GDG
          </h2>
          <p className="text-muted-foreground text-lg">
            Google Developer Groups (GDG) are community groups for developers interested in 
            Google's developer technology. We host events ranging from technical talks to 
            hackathons, providing a platform for learning, networking, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className={`w-10 h-10 ${feature.color} mb-4`} />
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
