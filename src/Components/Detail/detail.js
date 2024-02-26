import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useLocation } from 'react-router-dom';

function Detail(props) {
    const location = useLocation()
    const [data, setData] = useState([])
    const fetchData = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            setData(data.products)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()

    }, [])
    const filterRating = data.filter((e) => {
        return e.rating * e.price == location.state.rating
    })
    console.log(location)

    return (
        <>
            <div className="  w-full min-h-screen   flex justify-center items-center bgThree">
                {filterRating && filterRating.map((product) => {

                    return (
                        <div >
                            <div className=" p-3  rounded-lg bg-[#18181c] w-[100%] min-h-screen  flex items-center justify-center">
                                <div className="h-[100%] w-[60%] flex justify-center p-[1px] text-black">
                                    <div className="w-100 h-100">
                                        <Carousel className="carousel-style " showStatus={false} infiniteLoop={true} interval={2000} autoPlay={true}>
                                            <div>
                                                <img className="h-[100%] w-[100%]" src={product.images[0]} />
                                                <p className="legend">{product.title}</p>
                                            </div>
                                            <div>
                                                <img className="h-[100%] w-[100%]" src={product.images[1]} />
                                                <p className="legend">{product.title}</p>
                                            </div>
                                            <div>
                                                <img className="h-[100%] w-[100%]" src={product.images[2]} />
                                                <p className="legend">{product.title}</p>
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                                <div className="w-[30%] h-[600px] pl-[10px] ">
                                    <p className="text-3xl oswald text-[#f5f3f3]">{product.title}</p>
                                    <p className="mt-3 text-xl text-[#aaaaaaf6] oswald">{product.brand}</p>
                                    <p className="text-xl mt-3 text-[#e6e6e6]">{product.description}</p>
                                    <div className="flex mt-3">

                                        {product.rating > 4.5 ? <div className="flex mt-2"> <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                                            <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                                            <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                                            <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                                            <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" /></div> : ""}

                                        {product.rating > 4 && product.rating < 4.5 ? <div className="flex mt-2"> <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                                            <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                                            <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                                            <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                                            <FaStarHalf style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" /></div> : ""}
                                        {product.rating == 4 ? <div className="flex mt-2"> <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                                            <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                                            <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                                            <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                                        </div> : ""}
                                    </div>
                                    <div className="flex mt-3">
                                        <div className="w-[50px] h-[25px] bg-[#0074E4] rounded text-white flex items-center justify-center">-{product.discountPercentage.toFixed()}% </div>
                                        <p className="text-[#aaaaaaf6] ml-2"><s>$400</s></p>
                                        <p className="text-white  ml-2">${Math.round(product.price - (product.price * product.discountPercentage / 100))}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Detail;