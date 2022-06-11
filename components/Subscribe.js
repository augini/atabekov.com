import Link from 'next/link';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

export default function Subscribe() {
  // const { data } = useSWR('/api/subscribers', fetcher);
  const { data } = useSWR('/api/telegram', fetcher);
  const subscriberCount = new Number(data?.subscribers);

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <p className="my-1 text-gray-800 dark:text-gray-200 prose">
        You can also subscribe to{' '}
        <Link href="https://www.telegram.me/atabekovfarrukh">
          <a style={{ textDecoration: 'none' }}> my telegram channel</a>
        </Link>{' '}
        where I share new articles, tech-related posts and more.
      </p>

      <p className="text-sm text-gray-800 dark:text-gray-200">
        {`${
          subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
        } subscribers`}
        {/* <Link href="/newsletter">
          <a>3 issues</a>
        </Link> */}
      </p>
    </div>
  );
}
