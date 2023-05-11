import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description={"Anthony Buncio's personal website"}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/"><span className="highlight">Software engineer. <br />Web developer. <br />Creator.</span></Link>
          </h2>
          <p>Welcome to my portfolio!
          </p>
        </div>
      </header>
      <p>
        Please feel free to read more <Link to="/about">about me</Link>, check
        out my <Link to="/resume">resume</Link>, view my{' '}
        <Link to="/projects">projects</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        Source available{' '}
        <a href="https://github.com/anthonybuncio/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
