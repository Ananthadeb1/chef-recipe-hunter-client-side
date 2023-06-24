import { useContext } from 'react';
import {FaGoogle} from 'react-icons/fa'
import { AuthContext } from '../AuthProvier/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {googleSignIn} = useContext(AuthContext)
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(res=>{
            const user = res.user;
            console.log(user)
            Swal.fire({
                title: `${user.displayName} successfully LogIn with google.`,
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              })
            navigate(from, { replace: true });
        })
    }
  return (
    <>
      <div className="divider text-black">Social LogIn</div>
      <button onClick={handleGoogleSignIn} className='flex justify-center text-3xl'><FaGoogle></FaGoogle></button>
    </>
  );
};

export default SocialLogin;
