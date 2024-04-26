import HeartButton from './HeartButton';

const HeroInfo = () => {
  return (
    <div className="flex-1 flex-col justify-center border border-green-500">
      <p className="text-2xl text-white">
        Goth waifus exude an enchanting allure with their dark aesthetic,
        blending elegance with an enigmatic charm that captivates the hearts of
        many
      </p>
      <div className="flex justify-center gap-8 border flex-wrap">
        <HeartButton>chart</HeartButton>
        <HeartButton>twitter</HeartButton>
        <HeartButton>telegram</HeartButton>
      </div>
    </div>
  );
};

export default HeroInfo;
