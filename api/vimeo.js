import axios from 'axios';
import Constants from 'expo-constants';

const ACCESS_TOKEN = Constants.expoConfig.extra.vimeoApiKey;

export const buscarVideosVimeo = async (query) => {
  try {
    const resposta = await axios.get('https://api.vimeo.com/videos', {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      params: { query, per_page: 10 },
    });
    return resposta.data.data;
  } catch (erro) {
    console.error('Erro ao buscar vídeos do Vimeo:', erro);
    throw erro;
  }
};
