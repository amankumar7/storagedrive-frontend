import React, { useState } from "react";
import "../css/Auth.css"
import folderIcon from "../assets/icons8-folder-96.png";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            console.log("Login", {
                email: form.email,
                password: form.password,

            });
            alert("emal: "+form.email+ " password: "+ form.password);

        } else {
            console.log("Register", form);
            alert("emal: "+form.email+ " username: "+ form.username + " password: "+ form.password);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-content">
                    <div className="brand">
                        <img
                            src={folderIcon}
                            alt="App Logo"
                            className="brand-icon"
                        />
                        <span>Cloud<span>Box</span></span>
                    </div>
                    <div className="heading-section">
                        <div className="eyebrow">
                            {isLogin ? "WELCOME BACK" : "START FOR FREE"}
                        </div>

                        <h1>
                            {isLogin
                                ? "Welcome back."
                                : "Create your account."}
                            <span className="yellow-dot">.</span>
                        </h1>

                        <p>
                            {isLogin ? (
                                <>
                                    Don't have an account?{" "}
                                    <button
                                        className="link-button"
                                        onClick={() => setIsLogin(false)}
                                    >
                                        Sign up
                                    </button>
                                </>
                            ) : (
                                <>
                                    Already a member?{" "}
                                    <button
                                        className="link-button"
                                        onClick={() => setIsLogin(true)}
                                    >
                                        Log in
                                    </button>
                                </>
                            )}
                        </p>

                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="auth-form">

                        {/* Name - Signup only */}
                        {!isLogin && (
                            <div className="field">

                                <label>Name</label>

                                <div className="input-container">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        value={form.username}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>
                        )}

                        {/* Email */}
                        <div className="field">

                            <label>Email</label>

                            <div className="input-container">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>

                        {/* Password */}
                        <div className="field">

                            <label>Password</label>

                            <div className="input-container">
                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    placeholder="••••••••"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                />

                                <button
                                    type="button"
                                    className="show-password"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? "◉" : "◌"}
                                </button>

                            </div>

                        </div>

                        {/* Forgot password */}
                        {isLogin && (
                            <div className="forgot-container">
                                <button
                                    type="button"
                                    className="forgot-button"
                                >
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        {/* Buttons */}
                        <div className="button-row">

                            <button
                                type="button"
                                className="secondary-button"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin
                                    ? "Create account"
                                    : "Back to login"}
                            </button>

                            <button
                                type="submit"
                                className="primary-button"
                            >
                                {isLogin
                                    ? "Log in"
                                    : "Create account"}

                                <span>→</span>
                            </button>

                        </div>

                    </form>

                </div>

                {/* RIGHT VISUAL AREA */}
                <div className="visual-section">

                    <div className="visual-overlay"></div>

                    <div className="visual-content">

                        <img
                            src={folderIcon}
                            alt="Folder"
                            className="large-folder"
                        />

                        <h2>
                            Your files.
                            <br />
                            <span>Anywhere.</span>
                        </h2>

                        <p>
                            Store, manage and access your
                            files from anywhere.
                        </p>

                    </div>

                    <div className="visual-decoration decoration-one"></div>
                    <div className="visual-decoration decoration-two"></div>

                </div>

            </div>

        </div>
    );
}