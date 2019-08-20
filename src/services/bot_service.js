import httpRequest from '../gateway/http_request'

const botService = (client = httpRequest) => {
  const create = attrs => (
    client().post('/api/bot/create', attrs)
  )

  const list = (attrs) => (
    client().post('/api/bots', attrs)
  )

  return {
    create,
    list
  }
}

export default botService
