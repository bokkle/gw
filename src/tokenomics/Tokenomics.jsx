import TokenomicsGif from './TokenomicsGif';
import { RiCoinsLine } from 'react-icons/ri';
import { HiFire, HiShieldCheck } from 'react-icons/hi';
import { IoPricetags } from 'react-icons/io5';
import { Fade, Slide } from 'react-awesome-reveal';

const TokenomicsCard = ({ title, info, icon }) => {
  return (
    <div
      className="flex min-w-[100px] flex-col items-center 
    justify-start p-2 md:justify-center"
    >
      <div className="animate-pulse text-5xl text-purple-400">{icon()}</div>
      <h2
        className="mt-2 text-center text-2xl font-bold tracking-wide 
        text-slate-100 lg:text-3xl"
      >
        {title}
      </h2>
      <p className="mt-2 text-center text-xl text-slate-300 lg:text-2xl">
        {info}
      </p>
    </div>
  );
};

const Tokenomics = () => {
  const tokenomicsItems = [
    {
      title: 'Supply',
      info: '1 billion total supply',
      icon: RiCoinsLine,
    },
    {
      title: 'Tax',
      info: '0% buy & sell tax',
      icon: IoPricetags,
    },
    {
      title: 'Liquidity Provider',
      info: '100% burnt',
      icon: HiFire,
    },
    {
      title: 'Token Dynamics',
      info: 'Mint & freeze revoked',
      icon: HiShieldCheck,
    },
  ];

  return (
    <section id="tokenomics" className="mt-24 flex justify-center">
      <Fade fraction={0.1} duration={3000}>
        <div className="flex w-screen max-w-7xl flex-wrap-reverse justify-between">
          <div
            className="grid min-w-[300px] flex-1 grid-cols-2 grid-rows-2 gap-4 
          p-2"
          >
            {tokenomicsItems.map((item) => (
              <TokenomicsCard
                title={item.title}
                info={item.info}
                icon={item.icon}
                key={item.title}
              />
            ))}
          </div>
          <div className="flex-1">
            <TokenomicsGif />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Tokenomics;
