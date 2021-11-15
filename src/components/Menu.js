import { Link } from "react-router-dom";
//#F7FF52
function Menu(probs) {
  const { handleLogout } = probs;
  return (
    <div className="flex md:block md:ml-12 md:mt-12 sm:m-2 sm:mt-6 md:p-2 sm:p-1 mt-3 h-2/5 rounded-3xl static md:w-1/4 bg-black">
      <div className="flex-1 md:p-3 whitespace-nowrap sm:p-2 md:mt-2 sm:mt-1 m-1 p-1 text-center bg-yellow-200 text-black rounded-3xl font-serif md:text-2xl">
        <Link className="" to="/Addtodo">
          Add Todo
        </Link>
      </div>
      <div className="flex-1 md:p-3 whitespace-nowrap sm:p-2 md:mt-2 sm:mt-1 m-1 p-1 text-center bg-yellow-200 text-black rounded-3xl font-serif md:text-2xl">
        <Link className="" to="/Yourtodos">
          Your Todos
        </Link>
      </div>
      <div className="flex-1 md:p-3 whitespace-nowrap sm:p-2 md:mt-2 sm:mt-1 m-1 p-1 text-center bg-yellow-200 text-black rounded-3xl font-serif md:text-2xl">
        <Link className="" to="/Today">
          Today
        </Link>
      </div>
      <div className="flex-1 md:p-3 whitespace-nowrap sm:p-2 md:mt-2 sm:mt-1 m-1 p-1 text-center bg-yellow-100 text-black rounded-3xl font-serif md:text-2xl">
        <Link to="" className="" onClick={handleLogout}>
          Log Out
        </Link>
      </div>
    </div>
  );
}
export default Menu;
