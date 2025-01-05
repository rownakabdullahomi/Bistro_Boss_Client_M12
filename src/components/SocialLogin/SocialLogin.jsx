import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const {googleLogin} = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            console.log(res.user);
        })
    }
  return (
    <div className="p-8">
        <div className="divider"></div>
      <div>
        <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary">
         <FaGoogle className="mr-2"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
