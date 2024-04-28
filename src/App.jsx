import About from './components/About';
import Hero from './components/Hero';
import HeroInfo from './components/HeroInfo';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="flex flex-col items-center bg-slate-900">
      <Nav />
      <main className="flex-1">
        <section className="mb-12 h-screen">
          <HeroInfo />
          <Hero />
        </section>
        <About />
      </main>
      <footer className="flex h-20 w-full bg-slate-950 text-white">
        footer
      </footer>
    </div>
  );
};

export default App;
