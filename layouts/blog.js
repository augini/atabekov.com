import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '@/components/Container';
import Subscribe from '@/components/Subscribe';
import ViewCounter from '@/components/ViewCounter';

const editUrl = (slug) =>
  `https://github.com/augini/atabekov.com/edit/master/data/blog/${slug}.mdx`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Farrukh Atabekov`}
      description={frontMatter.summary}
      image={`https://drive.google.com/uc?export=view&id=1loyDhNJ0SaMA41MiqIruOiRjY_MMos89`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              alt="Farrukh Atabekov"
              height={40}
              width={40}
              src="/static/images/atabekov.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Farrukh Atabekov / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full text-gray-800">
          {children}
        </div>
        <div className="mt-8">
          <Subscribe />
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </Container>
  );
}
