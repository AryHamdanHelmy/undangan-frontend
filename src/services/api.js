import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { Accept: 'application/json' },
})

export const getInvitation   = (slug)            => api.get(`/invitations/${slug}`)
export const getGuest        = (token)           => api.get(`/guests/${token}`)
export const markGuestOpened = (token)           => api.patch(`/guests/${token}/opened`)
export const getGuestbook    = (id, page = 1)    => api.get(`/invitations/${id}/guestbook?page=${page}`)
export const submitGuestbook = (id, data)        => api.post(`/invitations/${id}/guestbook`, data)

export default api