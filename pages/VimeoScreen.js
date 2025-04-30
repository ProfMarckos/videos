import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { buscarVideosVimeo } from '../api/vimeo';

export default function VimeoScreen() {
  const [pesquisa, setPesquisa] = useState('');
  const [videos, setVideos] = useState([]);

  const pesquisar = async () => {
    try {
      const resultados = await buscarVideosVimeo(pesquisa);
      setVideos(resultados);
    } catch (erro) {
      console.error("Erro ao buscar no Vimeo:", erro);
    }
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.containerPesquisa}>
        <TextInput
          style={estilos.entrada}
          placeholder="Pesquisar no Vimeo"
          value={pesquisa}
          onChangeText={setPesquisa}
        />
        <TouchableOpacity style={estilos.botao} onPress={pesquisar}>
          <Text style={estilos.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {videos.map((video) => (
          <View key={video.uri} style={estilos.containerVideo}>
            <Text style={estilos.tituloVideo}>{video.name}</Text>
            <WebView
              style={estilos.webview}
              source={{ uri: `https://player.vimeo.com/video/${video.uri.split('/').pop()}` }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 50 },
  containerPesquisa: { flexDirection: 'row', padding: 10 },
  entrada: { flex: 1, backgroundColor: '#fff', borderRadius: 4, paddingHorizontal: 10, marginRight: 10 },
  botao: { backgroundColor: '#03dac5', padding: 10, borderRadius: 4 },
  textoBotao: { color: '#fff', fontWeight: 'bold' },
  containerVideo: { margin: 10, padding: 10, backgroundColor: '#fff', borderRadius: 8 },
  tituloVideo: { fontSize: 16, marginBottom: 10 },
  webview: { height: 200 },
});
