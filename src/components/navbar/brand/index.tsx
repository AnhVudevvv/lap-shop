import React, { Component } from 'react'

type BrandType = {
    name: string;
    icon: string;
    character: string;
}
// interface IBrand  = {
//     name : string ;
//     icon : string ;
//     character : string ;
// }

const dataBrands = [
    { name: "Dell", icon: "fa-d", character: "D" },
    { name: "HP", icon: "fa-h", character: "H" },
    { name: "Lenovo", icon: "fa-l", character: "L" },
    { name: "Asus", icon: "fa-a", character: "A" },
    { name: "Acer", icon: "fa-a", character: "a" },
    { name: "MSI", icon: "fa-m", character: "m" },
    { name: "Apple", icon: "fa-apple", character: "A" },
    { name: "Gigabyte", icon: "fa-g", character: "g" },
    { name: "LG", icon: "fa-l", character: "l" },
    { name: "Samsung", icon: "fa-s", character: "s" },
];
const Brand = () => {
    return (
        <div >
            <h1 className="mt-5 text-center text-2xl font-bold">Thương Hiệu Nổi Bật</h1>
            <div className='mt-5 grid grid-cols-2  md:grid-cols-5 lg:grid-cols-10 gap-6'>
                {dataBrands.map((item: BrandType, index: number) => (
                    <div key={index}>
                        <div className="rounded-xl p-3 text-center shadow-lg hover:shadow-lg/20 cursor-pointer hover:scale-105 transition-transform bg-[#e3faff]">
                            <div className="bg-teal-800 text-white w-10 h-10 rounded-full mb-4 text-center flex justify-center items-center m-auto">
                                <p className="font-bold text-2xl">{item.character}</p>
                            </div>
                            <p className="font-bold">{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Brand;
