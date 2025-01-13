import { BiLogIn } from "react-icons/bi";
import logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";
import { HiOutlineEye } from "react-icons/hi";

function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-light">
      <div className="">
        <div className="flex w-full overflow-hidden rounded-2xl bg-white">
          <div className="flex w-[300px] flex-col justify-between bg-[#F4F5F6] p-6">
            <img src={logo} className="h-16 w-16" />
            <div>
              <h1 className="text-xl font-bold text-dark">Mark8</h1>
              <p className="text-xs text-lightDark">By Awesomity Lab</p>
            </div>
            <p className="text-xs text-lightDark">&copy;2024 Awesomity Lab</p>
          </div>
          <div className="w-[300px] space-y-8 p-6">
            <h1 className="-mb-5 text-2xl font-bold">Login</h1>
            <div>
              <label className="text-xs font-medium">Email</label>

              <div className="relative">
                <input
                  placeholder="Enter Email"
                  className="rounded-md bg-[#F4F5F6] px-4 py-2 focus:outline-none sm:px-8 sm:py-2 sm:placeholder:text-[#475569]"
                />
                <CiSearch className="absolute left-1 top-2 font-medium text-accent sm:left-2 sm:top-3" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium">Password</label>
              <div className="relative">
                <input
                  placeholder="Enter Password"
                  className="rounded-md bg-[#F4F5F6] px-4 py-2 focus:outline-none sm:px-8 sm:py-2 sm:placeholder:text-[#475569]"
                />
                <CiSearch className="absolute left-1 top-2 font-medium text-accent sm:left-2 sm:top-3" />
                <HiOutlineEye className="absolute right-2 top-2 font-medium sm:right-3 sm:top-3" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a href="#" className="underline">
                Forgot Password?
              </a>
              <NavLink
                to="/home"
                className="flex items-center space-x-1 rounded-lg bg-accent px-4 py-2"
              >
                <span>Login</span> <BiLogIn />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-between rounded-2xl bg-white p-6">
          <div>
            <p className="text-black">New Here?</p>
            <p className="text-xs text-lightDark">Create an account</p>
          </div>
          <div>
            <button className="flex items-center space-x-2 rounded-lg border-2 border-light px-6 py-2">
              <span className="font-bold text-dark">Register Here</span>{" "}
              <LuMoveRight className="text-accent" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
