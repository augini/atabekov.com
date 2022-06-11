import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import MetricCard from '@/components/metrics/Card';

export default function Analytics({ daily }) {
  let header = 'All Time Views';
  let path = 'api/views';

  if (daily) {
    header = "Today's Views";
    path = path + '/daily';
  }

  const { data } = useSWR(path, fetcher);

  const pageViews = new Number(data?.total);
  const link = 'https://atabekov.com';

  return <MetricCard header={header} link={link} metric={pageViews} />;
}
