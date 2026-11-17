// AWS Certified Cloud Practitioner Domain Study Guides Content
export const domainGuides = [
  {
    id: 1,
    title: "Domain 1: Cloud Concepts",
    weight: "24%",
    description: "Cloud computing definitions, the 6 core advantages of AWS, deployment models, Well-Architected Framework, and Cloud Adoption Framework (CAF).",
    sections: [
      {
        heading: "1. What is Cloud Computing?",
        content: `
          <p><strong>Cloud computing</strong> is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers, you access technology services (computing power, storage, databases) from AWS as needed.</p>
          <div class="table-responsive">
            <table class="data-table">
              <thead><tr><th>Model</th><th>What AWS Manages</th><th>What You Manage</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td><strong>IaaS</strong> (Infrastructure as a Service)</td><td>Physical hardware, data center, virtualization</td><td>OS, runtime, middleware, apps, data</td><td>Amazon EC2</td></tr>
                <tr><td><strong>PaaS</strong> (Platform as a Service)</td><td>Hardware, OS, runtime, auto-scaling, patching</td><td>Application code and configurations</td><td>AWS Elastic Beanstalk</td></tr>
                <tr><td><strong>SaaS</strong> (Software as a Service)</td><td>All infrastructure, application code, updates</td><td>Data, users, and app settings</td><td>QuickSight, Gmail</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "2. The Six Advantages of Cloud Computing (High-Yield)",
        content: `
          <div class="advantages-grid">
            <div class="adv-card">
              <span class="adv-num">1</span>
              <h4>Trade Fixed Expense (CapEx) for Variable Expense (OpEx)</h4>
              <p>Pay only for what you consume instead of large upfront hardware investments.</p>
            </div>
            <div class="adv-card">
              <span class="adv-num">2</span>
              <h4>Benefit from Massive Economies of Scale</h4>
              <p>Aggregate customer usage results in higher economies of scale, passed down as lower pay-as-you-go prices.</p>
            </div>
            <div class="adv-card">
              <span class="adv-num">3</span>
              <h4>Stop Guessing Capacity</h4>
              <p>Scale capacity up or down automatically with demand (Elasticity) instead of sitting on idle servers or experiencing outages.</p>
            </div>
            <div class="adv-card">
              <span class="adv-num">4</span>
              <h4>Increase Speed and Agility</h4>
              <p>New IT resources are just a click away; developers receive infrastructure in minutes rather than waiting weeks.</p>
            </div>
            <div class="adv-card">
              <span class="adv-num">5</span>
              <h4>Stop Spending Money on Data Centers</h4>
              <p>Eliminate the 'undifferentiated heavy lifting' of racking, stacking, powering, cooling servers and focus on business software.</p>
            </div>
            <div class="adv-card">
              <span class="adv-num">6</span>
              <h4>Go Global in Minutes</h4>
              <p>Deploy applications in multiple AWS Regions worldwide with minimal clicks for low latency and high availability.</p>
            </div>
          </div>
        `
      },
      {
        heading: "3. AWS Well-Architected Framework (6 Pillars)",
        content: `
          <div class="pillars-grid">
            <div class="pillar-box">
              <h4>1. Operational Excellence</h4>
              <p>Running and monitoring systems to deliver business value. Key principle: <em>Perform operations as code (IaC)</em> and learn from all operational failures.</p>
            </div>
            <div class="pillar-box">
              <h4>2. Security</h4>
              <p>Protecting information, systems, and assets. Key principles: <em>Implement a strong identity foundation (IAM)</em>, enable traceability (CloudTrail), apply security at all layers.</p>
            </div>
            <div class="pillar-box">
              <h4>3. Reliability</h4>
              <p>Workloads perform intended functions correctly and consistently. Key principles: <em>Automatically recover from failure</em>, scale horizontally, test recovery procedures.</p>
            </div>
            <div class="pillar-box">
              <h4>4. Performance Efficiency</h4>
              <p>Using computing resources efficiently. Key principles: <em>Democratize advanced technologies</em>, go global in minutes, leverage serverless architectures.</p>
            </div>
            <div class="pillar-box">
              <h4>5. Cost Optimization</h4>
              <p>Avoiding unnecessary costs. Key principles: <em>Adopt a consumption model</em>, measure efficiency, stop spending on undifferentiated heavy lifting.</p>
            </div>
            <div class="pillar-box">
              <h4>6. Sustainability</h4>
              <p>Minimizing environmental impact of running cloud workloads. Key principles: <em>Understand impact</em>, establish sustainability goals, maximize utilization.</p>
            </div>
          </div>
        `
      },
      {
        heading: "4. AWS Cloud Adoption Framework (CAF) & 7 Rs",
        content: `
          <p><strong>AWS CAF Perspectives:</strong></p>
          <ul>
            <li><strong>Business Capabilities:</strong> Business, People, Governance</li>
            <li><strong>Technical Capabilities:</strong> Platform, Security, Operations</li>
          </ul>
          <p><strong>The 7 Rs Migration Strategies:</strong></p>
          <ol>
            <li><strong>Rehost (Lift and Shift):</strong> Move without changes.</li>
            <li><strong>Replatform (Lift, Tinker, Shift):</strong> Cloud optimization without core architecture overhaul.</li>
            <li><strong>Refactor / Re-architect:</strong> Re-imagine application architecture into serverless / cloud-native.</li>
            <li><strong>Repurchase (Drop and Shop):</strong> Switch to a different SaaS product.</li>
            <li><strong>Retain:</strong> Keep on-premises (unsupported or waiting for depreciation).</li>
            <li><strong>Retire:</strong> Decommission redundant or dead apps.</li>
            <li><strong>Relocate:</strong> Hypervisor-level lift (e.g. VMware Cloud on AWS).</li>
          </ol>
        `
      }
    ]
  },
  {
    id: 2,
    title: "Domain 2: Security & Compliance",
    weight: "30%",
    description: "Shared Responsibility Model, IAM permissions, network firewalls (Security Groups vs NACLs), threat detection, encryption, and compliance.",
    sections: [
      {
        heading: "1. The AWS Shared Responsibility Model",
        content: `
          <div class="shared-model-box">
            <div class="model-half customer-side">
              <h4>CUSTOMER Responsibility ("Security IN the Cloud")</h4>
              <ul>
                <li>Customer Data (classification & encryption)</li>
                <li>Identity & Access Management (IAM users, passwords, MFA, roles)</li>
                <li>Operating System configuration & patching on EC2 instances</li>
                <li>Network & Firewall configuration (Security Groups, NACLs)</li>
                <li>Application code & middleware security</li>
              </ul>
            </div>
            <div class="model-half aws-side">
              <h4>AWS Responsibility ("Security OF the Cloud")</h4>
              <ul>
                <li>Physical data center security (guards, biometric access, cameras)</li>
                <li>Hardware & Global Infrastructure (servers, fiber, racks)</li>
                <li>Software & Virtualization layer (Nitro / Xen hypervisor patching)</li>
                <li>Edge Locations, Regions, and AZ connectivity</li>
                <li>Operating system patching on managed services (RDS, DynamoDB, Lambda, S3)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        heading: "2. AWS Identity & Access Management (IAM)",
        content: `
          <ul>
            <li><strong>Root User:</strong> First user created; has total control. <em>Best Practice:</em> Lock root credentials away, enable MFA, and never use for day-to-day tasks.</li>
            <li><strong>IAM Users:</strong> Persistent identity for an individual person or service with credentials.</li>
            <li><strong>IAM Groups:</strong> Collection of users that inherit shared IAM policies.</li>
            <li><strong>IAM Roles:</strong> Identity assumed by AWS services (e.g., EC2, Lambda) or federated users using temporary security credentials (no permanent access keys!).</li>
            <li><strong>IAM Policies:</strong> JSON documents specifying Allow/Deny actions on specific resources. Always follow the <strong>Principle of Least Privilege</strong>.</li>
            <li><strong>IAM Credential Report:</strong> Downloadable CSV audit of all account users and credential status (MFA, password age, active keys).</li>
            <li><strong>IAM Access Analyzer:</strong> Detects resources shared externally outside your AWS organization.</li>
          </ul>
        `
      },
      {
        heading: "3. Security Groups vs. Network ACLs (NACLs)",
        content: `
          <div class="table-responsive">
            <table class="data-table">
              <thead><tr><th>Attribute</th><th>Security Group</th><th>Network ACL (NACL)</th></tr></thead>
              <tbody>
                <tr><td><strong>Operates At</strong></td><td>Instance level (virtual network interface)</td><td>Subnet level</td></tr>
                <tr><td><strong>Statefulness</strong></td><td><strong>Stateful:</strong> Inbound return traffic automatically allowed</td><td><strong>Stateless:</strong> Return traffic must be explicitly allowed</td></tr>
                <tr><td><strong>Rules</strong></td><td><strong>ALLOW rules only</strong> (everything else denied)</td><td><strong>ALLOW and DENY rules</strong></td></tr>
                <tr><td><strong>Rule Order</strong></td><td>All rules evaluated before permit decision</td><td>Processed in strict <strong>numerical order</strong></td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "4. AWS Security & Compliance Services",
        content: `
          <div class="services-compact-grid">
            <div class="sec-item"><strong>AWS WAF:</strong> Layer 7 firewall protecting against SQLi, XSS, and HTTP rate limits.</div>
            <div class="sec-item"><strong>AWS Shield:</strong> DDoS defense (Standard is free Layer 3/4; Advanced provides 24/7 DRT team).</div>
            <div class="sec-item"><strong>Amazon GuardDuty:</strong> Intelligent threat detection using ML on CloudTrail, VPC Flow, and DNS logs.</div>
            <div class="sec-item"><strong>Amazon Inspector:</strong> Automated vulnerability scanning for EC2, ECR container images, and Lambda.</div>
            <div class="sec-item"><strong>Amazon Macie:</strong> Data privacy service discovering sensitive PII in Amazon S3 buckets.</div>
            <div class="sec-item"><strong>AWS Security Hub:</strong> Central dashboard aggregating security alerts and compliance posture.</div>
            <div class="sec-item"><strong>AWS Artifact:</strong> Self-service portal to download compliance documents (SOC, PCI) and sign HIPAA BAA.</div>
            <div class="sec-item"><strong>AWS Secrets Manager:</strong> Secure storage with automatic rotation of database passwords and API keys.</div>
            <div class="sec-item"><strong>AWS KMS:</strong> Cryptographic Key Management Service (multi-tenant HSM).</div>
            <div class="sec-item"><strong>AWS CloudHSM:</strong> Single-tenant dedicated hardware security module (FIPS 140-2 Level 3).</div>
          </div>
        `
      }
    ]
  },
  {
    id: 3,
    title: "Domain 3: Technology & Services",
    weight: "34%",
    description: "AWS Global Infrastructure, EC2, Lambda, S3, EBS, EFS, RDS, DynamoDB, VPC, Route 53, CloudFront, CloudWatch, and CloudTrail.",
    sections: [
      {
        heading: "1. AWS Global Infrastructure",
        content: `
          <ul>
            <li><strong>AWS Region:</strong> Physical geographic cluster around the globe. Always contains at least 3 isolated Availability Zones. Choose based on compliance, latency, cost, and service availability.</li>
            <li><strong>Availability Zone (AZ):</strong> One or more discrete data centers with redundant power, networking, and ultra-low latency fiber links. Deploy multi-AZ for High Availability.</li>
            <li><strong>Edge Locations / PoPs:</strong> Globally distributed points of presence used by CloudFront (CDN) and Route 53 (DNS) to cache and deliver content quickly.</li>
            <li><strong>AWS Outposts:</strong> Physical AWS rack deployed directly in your on-premises data center for a consistent hybrid cloud experience.</li>
          </ul>
        `
      },
      {
        heading: "2. Compute Services & EC2 Purchasing Options",
        content: `
          <div class="table-responsive">
            <table class="data-table">
              <thead><tr><th>Purchasing Option</th><th>Discount</th><th>Commitment</th><th>Ideal For</th></tr></thead>
              <tbody>
                <tr><td><strong>On-Demand</strong></td><td>Baseline</td><td>None (pay per second/hour)</td><td>Short-term, unpredictable, cannot be interrupted</td></tr>
                <tr><td><strong>Spot Instances</strong></td><td>Up to 90%</td><td>None (can be interrupted with 2m notice)</td><td>Fault-tolerant, batch jobs, background processing</td></tr>
                <tr><td><strong>Savings Plans</strong></td><td>Up to 72%</td><td>1 or 3-year commitment ($/hr spend)</td><td>Steady-state compute across EC2, Fargate, Lambda</td></tr>
                <tr><td><strong>Reserved Instances (RI)</strong></td><td>Up to 72%</td><td>1 or 3-year instance reservation</td><td>Steady-state, predictable workloads</td></tr>
                <tr><td><strong>Dedicated Hosts</strong></td><td>Varies</td><td>1 or 3-year or On-demand</td><td>Strict server-bound software licenses (BYOL)</td></tr>
              </tbody>
            </table>
          </div>
          <p><strong>Other Compute Options:</strong></p>
          <ul>
            <li><strong>AWS Lambda:</strong> Serverless compute running event-driven code up to 15 minutes.</li>
            <li><strong>AWS Fargate:</strong> Serverless container compute engine for ECS and EKS (no EC2 management).</li>
            <li><strong>AWS Elastic Beanstalk:</strong> PaaS - upload code; AWS provisions infrastructure, load balancer, and scaling.</li>
            <li><strong>Amazon Lightsail:</strong> Simple virtual private server (VPS) with fixed monthly pricing for simple apps.</li>
          </ul>
        `
      },
      {
        heading: "3. Storage: S3 vs. EBS vs. EFS",
        content: `
          <ul>
            <li><strong>Amazon S3 (Object Storage):</strong> Files stored with metadata and unique keys. Unlimited storage, 99.999999999% (11 9's) durability. Accessed via HTTP/REST. (Classes: Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier Instant, Glacier Flexible, Glacier Deep Archive).</li>
            <li><strong>Amazon EBS (Block Storage):</strong> Virtual hard drives attached to single EC2 instances in the same AZ. Ideal for OS boot drives and transactional databases.</li>
            <li><strong>Amazon EFS (File Storage - NFS):</strong> Managed elastic network file system mounted concurrently across hundreds of Linux EC2 instances across multiple AZs.</li>
            <li><strong>Amazon FSx:</strong> Managed high-performance file systems (FSx for Windows File Server using SMB, FSx for Lustre for HPC).</li>
            <li><strong>AWS Snow Family:</strong> Physical appliances for data transfer (Snowcone: 8-14 TB, Snowball Edge: 80 TB, Snowmobile: up to 100 PB).</li>
          </ul>
        `
      },
      {
        heading: "4. Databases & Networking",
        content: `
          <p><strong>Databases:</strong></p>
          <ul>
            <li><strong>Amazon RDS:</strong> Managed relational SQL database (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora). Multi-AZ for disaster recovery; Read Replicas for read scaling.</li>
            <li><strong>Amazon Aurora:</strong> AWS cloud-native SQL database with 5x MySQL throughput and 6 copies of data across 3 AZs.</li>
            <li><strong>Amazon DynamoDB:</strong> Fully managed serverless NoSQL key-value and document database (single-digit millisecond latency).</li>
            <li><strong>Amazon Redshift:</strong> Fast, petabyte-scale data warehouse for OLAP and BI analytics.</li>
            <li><strong>Amazon ElastiCache:</strong> In-memory caching (Redis/Memcached) for microsecond latency.</li>
          </ul>
          <p><strong>Networking:</strong></p>
          <ul>
            <li><strong>Amazon VPC:</strong> Logically isolated virtual network.</li>
            <li><strong>Internet Gateway (IGW):</strong> Allows public subnets bidirectional internet access.</li>
            <li><strong>NAT Gateway:</strong> Allows private subnets outbound internet access (for software updates) without allowing inbound traffic.</li>
            <li><strong>Route 53:</strong> Managed DNS service with health checking and latency-based routing.</li>
            <li><strong>Amazon CloudFront:</strong> Global CDN caching web content at Edge Locations.</li>
            <li><strong>AWS Direct Connect:</strong> Dedicated private fiber connection from on-prem to AWS bypassing the internet.</li>
          </ul>
        `
      },
      {
        heading: "5. Monitoring & Governance: CloudWatch vs CloudTrail vs Config",
        content: `
          <div class="table-responsive">
            <table class="data-table">
              <thead><tr><th>Service</th><th>Core Purpose</th><th>Key Question It Answers</th></tr></thead>
              <tbody>
                <tr><td><strong>Amazon CloudWatch</strong></td><td>Metrics, logs, performance monitoring, alarms</td><td><em>"How is the CPU, memory, and performance health right now?"</em></td></tr>
                <tr><td><strong>AWS CloudTrail</strong></td><td>API auditing, governance, user actions tracking</td><td><em>"Who made the API call, when, and from which IP address?"</em></td></tr>
                <tr><td><strong>AWS Config</strong></td><td>Configuration compliance tracking & history</td><td><em>"Did someone change an S3 bucket or security group rule over time?"</em></td></tr>
                <tr><td><strong>AWS Trusted Advisor</strong></td><td>Best practice recommendations (5 pillars)</td><td><em>"How can I optimize costs, security, fault tolerance, and limits?"</em></td></tr>
              </tbody>
            </table>
          </div>
        `
      }
    ]
  },
  {
    id: 4,
    title: "Domain 4: Billing, Pricing & Support",
    weight: "12%",
    description: "Pricing models, cost management tools (Calculator, Cost Explorer, Budgets), consolidated billing, and AWS Support Plan tiers.",
    sections: [
      {
        heading: "1. AWS Pricing Principles & Free Tier",
        content: `
          <p><strong>Three Pricing Principles:</strong> Pay-as-you-go, Save when you commit, Pay less by using more (volume tiers).</p>
          <p><strong>Data Transfer Rules:</strong></p>
          <ul>
            <li>Data Transfer <strong>IN</strong> to AWS is always <strong>FREE</strong>.</li>
            <li>Data Transfer <strong>OUT</strong> to the internet is charged per GB.</li>
          </ul>
          <p><strong>AWS Free Tier Categories:</strong></p>
          <ol>
            <li><strong>Always Free:</strong> Never expires (e.g., Lambda 1M requests/mo, DynamoDB 25 GB).</li>
            <li><strong>12 Months Free:</strong> For 12 months after account creation (e.g., 750 hrs/mo EC2 t2/t3.micro, 5 GB S3).</li>
            <li><strong>Short-Term Trials:</strong> Starts upon service activation (e.g., GuardDuty 30-day trial).</li>
          </ol>
        `
      },
      {
        heading: "2. Cost Management & Billing Tools",
        content: `
          <div class="table-responsive">
            <table class="data-table">
              <thead><tr><th>Tool</th><th>Primary Purpose</th><th>When to Use</th></tr></thead>
              <tbody>
                <tr><td><strong>AWS Pricing Calculator</strong></td><td>Pre-deployment cost modeling</td><td>Estimate costs of proposed architecture before building it.</td></tr>
                <tr><td><strong>AWS Cost Explorer</strong></td><td>Historical spending & forecasting</td><td>Analyze past 12 months spending patterns and forecast future 12 months.</td></tr>
                <tr><td><strong>AWS Budgets</strong></td><td>Custom spend alerts</td><td>Receive email/SNS alerts when costs exceed or are forecasted to exceed a dollar threshold.</td></tr>
                <tr><td><strong>Cost & Usage Report (CUR)</strong></td><td>Granular billing dataset</td><td>Deliver detailed hourly CSV reports to an S3 bucket for analysis.</td></tr>
                <tr><td><strong>AWS Organizations</strong></td><td>Consolidated billing & governance</td><td>Single bill, volume discounts, shared RIs, and Service Control Policies (SCPs).</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. AWS Support Plans Comparison",
        content: `
          <div class="table-responsive">
            <table class="data-table">
              <thead><tr><th>Feature</th><th>Basic</th><th>Developer</th><th>Business</th><th>Enterprise</th></tr></thead>
              <tbody>
                <tr><td><strong>Cost</strong></td><td>Free</td><td>$29/mo or 3%</td><td>$100/mo or 10%-3%</td><td>$15,000/mo or 10%-3%</td></tr>
                <tr><td><strong>Channels</strong></td><td>Customer service (billing)</td><td>Email during business hours</td><td><strong>24/7 Phone, Chat, Email</strong></td><td><strong>24/7 Phone, Chat, Email</strong></td></tr>
                <tr><td><strong>Response Time</strong></td><td>N/A</td><td>&lt; 12h system impaired</td><td><strong>&lt; 1h production system down</strong></td><td><strong>&lt; 15m business-critical down</strong></td></tr>
                <tr><td><strong>Trusted Advisor</strong></td><td>7 core checks</td><td>7 core checks</td><td><strong>Full checks (all 5 pillars)</strong></td><td><strong>Full checks (all 5 pillars)</strong></td></tr>
                <tr><td><strong>Technical Account Mgr (TAM)</strong></td><td>None</td><td>None</td><td>None</td><td><strong>Designated TAM</strong></td></tr>
                <tr><td><strong>Support Concierge</strong></td><td>None</td><td>None</td><td>None</td><td><strong>Designated Concierge</strong></td></tr>
              </tbody>
            </table>
          </div>
        `
      }
    ]
  }
];
