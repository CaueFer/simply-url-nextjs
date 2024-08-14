import React from "react";

export default function DefaultFooter() {
  const year = new Date().getFullYear();
  return (
    <div className="w-full px-10 md:px-20 py-6 text-sm border-t border-gray-600/50 border-gradient flex justify-between text-white">
      <a href="https://github.com/CaueFer" target="_blank"> © C-DEV {year.toString()}</a>
      <span className="hidden md:block"> Todos os direitos reservados. </span>
      <span className="block md:hidden"> Direitos reservados. </span>
    </div>
  );
}
