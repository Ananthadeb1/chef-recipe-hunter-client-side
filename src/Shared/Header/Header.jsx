/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Aurhentications/AuthProvier/AuthProvider";
import { toast } from "react-hot-toast";
import { FaUser } from "react-icons/fa";

const Header = () => {

  const {user,logOut} = useContext(AuthContext);
  const navigate = useNavigate()
  const handleSignOut =()=>{
    logOut()
    .then(() => {
      toast.success('Log Out Success')
      navigate('/login')
  }).catch((error) => {
      toast.success(error.errorMessage)
  });
  }
  const navOptions = (
    <>
      <li>
        <NavLink  to="/" className={({isActive}) =>  isActive ? 'text-orange-500 font-bold mx-4': 'mx-4'}>Home</NavLink>
      </li>
      <li>
        <NavLink  to="/blog" className={({isActive}) =>  isActive ? 'text-orange-500 font-bold mx-4': 'mx-4'}>Blog</NavLink>
      </li>
      {user ? ( 
          <li>
            <NavLink onClick={handleSignOut} >SignOut</NavLink>
          </li>
      ) : (
        
          <li>
            <NavLink to="/login" className={({isActive}) => isActive ? 'text-orange-500 font-bold mx-4': 'mx-4'}>LogIn</NavLink>
          </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-slate-900 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-slate-900 rounded-box w-52 "
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Chef's World</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu-horizontal px-1 ">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">
            <FaUser></FaUser>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
