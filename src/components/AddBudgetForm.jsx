import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";

const AddBudgetForm = () => {

    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === "submitting"

    const formRef = useRef()
    const focusRef = useRef()

    useEffect(()=>{

        if(!isSubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }

    }, [isSubmitting])

    return ( 
        <div className="flex flex-col shadow p-5 gap-y-4 rounded-lg bg-white">
           <h4 className="font-semibold text-lime-700">Create Budget</h4>
           <fetcher.Form 
                method="post"
                ref={formRef}
                className="grid grid-cols-1 gap-y-2"
            >
                <div className="flex flex-col">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input 
                        type="text" 
                        name="newBudget"
                        id="newBudget"
                        className="appearance-none leading-tight focus:outline-none focus:bg-white focus:border-lime-400 text-xs border-slate-300"
                        placeholder="e.g., Groceries" 
                        required
                        ref={focusRef}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input 
                        type="number" 
                        name="newBudgetAmount" 
                        id="newBudgetAmount"
                        className="appearance-none leading-tight focus:outline-none focus:bg-white focus:border-lime-400 text-xs border-slate-300"
                        step={0.01}
                        placeholder="e.g., N900" 
                        required
                        inputMode="decimal"
                    />
                </div>
                <input type="hidden" name="_action" value={`createBudget`} />
                <button disabled={isSubmitting} type="submit" className="flex items-center p-2 bg-lime-400 gap-x-2 rounded-lg w-1/2">
                    {
                        isSubmitting ? (
                            <span>Creating Budget...</span>
                        ) 
                        : (
                            <>
                                <span>Create Budget</span>
                                <CurrencyDollarIcon width={20}/>
                            </>
                        )
                    }
                    
                </button>
           </fetcher.Form>
        </div>
     );
}
 
export default AddBudgetForm;