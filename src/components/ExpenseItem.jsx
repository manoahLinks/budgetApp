import { TrashIcon } from "@heroicons/react/24/solid";
import { formatCurrency, formatDate, getAllMatchingItems } from "../../helpers";
import { Link, useFetcher } from "react-router-dom";

const ExpenseItem = ({ expense, showBudget }) => {

    const fetcher = useFetcher()

    const budget = getAllMatchingItems({
        category: 'budgets',
        key: 'id',
        value: expense.budget
    })[0]

    const {name, amount,  createdAt} = expense

    return ( 
        <>
            <td>{name}</td>
            <td className="text-[10px] md:text-sm">{formatCurrency(amount)}</td>
            <td className="text-[10px] md:text-sm">{formatDate(createdAt)}</td>
            {showBudget && <td className="rounded-md text-[10px] md:text-sm mr-auto whitespace-nowrap bg-lime-300">
                <Link to={`/budget/${budget.id}`}>
                    {budget.name}
                </Link>
            </td>}
            <td className="text-slate-400 text-end">
                <fetcher.Form method="post">
                    <input type="hidden" name="_action" value={`deleteExpense`} />
                    <input type="hidden" name="expenseId" value={expense.id} />
                    <button
                        type="submit"
                    >
                        <TrashIcon width={15} className="hover:fill-red-300 cursor-pointer"/>
                    </button>
                </fetcher.Form>
            </td>
        </>
     );
}
 
export default ExpenseItem;