import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AddExpenseForm = ({budgets}) => {

    const focusRef = useRef()
    const formRef = useRef()

    const fetcher = useFetcher()

    const isSubmitting = fetcher.state === 'submitting'

    useEffect(()=>{
        if(!isSubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }

    }, [isSubmitting])

    return ( 
        <div className="flex flex-col p-5 gap-y-2 shadow bg-white rounded-lg">
            <h4>Add new <span className="text-lime-400">{budgets.length ===1 && `${budgets.map((budg)=> budg.name)}`}</span> expense</h4>
            <fetcher.Form
                method="post"
                ref={formRef}
                className="grid-cols-1 grid gap-y-2"
            >
                <div className="flex flex-col">
                    <label htmlFor="newExpense">Expense Name</label>
                    <input 
                        type="text" 
                        name="newExpense" 
                        id="newExpense"
                        className="appearance-none leading-tight focus:outline-none focus:bg-white focus:border-lime-400 text-xs border-slate-300"
                        ref={focusRef}
                        required
                        placeholder="e.g., Coffee" 
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="newExpenseAmount">Amount</label>
                    <input 
                        type="number" 
                        name="newExpenseAmount" 
                        id="newExpenseAmount"
                        className="appearance-none leading-tight focus:outline-none focus:bg-white focus:border-lime-400 text-xs border-slate-300"
                        step={0.01}
                        inputMode="decimal"
                        placeholder="e.g., 1500" 
                        required
                    />
                </div>

               {budgets.length > 1 && <div className="flex flex-col">
                    <label htmlFor="budget">Select Budget</label>
                    <select 
                        name="budget" 
                        id="budget"
                        className="appearance-none leading-tight focus:outline-none focus:bg-white focus:border-lime-400 text-xs border-slate-300"
                    >
                        <option value="">select a budget</option>
                        { budgets && budgets.map((budg)=>(
                            <option key={budg.id} value={budg.id} >{budg.name}</option>
                        )) }
                    </select>
                </div>}

                <input type="hidden" name="_action" value={`createExpense`} />

                <button disabled={isSubmitting} type="submit" className="flex items-center p-2 bg-lime-400 gap-x-2 rounded-lg w-1/2">
                    {
                        isSubmitting ? (
                            <span>Creating Budget...</span>
                        ) 
                        : (
                            <>
                                <span>CreateExpense</span>
                                <CurrencyDollarIcon width={20}/>
                            </>
                        )
                    }
                    
                </button>
            </fetcher.Form>
        </div>
     );
}
 
export default AddExpenseForm;