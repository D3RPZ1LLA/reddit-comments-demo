import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
})

const api = async (options) => {
  const { method, path, params } = options

  let json
  if (method == 'GET') {
    json = await axiosInstance.get(path)
  } else {
    json = await axiosInstance.post(path, params)
  }

  if (json.status == 200) {
    return json.data
  } else {
    console.warn(json)
    throw new 'ApiError'
  }
}

export default api
