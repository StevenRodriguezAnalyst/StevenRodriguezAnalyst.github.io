import React, {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {portfolio as p} from './data/portfolio';
import './style.css';
function App(){const [menu,setMenu]=useState(false);const [theme,setTheme]=useState(()=>{try{return localStorage.getItem("portfolio-theme") || "light"}catch{return "light"}});useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem("portfolio-theme",theme)}catch{}},[theme]);return <>
<a className="skip" href="#main">Skip to content</a>
<header>
<a className="brand" href="#">sr<span>_</span>
</a>
<button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menu} onClick={()=>setMenu(!menu)}>Menu {menu ? "−" : "+"}</button>
<nav className={menu ? "is-open" : ""} onClick={()=>setMenu(false)} aria-label="Main navigation">
<a href="#">Home</a>
<a href="#about">About</a>
<a href="#work">Work</a>
<a href="#experience">Experience</a>
<a href="#skills">Skills</a>
<a href="#resume">Resume</a>
</nav>
<button className="theme-toggle" onClick={()=>setTheme(theme === "light" ? "dark" : "light")} aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>{theme === "light" ? "Dark" : "Light"}</button>
<a className="nav-contact" href="#contact">Contact <span>↗</span>
</a>
</header>
<main id="main">
<section className="hero">
<div className="eyebrow">
<span className="square"/> STEVEN RODRIGUEZ / DATA ANALYST</div>
<h1>I make data<br/>
<span className="serif">easier to use.</span>
</h1>
<div className="hero-bottom">
<div>
<p>I transform and analyze data, solve business problems,<br className="desktop"/> and automate workflows.</p>
<div className="actions">
<a className="button dark" href="#work">See my work <span>↗</span>
</a>
<a className="text-link" href="#contact">Contact me <span>↗</span>
</a>
</div>
</div>
<div className="query">
<div className="query-top">
<span>analyst.sql</span>
<span>SQL</span>
</div>
<code>
<b>SELECT</b> name, role<br/>
<b>FROM</b> portfolio<br/>
<b>WHERE</b> role = <em>'Data Analyst'</em>;<span className="cursor"/>
</code>
<div className="query-foot">↳ 1 analyst found <span>1 row returned</span>
</div>
</div>
</div>
<div className="hero-foot">
<span>BASED IN ORANGE COUNTY, CA</span>
<a href="#about">SCROLL TO DISCOVER ↓</a>
</div>
</section>
<section id="about" className="section about">
<div className="about-portrait"><div className="label">01 / ABOUT</div><div className="portrait-frame"><img src="./steven-rodriguez-neutral.png" alt="Steven Rodriguez" width="2316" height="3084" loading="lazy" decoding="async" /></div></div>
<div>
<h2>A little about me.</h2>
<p>{p.bio}</p>
<p className="muted">I like figuring out why the numbers look the way they do and making the answer useful to the people who need it.</p>
<blockquote className="about-quote"><p>“In the middle of difficulty lies opportunity.”</p><cite>— Albert Einstein</cite></blockquote>
<div className="education">
<span className="mono">EDUCATION</span>
<strong>{p.education.school}</strong>
<span>{p.education.dates} <i>·</i> {p.education.distinction}</span>
</div>
</div>
</section>
<section id="work" className="section work">
<div className="section-heading">
<div>
<div className="label">02 / SELECTED WORK</div>
<h2>Some of<br/>my <span className="serif">work.</span>
</h2>
</div>
<p>Reports, account updates, and data cleanup.<br/>
<span className="sample-note">Selected projects & professional work</span>
</p>
</div>{p.projects.map(project=>
<article className="project" key={project.id}>
<div className={'project-visual '+project.kind} aria-label={project.type+' summary diagram'} role="img">
<div className="visual-label">
<span>{project.type.toUpperCase()}</span>
<span>FIG. {project.id}</span>
</div>{project.kind==='cohort'?<div className="market-figure">
<span className="mono">COVERAGE ANALYSIS</span>{['Orange County','Riverside County','San Bernardino County'].map((c,i)=>
<div key={c}>
<span className="mono">0{i+1}</span>
<strong>{c}</strong>
<span>↗</span>
</div>)}<p>Client representation × population</p>
</div>:project.kind==='bars'?<div className="comparison">
<div>
<span>BEFORE</span>
<i style={{width:'100%'}}/>
<b>100</b>
</div>
<div>
<span>AFTER</span>
<i style={{width:'25.5%'}}/>
<b>30</b>
</div>
<p>Relative processing time · baseline = 100</p>
</div>:<div className="pipeline">
<div>
<span>01</span>
<strong>Source records</strong>
</div>
<b>↓</b>
<div>
<span>02</span>
<strong>20+ field mappings</strong>
</div>
<b>↓</b>
<div>
<span>03</span>
<strong>Salesforce CRM</strong>
</div>
</div>}<div className="visual-bottom">
<strong>{project.metric}</strong>
<span>{project.metricLabel}</span>
</div>
</div>
<div className="project-copy">
<span className="mono project-number">{project.id} / {project.type.toUpperCase()}</span>
<h3>{project.title}</h3>
<p>{project.description}</p>
<div className="tools">{project.tools}</div>
<details>
<summary>Read case study <span>↗</span>
</summary>
<div className="case-study">
<h4>The question</h4>
<p>{project.question}</p>
<h4>What I did</h4>
<p>{project.method}</p>
<h4>The result</h4>
<p>{project.result}</p>
<p className="sample-note">Summary based on my résumé. Client data and internal systems are not shared here.</p>
</div>
</details>
</div>
</article>)}</section>
<section id="experience" className="section experience">
<div className="experience-heading"><div className="label">03 / EXPERIENCE</div><h2>Where I’ve worked.</h2></div>
{p.experience.map(e=><article className="experience-row" key={e.company}>
<div className="experience-overview">
<div className="experience-meta"><span>{e.dates}</span><span>{e.location}</span></div>
{e.logo && <div className={e.company === "Target Corporation" ? "experience-logo target-logo" : "experience-logo"}><img src={e.logo} alt={e.logoAlt} width="553" height="169" loading="lazy" decoding="async" /></div>}
<h3>{e.company}</h3><strong className="role">{e.role}</strong>
<div className="tools">{e.tools}</div>
</div>
<div className="experience-details"><p>{e.description}</p><ul className="accomplishments">{e.accomplishments.map(a=><li key={a}>{a}</li>)}</ul></div>
</article>)}
</section>
<section id="skills" className="section skills">
<div className="section-heading">
<div>
<div className="label">04 / TOOLKIT</div>
<h2>Tools I use.</h2>
</div>
<code>
<b>SELECT</b> skill <b>FROM</b> toolkit;<br/>
<span className="muted">-- Always learning.</span>
</code>
</div>
<div className="skill-grid">{p.skills.map((s,i)=>
<div className="skill" key={s.name}>
<span className="mono">0{i+1}</span>
<h3>{s.name}</h3>
<ul>{s.items.map(x=>
<li key={x}>{x}</li>)}</ul>
</div>)}</div>
</section>
<section id="resume" className="section resume">
<div>
<div className="label">05 / RÉSUMÉ</div>
<h2>My résumé.</h2>
<p>My work history, education, and skills in one PDF.</p>
</div>
<div>{p.resumeAvailable?<div className="actions">
<a className="button dark" href="./resume.pdf" target="_blank" rel="noreferrer">View résumé ↗</a>
<a className="button" href="./resume.pdf" download>Download PDF ↓</a>
</div>:<>
<div className="actions">
<button className="button" disabled>View résumé ↗</button>
<button className="button" disabled>Download PDF ↓</button>
</div>
<p className="sample-note">Résumé coming soon.</p>
</>}</div>
</section>
<section id="contact" className="section contact">
<div className="label">06 / CONTACT</div>
<h2>Want to<br/><span className="serif">get in touch?</span>
</h2>
<div className="contact-bottom">
<p>Have a question about my work or a role in mind? Send me an email.</p>
<a className="button dark" href={p.email ? 'mailto:'+p.email : p.linkedin} target={p.email?undefined:'_blank'} rel="noreferrer">{p.email?'Email me':'Connect on LinkedIn'} <span>↗</span>
</a>
</div>
<div className="socials">
<a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>{p.github?<a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>:<span>GitHub · coming soon</span>}{!p.email&&<span>Email · coming soon</span>}</div>
</section>
</main>
<footer>© {new Date().getFullYear()} Steven Rodriguez <span className="mono">0 errors · 1 analyst found</span>
</footer>
</>}
createRoot(document.getElementById('root')!).render(<React.StrictMode>
<App/>
</React.StrictMode>);
