import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>

          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>

          {/* <Link href="/newsletter">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Newsletter
            </a>
          </Link> */}
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.telegram.me/atabekovfarrukh">
            Telegram
          </ExternalLink>
          <Link href="/signbook">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Signbook
            </a>
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/augini">GitHub</ExternalLink>
          <ExternalLink href="https://gitlab.com/Farrukhbek">
            GitLab
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
