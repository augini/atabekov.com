import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Image from 'next/image';

import MobileMenu from '@/components/MobileMenu';

const DynamicJqueryParticles = dynamic(
  () => import('../components/JqueryParticles'),
  { loading: () => <p>...</p>, ssr: true }
);

function NavItem({ href, text }) {
  return (
    <NextLink href={href}>
      <a className="font-medium p-1 text-white sm:p-4 hidden md:inline-block">
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

const Home = (props) => {
  const { ...customMeta } = props;

  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 800);
  }, []);

  const meta = {
    title: 'Farrukh Atabekov - Software Engineer',
    description: `Instructor, JavaScript enthusiast`,
    image:
      'https://drive.google.com/uc?export=view&id=1loyDhNJ0SaMA41MiqIruOiRjY_MMos89',
    type: 'website',
    ...customMeta
  };

  if (!mounted) {
    return <div className={'absolute w-full h-full'}>loading</div>;
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://atabekov.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://atabekov.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Atabekov Farrukh" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Farrukh44943879" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <div className={'h-screen w-screen flex flex-col bg-blue-gradient'}>
        <nav
          className={
            'flex items-center justify-between w-full max-w-3xl lg:p-8 sm:p-2 lg:ml-80 mx-auto my-0 sticky-nav-index md:my-8 text-white bg-transparent md:mr-8'
          }
        >
          <div
            className={
              'flex items-center justify-between w-full h-full max-w-4xl sm:w-4 sm:max-w-1xl'
            }
          >
            <div>
              <MobileMenu bg="bg-blue-gradient" text="text-white" />
            </div>
            <NavItem href={'/about'} text={'About'} />
            <NavItem href={'/blog'} text={'Blog'} />
            <NavItem href={'/dashboard'} text={'Dashboard'} />
            <NavItem href={'/signbook'} text={'Signbook'} />
            <NavItem href={'/cv'} text={'Résumé'} />
          </div>
        </nav>

        <div
          className={'h-screen w-screen absolute flex flex-col items-center'}
        >
          <div className="flex lg:flex-row flex-col-reverse lg:items-center space-between mt-40 max-w-3xl p-8 lg:ml-80 lg:mx-auto ">
            <div className="mr-10 md:z-10">
              <h1 className="font-bold text-3xl md:text-5xl text-white mb-1 md:mb-4">
                Atabekov Farrukh
              </h1>

              <h2 className="font-medium text-xl md:text-2xl text-white">
                Software Engineer
              </h2>
              <p className="font-medium text-white mt-4">
                I write about software and personal growth.
              </p>
            </div>

            <div className="w-[80px] sm:w-[176px] relative mb-4 mr-auto md:z-10">
              <Image
                alt={`Atabekov Farrukh - Software Engineer`}
                src={`/static/images/atabekov.jpg`}
                width={140}
                height={140}
                priority
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <DynamicJqueryParticles />
      </div>
      <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        &copy; 2022{' '}
        <a href="https://atabekov.com" className="text-white">
          atabekov.com
        </a>
      </p>
    </div>
  );
};

export default Home;
