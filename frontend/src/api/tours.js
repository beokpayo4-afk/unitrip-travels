import api from './axios.js'
export const getTours = (params) => api.get('/tours', { params })
export const getTour = (id) => api.get(`/tours/${id}`)
