import { useLoaderData } from "react-router-dom";

// components
import Intro from "../components/Intro";

// helper functions
import { fetchData } from "../../helpers";
import { toast } from "react-toastify";


// loader
export function dashboardLoader(){
    const userName = fetchData('userName')
    return {userName}
}

// action
export async function dashboardAction ({request}){
    const data = await request.formData();
    const formData = Object.fromEntries(data)
    
    try {

        localStorage.setItem("userName", JSON.stringify(formData.userName))
        return toast.success(`welcome ${formData.userName}`)

    } catch (error) {
        throw new Error('There was an error creating your account')
    }
    
}

const Dashboard = () => {

    const { userName } = useLoaderData()

    return ( 
        <>
            {userName ? (<p>{userName}</p>) : (<Intro/>)}
        </>
     );
}
 
export default Dashboard;