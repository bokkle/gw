import About from './components/About';
import Hero from './components/Hero';
import HeroInfo from './components/HeroInfo';
import Nav from './components/Nav';

const App = () => {
  return (
    <>
      <header className="h-screen bg-slate-900">
        <Nav />
        <Hero />
        <HeroInfo />
      </header>
      <main>
        <About />
      </main>
    </>
  );
};

export default App;
