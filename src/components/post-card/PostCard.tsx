import React from 'react';
import cl from './PostCard.module.scss';

const PostCard = () => {
    return (
        <div className={cl.card}>
            <div className={cl.card__imgGroup}>

                <div className={cl.imgGroup__creatorAndTitle}>
                    <div className={cl.imgGroup__creator}>
                        created by <br /> <span className={cl.creator}>Alexander Kurmanin</span>
                    </div>

                    <div className={cl.imgGroup__title}>
                        Digital Addiction Number Seven
                    </div>
                </div>

                <img className={cl.imgGroup__img} 
                src="ipfs://QmVPyjcL1rq4Mr5mfiGsg6NtHFWn3ACbtxJY1T56MwoQwk" 
                alt="" 
                />
            </div>
            <div className={cl.card__footer}>
                <div className={cl.footer__available}>
                    available <br /> <span className={cl.available}>1 of 50</span>
                </div>
                <div className={cl.footer__price}>
                    price <br /> <span className={cl.price}>0.07 ETH</span>
                </div>
            </div>
        </div>
    );
};

export default PostCard;