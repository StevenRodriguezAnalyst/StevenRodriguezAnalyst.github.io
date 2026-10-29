import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

function ProjectPage() {
  return <div className="project-page">
    <a className="skip" href="#project-main">Skip to content</a>
    <header>
      <a className="brand" href="./index.html#main" aria-label="Steven Rodriguez — home">sr<span>_</span></a>
      <div className="project-page-nav">
        <a href="./index.html#work">Back to work</a>
        <a className="button nav-contact" href="./index.html#contact">Contact</a>
      </div>
    </header>

    <main className="project-page-main" id="project-main" tabIndex={-1}>
      <section className="project-page-hero">
        <div>
          <div className="eyebrow"><span className="square"/> CLIENT &amp; MARKET ANALYSIS / CASE STUDY</div>
          <h1>Geographic client<br/><span className="muted">&amp; market analysis.</span></h1>
          <p className="lead">An analysis of 7,000+ CRM records against Census population data to compare client distribution across Orange, Riverside, and San Bernardino counties.</p>
        </div>
        <div className="project-page-meta">
          <span>TOOLS</span>
          <strong>Excel · Power Query · PivotTables · XLOOKUP</strong>
          <span>COVERAGE</span>
          <strong>Orange · Riverside · San Bernardino</strong>
        </div>
        <figure className="project-demo" aria-labelledby="demo-heading">
          <div className="project-demo-heading">
            <h2 id="demo-heading">Watch the analysis.</h2>
            <span className="mono">PROJECT WALKTHROUGH</span>
          </div>
          <video
            controls
            playsInline
            preload="metadata"
            width="1920"
            height="1080"
            aria-label="Geographic client and market analysis walkthrough"
            aria-describedby="demo-caption"
          >
            <source src="./geographic-client-market-analysis.mp4" type="video/mp4"/>
            Your browser does not support embedded video. <a href="./geographic-client-market-analysis.mp4">Download the walkthrough</a>.
          </video>
          <figcaption id="demo-caption">A walkthrough of the geographic client and market analysis project.</figcaption>
        </figure>
      </section>

      <section className="project-detail-section" aria-labelledby="question-heading">
        <div className="label">01 / THE QUESTION</div>
        <div className="project-detail-copy">
          <h2 id="question-heading">Where are clients underrepresented?</h2>
          <p>Which cities have fewer clients than their population share would suggest? I compared CRM client records with U.S. Census population data across three Southern California counties to find those gaps.</p>
        </div>
      </section>

      <section className="project-detail-section" aria-labelledby="method-heading">
        <div className="label">02 / THE METHOD</div>
        <div className="project-detail-copy">
          <h2 id="method-heading">From CRM records to county reports.</h2>
          <p>I used PivotTables, XLOOKUP, and Power Query to build county reports. AI-assisted cleaning helped fix city names and duplicate entries before I compared the records with U.S. Census data.</p>
          <ol className="etl-flow" aria-label="Geographic analysis process">
            <li><span className="mono">01 / INPUT</span><strong>7,000+ CRM records</strong><p>Client records across three counties</p></li>
            <li><span className="mono">02 / PREPARE</span><strong>Clean and organize</strong><p>Fix city names and duplicate entries</p></li>
            <li><span className="mono">03 / COMPARE</span><strong>County reports</strong><p>Client distribution against Census population</p></li>
          </ol>
        </div>
      </section>

      <section className="project-detail-section" aria-labelledby="results-heading">
        <div className="label">03 / THE RESULT</div>
        <div className="project-detail-copy">
          <h2 id="results-heading">City-level gaps in client coverage.</h2>
          <p>Found 10+ cities where client numbers were low relative to population. Manual cleanup time fell by an estimated 80%+, and data accuracy improved by 30%+.</p>
          <dl className="etl-results">
            <div><dt>Client records analyzed</dt><dd>7,000+</dd></div>
            <div><dt>Cities with low client representation</dt><dd>10+</dd></div>
          </dl>
        </div>
      </section>

      <div className="project-page-return">
        <p>Return to the rest of my selected work.</p>
        <a className="button dark" href="./index.html#work">Back to work</a>
      </div>
    </main>
    <footer>© {new Date().getFullYear()} Steven Rodriguez <span className="mono">Client &amp; market analysis · Excel</span></footer>
  </div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><ProjectPage/></React.StrictMode>);
