const { env } = require("@strapi/utils");

module.exports = () => ({
  "users-permissions": {
    config: {
      jwt: {
        secret: env("JWT_SECRET"),
      },
    },
  },
});
