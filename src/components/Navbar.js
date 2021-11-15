import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <div className="w-full bg-black font-serif md:text-6xl sm:text-4xl text-2xl text-center text-white shadow-2xl md:p-9 sm:p-6 p-3">
        <Link to="">TODO LIST</Link>
      </div>
    </div>
  );
}

export default Navbar;
