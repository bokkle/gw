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
      iconBg: '#6948a2',
      points: ['Development team begins bringing Goth Waifus to life'],
    },
    {
      title: 'Marketing',
      date: 'Feb 2024',
      icon: '📺',
      iconBg: '#6948a2',
      points: [
        'Marketing team begins advertisement campaign',
        'Twitter, Telegram, Etc are created',
      ],
    },
    {
      title: 'Launch coin',
      date: 'May 2024',
      icon: '🚀',
      iconBg: '#6948a2',
      points: ['Fair launch on Solana network'],
    },
    {
      title: 'Launch web application',
      date: 'Q3 2024',
      icon: '🕹',
      iconBg: '#6948a2',
      points: [
        'Fully interactive Goth Waifu AI companion',
        "Use $GWIFE to upgrade & customize your waifu's appearance, animations & more",
        'Waifu adapts to your conversational preferences',
        'Capable of text to image, text to video, & more',
      ],
    },
  ];
  return (
    <div className="mt-12 flex justify-center">
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
  );
};

export default Roadmap;
