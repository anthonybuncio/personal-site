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
          <p>this is where code happens..
            <img src="https://emojis.slackmojis.com/emojis/images/1643514389/3643/cool-doge.gif?1643514389" width="24" alt="coding" />
          </p>
        </div>
      </header>
      <p>
        Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>, check
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
