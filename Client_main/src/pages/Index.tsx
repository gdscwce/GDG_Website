import { ThemeProvider } from '@/contexts/ThemeContext';
import { YearProvider } from '@/contexts/YearContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Team from '@/components/Team';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <YearProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Hero />
            <Events />
            <Team />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </YearProvider>
    </ThemeProvider>
  );
};

export default Index;
