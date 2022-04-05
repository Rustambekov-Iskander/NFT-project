import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../../components/post-card/PostCard";
import { Product, ProductItem } from "../../types/Product";
import cl from "./Home.module.scss";

const Home = () => {
  const [products, setProducts] = useState<ProductItem[] | null>(null);
  const [sort, setSort] = useState<"all" | "priceFrom" | "priceTo">("all");
  const [available, setAvailable] = useState<"all" | "availible">("all");

  useEffect(() => {
    (async () => {
      const res: any = await axios.get("https://artisant.io/api/products");
      setProducts(res.data.data.products);
    })();
  }, []);

  if (!products) {
    return <h1>loading</h1>;
  }

  return (
    <div className={cl.home}>
      <div className={cl.home__titleDiv}>
        <div className={cl.titleDiv__title}>Explore</div>
        <div className={cl.titleDiv__desc}>
          Buy and sell digital fashion NFT art
        </div>
      </div>

      <div className={cl.home__posts}>
        {products
          .slice(0, 50)
          .sort((a: ProductItem, b: ProductItem): any => {
            if (sort === "priceFrom") {
              if (a.initial_price < b.initial_price) {
                return 1;
              }
              if (a.initial_price > b.initial_price) {
                return -1;
              }
            } else if (sort === "priceTo") {
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
            available === "availible" ? !!product.quantity_available : true
          )
          .map((product: ProductItem) => (
            <PostCard key={product.product_id} productData={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
