import api from './axios.js'
export const createBooking = (data) => api.post('/bookings', data)
export const getMyBookings = () => api.get('/bookings/my')
export const getBooking = (id) => api.get(`/bookings/${id}`)
export const updateBookingStatus = (id, status) => api.put(`/bookings/${id}/status`, { status })
