import axios from 'axios'

const httpRequest = (type = '') => {
  const baseURL = "http://localhost:4000"

  const buildHeaders = () => {
    const headers = {}
    headers['Content-Type'] = 'application/json'
    return headers
  }

  const baseConfig = () => (
    axios.create({
      headers: buildHeaders(),
      baseURL
    })
  )

  const get = path => baseConfig().get(path)

  const post = (path, data) => baseConfig().post(path, data)

  const put = (path, data) => baseConfig().put(path, data)

  const deleteMethod = path => baseConfig().delete(path)

  return {
    get,
    post,
    put,
    delete: deleteMethod
  }
}

export default httpRequest
