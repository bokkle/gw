import raydiumlogo from '../assets/raydiumlogo.png';

const AboutButtons = () => {
  const buttonInfo = [
    {
      name: 'raydium',
      logo: raydiumlogo,
      link: 'https://raydium.io/swap/',
      alt: 'raydium logo',
    },
    {
      name: 'Jupiter',
      logo: 'https://jup.ag/svg/jupiter-logo.svg',
      link: 'https://jup.ag/',
      alt: 'jupiter logo',
    },
    {
      name: 'Dexscreener',
      logo: 'https://docs.dexscreener.com/~gitbook/image?url=https%3A%2F%2F198140802-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F7OmRM9NOmlC1POtFwsnX%252Ficon%252F6BJXvNUMQSXAtDTzDyBK%252Ficon-512x512.png%3Falt%3Dmedia%26token%3Da7ce263e-0b40-4afb-ae25-eae378aef0ab&width=32&dpr=1&quality=100&sign=d310975f3a8edb34efdb8e29aebb421e45590e5594b4054ac3a72a3f5fa36f50',
      link: 'https://dexscreener.com/',
      alt: 'Dexscreener logo',
    },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <div
        className="flex w-2/3 flex-col items-center justify-evenly gap-8 
        lg:flex-row"
      >
        {buttonInfo.map((info) => (
          <a key={info.name} href={info.link} target="_blank">
            <button
              className="h-[65px] w-[200px] rounded-xl border
          border-purple-400 bg-black p-3 ring
          ring-purple-300 transition-all hover:scale-105 
          focus:outline-none focus:ring focus:ring-purple-500 
          active:scale-95 active:ring active:ring-purple-500"
            >
              <div className="flex items-center justify-center">
                <img src={info.logo} width={40} height={40} alt={info.alt} />
                <p
                  className="ml-2 text-lg font-semibold 
              uppercase tracking-wide"
                >
                  {info.name}
                </p>
              </div>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutButtons;
