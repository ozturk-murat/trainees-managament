import React from "react";
import { GoBell } from "react-icons/go";


function Topbar() {
  return (
    <div className="flex h-10 items-center justify-end bg-white pr-6">
      <GoBell size={17} color="#C4C4C4" />
    </div>
  );
}

export default Topbar;
