import "./environment.js"

export default {
  isProd: process.env.NODE_ENV === "production",
  isLocal: process.env.NODE_ENV === "local",
  server: {
    port: process.env.PORT ?? 3000,
    host: process.env.HOST ?? "localhost",
  },
  db: {
    mongodb: {
      uri: process.env.MONGODB_URI,
      connectOptions: {},
    },
  },
  auth: {
    accessTokenSecretKey: process.env.ACCESS_TOKEN_SECRET_KEY,
    accessTokenExpiration: 1800, // 30 min
  },
}
