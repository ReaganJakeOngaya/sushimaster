// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'
import sushi9 from '../assets/sushi-9.png'
import sushi8 from '../assets/sushi-8.png'
import sushi7 from '../assets/sushi-7.png'
import sushi6 from '../assets/sushi-6.png'


import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$23.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$15.00"
    },
    {
        imgSrc: sushi9,
        alt: "sushi-9",
        title: "Legendo",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi8,
        alt: "sushi-8",
        title: "Ramen sushi",
        rating: "4.8",
        price: "$17.00"
    },
    {
        imgSrc: sushi7,
        alt: "sushi-7",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$25.00"
    },
    {
        imgSrc: sushi6,
        alt: "sushi-6",
        title: "Sushima",
        rating: "4.8",
        price: "$21.00"
    }
];