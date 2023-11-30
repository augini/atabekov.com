import db from '@/lib/planetscale';
import { format } from 'date-fns';
import requestIp from 'request-ip';

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
      const response = await fetch(`http://ipwho.is/31.148.165.81`, {
        method: 'GET'
      });

      const data = await response.json();

      // store the ip information in ip_analytics
      const [i_rows] = await db.query(
        `SELECT * FROM ip_analytics WHERE ipv4 = ?`,
        [data.ip]
      );

      if (i_rows.length === 0) {
        // push the record into ip analytics
        await db.query(
          `INSERT INTO ip_analytics(ipv4, city, region, country) VALUES (?,?,?,?)`,
          [data.ip, data.city, data.region, data.country]
        );
      } else {
        await db.query(
          `
          UPDATE ip_analytics
          SET count = count + 1 WHERE ipv4 = ?;
        `,
          [data.ip]
        );
      }

      const [rows] = await db.query(
        `SELECT * FROM daily_views ORDER BY id DESC LIMIT 1;`
      );

      if (rows[0].day === today) {
        await db.query(
          `
          UPDATE daily_views
          SET count = count + 1, ipv6 = ? WHERE day = ?;
        `,
          [clientIp, today]
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
          [today, 1, clientIp]
        );

        return res.status(200).json({
          total: 1
        });
      }
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
