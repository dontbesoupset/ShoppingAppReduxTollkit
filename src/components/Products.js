import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://p1-ofp.static.pub/ShareResource/yoga/2023/images/lenovo-yoga-brand-creative-innovation-1-mobile.png",
    price: 25,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://avatars.mds.yandex.net/get-mpic/4322107/img_id8498627444733984677.jpeg/orig",
    price: 25,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://img.mvideo.ru/Pdb/30018130b.jpg",
    price: 25,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://www.tradeinn.com/f/13880/138802032/acer-aspire-3-a315-56-15.6-i5-1035g1-8gb-256gb-ssd-%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA.jpg",
    price: 25,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
