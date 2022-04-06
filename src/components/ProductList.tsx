import React, { FC, useState } from "react";
import { ProductItem } from "../types/Product";
import PostCard from "./post-card/PostCard";

interface IProducts {
  products: ProductItem[];
  sort: string;
  available: string;

}

const ProductList: FC<IProducts> = ({ products, sort, available }) => {
  return (
    <>
      {products
        .sort((a: ProductItem, b: ProductItem): any => {
          if (sort === "priceHigh") {
            if (a.initial_price < b.initial_price) {
              return 1;
            }
            if (a.initial_price > b.initial_price) {
              return -1;
            }
          } else if (sort === "priceLow") {
            if (a.initial_price < b.initial_price) {
              return -1;
            }
            if (a.initial_price > b.initial_price) {
              return 1;
            }
          }
          return 0;
        })
        .filter((product) =>
          available === "available" ? !!product.quantity_available : true
        )
        .map((product: ProductItem) => (
          <PostCard key={product.product_id} productData={product} />
        ))}
    </>
  );
};

export default ProductList;
