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


export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}