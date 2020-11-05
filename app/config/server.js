module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  // url: "http://c8c1ece66b72.ngrok.io",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "166efc337cab41c074765f86f9bb25a2"),
    },
  },
});
