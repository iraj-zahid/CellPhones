import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import BoxOne from "../../Components/BoxOne/BoxOne";
import Detail from "../../Components/Detail/Detail";

function Home() {

    const [allProp, setAllProp] = useState({
        filterValue: "",
        rate: "",
        rateTwo: "",
        rateTrue: false,
        not: false,
        rating: "",
        hide: false,

    })

    return (
        <>
            <div className="w-full bg-[#121212] bg-fixed h-full text-white flex flex-col  pb-[45px] top-0 left-0">
                <Navbar setAllProp={setAllProp} />
                <Searchbar setAllProp={setAllProp} />
                <BoxOne setAllProp={setAllProp} allProp={allProp} />
            </div>
        </>
    )
}
export default Home;

