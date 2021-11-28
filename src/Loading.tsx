import React from "react";

export default function Loading() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative  w-2/3 h-10 py-2 my-1  theme flex justify-center items-center ">
        <div className="bg-red-600 w-5 h-5 rounded-full mx-1 relative animate-bounce "></div>
        <div className="bg-blue-600 w-5 h-5 rounded-full mx-1 relative animate-bounce del-250"></div>
        <div className="bg-green-600 w-5 h-5 rounded-full mx-1 relative animate-bounce del-400"></div>
      </div>
    </div>
  );
}
