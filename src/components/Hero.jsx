import waifuGif from '../assets/ttwaifu-nowm.gif';
import waifuAnime from '../assets/gothwaifu.jpg';
import waifuShego from '../assets/gothwaifushego.jpg';
import { Tilt } from 'react-tilt';

const Hero = () => {
  const waifus = [waifuAnime, waifuGif, waifuShego];
  return (
    <div className="flex flex-1 items-center justify-center gap-8 border">
      {waifus.map((waifu, i) => (
        <Tilt key={i}>
          <div
            className={`max-lg:${i !== 1 ? 'hidden' : ''} h-[518px] w-[300px] overflow-hidden
          rounded-xl bg-gradient-to-br from-purple-500 via-cyan-500 
          to-pink-400 object-cover p-1`}
          >
            <img
              src={waifu}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default Hero;
