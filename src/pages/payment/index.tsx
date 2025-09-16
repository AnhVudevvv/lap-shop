import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button } from "antd";
import { href, useParams } from "react-router-dom";
import { products } from "../products/fakedata"
import { Input } from "antd";
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

const Payment = () => {
    const { productId } = useParams();
    const product = products.find((item) => item.id == productId as any);

    const items = [
        {
            href: "/",
            title: <HomeOutlined />,
        },
        {
            href: `/product-detail/${productId}`,
            title: product?.name,
        },
        {
            title: "Thanh toán",
        },
    ];
    return (
        <div className="w-full m-0 p-0">
            <div>
                <Breadcrumb items={items} />
            </div>
            <div className="ml-24">
                <div className="my-5">
                    <h1 className="font-bold">Thanh toán đơn hàng</h1>
                </div>
                <div className="flex">
                    <div className="w-1/2 mr-5">
                        <div className="bg-white border rounded-lg shadow-md p-3 " >
                            <h2 className="font-bold mb-2">Thông tin giao hàng</h2>
                            <div className="flex w-full my-4">
                                <div className="w-1/2 ">
                                    <p className="text-xs ">Họ và tên</p>
                                    <Input placeholder="Nhập họ và tên" />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <p className="text-xs">Số điện thoại</p>
                                    <Input placeholder="Nhập số điện thoại" />
                                </div>
                            </div>
                            <div className="my-4">
                                <p className="text-xs">Email</p>
                                <Input placeholder="Nhập email" />
                            </div>
                            <div className="my-4">
                                <p className=" text-xs">Địa chỉ giao hàng</p>
                                <Input placeholder="Nhập địa chỉ giao hàng" />
                            </div>
                            <div className="my-4    ">
                                <p className="text-xs">Ghi chú đơn hàng</p>
                                <Input.TextArea placeholder="Nhập ghi chú đơn hàng" />
                            </div>
                        </div>
                        <div className="bg-white border rounded-lg shadow-md p-3 w-{70%} mt-3">
                            <h2 className="font-bold">Phương thức thanh toán</h2>
                            <Radio.Group className="flex flex-col">
                                <Radio className="text-xs my-2" value={1}>
                                    Thanh toán khi nhận hàng
                                </Radio>
                                <Radio className="text-xs my-2" value={2}>Thẻ tín dụng / Thẻ ghi nợ</Radio>
                                <Radio className="text-xs my-2" value={3}>Chuyển khoản ngân hàng</Radio>
                            </Radio.Group>
                            <div className="bg-gray-100 border rounded-lg p-3 mt-3">
                                <p className="text-sm">Thanh toán khi nhân hàng</p>
                                <p className="text-xs">Bạn sẽ thanh toán bằng tiền mặt khi nhận được sản phẩm . Phí COD: 30000đ</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border rounded-lg shadow-md p-3 w-1/3 h-fit">
                        <h2 className="font-bold">Đơn hàng của bạn</h2>
                        <div className="flex my-3">
                            <div>
                                <img className="w-20 h-20 border rounded-lg mr-3" src="https://readdy.ai/api/search-image?query=modern%20gaming%20laptop%20with%20RGB%20keyboard%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20minimalist%20studio%20lighting%2C%20high-end%20technology%20device%20showcase&width=600&height=400&seq=1&orientation=landscape" alt="" />
                            </div>
                            <div>
                                <p className="text-base my-1 break-words whitespace-normal ">ASUS TUF Gaming F15 FX506HC-HN002W</p>
                                <p className="text-xs mt-1 ">RAM: 8GB</p>
                                <div className="flex mt-3">
                                    <p className="text-xs my-1 mr-40">Số lượng: 1</p>
                                    <p className="text-xs my-1 ">Giá: 20.000.000đ</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-gray-300 my-4"></div>
                        <div>
                            <div className="flex justify-between my-2">
                                <p className="text-xs">Tạm tính</p>
                                <p className="text-xs"> 20.000.000đ</p>
                            </div> 
                            <div className="flex justify-between my-2"> 
                                <p className="text-xs">Phí vận chuyển</p>
                                <p className="text-xs">Miễn phí</p>
                            </div>
                            <div className="flex justify-between my-2">
                                <p className="text-xs">Phí COD:</p>
                                <p className="text-xs">30000đ</p>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-gray-300 my-4"></div>
                        <div className="flex justify-between my-2" >
                            <h1 className="font-bold">Tổng cộng: </h1>
                            <h1 className="text-red-600 font-bold">20.030.000đ</h1>
                        </div>
                        <Button className="w-full" type="primary">Xác nhận đặt hàng</Button>
                        <div className="border border-green-300 rounded-lg bg-green-50 my-2 py-2 pl-1 text-green-500">Thanh toán an toàn & bảo mật</div>
                        <p className="text-center">Cần hỗ trợ?</p>
                        <div className="flex justify-center gap-4">
                            <p className="text-blue-700">Gọi ngay: <a href="tel:19001234">1900 1234</a></p>
                            <p className="text-blue-700">chat</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )

}

export default Payment;