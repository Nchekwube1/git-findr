import React from "react";
import cancel from "./styles/assets/cancel.svg";
import goto from "./styles/assets/goto.svg";
import list from "./styles/assets/list.svg";
import user from "./styles/assets/user.svg";
import loc from "./styles/assets/loc2.svg";

export interface res {
  img_url: string;
  location: string;
  git_url: string;
  name: string;
  repos: number;
  modify: () => void;
}

const Modal: React.FC<res> = ({
  git_url,
  img_url,
  location,
  modify,
  name,
  repos,
}) => {
  const click = () => {
    modify();
  };
  return (
    <div className="modal flex items-center justify-center w-full h-full  absolute top-0 right-0 z-50">
      <div className="relative w-2/3 sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2  py-5 rounded-md shadow-xl flex flex-col items-center bg-white ">
        <div
          className="bg-white absolute top-2 right-2 w-7 h-7 cursor-pointer"
          onClick={click}
        >
          <img
            src={cancel}
            className="absolute w-full h-full"
            alt="close modal"
          />
        </div>
        <div className="relative w-32 h-32 my-3 md:w-40 md:h-40 border-4 border-green-300 rounded-full bg-gray-50">
          <img
            src={img_url}
            alt="user"
            className="object-contain relative w-full h-full rounded-full "
          />
        </div>
        <div className="relative rounded-md w-2/3 h-10 py-2  px-2 my-1 shadow-inner theme flex  items-center ">
          <div className="relative w-5 h-7 sm:w-7 sm:h-9 mx-2 ">
            <img src={user} alt="username" className="relative w-full h-full" />
          </div>
          <div className="relative mx-2 ">
            <p className="text-sm sm:text-base capitalize">{name}</p>
          </div>
        </div>

        <div className="relative rounded-md w-2/3 h-10 py-2  px-2 my-1 shadow-inner theme flex  items-center ">
          <div className="relative w-5 h-7 sm:w-7 sm:h-9 mx-2 ">
            <img src={list} alt="list" className="relative w-full h-full" />
          </div>
          <div className="relative mx-2 ">
            <p className="text-sm sm:text-base capitalize">
              {repos} repositories
            </p>
          </div>
        </div>

        <div className="relative rounded-md w-2/3 h-10 py-2  px-2 my-1 shadow-inner theme flex  items-center ">
          <div className="relative w-5 h-7 sm:w-7 sm:h-9 mx-2 ">
            <img src={loc} alt="location" className="relative w-full h-full" />
          </div>
          <div className="relative mx-2 ">
            <p className="text-sm sm:text-base capitalize">{location}</p>
          </div>
        </div>

        <a
          href={git_url}
          className="relative rounded-md w-2/3 h-10 py-2  px-2 my-3 shadow-inner theme flex  items-center "
        >
          <div className="relative w-5 h-7 sm:w-7 sm:h-9 mx-2 ">
            <img src={goto} alt="location" className="relative w-full h-full" />
          </div>
          <div className="relative mx-2 ">
            <p className="text-sm sm:text-base capitalize">visit profile</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Modal;
