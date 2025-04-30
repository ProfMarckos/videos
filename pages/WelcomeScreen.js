import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo!</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('HomeTabs')}>
        <Text style={styles.botaoTexto}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6200ee' },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 30 },
  botao: { backgroundColor: '#03dac5', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 6 },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
