import { useState } from "react";
//import { loginUser, registerUser } from "../services/authService";
import "../css/LoginForm.css"

export function LoginForm() {

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    try {
    //
    //   setLoading(true);
    //
    //   if (isLogin) {
    //
    //     const data = await loginUser(email, password);
    //
    //     console.log("Login successful");
    //
    //     console.log("Access Token:", data.accessToken);
    //     console.log("Refresh Token:", data.refreshToken);
    //
    //     // Temporary storage
    //     localStorage.setItem(
    //         "accessToken",
    //         data.accessToken
    //     );
    //
    //     localStorage.setItem(
    //         "refreshToken",
    //         data.refreshToken
    //     );
    //
    //   } else {
    //
    //     if (password !== confirmPassword) {
    //       setError("Passwords do not match");
    //       return;
    //     }

        // const data = await registerUser(
        //     name,
        //     email,
        //     password
        // );

        //console.log("Registration successful", data);

        // Switch to login
        setIsLogin(true);

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");


    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }
  };

  return (
      <div className={"container"}>

        <div className={"formBox"}>

          <h1>
            {isLogin ? "Login" : "Sign Up"}
          </h1>

          <p className={"subtitle"}>
            {isLogin
                ? "Login to your account"
                : "Create a new account"}
          </p>

          <form onSubmit={handleSubmit}>

            {!isLogin && (
                <div className={"inputGroup"}>

                  <label>Name</label>

                  <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) =>
                          setName(e.target.value)
                      }
                  />

                </div>
            )}

            <div className={"inputGroup"}>

              <label>Email</label>

              <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                      setEmail(e.target.value)
                  }
              />

            </div>

            <div className={"inputGroup"}>

              <label>Password</label>

              <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                      setPassword(e.target.value)
                  }
              />

            </div>

            {!isLogin && (
                <div className={"inputGroup"}>

                  <label>Confirm Password</label>

                  <input
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) =>
                          setConfirmPassword(e.target.value)
                      }
                  />

                </div>
            )}

            {error && (
                <p style={{ color: "red" }}>
                  {error}
                </p>
            )}

            <button
                type="submit"
                className={"button"}
                disabled={loading}
            >
              {loading
                  ? "Please wait..."
                  : isLogin
                      ? "Login"
                      : "Create Account"}
            </button>

          </form>

          <p className={"switchText"}>

            {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}

            <button
                className={"linkButton"}
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError("");
                }}
            >
              {isLogin ? " Sign Up" : " Login"}
            </button>

          </p>

        </div>

      </div>
  );
}