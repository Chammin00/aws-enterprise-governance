# AWS Certified Cloud Practitioner (CLF-C02) — Full Practice Exam 02

> **Questions:** 65 | **Time Limit:** 90 Minutes | **Passing Score:** 700 / 1,000 (~70% / 46+ correct)  
> **Domain Weighting:** Domain 1 (15 Qs — 23%) | Domain 2 (19 Qs — 29%) | Domain 3 (23 Qs — 35%) | Domain 4 (8 Qs — 12%)  
> **Focus:** Weighted toward Domain 3 service triggers and high-frequency CLF-C02 look-alike traps.

---

## Questions

### Q1 [D1]
A startup previously leased physical servers on 3-year contracts and often ran out of capacity during product launches. After moving to AWS, they launch servers in minutes and shut them down when traffic drops. Which **TWO** advantages of cloud computing does this illustrate? *(Choose TWO)*
- A) Stop guessing capacity
- B) Go global in minutes
- C) Increase speed and agility
- D) Benefit from massive economies of scale
- E) Achieve single-tenant physical isolation

### Q2 [D3]
A media company stores raw 4K video files on-premises and needs **low-latency local cached access** for editors while durably archiving the full library in Amazon S3. Which AWS service should they deploy?
- A) Amazon EBS
- B) AWS Storage Gateway
- C) Amazon EFS
- D) AWS Snowcone

### Q3 [D2]
A security team wants to automatically detect compromised IAM credentials, unusual API calls, and cryptocurrency mining on EC2 instances by analyzing CloudTrail, VPC Flow Logs, and DNS logs. Which AWS service provides this intelligent threat detection?
- A) Amazon Macie
- B) Amazon Inspector
- C) Amazon GuardDuty
- D) AWS Artifact

### Q4 [D3]
A retail analytics team needs to run ad-hoc **standard SQL queries directly against CSV and Parquet files stored in Amazon S3** without managing servers or loading data into a database. Which service should they use?
- A) Amazon Redshift
- B) Amazon Athena
- C) Amazon RDS
- D) Amazon EMR

### Q5 [D4]
A company wants a 1-year commitment to reduce compute costs, **but** plans to migrate some workloads from Amazon EC2 to **AWS Fargate and AWS Lambda** mid-year and may switch AWS Regions. Which pricing option preserves their discount across all of these changes?
- A) Standard Reserved Instances
- B) Convertible Reserved Instances
- C) Compute Savings Plans
- D) EC2 Instance Savings Plans

### Q6 [D1]
Which pillar of the AWS Well-Architected Framework emphasizes **performing operations as code**, making frequent small reversible changes, and conducting game days?
- A) Reliability
- B) Operational Excellence
- C) Performance Efficiency
- D) Security

### Q7 [D3]
A healthcare provider needs to automatically extract printed text, handwriting, and structured tables from thousands of **scanned PDF intake forms**. Which AWS AI/ML service is purpose-built for this task?
- A) Amazon Transcribe
- B) Amazon Comprehend
- C) Amazon Textract
- D) Amazon Polly

### Q8 [D2]
Under the AWS Shared Responsibility Model, which task is the **customer's** responsibility when running an application on **Amazon EC2**?
- A) Securing physical data center perimeters
- B) Patching the underlying virtualization hypervisor
- C) Patching the guest operating system and configuring Security Groups
- D) Replacing failed physical host storage drives

### Q9 [D3]
A financial institution needs to run Amazon EC2 and Amazon EBS **physically inside its own on-premises data center** using AWS-managed hardware racks to meet strict local latency and residency rules. Which AWS service meets this need?
- A) AWS Local Zones
- B) AWS Outposts
- C) AWS Wavelength
- D) Amazon CloudFront

### Q10 [D3]
A social networking company wants to store millions of user profiles and query **complex, multi-hop friend and fraud-ring relationships** in real time. Which AWS database service is purpose-built for this?
- A) Amazon DynamoDB
- B) Amazon Neptune
- C) Amazon Aurora
- D) Amazon Redshift

### Q11 [D4]
Which AWS Support plan is the **lowest-cost** tier that provides **24/7 access** to Cloud Support Engineers via phone, chat, and email AND unlocks the **full set of AWS Trusted Advisor checks**?
- A) AWS Basic Support
- B) AWS Developer Support
- C) AWS Business Support
- D) AWS Enterprise On-Ramp Support

### Q12 [D2]
A consumer mobile app needs user sign-up, sign-in, and **social login federation (Google, Apple, Facebook)** for 5 million external customers. Which AWS service should the developers use?
- A) AWS IAM Identity Center
- B) Amazon Cognito
- C) AWS Directory Service
- D) AWS Secrets Manager

### Q13 [D3]
A developer stores temporary cache files on an **Amazon EC2 Instance Store** volume. After stopping the EC2 instance overnight and starting it the next morning, what happens to those cache files?
- A) They remain intact on the volume
- B) They are automatically snapshotted to Amazon S3
- C) They are permanently lost because Instance Store is ephemeral
- D) They are migrated to Amazon EFS

### Q14 [D1]
A company is migrating an on-premises **Microsoft SQL Server** database to **Amazon Aurora PostgreSQL** (two different database engines). Which **TWO** AWS tools should they pair for this heterogeneous migration? *(Choose TWO)*
- A) AWS Schema Conversion Tool (AWS SCT)
- B) AWS Database Migration Service (AWS DMS)
- C) AWS Snowball Edge
- D) AWS Backup
- E) AWS Direct Connect

### Q15 [D3]
An enterprise wants to provision **persistent, cloud-based virtual Windows desktops** for 400 remote employees so each employee has a full workstation accessible from any device. Which AWS service fits BEST?
- A) Amazon AppStream 2.0
- B) Amazon WorkSpaces
- C) Amazon Connect
- D) AWS Amplify

### Q16 [D2]
A government contractor must meet FIPS 140-2 Level 3 compliance by using a **dedicated, single-tenant hardware security module (HSM)** inside AWS with exclusive customer control over cryptographic keys. Which service meets this requirement?
- A) AWS Key Management Service (AWS KMS)
- B) AWS CloudHSM
- C) AWS Secrets Manager
- D) AWS Certificate Manager (ACM)

### Q17 [D3]
A publishing company wants to convert written news articles into **lifelike spoken audio** so subscribers can listen on their commute. Which AWS AI/ML service performs text-to-speech?
- A) Amazon Transcribe
- B) Amazon Polly
- C) Amazon Translate
- D) Amazon Lex

### Q18 [D1]
A company switches from x86 EC2 instances to energy-efficient **AWS Graviton** processors and adopts serverless computing to **minimize its environmental impact and carbon footprint**. Which Well-Architected pillar does this align with?
- A) Cost Optimization
- B) Sustainability
- C) Performance Efficiency
- D) Operational Excellence

### Q19 [D3]
A DevOps team wants an automated service to **orchestrate its end-to-end CI/CD release workflow**—triggering builds and deployments whenever developers push code changes. Which AWS service should they use?
- A) AWS X-Ray
- B) AWS CodePipeline
- C) AWS CodeCommit
- D) AWS Cloud9

### Q20 [D2]
Which AWS service provides a self-service portal to download AWS **SOC 2, PCI DSS, and ISO 27001** compliance reports and accept the **HIPAA Business Associate Agreement (BAA)**?
- A) AWS Audit Manager
- B) AWS Artifact
- C) AWS Config
- D) AWS Security Hub

### Q21 [D3]
A telecom company wants to deploy a cloud-based **omnichannel customer call/contact center** with automatic voice and chat routing and pay-per-minute pricing. Which AWS service should they choose?
- A) Amazon Lex
- B) Amazon Connect
- C) Amazon SES
- D) Amazon SNS

### Q22 [D4]
Which type of data transfer on AWS is generally **FREE ($0)**?
- A) Data transfer OUT from Amazon EC2 to the public internet
- B) Data transfer IN from the public internet to Amazon EC2 or Amazon S3
- C) Data transfer between two different AWS Regions
- D) Data transfer between two Availability Zones in the same Region

### Q23 [D3]
A company wants to send an immediate alert to **multiple destinations at once** (an ops email address, an on-call SMS number, and an AWS Lambda function) whenever an order fails. Which pub/sub service should they use?
- A) AWS Step Functions
- B) Amazon Simple Queue Service (Amazon SQS)
- C) Amazon Simple Notification Service (Amazon SNS)
- D) Amazon Simple Email Service (Amazon SES)

### Q24 [D2]
Which AWS service continuously scans **Amazon EC2 instances, AWS Lambda functions, and Amazon ECR container images** for known software vulnerabilities (CVEs) and unintended network exposure?
- A) Amazon GuardDuty
- B) Amazon Inspector
- C) Amazon Macie
- D) AWS Shield

### Q25 [D3]
A small team of developers wants to deploy a Node.js web app by **simply uploading their code**, letting AWS automatically provision EC2 instances, Elastic Load Balancing, and Auto Scaling while keeping access to the underlying EC2 resources. Which service fits BEST?
- A) Amazon ECS
- B) AWS Elastic Beanstalk
- C) AWS Lambda
- D) AWS Batch

### Q26 [D1]
Which design principle belongs to the **Performance Efficiency** pillar of the AWS Well-Architected Framework?
- A) Adopt a consumption model and measure overall financial efficiency
- B) Democratize advanced technologies and use serverless architectures
- C) Implement a strong identity foundation and enable traceability
- D) Anticipate failure and refine operations procedures frequently

### Q27 [D2]
A security engineer needs to **explicitly DENY** traffic from a specific malicious IP address at the **subnet level** of a VPC. Which VPC security feature supports explicit deny rules at the subnet level?
- A) Security Groups
- B) Network ACLs (NACLs)
- C) AWS IAM Policies
- D) Amazon GuardDuty

### Q28 [D3]
A company runs Linux EC2 instances across **three Availability Zones** and needs all instances to mount and share the **same elastic NFS file system** simultaneously. Which storage service should they choose?
- A) Amazon EBS
- B) Amazon EFS
- C) EC2 Instance Store
- D) Amazon S3 Glacier

### Q29 [D4]
A company runs a fault-tolerant, stateless video rendering job that can be interrupted and automatically restarted without losing work. Which EC2 purchasing option delivers the **lowest possible cost**?
- A) On-Demand Instances
- B) Standard Reserved Instances
- C) Spot Instances
- D) Dedicated Hosts

### Q30 [D2]
Which task can **ONLY** be performed by the **AWS account root user**?
- A) Creating an IAM Role for EC2
- B) Closing the AWS account
- C) Launching an Amazon RDS database
- D) Enabling AWS CloudTrail

### Q31 [D3]
A company stores millions of documents in Amazon S3 with **completely unpredictable access patterns**—some files are read frequently for days and then untouched for months. They want automatic cost savings with **no retrieval fees**. Which S3 storage class fits BEST?
- A) S3 Standard-IA
- B) S3 One Zone-IA
- C) S3 Intelligent-Tiering
- D) S3 Glacier Instant Retrieval

### Q32 [D1]
A company moves its legacy on-premises HR application by subscribing to a **cloud-based SaaS HR platform** instead of migrating the old servers. Which of the **7 Rs** migration strategies is this?
- A) Rehost
- B) Replatform
- C) Repurchase
- D) Retire

### Q33 [D3]
A global gaming studio runs a real-time **UDP** multiplayer server and wants players worldwide to connect over the AWS global private network using **two static Anycast IP addresses** for lower latency and instant failover. Which service should they use?
- A) Amazon CloudFront
- B) AWS Global Accelerator
- C) Amazon Route 53
- D) AWS Direct Connect

### Q34 [D2]
Which AWS service automatically discovers and classifies **Personally Identifiable Information (PII)** such as credit card numbers and SSNs stored inside **Amazon S3 buckets**?
- A) Amazon GuardDuty
- B) Amazon Macie
- C) Amazon Inspector
- D) Amazon Detective

### Q35 [D4]
A company wants to estimate its expected monthly AWS bill **before** deploying a new multi-tier web application. Which AWS tool should they use?
- A) AWS Cost Explorer
- B) AWS Budgets
- C) AWS Pricing Calculator
- D) AWS Cost and Usage Report (CUR)

### Q36 [D3]
An e-commerce company wants to **decouple** its payment microservice from its shipping microservice using a managed, pull-based **message queue** so traffic spikes never drop orders. Which service should they use?
- A) Amazon SNS
- B) Amazon SQS
- C) Amazon SES
- D) Amazon EventBridge

### Q37 [D2]
A company wants a **single, centralized dashboard** that aggregates and prioritizes security findings from Amazon GuardDuty, Amazon Inspector, Amazon Macie, and AWS Firewall Manager across all AWS accounts. Which service provides this?
- A) AWS Config
- B) AWS Security Hub
- C) AWS CloudTrail
- D) AWS Trusted Advisor

### Q38 [D1]
Which **AWS Cloud Adoption Framework (AWS CAF)** perspective focuses on workforce readiness, cloud skills training, culture, and organizational change management?
- A) Business perspective
- B) Governance perspective
- C) People perspective
- D) Platform perspective

### Q39 [D3]
A company needs to run Docker containers on Amazon ECS **serverlessly** without provisioning, patching, or scaling any underlying Amazon EC2 instances. Which service should they use?
- A) AWS Lambda
- B) AWS Fargate
- C) Amazon ECR
- D) Amazon Lightsail

### Q40 [D2]
A web application behind Amazon CloudFront is being targeted by **SQL injection and cross-site scripting (XSS)** attacks at Layer 7. Which AWS service should be enabled to block these attacks?
- A) AWS Shield Standard
- B) AWS WAF
- C) Amazon Inspector
- D) AWS Network Firewall only

### Q41 [D3]
A logistics company receives real-time GPS telemetry every second from 100,000 delivery vans and needs to **ingest and process this streaming data in real time**. Which AWS service is purpose-built for this?
- A) Amazon Athena
- B) Amazon Kinesis
- C) AWS Glue
- D) Amazon QuickSight

### Q42 [D4]
An enterprise requires a **dedicated Technical Account Manager (TAM)** and a **< 15-minute** target response time for business-critical system down incidents. Which AWS Support plan meets these requirements?
- A) AWS Business Support
- B) AWS Enterprise On-Ramp Support
- C) AWS Enterprise Support
- D) AWS Developer Support

### Q43 [D1]
A company notices its EC2 instances average 8% CPU utilization and wants an automated ML service to recommend smaller, cheaper instance types (**rightsizing**). Which AWS service provides these recommendations?
- A) AWS Compute Optimizer
- B) AWS CloudFormation
- C) AWS Migration Hub
- D) AWS Application Discovery Service

### Q44 [D3]
An EC2 instance sits in a **private subnet** of a VPC and must NOT accept inbound internet connections, **but** needs outbound-only internet access to download OS security updates. Which VPC component enables this?
- A) Internet Gateway (IGW)
- B) NAT Gateway
- C) VPC Endpoint only
- D) AWS Direct Connect

### Q45 [D2]
A security auditor needs to know **who** called the `DeleteDBInstance` API yesterday and **what** the database configuration looked like before it was deleted. Which **TWO** AWS services provide these answers? *(Choose TWO)*
- A) AWS CloudTrail
- B) AWS Config
- C) Amazon CloudWatch
- D) AWS Shield
- E) Amazon Macie

### Q46 [D3]
A company needs a cloud-native, PostgreSQL-compatible **relational database** that delivers up to **3x standard PostgreSQL throughput**, replicates data across 3 Availability Zones, and auto-scales storage up to 128 TB. Which service should they choose?
- A) Amazon DynamoDB
- B) Amazon Aurora
- C) Amazon Redshift
- D) Amazon MemoryDB for Redis

### Q47 [D1]
A company wants to migrate **80 TB** of seismic survey data from a remote desert site with no high-speed internet connection to Amazon S3 within 10 days. Which AWS service is BEST suited?
- A) AWS Direct Connect
- B) AWS Snowball Edge
- C) AWS DataSync
- D) AWS Transfer Family

### Q48 [D2]
A company wants to store Amazon RDS database passwords securely outside of source code and **automatically rotate** those credentials every 30 days. Which AWS service should they use?
- A) AWS KMS
- B) AWS Secrets Manager
- C) AWS Certificate Manager (ACM)
- D) AWS Systems Manager Session Manager

### Q49 [D3]
A company wants to stream a legacy Windows CAD **desktop application** directly into remote contractors' **web browsers** without provisioning persistent full virtual desktops. Which AWS service fits BEST?
- A) Amazon WorkSpaces
- B) Amazon AppStream 2.0
- C) Amazon Connect
- D) AWS Device Farm

### Q50 [D4]
A company has 15 AWS accounts managed under **AWS Organizations** with consolidated billing enabled. Which **TWO** benefits does consolidated billing provide? *(Choose TWO)*
- A) A single monthly invoice across all member accounts
- B) Combined usage across accounts to reach volume pricing discounts faster
- C) Free AWS Business Support for all member accounts
- D) Free outbound internet data transfer
- E) Automatic 70% discount on all On-Demand EC2 instances

### Q51 [D3]
A telecom carrier wants to run ultra-low-latency mobile gaming workloads embedded directly inside its **5G mobile carrier network**. Which AWS infrastructure offering is designed for this?
- A) AWS Outposts
- B) AWS Local Zones
- C) AWS Wavelength
- D) Amazon Route 53

### Q52 [D2]
Under the AWS Shared Responsibility Model, which **TWO** controls are **shared** between AWS and the customer? *(Choose TWO)*
- A) Patch Management
- B) Physical security of AWS data centers
- C) Configuration Management
- D) Customer data encryption key selection
- E) Hypervisor hardware maintenance

### Q53 [D3]
A media company wants to automatically **convert recorded podcast audio files into written text transcripts** for accessibility captions. Which AWS AI/ML service should they use?
- A) Amazon Polly
- B) Amazon Transcribe
- C) Amazon Textract
- D) Amazon Comprehend

### Q54 [D1]
A company moves its self-managed on-premises Oracle database to **Amazon RDS for Oracle** to offload backups and OS patching without changing application code. Which **7 Rs** strategy is this?
- A) Rehost
- B) Replatform
- C) Refactor
- D) Retain

### Q55 [D3]
A company needs a **dedicated, private physical fiber connection** from its on-premises headquarters to AWS for consistent, predictable bandwidth without traversing the public internet. Which service should they choose?
- A) AWS Site-to-Site VPN
- B) AWS Direct Connect
- C) Amazon CloudFront
- D) Amazon API Gateway

### Q56 [D2]
A company wants its internal employees to sign in once with their corporate directory credentials (**workforce SSO**) to access 20 different AWS accounts in AWS Organizations. Which service should they use?
- A) Amazon Cognito
- B) AWS IAM Identity Center (AWS Single Sign-On)
- C) AWS Artifact
- D) AWS Certificate Manager

### Q57 [D3]
A company must archive financial audit records in Amazon S3 for **10 years** at the **absolute lowest storage cost**, and a 12-to-48-hour retrieval delay is acceptable. Which storage class should they select?
- A) S3 Standard-IA
- B) S3 Intelligent-Tiering
- C) S3 Glacier Instant Retrieval
- D) S3 Glacier Deep Archive

### Q58 [D4]
A company must run legacy enterprise software on EC2 under a **Bring Your Own License (BYOL)** contract that requires visibility into **physical server sockets and cores**. Which EC2 option is required?
- A) Dedicated Instances
- B) Dedicated Hosts
- C) Spot Instances
- D) Compute Savings Plans

### Q59 [D1]
Deploying stateless web servers across **multiple Availability Zones** behind an Elastic Load Balancer with Auto Scaling so the app automatically recovers from an AZ outage primarily aligns with which Well-Architected pillar?
- A) Reliability
- B) Security
- C) Sustainability
- D) Cost Optimization

### Q60 [D3]
A data engineering team wants a **serverless ETL (Extract, Transform, Load)** service and centralized Data Catalog to clean and transform raw S3 datasets before loading them into a data warehouse. Which AWS service should they use?
- A) Amazon Athena
- B) AWS Glue
- C) Amazon QuickSight
- D) Amazon Kinesis

### Q61 [D2]
Which AWS service is enabled **automatically at NO extra charge** for all AWS customers to defend against common Layer 3 and Layer 4 **DDoS attacks**?
- A) AWS WAF
- B) AWS Shield Standard
- C) AWS Shield Advanced
- D) Amazon GuardDuty

### Q62 [D3]
An engineering team wants to **trace and debug latency bottlenecks** across a distributed microservices architecture running on AWS Lambda and Amazon ECS. Which AWS developer tool provides distributed tracing?
- A) AWS CodePipeline
- B) AWS X-Ray
- C) AWS CloudShell
- D) AWS CodeBuild

### Q63 [D1]
A company wants to deploy identical VPCs, subnets, and EC2 fleets across dev, test, and production accounts in a **repeatable, automated** manner using JSON or YAML templates. Which service enables this?
- A) AWS CloudFormation
- B) AWS CloudTrail
- C) AWS Trusted Advisor
- D) AWS Control Tower only

### Q64 [D2]
An application running on an Amazon EC2 instance needs read access to an Amazon DynamoDB table. What is the **AWS security best practice** for granting these permissions?
- A) Store the AWS root user access keys in an environment variable on EC2
- B) Hardcode an IAM user's access key in the application code
- C) Attach an IAM Role with a least-privilege policy to the EC2 instance
- D) Grant public read access to the DynamoDB table

### Q65 [D3]
A company wants to register a custom domain name, resolve domain names to IP addresses, and route global traffic to the healthiest AWS Region using **managed DNS**. Which AWS service should they use?
- A) Amazon CloudFront
- B) Amazon Route 53
- C) Amazon VPC
- D) AWS Global Accelerator

---

## Answer Key & Rationales

- **Q1:** `A, C` | **Rationale:** Provisioning only what you need eliminates guessing capacity (**A**), and launching servers in minutes increases speed and agility (**C**).
- **Q2:** `B` | **Rationale:** **AWS Storage Gateway** bridges on-premises apps to AWS cloud storage (S3/Glacier) with low-latency local caching.
- **Q3:** `C` | **Rationale:** **Amazon GuardDuty** uses ML on CloudTrail, VPC Flow Logs, and DNS logs for threat detection. (Macie is for S3 PII; Inspector is for CVE scans.)
- **Q4:** `B` | **Rationale:** **Amazon Athena** runs serverless standard SQL queries directly on files stored in Amazon S3 without loading data into a warehouse.
- **Q5:** `C` | **Rationale:** **Compute Savings Plans** are the most flexible 1-3 yr commitment, automatically covering EC2 families, Regions, AWS Fargate, and AWS Lambda.
- **Q6:** `B` | **Rationale:** **Operational Excellence** covers operations as code, frequent small reversible changes, and game days.
- **Q7:** `C` | **Rationale:** **Amazon Textract** extracts printed text, handwriting, and tables from scanned PDFs and forms. (Transcribe = audio to text.)
- **Q8:** `C` | **Rationale:** Customer owns Security **IN** the Cloud: guest OS patching on EC2, Security Groups, IAM, and data.
- **Q9:** `B` | **Rationale:** **AWS Outposts** delivers physical AWS-managed hardware racks directly into your own on-premises data center.
- **Q10:** `B` | **Rationale:** **Amazon Neptune** is AWS's fully managed graph database for social networks, fraud rings, and connected relationships.
- **Q11:** `C` | **Rationale:** **AWS Business Support** is the lowest-cost plan with 24/7 phone/chat/email AND the full set of Trusted Advisor checks.
- **Q12:** `B` | **Rationale:** **Amazon Cognito** handles sign-up, sign-in, and social logins for millions of external web/mobile app end-users.
- **Q13:** `C` | **Rationale:** **EC2 Instance Store** is ephemeral local disk—data is permanently lost when the instance is stopped or terminated. (Use EBS for persistent block storage.)
- **Q14:** `A, B` | **Rationale:** Heterogeneous DB migrations (SQL Server -> PostgreSQL) pair **AWS SCT** (schema conversion) with **AWS DMS** (data migration).
- **Q15:** `B` | **Rationale:** **Amazon WorkSpaces** provides persistent cloud virtual Windows/Linux desktops. (AppStream 2.0 streams individual apps to a browser.)
- **Q16:** `B` | **Rationale:** **AWS CloudHSM** provides dedicated, single-tenant HSM hardware with exclusive customer control over keys. (KMS is multi-tenant.)
- **Q17:** `B` | **Rationale:** **Amazon Polly** converts written text into lifelike spoken audio (Text-to-Speech).
- **Q18:** `B` | **Rationale:** **Sustainability** focuses on reducing environmental impact/carbon footprint using efficient hardware like AWS Graviton and serverless.
- **Q19:** `B` | **Rationale:** **AWS CodePipeline** orchestrates end-to-end CI/CD release pipelines. (X-Ray traces microservice latency.)
- **Q20:** `B` | **Rationale:** **AWS Artifact** is the self-service portal for compliance reports (SOC, PCI, ISO) and agreements (HIPAA BAA).
- **Q21:** `B` | **Rationale:** **Amazon Connect** is AWS's cloud omnichannel contact/call center. (Lex is an AI chatbot engine.)
- **Q22:** `B` | **Rationale:** Inbound data transfer (**IN**) from the public internet into AWS is generally free ($0); outbound (**OUT**) is charged.
- **Q23:** `C` | **Rationale:** **Amazon SNS** is a pub/sub push notification service that fans out alerts to email, SMS, and Lambda simultaneously.
- **Q24:** `B` | **Rationale:** **Amazon Inspector** automates software vulnerability (CVE) and network exposure scanning for EC2, Lambda, and ECR.
- **Q25:** `B` | **Rationale:** **AWS Elastic Beanstalk** is AWS's PaaS where you upload web app code and AWS manages EC2, ELB, and Auto Scaling automatically.
- **Q26:** `B` | **Rationale:** **Performance Efficiency** principles include democratizing advanced technologies, using serverless architectures, and going global in minutes.
- **Q27:** `B` | **Rationale:** **Network ACLs (NACLs)** operate at the subnet level and support both allow and explicit deny rules. (Security Groups are allow-only.)
- **Q28:** `B` | **Rationale:** **Amazon EFS** is a serverless, elastic Linux NFS file share mountable across multiple AZs simultaneously.
- **Q29:** `C` | **Rationale:** **EC2 Spot Instances** provide up to 90% savings for fault-tolerant, interruptible workloads.
- **Q30:** `B` | **Rationale:** Closing an AWS account (and changing support plans) requires the **AWS account root user**.
- **Q31:** `C` | **Rationale:** **S3 Intelligent-Tiering** automatically optimizes storage costs for unknown/unpredictable access patterns with zero retrieval fees.
- **Q32:** `C` | **Rationale:** **Repurchase** ("Drop and Shop") replaces legacy software with a third-party SaaS subscription.
- **Q33:** `B` | **Rationale:** **AWS Global Accelerator** uses two static Anycast IPs to route TCP/UDP/HTTP traffic over the AWS private network.
- **Q34:** `B` | **Rationale:** **Amazon Macie** uses ML to discover and classify PII/sensitive data stored in Amazon S3.
- **Q35:** `C` | **Rationale:** **AWS Pricing Calculator** estimates monthly costs before deploying resources.
- **Q36:** `B` | **Rationale:** **Amazon SQS** is a managed pull-based message queue for decoupling microservices and buffering spikes.
- **Q37:** `B` | **Rationale:** **AWS Security Hub** aggregates and normalizes findings centrally from GuardDuty, Inspector, Macie, and more.
- **Q38:** `C` | **Rationale:** The **People perspective** of AWS CAF addresses workforce skills, training, culture, and change management.
- **Q39:** `B` | **Rationale:** **AWS Fargate** is the serverless compute engine for running ECS/EKS containers without managing EC2 instances.
- **Q40:** `B` | **Rationale:** **AWS WAF** is a Layer 7 Web Application Firewall that blocks SQL injection, XSS, and malicious HTTP patterns.
- **Q41:** `B` | **Rationale:** **Amazon Kinesis** ingests and processes real-time streaming data at scale.
- **Q42:** `C` | **Rationale:** **AWS Enterprise Support** includes a Dedicated TAM and a <15-minute Business-Critical Down SLA.
- **Q43:** `A` | **Rationale:** **AWS Compute Optimizer** uses ML to analyze utilization and recommend optimal instance sizes (rightsizing).
- **Q44:** `B` | **Rationale:** **NAT Gateway** allows private subnet instances outbound-only internet access while blocking unsolicited inbound traffic.
- **Q45:** `A, B` | **Rationale:** **AWS CloudTrail** tells you WHO made the API call; **AWS Config** tells you WHAT the resource configuration was before deletion.
- **Q46:** `B` | **Rationale:** **Amazon Aurora** delivers 5x MySQL / 3x PostgreSQL throughput, 6 copies across 3 AZs, and auto-scaling up to 128 TB.
- **Q47:** `B` | **Rationale:** **AWS Snowball Edge** physically transfers up to 80 TB per device offline when internet connectivity is unavailable or slow.
- **Q48:** `B` | **Rationale:** **AWS Secrets Manager** stores database credentials and supports native automatic rotation.
- **Q49:** `B` | **Rationale:** **Amazon AppStream 2.0** streams desktop applications securely into a web browser without full virtual desktops.
- **Q50:** `A, B` | **Rationale:** Consolidated billing provides one single monthly bill (**A**) and combines usage across accounts to reach volume pricing tiers faster (**B**).
- **Q51:** `C` | **Rationale:** **AWS Wavelength** embeds AWS compute and storage inside 5G telecom carrier networks.
- **Q52:** `A, C` | **Rationale:** **Patch Management**, **Configuration Management**, and Awareness & Training are shared controls between AWS and the customer.
- **Q53:** `B` | **Rationale:** **Amazon Transcribe** converts spoken audio into written text (Speech-to-Text).
- **Q54:** `B` | **Rationale:** **Replatform** ("Lift, Tinker, and Shift") moves a self-managed DB to a managed service like RDS without rewriting app code.
- **Q55:** `B` | **Rationale:** **AWS Direct Connect** provides a dedicated private physical fiber link bypassing the public internet.
- **Q56:** `B` | **Rationale:** **AWS IAM Identity Center (AWS SSO)** provides centralized workforce SSO across AWS Organizations accounts.
- **Q57:** `D` | **Rationale:** **S3 Glacier Deep Archive** is the lowest-cost S3 archival tier (12-48 hour retrieval).
- **Q58:** `B` | **Rationale:** **EC2 Dedicated Hosts** provide physical socket and core visibility required for BYOL licensing.
- **Q59:** `A` | **Rationale:** **Reliability** focuses on Multi-AZ architecture, horizontal scaling, and automatic recovery from failures.
- **Q60:** `B` | **Rationale:** **AWS Glue** is AWS's serverless ETL service and Data Catalog.
- **Q61:** `B` | **Rationale:** **AWS Shield Standard** is enabled automatically at no extra cost for L3/L4 DDoS protection.
- **Q62:** `B` | **Rationale:** **AWS X-Ray** provides distributed tracing and performance debugging across microservices.
- **Q63:** `A` | **Rationale:** **AWS CloudFormation** automates repeatable infrastructure provisioning via JSON/YAML IaC templates.
- **Q64:** `C` | **Rationale:** Attaching an **IAM Role** provides temporary, auto-rotated credentials following least privilege.
- **Q65:** `B` | **Rationale:** **Amazon Route 53** is AWS's highly available managed DNS service, domain registrar, and health-check router.
