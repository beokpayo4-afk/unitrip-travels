import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Destinations from './pages/Destinations.jsx'
import DestinationDetails from './pages/DestinationDetails.jsx'
import TourPackages from './pages/TourPackages.jsx'
import TourDetails from './pages/TourDetails.jsx'
import Hotels from './pages/Hotels.jsx'
import Flights from './pages/Flights.jsx'
import CustomizedTrip from './pages/CustomizedTrip.jsx'
import GroupTickets from './pages/GroupTickets.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import BookTour from './pages/BookTour.jsx'
import MyBookings from './pages/MyBookings.jsx'
import NotFound from './pages/NotFound.jsx'

import AdminLayout from './pages/admin/AdminLayout.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminDestinations from './pages/admin/AdminDestinations.jsx'
import AdminTours from './pages/admin/AdminTours.jsx'
import AdminBookings from './pages/admin/AdminBookings.jsx'
import AdminCustomTrips from './pages/admin/AdminCustomTrips.jsx'
import AdminContacts from './pages/admin/AdminContacts.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/local" element={<Destinations region="local" />} />
          <Route path="/destinations/india" element={<Destinations region="india" />} />
          <Route path="/destinations/international" element={<Destinations region="international" />} />
          <Route path="/destinations/popular" element={<Destinations region="popular" />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/tour-packages/:category" element={<TourPackages />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/customized-trip" element={<CustomizedTrip />} />
          <Route path="/group-tickets" element={<GroupTickets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book/:id" element={
            <ProtectedRoute><BookTour /></ProtectedRoute>
          } />
          <Route path="/my-bookings" element={
            <ProtectedRoute><MyBookings /></ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/admin" element={
          <ProtectedRoute adminOnly><AdminLayout /></ProtectedRoute>
        }>
          <Route index element={<AdminDashboard />} />
          <Route path="destinations" element={<AdminDestinations />} />
          <Route path="tours" element={<AdminTours />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="custom-trips" element={<AdminCustomTrips />} />
          <Route path="contacts" element={<AdminContacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
