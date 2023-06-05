import { calculateSpentByBudget, formatCurrency } from "../../helpers";

const BudgetItem = ({budget}) => {

    const {id, name, amount} = budget
    const spent = calculateSpentByBudget(id)

    return ( 
        <div className="grid grid-cols-1 border p-2 gap-y-2">
            <div className="flex justify-between">
                <h4>{name}</h4>
                <p>{formatCurrency(amount)} Budgeted</p>
            </div>
            <progress className="w-full" max={amount} value={spent}>
                {/* percentage */}
            </progress>
            <div className="flex justify-between">
                <small>{formatCurrency(spent)} spent</small>
                <small>{formatCurrency(amount - spent)}</small>
            </div>
            <button className="flex p-1 border mr-auto rounded-md bg-lime-300">
                <span>View Details</span>
            </button>
        </div>
     );
}
 
export default BudgetItem;