import "./globals.css";
import Quest from "./QuestCard";

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
