import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import uuid from "react-uuid";
import ImageUploader from "../components/PhotoUploader";

const MainLayuot = ({ children, title, showButton }) => {
  const [showPopup, setShowPopup] = useState(false);
  const PopupHandler = () => {
    setShowPopup(!showPopup);
  };

  const [inputHandler, setInputHandler] = useState("");
  const input = (e) => {
    setInputHandler(e.target.value);
  };

  const [buttonHandler, setButtonHandler] = useState([]);
  const button = (e) => {
    e.preventDefault();
    setButtonHandler((prev) => [...prev, { text: inputHandler, id: uuid() }]);
    setInputHandler("");
  };
  const close = (e) => {
    e.preventDefault();
    const id = e.target.parentElement.parentElement.parentElement.id;
    const result = buttonHandler.filter((item) => {
      return item.id !== id;
    });

    setButtonHandler(result);
  };

  const [values, setValues] = useState({
    name: "",
    age: "",
    github: "",
    linkedin: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  {
  }
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
            >
              Add Member
            </button>
          )}
          {showPopup && (
            <Popup trigger={showPopup} setTrigger={PopupHandler}>
              <h1 className="text-xl">Add Member!</h1>
              <form className="grid grid-cols-2 ml-4 mr-4 text-lg max-w-[600px] w-[90%] py-6">
                <div>
                  <div className="flex justify-between gap-8 items-center ">
                    <label htmlFor="name" className="myLabel">
                      Name
                    </label>

                    <input
                      value={values.name}
                      onChange={handleInputChange}
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Add name..."
                      className="w-[180px] mb-6 mt-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                    />
                  </div>
                  <div className="flex justify-between gap-8 items-center ">
                    <label htmlFor="age" className="myLabel">
                      Age
                    </label>

                    <input
                      value={values.age}
                      onChange={handleInputChange}
                      name="age"
                      id="age"
                      type="number"
                      placeholder="Add age..."
                      className="w-[180px] mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                    ></input>
                  </div>
                  <div className="flex justify-between gap-8 items-center ">
                    <label
                      htmlFor="github"
                      className="myLabel whitespace-nowrap"
                    >
                      Github
                    </label>

                    <input
                      value={values.github}
                      onChange={handleInputChange}
                      name="github"
                      id="github"
                      type="url"
                      placeholder="Add Address ..."
                      className=" w-[180px] mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                    ></input>
                  </div>
                  <div className="flex justify-between gap-8 items-center ">
                    <label
                      htmlFor="linkedin"
                      className="myLabel whitespace-nowrap"
                    >
                      Linkedin
                    </label>

                    <input
                      value={values.linkedin}
                      onChange={handleInputChange}
                      name="linkedin"
                      id="linkedin"
                      type="url"
                      placeholder="Add Address ..."
                      className="w-[180px] mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                    ></input>
                  </div>
                  <div className="flex justify-between gap-8 items-center ">
                    <button
                      onClick={button}
                      className="myLabel ml-2 mr-2 btn btn-outline rounded-full btn-sm pl-4"
                    >
                      skills
                    </button>

                    <input
                      type="text"
                      placeholder="Add skills..."
                      className="w-[180px] mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                      id="skills"
                      name="skills"
                      value={inputHandler}
                      onChange={input}
                    />
                  </div>
                  <div className="flex flex-wrap">
                    {buttonHandler?.map((skill, index) => {
                      return (
                        <div
                          id={skill.id}
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <div className=" ml-3 mb-3 whitespace-nowrap p-2 border border-black rounded-full">
                            {skill.text}
                            <button
                              onClick={close}
                              className="btn btn-circle btn-xs"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="text-left m-4 grid grid-rows-4">
                  <div>
                    <p>choose your language</p>
                    <label htmlFor="language1">English</label>
                    <input
                      id="language1"
                      name="language1"
                      type={"checkbox"}
                      className="mr-2"
                    />
                    <label htmlFor="language2">Persian</label>
                    <input
                      name="language2"
                      type={"checkbox"}
                      className="mr-2"
                    />
                    <label htmlFor="language3">Kurdish</label>
                    <input
                      id="language3"
                      name="language3"
                      type={"checkbox"}
                      className="mr-2"
                    />
                  </div>

                  <div className="mt-4 row-span-2">
                    <ImageUploader />
                  </div>
                  <div className="text-end ">
                    <button className="  ml-2 mt-2 btn btn-outline rounded-full">
                      Submit
                    </button>
                  </div>
                </div>
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
