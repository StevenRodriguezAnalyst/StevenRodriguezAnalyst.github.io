export const portfolio = {
  "name": "Steven Rodriguez",
  "role": "Data Analyst / Business Analyst",
  "location": "Orange County, California",
  "email": "Stevenrodriguez618@gmail.com",
  "github": "",
  "linkedin": "https://www.linkedin.com/in/steven-rodriguez-data-analyst",
  "resumeAvailable": true,
  "bio": "I’m Steven, a Compliance & Data Analyst at RentReporters, a fintech company helping renters build credit. I use data analysis, business intelligence, CRM systems, and workflow automation to improve operations while maintaining strong compliance controls. I graduated Cum Laude from CSU Fullerton with a B.A. in Business Administration and majors in Marketing and Information Systems.",
  "education": {
    "school": "California State University, Fullerton",
    "dates": "B.A. Business Administration · January 2026",
    "distinction": "Marketing & Information Systems · Cum Laude"
  },
  "experience": [
    {
      "company": "RentReporters",
      "location": "Newport Beach, CA",
      "role": "Compliance & Data Analyst",
      "dates": "April 2026 — Present",
      "description": "I build data and automation workflows across operations, compliance, fraud prevention, and credit reporting while auditing customer account data for accuracy and FCRA compliance.",
      "accomplishments": [
        "Built and deployed 10+ n8n automations that handle 500+ monthly tasks and reduce manual processing time by 60%.",
        "Built an AI-driven Salesforce workflow that automates 200+ account-change requests a month, cutting processing time by 70% while enforcing fraud and security controls.",
        "Designed and maintained a Jitterbit ETL pipeline that processes 1,000+ records a week using 20+ field mappings and transformation rules.",
        "Resolved 100+ consumer disputes a month with a 100% on-time resolution rate."
      ],
      "tools": "n8n · APIs · Salesforce · Jitterbit · ETL · FCRA",
      "logo": "./rentreporters-data-team-small.jpg",
      "logoAlt": "RentReporters Data Team"
    },
    {
      "company": "OCIE Small Business Development Center",
      "location": "Fullerton, CA",
      "role": "Data Research Assistant",
      "dates": "June 2025 — April 2026",
      "description": "I cleaned client records, researched local markets, and built reports for small businesses and the SBDC team.",
      "accomplishments": [
        "Conducted market research across 5+ databases, identifying sales opportunities that saved clients $2,000+ per report.",
        "Built Tableau dashboards from 1,000+ marketing and survey data points, identifying trends that improved outreach and engagement by 15%.",
        "Entered, cleaned, and analyzed 1,000+ CRM records, improving data accuracy by 25%.",
        "Transformed, standardized, and validated 1,000+ rows of Excel data to support business decisions."
      ],
      "tools": "Excel · Tableau · CRM · Market research",
      "logo": "./sbdc-intel.png",
      "logoAlt": "SBDC Intel — Market Research and Business Intelligence"
    },
    {
      "company": "Target Corporation",
      "location": "Fullerton, CA",
      "role": "Assets Protection Specialist",
      "dates": "August 2023 — May 2025",
      "description": "I used sales, staffing, and inventory data to plan schedules, track performance, and reduce losses.",
      "accomplishments": [
        "Analyzed sales and foot traffic with Excel PivotTables, reducing payroll expenses by 6% while managing two employees.",
        "Used data warehouse reports to track team performance and plan changes that improved reported KPIs by 30%.",
        "Analyzed 1,000 rows of inventory and sales data to prevent $100K in potential inventory loss."
      ],
      "tools": "Excel · PivotTables · Data warehouse · KPI",
      "logo": "./target-logo.jpg",
      "logoAlt": "Target bullseye"
    }
  ],
  "skills": [
    {
      "name": "Data analysis",
      "items": [
        "SQL",
        "Python",
        "Excel",
        "Google Sheets"
      ],
      "verified": true
    },
    {
      "name": "Business intelligence",
      "items": [
        "Tableau",
        "Power BI"
      ],
      "verified": true
    },
    {
      "name": "CRM",
      "items": [
        "Salesforce",
        "Monday.com"
      ],
      "verified": true
    },
    {
      "name": "Automation",
      "items": [
        "n8n",
        "APIs",
        "MCP"
      ],
      "verified": true
    },
    {
      "name": "Artificial intelligence",
      "items": [
        "Claude Code",
        "Codex"
      ],
      "verified": true
    },
    {
      "name": "Languages",
      "items": [
        "Fluent Spanish"
      ],
      "verified": true
    }
  ],
  "projects": [
    {
      "id": "01",
      "title": "Geographic client & market analysis.",
      "type": "Client & market analysis",
      "tools": "Excel · Power Query · Census data",
      "description": "Analyzed 7,000+ CRM records against Census population data to compare client distribution across Orange, Riverside, and San Bernardino counties.",
      "question": "Which cities have fewer clients than their population share would suggest?",
      "method": "I used PivotTables, XLOOKUP, and Power Query to build county reports. AI-assisted cleaning helped fix city names and duplicate entries before I compared the records with U.S. Census data.",
      "result": "Found 10+ cities where client numbers were low relative to population. Manual cleanup time fell by an estimated 80%+, and data accuracy improved by 30%+.",
      "metric": "7,000+",
      "metricLabel": "Client records analyzed · April 2026",
      "kind": "cohort",
      "figureAlt": "Coverage spans Orange, Riverside, and San Bernardino counties.",
      "figureSteps": []
    },
    {
      "id": "02",
      "title": "Cross-functional workflow automation.",
      "type": "Operations automation",
      "tools": "n8n · APIs · MCP",
      "description": "Built and deployed n8n automations across operations, compliance, and fraud prevention by connecting APIs and business systems.",
      "question": "How could recurring operational work be automated without weakening compliance and fraud controls?",
      "method": "I built 10+ n8n workflows that connected APIs and business systems across operations, compliance, and fraud prevention.",
      "result": "The workflows automate 500+ tasks each month and reduce manual processing time by 60%.",
      "metric": "500+",
      "metricLabel": "Monthly tasks automated",
      "kind": "workflow",
      "figureAlt": "Business systems feed 10+ n8n workflows that automate 500+ monthly tasks.",
      "figureSteps": [
        "Business systems",
        "10+ n8n workflows",
        "500+ monthly tasks"
      ]
    },
    {
      "id": "03",
      "title": "Salesforce account-change automation.",
      "type": "Workflow automation",
      "tools": "Salesforce · AI-driven automation",
      "description": "Developed an AI-driven Salesforce workflow to automate account-change requests while enforcing fraud and security controls.",
      "question": "How could we process account changes faster while keeping the necessary checks?",
      "method": "I built an AI-driven Salesforce workflow that handles account-change requests and applies fraud and security checks.",
      "result": "Automated 200+ monthly requests and reduced processing time by 70%.",
      "metric": "70%",
      "metricLabel": "Reduction in processing time",
      "kind": "bars",
      "figureAlt": "Relative processing time fell from a baseline of 100 to 30.",
      "figureSteps": []
    },
    {
      "id": "04",
      "title": "Salesforce ETL & data validation.",
      "type": "Data processing",
      "tools": "Jitterbit · Salesforce · ETL",
      "description": "Designed a Jitterbit ETL pipeline with field mappings and transformation logic to improve Salesforce data accuracy and customer credit score reporting.",
      "question": "How could we move customer records into Salesforce every day with fewer data errors?",
      "method": "I built and maintained a Jitterbit pipeline that runs daily, with rules to match and transform more than 20 fields before sending records to Salesforce.",
      "result": "The daily pipeline processes 1,000+ records per week and improves customer credit score reporting accuracy.",
      "metric": "1,000+",
      "metricLabel": "Records per week · Runs daily",
      "kind": "pipeline",
      "figureAlt": "Source records pass through 20+ field mappings before reaching Salesforce CRM.",
      "figureSteps": [
        "Source records",
        "20+ field mappings",
        "Salesforce CRM"
      ]
    }
  ]
};
