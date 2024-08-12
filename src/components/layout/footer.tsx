import React from "react";

export default function DefaultFooter() {
  const year = new Date().getFullYear();
  return (
    <div className="w-full px-20 py-6 text-sm border-t border-gray-600/50 border-gradient flex justify-between text-white">
      <span> © C-DEV {year.toString()}</span>
      <span> All rights reserved. </span>
    </div>
  );
}
