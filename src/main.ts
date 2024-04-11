import { createSSRApp } from 'vue';
import App from './App.vue';
import * as Pinia from 'pinia';
import '@/scss/index.css';
import '@/scss/public.scss';
export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  return {
    app,
    Pinia
  };
}
