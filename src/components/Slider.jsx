import { useEffect, useState, useRef } from 'react'
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";


const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef=useRef();

    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }

    return (
        <div>
            <FaChevronLeft onClick={() => sliderLeft(elementRef.current)} className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' />
            <FaChevronRight onClick={() => sliderRight(elementRef.current)} className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px]  cursor-pointer right-0' />
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth ' ref={elementRef} >
                {
                    movieList.map((item) => (
                        <img src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full md:h-[310px] object-cover
                        object-left-top mr-5 rounded-md hover:border-[4px]
                      border-gray-400 transition-all duration-100 ease-in'/>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider