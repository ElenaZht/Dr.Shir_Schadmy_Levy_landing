import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children, showNavbar = true, showFooter = true }) {
  return (
    <div className="box-border m-0 p-0 font-sans leading-relaxed text-gray-800 text-right" dir="rtl">
      {showNavbar && <Navbar />}
      <main className="w-full">
        {children || <Outlet />}
      </main>
      {showFooter && <Footer />}
    </div>
  )
}

export default Layout
