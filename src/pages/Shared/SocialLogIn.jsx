import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const SocialLogIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google signed in user:", result.user);
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
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
