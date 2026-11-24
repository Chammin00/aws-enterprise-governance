# AWS Skill Builder Matching Quizzes & SimuLearn Scenarios (CLF-C02)

> **Aligned 1-to-1 with:** `Exam Prep Plan: AWS Certified Cloud Practitioner (CLF-C02 - English)`  
> **Contents:** 60 Exam-Style Questions & Scenario Drills mirroring the Skill Builder Practice Sets, SimuLearn Labs, and Escape Room.  
> **Scoring Target:** Aim for **80%+** (48/60) before Dec 2 to give yourself a comfortable buffer above the 700/1000 passing score.

---

## Section 1: Baseline Warm-Up Quiz (Mirrors Training #2: Official Practice Question Set)

**Q1.** A company wants to move from owning physical data centers to paying only for the compute and storage it consumes each month. Which advantage of cloud computing does this represent?
- A) Go global in minutes
- B) Trade fixed expense for variable expense
- C) Benefit from massive economies of scale
- D) Increase speed and agility

**Q2.** Which AWS service records all API calls and AWS Management Console sign-in events for governance and auditing?
- A) Amazon CloudWatch
- B) AWS Config
- C) AWS CloudTrail
- D) Amazon GuardDuty

**Q3.** Under the AWS Shared Responsibility Model, which of the following is the **customer's** responsibility when running an Amazon EC2 instance? *(Choose TWO)*
- A) Patching the guest operating system
- B) Physical security of the data center
- C) Managing the hypervisor layer
- D) Configuring Security Group firewall rules
- E) Replacing failed physical host disks

**Q4.** A company needs to host a static marketing website with global low-latency delivery. Which combination of AWS services is the MOST cost-effective?
- A) Amazon EC2 and Amazon EBS
- B) Amazon S3 and Amazon CloudFront
- C) Amazon EFS and AWS Direct Connect
- D) Amazon RDS and AWS Global Accelerator

**Q5.** Which AWS Support plan is the **lowest-cost** plan that provides 24/7 access to Cloud Support Engineers via phone, chat, and email AND the full set of AWS Trusted Advisor checks?
- A) Basic Support
- B) Developer Support
- C) Business Support
- D) Enterprise On-Ramp Support

**Q6.** Which tool allows a company to estimate its monthly AWS bill **before** deploying any resources?
- A) AWS Cost Explorer
- B) AWS Budgets
- C) AWS Pricing Calculator
- D) AWS Cost and Usage Report

**Q7.** A developer wants to run event-driven code without provisioning or managing any servers, paying only for the exact compute time consumed. Which service should they use?
- A) Amazon EC2
- B) AWS Lambda
- C) Amazon Lightsail
- D) AWS Outposts

**Q8.** Which AWS service is a fully managed, serverless NoSQL key-value database providing single-digit millisecond performance at any scale?
- A) Amazon RDS
- B) Amazon Aurora
- C) Amazon Redshift
- D) Amazon DynamoDB

**Q9.** Which AWS service uses machine learning to automatically discover and protect Personally Identifiable Information (PII) stored in Amazon S3 buckets?
- A) Amazon Inspector
- B) Amazon Macie
- C) Amazon GuardDuty
- D) AWS Artifact

**Q10.** A company has multiple AWS accounts across departments and wants to receive a single monthly invoice while sharing Reserved Instance discounts across accounts. Which service should it use?
- A) AWS Organizations
- B) AWS Control Tower
- C) AWS Budgets
- D) AWS Resource Access Manager

---

## Section 2: Domain 1 Practice Quiz + SimuLearn Scenario (Mirrors Trainings #6 & #7)

**Q11.** Which pillar of the AWS Well-Architected Framework focuses on running and monitoring systems, performing operations as code, and making frequent, small, reversible changes?
- A) Reliability
- B) Performance Efficiency
- C) Operational Excellence
- D) Cost Optimization

**Q12.** A company wants to minimize the environmental impact of its cloud workloads by rightsizing instances and migrating to energy-efficient AWS Graviton processors. Which Well-Architected pillar does this align with?
- A) Cost Optimization
- B) Sustainability
- C) Performance Efficiency
- D) Operational Excellence

**Q13.** Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on skills, workforce readiness, and organizational change management?
- A) Business perspective
- B) Governance perspective
- C) People perspective
- D) Operations perspective

**Q14.** A company needs to migrate 80 TB of archival video data from a remote site with slow, unreliable internet connectivity to Amazon S3 within two weeks. Which AWS service is BEST suited?
- A) AWS Direct Connect
- B) AWS Snowball Edge
- C) AWS Database Migration Service (DMS)
- D) AWS Transfer Family

**Q15.** Moving an on-premises self-managed PostgreSQL database to Amazon RDS for PostgreSQL without changing application code is an example of which migration strategy?
- A) Rehost
- B) Replatform
- C) Refactor
- D) Repurchase

**Q16.** A company wants to provision identical development, staging, and production environments repeatedly using declarative JSON/YAML templates. Which AWS service enables this?
- A) AWS Elastic Beanstalk
- B) AWS CloudFormation
- C) AWS Migration Hub
- D) AWS Systems Manager

**Q17.** Which concept describes the ability of an AWS architecture to automatically add compute capacity during traffic spikes and remove it when demand drops?
- A) Agility
- B) High Availability
- C) Elasticity
- D) Durability

**Q18.** A company wants to migrate an on-premises Oracle database to Amazon Aurora PostgreSQL. Which TWO AWS tools should they use together? *(Choose TWO)*
- A) AWS Schema Conversion Tool (AWS SCT)
- B) AWS Database Migration Service (AWS DMS)
- C) AWS Snowcone
- D) AWS Application Discovery Service
- E) AWS Backup

**Q19.** Which AWS Well-Architected pillar emphasizes automatically recovering from infrastructure failures and scaling horizontally to increase aggregate workload availability?
- A) Security
- B) Reliability
- C) Operational Excellence
- D) Sustainability

**Q20.** Which of the following is a managed AWS service that reduces operational overhead compared to self-hosting on EC2? *(Choose TWO)*
- A) Amazon DynamoDB
- B) Amazon RDS
- C) Customer-managed MySQL on EC2
- D) On-premises VMware cluster
- E) Custom-compiled Redis on EC2

### SimuLearn Scenario #1 (Domain 1 — Cloud Concepts & Migration)
> **Customer Brief:** *RetailCo* runs a legacy e-commerce monolith in a leased data center. Their lease expires in 90 days. Traffic spikes 5x during holiday sales, causing outages because they can't buy servers fast enough. They also need to move 120 TB of product media and want to reduce hardware maintenance costs.
>
> **Task:** Match each requirement to the best AWS concept/service:
> 1. Fast migration of app servers before the 90-day lease deadline → *Which 7R strategy & service?*
> 2. Handling 5x holiday traffic spikes automatically → *Which AWS cloud property & service?*
> 3. Moving 120 TB of media without saturating their office internet → *Which AWS migration family?*

---

## Section 3: Domain 2 Practice Quiz + SimuLearn Scenario (Mirrors Trainings #9 & #10)

**Q21.** Under the AWS Shared Responsibility Model, which control is **shared** between AWS and the customer?
- A) Physical environmental controls
- B) Patch Management
- C) Customer data classification
- D) Edge location maintenance

**Q22.** Where can a customer download AWS's SOC 2 and ISO 27001 compliance reports for an upcoming external audit?
- A) AWS Audit Manager
- B) AWS Artifact
- C) AWS Trusted Advisor
- D) AWS Security Hub

**Q23.** Which task can **ONLY** be performed by the AWS account root user?
- A) Creating an IAM Admin user
- B) Launching an Amazon EC2 instance
- C) Closing an AWS account
- D) Creating an S3 bucket policy

**Q24.** An application running on an Amazon EC2 instance needs read-only access to an Amazon S3 bucket. What is the security best practice for granting this access?
- A) Store the root user access keys in an environment variable
- B) Hardcode an IAM user's access key inside the application code
- C) Attach an IAM Role with a least-privilege policy to the EC2 instance
- D) Make the S3 bucket public

**Q25.** Which AWS service continuously scans Amazon EC2 instances, AWS Lambda functions, and Amazon ECR container images for software vulnerabilities (CVEs) and unintended network exposure?
- A) Amazon GuardDuty
- B) Amazon Inspector
- C) AWS Shield
- D) AWS WAF

**Q26.** A company wants to block SQL injection and cross-site scripting (XSS) attacks targeting its public web application behind Amazon CloudFront. Which service should it deploy?
- A) AWS Shield Standard
- B) AWS WAF
- C) Network ACLs
- D) Amazon Macie

**Q27.** How does a VPC Security Group differ from a Network ACL (NACL)?
- A) Security Groups are stateless; NACLs are stateful
- B) Security Groups support allow and deny rules; NACLs support allow rules only
- C) Security Groups operate at the instance level and are stateful; NACLs operate at the subnet level and are stateless
- D) Security Groups are optional; NACLs cannot be modified

**Q28.** A company needs to store database credentials securely and automatically rotate those credentials every 30 days. Which service should it use?
- A) AWS KMS
- B) AWS Secrets Manager
- C) AWS Certificate Manager
- D) AWS CloudHSM

**Q29.** Which service provides a single, centralized dashboard to aggregate and prioritize security findings from Amazon GuardDuty, Amazon Inspector, and Amazon Macie?
- A) Amazon Detective
- B) AWS Security Hub
- C) AWS Config
- D) AWS CloudTrail

**Q30.** A company wants its employees to sign in once using their corporate Active Directory credentials to access multiple AWS accounts in AWS Organizations. Which service should they configure?
- A) Amazon Cognito
- B) AWS IAM Identity Center (AWS Single Sign-On)
- C) AWS Directory Service Simple AD only
- D) AWS Certificate Manager

**Q31.** Which AWS service provides dedicated, **single-tenant** hardware security modules (HSMs) for regulatory compliance requiring exclusive control over cryptographic keys?
- A) AWS KMS
- B) AWS CloudHSM
- C) AWS Secrets Manager
- D) AWS Shield Advanced

**Q32.** A company suspects an EC2 instance in another AWS customer's account is sending phishing emails to their domain. Who should they contact?
- A) AWS Concierge Support Team
- B) AWS Trust and Safety (Abuse) team
- C) AWS Technical Account Manager
- D) AWS Professional Services

### SimuLearn Scenario #2 (Domain 2 — Security & Compliance)
> **Customer Brief:** *FinHealth Corp* is launching a patient portal on AWS. They must prove HIPAA compliance to auditors, prevent DDoS and SQL injection attacks on their web tier, ensure no S3 bucket accidentally exposes patient SSNs, and enforce MFA + least privilege for their engineering team.
>
> **Task:** Identify the exact AWS service for each requirement:
> 1. Sign the HIPAA Business Associate Agreement (BAA) → *Service?*
> 2. Block Layer-7 SQL injection attacks + mitigate volumetric DDoS → *2 Services?*
> 3. Detect exposed patient SSNs (PII) inside S3 buckets → *Service?*
> 4. Detect suspicious API activity / compromised IAM credentials → *Service?*

---

## Section 4: Domain 3 Practice Quiz + SimuLearn Scenario (Mirrors Trainings #12 & #13)

**Q33.** Which statement accurately describes the relationship between AWS Regions and Availability Zones (AZs)?
- A) Each Availability Zone contains multiple Regions
- B) A Region is a geographic area consisting of multiple isolated Availability Zones
- C) Availability Zones share the same power grid to reduce latency
- D) Edge Locations contain multiple Regions

**Q34.** A financial trading firm requires single-digit millisecond latency for users in Boston, where there is no full AWS Region, by placing compute and storage directly in that metro area. Which AWS infrastructure offering fits best?
- A) AWS Outposts
- B) AWS Local Zones
- C) AWS Wavelength
- D) Amazon CloudFront

**Q35.** A telecommunications company wants to run ultra-low-latency AR/VR workloads embedded directly inside 5G mobile carrier networks. Which service should it use?
- A) AWS Wavelength
- B) AWS Local Zones
- C) AWS Direct Connect
- D) AWS Snowball

**Q36.** A company needs a **serverless** compute engine to run Docker containers on Amazon ECS without provisioning or managing underlying EC2 instances. Which service should it choose?
- A) AWS Lambda
- B) AWS Fargate
- C) Amazon ECR
- D) AWS Elastic Beanstalk

**Q37.** Which Amazon S3 storage class automatically moves objects between access tiers when data access patterns are unknown or changing, with no retrieval fees?
- A) S3 Standard-IA
- B) S3 One Zone-IA
- C) S3 Intelligent-Tiering
- D) S3 Glacier Instant Retrieval

**Q38.** A company must retain tax records for 7 years at the **lowest possible storage cost**, and a 12-to-48-hour retrieval time is acceptable during an audit. Which S3 storage class should it use?
- A) S3 Standard-IA
- B) S3 Glacier Instant Retrieval
- C) S3 Glacier Flexible Retrieval
- D) S3 Glacier Deep Archive

**Q39.** Which AWS storage service provides a fully managed, elastic **Linux NFS** shared file system that can be mounted simultaneously by hundreds of EC2 instances across multiple Availability Zones?
- A) Amazon EBS
- B) Amazon EFS
- C) Amazon S3
- D) EC2 Instance Store

**Q40.** A company needs a persistent block storage volume attached to a single EC2 instance for a transactional database. Which service should they use?
- A) Amazon EBS
- B) EC2 Instance Store
- C) Amazon EFS
- D) AWS Storage Gateway

**Q41.** Which AWS database service is a fully managed **graph database** ideal for fraud detection and social network relationship queries?
- A) Amazon DynamoDB
- B) Amazon Neptune
- C) Amazon MemoryDB for Redis
- D) Amazon Aurora

**Q42.** A company wants a dedicated, **private physical network connection** from its on-premises data center to AWS for consistent, high-bandwidth throughput without traversing the public internet. Which service should it use?
- A) AWS Site-to-Site VPN
- B) AWS Direct Connect
- C) Amazon VPC Peering
- D) AWS Global Accelerator

**Q43.** A data analyst wants to run ad-hoc **SQL queries directly against petabytes of log files stored in Amazon S3** without setting up servers or loading data into a database. Which service should they use?
- A) Amazon Redshift
- B) Amazon EMR
- C) Amazon Athena
- D) AWS Glue

**Q44.** Match the AI/ML need: A company wants to automatically extract printed text, handwriting, and tables from thousands of scanned PDF invoices. Which service should it use?
- A) Amazon Rekognition
- B) Amazon Comprehend
- C) Amazon Textract
- D) Amazon Transcribe

**Q45.** A company wants to decouple its order-processing microservice from its fulfillment microservice so orders are buffered safely during traffic surges and never lost. Which service is BEST?
- A) Amazon SNS
- B) Amazon SQS
- C) Amazon SES
- D) Amazon Connect

**Q46.** Which AWS developer service is a browser-based, pre-authenticated shell inside the AWS Management Console for running AWS CLI commands?
- A) AWS Cloud9
- B) AWS CloudShell
- C) AWS CodeBuild
- D) AWS X-Ray

**Q47.** A company wants to stream a legacy Windows desktop application to remote contractors directly inside their web browsers without provisioning full virtual desktops. Which service fits BEST?
- A) Amazon WorkSpaces
- B) Amazon AppStream 2.0
- C) AWS Amplify
- D) Amazon Connect

### SimuLearn Scenario #3 (Domain 3 — Technology & Services)
> **Customer Brief:** *GlobalStream Media* is building a video-review platform. Users upload videos to durable object storage, an AI service automatically flags inappropriate content, another AI service generates text captions from audio, and users worldwide stream approved content with low latency. A relational SQL backend needs high availability and 5x MySQL performance.
>
> **Task:** Pick the 5 AWS services:
> 1. Durable object storage for uploaded videos → *Service?*
> 2. Detect inappropriate video content → *Service?*
> 3. Convert video audio track to text captions → *Service?*
> 4. Global low-latency content delivery → *Service?*
> 5. High-performance MySQL-compatible relational DB → *Service?*

---

## Section 5: Domain 4 Practice Quiz (Mirrors Training #15)

**Q48.** A company runs a stateless, fault-tolerant nightly genomics batch job that can be interrupted and restarted without issue. Which EC2 purchasing option delivers the **lowest possible cost**?
- A) On-Demand Instances
- B) Reserved Instances
- C) Spot Instances
- D) Dedicated Hosts

**Q49.** A company has a third-party enterprise software license bound to physical server sockets and cores (BYOL) and must meet strict regulatory isolation rules. Which EC2 option is required?
- A) Dedicated Instances
- B) Dedicated Hosts
- C) Compute Savings Plans
- D) Capacity Reservations

**Q50.** Which EC2 commitment model provides the **greatest flexibility** to change instance families, sizes, OS, Regions, and even move workloads to AWS Fargate or AWS Lambda while receiving a discount?
- A) Standard Reserved Instances
- B) Convertible Reserved Instances
- C) Compute Savings Plans
- D) EC2 Instance Savings Plans

**Q51.** Which type of data transfer is generally **FREE ($0)** on AWS?
- A) Data transfer OUT from Amazon EC2 to the public internet
- B) Data transfer IN from the public internet to Amazon EC2 or S3
- C) Data transfer between two different AWS Regions
- D) Data transfer between two different Availability Zones

**Q52.** A finance manager wants to receive an automated email alert whenever the company's monthly AWS spending is forecasted to exceed $5,000. Which service should they configure?
- A) AWS Cost Explorer
- B) AWS Budgets
- C) AWS Pricing Calculator
- D) AWS Billing Conductor

**Q53.** Which AWS billing feature lets a company categorize and track costs by project, environment, or department inside Cost Explorer and the Cost and Usage Report?
- A) AWS Trusted Advisor
- B) Cost Allocation Tags
- C) AWS Service Catalog
- D) AWS License Manager

**Q54.** Which AWS Support plan includes a **dedicated Technical Account Manager (TAM)** and a **< 15-minute** response time for business-critical system down events?
- A) Business Support
- B) Enterprise On-Ramp Support
- C) Enterprise Support
- D) Developer Support

**Q55.** A startup wants to hire a vetted, AWS-certified third-party freelancer for a short-term migration project. Which AWS service connects customers with certified freelancers?
- A) AWS Professional Services
- B) AWS IQ
- C) AWS Marketplace
- D) AWS Managed Services (AMS)

---

## Section 6: Escape Room Rapid-Fire Gauntlet (Mirrors Training #16)

Solve these 5 "escape locks" by naming the exact AWS service (or pair) that unlocks each room:

- **Lock 56 (The Audit Room):** *"Someone deleted a production S3 bucket at 2:14 AM. Which service tells you **WHO** made the API call, and which service tells you **WHAT** the bucket configuration looked like before it was deleted?"*
- **Lock 57 (The Global Speed Room):** *"Your app serves static images AND runs a real-time multiplayer UDP game globally. Which edge service caches the static images, and which edge service accelerates the UDP traffic over AWS's backbone using static Anycast IPs?"*
- **Lock 58 (The Messaging Room):** *"You need to fan-out an order-placed notification to 3 subscribers (email, SMS, and a Lambda function) simultaneously, while also buffering heavy invoice jobs in a pull-based queue. Which two services do you pair?"*
- **Lock 59 (The Hybrid Room):** *"You have an on-prem data center that needs low-latency local caching of S3 files AND a second factory floor that requires actual AWS-managed hardware racks running EC2 on-site. Name both services."*
- **Lock 60 (The Support Room):** *"You need Infrastructure Event Management (IEM) included for a major product launch, a Concierge Support Team, and a Pooled TAM—at a lower cost than full Enterprise Support. Which Support Plan unlocks this door?"*

---
---

# Answer Key & Detailed Rationales

### Section 1: Baseline Warm-Up (Q1–Q10)
1. **B** — Paying only for consumption replaces upfront hardware CapEx (fixed) with usage-based OpEx (variable).
2. **C** — **CloudTrail** = API/Console auditing ("who did what"). CloudWatch = metrics/logs; Config = resource config history; GuardDuty = threat detection.
3. **A, D** — Customer manages Security *IN* the Cloud (guest OS patching, Security Groups, data). AWS handles physical security, hypervisor, and physical disks.
4. **B** — **S3** hosts static sites cheaply with zero servers; **CloudFront** caches content globally at Edge Locations.
5. **C** — **Business Support** is the lowest tier with 24/7 phone/chat/email AND Full Trusted Advisor checks. (Developer = business hours email + 7 core checks).
6. **C** — **Pricing Calculator** = *before* deployment. Cost Explorer = *past/current* spend analysis. Budgets = alerts.
7. **B** — **AWS Lambda** is serverless, event-driven compute billed per request & duration.
8. **D** — **DynamoDB** is AWS's serverless NoSQL key-value/document database. (RDS/Aurora = relational; Redshift = data warehouse).
9. **B** — **Amazon Macie** uses ML to discover sensitive data/PII in S3.
10. **A** — **AWS Organizations** provides consolidated billing, volume discounts, and RI/Savings Plan sharing across accounts.

### Section 2: Domain 1 & SimuLearn #1 (Q11–Q20)
11. **C** — **Operational Excellence** covers operations as code, monitoring, and small reversible changes.
12. **B** — **Sustainability** focuses on minimizing environmental impact (utilization, rightsizing, Graviton).
13. **C** — **People perspective** (AWS CAF) covers skills, culture, and workforce transformation.
14. **B** — **Snowball Edge** physically ships up to 80 TB per device offline when internet bandwidth is limited.
15. **B** — **Replatform** ("Lift, Tinker, and Shift") adds cloud-managed optimizations (like RDS) without changing core app architecture.
16. **B** — **CloudFormation** is AWS's native Infrastructure as Code (IaC) templating service.
17. **C** — **Elasticity** = automatically scaling both *up and down* with demand.
18. **A, B** — Heterogeneous migration (Oracle → PostgreSQL) requires **SCT** (converts schema) + **DMS** (migrates data).
19. **B** — **Reliability** focuses on fault recovery, horizontal scaling, and meeting demand.
20. **A, B** — **DynamoDB** and **RDS** are AWS-managed database services; self-hosting on EC2 leaves patching/backups to you.
- **SimuLearn #1 Answers:**
  1. **Rehost** ("Lift & Shift") using **AWS Application Migration Service (MGN)** for speed within 90 days.
  2. **Elasticity** using **Amazon EC2 Auto Scaling** (+ Elastic Load Balancing).
  3. **AWS Snow Family** (specifically **Snowball Edge** devices).

### Section 3: Domain 2 & SimuLearn #2 (Q21–Q32)
21. **B** — **Patch Management** (along with Configuration Management and Awareness & Training) is a *shared control*.
22. **B** — **AWS Artifact** is the self-service portal for compliance reports (SOC, ISO, PCI) and agreements (BAA).
23. **C** — Closing an AWS account (and changing support plans) requires the **root user**.
24. **C** — Always attach an **IAM Role** to EC2 for temporary, auto-rotated credentials — never hardcode keys.
25. **B** — **Amazon Inspector** = automated vulnerability scanning (CVEs) for EC2, Lambda, and ECR.
26. **B** — **AWS WAF** operates at Layer 7 to block SQLi, XSS, and malicious HTTP patterns.
27. **C** — **Security Groups** = instance-level, stateful, allow-only. **NACLs** = subnet-level, stateless, allow & deny.
28. **B** — **AWS Secrets Manager** natively supports automatic secret rotation.
29. **B** — **AWS Security Hub** aggregates findings centrally across AWS security services.
30. **B** — **IAM Identity Center** provides workforce SSO across AWS Organizations accounts. (Cognito is for app end-users).
31. **B** — **AWS CloudHSM** provides dedicated, single-tenant HSM hardware. (KMS is multi-tenant).
32. **B** — Report suspected abuse of AWS resources to the **AWS Trust and Safety (Abuse) team**.
- **SimuLearn #2 Answers:**
  1. **AWS Artifact** (to review/accept the HIPAA BAA).
  2. **AWS WAF** (SQL injection) + **AWS Shield** (DDoS protection).
  3. **Amazon Macie** (ML-powered PII/SSN discovery in S3).
  4. **Amazon GuardDuty** (intelligent threat detection on CloudTrail/VPC/DNS logs).

### Section 4: Domain 3 & SimuLearn #3 (Q33–Q47)
33. **B** — Regions are geographic areas containing multiple isolated Availability Zones.
34. **B** — **AWS Local Zones** extend AWS compute/storage to major metro areas for single-digit ms latency.
35. **A** — **AWS Wavelength** embeds AWS infrastructure inside 5G carrier networks.
36. **B** — **AWS Fargate** is the serverless compute engine for ECS and EKS containers.
37. **C** — **S3 Intelligent-Tiering** automatically optimizes costs for unknown/changing access patterns with no retrieval fees.
38. **D** — **S3 Glacier Deep Archive** is the absolute lowest-cost S3 storage class (12–48 hour retrieval).
39. **B** — **Amazon EFS** = elastic, serverless Linux NFS file share across multiple AZs.
40. **A** — **Amazon EBS** = persistent block storage attached to EC2 (Instance Store is ephemeral/temporary).
41. **B** — **Amazon Neptune** is AWS's managed graph database.
42. **B** — **AWS Direct Connect** = dedicated private physical connection (VPN runs over the public internet).
43. **C** — **Amazon Athena** = serverless interactive SQL queries directly on S3 data.
44. **C** — **Amazon Textract** extracts text, handwriting, and tables from scanned documents/PDFs.
45. **B** — **Amazon SQS** is a managed message queue for decoupling microservices. (SNS is push pub/sub).
46. **B** — **AWS CloudShell** is the browser-based shell inside the AWS Console. (Cloud9 is a full cloud IDE).
47. **B** — **Amazon AppStream 2.0** streams desktop *applications* to browsers. (WorkSpaces provides full virtual desktops).
- **SimuLearn #3 Answers:**
  1. **Amazon S3** (11 nines durability object storage).
  2. **Amazon Rekognition** (image/video content moderation).
  3. **Amazon Transcribe** (speech-to-text captions).
  4. **Amazon CloudFront** (global CDN).
  5. **Amazon Aurora** (5x MySQL performance, cloud-native relational DB).

### Section 5: Domain 4 (Q48–Q55)
48. **C** — **Spot Instances** offer up to 90% savings for fault-tolerant, interruptible workloads.
49. **B** — **Dedicated Hosts** give physical server socket/core visibility required for BYOL licensing.
50. **C** — **Compute Savings Plans** automatically apply across EC2 families, sizes, OS, Regions, Fargate, and Lambda.
51. **B** — **Inbound data transfer** from the internet into AWS is generally free ($0).
52. **B** — **AWS Budgets** sets cost/usage thresholds and sends alerts when actual or forecasted spend exceeds limits.
53. **B** — **Cost Allocation Tags** label resources so costs can be grouped by department/project in billing reports.
54. **C** — **Enterprise Support** provides a **Dedicated TAM** and **< 15-minute** Business-Critical Down SLA.
55. **B** — **AWS IQ** connects customers with AWS-certified third-party freelancers.

### Section 6: Escape Room Gauntlet (Locks 56–60)
- **Lock 56:** **AWS CloudTrail** (WHO called DeleteBucket) + **AWS Config** (WHAT the bucket configuration looked like before).
- **Lock 57:** **Amazon CloudFront** (static image CDN caching) + **AWS Global Accelerator** (UDP/TCP acceleration via static Anycast IPs).
- **Lock 58:** **Amazon SNS** (fan-out push notifications) + **Amazon SQS** (pull-based decoupling queue).
- **Lock 59:** **AWS Storage Gateway** (on-prem cached access to S3) + **AWS Outposts** (AWS-managed hardware racks on-premises).
- **Lock 60:** **AWS Enterprise On-Ramp Support** (includes Pooled TAMs, Concierge Support, and 1 IEM/year at a lower price than Enterprise).
