// local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
};

// generate randowm color
const genRandomColor = () => {
    
}

// get all items for localstorage
export const getAllMatchingItems = ({category, key, value}) => {
    const data = fetchData(category) ?? [];
    return data.filter((item) => item[key] === value)
}

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
        budget: budget,
        createdAt: Date.now(),
        color: `rgb(255, 105, 789)`
    }

    const existingExpenses = fetchData('expenses') ?? [];
    return localStorage.setItem('expenses', JSON.stringify([...existingExpenses, newItem]))
}

// delete item from local storage
export const deleteItem = ({key, id}) => {
    const existingData = fetchData(key)
    if(id) {
        const newData = existingData.filter((item) => item.id !== id)
        return localStorage.setItem(key, JSON.stringify(newData))
    }
    return localStorage.removeItem(key)
}

// total spent by budget
export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchData('expenses') ?? []
    const budgetSpent = expenses.reduce((acc, expense) => {
        // check if expenseId !== budget
        if(expense.budget !== budgetId) return acc

        // add the current amount to total
        return acc += expense.amount

    }, 0)

    return budgetSpent;
}

// Formatting


// format currency
export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency",
        currency: "NGN"
    })
}

export const formatDate = (epoch) => new Date(epoch).toLocaleDateString()


// chart
export const  sortedArray = []
// run a map function and filter expenses based on budgets


