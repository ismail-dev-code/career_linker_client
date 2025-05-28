import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { IoHomeOutline } from "react-icons/io5";
import { RiFindReplaceLine } from "react-icons/ri";
import { FaUsersViewfinder } from "react-icons/fa6";
import { LiaBlogSolid } from "react-icons/lia";
import { TbBrandSuperhuman } from "react-icons/tb";
import { SlEnvolopeLetter } from "react-icons/sl";
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
        <NavLink className="text-black mr-4" to="/">
          <IoHomeOutline />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black mr-4" to="/findJob">
          <RiFindReplaceLine />
          Find a Job
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black mr-4" to="/recruiters">
          <TbBrandSuperhuman />
          Recruiters
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black mr-4" to="/candidates">
          <FaUsersViewfinder />
          Candidates
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black mr-4" to="/blog">
          <LiaBlogSolid />
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black mr-4" to="/liveChat">
          <LiaBlogSolid />
          Live Chat
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/myApplication" className="text-black">
            <SlEnvolopeLetter />
            My Application
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar px-4 md:px-12 sticky top-0 z-50 bg-gradient-to-r from-blue-300 via-purple-200 to-pink-100 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
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
        <Link
          to={"/"}
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-violet-400 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-500 hover:to-violet-500"
        >
          CareerLinker
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (
          <button
            onClick={handleLogout}
            className="text-sm text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 px-3 py-1 rounded transition"
          >
            Sign Out
          </button>
        ) : (
          <>
            <Link
              to="/signIn"
              className="text-sm md:block hidden text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-3 py-1 rounded transition"
            >
              SignIn
            </Link>
            <Link
              to="/register"
              className="text-sm text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 px-3 py-1 rounded transition"
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
