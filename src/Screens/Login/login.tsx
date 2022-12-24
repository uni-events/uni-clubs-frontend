import LoginNavbar from "../../Components/loginNavBar";
import pfp from "../../Assets/pfp.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-screen h-screen bg-WhiteBG dark:bg-BlackBG overflow-x-hidden ">
        <LoginNavbar />
        <div className="flex items-center justify-center h-3/4 mx-4 md:mx-auto mt-12 md:mt-0 bg-WhiteBG dark:bg-BlackBG">
          <div className="px-8 py-6 text-left bg-BlueGrey text-black dark:bg-BlueBlack dark:text-WhiteBG shadow-lg rounded-lg">
            <div className="flex justify-center drop-shadow-md">
              <img
                className="mx-auto mt-4 mb-4 h-24 w-24 object-cover rounded-lg"
                src={pfp}
                alt="club logo"
              />
            </div>
            <h3 className="text-2xl font-bold text-center">
              Login to your Club Account
            </h3>
            <form action="">
              <div className="mt-4">
                <div>
                  <label className="block" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 mt-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-Green"
                  />
                  <span className="text-xs tracking-wide text-red-600">
                    Email field is required
                  </span>
                </div>
                <div className="mt-4 mb-4">
                  <label className="block">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-Green"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <NavLink
                    to="/dashboard"
                    className="px-6 py-2 mt-4 text-white bg-Blue rounded-lg hover:bg-Green"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/404"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
