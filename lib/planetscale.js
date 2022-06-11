import { PSDB } from 'planetscale-node';

const db = new PSDB('main');

async function main() {
  const [rows, fields] = await db.query('SELECT * FROM guestbook');
}

main();
export default db;
