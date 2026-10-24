import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

const steps = [
  ['Check the file.', 'The workflow watches a Google Drive folder and starts about a minute after a file arrives. It checks the TransUnion filename pattern and alerts Slack if the name does not match. Each run handles one file. If multiple files arrive together, it stops and reports the issue.'],
  ['Read the fields.', 'It reads the credit score file and selects the information needed to update the matching Salesforce records.'],
  ['Clean each row.', 'It standardizes record IDs and credit score data, flags invalid values, and sets aside rows with missing IDs. Blank values are left out so they cannot overwrite existing Salesforce data.'],
  ['Remove duplicates.', 'If the same record ID appears more than once, the workflow keeps the last row. Uppercase and lowercase letters are treated as the same, so differences in capitalization do not create duplicates.'],
  ['Load into Salesforce.', 'Records are upserted by external ID in batches of 200. Each row gets its own result, so a rejected row does not block the rest of its batch. A batch that fails to go through is retried up to three times, 30 seconds apart.'],
  ['Report the outcome.', 'The workflow reads each Salesforce response and counts updates, creates, and rejections. Rejected rows go into an error file in Drive with their line number, ID, and reason. Rows skipped before loading go into a separate file. Slack receives the file name and totals, plus a note if the file’s date is not the previous business day. Clean runs create no error file.'],
];

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
          <div className="eyebrow"><span className="square"/> DATA PROCESSING / CASE STUDY</div>
          <h1>Daily credit score<br/><span className="muted">automation.</span></h1>
          <p className="lead">An automated daily credit score load that takes TransUnion files from Google Drive to Salesforce, with data validation and clear reporting at every step.</p>
        </div>
        <div className="project-page-meta">
          <span>TOOLS</span>
          <strong>n8n · Salesforce REST API · Google Drive · Slack · JSON</strong>
          <span>FREQUENCY</span>
          <strong>Every business day · Triggered by a file upload</strong>
        </div>
        <figure className="project-demo" aria-labelledby="demo-heading">
          <div className="project-demo-heading">
            <h2 id="demo-heading">Watch the workflow.</h2>
            <span className="mono">25-SECOND WALKTHROUGH</span>
          </div>
          <video
            controls
            playsInline
            preload="metadata"
            poster="./credit-score-video-poster.jpg"
            width="1920"
            height="1080"
            aria-label="Daily credit score automation walkthrough"
            aria-describedby="demo-caption"
          >
            <source src="./daily-credit-score-upload.mp4" type="video/mp4"/>
            Your browser does not support embedded video. <a href="./daily-credit-score-upload.mp4">Download the walkthrough</a>.
          </video>
          <figcaption id="demo-caption">Follow the daily credit score file from Google Drive through data validation, Salesforce updates, and Slack reporting.</figcaption>
        </figure>
      </section>

      <section className="project-detail-section" aria-labelledby="problem-heading">
        <div className="label">01 / THE QUESTION</div>
        <div className="project-detail-copy">
          <h2 id="problem-heading">A daily load without the manual work.</h2>
          <p>Every business day, a TransUnion credit score file needs to be loaded into Salesforce. The existing process required someone to manually run the load and open a results file to check for failures.</p>
          <p>I built and deployed an n8n workflow that starts when a file lands in Google Drive, cleans the data, updates the right Salesforce records, and posts the outcome to Slack.</p>
          <ol className="etl-flow" aria-label="Daily credit score workflow">
            <li><span className="mono">01 / INPUT</span><strong>TransUnion file</strong><p>Uploaded to Google Drive</p></li>
            <li><span className="mono">02 / PROCESS</span><strong>n8n validation</strong><p>Clean, map, and deduplicate</p></li>
            <li><span className="mono">03 / OUTPUT</span><strong>Salesforce + reports</strong><p>Update records and notify Slack</p></li>
          </ol>
        </div>
      </section>

      <section className="project-detail-section" aria-labelledby="workflow-heading">
        <div className="label">02 / THE WORKFLOW</div>
        <div className="project-detail-copy">
          <h2 id="workflow-heading">From file upload to confirmed results.</h2>
          <p>The workflow handles the full load, from checking the incoming file to reporting the result of each record.</p>
          <ol className="etl-steps">
            {steps.map(([title, description]) => <li key={title}><h3>{title}</h3><p>{description}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="project-detail-section" aria-labelledby="validation-heading">
        <div className="label">03 / DATA VALIDATION</div>
        <div className="project-detail-copy">
          <h2 id="validation-heading">Check the data before sending it.</h2>
          <p>If a file has an unexpected structure or is missing the score column, the workflow stops before sending anything to Salesforce and explains why. A broken file cannot be counted as a successful load.</p>
          <p>I tested the mappings with deliberate edge cases, compared real data against Salesforce without writing to it, and verified a small batch before running a full file. Matching the existing field mappings and keeping blank values out made the results directly comparable with the previous loader.</p>
        </div>
      </section>

      <section className="project-detail-section" aria-labelledby="results-heading">
        <div className="label">04 / THE RESULT</div>
        <div className="project-detail-copy">
          <h2 id="results-heading">Daily updates. Visible outcomes.</h2>
          <p>The deployed workflow processes 1,500 records weekly, replacing a manual credit score load with automated Salesforce updates, error reporting, and Slack alerts.</p>
          <dl className="etl-results">
            <div><dt>Records processed weekly</dt><dd>1,500</dd></div>
            <div><dt>Load schedule</dt><dd>Daily</dd></div>
          </dl>
          <p>The load now runs automatically after a file upload, and the team can see the outcome in Slack without opening a results file. Rejected and skipped rows stay available in Drive for review.</p>
          <p className="sample-note">Summary based on my résumé. Client data and internal systems are not shared here.</p>
        </div>
      </section>

      <div className="project-page-return">
        <p>Return to the rest of my selected work.</p>
        <a className="button dark" href="./index.html#work">Back to work</a>
      </div>
    </main>
    <footer>© {new Date().getFullYear()} Steven Rodriguez <span className="mono">Data processing · n8n automation</span></footer>
  </div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><ProjectPage/></React.StrictMode>);
