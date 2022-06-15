[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Faugini%2Fatabekov.com)

# atabekov.com

I remember creating [my very first personal site](https://augini.github.io/portfolio-website/) with pure HTML, CSS and JavaScript when I first started looking for a job as a developer. 

Even if it was a static site, it has given a number of benefits such as below:

- There are people who can benefit from your experience and content. I read a lot of developer blogs and even if it is difficult to find good ones, mostly they are quite insightful.
- You create online presence. During one of my technical interviews, I asked the interviewer why he picked my portfolio and he simply said that he liked my personal website and many developers do not have online presence where they showcase their work.
- Last but not least, having my site gives me a chance to play around with new tools and frameworks. You get to integrate a new tool to an existing website rather than just creating a pet project with it.

Therefore I have decided to create it with new tools to make it more dynamic.

And now it looks like this: [atabekov.com](https://atabekov.com) 🚀

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://atabekov.com/dashboard), telegram subscription, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/dashboard` - [Personal dashboard](https://atabekov.com/dashboard) containing metrics like views, and subscribers.
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/augini/augini.io.git
$ cd atabekov.com
$ npm install
$ npm run dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/augini/augini.com/blob/master/.env.example).

## Built Using

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [PlanetScale](https://planetscale.com/)
- [MDX](https://github.com/mdx-js/mdx)
- [Tailwind CSS](https://tailwindcss.com/)

Inspired by [leerob.io](https://leerob.io)
