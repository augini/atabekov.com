import db from '@/lib/planetscale';
import { format } from 'date-fns';
import requestIp from 'request-ip';
import satelize from 'satelize';

export default async function handler(req, res) {
  const today = format(new Date(), 'dd-MMMM-yyyy');
  try {
    if (req.method === 'GET') {
      const [rows] = await db.query(
        `SELECT count AS total FROM daily_views WHERE day = ?`,
        [today]
      );

      const total = rows[0]['total'];
      return res.status(200).json({ total });
    }

    if (req.method === 'POST') {
      const clientIp = requestIp.getClientIp(req);

      console.log(clientIp);
      satelize.satelize({ ip: clientIp }, async function (err, payload) {
        if (err) {
          console.log('There is error fetching user geo location');
        }

        console.log(payload);

        const [rows] = await db.query(
          `SELECT * FROM daily_views ORDER BY id DESC LIMIT 1;`
        );

        if (rows[0].day === today) {
          await db.query(
            `
            UPDATE daily_views
            SET count = count + 1, ipv6 = ? WHERE day = ?;
          `,
            [JSON.stringify(payload), today]
          );

          return res.status(200).json({
            total: rows[0].count + 1
          });
        } else {
          await db.query(
            `
            INSERT INTO daily_views (day, count, ipv6)
            VALUES (?, ?, ?);
          `,
            [today, 1, JSON.stringify(payload)]
          );

          return res.status(200).json({
            total: 1
          });
        }
      });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
