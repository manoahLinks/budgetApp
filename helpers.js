// local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
};

export const createBudget = ({name, amount}) =>{
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount
    }

    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]))
}

export const createExpense = ({name, amount, budget}) => {
    const newItem = {
        id: `Exp-${crypto.randomUUID()}`,
        name: name,
        amount: +amount,
        budget: budget
    }

    const existingExpenses = fetchData('expenses') ?? [];
    return localStorage.setItem('expenses', JSON.stringify([...existingExpenses, newItem]))
}


// total spent by budget
export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchData('expenses') ?? []
    const budgetSpent = expenses.reduce((acc, expense) => {
        // check if expenseId === budget
        if(expense.budget !== budgetId) return acc

        // add the current amount to total
        return acc += expense.amount

    }, 0)

    return budgetSpent;
}

export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}

// Formatting


// format currency
export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency",
        currency: "NGN"
    })
}

