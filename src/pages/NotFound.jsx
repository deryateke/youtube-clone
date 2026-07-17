import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page h-full flex-center">
      <div className="flex flex-col items-center max-w-80 gap-10 text-center">
        <img src="/monkey.png" alt="monkey" />

        <h1>Sorry, Not Found the page you are looking for</h1>

        <Link to="/" className="underline text-blue-500">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
