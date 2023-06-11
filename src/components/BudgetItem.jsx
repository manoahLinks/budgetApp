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
            <Link to={`/budget/${id}`} className="hover:bg-lime-300 flex p-1 border mr-auto rounded-md bg-white text-slate-500">
                <span>View Details</span>
            </Link>
        </div>
     );
}
 
export default BudgetItem;