import MainLayout from "../layout/MainLayout";
const Members = () => {
  return (
    <MainLayout title={"Members"} showButton={"showButton"}>
      <form className=" max-w-max block ml-8 mt-4 text-xl shadow-lg bg-purple border -border-purple-500 rounded-xl p-4">
        <label htmlFor="member">Search Members</label>
        <input
          type="text"
          placeholder="Search Here..."
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full  py-0.5 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
          id="member"
          name="member"
        />
      </form>
    </MainLayout>
  );
};
export default Members;
