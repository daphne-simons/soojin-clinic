import { createConnection } from 'typeorm';
async function main() {
  const connection = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mypassword',
    database: 'mydb',
    entities: [],
    synchronize: true,
  });
  console.log('Connected to database');
}
main().catch((err) => {
  console.error(err);
});