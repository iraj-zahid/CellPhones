import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Detail(props) {
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
        return e.rating*e.price == props.rating
    })
    console.log(filterRating)

    return (
        <>
            <div style={{display: props.hide?"block":"none"}} className=" z-20 bg-fixed w-full h-full  absolute flex justify-center items-center bgThree">
            {filterRating ? filterRating.map((product) => {

return(
    <div style={{display: props.hide?"block":"none"}}>
        <div  className=" p-3 absolute top-[100px] left-[280px] rounded-lg bg-[#666666f6] w-[900px] h-[507px] z-20 flex items-center justify-center">
<div className="h-full w-[70%] flex justify-center p-[1px] text-black">
<Carousel className="rounded" showStatus={false} showThumbs={false} infiniteLoop={true} interval={2000} autoPlay={true}>
<div>
    <img className=" w-full h-[480px]" src={product.images[0]} />
    <p className="legend">{product.title}</p>
</div>
<div>
    <img className="w-full h-[480px]" src={product.images[1]} />
    <p className="legend">{product.title}</p>
</div>
<div>
    <img className=" w-full h-[480px]" src={product.images[2]} />
    <p className="legend">{product.title}</p>
</div>
</Carousel>
</div>
<div className="w-[30%] h-full pl-[10px]">
    <div className="w-full h-[30px] flex "> <IoClose onClick={()=>{props.setHide(false)}} className="ml-[230px] w-[30px] h-full"/></div>
    <p className="text-xl oswald ">{product.title}</p>
    <p className="text-[#aaaaaaf6] oswald">{product.brand}</p>
    <p>{product.description}</p>
    <div className="flex ">
    <FaStar style={{ color: "yellow" }} className="w-[30px] h-[30px]" />
                    <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                    <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                    <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" />
                    <FaStar style={{ color: "yellow" }} className="ml-1 w-[30px] h-[30px]" /></div>
    <div className="flex mt-2">
        <div className="w-[50px] h-[25px] bg-[#0074E4] rounded text-white flex items-center justify-center">-{product.discountPercentage.toFixed()}% </div>
        <p className="text-[#aaaaaaf6] ml-2"><s>$400</s></p>
        <p className="text-white  ml-2">${Math.round(product.price - (product.price * product.discountPercentage / 100))}</p>
    </div>

</div>
</div>
    </div>
)
}):<div></div>} 
            </div>
        </>
    )
}
export default Detail;