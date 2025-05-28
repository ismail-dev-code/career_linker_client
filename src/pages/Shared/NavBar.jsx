import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, log out",
    });

    if (result.isConfirmed) {
      try {
        await logOut();
        Swal.fire("Logged out!", "You have been signed out.", "success");
        navigate("/signIn");
      } catch (error) {
        console.error("Logout failed", error);
        Swal.fire("Error", "Something went wrong during logout.", "error");
      }
    }
  };

  const links = (
    <>
      <li>
        <NavLink className="text-black" to="/">Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/myApplication">My Application</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-gradient-to-r from-blue-300 via-purple-200 to-pink-100 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">CareerLinker</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (
          <button
            onClick={handleLogout}
            className="text-sm bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition"
          >
            Sign Out
          </button>
        ) : (
          <>
            <Link
                to="/signIn"
                className="text-sm bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transition"
              >
                SignIn
              </Link>
            <Link
                to="/register"
                className="text-sm bg-green-500 hover:bg-green-600 px-3 py-1 rounded transition"
              >
                Register
              </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
