import config from '../../src/config/index'

const URL_VIDEOS = `${config.URL_TOP}/videos`

function createVideo(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
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
  createVideo
}