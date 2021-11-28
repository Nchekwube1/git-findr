import React from "react";

function App() {
  return (
    <div className="flex flex-col h-full relative">
      <header className="flex  pb-3 pt-3 relative justify-start items-start">
        <h1 className=" text-4xl gitname text-center relative h-full px-2 ">
          gitFindr
        </h1>
      </header>
      <body className="flex relative justify-center items-center pt-6 pb-6">
        <form className="w-full relative flex flex-col justify-center items-center">
          <input
            type="text"
            className="rounded h-10 sm:w-40 border-black border-2 outline-none "
          />
        </form>
      </body>
    </div>
  );
}

export default App;
