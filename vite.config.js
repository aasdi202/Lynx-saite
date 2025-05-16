import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }) // تحلیل bundle
  ],
  
  server: {
    port: 5174, // تغییر پورت برای جلوگیری از تداخل
    host: true,
    strictPort: true,
    hmr: {
      overlay: false // غیرفعال کردن هشدارهای overlay
    },
    watch: {
      usePolling: true // حل مشکل Hot Reload در ویندوز
    }
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500, // افزایش حد هشدار حجم chunk
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          i18n: ['i18next', 'react-i18next'],
          web3: ['ethers', '@web3-react/core']
        } // تقسیم بندی هوشمند کدها
      }
    }
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-i18next',
      '@emotion/react',
      '@web3-react/core'
    ], // وابستگی‌های حیاتی
    exclude: ['js-big-decimal'] // حذف از بهینه‌سازی اگر نیاز است
  },

  css: {
    modules: {
      localsConvention: 'camelCase' // نامگذاری کلاس‌های CSS
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";` // ایمپورت全局 استایل
      }
    }
  },

  resolve: {
    alias: {
      '@': '/src', // تنظیم alias
      '@assets': '/src/assets'
    }
  }
});