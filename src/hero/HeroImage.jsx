import { Tilt } from 'react-tilt';
// import gothwaifu from '../assets/gothwaifu.jpg';
import gothwaifu2 from '../assets/ttwaifu.gif';
// import shegowaifu from '../assets/gothwaifushego.jpg';
// ${i !== 1 ? 'hidden' : ''}

const HeroImage = () => {
  // const waifus = [gothwaifu, gothwaifu2, shegowaifu];
  const waifus = [gothwaifu2];
  return (
    <div className="mt-6 flex flex-1 justify-center border border-green-500 p-2">
      {waifus.map((waifu) => (
        <Tilt className="z-1" key={waifu} options={{ scale: 1 }}>
          <div
            className={`h-[550px] overflow-hidden rounded-xl 
            bg-gradient-to-br from-pink-400 via-blue-500
            to-purple-500 p-2 lg:h-[880px] lg:w-[580px] 
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
