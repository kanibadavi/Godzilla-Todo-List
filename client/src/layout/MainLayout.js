import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "../components/Popup";
const MainLayuot = ({ children, title, showButton }) => {
  const [showPopup, setShowPopup] = useState(false);
  const PopupHandler = () => {
    setShowPopup(!showPopup);
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
              <form>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Add member's name..."
                  className="ml-2 mb-6 mt-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                ></input>
                <br />
                <label htmlFor="age">Age</label>
                <input
                  name="age"
                  id="age"
                  type="number"
                  placeholder="Add member's age..."
                  className="mb-6 ml-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                ></input>
                <br />
                <label htmlFor="github">Github Address</label>
                <input
                  name="github"
                  id="github"
                  type="url"
                  placeholder="Add member's Github Address ..."
                  className="mb-6 ml-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                ></input>
                <label htmlFor="linkedin">Linkedin Address</label>
                <input
                  name="linkedin"
                  id="linkedin"
                  type="url"
                  placeholder="Add member's linkedin Address ..."
                  className="mb-6 ml-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                ></input>
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
