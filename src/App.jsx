import {
  createBrowserRouter,
  RouterProvider

} from 'react-router-dom'

// Routes
import Dashboard, { dashboardLoader } from './pages/Dashboard'
import Error from './pages/Error'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    loader: dashboardLoader,
    errorElement: <Error/>
  },

  {
    path: "/about",
    element: <h4>hi about page</h4>
    
  },

  {
    path: "*",
    element: <h4>Oops it seems this route is not available</h4>
    
  }
])

function App() {

  return (  
    <div>
      <RouterProvider router={router} />
    </div>
        
  )
}

export default App
