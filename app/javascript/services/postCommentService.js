import api from 'services/api'

export default (params) => api({
  path: '/comments',
  method: 'POST',
  params: params
})
