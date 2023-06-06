import { TrashIcon } from "@heroicons/react/24/solid";
import { formatCurrency, formatDate, getAllMatchingItems } from "../../helpers";
import { Link } from "react-router-dom";

const ExpenseItem = ({ expense }) => {
    const budget = getAllMatchingItems({
        category: 'budgets',
        key: 'id',
        value: expense.budget
    })[0]

    console.log(budget)

    const {name, amount,  createdAt} = expense

    return ( 
        <>
            <td>{name}</td>
            <td>{formatCurrency(amount)}</td>
            <td>{formatDate(createdAt)}</td>
            <td className="rounded-md p-1 mr-auto border bg-lime-300">
                <Link to={`/budget/${budget.id}`}>
                    {budget.name}
                </Link>
            </td>
            <td className="text-slate-400">
                <TrashIcon width={15} className="hover:fill-red-300 cursor-pointer"/>
            </td>
        </>
     );
}
 
export default ExpenseItem;