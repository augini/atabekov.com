import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import MetricCard from '@/components/metrics/Card';

export default function Telegram() {
  const { data } = useSWR('/api/telegram', fetcher);

  const sales = new Number(data?.subscribers);
  const link = 'https://t.me/atabekovfarrukh';

  return (
    <MetricCard header="Telegram Subscribers" link={link} metric={sales} />
  );
}
