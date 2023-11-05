import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Add this assetInclude option to handle .lottie files
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][ext]',
      },
    },
  },
  assetsInclude: ['**/*.lottie'],

  // Other Vite configuration options...
});
