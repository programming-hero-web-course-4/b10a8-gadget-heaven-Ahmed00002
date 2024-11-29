import { Link } from "react-router-dom";
import errorImg from "../../assets/error.png";
export default function Error() {
  return (
    <div className="center flex flex-col items-center justify-center h-screen">
      <img className="h-[200px]" src={errorImg} alt="error page icon" />
      <h1 className="text-3xl font-bold mt-6 text-primaryColor">Opps..!</h1>
      <p className="text-lg font-semibold mt-4 text-paraColor">
        The page you are looking is not found
      </p>
      <Link to={"/"}>
        <button className="btn btn-md  bg-primaryColor text-white rounded-full mt-6 px-6 hover:bg-transparent hover:border-2 hover:border-primaryColor hover:text-primaryColor">
          Go Home
        </button>
      </Link>
    </div>
  );
}
