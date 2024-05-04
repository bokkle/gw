import { Tilt } from 'react-tilt';
import gothwaifu from '../assets/gothwaifu.jpg';
import gothwaifu2 from '../assets/ttwaifu.gif';
import shegowaifu from '../assets/gothwaifushego.jpg';

const HeroImage = () => {
  const waifus = [gothwaifu, gothwaifu2, shegowaifu];
  return (
    <div className="flex flex-1 justify-center gap-12 p-2">
      {waifus.map((waifu, i) => (
        <Tilt className="z-1 mt-16" key={waifu} options={{ scale: 1 }}>
          <div
            className={`${i !== 1 ? 'hidden' : ''} h-[550px] overflow-hidden rounded-xl
            bg-gradient-to-br from-pink-400 via-blue-500 to-purple-500 
            p-2 lg:h-[680px] lg:w-[380px] 
            xl:block`}
          >
            <img
              src={waifu}
              className="h-full w-full rounded-lg object-cover"
              alt=""
            />
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default HeroImage;
