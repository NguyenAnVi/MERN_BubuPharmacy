export const config = {
  client: {
    port: 3000,
    url: 'http://localhost',
  },
  server: {
    port: 3001,
    url: 'http://localhost:3001',
    proxy: {
      "/api": {
        changeOrigin: true
      }
    }
  }
};