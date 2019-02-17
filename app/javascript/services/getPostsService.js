import api from 'services/api'

export default () => { return api({ path: '/posts', method: 'GET' }) }
