import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvier/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const LogIn = () => {
    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user)
                Swal.fire({
                    title: `user LogIn successfully`,
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                  })
                  // Signed in
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                <p className="text-red">{errorMessage}</p>
            });

        form.reset()
    }
  return (
    <>
      <div className="hero max-h-screen my-14 bg-slate-100 ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mb-7">Login now!</h1>  
          </div>
          <form onSubmit={handleLogIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-slate-200">
            <div className="card-body ">
              <div className="form-control ">
                <label className="label">
                  <span >Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              
              <Link className="pt-3" to="/signup">Don`t have an Account? <span className="text-blue-500">Please Register</span></Link>
                <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
