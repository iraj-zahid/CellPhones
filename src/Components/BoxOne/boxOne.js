import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
{/* <FaStarHalf /> */ }


function BoxOne(props) {

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
    console.log(data)
    const filteredValue = data.filter((e) => {
        return e.title.toLowerCase().includes(props.filterValue)
    })
    const filterRate = data.filter((e) => {
        return e.rating >= props.rate && e.rating < props.rateTwo
    })
    console.log(filterRate)


    return (
        <>
            {props.not  ? <div className="w-[100%] h-[475px]  flex items-center justify-center text-5xl text-bold">NOT FOUND..!</div>: <><div className="mt-8 w-[80%] h-min-[500px]  flex justify-center items-center flex-wrap ml-[120px]">
                {props.rateTrue?filterRate && filterRate.map((product) => {
                    return (
                        <>
                        <div onClick={()=>{props.setRating(product.rating*product.price) 
                        props.setHide(true)  
                }} className="w-[210px] h-[350px]  m-2 text-black flex flex-col justify-center mb-20 relative"><div className="w-[100%] h-[250px]   "><img className="imgThree rounded-lg" src={product.thumbnail} /><div className="w-full h-[230px] rounded-lg  z-10 top-0 left-0 absolute hoverTwo"></div></div>
                            <p className="text-[#6e6e72] oswald mt-2">{product.brand}</p>
                            <p className="text-white oswald text-lg mt-1">{product.title}</p>
                            <div className="flex ">
                                {product.rating > 4.5  ? <div className="flex mt-2"> <FaStar style={{ color: "yellow" }} className="" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" /></div> : ""}
   
                                {product.rating > 4 && product.rating < 4.5 ? <div className="flex mt-2"> <FaStar style={{ color: "yellow" }} className="" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" />
                                    <FaStarHalf style={{ color: "yellow" }} className="ml-1" /></div> : ""}
                                    { product.rating == 4 ? <div className="flex mt-2"> <FaStar style={{ color: "yellow" }} className="" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" />
                                    </div> : ""}
                            </div>
                            <div className="flex mt-2">
                                <div className="w-[50px] h-[25px] bg-[#0074E4] rounded text-white flex items-center justify-center">-{product.discountPercentage.toFixed()}% </div>
                                <p className="text-[#6e6e72] ml-2"><s>${product.price}</s></p>
                                <p className="text-white  ml-2">${Math.round(product.price - (product.price * product.discountPercentage / 100))}</p>
                            </div>
                        </div>
   
                    </>
                    )
                    
                }):filteredValue && filteredValue.map((product) => {
                    return (
                        <>
                            <div onClick={()=> {props.setRating(product.rating*product.price) 
                                props.setHide(true)}} className="w-[210px] h-[350px]  m-2 text-black flex flex-col justify-center mb-20 relative"><div className="w-[100%] h-[250px]   "><img className="imgThree rounded-lg" src={product.thumbnail} /><div className="w-full h-[230px] rounded-lg  z-10 top-0 left-0 absolute hoverTwo"></div></div>
                                <p className="text-[#6e6e72] oswald mt-2">{product.brand}</p>
                                <p className="text-white oswald text-lg mt-1">{product.title}</p>
                                <div className="flex ">
                                    {product.rating > 4.5 ? <div className="flex mt-2"> <FaStar style={{ color: "yellow" }} className="" />
                                        <FaStar style={{ color: "yellow" }} className="ml-1" />
                                        <FaStar style={{ color: "yellow" }} className="ml-1" />
                                        <FaStar style={{ color: "yellow" }} className="ml-1" />
                                        <FaStar style={{ color: "yellow" }} className="ml-1" /></div> : ""}

                                    {product.rating > 4 && product.rating < 4.5 ? <div className="flex mt-2"> <FaStar style={{ color: "yellow" }} className="" />
                                        <FaStar style={{ color: "yellow" }} className="ml-1" />
                                        <FaStar style={{ color: "yellow" }} className="ml-1" />
                                        <FaStar style={{ color: "yellow" }} className="ml-1" />
                                        <FaStarHalf style={{ color: "yellow" }} className="ml-1" /></div> : ""}
                                        { product.rating == 4 ? <div className="flex mt-2"> <FaStar style={{ color: "yellow" }} className="" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" />
                                    <FaStar style={{ color: "yellow" }} className="ml-1" />
                                    </div> : ""}
                                </div>
                                <div className="flex mt-2">
                                    <div className="w-[50px] h-[25px] bg-[#0074E4] rounded text-white flex items-center justify-center">-{product.discountPercentage.toFixed()}% </div>
                                    <p className="text-[#6e6e72] ml-2"><s>${product.price}</s></p>
                                    <p className="text-white  ml-2">${Math.round(product.price - (product.price * product.discountPercentage / 100))}</p>
                                </div>
                            </div>

                        </>
                    )
                })}
            </div></>}
        </>
    )
}
export default BoxOne;