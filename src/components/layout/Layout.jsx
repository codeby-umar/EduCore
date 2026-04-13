import Navbar from "./Navbar";
import Footer from "./Footer";
import Notfound from "./Notfound";

function Layout({children}) {
  return (
     <main>
          {children}
     </main>
  )
}

export default Layout