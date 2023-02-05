import Footer from "../Components/Navigation/Footer"
import Header from "../Components/Navigation/Header"
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen dark:bg-slate-800 max-h-max">
      <Header />
      {children}
    <Footer/>
    </div>
  )
}

export default Layout
