import React, { useState } from "react";
import { products } from "../../components/home-type-products/fakeData";
import { dataOptions, IOption, IProduct } from "../../components/home-type-products/homeTypeProducts.interface";
import ProductCard from "../../components/hot-products/productCard";
import { Select } from "antd";
import Item from "antd/es/list/Item";

const doanhMuc = [
  {
    id: 1,
    label: "Tất cả",
    value: "Tất cả"
  },
  {
    id: 2,
    label: "Gaming",
    value: "gaming"
  },
  {
    id: 3,
    label: "Văn phòng",
    value: "office"
  },
  {
    id: 4,
    label: "Đồ họa",
    value: "design"
  },
  {
    id: 5,
    label: "Sinh viên",
    value: "student"
  },
]
const thuongHieu = [
  {
    id: 1,
    label: "Dell",
    value: "dell"
  },
  {
    id: 2,
    label: "HP",
    value: "hp"
  },
  {
    id: 3,
    label: "Lenovo",
    value: "lenovo"
  },
  {
    id: 4,
    label: "Asus",
    value: "asus"
  },
  {
    id: 5,
    label: "Acer",
    value: "acer"
  },
  {
    id: 6,
    label: "MSI",
    value: "msi"
  },
  {
    id: 7,
    label: "Apple",
    value: "apple"
  },
  {
    id: 8,
    label: "Gigabyte",
    value: "gigabyte"
  },
]
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const Products = () => {
  const [optionSelected, setOptionSelected] = useState<IOption>(doanhMuc[0]);
  const [all, setAll] = useState<IProduct[]>(products);
  const [selectedBrand, setSelectedBrand] = useState<IOption>(thuongHieu[0]);


  return (
    <div>
      <h1 className="font-sans font-bold text-2xl mt-3">Laptop</h1>
      <p className="font-sans mb-3 text-sm font-normal">Tìm kiếm và mua sắm laptop phù hợp với nhu cầu của bạn</p>
      <div className="flex m-5 w-[100vw]">
        <div className="rounded bg-white shadow-lg w-[20%] p-6 mr-4  ">
          <div className="">
            <h3 className="font-bold font-sans">Danh mục</h3>
            {doanhMuc.map((item, index) => (
              <p key={index}
                onClick={() => {
                  setOptionSelected(item);
                  setAll(optionSelected.value === "Tất cả"
                    ? products
                    : products.filter((x) => x.category === item.value))
                }}
                className={`font-sans my-1 rounded  pl-1 py-0.5 cursor-pointer ${item.id === optionSelected.id ? "bg-blue-100 text-blue-700" : ""}`}>{item.label}</p>
            ))}
          </div>
          <h3 className="font-bold font-sans">Thương hiệu</h3>
          {thuongHieu.map((item, index) => (
            <div className="flex" key={index}>
              <input
                type="checkbox"
                checked={selectedBrand.label === item.label}
                onChange={() => {
                  setSelectedBrand(
                    item
                  );
                  setAll(products.filter((x) => (x.brand === item.value)))
                }}
              />
              <p className="font-sans my-1 ml-1 cursor-pointer" onClick={() => { setSelectedBrand(item); setAll(products.filter((x) => (x.brand === item.value))) }}>{item.label}</p>
            </div>
          ))}

          <div>
            <h3 className="font-sans font-bold">Khoảng giá</h3>
          </div>
        </div>
        <div className="w-[70%] ">
          <div className="flex my-3 pl-3 rounded-md bg-white shadow-md py-2">
            <p className="font-sans mr-2">Sắp xếp theo:</p>
            <Select
              defaultValue="new"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: 'old', label: 'Cũ' },
                { value: 'new', label: 'Mới nhất' },
             
              ]}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {all.map((item: IProduct, index: number) => (
              <ProductCard key={index} item={item} isHot={true} />
            ))}

          </div>
        </div>
      </div>
    </div>
  );

}
export default Products;