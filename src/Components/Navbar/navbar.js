import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
function Navbar(props) {
    const [drop, setDrop] = useState(false)
    const dropdownFunc = () => {
        setDrop(!drop)
    }
    const One = () => {
        props.setAllProp(prev => ({
            ...prev,
            rate: 1,
            rateTrue: true,
        }))

        setDrop(!drop)

    }
    const Two = () => {
        props.setAllProp(prev => ({
            ...prev,
            rate: 2,
            rateTrue: true,
        }))

        setDrop(!drop)

    }
    const Three = () => {
        props.setAllProp(prev => ({
            ...prev,
            rate: 3,
            rateTrue: true,
        }))

        setDrop(!drop)


    }
    const Four = () => {

        props.setAllProp(prev => ({
            ...prev,
            rate: 4,
            rateTrue: true,
            not: false,
            rateTwo: 4.5
        }))
        setDrop(!drop)



    }
    const Five = () => {

        props.setAllProp(prev => ({
            ...prev,
            rate: 4.5,
            rateTrue: true,
            not: false,
            rateTwo: 5.1
        }))
        setDrop(!drop)


    }

    return (
        <>
            <div className="w-full h-20 bg-[#18181c] p-5 flex  items-center">
                <div className="h-full w-14 imgOne"></div>
                <div className="h-full w-[2px] bg-[#3b3b41] ml-10"></div>
                <div className="text-white ml-10 oswald text-2xl" >STORE</div>
                <p className="text-[#6e6e72] text-lg ml-8">Distribution</p>
                <p className="text-[#6e6e72] text-lg ml-8">Support</p>
                <p className="text-[#6e6e72] text-lg ml-8">Contact Us</p>

                <div className="relative ml-[700px] flex items-center justify-center flex-col">
                    <div onClick={dropdownFunc} className="w-[170px] h-full   flex items-center justify-center filterButton ">
                        <p className="oswald text-lg ">Filter by Ratings</p>
                        <IoMdArrowDropdown className="w-[23px] h-[23px]  ml-3" />
                    </div>
                    <div style={{ display: drop ? "block" : "none" }} className={"w-[70px] min-h-[180px] z-20 absolute mt-[215px] ml-[100px] rounded bgcolorOne "}>
                        <p onClick={One} className="ratingHover w-full h-[42] p-1 text-lg text-bold flex flex-col justify-center items-center oswald border-white border-b-[1px]">1 </p>
                        <p onClick={Two} className="ratingHover w-full h-[42] p-1 text-lg text-bold flex flex-col justify-center items-center oswald border-white border-b-[1px]">2 or &lt;2</p>
                        <p onClick={Three} className="ratingHover w-full h-[42] p-1 text-lg text-bold flex flex-col justify-center items-center oswald border-white border-b-[1px]">3 or &lt;3</p>
                        <p onClick={Four} className="ratingHover w-full h-[42] p-1 text-lg text-bold flex flex-col justify-center items-center oswald border-white border-b-[1px]">4 or &lt;4</p>
                        <p onClick={Five} className="ratingHover w-full h-[42] p-1 text-lg text-bold flex flex-col justify-center items-center oswald border-white border-b-[1px]">5 or &lt;1</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;