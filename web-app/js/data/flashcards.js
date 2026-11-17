// AWS Certified Cloud Practitioner Flashcards Data
export const flashcards = [
  {
    id: 1,
    category: "Cloud Concepts",
    front: "Trade capital expense (CapEx) for variable expense (OpEx)",
    back: "Benefit of Cloud Computing: No upfront hardware/data center investment; pay only for what you consume."
  },
  {
    id: 2,
    category: "Cloud Concepts",
    front: "Stop guessing capacity",
    back: "Elasticity: Scale up or down automatically based on real-time demand, avoiding under-utilization or downtime."
  },
  {
    id: 3,
    category: "Cloud Concepts",
    front: "Eliminate undifferentiated heavy lifting",
    back: "Moving away from racking, stacking, powering, cooling, and maintaining physical hardware so you can focus on business value."
  },
  {
    id: 4,
    category: "Compute",
    front: "Run code without provisioning or managing servers (max 15 min runtime)",
    back: "AWS Lambda (Serverless Compute: event-driven, pay per millisecond of execution)."
  },
  {
    id: 5,
    category: "Databases",
    front: "6 copies across 3 Availability Zones + 5x MySQL throughput",
    back: "Amazon Aurora (AWS cloud-native relational database engine)."
  },
  {
    id: 6,
    category: "Databases",
    front: "Single-digit millisecond latency NoSQL key-value & document database",
    back: "Amazon DynamoDB (Serverless, managed NoSQL database built for internet scale)."
  },
  {
    id: 7,
    category: "Databases",
    front: "Petabyte-scale data warehouse / OLAP / Columnar storage",
    back: "Amazon Redshift (Fast, SQL-based data warehousing for complex BI analytics)."
  },
  {
    id: 8,
    category: "Databases",
    front: "In-memory sub-millisecond database caching (Redis / Memcached)",
    back: "Amazon ElastiCache (Reduces database read load and boosts application performance)."
  },
  {
    id: 9,
    category: "Storage",
    front: "Object storage / 11 9's durability / static website hosting",
    back: "Amazon S3 (Simple Storage Service: REST API access, virtually unlimited scale)."
  },
  {
    id: 10,
    category: "Storage",
    front: "Virtual hard drive / Block storage for EC2 OS boot volume",
    back: "Amazon EBS (Elastic Block Store: persistent block storage tied to a single AZ)."
  },
  {
    id: 11,
    category: "Storage",
    front: "Shared Linux file system mounted concurrently across hundreds of EC2s",
    back: "Amazon EFS (Elastic File System: managed NFSv4, multi-AZ, scales automatically)."
  },
  {
    id: 12,
    category: "Storage",
    front: "Windows native shared storage / SMB protocol / Active Directory",
    back: "Amazon FSx for Windows File Server."
  },
  {
    id: 13,
    category: "Storage",
    front: "High-performance compute (HPC) file system / fast processing with S3",
    back: "Amazon FSx for Lustre."
  },
  {
    id: 14,
    category: "Compute",
    front: "Up to 90% discount on spare EC2 capacity / can be interrupted in 2 min",
    back: "EC2 Spot Instances (Best for fault-tolerant, batch, or non-critical workloads)."
  },
  {
    id: 15,
    category: "Compute",
    front: "1 or 3-year commitment for steady-state discount (up to 72%)",
    back: "EC2 Reserved Instances / Savings Plans."
  },
  {
    id: 16,
    category: "Compute",
    front: "Physical dedicated server for BYOL server-bound software licenses",
    back: "Amazon EC2 Dedicated Hosts (Offers full socket and core visibility)."
  },
  {
    id: 17,
    category: "Compute",
    front: "Deploy applications without managing underlying infrastructure (PaaS)",
    back: "AWS Elastic Beanstalk (Upload code; AWS handles provisioning, load balancing, and scaling)."
  },
  {
    id: 18,
    category: "Compute",
    front: "Serverless container compute engine (no EC2 instances to manage)",
    back: "AWS Fargate (Runs Docker containers on ECS or EKS serverlessly)."
  },
  {
    id: 19,
    category: "Security",
    front: "Automated vulnerability scanning of EC2, ECR container images, and Lambda",
    back: "Amazon Inspector (Continuously scans for CVE vulnerabilities and network exposure)."
  },
  {
    id: 20,
    category: "Security",
    front: "Intelligent threat detection using ML on CloudTrail, VPC Flow, and DNS logs",
    back: "Amazon GuardDuty (Detects compromised accounts, unauthorized behaviors, and crypto-mining)."
  },
  {
    id: 21,
    category: "Security",
    front: "Discover and classify sensitive PII (SSNs, credit cards) in Amazon S3",
    back: "Amazon Macie (Data security and data privacy service powered by ML)."
  },
  {
    id: 22,
    category: "Security",
    front: "Single pane of glass aggregating security alerts and compliance checks",
    back: "AWS Security Hub (Aggregates alerts from GuardDuty, Inspector, Macie, and partners)."
  },
  {
    id: 23,
    category: "Security",
    front: "Root-cause investigation and visual graph timeline of security findings",
    back: "Amazon Detective (Helps analysts uncover the origin and scope of potential threats)."
  },
  {
    id: 24,
    category: "Security",
    front: "Download AWS compliance reports (SOC 1/2/3, PCI) & sign HIPAA BAA",
    back: "AWS Artifact (On-demand portal for AWS compliance documentation and agreements)."
  },
  {
    id: 25,
    category: "Security",
    front: "Layer 7 firewall protecting against SQL Injection & Cross-Site Scripting (XSS)",
    back: "AWS WAF (Web Application Firewall: inspects HTTP/HTTPS requests)."
  },
  {
    id: 26,
    category: "Security",
    front: "Layer 3/4 DDoS protection included for FREE for all AWS customers",
    back: "AWS Shield Standard (Protects against SYN floods, UDP reflection, etc.)."
  },
  {
    id: 27,
    category: "Security",
    front: "Automatic database password and API key rotation",
    back: "AWS Secrets Manager (Enables secure rotation without redeploying code)."
  },
  {
    id: 28,
    category: "Security",
    front: "Dedicated single-tenant hardware security module (FIPS 140-2 Level 3)",
    back: "AWS CloudHSM (Customer has exclusive control over cryptographic keys)."
  },
  {
    id: 29,
    category: "Management & Governance",
    front: "Audit API calls and user activity: 'Who did what, when, and from where?'",
    back: "AWS CloudTrail (Account activity recording and audit logging)."
  },
  {
    id: 30,
    category: "Management & Governance",
    front: "Monitor operational performance metrics, CPU utilization, and set alarms",
    back: "Amazon CloudWatch (Metrics, logs, alarms, dashboards for system health)."
  },
  {
    id: 31,
    category: "Management & Governance",
    front: "Track resource configuration drift and audit compliance against rules",
    back: "AWS Config (Evaluates whether resources adhere to specified compliance configs)."
  },
  {
    id: 32,
    category: "Management & Governance",
    front: "Automated best practice checks across Cost, Security, Fault Tolerance, etc.",
    back: "AWS Trusted Advisor (Real-time guidance to optimize your AWS environment)."
  },
  {
    id: 33,
    category: "Management & Governance",
    front: "Infrastructure as Code (IaC) using declarative JSON or YAML templates",
    back: "AWS CloudFormation (Model and provision all AWS resources consistently)."
  },
  {
    id: 34,
    category: "Management & Governance",
    front: "Central governance, consolidated billing, and Service Control Policies (SCPs)",
    back: "AWS Organizations (Manage and govern multiple AWS accounts from a central root)."
  },
  {
    id: 35,
    category: "Billing & Cost Management",
    front: "Estimate infrastructure costs BEFORE deploying to AWS",
    back: "AWS Pricing Calculator (Web-based planning and cost modeling tool)."
  },
  {
    id: 36,
    category: "Billing & Cost Management",
    front: "Analyze historical spending patterns and forecast up to 12 months ahead",
    back: "AWS Cost Explorer (Visualize, understand, and forecast AWS spending)."
  },
  {
    id: 37,
    category: "Billing & Cost Management",
    front: "Custom alerts when spending or usage exceeds a predefined threshold",
    back: "AWS Budgets (Send email/SNS notifications for actual or forecasted overruns)."
  },
  {
    id: 38,
    category: "Billing & Cost Management",
    front: "Most comprehensive, granular billing export to S3 (hourly/daily CSV)",
    back: "AWS Cost and Usage Report (CUR)."
  },
  {
    id: 39,
    category: "Support Plans",
    front: "Designated Technical Account Manager (TAM) + 15 min response time SLA",
    back: "Enterprise Support Plan (For mission-critical workloads)."
  },
  {
    id: 40,
    category: "Support Plans",
    front: "Pool of TAMs + 30 min response time for business-critical down",
    back: "Enterprise On-Ramp Support Plan."
  },
  {
    id: 41,
    category: "Support Plans",
    front: "24/7 phone/chat/email + 1 hr SLA for production system down",
    back: "Business Support Plan (Minimum plan for 24/7 phone support and full Trusted Advisor)."
  },
  {
    id: 42,
    category: "Application Integration",
    front: "Decouple microservices using a pull-based asynchronous message queue",
    back: "Amazon SQS (Simple Queue Service: prevents data loss between distributed tiers)."
  },
  {
    id: 43,
    category: "Application Integration",
    front: "Pub/Sub messaging with push delivery to SMS, email, Lambda, and SQS",
    back: "Amazon SNS (Simple Notification Service: one-to-many fan-out messaging)."
  },
  {
    id: 44,
    category: "Application Integration",
    front: "Visual serverless workflow orchestration using state machines",
    back: "AWS Step Functions (Coordinate multiple AWS services and Lambda functions)."
  },
  {
    id: 45,
    category: "Networking",
    front: "Dedicated private physical fiber connection to AWS (bypassing public internet)",
    back: "AWS Direct Connect (Delivers consistent network performance and lower latency)."
  },
  {
    id: 46,
    category: "Networking",
    front: "Global Content Delivery Network (CDN) caching at Edge Locations",
    back: "Amazon CloudFront (Speeds up web content delivery globally)."
  },
  {
    id: 47,
    category: "Networking",
    front: "Highly available cloud Domain Name System (DNS) and domain registrar",
    back: "Amazon Route 53 (Translates domain names to IP addresses with health routing)."
  },
  {
    id: 48,
    category: "Networking",
    front: "Allow private subnet instances outbound internet access for OS patches",
    back: "NAT Gateway (Network Address Translation gateway inside a public subnet)."
  },
  {
    id: 49,
    category: "Networking & Security",
    front: "Instance-level stateful firewall supporting ALLOW rules only",
    back: "Security Group (Return traffic is automatically permitted regardless of rules)."
  },
  {
    id: 50,
    category: "Networking & Security",
    front: "Subnet-level stateless firewall supporting ALLOW and DENY rules in order",
    back: "Network ACL (NACL: evaluates rules in strict numerical sequence)."
  },
  {
    id: 51,
    category: "Hybrid Cloud",
    front: "Run native AWS compute and storage hardware inside on-premises data centers",
    back: "AWS Outposts (Truly consistent hybrid cloud infrastructure)."
  },
  {
    id: 52,
    category: "Migration",
    front: "Migrate 80 TB of data physically without internet saturation",
    back: "AWS Snowball Edge Storage Optimized (Rugged physical transport device)."
  }
];
