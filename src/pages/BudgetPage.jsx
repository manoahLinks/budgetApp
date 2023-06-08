// loader

import { useLoaderData } from "react-router-dom";
import { getAllMatchingItems } from "../../helpers";
import BudgetItem from "../components/BudgetItem";
import AddExpenseForm from "../components/AddExpenseForm";
import Table from "../components/Table";

export async function budgetLoader( {params})  {

    const budget = await getAllMatchingItems({
        category: 'budgets',
        key: 'id',
        value: params.id,
    })[0]
    console.log(budget)

    const expenses = await getAllMatchingItems({
        category: 'expenses',
        key: 'budget',
        value: params.id,
    })

    if(!budget){
        throw new Error('The budget doesnt exist')
    }

    return {budget, expenses}
}

const BudgetPage = () => {

    const { budget, expenses } = useLoaderData()

    return ( 
        <div className="flex flex-col p-5">
            <h1 className="text-xl">
                <span>{budget.name}</span>
                overview
            </h1>
            <div className="grid grid-cols-1 md:gap-y-4 md:grid-cols-3 gap-x-8">
                <AddExpenseForm budgets={budget}/>
                <BudgetItem budget={budget}/>
                {
                expenses && expenses.length > 0 && (
                    <div className="grid grid-cols-1 bg-white p-3 rounded-lg shadow">
                        <h4><span>{budget.name}</span> expenses</h4>
                        <Table expenses={expenses} showBudget={false}/>
                    </div>
                )
            }
            </div>
            
        </div>
     );
}
 
export default BudgetPage;