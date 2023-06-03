import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../../helpers";

// loader
export function dashboardLoader(){
    const userName = fetchData('userName')
    return {userName}
}

const Dashboard = () => {

    const { userName } = useLoaderData()

    return ( 
        <div>
            <h4 className="text-3xl">Dashboard {userName} </h4>
        </div>
     );
}
 
export default Dashboard;