import React, { useContext } from "react";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import lottiSignIn from "../../assets/lotties/signin.json"; // make sure the path is correct
import { AuthContext } from "../../context/AuthContext/AuthContext";

const SignIn = () => {
  const { signIn, resetPassword } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Sign In user:", user);
        form.reset();
        Swal.fire({
          icon: "success",
          title: "Sign In Successful",
          text: `Welcome back, ${name || "User"}!`,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Sign In Failed",
          text: error.message,
        });
      });
  };

  const handleForgetPassword = async () => {
    const { value: email } = await Swal.fire({
      title: "Reset Password",
      input: "email",
      inputLabel: "Enter your email address",
      inputPlaceholder: "Email address",
      showCancelButton: true,
      confirmButtonText: "Send Reset Link",
    });

    if (email) {
      resetPassword(email)
        .then(() => {
          Swal.fire("Sent!", "Password reset link has been sent to your email.", "success");
        })
        .catch((error) => {
          Swal.fire("Error!", error.message, "error");
        });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={lottiSignIn} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Sign In now!</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name="name" className="input" placeholder="Your name" />

                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" required />

                <label className="label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" required />

                <div className="flex justify-between items-center mt-2">
                  <button type="button" className="link link-hover text-sm text-blue-500" onClick={handleForgetPassword}>
                    Forgot password?
                  </button>
                </div>

                <button type="submit" className="btn btn-neutral mt-4 w-full">Sign In</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
