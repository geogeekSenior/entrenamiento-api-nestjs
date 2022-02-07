import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    port: parseInt(process.env.PORT, 10),
    sqlserver: {
      server: process.env.SQL_SERVER,
      database: process.env.SQL_DATABASE,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
      encrypt: process.env.SQL_ENCRYPT,
      port: parseInt(process.env.SQL_PORT, 10),
    },
  };
});
