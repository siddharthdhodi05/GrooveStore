import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex min-w-32 items-center  gap-1.5 text-indigo-600 hover:text-indigo-900 transition-all"
    >
      <MusicalNoteIcon className="h-6 w-6" />

      <span className="text-base font-bold uppercase tracking-normal mt-1 text-slate-950">
        Groove
      </span>
    </Link>
  );
};

export default Logo;
