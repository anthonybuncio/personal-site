import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const date = new Date().getFullYear();

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me2.jpg`} alt="" />
      </Link>
      <header>
        <h2>Anthony Buncio</h2>
        <p>
          <a href="mailto:anthonybuncio.work@gmail.com">
            anthonybuncio.work@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Anthony. I enjoy building apps. I am a self-taught
        software engineer, web developer, computer science grad and{' '}
        <a href="https://www.coursereport.com/schools/the-iron-yard">
          Iron Yard
        </a>{' '}
        Coding Bootcamp Alumni. Prior to becoming a software engineer, I&apos;ve
        held several management positions in Hawaii and Texas.{' '}
        <br />
        <br />

      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              Learn More
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; {date} Anthony Buncio. <Link to="/">anthonybuncio.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
