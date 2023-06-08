import ExpenseItem from "./ExpenseItem";

const Table = ({expenses, showBudget = true}) => {
    return ( 
        <div className="grid grid-cols-1">
            <table className="table-auto grid grid-cols-1 border p-2 rounded-md">
                <thead className="grid grid-cols-1">
                    <tr className={`grid ${showBudget ? `grid-cols-5` : `grid-cols-4`}  px-2 py-1`}>
                        {
                            ["Name", "Amount", "Date", showBudget && ""].map((i, index)=>(
                                <th className="text-left" key={index}>{i}</th>
                            ))
                        }
                    </tr>
                </thead>
                <hr />
                <tbody>
                    {
                        expenses.map((expense)=>(
                            <tr 
                                key={expense.id}
                                className={`grid  ${showBudget ? `grid-cols-5` : `grid-cols-4`}  px-2 py-1 hover:bg-slate-200`}
                            >
                                <ExpenseItem expense={expense} showBudget={showBudget} />
                                
                            </tr>
                        ))
                    }
                   
                </tbody>
            </table>
        </div>

     );
}
 
export default Table;