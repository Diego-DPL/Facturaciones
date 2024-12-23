import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta de salida para la compilación
  },
  server: {
    host: true, // Permite que el servidor local sea accesible en red
    port: 5173, // Puerto predeterminado
  },
});