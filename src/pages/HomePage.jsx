import React, { useEffect } from 'react'
import Banner from '../components/banner/Banner'
import BannerSale from '../components/banner/BannerSale'
import Offer from '../components/offer/Offer'
import Slider from "react-slick";
import Heading from "../components/heading/Heading";
import { fetcher } from "../apiConfig";
import useSWR from "swr";
import Countdown from '../components/countdown/Countdown';
const HomePage = () => {
    useEffect(() => {
        document.title = "E-Commerce";
    }, []);
    const { data } = useSWR("https://dummyjson.com/products", fetcher);
    if (!data) return;
    const products = data.products;
    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="overflow-hidden">
            <Banner></Banner>
            <BannerSale></BannerSale>
            <div className="bg-[#f4f4f4] w-full py-14 mb-14">
                <h3 className="font-semibold lg:text-[45px] sm:text-[40px] text-[35px] mb-10 text-center">
                    What we <span className="text-error">offer</span>
                </h3>
                <Offer></Offer>
            </div>
            <Countdown></Countdown>
        </div>
    )
}

export default HomePage