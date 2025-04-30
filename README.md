# App de Pesquisa de Vídeos – YouTube & Vimeo

Este é um aplicativo mobile desenvolvido em **React Native com Expo SDK 52**, que permite pesquisar vídeos utilizando as APIs do **YouTube** e **Vimeo**.  
A navegação é feita por **bottom tabs**, onde cada aba representa um serviço de vídeo.

---

## 📱 Funcionalidades

- 🔍 Pesquisa de vídeos no YouTube
- 🔍 Pesquisa de vídeos no Vimeo
- 📺 Exibição das miniaturas e títulos
- Navegação com **Bottom Tabs**
- Código organizado e com variáveis de ambiente seguras

---

## 🚀 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo SDK 52](https://docs.expo.dev/)
- [YouTube Data API v3](https://console.cloud.google.com/)
- [Vimeo API](https://developer.vimeo.com/)
- [Axios](https://axios-http.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🧪 Como testar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   API_KEY=coloque_sua_chave_do_youtube_aqui
   ACCESS_TOKEN=coloque_sua_chave_do_vimeo_aqui
   ```

4. Inicie o projeto:
   ```bash
   npx expo start
   ```

---

## 🔐 Protegendo suas chaves de API

Para garantir que suas chaves de API **não sejam expostas**, este projeto utiliza:

- Arquivo `.env` para armazenar chaves localmente
- `app.config.ts` com carregamento seguro via `dotenv`
- `expo-constants` para acessar as chaves no app
- `.gitignore` já configurado para ignorar o `.env`

> ⚠️ Nunca inclua suas chaves diretamente no código ou envie seu `.env` para o GitHub.

---

## 🌐 Criando suas chaves de API

### 🔑 YouTube
1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto
3. Vá até **APIs e Serviços > Biblioteca**
4. Ative a **YouTube Data API v3**
5. Vá até **Credenciais** e gere uma chave de API

### 🔑 Vimeo
1. Acesse o [Vimeo Developer Portal](https://developer.vimeo.com/)
2. Crie uma nova aplicação
3. Copie seu **Access Token** com permissões de leitura (`public`)

---

## ✍️ Autor

Desenvolvido por [Seu Nome](https://github.com/seu-usuario)  
Este projeto tem fins educacionais e demonstra o uso de múltiplas APIs com segurança no React Native.

---

## 📄 Licença

MIT License – sinta-se livre para usar e modificar.