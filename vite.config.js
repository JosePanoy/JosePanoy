import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom resolver plugin to handle "react-dom/client"
const customResolver = {
  name: 'custom-resolver',
  resolveId(source) {
    if (source === 'react-dom/client') {
      return {
        id: 'react-dom',
        external: true,
      };
    }
    return null;
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    customResolver // Add the custom resolver plugin
  ],
});
