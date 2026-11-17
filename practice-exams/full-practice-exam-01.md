# AWS Certified Cloud Practitioner (CLF-C02) Full Practice Exam 01

- **Total Questions:** 65
- **Time Allowed:** 90 minutes
- **Passing Score:** 70% (~46 / 65 correct)
- **Instructions:** Attempt to answer all questions without looking at the Answer Key. The complete answer key with detailed explanations is provided at the bottom of this file.

---

### Questions

#### Question 1 (Domain 1: Cloud Concepts)
Which of the following is a benefit of moving to the AWS Cloud that allows a company to stop guessing their infrastructure capacity needs?
A) Increased speed and agility  
B) Elasticity  
C) Trade capital expense for variable expense  
D) High availability  

---

#### Question 2 (Domain 2: Security & Compliance)
According to the AWS Shared Responsibility Model, which of the following tasks is the responsibility of the customer when running an Amazon EC2 instance?
A) Maintaining physical security of the server hardware  
B) Patching the guest operating system  
C) Decommissioning old physical storage drives  
D) Updating the virtualization hypervisor software  

---

#### Question 3 (Domain 3: Cloud Technology & Services)
A company needs to store unstructured image and video files that must be accessible over the internet via HTTP. The storage solution must have 99.999999999% (11 9's) durability. Which AWS service should they use?
A) Amazon EBS  
B) Amazon EFS  
C) Amazon S3  
D) Amazon EC2 Instance Store  

---

#### Question 4 (Domain 4: Billing, Pricing & Support)
A startup wants 24/7 phone and chat access to Cloud Support Engineers and requires a response time of less than 1 hour if their production system goes down. What is the MINIMUM AWS Support plan that meets these criteria?
A) Developer  
B) Business  
C) Enterprise On-Ramp  
D) Basic  

---

#### Question 5 (Domain 2: Security & Compliance)
Which AWS service allows customers to download AWS SOC reports, PCI-DSS compliance packages, and accept HIPAA Business Associate Addendums (BAA)?
A) AWS Security Hub  
B) AWS Config  
C) AWS Artifact  
D) Amazon Inspector  

---

#### Question 6 (Domain 3: Cloud Technology & Services)
A company wants to run Docker containers in the cloud without needing to provision, configure, or manage the underlying virtual servers. Which service should they choose?
A) Amazon EC2  
B) AWS Fargate  
C) Amazon Lightsail  
D) AWS Elastic Beanstalk  

---

#### Question 7 (Domain 1: Cloud Concepts)
Which pillar of the AWS Well-Architected Framework emphasizes the ability to run and monitor systems, continually improve processes, and deliver business value through automation like Infrastructure as Code?
A) Operational Excellence  
B) Reliability  
C) Security  
D) Performance Efficiency  

---

#### Question 8 (Domain 2: Security & Compliance)
An organization needs to protect its web application from common web exploits such as SQL injection and Cross-Site Scripting (XSS). Which AWS service provides this functionality at Layer 7?
A) AWS Shield Standard  
B) Amazon GuardDuty  
C) AWS WAF  
D) Network Access Control List (NACL)  

---

#### Question 9 (Domain 3: Cloud Technology & Services)
Which Amazon EC2 purchasing option provides the highest discount (up to 90%), but can be interrupted with a 2-minute notification when AWS needs the capacity back?
A) On-Demand Instances  
B) Reserved Instances  
C) Savings Plans  
D) Spot Instances  

---

#### Question 10 (Domain 4: Billing, Pricing & Support)
A financial analyst needs to visualize and analyze their company's historical AWS spend over the past 6 months and forecast expected costs for the upcoming quarter. Which tool should they use?
A) AWS Pricing Calculator  
B) AWS Budgets  
C) AWS Cost Explorer  
D) AWS Cost and Usage Report (CUR)  

---

#### Question 11 (Domain 2: Security & Compliance)
Which of the following describes a key difference between Security Groups and Network ACLs in an Amazon VPC?
A) Security Groups are stateless; Network ACLs are stateful  
B) Security Groups operate at the subnet level; Network ACLs operate at the instance level  
C) Security Groups support both allow and deny rules; Network ACLs only support allow rules  
D) Security Groups are stateful; Network ACLs are stateless  

---

#### Question 12 (Domain 3: Cloud Technology & Services)
A company requires a fully managed, serverless NoSQL database capable of delivering single-digit millisecond latency at any scale. Which database should be selected?
A) Amazon RDS for MySQL  
B) Amazon Redshift  
C) Amazon DynamoDB  
D) Amazon Aurora  

---

#### Question 13 (Domain 1: Cloud Concepts)
Which of the following is defined as a component of the AWS Cloud Adoption Framework (AWS CAF) Technical Capabilities? (Select TWO)
A) Business Perspective  
B) Security Perspective  
C) People Perspective  
D) Operations Perspective  
E) Governance Perspective  

---

#### Question 14 (Domain 2: Security & Compliance)
What is the primary function of AWS Key Management Service (AWS KMS)?
A) To manage user passwords for Amazon EC2 instances  
B) To create and control cryptographic keys used to encrypt data  
C) To provide dedicated hardware security modules under FIPS 140-2 Level 3  
D) To automatically rotate database login passwords  

---

#### Question 15 (Domain 3: Cloud Technology & Services)
Which AWS service uses a global network of Edge Locations to deliver static and dynamic web content to end users with low latency and high transfer speeds?
A) Amazon Route 53  
B) Amazon CloudFront  
C) AWS Direct Connect  
D) Elastic Load Balancing (ELB)  

---

#### Question 16 (Domain 3: Cloud Technology & Services)
A developer needs to decouple two microservices so that messages sent from Service A can be safely queued and processed asynchronously by Service B. Which service should they use?
A) Amazon SNS  
B) Amazon SQS  
C) AWS Step Functions  
D) Amazon EventBridge  

---

#### Question 17 (Domain 2: Security & Compliance)
Which AWS service continuously monitors CloudTrail event logs, VPC Flow Logs, and DNS query logs to identify unauthorized behavior and malicious activity using machine learning?
A) Amazon Inspector  
B) Amazon GuardDuty  
C) AWS Security Hub  
D) Amazon Detective  

---

#### Question 18 (Domain 4: Billing, Pricing & Support)
Which feature of AWS Organizations allows a company to aggregate usage across multiple AWS accounts to receive volume pricing discounts and receive a single consolidated bill?
A) Service Control Policies (SCPs)  
B) Consolidated Billing  
C) AWS Cost Allocation Tags  
D) AWS Billing Conductor  

---

#### Question 19 (Domain 3: Cloud Technology & Services)
Which AWS compute service is event-driven and allows you to run code for up to 15 minutes without managing any servers or operating systems?
A) Amazon ECS  
B) AWS Lambda  
C) Amazon EC2  
D) AWS Elastic Beanstalk  

---

#### Question 20 (Domain 1: Cloud Concepts)
Which of the following architectural best practices aligns with the Reliability pillar of the AWS Well-Architected Framework?
A) Storing all application components on a single large EC2 instance  
B) Automatically scaling horizontally to recover from infrastructure failures  
C) Disabling automated backups to save on storage costs  
D) Hardcoding database passwords inside application source code  

---

#### Question 21 (Domain 2: Security & Compliance)
Which of the following represents an IAM best practice?
A) Use the AWS root account user for daily development tasks  
B) Grant all developers full AdministratorAccess to avoid permission issues  
C) Require Multi-Factor Authentication (MFA) for the AWS root account and administrative users  
D) Store AWS secret access keys directly in public GitHub repositories  

---

#### Question 22 (Domain 3: Cloud Technology & Services)
A company needs to attach a block storage volume to an EC2 instance that runs an operating system boot disk. Which storage service must be used?
A) Amazon S3  
B) Amazon EBS  
C) Amazon EFS  
D) AWS Storage Gateway  

---

#### Question 23 (Domain 4: Billing, Pricing & Support)
A company wants to set up automated email notifications whenever their AWS monthly spending exceeds $500, or is forecasted to exceed $500. Which service provides this capability?
A) AWS Cost Explorer  
B) AWS Pricing Calculator  
C) AWS Budgets  
D) Amazon CloudWatch Billing Alarms  

---

#### Question 24 (Domain 2: Security & Compliance)
Which AWS service scans Amazon S3 buckets using machine learning to identify and protect sensitive data such as Personally Identifiable Information (PII) or credit card numbers?
A) Amazon GuardDuty  
B) Amazon Macie  
C) Amazon Inspector  
D) AWS KMS  

---

#### Question 25 (Domain 3: Cloud Technology & Services)
What is an AWS Region composed of?
A) Exactly one data center  
B) A single Availability Zone connected to the internet  
C) Three or more discrete, physically separated Availability Zones  
D) A global cluster of Edge Locations  

---

#### Question 26 (Domain 1: Cloud Concepts)
What is the term used to describe the capability to automatically expand or contract computing resources in response to changing application traffic demands?
A) Fault tolerance  
B) High availability  
C) Elasticity  
D) Agility  

---

#### Question 27 (Domain 2: Security & Compliance)
Which policy type can be applied at the Organizational Unit (OU) level in AWS Organizations to set maximum permission guardrails across member accounts?
A) IAM Managed Policy  
B) Resource-based Policy  
C) Service Control Policy (SCP)  
D) Trust Policy  

---

#### Question 28 (Domain 3: Cloud Technology & Services)
A healthcare company needs to establish a dedicated, private, physical network connection from their on-premises data center directly into AWS, bypassing the public internet. Which service should they choose?
A) AWS Site-to-Site VPN  
B) AWS Direct Connect  
C) Amazon Route 53  
D) AWS Transit Gateway  

---

#### Question 29 (Domain 3: Cloud Technology & Services)
Which relational database engine is proprietary to AWS and offers up to 5 times the throughput of standard MySQL and up to 3 times the throughput of standard PostgreSQL?
A) Amazon Redshift  
B) Amazon DynamoDB  
C) Amazon Aurora  
D) Amazon ElastiCache  

---

#### Question 30 (Domain 4: Billing, Pricing & Support)
Which AWS Support plan is the MINIMUM tier that provides access to a designated Technical Account Manager (TAM) and a 15-minute response time for business-critical system outages?
A) Developer  
B) Business  
C) Enterprise On-Ramp  
D) Enterprise  

---

#### Question 31 (Domain 2: Security & Compliance)
Which AWS service automatically scans EC2 instances, Amazon ECR container images, and AWS Lambda functions for software vulnerabilities and unintended network accessibility?
A) Amazon GuardDuty  
B) Amazon Inspector  
C) Amazon Macie  
D) AWS Secrets Manager  

---

#### Question 32 (Domain 3: Cloud Technology & Services)
A company wants to provision and manage cloud infrastructure using repeatable, declarative JSON or YAML template files. Which AWS service does this?
A) AWS CloudFormation  
B) AWS Config  
C) AWS OpsWorks  
D) AWS Systems Manager  

---

#### Question 33 (Domain 1: Cloud Concepts)
Trading capital expense (CapEx) for variable expense (OpEx) allows companies to:
A) Invest heavily in physical data center buildings upfront  
B) Pay only for the computing capacity they consume on a pay-as-you-go basis  
C) Lock into multi-year hardware maintenance contracts with hardware vendors  
D) Avoid paying for internet connectivity  

---

#### Question 34 (Domain 2: Security & Compliance)
Under the AWS Shared Responsibility Model, which of the following is considered a shared control?
A) Environmental controls of physical data centers  
B) Hypervisor virtualization maintenance  
C) Patch management  
D) Physical destruction of decommissioned hard drives  

---

#### Question 35 (Domain 3: Cloud Technology & Services)
Which Amazon S3 storage class is best suited for archiving data that is rarely accessed, allows retrieval times of 12 to 48 hours, and offers the lowest storage cost in AWS?
A) S3 Standard-IA  
B) S3 Glacier Flexible Retrieval  
C) S3 Glacier Instant Retrieval  
D) S3 Glacier Deep Archive  

---

#### Question 36 (Domain 3: Cloud Technology & Services)
A company runs a web server in a private subnet. The server needs to initiate outbound internet connections to download OS security patches, but must not accept inbound connections from the internet. Which component should be used?
A) Internet Gateway (IGW)  
B) NAT Gateway  
C) Virtual Private Gateway (VGW)  
D) Customer Gateway  

---

#### Question 37 (Domain 4: Billing, Pricing & Support)
Before building a multi-tier web application, a solutions architect wants to estimate the expected monthly AWS bill for various EC2, S3, and RDS configurations. Which tool should they use?
A) AWS Cost Explorer  
B) AWS Pricing Calculator  
C) AWS Budgets  
D) AWS Cost and Usage Report  

---

#### Question 38 (Domain 2: Security & Compliance)
Which service enables automatic rotation, management, and retrieval of database passwords and API keys throughout their lifecycle?
A) AWS Systems Manager Parameter Store  
B) AWS Secrets Manager  
C) AWS KMS  
D) IAM Credential Report  

---

#### Question 39 (Domain 3: Cloud Technology & Services)
Which AWS service acts as a distributed publish/subscribe (Pub/Sub) messaging system that can push notifications to mobile devices, email addresses, and SQS queues?
A) Amazon SQS  
B) Amazon SNS  
C) Amazon SES  
D) AWS Step Functions  

---

#### Question 40 (Domain 1: Cloud Concepts)
Which cloud computing deployment model combines an organization's existing on-premises data center with public cloud services from AWS?
A) Private Cloud  
B) Public Cloud  
C) Hybrid Cloud  
D) Multi-tenant Cloud  

---

#### Question 41 (Domain 2: Security & Compliance)
What tool can an administrator download from the AWS IAM console to review the status of passwords, access keys, and MFA tokens for every IAM user in their account?
A) AWS Trusted Advisor Security Check  
B) IAM Credential Report  
C) AWS CloudTrail Log  
D) IAM Access Analyzer  

---

#### Question 42 (Domain 3: Cloud Technology & Services)
An enterprise needs to run an in-memory data store to cache database queries and reduce read latency to microseconds. Which service should they choose?
A) Amazon Redshift  
B) Amazon DynamoDB Accelerator (DAX)  
C) Amazon ElastiCache  
D) Amazon DocumentDB  

---

#### Question 43 (Domain 4: Billing, Pricing & Support)
Which of the following is ALWAYS free in AWS across all standard regions?
A) Outbound data transfer to the internet  
B) Inbound data transfer from the internet  
C) Elastic IP addresses allocated but not attached to running instances  
D) Multi-AZ Amazon RDS instances  

---

#### Question 44 (Domain 3: Cloud Technology & Services)
A company needs shared file storage that can be mounted concurrently across hundreds of Linux Amazon EC2 instances located across multiple Availability Zones. Which storage service meets this need?
A) Amazon EBS  
B) Amazon S3  
C) Amazon EFS  
D) Amazon FSx for Windows  

---

#### Question 45 (Domain 2: Security & Compliance)
An administrator needs to know who terminated an Amazon EC2 instance yesterday and the IP address from which the API call was made. Which service provides this audit trail?
A) Amazon CloudWatch Logs  
B) AWS CloudTrail  
C) AWS Config  
D) Amazon GuardDuty  

---

#### Question 46 (Domain 1: Cloud Concepts)
Which of the following represents a strategy for designing cloud architectures for failure?
A) Deploying all web instances into a single Availability Zone  
B) Deploying application components across multiple Availability Zones with auto-scaling  
C) Using tight coupling between software tiers  
D) Storing all application state in server memory  

---

#### Question 47 (Domain 3: Cloud Technology & Services)
Which AWS database service is specifically designed for Online Analytical Processing (OLAP), petabyte-scale data warehousing, and business intelligence reporting?
A) Amazon RDS  
B) Amazon Aurora  
C) Amazon Redshift  
D) Amazon Neptune  

---

#### Question 48 (Domain 2: Security & Compliance)
Which of the following security mechanisms operates at the AWS instance level and is stateful?
A) Network Access Control List (NACL)  
B) Security Group  
C) Route Table  
D) Internet Gateway  

---

#### Question 49 (Domain 3: Cloud Technology & Services)
A startup wants to quickly launch a simple WordPress blog on a virtual private server with predictable pricing, bundled memory, vCPU, and SSD storage. Which AWS service is the simplest choice?
A) Amazon EC2  
B) Amazon Lightsail  
C) AWS Elastic Beanstalk  
D) Amazon ECS  

---

#### Question 50 (Domain 4: Billing, Pricing & Support)
What are the three categories of the AWS Free Tier? (Select THREE)
A) Always Free  
B) 12 Months Free  
C) Lifetime Free  
D) Short-Term Trials  
E) Pay-As-You-Go Free  

---

#### Question 51 (Domain 2: Security & Compliance)
Which AWS service provides centralized governance and compliance auditing by tracking configuration history and evaluating whether resources conform to specific rules (e.g., checking if unencrypted EBS volumes exist)?
A) AWS CloudTrail  
B) AWS Config  
C) Amazon CloudWatch  
D) AWS Trusted Advisor  

---

#### Question 52 (Domain 3: Cloud Technology & Services)
A company has 60 TB of on-premises data that needs to be transferred into Amazon S3 over a limited network connection. Which physical appliance from the AWS Snow Family is best suited for this task?
A) AWS Snowcone  
B) AWS Snowball Edge Storage Optimized  
C) AWS Snowmobile  
D) AWS Storage Gateway  

---

#### Question 53 (Domain 1: Cloud Concepts)
Which pillar of the AWS Well-Architected Framework focuses on minimizing environmental impact and maximizing resource utilization to reduce energy consumption?
A) Cost Optimization  
B) Operational Excellence  
C) Sustainability  
D) Reliability  

---

#### Question 54 (Domain 2: Security & Compliance)
Which AWS service provides managed Distributed Denial of Service (DDoS) protection at Layers 3 and 4 at no additional cost for all AWS customers?
A) AWS WAF  
B) AWS Shield Standard  
C) AWS Shield Advanced  
D) Amazon GuardDuty  

---

#### Question 55 (Domain 3: Cloud Technology & Services)
What feature of Amazon RDS provides automated synchronous database replication to a secondary instance in a different Availability Zone to deliver high availability and disaster recovery?
A) Read Replicas  
B) Multi-AZ Deployments  
C) Amazon Aurora Global Database  
D) Database Migration Service (DMS)  

---

#### Question 56 (Domain 4: Billing, Pricing & Support)
What AWS service provides automated recommendations across 5 pillars: Cost Optimization, Security, Fault Tolerance, Performance, and Service Limits?
A) AWS Inspector  
B) AWS Trusted Advisor  
C) AWS Compute Optimizer  
D) AWS Cost Explorer  

---

#### Question 57 (Domain 3: Cloud Technology & Services)
Which DNS service from AWS translates friendly domain names like `example.com` into numeric IP addresses and supports health-check based traffic routing?
A) Amazon CloudFront  
B) AWS Direct Connect  
C) Amazon Route 53  
D) Elastic Load Balancing  

---

#### Question 58 (Domain 2: Security & Compliance)
What IAM entity should be attached to an Amazon EC2 instance so the application running on the instance can securely access an Amazon S3 bucket without embedding permanent credentials in the application code?
A) IAM User  
B) IAM Group  
C) IAM Role  
D) IAM Access Key  

---

#### Question 59 (Domain 1: Cloud Concepts)
Which of the following migration strategies (the 7 Rs) describes moving an application to the AWS Cloud without making any code changes (also known as "lift and shift")?
A) Replatform  
B) Rehost  
C) Refactor  
D) Repurchase  

---

#### Question 60 (Domain 3: Cloud Technology & Services)
Which service provides an interactive visual workflow to coordinate multiple distributed microservices and AWS Lambda functions into sequential, branching, or parallel steps?
A) Amazon SQS  
B) Amazon SNS  
C) AWS Step Functions  
D) AWS EventBridge  

---

#### Question 61 (Domain 2: Security & Compliance)
A company must meet strict regulatory compliance requiring a dedicated, single-tenant hardware security module (HSM) that is physically isolated inside AWS data centers with FIPS 140-2 Level 3 validation. Which service should they choose?
A) AWS KMS  
B) AWS Secrets Manager  
C) AWS CloudHSM  
D) AWS Shield Advanced  

---

#### Question 62 (Domain 3: Cloud Technology & Services)
Which type of Elastic Load Balancer operates at Layer 4 and is optimized for ultra-high throughput and ultra-low latency handling millions of requests per second?
A) Application Load Balancer (ALB)  
B) Network Load Balancer (NLB)  
C) Classic Load Balancer (CLB)  
D) Gateway Load Balancer (GWLB)  

---

#### Question 63 (Domain 4: Billing, Pricing & Support)
Under the AWS Business Support plan, what is the target response time for an urgent case where a production system is down?
A) < 15 minutes  
B) < 30 minutes  
C) < 1 hour  
D) < 4 hours  

---

#### Question 64 (Domain 2: Security & Compliance)
What is the purpose of AWS Identity and Access Management (IAM) Access Analyzer?
A) To scan code repositories for hardcoded AWS secret keys  
B) To identify resources (such as S3 buckets) that are shared with external entities outside your trusted organization  
C) To test whether user passwords meet minimum length and complexity criteria  
D) To analyze database query performance  

---

#### Question 65 (Domain 3: Cloud Technology & Services)
Which service allows you to deploy and run AWS compute, storage, and database services directly inside your physical on-premises data center for a truly consistent hybrid cloud experience?
A) AWS Snowball  
B) AWS Outposts  
C) AWS Local Zones  
D) AWS Wavelength  

---

# 📝 Comprehensive Answer Key & Explanations

| # | Correct Answer | Domain | Detailed Explanation |
| :---: | :---: | :---: | :--- |
| **1** | **B** | Cloud Concepts | **Elasticity** allows infrastructure to automatically scale up or down based on current demand, eliminating the need to guess capacity in advance. |
| **2** | **B** | Security | Under the Shared Responsibility Model, the customer is responsible for everything inside the guest OS on EC2, including OS security updates and patches. |
| **3** | **C** | Technology | **Amazon S3** is an object storage service accessed over HTTP with built-in 99.999999999% (11 9's) durability. |
| **4** | **B** | Billing & Support | The **Business Support Plan** is the minimum tier offering 24/7 phone/chat/email access and a < 1 hour SLA for production system down cases. |
| **5** | **C** | Security | **AWS Artifact** is the self-service portal to download compliance documents (SOC, PCI) and sign security agreements (like HIPAA BAA). |
| **6** | **B** | Technology | **AWS Fargate** is the serverless compute engine for containers (ECS & EKS) that removes the need to manage EC2 instances. |
| **7** | **A** | Cloud Concepts | **Operational Excellence** focuses on running systems, releasing small reversible changes as code (IaC), and learning from operational failures. |
| **8** | **C** | Security | **AWS WAF** is a Layer 7 web application firewall that inspects HTTP/HTTPS requests to block SQL injection and Cross-Site Scripting (XSS). |
| **9** | **D** | Technology | **Spot Instances** offer spare capacity at up to 90% discount, but can be terminated with a 2-minute notice if AWS needs the capacity. |
| **10** | **C** | Billing & Support | **AWS Cost Explorer** is designed to visualize historical spending and forecast future costs up to 12 months in advance. |
| **11** | **D** | Security | Security Groups are **stateful** (inbound return traffic automatically allowed) and at the instance level. NACLs are **stateless** and at the subnet level. |
| **12** | **C** | Technology | **Amazon DynamoDB** is a serverless NoSQL key-value and document database providing single-digit millisecond latency at any scale. |
| **13** | **B, D** | Cloud Concepts | The AWS CAF technical perspectives are **Platform, Security, and Operations**. Business, People, and Governance are business perspectives. |
| **14** | **B** | Security | **AWS KMS** creates and manages cryptographic encryption keys across AWS services. |
| **15** | **B** | Technology | **Amazon CloudFront** is the AWS Content Delivery Network (CDN) that caches content at global Edge Locations. |
| **16** | **B** | Technology | **Amazon SQS** provides message queues to decouple microservices using an asynchronous pull model. |
| **17** | **B** | Security | **Amazon GuardDuty** uses machine learning to detect threats by analyzing CloudTrail, VPC Flow Logs, and DNS logs. |
| **18** | **B** | Billing & Support | **Consolidated Billing** aggregates usage across all member accounts in an organization for volume tiered discounts with a single invoice. |
| **19** | **B** | Technology | **AWS Lambda** is a serverless compute service that executes event-driven code for up to 15 minutes without managing servers. |
| **20** | **B** | Cloud Concepts | The **Reliability** pillar stresses recovering automatically from failure by distributing workloads and scaling horizontally across multiple AZs. |
| **21** | **C** | Security | Enabling **Multi-Factor Authentication (MFA)** on root and admin accounts is a primary IAM security best practice. |
| **22** | **B** | Technology | **Amazon EBS** provides block storage volumes designed to serve as primary boot and data volumes for EC2 instances. |
| **23** | **C** | Billing & Support | **AWS Budgets** allows users to set custom spend thresholds and receive alerts when costs or usage exceed (or are forecasted to exceed) limits. |
| **24** | **B** | Security | **Amazon Macie** discovers and classifies sensitive personal data (PII) stored in Amazon S3 buckets using machine learning. |
| **25** | **C** | Technology | An AWS Region consists of **three or more** isolated, physically separated Availability Zones (AZs) connected by high-speed networks. |
| **26** | **C** | Cloud Concepts | **Elasticity** is the ability to acquire resources as needed and release them when no longer required to match fluctuating demand. |
| **27** | **C** | Security | **Service Control Policies (SCPs)** enforce permission boundaries across accounts and OUs in AWS Organizations. |
| **28** | **B** | Technology | **AWS Direct Connect** establishes a dedicated, private physical fiber optic line from an on-prem facility to AWS, bypassing the public internet. |
| **29** | **C** | Technology | **Amazon Aurora** is AWS's high-performance cloud-native MySQL- and PostgreSQL-compatible relational database. |
| **30** | **D** | Billing & Support | Only the **Enterprise Support Plan** provides a dedicated Technical Account Manager (TAM) and a 15-minute response time SLA. |
| **31** | **B** | Security | **Amazon Inspector** is an automated vulnerability management tool scanning EC2 instances, ECR container images, and Lambda functions. |
| **32** | **A** | Technology | **AWS CloudFormation** provides Infrastructure as Code (IaC) using declarative JSON or YAML templates. |
| **33** | **B** | Cloud Concepts | Trading CapEx for OpEx replaces upfront capital investments in physical hardware with flexible, variable pay-as-you-go costs. |
| **34** | **C** | Security | **Patch management** is a shared control: AWS patches the physical hardware and managed services OS, while the customer patches the EC2 guest OS. |
| **35** | **D** | Technology | **S3 Glacier Deep Archive** is the lowest-cost storage class in AWS, designed for long-term retention where retrieval in 12–48 hours is acceptable. |
| **36** | **B** | Technology | A **NAT Gateway** in a public subnet allows private subnet resources to reach the internet outbound without exposing them to inbound internet traffic. |
| **37** | **B** | Billing & Support | **AWS Pricing Calculator** is used to model architectures and estimate monthly costs *before* provisioning resources. |
| **38** | **B** | Security | **AWS Secrets Manager** stores and automatically rotates secrets, database credentials, and API keys. |
| **39** | **B** | Technology | **Amazon SNS** is a push-based Publish/Subscribe messaging service that fans out notifications to subscribers. |
| **40** | **C** | Cloud Concepts | A **Hybrid Cloud** model connects on-premises data centers with resources deployed in the public cloud. |
| **41** | **B** | Security | The **IAM Credential Report** lists all account users and the status of their passwords, access keys, and MFA devices in a CSV format. |
| **42** | **C** | Technology | **Amazon ElastiCache** provides in-memory Redis or Memcached caching to deliver sub-millisecond query responses. |
| **43** | **B** | Billing & Support | **Inbound data transfer** from the internet into AWS is always free of charge. |
| **44** | **C** | Technology | **Amazon EFS** is a managed, multi-AZ network file system (NFS) that can be concurrently mounted on hundreds of Linux EC2 instances. |
| **45** | **B** | Security | **AWS CloudTrail** logs every API call and user action across the account, answering who did what, when, and from where. |
| **46** | **B** | Cloud Concepts | Deploying across multiple Availability Zones with auto-scaling ensures the system automatically survives the failure of an entire data center. |
| **47** | **C** | Technology | **Amazon Redshift** is AWS's fully managed, petabyte-scale data warehouse built for OLAP and business intelligence analytics. |
| **48** | **B** | Security | **Security Groups** operate at the virtual network interface (instance level) and are stateful. |
| **49** | **B** | Technology | **Amazon Lightsail** is the easiest way to launch a virtual private server with bundled compute, storage, and networking at a simple monthly price. |
| **50** | **A, B, D**| Billing & Support | The three AWS Free Tier categories are **Always Free**, **12 Months Free**, and **Short-Term Trials**. |
| **51** | **B** | Security | **AWS Config** tracks resource configuration changes over time and audits them against desired compliance policies. |
| **52** | **B** | Technology | **AWS Snowball Edge Storage Optimized** provides 80 TB of capacity, ideal for moving 60 TB of data physically without internet saturation. |
| **53** | **C** | Cloud Concepts | The **Sustainability** pillar focuses on minimizing environmental impacts, reducing carbon emissions, and optimizing energy consumption. |
| **54** | **B** | Security | **AWS Shield Standard** provides automatic, free Layer 3/4 DDoS protection for all AWS accounts. |
| **55** | **B** | Technology | **Multi-AZ Deployments** create a synchronous standby replica in a second AZ for automatic failover and high availability. |
| **56** | **B** | Billing & Support | **AWS Trusted Advisor** provides automated inspection and recommendations across Cost, Performance, Security, Fault Tolerance, and Service Limits. |
| **57** | **C** | Technology | **Amazon Route 53** is AWS's cloud DNS service with health checking and domain registration. |
| **58** | **C** | Security | An **IAM Role** grants temporary credentials to AWS services like EC2 instances without requiring hardcoded access keys. |
| **59** | **B** | Cloud Concepts | **Rehost** ("lift and shift") moves applications to AWS without modifying the underlying architecture or code. |
| **60** | **C** | Technology | **AWS Step Functions** provides visual workflow orchestration for microservices and serverless functions using state machines. |
| **61** | **C** | Security | **AWS CloudHSM** is a dedicated, single-tenant hardware security module providing dedicated FIPS 140-2 Level 3 hardware. |
| **62** | **B** | Technology | **Network Load Balancers (NLB)** operate at Layer 4 (TCP/UDP) and are optimized for extreme throughput and ultra-low latency. |
| **63** | **C** | Billing & Support | Under the **Business Support** plan, the SLA for a production system down is **< 1 hour**. |
| **64** | **B** | Security | **IAM Access Analyzer** identifies resources shared outside an AWS organization or account to help ensure least privilege. |
| **65** | **B** | Technology | **AWS Outposts** brings native AWS hardware, services, and APIs directly to your on-premises data center. |
