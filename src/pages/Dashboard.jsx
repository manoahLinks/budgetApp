import { useLoaderData } from "react-router-dom";

// components
import Intro from "../components/Intro";

// helper functions
import { createBudget, createExpense, fetchData } from "../../helpers";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";


// loader
export function dashboardLoader(){
    const userName = fetchData('userName')
    const budgets = fetchData('budgets')
    return {userName, budgets}
}

// action
export async function dashboardAction ({request}){
    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data)
    
    if(_action === 'newUser'){
        try {

            localStorage.setItem("userName", JSON.stringify(values.userName))
            return toast.success(`welcome ${values.userName}`);
    
        } catch (error) {
            throw new Error('There was an error creating your account')
        }
    }

    if(_action === 'createBudget'){
        try {
            // create budget
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount
            })

            return toast.success("Budget created")
        } catch (error) {
            throw new Error("we encuntered a problem creating a new budget")
        }
    }

    if(_action === 'createExpense'){
        try {
            //create Expense
            createExpense({
                name: values.newExpense,
                amount: values.newExpenseAmount,
                budget: values.budget

            }) 

            return toast.success('Expense created')
        } catch (error) {
            throw new Error('Error in creating new expense')
        }
    }
    console.log(_action)

}

const Dashboard = () => {

    const { userName, budgets } = useLoaderData()

    return ( 
        <>
            {userName ? 
            (
                <div className="flex flex-col">
                    <h1 className="">Welcome Back, <span className="text-lime-400">{userName}</span></h1>
                    <div>
                        {
                            budgets && budgets.length > 0 
                            ? (
                                <div className="grid grid-cols-1 justify-center justify-items-center items-center">
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:w-8/12 md:gap-x-8 p-3 w-full gap-y-4">
                                        <AddBudgetForm />
                                        <AddExpenseForm budgets={budgets}/>
                                    </div>
                                </div>
                            ) 
                            : (
                                <div className="p-2">
                                    <p>Personal budgeting is the secret to financial freedom</p>
                                    <p>Create a budget to get started</p>
                                    <AddBudgetForm />
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            ) 
            : (<Intro/>)}
        </>
     );
}
 
export default Dashboard;