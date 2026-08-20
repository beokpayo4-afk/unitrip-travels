import api from './axios.js'
export const submitCustomTrip = (data) => api.post('/custom-trips', data)
export const getCustomTrips = () => api.get('/custom-trips')
