export const profile = {
  name: 'Dipesh Kumar Singh', shortName: 'Dipesh', role: 'Senior Member of Technical Staff at Oracle',
  intro: 'I build resilient cloud platforms, distributed systems, and intelligent developer experiences.',
  email: 'dipesh99kumar@gmail.com', phone: '+91 73817 65580', location: 'Bengaluru, India',
  linkedin: 'https://www.linkedin.com/in/dipesh-kumar-singh2301', github: 'https://github.com/dipesh23-apt',
  summary: 'Senior Software Engineer with 4+ years of experience building scalable microservices, distributed systems, and cloud-native platforms. I enjoy turning complex requirements into reliable, high-impact systems.'
};

export const stats = [
  ['4+', 'Years of Experience'], ['10+', 'Projects'], ['3+', 'Years AI Engineering'], ['400+', 'DSA Problems']
];

export const projects = [
  { title: 'MatchRank AI', eyebrow: 'AI job intelligence', description: 'An automated job discovery and resume-ranking workflow that matches candidates to opportunities and generates tailored, actionable suggestions.', features: ['24-hour job discovery with Playwright', 'AI resume-to-JD scoring and recommendations', 'Automated workflows with n8n'], stack: ['Python', 'Playwright', 'n8n', 'AI'], icon: '✦', link: '' },
  { title: 'GPS Asset Tracking', eyebrow: 'Location intelligence', description: 'A responsive asset tracking portal that turns live location data into a clear operational view for teams monitoring assets in the field.', features: ['Live Mapbox GLJS mapping', 'Dashboard, timeline and asset views', 'Dynamic filtering for quick exploration'], stack: ['Django', 'React', 'Mapbox', 'Tailwind'], icon: '⌖', link: '' },
  { title: 'Saynity Sense', eyebrow: 'AI communication workspace', description: 'A focused writing workspace that helps users generate workplace-ready responses, choose the right situation and tone, and deliver messages across Slack, Gmail, and Teams.', features: ['Situation-aware response generation', 'Tone controls for professional communication', 'Slack, Gmail and Teams message formats'], stack: ['React', 'AI', 'Dashboard'], icon: '✦', link: 'https://saynity-sense-36wcn1uwr-dipesh-2301-kumar.vercel.app/dashboard', image: 'assets/projects/saynity-dashboard.png' },
  { title: 'Ghoomle', eyebrow: 'Self-drive vehicle rental', description: 'A polished self-drive car rental experience for discovering premium vehicles, completing a paperless KYC flow, and booking flexible journeys with confidence.', features: ['Premium self-drive vehicle discovery', 'Paperless KYC and booking journey', 'Clear service and fleet information'], stack: ['React', 'Next.js', 'Vercel'], icon: '◈', link: 'https://ghoomle.vercel.app/', image: 'assets/projects/ghoomle-homepage.png' },
  { title: 'Aegis', eyebrow: 'Kubernetes-native agent operations', description: 'A Kubernetes-native Runtime Operating System for autonomous AI agents, built to operate agents safely, reliably, and at scale rather than simply build them.', features: ['Dedicated Control Plane for governance', 'Independent agent execution in a Data Plane', 'Continuous health, trust, budget, and policy evaluation'], stack: ['Kubernetes', 'Golang', 'AI Agents', 'Control Plane'], icon: '◈', link: '' }
];

export const skills = [
  { name: 'Programming Languages', items: ['Python', 'Golang'] },
  { name: 'Backend Development', items: ['Golang', 'Django', 'Microservices'] },
  { name: 'Architecture & APIs', items: ['REST APIs', 'Distributed Systems', 'Kafka', 'Concurrency'] },
  { name: 'Cloud & DevOps Tools', items: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'GCP', 'OCI', 'GitHub Actions', 'Grafana'] },
  { name: 'AI / GenAI', items: ['LLM Applications', 'Prompt Engineering', 'RAG', 'Agentic Workflows', 'LangChain', 'LangGraph'] },
  { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'Redis', 'NoSQL'] },
  { name: 'Frontend Frameworks', items: ['React', 'Next.js'] },
  { name: 'Familiar With', items: ['Java', 'Elasticsearch', 'Object Oriented Programming'] }
];

export const experience = [
  { company: 'Oracle', domain: 'oracle.com', role: 'Senior Member of Technical Staff', period: 'Dec 2025 - Apr 2026', location: 'Bengaluru, Karnataka', tags: ['Golang', 'Python', 'Kubernetes', 'Terraform', 'AI'], bullets: ['Rolled out canary monitoring for streaming responses and scaling-policy updates in Managed Compute Clusters, catching performance issues early on OCI Data Science.', 'Generated and validated Python, Go, and Java SDKs from API specifications, covering resource-lifecycle operations for compute targets and model deployment.', 'Enhanced Terraform configurations and unit tests to ensure smooth, reliable infrastructure provisioning.', 'Working on an MCP server exposing compute-target and model-deployment operations to AI agents via standardized tool-calling interfaces.', 'Developed an agentic AI-driven vulnerability-remediation workflow that analyzed container security findings, identified upgrade paths, and generated fixes using AI-assisted automation.'] },
  { company: 'Razorpay', domain: 'razorpay.com', role: 'Senior Software Development Engineer', period: 'Jul 2024 - Oct 2025', location: 'Bengaluru, Karnataka', tags: ['Golang', 'Python', 'Kubernetes', 'Grafana'], bullets: ['Transitioned X onboarding to a modular framework using Onboarding-SDK, creating reusable components that improved flexibility and delivery speed.', 'Integrated Salesforce with RazorpayX, automating Karza data ingestion and improving lead-qualification speed by 40% across 10,000+ merchants.', 'Migrated merchant setup forms from RSPL to RZPX with on-demand form generation, ensuring RBI compliance and reducing manual errors by 45%.', 'Automated key data tasks with Python scripts, fixing 6,000+ merchant forms, generating 22,000+ MCC codes with AI, and mapping bank regions - cutting manual effort by 70%.', 'Led the PG cross-sell initiative for RazorpayX, driving a 28% increase in monthly transacting users and a 5% uplift in transaction volume.', 'Implemented Unified Login/Signup by migrating authentication to a centralized service, reducing login-related issues by 15%.', 'Built an end-to-end operational runbook and mentored engineers and the PSE team, reducing support load by 35% and speeding onboarding resolution by 25%.'] },
  { company: 'Inkpaper AI', domain: 'inkpaper.ai', logo: 'assets/companies/inkpaper-ai.png', role: 'Senior Software Engineer', period: 'Sep 2023 - Jun 2024', location: 'Gurugram, Haryana', tags: ['Golang', 'Django', 'GenAI', 'GCP'], bullets: ['Directed implementation of a custom AI engine using Llama 2 and Anthropic expertise, enhancing document-chat capabilities.', 'Engineered RAG search functionality using LangChain and Pinecone Vector DB for accurate vector search.', 'Led development of a bulk-upload capability in patent-handling software for efficient Excel-based processing.', 'Deployed a Django project on GCP using Compute Engine, Load Balancer, and Firewall rules.'] },
  { company: 'AptusDatalabs', domain: 'aptusdatalabs.com', logo: 'assets/companies/aptus-datalabs.png', role: 'Software Engineer', period: 'Jun 2021 - Aug 2023', location: 'Bengaluru, Karnataka', tags: ['Golang', 'Django', 'Docker', 'Kubernetes'], bullets: ['Served as a backend developer across diverse projects, implementing microservices and impactful features for 30% improved sales-data accuracy and forecasting.', 'Improved system performance by 35% using Kafka for expense-category classification and event-driven architecture.', 'Engineered RESTful APIs and Kafka message handling for data transfer across applications, improving system performance by 30%.', 'Collaborated with other teams and contributed to React and Next.js dashboards, components, and pages.'] }
];

export const certifications = [
  { title: 'Google Go Specialization', issuer: 'Google', image: 'assets/certificates/google-go-specialization.jpg' },
  { title: 'CKAD', issuer: 'KodeKloud', image: 'assets/certificates/ckad.jpg' },
  { title: 'CRIO Externship', issuer: 'Crio.Do', image: 'assets/certificates/crio-externship.jpg' }
];
