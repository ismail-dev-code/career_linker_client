import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import lottieRegister from "../../assets/lotties/register.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router";
import SocialLogIn from "../Shared/SocialLogIn";
import { motion as Motion } from "framer-motion";
const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;

    if (name.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Name",
        text: "Name should be at least 6 characters long!",
      });
      return;
    }

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password",
        html: `
          Password must contain:<br>
          • At least <b>1 uppercase</b> letter<br>
          • At least <b>1 lowercase</b> letter<br>
          • At least <b>1 special character</b> (!@#$%^&*)<br>
          • And be at least <b>6 characters</b> long
        `,
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Password Mismatch",
        text: "Password and Confirm Password do not match!",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Registered user:", user);
        form.reset();
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: `Welcome, ${name}!`,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen py-12 bg-base-200 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Animation (Reversed) */}
        <div className="w-full md:w-1/3 hidden lg:flex justify-center">
          <div className="max-w-xs md:max-w-sm lg:max-w-md w-full -scale-x-100">
            <Lottie animationData={lottieRegister} />
          </div>
        </div>

        {/* Form */}

        <Motion.div
          className="w-full md:w-8/12 lg:w-4/12 bg-base-100 shadow-xl rounded-xl p-6 md:p-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-2xl font-bold mb-3 text-center">
            Create an Account
          </h1>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label font-medium">Name</label>
              <input
                required
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label className="label font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full pr-10"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer text-xl text-gray-500"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
            </div>

            <div>
              <label className="label font-medium">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="input input-bordered w-full pr-10"
                  placeholder="Confirm Password"
                  required
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 cursor-pointer text-xl text-gray-500"
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full text-white text-sm bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-4 py-2 rounded transition cursor-pointer"
              >
                Register
              </button>
            </div>
          </form>

          <SocialLogIn />

          <p className="text-center mt-4">
            Already have an account? Please{" "}
            <Link to="/signIn" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </Motion.div>

        {/* Right Animation */}
        <div className="w-full md:w-1/3 hidden lg:flex justify-center">
          <div className="max-w-xs md:max-w-sm lg:max-w-md w-full">
            <Lottie animationData={lottieRegister} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
