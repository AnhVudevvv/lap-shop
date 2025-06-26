import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { isDesktop } from 'react-device-detect'
import ProductsCard from "./productCard";
import { IHotProduct, dataHotProducts } from "./hotproduct.interface";
// interface IHotProduct {
//     name: string;
//     image: string;
//     discount: number;
//     price: number;
//     oldPrice: number;
//     isHot: boolean;
// }

// const dataHotProducts: IHotProduct[] = [
//     {
//         name: "Dell XPS 15 (2025)",
//         image:
//             "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333886/dell-inspiron-15-3520-i5-n5i5057w1-2-638724479214886489-750x500.jpg",
//         discount: 10,
//         price: 35990000,
//         oldPrice: 39990000,
//         isHot: true,
//     },
//     {
//         name: "Asus ROG Zephyrus G14",
//         image:
//             "https://cdn.tgdd.vn/Products/Images/44/302466/asus-gaming-rog-zephyrus-g14-ga402rj-r7-l8030w-glr-fix-2-750x500.jpg",
//         discount: 7,
//         price: 32490000,
//         oldPrice: 34990000,
//         isHot: true,
//     },
//     {
//         name: "MacBook Pro 16 M3 Pro",
//         image:
//             "https://cdn.tgdd.vn/Products/Images/44/236131/laptopapplemacbookprom1-1-750x500.jpg",
//         discount: 7,
//         price: 52990000,
//         oldPrice: 56990000,
//         isHot: false,
//     },
//     {
//         name: "Lenovo ThinkPad X1 Carbon",
//         image:
//             "https://cdn.tgdd.vn/Products/Images/44/292926/lenovo-thinkpad-x1-carbon-gen-10-i7-21cb00a8vn-2-1-750x500.jpg",
//         discount: 9,
//         price: 29990000,
//         oldPrice: 32990000,
//         isHot: false,
//     },
// ];

const HotProducts = () => {
    return (
        <div className="mt-5">
            <h1 className="text-2xl font-bold mb-4">Sản Phẩm Nổi Bật</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {dataHotProducts.map((item: IHotProduct, index: number) => (
                    
                    <ProductsCard item={item} />
                ))}
            </div>
        </div>
    );
};

export default HotProducts;