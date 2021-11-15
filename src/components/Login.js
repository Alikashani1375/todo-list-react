import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <div className="w-96 m-auto mt-24 rounded p-5 bg-gray-300">
      <div className="">
        <label className="mr-3">Email :</label>
        <input
          className="w-full mt-3 mb-3 border-red rounded py-3 px-4 text-grey-darker"
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-red-500">{emailError}</p>
        <label className="mr-3">Password :</label>
        <input
          className="w-full mt-3 mb-3 border-red rounded py-3 px-4 text-grey-darker"
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-500">{passwordError}</p>
        <div className="btn">
          {hasAccount ? (
            <>
              <button
                className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={handleLogin}
              >
                Sign In
              </button>
              <p className="mt-3">
                Dont Have An Account?
                <button
                  className="text-blue-400"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign Up
                </button>
              </p>
            </>
          ) : (
            <>
              <button
                className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={handleSignup}
              >
                Sign Up
              </button>
              <p className="mt-3">
                Have An Account ?
                <button
                  className="text-blue-400"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign In
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
