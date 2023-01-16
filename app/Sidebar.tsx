import { BuildingLibraryIcon, CloudIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-screen bg-zinc-900 w-52 py-10 px-5 flex flex-col">
      <div className="space-x-5 flex w-full justify-between items-center">
        <div className="w-3 h-3 bg-zinc-500 rounded-full" />
        <div className="flex space-x-4">
          <Link href="/guild">
            <BuildingLibraryIcon className="w-5 h-5 text-zinc-400 cursor-pointer" />
          </Link>
          <Link href="/cloud">
            <CloudIcon className="w-5 h-5 text-zinc-400 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
