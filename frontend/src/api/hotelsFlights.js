import api from './axios.js'
export const searchHotels = (params) => api.get('/hotels/search', { params })
export const searchFlights = (params) => api.get('/flights/search', { params })
