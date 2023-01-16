import "./globals.css";

export default function MainPage() {
  return (
    <div className="mt-10 space-y-10 container mx-auto">
      <p className="text-5xl font-primary text-zinc-300">Start a quest today</p>
      <div className="grid grid-cols-3 gap-5">
        <Quest
          title="AI"
          subtitle="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        />
        <Quest
          title="AI"
          subtitle="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        />
        <Quest
          title="AI"
          subtitle="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        />
        <Quest
          title="AI"
          subtitle="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        />
        <Quest
          title="AI"
          subtitle="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        />
      </div>
    </div>
  );
}
type QuestProps = {
  title: string;
  subtitle: string;
};
function Quest({ title, subtitle }: QuestProps) {
  return (
    <div className="bg-indigo-500 rounded-xl p-5 flex flex-col justify-center">
      <h2 className="text-lg mb-2">{title}</h2>
      <p className="text-sm opacity-70">{subtitle}</p>
      <button className="bg-indigo-700 text-indigo-200 p-2.5 rounded-xl w-fit text-sm mt-6 self-end">
        Start
      </button>
    </div>
  );
}
