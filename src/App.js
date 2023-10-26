import logo from './logo.svg'
import './App.css'
import { Login } from './pages/Login'
import DashboardIndex from './pages/Dashboard/'
import CustomersPage from './pages/Dashboard/customers'

function App () {
  return (
    <div>
      <CustomersPage />
      {/* <DashboardIndex /> */}
      {/* <Login /> */}
    </div>
  )
}

export default App
