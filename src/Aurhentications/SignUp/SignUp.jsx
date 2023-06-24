import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvier/AuthProvider";
import { toast } from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    // const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        // Signed in
        const user = res.user;
        console.log(user);
        toast.success("Account Created Succesfully")
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
    navigate(from, { replace: true });
    form.reset();
  };
  return (
    <>
      <div className="hero max-h-screen my-14 bg-slate-100 ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mb-7">Sign Up!</h1>
          </div>
          <form
            onSubmit={handleSignUp}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-slate-200"
          >
            <div className="card-body ">
              <div className="form-control ">
                <label className="label">
                  <span>Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered text-white"
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span>Photo Url</span>
                </label>
                <input
                  type="photoURL"
                  name="photoULR"
                  placeholder="PhotoURl"
                  className="input input-bordered text-white"
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span>Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered text-white"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered text-white"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  SignUp
                </button>
              </div>

              <Link className="pt-3" to="/login">
                Already have an Account?{" "}
                <span className="text-blue-500">Please LogIn</span>
              </Link>
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
