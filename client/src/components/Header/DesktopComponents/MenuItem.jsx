import React from "react";

const MenuItem = ({ label, url, icon: Icon }) => {
  return (
    <a
      className="flex items-center text-sm font-semibold text-slate-900 transition-all hover:text-slate-600"
      href={url}
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
};

export default MenuItem;
