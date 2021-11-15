import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/Signup";
import Addtodo from "./components/Addtodo";
import Menu from "./components/Menu";
import Yourtodos from "./components/Yourtodos";
import Today from "./components/Today";
import fire from "./fire";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPaswwordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPaswwordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPaswwordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPaswwordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <Router exact>
      <Navbar />
      <div
        className=" absolute h-full w-full bg-gray-500"
        style={{
          backgroundImage: "url(../../components/images/bg.jpg)",
        }}
      >
        <div className="flex flex-col md:flex-row sm:flex-col w-full absolute">
          {user ? (
            <Menu handleLogout={handleLogout} />
          ) : (
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              emailError={emailError}
              passwordError={passwordError}
              setHasAccount={setHasAccount}
            />
          )}

          <main>
            <Switch>
              <Route path="/Signup" component={SignUp} />
              <Route path="/Addtodo" component={Addtodo} />
              <Route path="/YourTodos" component={Yourtodos} />
              <Route path="/Today" component={Today} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
