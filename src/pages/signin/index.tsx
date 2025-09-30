import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const OnclickLogin = () => {
        const urlLogin = "https://lapshop-be.onrender.com/api/auth/login"
        axios.post(urlLogin, {
            username: name,
            password: password
        })
            .then(function (response) {
                console.log("Thanh cong", response.data);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate("/");
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f3f5f0]">
            <div className="bg-white rounded-2xl shadow-lg flex w-[800px] overflow-hidden">
                <div className="w-1/2 flex items-center justify-center p-6">
                    <img
                        src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-young-woman-sits-and-works-at-a-computer-png-image_6317827.png"
                        alt=""
                    />
                </div>

                <div className="w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign in</h2>

                    <div className="mb-4">
                        <label className="flex items-center border-b border-gray-400 py-2">
                            <i className="fa-solid fa-user text-gray-500"></i>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full focus:outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center border-b border-gray-400 py-2">
                            <i className="fa-solid fa-lock text-gray-500"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full focus:outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <span
                            onClick={() => navigate("/register")}
                            className="text-sm text-blue-500 hover:underline cursor-pointer"
                        >
                            Create an account
                        </span>
                    </div>

                    <button
                        onClick={() => OnclickLogin()}
                        className="bg-sky-500 text-white w-full py-2 rounded hover:bg-sky-600"
                    >
                        Log in
                    </button>

                    <p className="text-center text-sm mt-6 mb-2">Or login with</p>
                    <div className="flex justify-center space-x-4">
                        <button className="text-gray-600 hover:text-blue-600">
                            <i className="fa-brands fa-facebook"></i>
                        </button>
                        <button className="text-gray-600 hover:text-red-600">
                            <i className="fa-brands fa-google"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;