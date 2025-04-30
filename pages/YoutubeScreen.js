import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import { WebView } from "react-native-webview";
import { buscarVideos } from "../api/youtube";

export default function YoutubeScreen() {
  const [pesquisa, setPesquisa] = useState("");
  const [videos, setVideos] = useState([]);

  const pesquisar = async () => {
    try {
      const resultados = await buscarVideos(pesquisa);
      setVideos(resultados);
    } catch (erro) {
      console.error("Erro ao pesquisar vídeos:", erro);
    }
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.containerPesquisa}>
        <TextInput
          style={estilos.entrada}
          placeholder="Pesquisar no YouTube"
          value={pesquisa}
          onChangeText={setPesquisa}
        />
        <TouchableOpacity style={estilos.botao} onPress={pesquisar}>
          <Text style={estilos.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {videos.map((video) => (
          <View key={video.id.videoId} style={estilos.containerVideo}>
            <Text style={estilos.tituloVideo}>{video.snippet.title}</Text>
            <WebView
              style={estilos.webview}
              source={{ html: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>` }}
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
