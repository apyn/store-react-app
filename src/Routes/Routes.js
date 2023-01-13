
import CartPage from "../Pages/CartPage";
import Checkout from "../Pages/Checkout";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import NotFound from "../Pages/NotFound";
import Profile from "../Pages/Profile";
import SignupPage from "../Pages/Signup";


const route=[
    
    {path:"/" , element:<HomePage/>},
    {path:"/cart" , element:<CartPage/>},
    {path:"/checkout" , element:<Checkout/>},
    {path:"*" ,element:<NotFound/>},
    {path:"/login" , element:<LoginPage/>},
    {path:"/signup" , element:<SignupPage/>},
    {path:"/profile" ,element:<Profile/>}
]

export default route