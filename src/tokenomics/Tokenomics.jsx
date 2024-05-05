import TokenomicsGif from './TokenomicsGif';

const Tokenomics = () => {
  const tokenomicsList = ['10,000,000,000 supply', 'No tax', 'LP burnt'];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-slate-100">Tokenomics</h1>
      <div className="flex h-auto w-full max-w-7xl flex-wrap p-2">
        <div
          className="flex min-w-[300px] flex-1 flex-col 
        justify-center gap-6 border border-purple-300 p-2"
        >
          {tokenomicsList.map((item) => (
            <h3
              key={item}
              className="text-2xl font-semibold tracking-wide 
          text-slate-100 md:text-3xl lg:text-5xl"
            >
              {item}
            </h3>
          ))}
        </div>
        <TokenomicsGif />
      </div>
    </div>
  );
};

export default Tokenomics;
