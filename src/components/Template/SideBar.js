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
        Hi, I&apos;m Anthony. I am a HCC graduate,{' '}
        <a href="https://www.coursereport.com/schools/the-iron-yard">
          Iron Yard
        </a>
        {' '}coding bootcamp alumni, and Full Stack Data Engineer at{' '}
        AutoLotto. My previous professional experience{' '}
        includes holding various management positions within Hawaii and Texas.
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
