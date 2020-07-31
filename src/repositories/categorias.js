/* eslint-disable linebreak-style */
import config from '../config';

// eslint-disable-next-line no-unused-vars
const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias?_embed=videos`;

function getAllWithVideos() {
  return fetch(`${config.URL_BACKEND_TOP}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
}
export default {
  getAllWithVideos,
};
