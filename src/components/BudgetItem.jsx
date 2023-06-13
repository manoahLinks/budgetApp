import { Link } from "react-router-dom";
import { calculateSpentByBudget, formatCurrency } from "../../helpers";
import Linechart from "./Linechart";

const BudgetItem = ({budget}) => {

    const {id, name, amount} = budget
    const spent = calculateSpentByBudget(id)

    return ( 
        <div className="grid grid-cols-1 rounded-mg shadow-md border rounded-lg border-lime-400 bg-lime-50 md:p-5 p-2 gap-y-2">
            <div className="flex justify-between">
                <h4 className="text-sm font-semibold text-lime-500">{name}</h4>
                <p><span className="text-blue-600">{formatCurrency(amount)} </span> Budgeted</p>
            </div>
            {/* <Linechart/> */}
            <progress className="w-full appearance-none bg-white" max={amount} value={spent}>
                {/* percentage */}
            </progress>
            <div className="flex justify-between">
                <small><span className="text-red-500 font-semibold">{formatCurrency(spent)}</span> spent</small>
                <small><span className="text-green-500 font-semibold">{formatCurrency(amount - spent)}</span> remaining</small>
            </div>
            <Link to={`/budget/${id}`} className="hover:bg-lime-300 flex p-1 border items-center gap-x-2 mr-auto rounded-md bg-white text-xs text-slate-500">
                <span>View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-slate-300 h-4" viewBox="0 0 24 24">
                    <path d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"></path>
                </svg>
            </Link>
        </div>
     );
}
 
export default BudgetItem;