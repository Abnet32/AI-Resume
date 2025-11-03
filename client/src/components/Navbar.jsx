import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/features/authSlice.js";
import { LogOutIcon, UserCircle2Icon } from "lucide-react";
const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    navigate("/");
    dispatch(logout);
  };
  return (
    <div className="shadow bg-white">
      <div className=" flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-700 transition-all">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">
            <UserCircle2Icon className="size-5 text-slate-600" />
            <p className="text-sm text-slate-700">
              <span className="font-semibold">{user.name}</span>
            </p>
          </div>{" "}
          <button
            onClick={logoutUser}
            className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            <LogOutIcon className="size-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
