import React from 'react'
import Banner from '../components/banner/Banner'
import BannerSale from '../components/banner/BannerSale'

const HomePage = () => {
    return (
        <div className="overflow-hidden">
            <Banner></Banner>
            <BannerSale></BannerSale>
        </div>
    )
}

export default HomePage