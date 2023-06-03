// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

// assets
import Logistics from "../assets/Logistics-rafiki.png"

// helper functions
import { fetchData } from "../../helpers";

// components
import Navbar from "../components/Navbar";

// loader
export function mainLoader(){
    const userName = fetchData('userName')
    return {userName}
}

const Main = () => {

    const { userName } = useLoaderData()

    return ( 
        <div className="flex flex-col w-full h-screen">
            <Navbar userName={userName} />
            <main className="grid grid-cols-1 flex-1">
                <Outlet />
            </main>
            <div className="p-5 bg-lime-400"></div>
        </div>
     );
}
 
export default Main;