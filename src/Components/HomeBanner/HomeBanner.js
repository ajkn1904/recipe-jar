import React from 'react';
import './Banner.css';
import HomeBannerSlide from './HomeBannerSlide';

const HomeBanner = () => {

    const bannerInfo = [
        {
            img: 'https://images.unsplash.com/photo-1615366105533-5b8f3255ea5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
            previous: 4,
            id: 1,
            next: 2
        },

        {
            img: 'https://images.unsplash.com/photo-1478144592103-25e218a04891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80',
            previous: 1,
            id: 2,
            next: 3
        },
        {
            img: 'https://images.unsplash.com/photo-1626200949817-4719bd60000b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80',
            previous: 2,
            id: 3,
            next: 4
        },
        {

            img: 'https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            previous: 3,
            id: 4,
            next: 1
        }

    ]

    return (
        <div className="carousel w-full h-[550px] mt-3">
            
            {
                bannerInfo.map(data => <HomeBannerSlide data={data} key={data.id} />)
            }
    
        </div>
    );
};

export default HomeBanner;