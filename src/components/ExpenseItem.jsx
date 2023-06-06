import { TrashIcon } from "@heroicons/react/24/solid";
import { formatCurrency, formatDate } from "../../helpers";

const ExpenseItem = ({ expense }) => {

    const {name, amount, budget, createdAt} = expense

    return ( 
        <>
            <td>{name}</td>
            <td>{formatCurrency(amount)}</td>
            <td>{formatDate(createdAt)}</td>
            <td className="text-slate-400">
                <TrashIcon width={15} className="hover:fill-red-300 cursor-pointer"/>
            </td>
        </>
     );
}
 
export default ExpenseItem;