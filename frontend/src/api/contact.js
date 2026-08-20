import api from './axios.js'
export const submitContact = (data) => api.post('/contact', data)
