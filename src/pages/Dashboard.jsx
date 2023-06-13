import { Link, useLoaderData } from "react-router-dom";

import img from '../assets/Logistics-pana.png'

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
                    <h1 className="font-semibold mt-5 text-center">Hi 👋, <span className="text-lime-400 text-xl">{userName}</span></h1>
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