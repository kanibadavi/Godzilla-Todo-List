const Members = () => {
  return (
    <div>
      <div className="flex">
        <h1 className="flex items-start ml-8 text-3xl font-bold">Members</h1>
        <button className="ml-8 bg-white hover:bg-gray-100 text-gray-800  py-0.5 px-4 border border-gray-400 rounded-full shadow focus:outline-none focus:bg-white focus:border-orange-500">
          Add Member
        </button>
      </div>
      <form className=" block ml-8 mt-4 text-xl shadow-lg bg-purple border -border-purple-500 rounded-xl p-4">
        <label htmlFor="member">Search Members</label>
        <input
          placeholder="Search Here..."
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
          id="member"
          name="member"
        />
      </form>
    </div>
  );
};
export default Members;
