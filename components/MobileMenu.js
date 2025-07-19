import cn from 'classnames';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from 'styles/mobile-menu.module.css';

function MobileNavItem({ href = '/', title, transitionDelay, text }) {
  return (
    <li
      className={`border-b border-gray-300 dark:border-gray-700 dark:text-gray-100 text-sm font-semibold ${text}`}
      style={{ transitionDelay }}
    >
      {title && (
        <Link href={href} className="flex w-auto pb-4">
          {title}
        </Link>
      )}
    </li>
  );
}

export default function MobileMenu({
  bg = 'bg-white',
  text = 'text-gray-900'
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuMounted(true);
    } else {
      setTimeout(() => setIsMenuMounted(false), 300); // Match exit delay
    }
  }, [isMenuOpen]);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} text={text} />
        <CrossIcon data-hide={!isMenuOpen} text={text} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            `flex flex-col absolute ${bg} dark:bg-black pl-4 pr-8`,
            isMenuOpen && styles.menuRendered
          )}
        >
          <MobileNavItem
            href="/"
            title="Home"
            transitionDelay={'175ms'}
            text={text}
          />
          <MobileNavItem
            href="/about"
            title="About"
            transitionDelay={'275ms'}
            text={text}
          />
          <MobileNavItem
            href="/signbook"
            title="Signbook"
            transitionDelay={'175ms'}
            text={text}
          />
          <MobileNavItem
            href="/blog"
            title="Blog"
            transitionDelay={'250ms'}
            text={text}
          />
          <MobileNavItem
            href="/dashboard"
            title="Dashboard"
            transitionDelay={'200ms'}
            text={text}
          />
          <MobileNavItem
            href="https://www.telegram.me/atabekovfarrukh"
            title="Telegram"
            transitionDelay={'300ms'}
            text={text}
          />
          <MobileNavItem
            href="/cv"
            title="Résumé"
            transitionDelay={'300ms'}
            text={text}
          />
        </ul>
      )}
    </>
  );
}

function MenuIcon(props) {
  return (
    <svg
      className={`h-5 w-5 absolute dark:text-gray-100 ${props.text}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth={'2.5'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth={'2.5'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className={`h-5 w-5 absolute dark:text-gray-100 ${props.text}`}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth={'2.5'}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
