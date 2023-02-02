import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import RecentRecipes from '../RecentRecipes/RecentRecipes';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <RecentRecipes/>
        </div>
    );
};

export default Home;