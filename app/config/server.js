module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  // url: "https://api2.rotihouselao.com",
  url: "http://192.168.0.12",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "166efc337cab41c074765f86f9bb25a2"),
    },
  },
});
