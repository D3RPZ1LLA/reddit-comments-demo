import api from 'services/api'

export default (params) => api({
  path: `/comments?commentable_id=${params.commentable_id}&commentable_type=${params.commentable_type}`,
  method: 'GET'
})
