// AWS Certified Cloud Practitioner (CLF-C02) Practice Exam Question Bank
export const examQuestions = [
  {
    id: 1,
    domain: "Cloud Concepts",
    domainId: 1,
    question: "Which of the following is a benefit of moving to the AWS Cloud that allows a company to stop guessing their infrastructure capacity needs?",
    options: [
      "Increased speed and agility",
      "Elasticity",
      "Trade capital expense for variable expense",
      "High availability"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Elasticity allows infrastructure to automatically scale up or down based on current demand, eliminating the need to guess capacity in advance."
  },
  {
    id: 2,
    domain: "Security and Compliance",
    domainId: 2,
    question: "According to the AWS Shared Responsibility Model, which of the following tasks is the responsibility of the customer when running an Amazon EC2 instance?",
    options: [
      "Maintaining physical security of the server hardware",
      "Patching the guest operating system",
      "Decommissioning old physical storage drives",
      "Updating the virtualization hypervisor software"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Under the Shared Responsibility Model, the customer is responsible for everything inside the guest OS on EC2, including OS security updates and patches."
  },
  {
    id: 3,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "A company needs to store unstructured image and video files that must be accessible over the internet via HTTP. The storage solution must have 99.999999999% (11 9's) durability. Which AWS service should they use?",
    options: [
      "Amazon EBS",
      "Amazon EFS",
      "Amazon S3",
      "Amazon EC2 Instance Store"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "Amazon S3 is an object storage service accessed over HTTP with built-in 99.999999999% (11 9's) durability."
  },
  {
    id: 4,
    domain: "Billing, Pricing, and Support",
    domainId: 4,
    question: "A startup wants 24/7 phone and chat access to Cloud Support Engineers and requires a response time of less than 1 hour if their production system goes down. What is the MINIMUM AWS Support plan that meets these criteria?",
    options: [
      "Developer",
      "Business",
      "Enterprise On-Ramp",
      "Basic"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "The Business Support Plan is the minimum tier offering 24/7 phone/chat/email access and a < 1 hour SLA for production system down cases."
  },
  {
    id: 5,
    domain: "Security and Compliance",
    domainId: 2,
    question: "Which AWS service allows customers to download AWS SOC reports, PCI-DSS compliance packages, and accept HIPAA Business Associate Addendums (BAA)?",
    options: [
      "AWS Security Hub",
      "AWS Config",
      "AWS Artifact",
      "Amazon Inspector"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "AWS Artifact is the self-service portal to download compliance documents (SOC, PCI) and sign security agreements (like HIPAA BAA)."
  },
  {
    id: 6,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "A company wants to run Docker containers in the cloud without needing to provision, configure, or manage the underlying virtual servers. Which service should they choose?",
    options: [
      "Amazon EC2",
      "AWS Fargate",
      "Amazon Lightsail",
      "AWS Elastic Beanstalk"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "AWS Fargate is the serverless compute engine for containers (ECS & EKS) that removes the need to manage EC2 instances."
  },
  {
    id: 7,
    domain: "Cloud Concepts",
    domainId: 1,
    question: "Which pillar of the AWS Well-Architected Framework emphasizes the ability to run and monitor systems, continually improve processes, and deliver business value through automation like Infrastructure as Code?",
    options: [
      "Operational Excellence",
      "Reliability",
      "Security",
      "Performance Efficiency"
    ],
    answer: 0, // A
    isMulti: false,
    explanation: "Operational Excellence focuses on running systems, releasing small reversible changes as code (IaC), and learning from operational failures."
  },
  {
    id: 8,
    domain: "Security and Compliance",
    domainId: 2,
    question: "An organization needs to protect its web application from common web exploits such as SQL injection and Cross-Site Scripting (XSS). Which AWS service provides this functionality at Layer 7?",
    options: [
      "AWS Shield Standard",
      "Amazon GuardDuty",
      "AWS WAF",
      "Network Access Control List (NACL)"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "AWS WAF is a Layer 7 web application firewall that inspects HTTP/HTTPS requests to block SQL injection and Cross-Site Scripting (XSS)."
  },
  {
    id: 9,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "Which Amazon EC2 purchasing option provides the highest discount (up to 90%), but can be interrupted with a 2-minute notification when AWS needs the capacity back?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Savings Plans",
      "Spot Instances"
    ],
    answer: 3, // D
    isMulti: false,
    explanation: "Spot Instances offer spare capacity at up to 90% discount, but can be terminated with a 2-minute notice if AWS needs the capacity."
  },
  {
    id: 10,
    domain: "Billing, Pricing, and Support",
    domainId: 4,
    question: "A financial analyst needs to visualize and analyze their company's historical AWS spend over the past 6 months and forecast expected costs for the upcoming quarter. Which tool should they use?",
    options: [
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Cost and Usage Report (CUR)"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "AWS Cost Explorer is designed to visualize historical spending and forecast future costs up to 12 months in advance."
  },
  {
    id: 11,
    domain: "Security and Compliance",
    domainId: 2,
    question: "Which of the following describes a key difference between Security Groups and Network ACLs in an Amazon VPC?",
    options: [
      "Security Groups are stateless; Network ACLs are stateful",
      "Security Groups operate at the subnet level; Network ACLs operate at the instance level",
      "Security Groups support both allow and deny rules; Network ACLs only support allow rules",
      "Security Groups are stateful; Network ACLs are stateless"
    ],
    answer: 3, // D
    isMulti: false,
    explanation: "Security Groups are stateful (inbound return traffic automatically allowed) and at the instance level. Network ACLs are stateless and at the subnet level."
  },
  {
    id: 12,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "A company requires a fully managed, serverless NoSQL database capable of delivering single-digit millisecond latency at any scale. Which database should be selected?",
    options: [
      "Amazon RDS for MySQL",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Aurora"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "Amazon DynamoDB is a serverless NoSQL key-value and document database providing single-digit millisecond latency at any scale."
  },
  {
    id: 13,
    domain: "Cloud Concepts",
    domainId: 1,
    question: "Which of the following is defined as a component of the AWS Cloud Adoption Framework (AWS CAF) Technical Capabilities? (Select TWO)",
    options: [
      "Business Perspective",
      "Security Perspective",
      "People Perspective",
      "Operations Perspective",
      "Governance Perspective"
    ],
    answer: [1, 3], // B, D
    isMulti: true,
    explanation: "The AWS CAF technical perspectives are Platform, Security, and Operations. Business, People, and Governance are business perspectives."
  },
  {
    id: 14,
    domain: "Security and Compliance",
    domainId: 2,
    question: "What is the primary function of AWS Key Management Service (AWS KMS)?",
    options: [
      "To manage user passwords for Amazon EC2 instances",
      "To create and control cryptographic keys used to encrypt data",
      "To provide dedicated hardware security modules under FIPS 140-2 Level 3",
      "To automatically rotate database login passwords"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "AWS KMS creates and manages cryptographic encryption keys across AWS services."
  },
  {
    id: 15,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "Which AWS service uses a global network of Edge Locations to deliver static and dynamic web content to end users with low latency and high transfer speeds?",
    options: [
      "Amazon Route 53",
      "Amazon CloudFront",
      "AWS Direct Connect",
      "Elastic Load Balancing (ELB)"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Amazon CloudFront is the AWS Content Delivery Network (CDN) that caches content at global Edge Locations."
  },
  {
    id: 16,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "A developer needs to decouple two microservices so that messages sent from Service A can be safely queued and processed asynchronously by Service B. Which service should they use?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "AWS Step Functions",
      "Amazon EventBridge"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Amazon SQS provides message queues to decouple microservices using an asynchronous pull model."
  },
  {
    id: 17,
    domain: "Security and Compliance",
    domainId: 2,
    question: "Which AWS service continuously monitors CloudTrail event logs, VPC Flow Logs, and DNS query logs to identify unauthorized behavior and malicious activity using machine learning?",
    options: [
      "Amazon Inspector",
      "Amazon GuardDuty",
      "AWS Security Hub",
      "Amazon Detective"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Amazon GuardDuty uses machine learning to detect threats by analyzing CloudTrail, VPC Flow Logs, and DNS logs."
  },
  {
    id: 18,
    domain: "Billing, Pricing, and Support",
    domainId: 4,
    question: "Which feature of AWS Organizations allows a company to aggregate usage across multiple AWS accounts to receive volume pricing discounts and receive a single consolidated bill?",
    options: [
      "Service Control Policies (SCPs)",
      "Consolidated Billing",
      "AWS Cost Allocation Tags",
      "AWS Billing Conductor"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Consolidated Billing aggregates usage across all member accounts in an organization for volume tiered discounts with a single invoice."
  },
  {
    id: 19,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "Which AWS compute service is event-driven and allows you to run code for up to 15 minutes without managing any servers or operating systems?",
    options: [
      "Amazon ECS",
      "AWS Lambda",
      "Amazon EC2",
      "AWS Elastic Beanstalk"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "AWS Lambda is a serverless compute service that executes event-driven code for up to 15 minutes without managing servers."
  },
  {
    id: 20,
    domain: "Cloud Concepts",
    domainId: 1,
    question: "Which of the following architectural best practices aligns with the Reliability pillar of the AWS Well-Architected Framework?",
    options: [
      "Storing all application components on a single large EC2 instance",
      "Automatically scaling horizontally to recover from infrastructure failures",
      "Disabling automated backups to save on storage costs",
      "Hardcoding database passwords inside application source code"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "The Reliability pillar stresses recovering automatically from failure by distributing workloads and scaling horizontally across multiple AZs."
  },
  {
    id: 21,
    domain: "Security and Compliance",
    domainId: 2,
    question: "Which of the following represents an IAM best practice?",
    options: [
      "Use the AWS root account user for daily development tasks",
      "Grant all developers full AdministratorAccess to avoid permission issues",
      "Require Multi-Factor Authentication (MFA) for the AWS root account and administrative users",
      "Store AWS secret access keys directly in public GitHub repositories"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "Enabling Multi-Factor Authentication (MFA) on root and admin accounts is a primary IAM security best practice."
  },
  {
    id: 22,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "A company needs to attach a block storage volume to an EC2 instance that runs an operating system boot disk. Which storage service must be used?",
    options: [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "AWS Storage Gateway"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Amazon EBS provides block storage volumes designed to serve as primary boot and data volumes for EC2 instances."
  },
  {
    id: 23,
    domain: "Billing, Pricing, and Support",
    domainId: 4,
    question: "A company wants to set up automated email notifications whenever their AWS monthly spending exceeds $500, or is forecasted to exceed $500. Which service provides this capability?",
    options: [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "Amazon CloudWatch Billing Alarms"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "AWS Budgets allows users to set custom spend thresholds and receive alerts when costs or usage exceed (or are forecasted to exceed) limits."
  },
  {
    id: 24,
    domain: "Security and Compliance",
    domainId: 2,
    question: "Which AWS service scans Amazon S3 buckets using machine learning to identify and protect sensitive data such as Personally Identifiable Information (PII) or credit card numbers?",
    options: [
      "Amazon GuardDuty",
      "Amazon Macie",
      "Amazon Inspector",
      "AWS KMS"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Amazon Macie discovers and classifies sensitive personal data (PII) stored in Amazon S3 buckets using machine learning."
  },
  {
    id: 25,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "What is an AWS Region composed of?",
    options: [
      "Exactly one data center",
      "A single Availability Zone connected to the internet",
      "Three or more discrete, physically separated Availability Zones",
      "A global cluster of Edge Locations"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "An AWS Region consists of three or more isolated, physically separated Availability Zones (AZs) connected by high-speed networks."
  },
  {
    id: 26,
    domain: "Cloud Concepts",
    domainId: 1,
    question: "What is the term used to describe the capability to automatically expand or contract computing resources in response to changing application traffic demands?",
    options: [
      "Fault tolerance",
      "High availability",
      "Elasticity",
      "Agility"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "Elasticity is the ability to acquire resources as needed and release them when no longer required to match fluctuating demand."
  },
  {
    id: 27,
    domain: "Security and Compliance",
    domainId: 2,
    question: "Which policy type can be applied at the Organizational Unit (OU) level in AWS Organizations to set maximum permission guardrails across member accounts?",
    options: [
      "IAM Managed Policy",
      "Resource-based Policy",
      "Service Control Policy (SCP)",
      "Trust Policy"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "Service Control Policies (SCPs) enforce permission boundaries across accounts and OUs in AWS Organizations."
  },
  {
    id: 28,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "A healthcare company needs to establish a dedicated, private, physical network connection from their on-premises data center directly into AWS, bypassing the public internet. Which service should they choose?",
    options: [
      "AWS Site-to-Site VPN",
      "AWS Direct Connect",
      "Amazon Route 53",
      "AWS Transit Gateway"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "AWS Direct Connect establishes a dedicated, private physical fiber optic line from an on-prem facility to AWS, bypassing the public internet."
  },
  {
    id: 29,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "Which relational database engine is proprietary to AWS and offers up to 5 times the throughput of standard MySQL and up to 3 times the throughput of standard PostgreSQL?",
    options: [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon ElastiCache"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "Amazon Aurora is AWS's high-performance cloud-native MySQL- and PostgreSQL-compatible relational database."
  },
  {
    id: 30,
    domain: "Billing, Pricing, and Support",
    domainId: 4,
    question: "Which AWS Support plan is the MINIMUM tier that provides access to a designated Technical Account Manager (TAM) and a 15-minute response time for business-critical system outages?",
    options: [
      "Developer",
      "Business",
      "Enterprise On-Ramp",
      "Enterprise"
    ],
    answer: 3, // D
    isMulti: false,
    explanation: "Only the Enterprise Support Plan provides a dedicated Technical Account Manager (TAM) and a 15-minute response time SLA."
  },
  {
    id: 31,
    domain: "Security and Compliance",
    domainId: 2,
    question: "Which AWS service automatically scans EC2 instances, Amazon ECR container images, and AWS Lambda functions for software vulnerabilities and unintended network accessibility?",
    options: [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "Amazon Macie",
      "AWS Secrets Manager"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Amazon Inspector is an automated vulnerability management tool scanning EC2 instances, ECR container images, and Lambda functions."
  },
  {
    id: 32,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "A company wants to provision and manage cloud infrastructure using repeatable, declarative JSON or YAML template files. Which AWS service does this?",
    options: [
      "AWS CloudFormation",
      "AWS Config",
      "AWS OpsWorks",
      "AWS Systems Manager"
    ],
    answer: 0, // A
    isMulti: false,
    explanation: "AWS CloudFormation provides Infrastructure as Code (IaC) using declarative JSON or YAML templates."
  },
  {
    id: 33,
    domain: "Cloud Concepts",
    domainId: 1,
    question: "Trading capital expense (CapEx) for variable expense (OpEx) allows companies to:",
    options: [
      "Invest heavily in physical data center buildings upfront",
      "Pay only for the computing capacity they consume on a pay-as-you-go basis",
      "Lock into multi-year hardware maintenance contracts with hardware vendors",
      "Avoid paying for internet connectivity"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Trading CapEx for OpEx replaces upfront capital investments in physical hardware with flexible, variable pay-as-you-go costs."
  },
  {
    id: 34,
    domain: "Security and Compliance",
    domainId: 2,
    question: "Under the AWS Shared Responsibility Model, which of the following is considered a shared control?",
    options: [
      "Environmental controls of physical data centers",
      "Hypervisor virtualization maintenance",
      "Patch management",
      "Physical destruction of decommissioned hard drives"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "Patch management is a shared control: AWS patches the physical hardware and managed services OS, while the customer patches the EC2 guest OS."
  },
  {
    id: 35,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "Which Amazon S3 storage class is best suited for archiving data that is rarely accessed, allows retrieval times of 12 to 48 hours, and offers the lowest storage cost in AWS?",
    options: [
      "S3 Standard-IA",
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Instant Retrieval",
      "S3 Glacier Deep Archive"
    ],
    answer: 3, // D
    isMulti: false,
    explanation: "S3 Glacier Deep Archive is the lowest-cost storage class in AWS, designed for long-term retention where retrieval in 12–48 hours is acceptable."
  },
  {
    id: 36,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "A company runs a web server in a private subnet. The server needs to initiate outbound internet connections to download OS security patches, but must not accept inbound connections from the internet. Which component should be used?",
    options: [
      "Internet Gateway (IGW)",
      "NAT Gateway",
      "Virtual Private Gateway (VGW)",
      "Customer Gateway"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "A NAT Gateway in a public subnet allows private subnet resources to reach the internet outbound without exposing them to inbound internet traffic."
  },
  {
    id: 37,
    domain: "Billing, Pricing, and Support",
    domainId: 4,
    question: "Before building a multi-tier web application, a solutions architect wants to estimate the expected monthly AWS bill for various EC2, S3, and RDS configurations. Which tool should they use?",
    options: [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Cost and Usage Report"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "AWS Pricing Calculator is used to model architectures and estimate monthly costs before provisioning resources."
  },
  {
    id: 38,
    domain: "Security and Compliance",
    domainId: 2,
    question: "Which service enables automatic rotation, management, and retrieval of database passwords and API keys throughout their lifecycle?",
    options: [
      "AWS Systems Manager Parameter Store",
      "AWS Secrets Manager",
      "AWS KMS",
      "IAM Credential Report"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "AWS Secrets Manager stores and automatically rotates secrets, database credentials, and API keys."
  },
  {
    id: 39,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "Which AWS service acts as a distributed publish/subscribe (Pub/Sub) messaging system that can push notifications to mobile devices, email addresses, and SQS queues?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon SES",
      "AWS Step Functions"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Amazon SNS is a push-based Publish/Subscribe messaging service that fans out notifications to subscribers."
  },
  {
    id: 40,
    domain: "Cloud Concepts",
    domainId: 1,
    question: "Which cloud computing deployment model combines an organization's existing on-premises data center with public cloud services from AWS?",
    options: [
      "Private Cloud",
      "Public Cloud",
      "Hybrid Cloud",
      "Multi-tenant Cloud"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "A Hybrid Cloud model connects on-premises data centers with resources deployed in the public cloud."
  },
  {
    id: 41,
    domain: "Security and Compliance",
    domainId: 2,
    question: "What tool can an administrator download from the AWS IAM console to review the status of passwords, access keys, and MFA tokens for every IAM user in their account?",
    options: [
      "AWS Trusted Advisor Security Check",
      "IAM Credential Report",
      "AWS CloudTrail Log",
      "IAM Access Analyzer"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "The IAM Credential Report lists all account users and the status of their passwords, access keys, and MFA devices in a CSV format."
  },
  {
    id: 42,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "An enterprise needs to run an in-memory data store to cache database queries and reduce read latency to microseconds. Which service should they choose?",
    options: [
      "Amazon Redshift",
      "Amazon DynamoDB Accelerator (DAX)",
      "Amazon ElastiCache",
      "Amazon DocumentDB"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "Amazon ElastiCache provides in-memory Redis or Memcached caching to deliver sub-millisecond query responses."
  },
  {
    id: 43,
    domain: "Billing, Pricing, and Support",
    domainId: 4,
    question: "Which of the following is ALWAYS free in AWS across all standard regions?",
    options: [
      "Outbound data transfer to the internet",
      "Inbound data transfer from the internet",
      "Elastic IP addresses allocated but not attached to running instances",
      "Multi-AZ Amazon RDS instances"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Inbound data transfer from the internet into AWS is always free of charge."
  },
  {
    id: 44,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "A company needs shared file storage that can be mounted concurrently across hundreds of Linux Amazon EC2 instances located across multiple Availability Zones. Which storage service meets this need?",
    options: [
      "Amazon EBS",
      "Amazon S3",
      "Amazon EFS",
      "Amazon FSx for Windows"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "Amazon EFS is a managed, multi-AZ network file system (NFS) that can be concurrently mounted on hundreds of Linux EC2 instances."
  },
  {
    id: 45,
    domain: "Security and Compliance",
    domainId: 2,
    question: "An administrator needs to know who terminated an Amazon EC2 instance yesterday and the IP address from which the API call was made. Which service provides this audit trail?",
    options: [
      "Amazon CloudWatch Logs",
      "AWS CloudTrail",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "AWS CloudTrail logs every API call and user action across the account, answering who did what, when, and from where."
  },
  {
    id: 46,
    domain: "Cloud Concepts",
    domainId: 1,
    question: "Which of the following represents a strategy for designing cloud architectures for failure?",
    options: [
      "Deploying all web instances into a single Availability Zone",
      "Deploying application components across multiple Availability Zones with auto-scaling",
      "Using tight coupling between software tiers",
      "Storing all application state in server memory"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Deploying across multiple Availability Zones with auto-scaling ensures the system automatically survives the failure of an entire data center."
  },
  {
    id: 47,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "Which AWS database service is specifically designed for Online Analytical Processing (OLAP), petabyte-scale data warehousing, and business intelligence reporting?",
    options: [
      "Amazon RDS",
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon Neptune"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "Amazon Redshift is AWS's fully managed, petabyte-scale data warehouse built for OLAP and business intelligence analytics."
  },
  {
    id: 48,
    domain: "Security and Compliance",
    domainId: 2,
    question: "Which of the following security mechanisms operates at the AWS instance level and is stateful?",
    options: [
      "Network Access Control List (NACL)",
      "Security Group",
      "Route Table",
      "Internet Gateway"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Security Groups operate at the virtual network interface (instance level) and are stateful."
  },
  {
    id: 49,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "A startup wants to quickly launch a simple WordPress blog on a virtual private server with predictable pricing, bundled memory, vCPU, and SSD storage. Which AWS service is the simplest choice?",
    options: [
      "Amazon EC2",
      "Amazon Lightsail",
      "AWS Elastic Beanstalk",
      "Amazon ECS"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Amazon Lightsail is the easiest way to launch a virtual private server with bundled compute, storage, and networking at a simple monthly price."
  },
  {
    id: 50,
    domain: "Billing, Pricing, and Support",
    domainId: 4,
    question: "What are the three categories of the AWS Free Tier? (Select THREE)",
    options: [
      "Always Free",
      "12 Months Free",
      "Lifetime Free",
      "Short-Term Trials",
      "Pay-As-You-Go Free"
    ],
    answer: [0, 1, 3], // A, B, D
    isMulti: true,
    explanation: "The three AWS Free Tier categories are Always Free, 12 Months Free, and Short-Term Trials."
  },
  {
    id: 51,
    domain: "Security and Compliance",
    domainId: 2,
    question: "Which AWS service provides centralized governance and compliance auditing by tracking configuration history and evaluating whether resources conform to specific rules (e.g., checking if unencrypted EBS volumes exist)?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "Amazon CloudWatch",
      "AWS Trusted Advisor"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "AWS Config tracks resource configuration changes over time and audits them against desired compliance policies."
  },
  {
    id: 52,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "A company has 60 TB of on-premises data that needs to be transferred into Amazon S3 over a limited network connection. Which physical appliance from the AWS Snow Family is best suited for this task?",
    options: [
      "AWS Snowcone",
      "AWS Snowball Edge Storage Optimized",
      "AWS Snowmobile",
      "AWS Storage Gateway"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "AWS Snowball Edge Storage Optimized provides 80 TB of capacity, ideal for moving 60 TB of data physically without internet saturation."
  },
  {
    id: 53,
    domain: "Cloud Concepts",
    domainId: 1,
    question: "Which pillar of the AWS Well-Architected Framework focuses on minimizing environmental impact and maximizing resource utilization to reduce energy consumption?",
    options: [
      "Cost Optimization",
      "Operational Excellence",
      "Sustainability",
      "Reliability"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "The Sustainability pillar focuses on minimizing environmental impacts, reducing carbon emissions, and optimizing energy consumption."
  },
  {
    id: 54,
    domain: "Security and Compliance",
    domainId: 2,
    question: "Which AWS service provides managed Distributed Denial of Service (DDoS) protection at Layers 3 and 4 at no additional cost for all AWS customers?",
    options: [
      "AWS WAF",
      "AWS Shield Standard",
      "AWS Shield Advanced",
      "Amazon GuardDuty"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "AWS Shield Standard provides automatic, free Layer 3/4 DDoS protection for all AWS accounts."
  },
  {
    id: 55,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "What feature of Amazon RDS provides automated synchronous database replication to a secondary instance in a different Availability Zone to deliver high availability and disaster recovery?",
    options: [
      "Read Replicas",
      "Multi-AZ Deployments",
      "Amazon Aurora Global Database",
      "Database Migration Service (DMS)"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Multi-AZ Deployments create a synchronous standby replica in a second AZ for automatic failover and high availability."
  },
  {
    id: 56,
    domain: "Billing, Pricing, and Support",
    domainId: 4,
    question: "What AWS service provides automated recommendations across 5 pillars: Cost Optimization, Security, Fault Tolerance, Performance, and Service Limits?",
    options: [
      "AWS Inspector",
      "AWS Trusted Advisor",
      "AWS Compute Optimizer",
      "AWS Cost Explorer"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "AWS Trusted Advisor provides automated inspection and recommendations across Cost, Performance, Security, Fault Tolerance, and Service Limits."
  },
  {
    id: 57,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "Which DNS service from AWS translates friendly domain names like example.com into numeric IP addresses and supports health-check based traffic routing?",
    options: [
      "Amazon CloudFront",
      "AWS Direct Connect",
      "Amazon Route 53",
      "Elastic Load Balancing"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "Amazon Route 53 is AWS's cloud DNS service with health checking and domain registration."
  },
  {
    id: 58,
    domain: "Security and Compliance",
    domainId: 2,
    question: "What IAM entity should be attached to an Amazon EC2 instance so the application running on the instance can securely access an Amazon S3 bucket without embedding permanent credentials in the application code?",
    options: [
      "IAM User",
      "IAM Group",
      "IAM Role",
      "IAM Access Key"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "An IAM Role grants temporary credentials to AWS services like EC2 instances without requiring hardcoded access keys."
  },
  {
    id: 59,
    domain: "Cloud Concepts",
    domainId: 1,
    question: "Which of the following migration strategies (the 7 Rs) describes moving an application to the AWS Cloud without making any code changes (also known as 'lift and shift')?",
    options: [
      "Replatform",
      "Rehost",
      "Refactor",
      "Repurchase"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Rehost ('lift and shift') moves applications to AWS without modifying the underlying architecture or code."
  },
  {
    id: 60,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "Which service provides an interactive visual workflow to coordinate multiple distributed microservices and AWS Lambda functions into sequential, branching, or parallel steps?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "AWS Step Functions",
      "AWS EventBridge"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "AWS Step Functions provides visual workflow orchestration for microservices and serverless functions using state machines."
  },
  {
    id: 61,
    domain: "Security and Compliance",
    domainId: 2,
    question: "A company must meet strict regulatory compliance requiring a dedicated, single-tenant hardware security module (HSM) that is physically isolated inside AWS data centers with FIPS 140-2 Level 3 validation. Which service should they choose?",
    options: [
      "AWS KMS",
      "AWS Secrets Manager",
      "AWS CloudHSM",
      "AWS Shield Advanced"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "AWS CloudHSM is a dedicated, single-tenant hardware security module providing dedicated FIPS 140-2 Level 3 hardware."
  },
  {
    id: 62,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "Which type of Elastic Load Balancer operates at Layer 4 and is optimized for ultra-high throughput and ultra-low latency handling millions of requests per second?",
    options: [
      "Application Load Balancer (ALB)",
      "Network Load Balancer (NLB)",
      "Classic Load Balancer (CLB)",
      "Gateway Load Balancer (GWLB)"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "Network Load Balancers (NLB) operate at Layer 4 (TCP/UDP) and are optimized for extreme throughput and ultra-low latency."
  },
  {
    id: 63,
    domain: "Billing, Pricing, and Support",
    domainId: 4,
    question: "Under the AWS Business Support plan, what is the target response time for an urgent case where a production system is down?",
    options: [
      "< 15 minutes",
      "< 30 minutes",
      "< 1 hour",
      "< 4 hours"
    ],
    answer: 2, // C
    isMulti: false,
    explanation: "Under the Business Support plan, the SLA for a production system down is < 1 hour."
  },
  {
    id: 64,
    domain: "Security and Compliance",
    domainId: 2,
    question: "What is the purpose of AWS Identity and Access Management (IAM) Access Analyzer?",
    options: [
      "To scan code repositories for hardcoded AWS secret keys",
      "To identify resources (such as S3 buckets) that are shared with external entities outside your trusted organization",
      "To test whether user passwords meet minimum length and complexity criteria",
      "To analyze database query performance"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "IAM Access Analyzer identifies resources shared outside an AWS organization or account to help ensure least privilege."
  },
  {
    id: 65,
    domain: "Cloud Technology and Services",
    domainId: 3,
    question: "Which service allows you to deploy and run AWS compute, storage, and database services directly inside your physical on-premises data center for a truly consistent hybrid cloud experience?",
    options: [
      "AWS Snowball",
      "AWS Outposts",
      "AWS Local Zones",
      "AWS Wavelength"
    ],
    answer: 1, // B
    isMulti: false,
    explanation: "AWS Outposts brings native AWS hardware, services, and APIs directly to your on-premises data center."
  }
];
