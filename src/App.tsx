import React, { useState } from "react";
import Loading from "./Loading";
import git from "./styles/assets/git.png";
import axios from "axios";
import Modal from "./Modal";
interface props {
  img_url: string;
  location: string;
  git_url: string;
  name: string;
  repos: number;
}
function App() {
  const [userName, setUserName] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [modal, setModalf] = useState<boolean>(false);
  const [user, setUser] = useState<props>({
    img_url: "",
    git_url: "",
    name: "",
    repos: 0,
    location: "",
  });
  const [userErr, setUserErr] = useState<boolean>(false);
  const gitUrl = `https://api.github.com/users/${userName}`;

  const setModal = () => {
    return setModalf(false);
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorText("");
    setLoading(true);
    setUserName(userName.replace(/ /g, ""));
    axios
      .get(gitUrl)
      .then((res) => {
        setUserName("");
        const data = res.data;
        setLoading(false);
        if (data) {
          setUser({
            git_url: data.html_url,
            img_url: data.avatar_url,
            location: data.location,
            name: data.name,
            repos: data.public_repos,
          });
          setModalf(true);
        }
      })
      .catch((err) => {
        if (err) {
          setLoading(false);
          setErrorText("user not found");
          setTimeout(() => setErrorText(""), 3000);
          setUserErr(true);
          setUserName("");
        }
      });
  };
  return (
    <div className="flex flex-col h-screen w-full relative">
      {modal && (
        <Modal
          git_url={user.git_url}
          img_url={user.img_url}
          location={user.location}
          modify={setModal}
          name={user.name}
          repos={user.repos}
        />
      )}
      <header className="flex  pb-3 sm:pb-2 sm:pt-2 pt-3 relative justify-start items-start">
        <div className="relative h-8 w-8 flex justify-center items-center ml-2">
          <img src={git} alt="github" className="relative w-full h-full" />
        </div>
        <h1 className=" text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl gitname text-center relative h-full px-1 ">
          gitFindr
        </h1>
      </header>
      <div className="flex relative justify-center items-center pt-6 pb-6">
        <form
          className="w-full relative flex justify-center items-center"
          onSubmit={submit}
        >
          <input
            type="text"
            value={userName}
            // userName.replace(/ /g, "")
            onChange={(e) => setUserName(e.target.value.replace(/ /g, ""))}
            placeholder="find a github user"
            className="theme px-1 rounded md:w-2/3 lg:w-1/4 h-10 md:h-12 w-3/4 xl:w-1/4 sm:w-3/4 border-green-500 border-2 outline-none "
          />
          <button
            type="submit"
            className="cursor-pointer ml-2 rounded px-3 py-3 h-10 md:h-12 bg-green-300"
          >
            find
          </button>
        </form>
      </div>
      {loading && <Loading />}
      {userErr && (
        <div className="flex w-full py-2 justify-center items-center">
          <p className="text-sm capitalize">{errorText}</p>
        </div>
      )}
    </div>
  );
}

export default App;
