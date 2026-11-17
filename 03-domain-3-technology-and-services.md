# Domain 3: Cloud Technology and Services (34% of Exam)

Domain 3 is the largest section of the CLF-C02 exam (34%). It covers the AWS global infrastructure, core compute, storage, databases, networking, monitoring, and application integration services.

---

## 1. AWS Global Infrastructure

```
┌───────────────────────────────────────────────────────────┐
│                    AWS Global Footprint                   │
├───────────────────────────────────────────────────────────┤
│ • Regions (Physical geographic clusters around the globe) │
│ • Availability Zones (AZs) (Data centers inside a Region) │
│ • Edge Locations / Points of Presence (PoPs) (Global CDN) │
│ • AWS Outposts (AWS hardware in your on-premises center)  │
│ • Local Zones & Wavelength (Ultra-low latency edge apps)  │
└───────────────────────────────────────────────────────────┘
```

- **AWS Region:**
  - A physical geographic area (e.g., `us-east-1` N. Virginia, `eu-west-1` Ireland).
  - Each Region consists of **at least 3 physically separated and isolated Availability Zones**.
  - Factors for choosing a Region: **Compliance/Data Sovereignty**, **Latency** to users, **Available Services**, and **Cost** (prices vary by Region).
- **Availability Zone (AZ):**
  - One or more discrete data centers with redundant power, networking, and connectivity.
  - Connected with high-bandwidth, low-latency private optical fiber networking.
  - Deploying across multiple AZs provides **High Availability (HA)** and **Fault Tolerance**.
- **Edge Locations (Points of Presence - PoPs):**
  - Distributed sites across the globe used by **Amazon CloudFront (CDN)** and **Amazon Route 53 (DNS)** to cache and serve content with low latency.

---

## 2. Compute Services

### Amazon EC2 (Elastic Compute Cloud)
Virtual servers in the cloud (IaaS). You choose instance family, CPU, memory, OS (AMI), and storage.

#### EC2 Purchasing Options (High-Yield Exam Focus)
| Option | Characteristics | Best For |
| :--- | :--- | :--- |
| **On-Demand** | Fixed hourly or per-second rate. No upfront payment. No commitment. | Unpredictable workloads, short-term testing, applications that cannot be interrupted. |
| **Savings Plans** | Commit to a consistent amount of usage ($/hr) for 1 or 3 years. Up to **72% savings**. | Steady-state compute across EC2, Fargate, and Lambda. |
| **Reserved Instances (RI)** | Commit to specific instance configuration for 1 or 3 years. **Standard** (up to 72% discount) or **Convertible** (up to 54%, allows change of instance family). | Steady-state, predictable usage workloads. |
| **Spot Instances** | Bid on spare EC2 capacity for up to **90% discount**. Can be terminated by AWS with a 2-minute warning. | Fault-tolerant, batch jobs, background processing, data analysis. |
| **Dedicated Hosts** | Physical EC2 server dedicated exclusively for your use. Provides visibility into sockets/cores. | Regulatory compliance, strict server-bound software licenses (BYOL). |
| **Dedicated Instances** | Instances running on hardware dedicated to a single customer, but shared at host level with your other instances. | Regulatory compliance requiring physical isolation from other tenants. |

### Containers & Serverless Compute
- **AWS Lambda:**
  - **Serverless compute**: Run code without provisioning or managing servers.
  - Event-driven (triggered by S3 uploads, HTTP requests, DynamoDB changes).
  - Maximum execution duration: **15 minutes**. Pay only for compute time used (milliseconds).
- **Amazon ECS (Elastic Container Service):** AWS-native container orchestration for Docker containers.
- **Amazon EKS (Elastic Kubernetes Service):** Managed Kubernetes service.
- **AWS Fargate:**
  - **Serverless compute engine for containers**.
  - Works with both ECS and EKS. Eliminates the need to manage EC2 instances for containers.
- **AWS Elastic Beanstalk:**
  - Platform as a Service (PaaS).
  - Upload code; Beanstalk handles provisioning, load balancing, auto-scaling, and health monitoring automatically.
- **Amazon Lightsail:**
  - Easy-to-use virtual private server (VPS) with predictable low monthly pricing for simple websites and beginner setups.

---

## 3. Storage Services

### S3 vs. EBS vs. EFS

| Feature | Amazon S3 | Amazon EBS | Amazon EFS |
| :--- | :--- | :--- | :--- |
| **Storage Type** | **Object Storage** (files + metadata + unique key) | **Block Storage** (raw block volumes) | **File Storage** (hierarchical file system - NFS) |
| **Scope** | Regional / Global namespace | **AZ-specific** (must be in same AZ as EC2) | Regional (multi-AZ) |
| **Attachment** | Accessed via HTTP REST API from anywhere | Attached to a single EC2 instance (except Multi-Attach io1/io2) | Mounted simultaneously on **hundreds of EC2 instances** |
| **Use Cases** | Backups, static websites, data lakes, images/videos | Boot volumes, OS, databases needing low latency | Content management, shared home directories, Linux apps |

### Amazon S3 Storage Classes
- **S3 Standard:** Frequent access, high throughput, low latency. 99.999999999% (11 9's) durability.
- **S3 Intelligent-Tiering:** Automatically moves objects between access tiers based on changing access patterns with no operational overhead or retrieval fees.
- **S3 Standard-IA (Infrequent Access):** For data accessed less frequently, but requires rapid access when needed. Lower storage fee, retrieval fee applies.
- **S3 One Zone-IA:** Same as Standard-IA, but stored in a single AZ (lower cost, not resilient to physical AZ loss).
- **S3 Glacier Instant Retrieval:** Archive storage with millisecond retrieval for archive data accessed once a quarter.
- **S3 Glacier Flexible Retrieval:** Archive storage with configurable retrieval from minutes to 3-5 hours.
- **S3 Glacier Deep Archive:** Lowest cost storage in the cloud. Retrieval takes 12-48 hours. Best for long-term regulatory compliance (7-10 years).

### Hybrid & Migration Storage
- **AWS Storage Gateway:** Connects on-premises environments to AWS cloud storage (File Gateway, Volume Gateway, Tape Gateway).
- **AWS Snow Family:** Physical devices to migrate petabytes of data into AWS without using the internet:
  - **AWS Snowcone:** Small, portable (8 TB to 14 TB).
  - **AWS Snowball Edge:** Rugged suitcase (up to 80 TB storage or edge compute).
  - **AWS Snowmobile:** 45-foot rugged shipping container pulled by a semi-truck (up to 100 PB per truck).

---

## 4. Database Services

- **Amazon RDS (Relational Database Service):**
  - Managed SQL databases: PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, and Amazon Aurora.
  - Features: Automated backups, patch management, point-in-time restore.
  - **Multi-AZ Deployment:** Synchronous replication to a standby instance in another AZ for **High Availability and Disaster Recovery**.
  - **Read Replicas:** Asynchronous replication to multiple read-only instances for **Read Performance Scaling**.
- **Amazon Aurora:**
  - AWS-built relational database compatible with MySQL and PostgreSQL.
  - 5x throughput of standard MySQL; 3x throughput of standard PostgreSQL.
  - Automatically replicates 6 copies of your data across 3 AZs.
- **Amazon DynamoDB:**
  - Fully managed, serverless **NoSQL key-value and document database**.
  - Single-digit millisecond latency at any scale. Multi-AZ by default.
- **Amazon Redshift:**
  - Fully managed **data warehouse** for complex queries and OLAP (Online Analytical Processing) / Business Intelligence. Columnar storage.
- **Amazon ElastiCache:**
  - In-memory data store/cache (Redis or Memcached) to reduce database read load and achieve microsecond response times.
- **Amazon DocumentDB:** Managed MongoDB-compatible document database.
- **Amazon Neptune:** Managed Graph database (social graphs, fraud detection).

---

## 5. Networking and Content Delivery

- **Amazon VPC (Virtual Private Cloud):**
  - A logically isolated section of the AWS Cloud where you launch AWS resources in a virtual network that you define.
- **Subnets:**
  - A segment of a VPC’s IP address range (bound to a single AZ).
  - **Public Subnet:** Has a direct route to an Internet Gateway (IGW).
  - **Private Subnet:** Isolated from direct internet access.
- **Internet Gateway (IGW):** VPC component that allows communication between instances in public subnets and the internet.
- **NAT Gateway (Network Address Translation):**
  - Managed service in a public subnet that enables instances in private subnets to connect outbound to the internet (for software updates) while preventing inbound internet connections.
- **Elastic Load Balancing (ELB):**
  - Automatically distributes incoming application traffic across multiple targets (EC2 instances, containers, IP addresses).
  - **Application Load Balancer (ALB):** Layer 7 (HTTP/HTTPS, path/host routing).
  - **Network Load Balancer (NLB):** Layer 4 (TCP/UDP, ultra-low latency, handles millions of requests/sec).
- **Amazon CloudFront:**
  - Fast, global Content Delivery Network (CDN) that delivers data, videos, applications, and APIs to users securely via Edge Locations.
- **Amazon Route 53:**
  - Highly available and scalable cloud Domain Name System (DNS) web service and domain registrar.
- **AWS Direct Connect:**
  - Dedicated private physical network connection from your premises to AWS (bypasses the public internet for consistent throughput and security).
- **AWS Site-to-Site VPN:**
  - Encrypted IPsec connection over the public internet between on-prem network and AWS VPC.
- **AWS Transit Gateway:**
  - Central transit hub to interconnect thousands of VPCs and on-premises networks in a simple hub-and-spoke model.

---

## 6. Management, Governance & Developer Tools

- **Amazon CloudWatch:**
  - Monitors operational performance and metrics (CPU utilization, disk reads, network I/O).
  - Set **CloudWatch Alarms** to trigger actions (e.g., notify SNS or trigger EC2 Auto Scaling).
  - Collects and monitors **CloudWatch Logs**.
- **AWS CloudTrail:**
  - **Auditing and Governance**: Records AWS API calls and user actions made across your AWS account.
  - Answers: *Who made the request? What service was accessed? When was it made? From which IP address?*
- **AWS Config:**
  - Assesses, audits, and evaluates the configurations of your AWS resources.
  - Tracks configuration history and checks compliance against pre-defined rules (e.g., "Alert if an S3 bucket is public").
- **AWS Trusted Advisor:**
  - Real-time guidance and best practice checks across 5 categories:
    1. Cost Optimization
    2. Performance
    3. Security
    4. Fault Tolerance
    5. Service Limits (Quotas)
- **AWS CloudFormation:**
  - **Infrastructure as Code (IaC)**.
  - Model and provision your AWS resources using declarative JSON or YAML templates.
- **AWS Organizations:**
  - Centralized management and consolidated billing for multiple AWS accounts.
  - Uses **Service Control Policies (SCPs)** to set maximum permission guardrails on member accounts.
- **AWS Systems Manager:**
  - Unified operational management console for configuring and patching EC2 instances and on-premises servers without needing SSH/bastion hosts.

---

## 7. Application Integration & Messaging

- **Amazon SQS (Simple Queue Service):**
  - Fully managed message queuing service.
  - Decouples and scales microservices, distributed systems, and serverless applications. **Pull-based** model.
- **Amazon SNS (Simple Notification Service):**
  - Fully managed **Publish/Subscribe (Pub/Sub)** messaging service.
  - **Push-based** model: Pushes notifications to subscribers (Amazon SQS, AWS Lambda, HTTP endpoints, mobile push, SMS, email).
- **Amazon EventBridge:**
  - Serverless event bus that connects application data from your own apps, SaaS applications, and AWS services.
- **AWS Step Functions:**
  - Visual workflow service to orchestrate multiple AWS services and Lambda functions into resilient serverless workflows.
