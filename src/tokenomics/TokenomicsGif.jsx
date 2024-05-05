import { Tilt } from 'react-tilt';
import gothwaifuleather from '../assets/gothwaifuleather.gif';

const TokenomicsGif = () => {
  return (
    <div
      className="flex min-w-[300px] flex-1 items-center justify-center 
      border border-red-800 p-2"
    >
      <Tilt className="z-1" options={{ scale: 1 }}>
        <div
          className={`h-[550px] overflow-hidden rounded-xl
            bg-gradient-to-br from-pink-400 via-blue-500 to-purple-500 
            p-2 lg:h-[680px] lg:w-[380px] 
            xl:block`}
        >
          <img
            src={gothwaifuleather}
            className="h-full w-full rounded-lg object-cover"
            alt="goth waifu gif"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default TokenomicsGif;
