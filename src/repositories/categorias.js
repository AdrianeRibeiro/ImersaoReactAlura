import config from '../../src/config/index'

const URL_CATEGORIES = `${config.URL_TOP}/categorias`

function getAllCategoriesWithVideos() {
  return api(`${URL_CATEGORIES}?_embed=videos`)
}

function getAll() {
  return api(URL_CATEGORIES)
}

function api(url) {
  return fetch(url)
    .then(async (respostaDoServer) => {

      if(respostaDoServer.ok) {
        const resposta = await respostaDoServer.json()
        return resposta
      }

      throw new Error('Não foi possível pegar os dados :(')
    })
}

function createCategoria(objetoDaCategoria) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
  .then(async (respostaDoServer) => {
    if(respostaDoServer.ok) {
      const resposta = await respostaDoServer.json()
      return resposta
    }

    throw new Error('Não foi possível cadastrar os dados :(')
  })
}

export default {
  getAllCategoriesWithVideos,
  getAll,
  createCategoria
}