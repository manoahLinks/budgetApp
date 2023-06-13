import { Link, useLoaderData } from "react-router-dom";

import img from '../assets/Logistics-pana.png'
import proImg from '../assets/icons8-user-male-100.png'

// components
import Intro from "../components/Intro";

// helper functions
import { createBudget, createExpense, deleteItem, fetchData } from "../../helpers";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";
import Linechart from "../components/Linechart";
import { useEffect } from "react";
import BarChart from "../components/Barchart";


// loader
export function dashboardLoader(){
    const userName = fetchData('userName')
    const budgets = fetchData('budgets')
    const expenses = fetchData('expenses')
    return {userName, budgets, expenses}
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

    if(_action === 'deleteExpense'){
        try {
            //create Expense
            deleteItem({
                key: 'expenses',
                id: values.expenseId

            }) 

            return toast.success('Expense deleted')
        } catch (error) {
            throw new Error('Error in deleting expense')
        }
    }
    console.log(_action)

}

const Dashboard = () => {

    const { userName, budgets, expenses } = useLoaderData()

    // chart
    

    const  sortedArray = []

    // run a map function and filter expenses based on budgets
    budgets && expenses && budgets.map((budget)=> {
        const a = expenses.filter((expense)=>{
            return expense.budget === budget.id
        })

        // reduce sorted expense and budgets
        const b = a.reduce((acc, nextValue)=>{
            return acc + nextValue.amount
        }, 0)

        // pushing each budget and expense sorted to sortedArray
        sortedArray.push({budgetId: budget.id , name: budget.name , amount: b})
    })
    

    return ( 
        <>
            {userName ? 
            (
                <div className="flex flex-col">
                    <div className="flex flex-col m-2 border gap-y-2 p-2">
                        <div className="flex justify-between justify-center items-center">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7.5 11.5C5.01472 11.5 3 9.48528 3 7C3 4.51472 5.01472 2.5 7.5 2.5C9.98528 2.5 12 4.51472 12 7C12 9.48528 9.98528 11.5 7.5 11.5ZM7.5 21.5C5.01472 21.5 3 19.4853 3 17C3 14.5147 5.01472 12.5 7.5 12.5C9.98528 12.5 12 14.5147 12 17C12 19.4853 9.98528 21.5 7.5 21.5ZM17.5 11.5C15.0147 11.5 13 9.48528 13 7C13 4.51472 15.0147 2.5 17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5ZM17.5 21.5C15.0147 21.5 13 19.4853 13 17C13 14.5147 15.0147 12.5 17.5 12.5C19.9853 12.5 22 14.5147 22 17C22 19.4853 19.9853 21.5 17.5 21.5ZM7.5 9.5C8.88071 9.5 10 8.38071 10 7C10 5.61929 8.88071 4.5 7.5 4.5C6.11929 4.5 5 5.61929 5 7C5 8.38071 6.11929 9.5 7.5 9.5ZM7.5 19.5C8.88071 19.5 10 18.3807 10 17C10 15.6193 8.88071 14.5 7.5 14.5C6.11929 14.5 5 15.6193 5 17C5 18.3807 6.11929 19.5 7.5 19.5ZM17.5 9.5C18.8807 9.5 20 8.38071 20 7C20 5.61929 18.8807 4.5 17.5 4.5C16.1193 4.5 15 5.61929 15 7C15 8.38071 16.1193 9.5 17.5 9.5ZM17.5 19.5C18.8807 19.5 20 18.3807 20 17C20 15.6193 18.8807 14.5 17.5 14.5C16.1193 14.5 15 15.6193 15 17C15 18.3807 16.1193 19.5 17.5 19.5Z"></path>
                            </svg>
                            <img className="rounded-full bg-lime-100 h-10 w-10" src={proImg} alt="proimg" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-sm font-bold">Hi 👋, {userName}!</h4>
                            <p className="font-light">Personal budgeting is the secret to financial freedom</p>
                        </div>
                        <div className="flex justify-evenly border rounded-md p-2 md:p-5">
                            <div className="flex flex-col items-center">
                                <h4>Amount Budgeted</h4>
                                <h4>0.00</h4>
                            </div>
                            <div className="flex flex-col items-center">
                                <h4>Amount spent</h4>
                                <h4>0.00</h4>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        {
                            budgets && budgets.length > 0 
                            ? (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 justify-center justify-items-center">
                                    <div className="flex flex-col md:gap-y-8 md:p-5 p-3 w-full gap-y-4">
                                        <AddBudgetForm />
                                        <AddExpenseForm budgets={budgets}/>
                                    </div>
                                    <div className="flex flex-col md:col-span-2 md:gap-x-8 p-3 w-full gap-y-4">
                                        <div className="flex flex-col p-5 bg-white rounded-md gap-y-4 shadow">
                                            <h4 className="font-sm font-semibold">Existing Budgets</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-4">
                                                {
                                                    budgets.map((budg)=>(
                                                        <BudgetItem key={budg.id} budget={budg} />
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                    { 
                                        expenses && expenses.length > 0 && 
                                            (
                                                <div className="flex flex-col p-5 bg-white gap-y-4 rounded-md">
                                                    <h4 className="font-sm font-semibold text-sm">Recent Expenses</h4>
                                                    <div className="grid grid-cols-1  md:gap-x-2 gap-y-2">
                                                    
                                                        <Table expenses={expenses.sort((a, b)=> {
                                                            b.createdAt - a.createdAt
                                                        }).slice(0,8)} />

                                                        {expenses.length  > 8 && (
                                                            <Link 
                                                                className=""
                                                                to={`expenses`}
                                                            >
                                                                view all expenses
                                                            </Link>
                                                        ) }
                                                    </div>
                                                </div>
                                            )
                                            
                                        }
                                    </div>
                                    <div className="flex shadow-md p-5 rounded-lg">
                                        
                                        {sortedArray.length > 0 ? <BarChart data={sortedArray} /> : <h4>no chartdata yet</h4>}
                                    </div>
                                    </div>
                                    
                                </div>
                            ) 
                            : (
                                <div className="p-2 grid md:grid-cols-3 grid-cols-1 gap-x-8">
                                    <div className="flex flex-col font-light">
                                        <p>Create a budget to get started</p>
                                        <AddBudgetForm />
                                    </div>
                                    <div className="bg-white p-5 rounded-md shadow">
                                        <p>Personal budgeting is the secret to financial freedom</p>
                                        <img src={img} alt="" />
                                        <h4 className="text-center font-light">Create a budget to display here</h4>
                                    </div>
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