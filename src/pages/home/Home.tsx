import axios from "axios";
import React, {
  useEffect,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import Loading from "../../components/loading/Loading";
import ProductList from "../../components/ProductList";
import Select from "../../components/UI/select/Select";
import { ProductItem } from "../../types/Product";
import cl from "./Home.module.scss";

const Home = () => {
  const [products, setProducts] = useState<ProductItem[] | null>(null);
  const [sort, setSort] = useState<"all" | "priceHigh" | "priceLow">("all");
  const [available, setAvailable] = useState<"all" | "available">("all");
  const optionsRef = useRef([
    { value: "all", name: "all" },
    { value: "priceHigh", name: "price High" },
    { value: "priceLow", name: "price Low" },
  ]);

  useEffect(() => {
    if (sort === "all") {
      fetchProducts(setProducts);
    }
  }, [sort]);

  const fetchProducts = async (
    setState: Dispatch<SetStateAction<ProductItem[] | null>>
  ): Promise<void> => {
    const res = await axios.get(`${process.env.REACT_APP_PUBLIC_API}products`);
    setProducts(res.data.data.products.slice(0, 8));
  };

  if (!products) {
    return <Loading />;
  }

  return (
    <div className={cl.home}>
      <div className={cl.home__titleDiv}>
        <div className={cl.titleDiv__title}>Explore</div>
        <div className={cl.titleDiv__desc}>
          Buy and sell digital fashion NFT art
        </div>
      </div>

      <div className={cl.home__filter}>
        <div>
          Only available{" "}
          <input
            onChange={() =>
              setAvailable(available === "all" ? "available" : "all")
            }
            className={cl.home__checkbox}
            type="checkbox"
          />
        </div>

        <Select
          defaultValue="Sordet by"
          options={optionsRef.current}
          onChange={(selectedSort) => setSort(selectedSort)}
        />
      </div>

      <div className={cl.home__posts}>
        <ProductList products={products} sort={sort} available={available} />
      </div>
    </div>
  );
};

export default Home;
