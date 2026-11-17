// AWS Certified Cloud Practitioner Comparison Cheat Sheets Data
export const cheatSheets = [
  {
    id: "storage",
    title: "Storage Comparison Matrix",
    description: "Compare S3, EBS, EFS, and FSx by architecture, protocol, scope, and key workload triggers.",
    headers: ["Service", "Storage Type", "Protocol", "Scope", "Best Workload / Triggers"],
    rows: [
      [
        "Amazon S3",
        "Object Storage",
        "REST API (HTTP/HTTPS)",
        "Regional (Global namespace)",
        "Static website hosting, backups, data lakes, images/videos, 11 9's durability."
      ],
      [
        "Amazon EBS",
        "Block Storage",
        "Block-level virtual drive",
        "Single Availability Zone",
        "EC2 OS boot volume, transactional relational databases, low latency IOPS."
      ],
      [
        "Amazon EFS",
        "File Storage (NFS)",
        "NFSv4 (Linux only)",
        "Multi-AZ (Regional)",
        "Shared Linux file storage mounted concurrently on hundreds of EC2 instances."
      ],
      [
        "Amazon FSx for Windows",
        "File Storage (SMB)",
        "SMB protocol",
        "Single or Multi-AZ",
        "Native Windows file share, Active Directory integration, enterprise Windows apps."
      ],
      [
        "Amazon FSx for Lustre",
        "HPC File Storage",
        "POSIX-compliant",
        "Single or Multi-AZ",
        "High-performance compute (HPC), machine learning, fast batch processing with S3."
      ],
      [
        "AWS Snowball Edge",
        "Physical Device",
        "Physical appliance",
        "Offline data transfer",
        "Migrating 80 TB of on-premises data without saturating network bandwidth."
      ]
    ]
  },
  {
    id: "databases",
    title: "Database Comparison Matrix",
    description: "Identify the exact AWS database from scenario requirements and keywords.",
    headers: ["Service", "Database Type", "Engine / Format", "Latency", "Key Exam Triggers"],
    rows: [
      [
        "Amazon RDS",
        "Relational (SQL / OLTP)",
        "MySQL, Postgres, Oracle, SQL Server, MariaDB",
        "Milliseconds",
        "Traditional relational DB, automated backups, Multi-AZ failover, Read Replicas."
      ],
      [
        "Amazon Aurora",
        "Cloud-Native Relational",
        "MySQL & Postgres compatible",
        "Milliseconds",
        "5x MySQL throughput, 6 copies of data across 3 AZs, enterprise performance."
      ],
      [
        "Amazon DynamoDB",
        "NoSQL (Key-Value / Document)",
        "Serverless JSON documents",
        "Single-digit ms",
        "Serverless NoSQL, internet scale, mobile/gaming backends, fast key-value lookups."
      ],
      [
        "Amazon Redshift",
        "Data Warehouse (OLAP)",
        "Columnar SQL storage",
        "Seconds to minutes",
        "Complex analytics, petabyte-scale data warehouse, business intelligence (BI)."
      ],
      [
        "Amazon ElastiCache",
        "In-Memory Cache",
        "Redis or Memcached",
        "Sub-millisecond (μs)",
        "In-memory caching layer in front of databases to reduce read latency."
      ],
      [
        "Amazon Neptune",
        "Graph Database",
        "TinkerPop Gremlin, SPARQL",
        "Milliseconds",
        "Highly connected data: social graphs, fraud detection, recommendation engines."
      ],
      [
        "Amazon DocumentDB",
        "Document Database",
        "MongoDB-compatible",
        "Milliseconds",
        "JSON document storage with native MongoDB API compatibility."
      ]
    ]
  },
  {
    id: "security",
    title: "Security & Threat Detection Matrix",
    description: "Disambiguate AWS security tools that sound similar.",
    headers: ["Service", "Category", "Target Data / Resource", "Key Exam Trigger Phrase"],
    rows: [
      [
        "Amazon GuardDuty",
        "Threat Detection",
        "CloudTrail, VPC Flow Logs, DNS logs",
        "Intelligent threat detection using ML; detects crypto-mining & compromised accounts."
      ],
      [
        "Amazon Inspector",
        "Vulnerability Scanning",
        "EC2 instances, ECR images, Lambda",
        "Automated vulnerability assessment for CVEs and unintended network exposure."
      ],
      [
        "Amazon Macie",
        "Data Privacy / DLP",
        "Amazon S3 buckets",
        "Discovers and protects sensitive data (PII, SSNs, credit cards) using ML."
      ],
      [
        "AWS Security Hub",
        "Central Posture Dashboard",
        "GuardDuty, Inspector, Macie alerts",
        "Single pane of glass for security alerts and compliance standards (CIS, PCI)."
      ],
      [
        "Amazon Detective",
        "Forensic Investigation",
        "Security findings and logs",
        "Root cause analysis, visual graph timeline of security incidents."
      ],
      [
        "AWS Artifact",
        "Compliance Portal",
        "AWS global infrastructure",
        "Download SOC 1/2/3 reports, PCI DSS proof, and sign HIPAA BAA agreements."
      ],
      [
        "AWS WAF",
        "Web Application Firewall",
        "ALB, CloudFront, API Gateway",
        "Layer 7 filtering; blocks SQL Injection (SQLi) and Cross-Site Scripting (XSS)."
      ],
      [
        "AWS Shield Standard",
        "DDoS Protection (Free)",
        "All AWS endpoints",
        "Automatic Layer 3/4 DDoS protection for all AWS customers at no extra cost."
      ],
      [
        "AWS Shield Advanced",
        "DDoS Protection (Paid)",
        "CloudFront, Route 53, ALB",
        "24/7 DDoS Response Team (DRT) access, financial DDoS cost spike protection."
      ],
      [
        "AWS Secrets Manager",
        "Secrets Management",
        "Database credentials, API keys",
        "Automatic password rotation without redeploying application code."
      ],
      [
        "AWS KMS",
        "Key Management",
        "Cryptographic keys (CMKs)",
        "Multi-tenant managed encryption service across AWS storage and databases."
      ],
      [
        "AWS CloudHSM",
        "Dedicated Hardware Security",
        "Single-tenant HSM appliance",
        "Dedicated hardware security module validated under FIPS 140-2 Level 3."
      ]
    ]
  },
  {
    id: "support",
    title: "AWS Support Plans Matrix",
    description: "Compare cost, channels, SLAs, and features across the 4 main tiers.",
    headers: ["Plan", "Monthly Cost", "Support Channels", "Urgent Down SLA", "Technical Account Manager"],
    rows: [
      [
        "Basic",
        "Free",
        "Customer service (billing only)",
        "None (forums only)",
        "None (7 core Trusted Advisor checks)"
      ],
      [
        "Developer",
        "Greater of $29 or 3%",
        "Email during business hours (1 contact)",
        "< 12h (System impaired)",
        "None (7 core Trusted Advisor checks)"
      ],
      [
        "Business",
        "Greater of $100 or 10%-3%",
        "24/7 Phone, Chat, Email (Unlimited)",
        "< 1 hour (Production down)",
        "None (Full Trusted Advisor checks)"
      ],
      [
        "Enterprise On-Ramp",
        "Greater of $5,500 or 10%",
        "24/7 Phone, Chat, Email (Unlimited)",
        "< 30 minutes (Business-critical)",
        "Pool of TAMs + Concierge"
      ],
      [
        "Enterprise",
        "Greater of $15,000 or 10%-3%",
        "24/7 Phone, Chat, Email (Unlimited)",
        "< 15 minutes (Business-critical)",
        "Designated TAM + Concierge + IEM"
      ]
    ]
  },
  {
    id: "shared-responsibility",
    title: "Shared Responsibility Breakdown",
    description: "Security OF the Cloud (AWS) vs. Security IN the Cloud (Customer).",
    headers: ["Component", "Responsible Party", "Scope", "Exam Note"],
    rows: [
      [
        "Physical Data Centers & Racks",
        "AWS",
        "Security OF the Cloud",
        "Customers never have physical access to AWS data centers."
      ],
      [
        "Server Hardware Destruction",
        "AWS",
        "Security OF the Cloud",
        "NIST 800-88 compliant physical drive destruction."
      ],
      [
        "Hypervisor Patching",
        "AWS",
        "Security OF the Cloud",
        "AWS transparently updates Nitro and Xen hypervisors."
      ],
      [
        "EC2 Guest OS Patching",
        "Customer",
        "Security IN the Cloud",
        "Customer is root/admin on EC2 and must install OS updates."
      ],
      [
        "RDS Underlying OS Patching",
        "AWS",
        "Security OF the Cloud",
        "AWS manages the OS on RDS; customer manages DB schema & data."
      ],
      [
        "Firewall Rules (Security Groups)",
        "Customer",
        "Security IN the Cloud",
        "Customer defines inbound and outbound port rules."
      ],
      [
        "IAM Users, Passwords & MFA",
        "Customer",
        "Security IN the Cloud",
        "Customer enforces least privilege, credentials, and MFA."
      ],
      [
        "Customer Data Encryption",
        "Customer",
        "Security IN the Cloud",
        "Customer must enable KMS encryption at rest and TLS in transit."
      ]
    ]
  }
];
