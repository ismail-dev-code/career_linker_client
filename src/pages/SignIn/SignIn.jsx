import React, { useContext } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import lottiSignIn from "../../assets/lotties/signin.json";

import { AuthContext } from "../../context/AuthContext/AuthContext";
import SocialLogIn from "../Shared/SocialLogIn";
import { Link, useLocation, useNavigate } from "react-router";

const SignIn = () => {
  const { signIn, resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
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
        navigate(from);
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
          Swal.fire(
            "Sent!",
            "Password reset link has been sent to your email.",
            "success"
          );
        })
        .catch((error) => {
          Swal.fire("Error!", error.message, "error");
        });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen px-4 md:px-8">
      <div className="hero-content flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
        {/* Left animation */}
        <motion.div
          className="w-1/4 hidden lg:block"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Lottie animationData={lottiSignIn} loop={true} />
        </motion.div>

        {/* Centered Form */}
        <div className="card bg-base-100 w-full max-w-md lg:max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign In now!</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label mt-4">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                  required
                />

                <label className="label mt-4">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                  required
                />

                <div className="flex justify-between items-center mt-2">
                  <button
                    type="button"
                    className="link link-hover text-sm text-blue-500"
                    onClick={handleForgetPassword}
                  >
                    Forgot password?
                  </button>
                </div>

                <button type="submit" className="btn btn-neutral mt-6 w-full">
                  Sign In
                </button>
              </fieldset>
            </form>

            <SocialLogIn form={from} />

            <p className="text-center mt-4 text-sm">
              New to this website? Please{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>

        {/* Right animation */}
        <motion.div
          className="w-1/4 hidden lg:block"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Lottie animationData={lottiSignIn} loop={true} />
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
