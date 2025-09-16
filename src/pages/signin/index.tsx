import { Button, Checkbox, Input } from "antd";
import React from "react";
import GoogleIcon from '../../assets/images/google.png';
import { useNavigate } from "react-router-dom";
const Signin = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
            <div className="flex border border-gray-200 bg-white rounded-lg w-fit shadow-lg">
                <div className="mr-16 pl-14 pt-7">
                    <h1 className="font-bold text-lg">Sign In</h1>
                    <p className="font-normal text-xs">Login to your account using your credentials</p>

                    <div className="flex mt-5">                <p className="text-base font-sans pt-1">Email </p> <p className="text-red-600">*</p></div>
                    <Input placeholder="Enter your email(@gmail.com)"></Input>

                    <div className="flex">                <p className="text-base font-sans pt-1">password </p> <p className="text-red-600" >*</p></div>
                    <Input.Password placeholder="Enter your password" />
                    <div className="flex mt-3">
                        <Checkbox>Remember me</Checkbox>
                        <p className="text-xs ml-2 mt-1 cursor-pointer   text-blue-500 ">Forgot password?</p>
                    </div>
                    <Button className="w-full mt-3" type="primary">Sign In</Button>
                    <div className="border bg-gray-100 rounded-lg p-2 mt-2 cursor-pointer hover:border-blue-200  flex justify-center">
                        <img className="w-4 h-4 mr-1 mt-1" src={GoogleIcon} alt="" />
                        <p >Sign in with Google</p>
                    </div>
                    <div className="flex mt-4 mb-7 justify-center">
                        <p className="font-normal text-xs mr-1">Don't have an account?</p>
                        <p onClick={()=>navigate('/signup')} className="font-normal text-xs cursor-pointer underline text-blue-500 " >Sign up</p>
                    </div>
                </div>
                <div>
                    <img className="w-[500px] h-[399px] rounded-r-lg" src="https://readdy.ai/api/search-image?query=MSI%2520Raider%2520GE76%2520gaming%2520laptop%2520with%2520RGB%2520keyboard%2520on%2520a%2520sleek%2520desk%2520with%2520blue%2520lighting%252C%2520professional%2520product%2520photography%2520with%2520dark%2520background%2520and%2520dramatic%2520lighting%252C%2520high%2520resolution%252C%2520detailed%252C%2520sharp%2520focus%252C%2520commercial%2520quality&width=400&height=300&seq=101&orientation=landscape" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Signin;