export const portfolio = {
  "name": "Steven Rodriguez",
  "role": "Data Analyst",
  "location": "Orange County, California",
  "email": "Stevenrodriguez618@gmail.com",
  "github": "",
  "linkedin": "https://www.linkedin.com/in/steven-rodriguez-data-analyst",
  "resumeAvailable": true,
  "bio": "I’m Steven, a Compliance & Data Analyst at RentReporters, based in Orange County. With a background in Marketing and Information Systems from CSU Fullerton, I bring a business perspective to SQL, Python, and visualization—connecting careful analysis to practical decisions.",
  "education": {
    "school": "California State University, Fullerton",
    "dates": "B.A. Business Administration",
    "distinction": "Marketing & Information Systems · Cum Laude"
  },
  "experience": [
    {
      "company": "RentReporters",
      "location": "Newport Beach, CA",
      "role": "Compliance & Data Analyst",
      "dates": "April 2026 — Present",
      "description": "Building reliable data workflows for customer account operations and credit reporting.",
      "accomplishments": [
        "Automated 200+ monthly account-change requests through an AI-driven Salesforce workflow, reducing processing time by 70%.",
        "Built a Jitterbit ETL pipeline with 20+ field mappings, processing 1,000+ records weekly.",
        "Resolved 100+ consumer disputes monthly with a 100% on-time resolution rate."
      ],
      "tools": "Salesforce · Jitterbit · ETL · Data validation"
    },
    {
      "company": "OCIE Small Business Development Center",
      "location": "Fullerton, CA",
      "role": "Data Research Assistant",
      "dates": "June 2025 — April 2026",
      "description": "Turning CRM, market, and survey data into useful insights for small businesses and leadership.",
      "accomplishments": [
        "Cleaned and analyzed 1,000+ CRM records, improving data accuracy by 25%.",
        "Combined research from 5+ databases, saving business clients $2,000+ per report.",
        "Developed Tableau dashboards from 1,000+ marketing and survey data points, identifying trends that improved outreach and engagement by 15%."
      ],
      "tools": "Excel · Tableau · CRM · Market research"
    },
    {
      "company": "Target Corporation",
      "location": "Fullerton, CA",
      "role": "Assets Protection Specialist",
      "dates": "August 2023 — May 2025",
      "description": "Using operational data to improve team performance and protect inventory.",
      "accomplishments": [
        "Analyzed sales and foot traffic with Excel PivotTables, reducing payroll expenses by 6% while managing two employees.",
        "Created KPI reporting and action plans using Target Greenfield data, improving KPI metrics by 30%.",
        "Analyzed 1,000 rows of inventory and sales data to prevent $100K in potential inventory loss."
      ],
      "tools": "Excel · PivotTables · Target Greenfield · KPI reporting"
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
      "title": "Where the next opportunity lives.",
      "type": "Client & market analysis",
      "tools": "Excel · Power Query · Census data",
      "description": "Analyzed 7,000+ CRM client records across three Southern California counties to find gaps in geographic market coverage.",
      "question": "Which cities have fewer clients than their population share would suggest?",
      "method": "Built county reports with PivotTables, XLOOKUP, and Power Query. Standardized city names and duplicate entries with AI-assisted cleaning, then compared client distribution against U.S. Census population data.",
      "result": "Identified 10+ underserved markets for targeted outreach. Estimated manual cleanup time fell by 80%+, while data accuracy improved by 30%+.",
      "metric": "7,000+",
      "metricLabel": "Client records analyzed · April 2026",
      "kind": "cohort"
    },
    {
      "id": "02",
      "title": "Less processing. More progress.",
      "type": "Workflow automation",
      "tools": "Salesforce · AI-assisted automation",
      "description": "Built an automated account-change workflow to reduce manual processing while retaining fraud and security controls.",
      "question": "How can recurring customer requests move faster without losing the checks that protect account integrity?",
      "method": "Created an AI-driven Salesforce workflow for customer account-change requests, with fraud and security controls incorporated into processing.",
      "result": "Automated 200+ monthly requests and reduced processing time by 70%.",
      "metric": "70%",
      "metricLabel": "Reduction in processing time",
      "kind": "bars"
    },
    {
      "id": "03",
      "title": "Reliable data, from end to end.",
      "type": "Data engineering & quality",
      "tools": "Jitterbit · Salesforce · ETL",
      "description": "Designed an end-to-end ETL pipeline to improve the accuracy of customer credit score reporting.",
      "question": "How can customer records move into Salesforce consistently and accurately at weekly volume?",
      "method": "Designed and maintained a Jitterbit pipeline with more than 20 field mappings and transformation logic for Salesforce CRM.",
      "result": "Processed 1,000+ records weekly and improved customer credit score reporting accuracy.",
      "metric": "1,000+",
      "metricLabel": "Records processed each week",
      "kind": "scatter"
    }
  ]
};
