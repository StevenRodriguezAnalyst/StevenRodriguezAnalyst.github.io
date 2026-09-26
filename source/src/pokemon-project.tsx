import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

const stats = [
  ['HP', 35],
  ['Attack', 55],
  ['Defense', 40],
  ['Sp. Attack', 50],
  ['Sp. Defense', 50],
  ['Speed', 90],
];

function WorkflowVisual() {
  return <figure className="workflow-visual" aria-labelledby="workflow-visual-title">
    <div className="workflow-visual-bar">
      <span id="workflow-visual-title">PRODUCTION WORKFLOW</span>
      <a className="workflow-open-light" href="./pokemon-of-the-day-workflow-light.png" target="_blank" rel="noreferrer">OPEN FULL SIZE ↗</a>
      <a className="workflow-open-dark" href="./pokemon-of-the-day-workflow-dark.png" target="_blank" rel="noreferrer">OPEN FULL SIZE ↗</a>
    </div>
    <div className="workflow-scroll" tabIndex={0} aria-label="Scrollable n8n workflow image">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcSet="./pokemon-of-the-day-workflow-dark.png"/>
        <img
          src="./pokemon-of-the-day-workflow-light.png"
          alt="The Pokémon of the Day n8n workflow, from the daily 8 AM trigger through API requests, data formatting, subscriber selection, and Gmail delivery."
          width="3880"
          height="300"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
    <figcaption>Daily production path only. Scroll horizontally to follow all 12 nodes.</figcaption>
  </figure>;
}

function PokemonEmailVisual() {
  return <figure className="email-visual" aria-labelledby="email-visual-title">
    <div className="email-visual-bar">
      <span id="email-visual-title">RESPONSIVE EMAIL PREVIEW</span>
      <span>PIKACHU · NO. 0025</span>
    </div>
    <div className="email-stage">
      <article className="pokemon-email-demo" aria-label="Theme-responsive preview of the Pokémon of the Day email featuring Pikachu">
        <div className="poke-mail-brand">
          <img className="poke-logo" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/960px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokémon" width="160" height="59" loading="lazy" decoding="async"/>
        </div>
        <div className="poke-mail-band">
          <img className="poke-ball-mark" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="" width="38" height="38" loading="lazy" decoding="async"/>
          <strong>Pokémon of the Day</strong>
          <span>September 24, 2026</span>
        </div>

        <div className="poke-mail-content">
          <section className="poke-mail-identity">
            <div className="poke-mail-art">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu official artwork" width="475" height="475" loading="lazy" decoding="async"/>
            </div>
            <div className="poke-mail-profile">
              <span className="poke-number">NO. 0025</span>
              <h3>PIKACHU</h3>
              <strong>Mouse Pokémon</strong>
              <span>Generation I</span>
              <div className="poke-type">Electric</div>
              <span className="poke-status">Standard Pokémon</span>
              <div className="poke-mail-measures">
                <div><span>Height</span><strong>1′ 4″</strong></div>
                <div><span>Weight</span><strong>13.2 lb</strong></div>
              </div>
            </div>
          </section>

          <section className="poke-mail-entry">
            <span>POKÉDEX ENTRY</span>
            <p>“Possesses cheek sacs in which it stores electricity. This clever forest-dweller roasts tough berries with an electric shock before consuming them.”</p>
          </section>

          <section className="poke-mail-abilities">
            <h4>Abilities</h4>
            <div><span>Ability<strong>Static</strong></span><span>Hidden ability<strong>Lightning Rod</strong></span></div>
          </section>

          <section className="poke-mail-grid">
            <div className="poke-mail-evolution">
              <h4>Evolution line</h4>
              <div className="evolution-chain">
                <div className="evolution-step">
                  <small>Base</small>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png" alt="Pichu" width="96" height="96" loading="lazy" decoding="async"/>
                  <strong>Pichu</strong>
                </div>
                <b aria-hidden="true">→</b>
                <div className="evolution-step current">
                  <small>Stage 2</small>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" width="96" height="96" loading="lazy" decoding="async"/>
                  <strong>Pikachu</strong>
                  <span>High friendship</span>
                </div>
                <b aria-hidden="true">→</b>
                <div className="evolution-step">
                  <small>Stage 3</small>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" alt="Raichu" width="96" height="96" loading="lazy" decoding="async"/>
                  <strong>Raichu</strong>
                  <span>Use Thunder Stone</span>
                </div>
              </div>
            </div>
            <div className="poke-mail-fact">
              <h4>Fun fact</h4>
              <p>When several of these Pokémon gather, their electricity could build and cause lightning storms.</p>
            </div>
          </section>

          <section className="poke-mail-grid stats-grid">
            <div className="poke-mail-stats">
              <h4>Base stats</h4>
              {stats.map(([name, value]) => <div className="stat-row" key={name}>
                <span>{name}</span><i><b style={{width: `${Math.max(8, Number(value) / 1.2)}%`}}/></i><strong>{value}</strong>
              </div>)}
            </div>
            <div className="poke-mail-notes">
              <h4>Field notes</h4>
              <dl>
                <div><dt>Habitat</dt><dd>Forest</dd></div>
                <div><dt>Color</dt><dd>Yellow</dd></div>
                <div><dt>Base EXP</dt><dd>112</dd></div>
                <div><dt>Status</dt><dd>Standard</dd></div>
              </dl>
            </div>
          </section>
        </div>

        <div className="poke-mail-footer">
          <strong>New Pokémon. New discoveries. Every day.</strong>
          <span>Pokédex data and official artwork provided by PokéAPI</span>
        </div>
      </article>
    </div>
    <figcaption>This preview changes its full color system with the visitor’s light or dark mode preference.</figcaption>
  </figure>;
}

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
          <div className="eyebrow"><span className="square"/> PERSONAL N8N AUTOMATION / CASE STUDY</div>
          <h1>Pokémon of the Day<br/><span className="serif">email.</span></h1>
          <p className="lead">A personal automation project that turns live Pokémon data into a polished daily email for subscribed friends.</p>
        </div>
        <div className="project-page-meta">
          <span>TOOLS</span>
          <strong>n8n · APIs · Codex</strong>
          <span>DELIVERY</span>
          <strong>Daily · 8:00 AM Pacific</strong>
        </div>
      </section>

      <section className="project-detail-section" aria-labelledby="workflow-heading">
        <div className="label">01 / N8N WORKFLOW</div>
        <div className="project-detail-copy">
          <h2 id="workflow-heading">From selection to delivery.</h2>
          <p>The workflow selects the day’s Pokémon, gathers and organizes live data through connected APIs, builds the email, filters the active subscriber list, and sends each message automatically.</p>
          <WorkflowVisual/>
        </div>
      </section>

      <section className="project-detail-section" aria-labelledby="email-heading">
        <div className="label">02 / EMAIL OUTPUT</div>
        <div className="project-detail-copy">
          <h2 id="email-heading">A daily Pokédex in the inbox.</h2>
          <p>The responsive email brings together artwork, descriptions, stats, abilities, evolution details, and a fun fact in a format designed for both desktop and mobile inboxes.</p>
          <PokemonEmailVisual/>
        </div>
      </section>

      <section className="project-subscribe" aria-labelledby="subscribe-heading">
        <div className="project-subscribe-copy">
          <div className="eyebrow"><span className="square"/> GET THE DAILY EMAIL</div>
          <h2 id="subscribe-heading">Want a new Pokémon in your inbox every morning?</h2>
          <p>Send a quick request to join the subscriber list. The automation delivers Pokémon of the Day every morning at 8:00 AM Pacific.</p>
        </div>
        <div className="project-subscribe-action">
          <a
            className="button dark"
            href="mailto:Stevenrodriguez618@gmail.com?subject=Pok%C3%A9mon%20of%20the%20Day%20subscription&body=Hi%20Steven%2C%0A%0AI%27d%20like%20to%20subscribe%20to%20Pok%C3%A9mon%20of%20the%20Day.%0A"
          >Request a subscription</a>
          <span>Opens a prefilled email request.</span>
        </div>
      </section>

      <div className="project-page-return">
        <p>Return to the rest of my selected work.</p>
        <a className="button dark" href="./index.html#work">Back to work</a>
      </div>
    </main>

    <footer>© {new Date().getFullYear()} Steven Rodriguez <span className="mono">Personal project · n8n automation</span></footer>
  </div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><ProjectPage/></React.StrictMode>);
