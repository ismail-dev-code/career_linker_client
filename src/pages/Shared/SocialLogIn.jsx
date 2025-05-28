import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const SocialLogIn = ({ form }) => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google signed in user:", result.user);
        navigate(form || "/");
        Swal.fire({
          icon: "success",
          title: "Signed in with Google",
        });
      })

      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
        });
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      {/* Google Sign In */}
      <div className="mt-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-accent w-full"
        >
         <FcGoogle size={25} /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
