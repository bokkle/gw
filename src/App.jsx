import About from './components/About';
import Hero from './components/Hero';
import HeroInfo from './components/HeroInfo';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="flex flex-col items-center bg-slate-900">
      <header className="h-screen border border-purple-500">
        <Nav />
        <HeroInfo />
        <Hero />
      </header>
      <main>
        <About />
      </main>
    </div>
  );
};

export default App;
