import axios from 'axios';
import Constants from 'expo-constants';

const API_KEY = Constants.expoConfig.extra.youtubeApiKey;

export const buscarVideos = async (query) => {
  try {
    const resposta = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: API_KEY,
      },
    });
    return resposta.data.items;
  } catch (erro) {
    console.error('Erro ao buscar vídeos do YouTube:', erro);
    throw erro;
  }
};
