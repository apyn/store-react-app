import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import HomePage from './Pages/HomePage'
import CartProviders from './Providers/CartProviders'
import route from '../src/Routes/Routes'
import AuthProviders from './Providers/AuthProviders'
function App() {
  return (
    // <Router>
    <AuthProviders>
        <CartProviders>
      <Layout>
        <Routes>
          {route.map((r) => (
            <Route path={r.path} element={r.element} />
          ))}
        </Routes>
      </Layout>
              </CartProviders>
    </AuthProviders>


    // </Router>
  )
}

export default App
