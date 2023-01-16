import {
  BuildingLibraryIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="bg-zinc-900 w-full h-24 py-10 px-5 flex justify-between">
      <LeftNav />
      <MidNav />
      <div className="space-x-5 flex items-center justify-center">
        <div className="border-2 border-zinc-700 rounded-full w-5 h-5" />
        <div className="border-2 border-zinc-700 rounded-full w-5 h-5" />
        <div className="border-2 border-zinc-700 rounded-full w-5 h-5" />
        <div className="bg-zinc-700 rounded-full w-8 h-8 !ml-10" />
        <div className="bg-zinc-700 rounded-lg w-16 h-8" />
      </div>
    </div>
  );
}

function LeftNav() {
  return (
    <div className="w-fit">
      <div className="space-x-5 flex justify-between items-center">
        <div className="w-3 h-3 bg-zinc-500 rounded-full mr-5" />
        <BuildingLibraryIcon className="w-5 h-5 text-zinc-400 cursor-pointer" />
        <CircleStackIcon className="w-5 h-5 text-zinc-400" />
      </div>
    </div>
  );
}

function MidNav() {
  return (
    <div className="space-x-5 flex items-center justify-center">
      <div className="border-2 border-zinc-700 rounded-full w-5 h-5" />
      <div className="bg-zinc-700 h-5 w-52 rounded-xl" />
    </div>
  );
}
