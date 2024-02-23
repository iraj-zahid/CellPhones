import { useState , useEffect} from "react";

function Searchbar(props){
    const [hideBox, setHideBox] = useState(false)
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
    const [searchValue, setSearchValue] = useState("")
    const Search = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue)
        setHideBox(false)

    }
    const filterValue = data.filter((product) => {
        return product.title.toLocaleLowerCase().includes(searchValue)
    })
    console.log("filter-->", filterValue)
    const sendingPropFunc = () =>{
        props.setFilterValue(searchValue)
        setHideBox(true)
        props.setRateTrue(false)
        props.setNot(false)

    }
    return(
        <>
        <div className="relative w-[30%] ml-[160px]">
        <div className="w-full h-12 bg-[#202020] rounded-3xl mt-8 p-3 text-white flex items-center">

<div className="ml-2 imgTwo w-6 h-full"></div>
<input onKeyDown={(e) => {if(e.key === "Enter"){sendingPropFunc()}}} type="text" placeholder="search store" onChange={Search} value={searchValue} className="search text-[#7c7c7c] text-lg ml-4"/>
{/* <p className="text-[#7c7c7c] text-lg ml-4">Search Store</p> */}
        </div>
        {/* search value box */}
        <div className={searchValue.length > 0 ? "block":"hidden"} style={{ display: hideBox && "none"}}>
        <div className={"w-[600px] min-h-[80px] bg-[#202020] z-20 absolute ml-2 mt-3 rounded " }>
            {filterValue && filterValue.map((product) => {
                return<>
                <div className="flex items-center h-full w-[full] mt-4 hoverOne">
                    <img className="ml-5 mt-2 w-[40px] h-[50px] rounded" src={searchValue.length > 0 && product.thumbnail }/>
                <p className="text-[#d3d3d3] font-semibold text-lg ml-5">{searchValue.length > 0 ? product.title : ""}</p>
                    
                </div>
                </>
            })}
        </div>
        </div>
        </div>
        </>
    )
}
export default Searchbar;