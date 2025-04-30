import 'dotenv/config';
import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'videos',
  slug: 'videos',
  extra: {
    youtubeApiKey: process.env.API_KEY,
    vimeoApiKey: process.env.ACCESS_TOKEN,
  },
});
