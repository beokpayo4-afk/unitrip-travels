import api from './axios.js'
export const getDestinations = (params) => api.get('/destinations', { params })
export const getDestination = (id) => api.get(`/destinations/${id}`)
