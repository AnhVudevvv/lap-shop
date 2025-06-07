import React, { Component } from 'react'
import Home from '../../pages/home'
import {
    ShoppingCartOutlined
} from '@ant-design/icons';

const HotProduct = () => {
    return (
        <div className="px-12 mt-12 pb-5">
            <h1 className="text-2xl font-bold mb-4">Sản Phẩm Nổi Bật</h1>
            <div className="w-[300px] rounded-xl bg-white shadow-md hover:scale-105 transition-transform cursor-pointer">
                <div className='relative' >
                    <img className="rounded-xl" src="https://laptopgiasi.vn/wp-content/uploads/2022/08/Ban-Laptop-9560-dell-xps-15-gia-si-sieu-re-Uy-Tin-tphcm-Sinh-Vien-Van-Phong-Doanh-Nhan-Game-Do-Hoa-Core-i3-i5-i7-Ram-4Gb-8Gb-SSD-128Gb-256Gb-512Gb-5.jpg" alt="" />
                    <div className='absolute top-3 left-3 bg-yellow-500 rounded text-white px-2 py-1'>Giảm 10%</div>
                    <div className='absolute top-3 right-3 rounded text-white px-2 py-1 bg-red-500'>HOT</div>
                </div>
                <div className="p-2">
                    <h3 className="text-lg font-semibold mb-2">Dell XPS 15 (2025)</h3>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-lg font-bold text-blue-600">35.990.000đ</span>
                            <span className="text-sm text-gray-500 line-through ml-2">39.990.000đ</span>
                        </div>
                        <div className="py-1 px-2 bg-blue-500 rounded-full cursor-pointer hover:opacity-70">
                            <ShoppingCartOutlined className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default HotProduct;
