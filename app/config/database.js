module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3307),
        database: env('DATABASE_NAME', 'rotihouse'),
        username: env('DATABASE_USERNAME', 'rotihouse'),
        password: env('DATABASE_PASSWORD', 'rotihouse'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
