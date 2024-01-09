import Link from 'next/link';

import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About – Farrukh Atabekov">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-gray-800 dark:text-white">
          About
        </h1>

        <div className="mb-8 prose dark:prose-dark leading-6 max-w-2xl text-gray-800">
          <p>
            Hey 👋 there,
            <br />
            <br />
            I&apos;m Atabekov Farrukh, results-driven software engineer with
            expertise in designing and optimizing software systems.
          </p>

          <p>
            I&apos;ve contributed to open source projects and spoken at meet-ups
            about software engineering, web and mobile development. I write
            about software and personal growth here on{' '}
            <Link href="/blog">
              <a style={{ textDecoration: 'none' }}>my blog</a>
            </Link>{' '}
            and you can checkout those articles on
            <Link href="https://www.telegram.me/farrukh_atabekov">
              <a style={{ textDecoration: 'none' }}> my telegram channel</a>
            </Link>{' '}
            as well.
          </p>

          <p>
            I spend most of my time writing code and I enjoy doing so. I
            regularly solve programming challenges and try to participate on
            Hackathons. You can read more about{' '}
            <Link href="https://www.atabekov.com/blog/toptal-speed-coding-challenge-2021">
              <a style={{ textDecoration: 'none' }}> one of those challenges</a>
            </Link>
            . I also spend my time doing open source contributions whenever I
            can.
          </p>

          <p>
            The accessibility of information in today&apos;s era continues to
            astonish me, and I am committed to further expanding my knowledge
            through continuous learning. You can
            <Link href="https://www.atabekov.com/blog/farrukh-atabekov-software-engineer">
              <a style={{ textDecoration: 'none' }}> read more </a>
            </Link>
            about my story of becoming a software engineer.
          </p>

          <p>
            Currently, I am a member of{' '}
            <Link href="https://toptal.com/resume/farrukh-atabekov">
              <a style={{ textDecoration: 'none' }}> Toptal network </a>
            </Link>{' '}
            that matches world&apos;s top software engineers with top companies
            and organizations.
          </p>

          <p>
            The entire point of development is to be able to create and build
            stuff that others can use and benefit from. I have been among teams
            and built some applications as a startup. In the fast paced tech
            world, I believe it is important to focus on the growth and
            usability of the application and to be constantly on the look for
            features that serve to make it a breeze for its existing and new
            users.
          </p>

          <p>
            <b> Thank you </b>for checking out this tiny piece of the internet
            where I put everything from my personal side projects, programming
            challenges and more. You can leave a comment{' '}
            <Link href={'/signbook'}>
              <a style={{ textDecoration: 'none' }}>on my signbook</a>
            </Link>{' '}
            to share your thoughts about this site.
          </p>

          <figure>
            <blockquote cite="https://www.huxley.net/bnw/four.html">
              <p>Whenever in doubt, build something.</p>
            </blockquote>
            <figcaption>
              —Dev Team, <cite>The Odin Project</cite>
            </figcaption>
          </figure>
        </div>
        <iframe
          height="280"
          src="https://www.google.com/maps/d/embed?mid=1dCRHbZifcG28yhQmBlLN7U3nH3KJQGYC&hl=en"
          title="Farrukh's Travel Map"
          width="100%"
        />
      </div>
    </Container>
  );
}
