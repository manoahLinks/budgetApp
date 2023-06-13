// rrd imports
import { Outlet, useLoaderData, Link } from "react-router-dom";

// assets
import Logistics from "../assets/Logistics-rafiki.png"
import Background from '../assets/texture-scratch-1.png'

// helper functions
import { fetchData } from "../../helpers";

// components
import Navbar from "../components/Navbar";
import Taskbar from "../components/Taskbar";

// loader
export function mainLoader(){
    const userName = fetchData('userName')
    return {userName}
}

const Main = () => {

    const { userName } = useLoaderData()

    return ( 
        <div className="text-xs md:text-sm flex flex-col w-full h-screen">
            <Navbar userName={userName} />
            <main className={`grid grid-cols-1 flex-1 overflow-y-scroll mb-12 md:mb-0`}>
                <Outlet />
            </main>
            <Taskbar/>
        </div>
     );
}
 
export default Main;