import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Searchbar from "../../Components/Searchbar/searchbar";
import BoxOne from "../../Components/BoxOne/boxOne";
import Detail from "../../Components/Detail/detail";

function Home(){
    const [filterValue, setFilterValue] = useState("")
    const [rate, setRate] = useState()
    const [rateTwo, setRateTwo] = useState()
    const [rateTrue, setRateTrue] = useState(false)
    const [not, setNot] = useState(false)
    const [rating,setRating] = useState()
    const [hide, setHide] = useState(false)

    console.log(rating)

    return(
        <>
        <div className="w-full bg-[#121212] bg-fixed h-full text-white flex flex-col  pb-10 top-0 left-0">
            <Navbar setNot={setNot} setRateTwo={setRateTwo} setRate={setRate} setRateTrue={setRateTrue}/>
            <Searchbar setNot={setNot} setFilterValue={setFilterValue} setRateTrue={setRateTrue}/>
            <BoxOne setHide={setHide} setRating={setRating} not={not} rateTwo={rateTwo} rate={rate} filterValue={filterValue} rateTrue={rateTrue}/>
            <Detail hide={hide} setHide={setHide} rating={rating}/>

        </div>
        </>
    )
}
export default Home;

{/* <div className="w-[210px] h-[350px]  m-2 text-black flex flex-col justify-center mb-20 relative"><div className="w-[100%] h-[250px]   "><img className="imgThree rounded-lg" src={product.thumbnail} /><div className="w-full h-[230px] rounded-lg  z-10 top-0 left-0 absolute hoverTwo"></div></div>
                            <p className="text-[#6e6e72] oswald mt-2">{product.brand}</p>
                            <p className="text-white oswald text-lg mt-1">{product.title}</p>
                            <div className="flex ">
                            {product.rating > 4.5  ? <div className="flex mt-2"> <FaStar style={{color:"yellow"}} className=""/>
                            <FaStar style={{color:"yellow"}} className="ml-1"/>
                            <FaStar style={{color:"yellow"}} className="ml-1"/>
                            <FaStar style={{color:"yellow"}} className="ml-1"/>
                            <FaStar style={{color:"yellow"}} className="ml-1"/></div> : ""}

                            {product.rating > 4 && product.rating < 4.5 ? <div className="flex mt-2"> <FaStar style={{color:"yellow"}} className=""/>
                            <FaStar style={{color:"yellow"}} className="ml-1"/>
                            <FaStar style={{color:"yellow"}} className="ml-1"/>
                            <FaStar style={{color:"yellow"}} className="ml-1"/>
                            <FaStarHalf style={{color:"yellow"}} className="ml-1"/></div> : ""}
                            </div>
                            <div className="flex mt-2">
                            <div className="w-[50px] h-[25px] bg-[#0074E4] rounded text-white flex items-center justify-center">-{product.discountPercentage.toFixed()}% </div>
                            <p className="text-[#6e6e72] ml-2"><s>${product.price}</s></p>
                            <p className="text-white  ml-2">${Math.round(product.price-(product.price*product.discountPercentage/100))}</p>
                            </div>
                            </div> */}