export const portfolio = {
  "name": "Steven Rodriguez",
  "role": "Data Analyst",
  "location": "Orange County, California",
  "email": "Stevenrodriguez618@gmail.com",
  "github": "",
  "linkedin": "https://www.linkedin.com/in/steven-rodriguez-data-analyst",
  "resumeAvailable": true,
  "bio": "I’m Steven, a Compliance & Data Analyst at RentReporters in Orange County. I work with customer records, build reports, and automate tasks that take too much time to do by hand. I studied Marketing and Information Systems at CSU Fullerton.",
  "education": {
    "school": "California State University, Fullerton",
    "dates": "B.A. Business Administration · 2025",
    "distinction": "Marketing & Information Systems · Cum Laude"
  },
  "experience": [
    {
      "company": "RentReporters",
      "location": "Newport Beach, CA",
      "role": "Compliance & Data Analyst",
      "dates": "April 2026 — Present",
      "description": "I check customer data and build tools that make account updates and credit reporting easier.",
      "accomplishments": [
        "Built a Salesforce workflow that uses AI to handle 200+ account-change requests a month, cutting processing time by 70%.",
        "Built a Jitterbit pipeline that moves 1,000+ records a week into Salesforce, with rules for matching and transforming 20+ fields.",
        "Resolved 100+ consumer disputes a month, meeting every deadline."
      ],
      "tools": "Salesforce · Jitterbit · ETL · Data validation",
      "logo": "",
      "logoAlt": ""
    },
    {
      "company": "OCIE Small Business Development Center",
      "location": "Fullerton, CA",
      "role": "Data Research Assistant",
      "dates": "June 2025 — April 2026",
      "description": "I cleaned client records, researched local markets, and built reports for small businesses and the SBDC team.",
      "accomplishments": [
        "Cleaned and analyzed 1,000+ CRM records, improving data accuracy by 25%.",
        "Combined research from 5+ databases, saving business clients $2,000+ per report.",
        "Built Tableau dashboards from 1,000+ marketing and survey data points. The findings helped improve outreach and engagement by 15%."
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
        "Used Target Greenfield data to track team performance and plan changes that improved reported KPIs by 30%.",
        "Analyzed 1,000 rows of inventory and sales data to prevent $100K in potential inventory loss."
      ],
      "tools": "Excel · PivotTables · Target Greenfield · KPI reporting",
      "logo": "",
      "logoAlt": ""
    }
  ],
  "skills": [
    {
      "name": "Querying",
      "items": [
        "SQL Server",
        "MySQL",
        "PostgreSQL"
      ],
      "verified": true
    },
    {
      "name": "Analysis",
      "items": [
        "Python · Pandas · NumPy",
        "Excel · Power Query · VBA",
        "Customer & market analysis"
      ],
      "verified": true
    },
    {
      "name": "Visualization",
      "items": [
        "Tableau",
        "Microsoft Power BI",
        "Matplotlib"
      ],
      "verified": true
    },
    {
      "name": "Data workflows",
      "items": [
        "Salesforce · Jitterbit",
        "ETL & data validation",
        "Fluent Spanish"
      ],
      "verified": true
    }
  ],
  "projects": [
    {
      "id": "01",
      "title": "Finding cities with fewer clients.",
      "type": "Client & market analysis",
      "tools": "Excel · Power Query · Census data",
      "description": "I compared 7,000+ client records with population data across Orange, Riverside, and San Bernardino counties.",
      "question": "Which cities have fewer clients than their population share would suggest?",
      "method": "I used PivotTables, XLOOKUP, and Power Query to build county reports. AI-assisted cleaning helped fix city names and duplicate entries before I compared the records with U.S. Census data.",
      "result": "Found 10+ cities where client numbers were low relative to population. Manual cleanup time fell by an estimated 80%+, and data accuracy improved by 30%+.",
      "metric": "7,000+",
      "metricLabel": "Client records analyzed · April 2026",
      "kind": "cohort"
    },
    {
      "id": "02",
      "title": "Faster customer account updates.",
      "type": "Workflow automation",
      "tools": "Salesforce · AI-assisted automation",
      "description": "I built a Salesforce workflow to handle account-change requests with less manual work, while keeping fraud and security checks in place.",
      "question": "How could we process account changes faster while keeping the necessary checks?",
      "method": "I built an AI-assisted Salesforce workflow that handles account-change requests and applies fraud and security checks.",
      "result": "Automated 200+ monthly requests and reduced processing time by 70%.",
      "metric": "70%",
      "metricLabel": "Reduction in processing time",
      "kind": "bars"
    },
    {
      "id": "03",
      "title": "Getting records into Salesforce.",
      "type": "Data processing",
      "tools": "Jitterbit · Salesforce · ETL",
      "description": "I built a Jitterbit pipeline to move customer records into Salesforce and improve credit score reporting accuracy.",
      "question": "How could we move customer records into Salesforce each week with fewer data errors?",
      "method": "I built and maintained a Jitterbit pipeline with rules to match and transform more than 20 fields before sending records to Salesforce.",
      "result": "Processed 1,000+ records weekly and improved customer credit score reporting accuracy.",
      "metric": "1,000+",
      "metricLabel": "Records processed each week",
      "kind": "scatter"
    }
  ]
};
