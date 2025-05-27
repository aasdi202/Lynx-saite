import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  root: './',
  publicDir: 'public',

  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr({
      svgrOptions: {
        icon: true,
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
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },

  server: {
    host: '0.0.0.0',
    port: 3001,
    open: true,
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
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'terser',
    cssMinify: true,
    chunkSizeWarningLimit: 1600,
    target: 'esnext',
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: 'entries/[name]-[hash].js',
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('@chakra-ui') || id.includes('@mui')) {
              return 'vendor-ui';
            }
            if (id.includes('source-map') || id.includes('wasm')) {
              return 'vendor-external';
            }
            return 'vendor-other';
          }
        },
      },
      external: [/\.wasm$/],
    },
  },

  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        tailwindcss(path.resolve(__dirname, 'tailwind.config.js')),
        autoprefixer(),
      ],
    },
    modules: {
      generateScopedName: '[name]__[local]--[hash:base64:5]',
    },
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-i18next',
      '@emotion/react',
      '@chakra-ui/react',
    ],
    esbuildOptions: {
      target: 'esnext',
      supported: {
        'top-level-await': true,
      },
      plugins: [
        {
          name: 'exclude-wasm',
          setup(build) {
            build.onResolve({ filter: /\.wasm$/ }, () => {
              return { external: true };
            });
          },
        },
      ],
    },
  },
});
