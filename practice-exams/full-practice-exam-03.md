# AWS Certified Cloud Practitioner (CLF-C02) — Full Practice Exam 03

> **Questions:** 65 | **Time Limit:** 90 Minutes | **Passing Score:** 700 / 1,000 (~70% / 46+ correct)  
> **Domain Weighting:** Domain 1 (15 Qs — 23%) | Domain 2 (19 Qs — 29%) | Domain 3 (23 Qs — 35%) | Domain 4 (8 Qs — 12%)  
> **Focus:** Fresh scenario variations covering all 4 CLF-C02 domains, edge-case traps, and final readiness verification.

---

## Questions

### Q1 [D1]
A global retailer wants to expand into Europe and Asia within a week without building or leasing overseas data centers. Which advantage of AWS Cloud computing directly enables this?
- A) Trade fixed expense for variable expense
- B) Go global in minutes
- C) Benefit from massive economies of scale
- D) Stop guessing capacity

### Q2 [D3]
A financial trading platform needs **single-digit millisecond latency** for users in Chicago—a major metro area without a full AWS Region—by running EC2 instances closer to end users in an AWS-managed metro facility. Which offering fits BEST?
- A) AWS Outposts
- B) AWS Local Zones
- C) AWS Wavelength
- D) AWS Direct Connect

### Q3 [D2]
A company moves its database from a self-managed MySQL instance on Amazon EC2 to **Amazon DynamoDB**. Under the AWS Shared Responsibility Model, which responsibility remains with the **customer**?
- A) Patching the underlying database host operating system
- B) Managing physical storage hardware redundancy
- C) Managing IAM access policies and classifying customer data
- D) Maintaining data center power and cooling

### Q4 [D3]
A retail business wants to build interactive **business intelligence (BI) dashboards** and visual charts from sales data stored in Amazon S3 and Amazon Redshift, paying only per session without managing BI servers. Which service should they use?
- A) Amazon Athena
- B) AWS Glue
- C) Amazon QuickSight
- D) Amazon OpenSearch Service

### Q5 [D4]
A finance manager wants an **automated email alert** whenever the company's monthly AWS spend is forecasted to exceed $10,000. Which AWS billing service should they configure?
- A) AWS Pricing Calculator
- B) AWS Cost Explorer
- C) AWS Budgets
- D) AWS Billing Conductor

### Q6 [D2]
Which AWS service inspects your AWS account and gives real-time recommendations across **Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits**?
- A) AWS Trusted Advisor
- B) Amazon GuardDuty
- C) AWS CloudTrail
- D) AWS Artifact

### Q7 [D3]
A company wants to host a **static website** (HTML, CSS, JavaScript, and images) with 99.999999999% (11 nines) durability and global edge caching at the lowest cost. Which **TWO** services should they pair? *(Choose TWO)*
- A) Amazon S3
- B) Amazon CloudFront
- C) Amazon EBS
- D) Amazon RDS
- E) AWS Direct Connect

### Q8 [D1]
A company has 50 legacy virtual machines running on-premises and must vacate its data center in 45 days. To migrate as quickly as possible with minimal changes, they move the VMs **as-is** to Amazon EC2 using AWS Application Migration Service. Which **7 Rs** strategy is this?
- A) Rehost
- B) Replatform
- C) Refactor
- D) Repurchase

### Q9 [D3]
A retail website needs a **serverless, event-driven** way to automatically generate image thumbnails whenever a user uploads a photo to Amazon S3—paying only for the milliseconds of execution time. Which compute service fits BEST?
- A) Amazon EC2
- B) AWS Lambda
- C) AWS Elastic Beanstalk
- D) Amazon Lightsail

### Q10 [D2]
Which AWS service provisions, manages, and **automatically renews public SSL/TLS certificates** at no additional charge to encrypt HTTPS traffic on an Application Load Balancer or CloudFront distribution?
- A) AWS KMS
- B) AWS Secrets Manager
- C) AWS Certificate Manager (ACM)
- D) AWS CloudHSM

### Q11 [D3]
A healthcare company wants to analyze thousands of doctor notes in plain text to detect **patient sentiment, key medical phrases, and language** using Natural Language Processing (NLP). Which AWS AI/ML service should they use?
- A) Amazon Textract
- B) Amazon Comprehend
- C) Amazon Rekognition
- D) Amazon Kendra

### Q12 [D4]
A company needs **Infrastructure Event Management (IEM)** included for an upcoming major launch, a **Concierge Support Team**, and access to a **pooled team of Technical Account Managers (TAMs)** at a lower price than full Enterprise Support. Which support plan fits?
- A) AWS Developer Support
- B) AWS Business Support
- C) AWS Enterprise On-Ramp Support
- D) AWS Enterprise Support

### Q13 [D1]
Which **AWS Cloud Adoption Framework (AWS CAF)** perspective focuses on aligning cloud investments with digital transformation goals and tracking measurable **business value**?
- A) Operations perspective
- B) Business perspective
- C) Security perspective
- D) Platform perspective

### Q14 [D3]
A media startup needs a **fully managed NoSQL key-value database** that delivers consistent single-digit millisecond latency at any scale for storing user shopping carts and session state. Which service should they choose?
- A) Amazon RDS
- B) Amazon DynamoDB
- C) Amazon Neptune
- D) Amazon Redshift

### Q15 [D2]
Which **TWO** actions follow AWS best practices for securing the **AWS account root user**? *(Choose TWO)*
- A) Enable Multi-Factor Authentication (MFA) on the root user
- B) Generate root user access keys for CI/CD pipelines
- C) Do not use the root user for daily tasks; create IAM users/roles instead
- D) Share the root password among all cloud administrators
- E) Disable AWS CloudTrail in unused Regions

### Q16 [D3]
A company runs Windows-based applications on Amazon EC2 that require a fully managed, native **Windows SMB shared file system** integrated with Active Directory. Which AWS storage service is purpose-built for this?
- A) Amazon EFS
- B) Amazon FSx for Windows File Server
- C) Amazon EBS
- D) EC2 Instance Store

### Q17 [D4]
A company wants to visualize its **past 12 months of AWS spending**, identify cost spikes by service, and forecast next quarter's spend. Which tool should they open?
- A) AWS Pricing Calculator
- B) AWS Cost Explorer
- C) AWS Service Catalog
- D) AWS License Manager

### Q18 [D2]
A security analyst receives a high-severity Amazon GuardDuty alert and wants to **visually investigate the root cause** using graph-based analysis of logs across IAM users and EC2 instances. Which AWS service is purpose-built for security root-cause investigation?
- A) Amazon Detective
- B) Amazon Inspector
- C) AWS Artifact
- D) AWS Shield

### Q19 [D3]
A company wants to build an **enterprise search engine** powered by machine learning so employees can ask natural-language questions across internal SharePoint sites, S3 documents, and wikis. Which AWS AI/ML service is designed for intelligent enterprise search?
- A) Amazon Lex
- B) Amazon Kendra
- C) Amazon Comprehend
- D) Amazon SageMaker

### Q20 [D1]
Which pillar of the AWS Well-Architected Framework focuses on **Cloud Financial Management**, adopting a consumption model, and analyzing/attributing expenditure to deliver business value at the lowest price?
- A) Sustainability
- B) Cost Optimization
- C) Operational Excellence
- D) Performance Efficiency

### Q21 [D3]
A company wants to orchestrate a **multi-step serverless checkout workflow** (validate inventory -> charge card -> send receipt -> refund on failure) using visual state machines. Which AWS application integration service should they use?
- A) Amazon SQS
- B) Amazon SNS
- C) AWS Step Functions
- D) Amazon SES

### Q22 [D2]
A company wants to **continuously collect automated compliance evidence** mapped to HIPAA and PCI DSS controls to simplify its annual external audit. Which AWS service automates compliance evidence collection?
- A) AWS Artifact
- B) AWS Audit Manager
- C) AWS Shield
- D) Amazon Macie

### Q23 [D3]
A data science team needs a **fully managed platform to build, train, and deploy custom machine learning models** from scratch using Jupyter notebooks. Which AWS service should they use?
- A) Amazon Rekognition
- B) Amazon SageMaker
- C) Amazon Kendra
- D) Amazon Polly

### Q24 [D4]
A company wants to break down its monthly AWS bill by **Environment (`Prod`, `Dev`) and Cost Center** inside Cost Explorer and the Cost and Usage Report. Which feature must they enable?
- A) AWS Cost Allocation Tags
- B) AWS Resource Access Manager
- C) AWS Compute Optimizer
- D) AWS Trusted Advisor

### Q25 [D3]
A company needs to quickly establish an **encrypted network tunnel** from its branch office to its Amazon VPC **over the public internet** within a few hours at low cost. Which connectivity option should they choose?
- A) AWS Direct Connect
- B) AWS Site-to-Site VPN
- C) AWS Snowball Edge
- D) Amazon CloudFront

### Q26 [D2]
A company discovers that an EC2 instance belonging to another AWS customer is running a port scan against their public servers. Who should they contact to report suspected abuse of AWS resources?
- A) AWS Trust and Safety (Abuse) team
- B) AWS Concierge Support Team
- C) AWS Marketplace Support
- D) AWS Professional Services

### Q27 [D3]
A company runs a high-traffic web application that needs **persistent block storage** attached to an EC2 instance so database files survive instance stops and restarts. Which storage service should they attach?
- A) EC2 Instance Store
- B) Amazon EBS
- C) Amazon S3 Glacier
- D) AWS Storage Gateway

### Q28 [D1]
A company wants to deploy its application in two different AWS Regions—`us-east-1` and `eu-central-1`—to satisfy European data residency laws and provide disaster recovery. Which **TWO** benefits of multi-Region deployments does this achieve? *(Choose TWO)*
- A) Data sovereignty / compliance
- B) Business continuity and disaster recovery
- C) Zero data transfer charges between Regions
- D) Automatic shared Instance Store volumes
- E) Elimination of IAM policies

### Q29 [D3]
A mobile app team wants to build a **conversational AI chatbot** for customer support that understands both voice and text inputs (using the same engine that powers Alexa). Which AWS AI/ML service should they use?
- A) Amazon Connect
- B) Amazon Lex
- C) Amazon Polly
- D) Amazon Translate

### Q30 [D2]
How does an **Amazon VPC Security Group** evaluate return traffic for an allowed inbound HTTP request?
- A) Return traffic must be explicitly allowed in an outbound rule because Security Groups are stateless
- B) Return traffic is automatically allowed because Security Groups are stateful
- C) Return traffic is blocked unless a Network ACL allows it by default
- D) Security Groups only filter outbound traffic

### Q31 [D3]
A company needs a **centralized backup service** to automate and govern backup policies across Amazon EBS, Amazon RDS, Amazon DynamoDB, and Amazon EFS from one console. Which AWS service should they use?
- A) AWS Storage Gateway
- B) AWS Backup
- C) AWS Snow Family
- D) Amazon S3 Lifecycle Policies

### Q32 [D4]
A startup wants to hire an **AWS-certified third-party freelancer** for a 2-week architecture review and pay for the work through its existing AWS bill. Which AWS service connects customers with certified freelancers?
- A) AWS Managed Services (AMS)
- B) AWS IQ
- C) AWS Professional Services
- D) AWS Activate

### Q33 [D3]
A developer needs a **browser-based, pre-authenticated terminal** inside the AWS Management Console to run quick AWS CLI commands without installing anything locally. Which tool should they open?
- A) AWS Cloud9
- B) AWS CloudShell
- C) AWS CodeBuild
- D) AWS AppConfig

### Q34 [D2]
A company wants to centrally manage and enforce **AWS WAF rules and AWS Shield Advanced protections** across 50 AWS accounts in AWS Organizations. Which security service manages firewall rules across multiple accounts?
- A) AWS Firewall Manager
- B) Amazon GuardDuty
- C) AWS Secrets Manager
- D) Amazon Inspector

### Q35 [D1]
A company redesigns a monolithic on-premises ERP application into cloud-native microservices using AWS Lambda, Amazon API Gateway, and Amazon DynamoDB to maximize agility and scalability. Which **7 Rs** migration strategy is this?
- A) Rehost
- B) Replatform
- C) Refactor (Re-architect)
- D) Retain

### Q36 [D3]
A company needs to send millions of **transactional order-confirmation emails and marketing newsletters** reliably at low cost. Which AWS business application service is built for bulk/transactional email?
- A) Amazon SNS
- B) Amazon Simple Email Service (Amazon SES)
- C) Amazon SQS
- D) Amazon Connect

### Q37 [D2]
Which AWS service allows a company to **centrally control permissions and apply Service Control Policies (SCPs)** as security guardrails across all AWS accounts in a multi-account environment?
- A) AWS IAM Identity Center
- B) AWS Organizations
- C) AWS Artifact
- D) Amazon Cognito

### Q38 [D3]
A retail analytics team needs a **petabyte-scale cloud data warehouse** to run complex SQL joins and historical business intelligence queries across 5 years of structured transaction data. Which service is purpose-built for this?
- A) Amazon DynamoDB
- B) Amazon Redshift
- C) Amazon Athena
- D) Amazon MemoryDB for Redis

### Q39 [D4]
Which AWS billing dataset provides the **most comprehensive, granular line-item breakdown** of hourly AWS resource usage and pricing, delivered directly to an Amazon S3 bucket?
- A) AWS Budgets
- B) AWS Cost Explorer
- C) AWS Cost and Usage Report (CUR)
- D) AWS Pricing Calculator

### Q40 [D3]
A gaming company needs a **Redis-compatible, durable in-memory database** delivering microsecond read latency and single-digit millisecond write latency for real-time player leaderboards. Which service fits BEST?
- A) Amazon RDS
- B) Amazon MemoryDB for Redis
- C) Amazon Neptune
- D) Amazon S3

### Q41 [D1]
Which statement accurately describes **Availability Zones (AZs)** within an AWS Region?
- A) Availability Zones are physically isolated data centers with independent power and networking so they do not share single points of failure
- B) Each AWS Region contains exactly one Availability Zone
- C) Availability Zones are located on different continents to minimize latency
- D) Availability Zones are identical to CloudFront Edge Locations

### Q42 [D2]
A company wants to encrypt data **at rest** in Amazon EBS, Amazon RDS, and Amazon S3 using centrally managed cryptographic keys integrated natively across AWS services (multi-tenant HSMs). Which service should they use?
- A) AWS Key Management Service (AWS KMS)
- B) AWS CloudHSM
- C) AWS Certificate Manager (ACM)
- D) AWS WAF

### Q43 [D3]
A web development team wants a fast way to **build, host, and deploy a full-stack web and mobile frontend** (with CI/CD hosting, auth, and API integration) without manually configuring infrastructure. Which AWS service is designed for this?
- A) AWS Amplify
- B) AWS Batch
- C) Amazon Lightsail
- D) AWS Outposts

### Q44 [D2]
A security team wants to ensure that **every AWS API call** made across their accounts is logged for auditing and compliance, and also wants to **monitor CPU and memory metrics** with automated alarms. Which **TWO** services should they use? *(Choose TWO)*
- A) AWS CloudTrail
- B) Amazon CloudWatch
- C) AWS Artifact
- D) AWS Shield
- E) Amazon Macie

### Q45 [D3]
A company runs a fleet of 10,000 factory floor sensors that need to securely connect and publish MQTT telemetry to AWS, **plus** run local ML inference on an edge gateway when internet connectivity drops. Which **TWO** AWS IoT services fit? *(Choose TWO)*
- A) AWS IoT Core
- B) AWS IoT Greengrass
- C) AWS Snowmobile
- D) Amazon Kinesis only
- E) AWS Direct Connect

### Q46 [D1]
A company wants to track the progress of multiple simultaneous server and database migrations from a **single centralized dashboard** in the AWS Console. Which service provides this?
- A) AWS Migration Hub
- B) AWS Control Tower
- C) AWS Trusted Advisor
- D) AWS Service Catalog

### Q47 [D3]
A security-conscious company wants to store **Docker container images** privately on AWS so Amazon ECS and AWS Fargate can pull them securely during deployments. Which service is AWS's managed container image registry?
- A) Amazon ECS
- B) Amazon EKS
- C) Amazon Elastic Container Registry (Amazon ECR)
- D) AWS CodeArtifact

### Q48 [D4]
A company wants to reserve EC2 capacity for a steady-state 24/7 database server running a **fixed instance family in one specific Region for 3 years** to maximize its discount. Which purchasing option applies?
- A) Spot Instances
- B) Standard Reserved Instances
- C) On-Demand Instances
- D) Dedicated Instances only

### Q49 [D3]
A social media app wants to automatically **detect inappropriate content, faces, and objects** in millions of user-uploaded photos and videos. Which AWS AI/ML service should they use?
- A) Amazon Textract
- B) Amazon Rekognition
- C) Amazon Comprehend
- D) Amazon Transcribe

### Q50 [D2]
Which AWS service allows you to **share AWS resources** (such as VPC subnets, Transit Gateways, or License Manager configs) securely across multiple AWS accounts without duplicating them?
- A) AWS Resource Access Manager (AWS RAM)
- B) AWS Artifact
- C) AWS Secrets Manager
- D) AWS Security Hub

### Q51 [D3]
A company wants a **serverless event bus** that routes events from AWS services, custom apps, and third-party SaaS partners (like Zendesk or Datadog) to downstream targets using pattern-matching rules. Which service should they use?
- A) Amazon EventBridge
- B) Amazon SQS
- C) Amazon SES
- D) AWS CodeDeploy

### Q52 [D1]
Which of the following is an example of **undifferentiated heavy lifting** that AWS removes when a company adopts managed cloud services?
- A) Designing proprietary customer-facing mobile app features
- B) Racking, cabling, cooling, and replacing failed physical server hardware
- C) Defining business pricing and marketing campaigns
- D) Choosing which customer data requires encryption

### Q53 [D3]
A global e-commerce store wants to **translate product descriptions** from English into 15 languages automatically in real time. Which AWS AI/ML service should they use?
- A) Amazon Polly
- B) Amazon Translate
- C) Amazon Transcribe
- D) Amazon Comprehend

### Q54 [D2]
A company wants to purchase and deploy a **vetted third-party virtual firewall appliance** from Palo Alto Networks with billing consolidated directly onto its AWS invoice. Where should they find and subscribe to it?
- A) AWS Artifact
- B) AWS Marketplace
- C) AWS Service Catalog
- D) AWS Knowledge Center

### Q55 [D3]
A startup wants a **simple, all-in-one virtual private server (VPS)** with a predictable flat monthly bundle price (compute + SSD + static IP + DNS) to host a small WordPress blog. Which AWS compute service is designed for this?
- A) Amazon Lightsail
- B) AWS Batch
- C) Amazon EKS
- D) AWS Outposts

### Q56 [D1]
What is the difference between **High Availability** and **Elasticity** in AWS?
- A) High Availability keeps systems operational during failures (e.g., Multi-AZ); Elasticity automatically scales resources up and down to match demand
- B) High Availability reduces monthly costs; Elasticity encrypts data at rest
- C) High Availability is only for S3; Elasticity is only for RDS
- D) They are identical terms for deploying in multiple Regions

### Q57 [D3]
A company wants to **automatically transition** Amazon S3 objects to S3 Standard-IA after 30 days, move them to S3 Glacier Deep Archive after 180 days, and **expire/delete** them after 7 years. Which S3 feature automates this?
- A) S3 Replication
- B) S3 Lifecycle Policies
- C) S3 Versioning
- D) S3 Access Points

### Q58 [D2]
Which AWS service provides a **managed Kubernetes** control plane so teams can run standard Kubernetes workloads on AWS without managing master nodes?
- A) Amazon ECS
- B) Amazon EKS
- C) AWS Elastic Beanstalk
- D) AWS Lambda

### Q59 [D4]
A managed service provider (MSP) resells AWS environments to multiple clients and wants to **customize billing rates, hide internal discounts, and create custom pro-forma bills** per client group. Which AWS Cost Management service enables this?
- A) AWS Billing Conductor
- B) AWS Pricing Calculator
- C) AWS Budgets
- D) AWS Cost Explorer

### Q60 [D3]
A company wants a **single front door** to create, publish, throttle, monitor, and secure REST and WebSocket APIs backed by AWS Lambda functions. Which AWS networking service should they use?
- A) Amazon Route 53
- B) Amazon API Gateway
- C) AWS Direct Connect
- D) AWS Global Accelerator

### Q61 [D1]
A company wants to run a workload on AWS using **existing Windows Server licenses** on Dedicated Hosts versus paying AWS for **License Included** instances. Which Domain 1 cloud economics concept does this compare?
- A) Rightsizing
- B) Licensing strategies (BYOL vs. License Included)
- C) Economies of scale
- D) Horizontal scaling

### Q62 [D2]
An administrator wants to **patch 300 Amazon EC2 instances** across Windows and Linux fleets on a scheduled maintenance window and securely open remote shell sessions without opening SSH port 22. Which AWS management service provides Patch Manager and Session Manager?
- A) AWS Systems Manager
- B) AWS CloudFormation
- C) AWS Trusted Advisor
- D) AWS Config

### Q63 [D3]
A company needs to run massive **Apache Hadoop and Apache Spark** big data processing clusters on AWS with managed provisioning and scaling. Which AWS analytics service should they use?
- A) Amazon Athena
- B) Amazon EMR
- C) Amazon QuickSight
- D) Amazon Kinesis

### Q64 [D1]
Which official AWS resource provides **community-driven Q&A forums** where AWS experts, partners, and customers answer technical questions?
- A) AWS re:Post
- B) AWS Artifact
- C) AWS Security Hub
- D) AWS CloudTrail

### Q65 [D3]
A company wants to set up a **multi-account AWS landing zone** quickly with pre-configured security guardrails, centralized logging, and an Account Factory following AWS best practices. Which governance service automates this?
- A) AWS Control Tower
- B) AWS Launch Wizard
- C) AWS CloudShell
- D) AWS AppSync

---

## Answer Key & Rationales

- **Q1:** `B` | **Rationale:** **Go global in minutes** lets you deploy workloads into AWS Regions worldwide without building overseas data centers.
- **Q2:** `B` | **Rationale:** **AWS Local Zones** place AWS compute/storage in major metro cities for single-digit ms latency. (Outposts = your own building.)
- **Q3:** `C` | **Rationale:** Even with serverless/managed DynamoDB, the customer always owns **IAM access policies and customer data classification**.
- **Q4:** `C` | **Rationale:** **Amazon QuickSight** is AWS's serverless BI dashboard and data visualization service.
- **Q5:** `C` | **Rationale:** **AWS Budgets** sets cost/usage thresholds and sends automated email/SNS alerts when actual or forecasted spend exceeds limits.
- **Q6:** `A` | **Rationale:** **AWS Trusted Advisor** provides real-time best-practice checks across those exact 5 categories.
- **Q7:** `A, B` | **Rationale:** **Amazon S3** hosts static files with 11 nines durability, and **Amazon CloudFront** caches them globally at Edge Locations.
- **Q8:** `A` | **Rationale:** **Rehost** ("Lift and Shift") is the fastest strategy, moving VMs as-is with minimal changes.
- **Q9:** `B` | **Rationale:** **AWS Lambda** runs event-driven serverless functions triggered by S3 uploads, billed per request and millisecond.
- **Q10:** `C` | **Rationale:** **AWS Certificate Manager (ACM)** provisions and auto-renews public SSL/TLS certificates for free.
- **Q11:** `B` | **Rationale:** **Amazon Comprehend** is AWS's Natural Language Processing (NLP) service for sentiment, entities, and key phrases.
- **Q12:** `C` | **Rationale:** **AWS Enterprise On-Ramp** includes Pooled TAMs, Concierge Support, and 1 IEM/year at a lower cost than full Enterprise.
- **Q13:** `B` | **Rationale:** The **Business perspective** of AWS CAF aligns IT investments with business outcomes and value.
- **Q14:** `B` | **Rationale:** **Amazon DynamoDB** is AWS's fully managed serverless NoSQL key-value/document database.
- **Q15:** `A, C` | **Rationale:** Always enable **MFA** on root (**A**) and avoid using root for daily tasks (**C**); never create root access keys.
- **Q16:** `B` | **Rationale:** **Amazon FSx for Windows File Server** provides native Windows SMB file shares with Active Directory integration. (EFS = Linux NFS.)
- **Q17:** `B` | **Rationale:** **AWS Cost Explorer** visualizes historical spending trends and forecasts up to 12 months ahead.
- **Q18:** `A` | **Rationale:** **Amazon Detective** uses graph analysis to investigate the root cause of security findings.
- **Q19:** `B` | **Rationale:** **Amazon Kendra** is AWS's ML-powered intelligent enterprise search service.
- **Q20:** `B` | **Rationale:** **Cost Optimization** covers Cloud Financial Management, consumption models, and attributing expenditure.
- **Q21:** `C` | **Rationale:** **AWS Step Functions** orchestrates multi-step serverless workflows using visual state machines.
- **Q22:** `B` | **Rationale:** **AWS Audit Manager** continuously audits AWS usage and collects automated compliance evidence.
- **Q23:** `B` | **Rationale:** **Amazon SageMaker** is AWS's end-to-end platform to build, train, and deploy custom ML models.
- **Q24:** `A` | **Rationale:** **AWS Cost Allocation Tags** label resources to group and track costs by department/environment in billing reports.
- **Q25:** `B` | **Rationale:** **AWS Site-to-Site VPN** establishes a fast, low-cost encrypted tunnel over the public internet.
- **Q26:** `A` | **Rationale:** Report suspected abuse of AWS resources to the **AWS Trust and Safety (Abuse) team**.
- **Q27:** `B` | **Rationale:** **Amazon EBS** provides persistent block storage that survives EC2 stops and restarts. (Instance Store is ephemeral.)
- **Q28:** `A, B` | **Rationale:** Multi-Region deployments provide **data sovereignty/compliance** (**A**) and **disaster recovery/business continuity** (**B**).
- **Q29:** `B` | **Rationale:** **Amazon Lex** builds conversational voice and text AI chatbots (the engine behind Alexa).
- **Q30:** `B` | **Rationale:** Security Groups are **stateful**, meaning return traffic for an allowed request is automatically permitted.
- **Q31:** `B` | **Rationale:** **AWS Backup** centralizes and automates backup policies across EBS, RDS, DynamoDB, EFS, and more.
- **Q32:** `B` | **Rationale:** **AWS IQ** connects customers with AWS-certified third-party freelancers billed via AWS.
- **Q33:** `B` | **Rationale:** **AWS CloudShell** is a browser-based, pre-authenticated shell inside the AWS Console.
- **Q34:** `A` | **Rationale:** **AWS Firewall Manager** centrally configures and manages WAF and Shield rules across AWS Organizations accounts.
- **Q35:** `C` | **Rationale:** **Refactor (Re-architect)** redesigns an application using cloud-native/serverless architectures.
- **Q36:** `B` | **Rationale:** **Amazon SES** is built for high-volume transactional and marketing email delivery.
- **Q37:** `B` | **Rationale:** **AWS Organizations** centrally manages multiple accounts and enforces guardrails using Service Control Policies (SCPs).
- **Q38:** `B` | **Rationale:** **Amazon Redshift** is AWS's petabyte-scale cloud data warehouse for complex OLAP/BI analytics.
- **Q39:** `C` | **Rationale:** **AWS Cost and Usage Report (CUR)** delivers the most comprehensive, granular line-item billing files to S3.
- **Q40:** `B` | **Rationale:** **Amazon MemoryDB for Redis** is a durable, Redis-compatible in-memory database with microsecond reads.
- **Q41:** `A` | **Rationale:** Availability Zones are physically isolated data centers with independent power/networking to eliminate single points of failure.
- **Q42:** `A` | **Rationale:** **AWS KMS** manages encryption keys integrated natively across AWS services using multi-tenant HSMs.
- **Q43:** `A` | **Rationale:** **AWS Amplify** accelerates building, hosting, and deploying full-stack web and mobile apps.
- **Q44:** `A, B` | **Rationale:** **AWS CloudTrail** logs API calls for auditing (**A**); **Amazon CloudWatch** monitors metrics and triggers alarms (**B**).
- **Q45:** `A, B` | **Rationale:** **AWS IoT Core** connects IoT devices to AWS (**A**); **AWS IoT Greengrass** runs local compute/ML on edge gateways (**B**).
- **Q46:** `A` | **Rationale:** **AWS Migration Hub** provides a single dashboard to track migration progress across tools.
- **Q47:** `C` | **Rationale:** **Amazon ECR** is AWS's managed private Docker container image registry.
- **Q48:** `B` | **Rationale:** **Standard Reserved Instances** offer maximum RI savings for steady-state, fixed-family, single-Region 1- or 3-year workloads.
- **Q49:** `B` | **Rationale:** **Amazon Rekognition** analyzes images and videos for objects, faces, and content moderation.
- **Q50:** `A` | **Rationale:** **AWS Resource Access Manager (RAM)** securely shares AWS resources across accounts without duplication.
- **Q51:** `A` | **Rationale:** **Amazon EventBridge** is a serverless event bus routing events from AWS, custom apps, and SaaS partners.
- **Q52:** `B` | **Rationale:** Racking, cabling, cooling, and hardware replacement are "undifferentiated heavy lifting" handled by AWS.
- **Q53:** `B` | **Rationale:** **Amazon Translate** provides fast, neural machine language translation.
- **Q54:** `B` | **Rationale:** **AWS Marketplace** is the curated digital catalog for third-party software billed directly to your AWS account.
- **Q55:** `A` | **Rationale:** **Amazon Lightsail** offers simple, predictable flat-rate VPS bundles for small websites and apps.
- **Q56:** `A` | **Rationale:** **High Availability** = staying online during failures (Multi-AZ); **Elasticity** = automatically scaling up/down with demand.
- **Q57:** `B` | **Rationale:** **S3 Lifecycle Policies** automate transitioning objects to cheaper storage tiers and expiring old objects.
- **Q58:** `B` | **Rationale:** **Amazon EKS** is AWS's managed Kubernetes service. (ECS is AWS's native container orchestrator.)
- **Q59:** `A` | **Rationale:** **AWS Billing Conductor** lets organizations and MSPs customize billing rates and pro-forma chargeback views.
- **Q60:** `B` | **Rationale:** **Amazon API Gateway** is the managed front door for creating, throttling, and securing REST/WebSocket APIs.
- **Q61:** `B` | **Rationale:** Comparing Bring Your Own License (BYOL) on Dedicated Hosts vs. License Included instances is evaluating **licensing strategies**.
- **Q62:** `A` | **Rationale:** **AWS Systems Manager** includes Patch Manager (fleet OS patching) and Session Manager (portless secure shell access).
- **Q63:** `B` | **Rationale:** **Amazon EMR** runs managed Apache Hadoop and Apache Spark big data clusters.
- **Q64:** `A` | **Rationale:** **AWS re:Post** is AWS's official community-driven Q&A forum.
- **Q65:** `A` | **Rationale:** **AWS Control Tower** automates setting up a secure, multi-account AWS landing zone with guardrails and Account Factory.
