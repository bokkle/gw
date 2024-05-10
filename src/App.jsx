import Hero from './hero/Hero';
import About from './about/About';
import Roadmap from './roadmap/Roadmap';
import Tokenomics from './tokenomics/Tokenomics';
import Footer from './footer/Footer';
import Navigation from './nav/Navigation';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Toaster position="top-center" />
      <Navigation />
      <Hero />
      <About />
      <Roadmap />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default App;
