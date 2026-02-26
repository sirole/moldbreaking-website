import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import CoreServices from '../components/CoreServices';
import Values from '../components/Values';
import Stats from '../components/Stats';
import PartnersSection from '../components/PartnersSection';

const Home = () => {
  return (
    <main className="bg-dark">
      <Hero />
      <ProblemSection />
      <CoreServices />
      <Values />
      <Stats />
      <PartnersSection />
    </main>
  );
};

export default Home;
