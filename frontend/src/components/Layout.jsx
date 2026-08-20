import { Outlet } from 'react-router-dom'
import AnnouncementBar from './AnnouncementBar.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
