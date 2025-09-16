import { Button } from "antd";
import React from "react";

const Profile = () => {

    return (
        <div className="w-full h-screen flex flex-col relative">
            {/* Background section */}
            <div className="w-full h-1/2 relative overflow-hidden bg-gradient-to-b from-blue-700 to-blue-100">
                {/* Avatar đè lên background - sử dụng transform translate */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
                    <img
                        className="w-24 h-24 rounded-full bg-white object-cover border-4 border-white shadow-lg"
                        src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                        alt="Avatar"
                    />
                </div>
            </div>

            {/* Content section - sử dụng transform translate để căn giữa */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md">
                <div className="text-center space-y-2 border bg-white border-gray-100 rounded-3xl shadow-lg px-8 py-10 mt-24">
                    <p className="text-lg font-semibold">Full name: Tran Anh Vu</p>
                    <p className="text-gray-600">Email: trananhvu@gmail.com</p>
                    <p className="text-gray-600">Phone: 0909090909</p>
                    <p className="text-gray-600">Address: Binh Quy, Da Nang</p>
                    <div className="pt-5">
                        <Button color="default" variant="dashed">
                            Edit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;