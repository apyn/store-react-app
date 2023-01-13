import Footer from "../Components/Navigation/Footer"
import Header from "../Components/Navigation/Header"
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    <Footer/>
    </div>
  )
}

export default Layout
