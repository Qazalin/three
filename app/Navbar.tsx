import { BuildingLibraryIcon, CloudIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="border-b-2 border-b-zinc-800 w-full py-3 px-5 flex justify-between items-center">
      <LeftNav />
      <MidNav />
      <RightNav />
    </div>
  );
}

function LeftNav() {
  return (
    <div className="w-fit">
      <div className="space-x-5 flex justify-between items-center">
        <div className="w-3 h-3 bg-zinc-600 rounded-full mr-5" />
        <Link href="/guild">
          <BuildingLibraryIcon className="w-5 h-5 text-zinc-400 cursor-pointer" />
        </Link>
        <Link href="/cloud">
          <CloudIcon className="w-5 h-5 text-zinc-400 cursor-pointer" />
        </Link>
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

function RightNav() {
  return (
    <div className="space-x-5 flex items-center justify-center">
      <div className="border-2 border-zinc-700 rounded-full w-5 h-5" />
      <div className="border-2 border-zinc-700 rounded-full w-5 h-5" />
      <div className="border-2 border-zinc-700 rounded-full w-5 h-5" />
      <div className="bg-zinc-700 rounded-full w-8 h-8 !ml-10" />
      <div className="bg-zinc-700 rounded-lg w-16 h-8" />
    </div>
  );
}
