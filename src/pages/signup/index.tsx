import React, { useState } from "react";
import { Input } from "antd";
import { Button } from "antd";
import GoogleIcon from '../../assets/images/google.png';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const changeEmail = (e: any) => {
        console.log("Hiển thị: ", e.target.value);

        setEmail(e.target.value);
    }

    return (
        <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="flex border bg-white border-gray-200 rounded-lg w-fit shadow-lg">
                <div>
                    <img className="w-[500px] h-[599px] rounded-l-lg" src="https://readdy.ai/api/search-image?query=MSI%2520Raider%2520GE76%2520gaming%2520laptop%2520with%2520RGB%2520keyboard%2520on%2520a%2520sleek%2520desk%2520with%2520blue%2520lighting%252C%2520professional%2520product%2520photography%2520with%2520dark%2520background%2520and%2520dramatic%2520lighting%252C%2520high%2520resolution%252C%2520detailed%252C%2520sharp%2520focus%252C%2520commercial%2520quality&width=400&height=300&seq=101&orientation=landscape" alt="" />
                </div>
                <div className="mr-16 pl-14 pt-7">
                    <h1 className="font-bold text-lg">Sign Up</h1>
                    <p className="font-normal text-xs">Fill the form bellow to create your account</p>
                    <div className="flex">
                        <p className="text-base font-sans pt-5">Full name </p>
                        <p className="text-red-600 pt-5">*</p>
                    </div>
                    <Input placeholder="Enter your full name" />
                    <div className="flex">
                        <p className="text-base font-sans pt-1">Email </p>
                        <p className="text-red-600">*</p>
                    </div>
                    <Input
                        placeholder="Enter your email(@gmail.com)"
                        value={email}
                        onChange={(e) => changeEmail(e)}
                        status={!email.includes("@gmail.com") && email.length > 0 ? "error" : ""}
                    />
                    {!email.includes("@gmail.com") && email.length > 0 && (
                        <p className="text-red-500 text-xs mt-1">Email phải là @gmail.com</p>
                    )}
                    <div className="flex">
                        <p className="text-base font-sans pt-1">Phone number </p>
                        <p className="text-red-600">*</p>
                    </div>
                    <Input placeholder="Enter your phone number" />
                    <div className="flex">
                        <p className="text-base font-sans pt-1">Address </p>
                        <p className="text-red-600">*</p>
                    </div>
                    <Input placeholder="Enter your address" />
                    <div className="flex">
                        <p className="text-base font-sans pt-1">password </p>
                        <p className="text-red-600">*</p>
                    </div>
                    <Input.Password placeholder="Enter your password" />
                    <div className="flex">
                        <p className="text-base font-sans pt-1">confirm password </p>
                        <p className="text-red-600">*</p>
                    </div>
                    <Input.Password placeholder="Enter your confirm your password" />
                    <Button className="w-full mt-3" type="primary">Sign Up</Button>
                    <div className="border bg-gray-100 rounded-lg p-2 mt-2 cursor-pointer flex justify-center hover:border-blue-200">
                        <img className="w-4 h-4 mr-1 mt-1" src={GoogleIcon} alt="" />
                        <p>Sign up with Google</p>
                    </div>
                    <div className="flex mt-4 mb-7 justify-center">
                        <p className="font-normal text-xs mr-1">Already have an account?</p>
                        <p onClick={() => navigate('/signin')} className="font-normal text-xs cursor-pointer underline text-blue-500">Sign in</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;