import { useLoaderData } from "react-router-dom";
import { fetchData } from "../../helpers";
import Table from "../components/Table";

export function expensesLoader() {
    const expenses = fetchData('expenses')
    return {expenses}
}

const ExpensesPage = () => {

    const {expenses} = useLoaderData()

    return ( 
        <div className="flex flex-col gap-y-4 p-2 md:p-5">
            <h4 className="font-semibole text-xl">All expenses</h4>
            {
                expenses && expenses.length > 0 
                ? (
                    <>
                        <h4 className="text-sm">Recent Expenses <small>({expenses.length}) total</small></h4>
                        <Table expenses={expenses}/>
                    </>
                )
                :
                (
                    <h4>No expenses to show</h4>
                )
            }
            
        </div>
     );
}
 
export default ExpensesPage;