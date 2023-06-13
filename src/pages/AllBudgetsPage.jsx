import { useLoaderData } from "react-router-dom"
import { fetchData } from "../../helpers"
import BudgetItem from "../components/BudgetItem"


// loader
export function AllBudgetsPageLoader(){
    const budgets = fetchData('budgets')
    const expenses = fetchData('expenses')
    return {budgets, expenses}
}

const AllBudgetsPage = () => {

    const {budgets} = useLoaderData()

    return ( 
        <div className="flex flex-col gap-y-4 p-2 md:p-5">
            <div className="grid grid-cols-2 border-b ">
                <span className="text-center border-b border-blue-600 py-2">My Budgets</span>
                <span className="text-center py-2">Budgets History</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    budgets && budgets.length > 0
                    ?
                    (<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-4">
                        {
                            budgets.map((budg)=>(
                                <BudgetItem key={budg.id} budget={budg} />
                            ))
                        }
                    </div>)
                    :
                    (<h4>No Budgets yet</h4>)
                }
            </div>

            <button className="flex items-center fixed bottom-20 rounded-full bg-blue-700 text-white p-2">
                <span>start new Budget</span>    
                <svg className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                </svg>
            </button>
        </div>
     );
}
 
export default AllBudgetsPage;