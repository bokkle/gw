import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Roadmap = () => {
  const roadmapInfo = [
    {
      title: 'Start development',
      date: 'Jan 2024',
      icon: '👨🏻‍💻',
      iconBg: '#7e34ff',
      points: ['Development team begins bringing Thursday to life'],
    },
    {
      title: 'Marketing',
      date: 'Feb 2024',
      icon: '📺',
      iconBg: '#7e34ff',
      points: [
        'Marketing team begins advertisement campaign',
        'Twitter, Telegram, Etc are created',
      ],
    },
    {
      title: 'Launch coin',
      date: 'June 2024',
      icon: '🚀',
      iconBg: '#7e34ff',
      points: ['Fair launch on Solana network'],
    },
    {
      title: 'Moon landing',
      date: 'Ongoing',
      icon: '🌑',
      iconBg: '#7e34ff',
      points: [
        'Thursday claims her seat at the throne, the true queen of Solana',
        'History is made, the first time a Goth Waifu visits the moon',
        'Top 1000 holders recieve free Goth Waifu NFT, at $100M market cap',
      ],
    },
  ];
  return (
    <div id="roadmap" className="border-t border-transparent">
      <div className="mt-24 flex justify-center">
        <VerticalTimeline>
          {roadmapInfo.map((info) => (
            <VerticalTimelineElement
              key={info.title}
              date={info.date}
              icon={
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-2xl md:text-3xl">{info.icon}</span>
                </div>
              }
              className="text-slate-100"
              iconStyle={{ background: info.iconBg }}
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: info.iconBg,
                boxShadow: 'none',
                backgroundColor: 'rgb(31 41 55)',
              }}
            >
              <div>
                <h3 className="text-xl font-semibold tracking-wide text-slate-100 md:text-2xl">
                  {info.title}
                </h3>
              </div>
              <ul className="my-5 ml-5 list-disc space-y-2">
                {info.points.map((point, i) => (
                  <li
                    key={i}
                    className="pl-1 text-base font-normal text-slate-100 md:text-lg"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Roadmap;
