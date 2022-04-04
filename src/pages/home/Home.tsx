import React from 'react';
import PostCard from '../../components/post-card/PostCard';
import cl from './Home.module.scss';

const Home = () => {
    return (
        <div className={cl.home}>
            <div className={cl.home__titleDiv}>
                <div className={cl.titleDiv__title}>Explore</div>
                <div className={cl.titleDiv__desc}>Buy and sell digital fashion NFT art</div>
            </div>

            <div className={cl.home__posts}>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>

        </div>
    );
};

export default Home;