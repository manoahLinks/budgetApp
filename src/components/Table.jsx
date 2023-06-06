import ExpenseItem from "./ExpenseItem";

const Table = ({expenses}) => {
    return ( 
        <div className="grid grid-cols-1">
            <table className="grid grid-cols-1 border">
                <thead className="grid grid-cols-1">
                    <tr className="grid grid-cols-4 px-2 py-1">
                        {
                            ["Name", "Amount", "Date", "Action"].map((i, index)=>(
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
                                className="grid grid-cols-4 px-2 py-1 hover:bg-slate-200"
                            >
                                <ExpenseItem expense={expense} />
                                
                            </tr>
                        ))
                    }
                   
                </tbody>
            </table>
        </div>

     );
}
 
export default Table;