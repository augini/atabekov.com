import Link from 'next/link';

import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About – Farrukh Atabekov">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-gray-800 dark:text-white">
          About Me
        </h1>

        <div className="mb-8 prose dark:prose-dark leading-6 max-w-2xl text-gray-800">
          <p>
            I&apos;m Atabekov Farrukh, software engineer and instructor from
            Khorezm, Uzbekistan currently living in Seoul, South Korea.
          </p>

          <p>
            I&apos;ve contributed to open source projects and spoken at meet-ups
            about software engineering, web and mobile development. I write
            about software and personal growth here on{' '}
            <Link href="/blog">
              <a style={{ textDecoration: 'none' }}>my blog</a>
            </Link>{' '}
            and you can checkout those articles on
            <Link href="https://www.telegram.me/atabekovfarrukh">
              <a style={{ textDecoration: 'none' }}> my telegram channel</a>
            </Link>{' '}
            as well.
          </p>

          <p>
            I spend most of my time writing code and I enjoy doing so. I
            regularly solve programming challenges and try to participate on
            Hackathons. You can read about one of those challenges here. I also
            spend my time doing open source contributions whenever I can.
          </p>

          <p>
            The entire point of development is build to be able to create and
            build stuff that others can use and benefit from. I have been among
            teams and built some applications as a startup, nowadays focused on
            creating applications for Central Asian market. In the fast paced
            tech world, I believe it is important to focus on the growth and
            usability of the application and to be constantly on the look for
            features that serve to make it a breeze for its existing and new
            users.
          </p>

          <p>
            Early on my career as a developer, I have subscribed to the opinion
            that project management is as important as programming and writing
            code, if not more important to provide the flow and successful
            delivery of the product.
          </p>

          <p>
            Litle bit about where I came from and you can read more about my
            story of becoming a software engineer in here. I grew up in a
            small-town called Hazarasp in Khorezm province, came to South Korea
            in 2015 on a full-scholarship for a{' '}
            <Link href="http://www.sejong.ac.kr/">
              <a style={{ textDecoration: 'none' }}> 4-year university</a>
            </Link>{' '}
            and graduated with CS and BA Bachelor&apos;s degrees in 2020. Even
            though I went to school, I relied highly on MOOCs and I still do try
            to extend my knowledge of computer science by taking courses on
            platforms such as Coursera, MIT Open Courseware, Udemy, Educative.
          </p>

          <p>
            <b> Thank you </b>for checking out this tiny piece of the internet
            where I put everything from my personal side projects, programming
            challenges and more. You can leave a comment{' '}
            <Link href={'/signbook'}>
              <a style={{ textDecoration: 'none' }}>here</a>
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
          title="Lee's Travel Map"
          width="100%"
        />
      </div>
    </Container>
  );
}
