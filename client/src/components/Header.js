import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex mr-8 space-x-6 text-3xl">
        <Link to="/">Title</Link>
        <br />
        <Link to="/History">History</Link>
        <br />
        <Link to="/Members">Members</Link>
      </div>
    </>
  );
};

export default Header;
