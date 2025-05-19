import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      tsDecorators: true,
      jsxImportSource: '@emotion/react',
     babel: {
      plugins: ['@emotion/babel-plugin']
    }
      plugins: [
        ['@swc/plugin-styled-components', {}] // Replaced emotion with styled-components
      ],
    }),
    svgr({
      svgrOptions: {
        icon: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  cleanupIDs: false,
                },
              },
            },
            'prefixIds',
          ],
        },
      },
    }),
  ],

  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, 'src/styles'),
      },
      {
        find: '@contexts',
        replacement: path.resolve(__dirname, 'src/contexts'),
      },
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },

  server: {
    host: '0.0.0.0',
    port: 3001,
    strictPort: true,
    open: '/',
    cors: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      overlay: false,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: 'hidden',
    minify: 'esbuild',
    cssMinify: true,
    chunkSizeWarningLimit: 2000,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('@mui') || id.includes('@chakra-ui')) {
              return 'vendor-ui';
            }
            if (id.includes('i18next')) {
              return 'vendor-i18n';
            }
            if (id.includes('ethers') || id.includes('web3')) {
              return 'vendor-web3';
            }
            return 'vendor-other';
          }
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: 'entries/[name]-[hash].js',
      },
      treeshake: {
        preset: 'recommended',
        moduleSideEffects: false,
      },
    },
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-i18next',
      '@mui/material',
      '@chakra-ui/react',
      '@web3-react/core',
      'framer-motion',
      'i18next',
      'i18next-browser-languagedetector',
    ],
    exclude: [
      'js-big-decimal',
      'ethers',
    ],
    esbuildOptions: {
      target: 'es2020',
      supported: {
        bigint: true,
      },
    },
  },

  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: '[name]__[local]--[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:math";
          @import "@styles/variables.scss";
          @import "@styles/mixins.scss";
        `,
      },
    },
    postcss: {
      plugins: [
        tailwindcss(path.resolve(__dirname, 'tailwind.config.js')),
        autoprefixer(),
      ],
    },
  },

  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'html') {
        return { runtime: `window.__assetsPath(${JSON.stringify(filename)})` };
      }
      return { relative: true };
    },
  },
});