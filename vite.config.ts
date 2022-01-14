import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    // 配置 @ 映射到 src 目录
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  base: './', // 打包路径

  server: {
    port: 3000, // 端口
    open: true, // 启动打开浏览器
    cors: true, // 跨域
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api/', // 目标地址
        changeOrigin: true, // 修改源
        secure: false, // ssl
        rewrite: (path) => path.replace('/api/', '/'),
      },
    },
  },
})
