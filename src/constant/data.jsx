import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";

import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";

import starwarVideo from '../assets/videos/star-wars.mp4'
import disneyVideo from '../../assets/Videos/disney.mp4'
import marvelVideo from '../../assets/Videos/marvel.mp4'
import nationalGeographicVideo from '../../assets/Videos/national-geographic.mp4'
import pixarVideo from '../../assets/Videos/pixar.mp4'


// Navigation Menu Items
export const navMenu = [
    {
        id: "1",
        name: "HOME",
        icon: HiHome
    },
    {
        id: "2",
        name: "SEARCH",
        icon: HiMagnifyingGlass
    },
    {
        id: "3",
        name: "WATCH LIST",
        icon: HiPlus
    },
    {
        id: "4",
        name: "ORIGINALS",
        icon: HiStar
    },
    {
        id: "5",
        name: "MOVIES",
        icon: HiPlayCircle
    },
    {
        id: "6",
        name: "SERIES",
        icon: HiTv
    }
]

// Production House List
export const productionHouseList = [
    {
        id:1,
        image:disney,
        video:disneyVideo
    },
    {
        id:2,
        image:pixar,
        video:pixarVideo
    },
    {
        id:3,
        image:marvel,
        video:marvelVideo
    },
    {
        id:4,
        image:starwar,
        video:starwarVideo
    },
    {
        id:5,
        image:nationalG,
        video:nationalGeographicVideo
    },

]
