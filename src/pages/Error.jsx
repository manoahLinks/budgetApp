import { Link, useNavigate, useRouteError } from "react-router-dom";

import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Error = () => {

    const error = useRouteError()
    const navigate = useNavigate()

    return ( 
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl text-center">We've encountered a problem !</h1>
            <p>{error.message || error.statusText}</p>
            <div className="flex gap-x-4">
                <button onClick={()=> navigate(-1)} className="flex items-center gap-x-2 bg-slate-700 rounded-md text-white p-2">
                    <ArrowUturnLeftIcon width={20}/>
                    <span>Go back</span>
                </button>
                <Link className="flex items-center gap-x-2 bg-slate-500 text-white rounded-md p-2">

                    <HomeIcon width={20} />
                    <span>Go Home</span>
                </Link>
            </div>
        </div>
     );
}
 
export default Error;