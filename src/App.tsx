import React from "react";

function App() {
  return (
    <div className="flex flex-col h-full relative">
      <header className="flex  pb-3 sm:pb-2 sm:pt-2 pt-3 relative justify-start items-start">
        <h1 className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl gitname text-center relative h-full px-2 ">
          gitFindr
        </h1>
      </header>
      <div className="flex relative justify-center items-center pt-6 pb-6">
        <form className="w-full relative flex justify-center items-center">
          <input
            type="text"
            placeholder="find a github user"
            className="px-1 rounded md:w-1/3 lg:w-1/4 h-11 w-3/4 xl:w-1/4 sm:w-3/4 border-black border-2 outline-none "
          />
          <button
            type="submit"
            className="cursor-pointer ml-2 rounded px-3 py-3 h-11 bg-green-300"
          >
            find
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
