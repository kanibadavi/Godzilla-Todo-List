import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";

const MainLayuot = ({ children, title, showButton }) => {
  const [showPopup, setShowPopup] = useState(false);
  const PopupHandler = () => {
    setShowPopup(!showPopup);
  };

  // const [inputHandler, setInputHandler] = useState(null);
  // const change = (e) => {
  //   setInputHandler(e.target.value);
  // };

  const [buttonHandler, setButtonHandler] = useState(false);
  const button = (e) => {
    e.preventDefault();
    setButtonHandler(true);
  };
  return (
    <>
      <header className="flex w-full justify-between mt-8">
        <div className="flex">
          <h1 className="flex items-start ml-8 text-3xl font-bold">{title}</h1>
          {showButton && (
            <button
              onClick={() => {
                setShowPopup(true);
              }}
              className="ml-8 bg-white hover:bg-gray-100 text-gray-800  py-0.5 px-4 border border-gray-400 rounded-full shadow focus:outline-none focus:bg-white focus:border-orange-500"
              h-10
            >
              Add Member
            </button>
          )}
          {showPopup && (
            <Popup trigger={showPopup} setTrigger={PopupHandler}>
              <h1 className="text-xl">Add Member!</h1>
              <form className="ml-4 mr-4 text-lg max-w-[600px] w-[90%] py-6">
                <div className="flex justify-between gap-8 items-center ">
                  <label htmlFor="name" className="pl-4">
                    Name
                  </label>

                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Add member's name..."
                    className="w-[200px] mb-6 mt-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                  />
                </div>
                <div className="flex justify-between gap-8 items-center ">
                  <label htmlFor="age" className="pl-4">
                    Age
                  </label>

                  <input
                    name="age"
                    id="age"
                    type="number"
                    placeholder="Add member's age..."
                    className="w-[200px] mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                  ></input>
                </div>
                <div className="flex justify-between gap-8 items-center ">
                  <label htmlFor="github" className="pl-4 whitespace-nowrap">
                    Github Address
                  </label>

                  <input
                    name="github"
                    id="github"
                    type="url"
                    placeholder="Add Address ..."
                    className="w-[200px] mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                  ></input>
                </div>
                <div className="flex justify-between gap-8 items-center ">
                  <label htmlFor="linkedin" className="pl-4 whitespace-nowrap">
                    Linkedin Address
                  </label>

                  <input
                    name="linkedin"
                    id="linkedin"
                    type="url"
                    placeholder="Add Address ..."
                    className="w-[200px] mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                  ></input>
                </div>
                <div className="flex justify-between gap-8 items-center ">
                  <button
                    onClick={button}
                    className=" ml-2 mr-2 btn btn-outline rounded-full btn-sm pl-4"
                  >
                    skills
                  </button>

                  <input
                    type="text"
                    placeholder="Add member's skills..."
                    className="w-[200px] mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                    id="skills"
                    name="skills"
                    // value={inputHandler}
                    onChange={(e) => {
                      buttonHandler(e.target.value);
                    }}
                  />
                </div>
                {buttonHandler ? (
                  <div className="flex justify-between gap-8 items-center mt-6">
                    <div className="whitespace-nowrap p-2 border border-black rounded-full">
                      skill 1
                    </div>
                  </div>
                ) : null}
              </form>
            </Popup>
          )}
        </div>
        <nav className="flex mr-8 space-x-6 text-3xl">
          <Link to="/">Home</Link>
          <br />
          <Link to="/History">History</Link>
          <br />
          <Link to="/Members">Members</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default MainLayuot;
