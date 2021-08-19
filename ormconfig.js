module.exports = {
  "type": "mysql",
  "host": "database",
  "port": process.env.DATABASE_PORT,
  "username": process.env.DATABASE_USER,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
  "entities": ["src/entities/*.ts"],
  "migrations": ["src/database/migrations/*.ts"],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/database/migrations",
  }
};
