// loader

import { useLoaderData } from "react-router-dom";
import { getAllMatchingItems } from "../../helpers";

export async function budgetLoader( {params})  {

    const budget = await getAllMatchingItems({
        category: 'budgets',
        key: 'id',
        value: params.id,
    })[0]
    console.log(budget)

    if(!budget){
        throw new Error('The budget doesnt exist')
    }

    return {budget}
}

const BudgetPage = () => {

    const { budget } = useLoaderData()

    return ( 
        <>
            <div>{budget.name}</div>
        </>
     );
}
 
export default BudgetPage;