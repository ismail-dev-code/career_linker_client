import Lottie from "lottie-react";

import lottieRegister from "../../assets/lotties/register.json";
const Register = () => {

    const handleRegister =e=>{
        e.preventDefault()
            const form = e.target
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            console.log(name, email, password);
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={lottieRegister} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Register now!</h1>

            <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Your name" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              {/* <div>
                <a className="link link-hover">Forgot password?</a>
              </div> */}
              <button type="submit" className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
