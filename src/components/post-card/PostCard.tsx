import React from "react";
import cl from "./PostCard.module.scss";
import { Product, ProductItem } from "../../types/Product";

interface IPostCard {
  productData: ProductItem;
}

const PostCard: React.FC<IPostCard> = ({ productData }) => {
  // console.log(productData.latest_price / 3434);
  // console.log(productData.json_nft_data.image)
  const checkerImageOrVideo = (url: string): string => {
    const urlItems = url.split("."),
      urlType = urlItems[urlItems.length - 1];
    console.log(urlType);
    return urlType;
  };

  return (
    <div className={cl.card}>
      <div className={cl.card__imgGroup}>
        <div className={cl.imgGroup__creatorAndTitle}>
          <div className={cl.imgGroup__creator}>
            created by <br />{" "}
            <span className={cl.creator}>
              {productData.created_by.display_name}
            </span>
          </div>

          <div className={cl.imgGroup__title}>{productData.name}</div>
        </div>
        {checkerImageOrVideo(productData.avatar.original) === "mp4" ? (
          <video className={cl.imgGroup__img} loop autoPlay>
            <source
              src={
                "https://cdn.artisant.io/api/files/" +
                productData.avatar.original
              }
              type="video/mp4"
            ></source>
          </video>
        ) : (
          <img
            className={cl.imgGroup__img}
            src={
              "https://cdn.artisant.io/api/files/" + productData.avatar.original
            }
            alt={productData.json_nft_data.name}
          />
        )}
      </div>
      <div className={cl.card__footer}>
        <div className={cl.footer__available}>
          available <br />{" "}
          <span className={cl.available}>
            {productData.quantity_available} of {productData.quantity}
          </span>
        </div>
        <div className={cl.footer__price}>
          price <br />{" "}
          <span className={cl.price}>{+productData.initial_price} ETH</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
