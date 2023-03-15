import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex h-screen items-center w-full justify-center flex-col gap-4">
        <h1 className="text-8xl">Error 404</h1>
        <Link to="/">
          <button className="btn btn-primary">Back to Home</button>
        </Link>
      </div>
    </>
  );
};
export default ErrorPage;
