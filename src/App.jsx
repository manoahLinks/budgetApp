import {
  createBrowserRouter,
  RouterProvider

} from 'react-router-dom'

// library imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Routes
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard'
import Error from './pages/Error'

// layouts
import Main, { mainLoader } from './layouts/Main'


// Actions
import { logoutAction } from './actions/logout'
import ExpensesPage, { expensesLoader } from './pages/ExpensesPage'
import BudgetPage, { budgetLoader } from './pages/BudgetPage'
import AllBudgetsPage, { AllBudgetsPageLoader } from './pages/AllBudgetsPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: mainLoader,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error/>
      },

      {
        path: "/expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
      },

      {
        path: "/budgets",
        element: <AllBudgetsPage/>,
        loader: AllBudgetsPageLoader,
      },

      {
        path: "/budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
      },

      {
        path: 'logout',
        action: logoutAction
      }
    ]
  },
  
])

function App() {

  return (  
    <div>
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
        
  )
}

export default App
