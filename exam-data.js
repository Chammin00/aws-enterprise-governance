window.CLF_EXAMS = {
  "exam02": {
    "id": "exam02",
    "title": "Practice Exam 02 (Domain 3 & Trap Focus)",
    "subtitle": "65 Questions - 90 Minutes - Weighted toward Domain 3 & your 23 misses",
    "durationMinutes": 90,
    "questions": [
      {
        "id": 1,
        "domain": "D1",
        "prompt": "A startup previously leased physical servers on 3-year contracts and often ran out of capacity during product launches. After moving to AWS, they launch servers in minutes and shut them down when traffic drops. Which **TWO** advantages of cloud computing does this illustrate? *(Choose TWO)*",
        "options": [
          {
            "key": "A",
            "text": "Stop guessing capacity"
          },
          {
            "key": "B",
            "text": "Go global in minutes"
          },
          {
            "key": "C",
            "text": "Increase speed and agility"
          },
          {
            "key": "D",
            "text": "Benefit from massive economies of scale"
          },
          {
            "key": "E",
            "text": "Achieve single-tenant physical isolation"
          }
        ],
        "answers": [
          "A",
          "C"
        ],
        "rationale": "Provisioning only what you need eliminates guessing capacity (**A**), and launching servers in minutes increases speed and agility (**C**)."
      },
      {
        "id": 2,
        "domain": "D3",
        "prompt": "A media company stores raw 4K video files on-premises and needs **low-latency local cached access** for editors while durably archiving the full library in Amazon S3. Which AWS service should they deploy?",
        "options": [
          {
            "key": "A",
            "text": "Amazon EBS"
          },
          {
            "key": "B",
            "text": "AWS Storage Gateway"
          },
          {
            "key": "C",
            "text": "Amazon EFS"
          },
          {
            "key": "D",
            "text": "AWS Snowcone"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Storage Gateway** bridges on-premises apps to AWS cloud storage (S3/Glacier) with low-latency local caching."
      },
      {
        "id": 3,
        "domain": "D2",
        "prompt": "A security team wants to automatically detect compromised IAM credentials, unusual API calls, and cryptocurrency mining on EC2 instances by analyzing CloudTrail, VPC Flow Logs, and DNS logs. Which AWS service provides this intelligent threat detection?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Macie"
          },
          {
            "key": "B",
            "text": "Amazon Inspector"
          },
          {
            "key": "C",
            "text": "Amazon GuardDuty"
          },
          {
            "key": "D",
            "text": "AWS Artifact"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**Amazon GuardDuty** uses ML on CloudTrail, VPC Flow Logs, and DNS logs for threat detection. (Macie is for S3 PII; Inspector is for CVE scans.)"
      },
      {
        "id": 4,
        "domain": "D3",
        "prompt": "A retail analytics team needs to run ad-hoc **standard SQL queries directly against CSV and Parquet files stored in Amazon S3** without managing servers or loading data into a database. Which service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Redshift"
          },
          {
            "key": "B",
            "text": "Amazon Athena"
          },
          {
            "key": "C",
            "text": "Amazon RDS"
          },
          {
            "key": "D",
            "text": "Amazon EMR"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Athena** runs serverless standard SQL queries directly on files stored in Amazon S3 without loading data into a warehouse."
      },
      {
        "id": 5,
        "domain": "D4",
        "prompt": "A company wants a 1-year commitment to reduce compute costs, **but** plans to migrate some workloads from Amazon EC2 to **AWS Fargate and AWS Lambda** mid-year and may switch AWS Regions. Which pricing option preserves their discount across all of these changes?",
        "options": [
          {
            "key": "A",
            "text": "Standard Reserved Instances"
          },
          {
            "key": "B",
            "text": "Convertible Reserved Instances"
          },
          {
            "key": "C",
            "text": "Compute Savings Plans"
          },
          {
            "key": "D",
            "text": "EC2 Instance Savings Plans"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**Compute Savings Plans** are the most flexible 1-3 yr commitment, automatically covering EC2 families, Regions, AWS Fargate, and AWS Lambda."
      },
      {
        "id": 6,
        "domain": "D1",
        "prompt": "Which pillar of the AWS Well-Architected Framework emphasizes **performing operations as code**, making frequent small reversible changes, and conducting game days?",
        "options": [
          {
            "key": "A",
            "text": "Reliability"
          },
          {
            "key": "B",
            "text": "Operational Excellence"
          },
          {
            "key": "C",
            "text": "Performance Efficiency"
          },
          {
            "key": "D",
            "text": "Security"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Operational Excellence** covers operations as code, frequent small reversible changes, and game days."
      },
      {
        "id": 7,
        "domain": "D3",
        "prompt": "A healthcare provider needs to automatically extract printed text, handwriting, and structured tables from thousands of **scanned PDF intake forms**. Which AWS AI/ML service is purpose-built for this task?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Transcribe"
          },
          {
            "key": "B",
            "text": "Amazon Comprehend"
          },
          {
            "key": "C",
            "text": "Amazon Textract"
          },
          {
            "key": "D",
            "text": "Amazon Polly"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**Amazon Textract** extracts printed text, handwriting, and tables from scanned PDFs and forms. (Transcribe = audio to text.)"
      },
      {
        "id": 8,
        "domain": "D2",
        "prompt": "Under the AWS Shared Responsibility Model, which task is the **customer's** responsibility when running an application on **Amazon EC2**?",
        "options": [
          {
            "key": "A",
            "text": "Securing physical data center perimeters"
          },
          {
            "key": "B",
            "text": "Patching the underlying virtualization hypervisor"
          },
          {
            "key": "C",
            "text": "Patching the guest operating system and configuring Security Groups"
          },
          {
            "key": "D",
            "text": "Replacing failed physical host storage drives"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "Customer owns Security **IN** the Cloud: guest OS patching on EC2, Security Groups, IAM, and data."
      },
      {
        "id": 9,
        "domain": "D3",
        "prompt": "A financial institution needs to run Amazon EC2 and Amazon EBS **physically inside its own on-premises data center** using AWS-managed hardware racks to meet strict local latency and residency rules. Which AWS service meets this need?",
        "options": [
          {
            "key": "A",
            "text": "AWS Local Zones"
          },
          {
            "key": "B",
            "text": "AWS Outposts"
          },
          {
            "key": "C",
            "text": "AWS Wavelength"
          },
          {
            "key": "D",
            "text": "Amazon CloudFront"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Outposts** delivers physical AWS-managed hardware racks directly into your own on-premises data center."
      },
      {
        "id": 10,
        "domain": "D3",
        "prompt": "A social networking company wants to store millions of user profiles and query **complex, multi-hop friend and fraud-ring relationships** in real time. Which AWS database service is purpose-built for this?",
        "options": [
          {
            "key": "A",
            "text": "Amazon DynamoDB"
          },
          {
            "key": "B",
            "text": "Amazon Neptune"
          },
          {
            "key": "C",
            "text": "Amazon Aurora"
          },
          {
            "key": "D",
            "text": "Amazon Redshift"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Neptune** is AWS's fully managed graph database for social networks, fraud rings, and connected relationships."
      },
      {
        "id": 11,
        "domain": "D4",
        "prompt": "Which AWS Support plan is the **lowest-cost** tier that provides **24/7 access** to Cloud Support Engineers via phone, chat, and email AND unlocks the **full set of AWS Trusted Advisor checks**?",
        "options": [
          {
            "key": "A",
            "text": "AWS Basic Support"
          },
          {
            "key": "B",
            "text": "AWS Developer Support"
          },
          {
            "key": "C",
            "text": "AWS Business Support"
          },
          {
            "key": "D",
            "text": "AWS Enterprise On-Ramp Support"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**AWS Business Support** is the lowest-cost plan with 24/7 phone/chat/email AND the full set of Trusted Advisor checks."
      },
      {
        "id": 12,
        "domain": "D2",
        "prompt": "A consumer mobile app needs user sign-up, sign-in, and **social login federation (Google, Apple, Facebook)** for 5 million external customers. Which AWS service should the developers use?",
        "options": [
          {
            "key": "A",
            "text": "AWS IAM Identity Center"
          },
          {
            "key": "B",
            "text": "Amazon Cognito"
          },
          {
            "key": "C",
            "text": "AWS Directory Service"
          },
          {
            "key": "D",
            "text": "AWS Secrets Manager"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Cognito** handles sign-up, sign-in, and social logins for millions of external web/mobile app end-users."
      },
      {
        "id": 13,
        "domain": "D3",
        "prompt": "A developer stores temporary cache files on an **Amazon EC2 Instance Store** volume. After stopping the EC2 instance overnight and starting it the next morning, what happens to those cache files?",
        "options": [
          {
            "key": "A",
            "text": "They remain intact on the volume"
          },
          {
            "key": "B",
            "text": "They are automatically snapshotted to Amazon S3"
          },
          {
            "key": "C",
            "text": "They are permanently lost because Instance Store is ephemeral"
          },
          {
            "key": "D",
            "text": "They are migrated to Amazon EFS"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**EC2 Instance Store** is ephemeral local disk—data is permanently lost when the instance is stopped or terminated. (Use EBS for persistent block storage.)"
      },
      {
        "id": 14,
        "domain": "D1",
        "prompt": "A company is migrating an on-premises **Microsoft SQL Server** database to **Amazon Aurora PostgreSQL** (two different database engines). Which **TWO** AWS tools should they pair for this heterogeneous migration? *(Choose TWO)*",
        "options": [
          {
            "key": "A",
            "text": "AWS Schema Conversion Tool (AWS SCT)"
          },
          {
            "key": "B",
            "text": "AWS Database Migration Service (AWS DMS)"
          },
          {
            "key": "C",
            "text": "AWS Snowball Edge"
          },
          {
            "key": "D",
            "text": "AWS Backup"
          },
          {
            "key": "E",
            "text": "AWS Direct Connect"
          }
        ],
        "answers": [
          "A",
          "B"
        ],
        "rationale": "Heterogeneous DB migrations (SQL Server -> PostgreSQL) pair **AWS SCT** (schema conversion) with **AWS DMS** (data migration)."
      },
      {
        "id": 15,
        "domain": "D3",
        "prompt": "An enterprise wants to provision **persistent, cloud-based virtual Windows desktops** for 400 remote employees so each employee has a full workstation accessible from any device. Which AWS service fits BEST?",
        "options": [
          {
            "key": "A",
            "text": "Amazon AppStream 2.0"
          },
          {
            "key": "B",
            "text": "Amazon WorkSpaces"
          },
          {
            "key": "C",
            "text": "Amazon Connect"
          },
          {
            "key": "D",
            "text": "AWS Amplify"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon WorkSpaces** provides persistent cloud virtual Windows/Linux desktops. (AppStream 2.0 streams individual apps to a browser.)"
      },
      {
        "id": 16,
        "domain": "D2",
        "prompt": "A government contractor must meet FIPS 140-2 Level 3 compliance by using a **dedicated, single-tenant hardware security module (HSM)** inside AWS with exclusive customer control over cryptographic keys. Which service meets this requirement?",
        "options": [
          {
            "key": "A",
            "text": "AWS Key Management Service (AWS KMS)"
          },
          {
            "key": "B",
            "text": "AWS CloudHSM"
          },
          {
            "key": "C",
            "text": "AWS Secrets Manager"
          },
          {
            "key": "D",
            "text": "AWS Certificate Manager (ACM)"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS CloudHSM** provides dedicated, single-tenant HSM hardware with exclusive customer control over keys. (KMS is multi-tenant.)"
      },
      {
        "id": 17,
        "domain": "D3",
        "prompt": "A publishing company wants to convert written news articles into **lifelike spoken audio** so subscribers can listen on their commute. Which AWS AI/ML service performs text-to-speech?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Transcribe"
          },
          {
            "key": "B",
            "text": "Amazon Polly"
          },
          {
            "key": "C",
            "text": "Amazon Translate"
          },
          {
            "key": "D",
            "text": "Amazon Lex"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Polly** converts written text into lifelike spoken audio (Text-to-Speech)."
      },
      {
        "id": 18,
        "domain": "D1",
        "prompt": "A company switches from x86 EC2 instances to energy-efficient **AWS Graviton** processors and adopts serverless computing to **minimize its environmental impact and carbon footprint**. Which Well-Architected pillar does this align with?",
        "options": [
          {
            "key": "A",
            "text": "Cost Optimization"
          },
          {
            "key": "B",
            "text": "Sustainability"
          },
          {
            "key": "C",
            "text": "Performance Efficiency"
          },
          {
            "key": "D",
            "text": "Operational Excellence"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Sustainability** focuses on reducing environmental impact/carbon footprint using efficient hardware like AWS Graviton and serverless."
      },
      {
        "id": 19,
        "domain": "D3",
        "prompt": "A DevOps team wants an automated service to **orchestrate its end-to-end CI/CD release workflow**—triggering builds and deployments whenever developers push code changes. Which AWS service should they use?",
        "options": [
          {
            "key": "A",
            "text": "AWS X-Ray"
          },
          {
            "key": "B",
            "text": "AWS CodePipeline"
          },
          {
            "key": "C",
            "text": "AWS CodeCommit"
          },
          {
            "key": "D",
            "text": "AWS Cloud9"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS CodePipeline** orchestrates end-to-end CI/CD release pipelines. (X-Ray traces microservice latency.)"
      },
      {
        "id": 20,
        "domain": "D2",
        "prompt": "Which AWS service provides a self-service portal to download AWS **SOC 2, PCI DSS, and ISO 27001** compliance reports and accept the **HIPAA Business Associate Agreement (BAA)**?",
        "options": [
          {
            "key": "A",
            "text": "AWS Audit Manager"
          },
          {
            "key": "B",
            "text": "AWS Artifact"
          },
          {
            "key": "C",
            "text": "AWS Config"
          },
          {
            "key": "D",
            "text": "AWS Security Hub"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Artifact** is the self-service portal for compliance reports (SOC, PCI, ISO) and agreements (HIPAA BAA)."
      },
      {
        "id": 21,
        "domain": "D3",
        "prompt": "A telecom company wants to deploy a cloud-based **omnichannel customer call/contact center** with automatic voice and chat routing and pay-per-minute pricing. Which AWS service should they choose?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Lex"
          },
          {
            "key": "B",
            "text": "Amazon Connect"
          },
          {
            "key": "C",
            "text": "Amazon SES"
          },
          {
            "key": "D",
            "text": "Amazon SNS"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Connect** is AWS's cloud omnichannel contact/call center. (Lex is an AI chatbot engine.)"
      },
      {
        "id": 22,
        "domain": "D4",
        "prompt": "Which type of data transfer on AWS is generally **FREE ($0)**?",
        "options": [
          {
            "key": "A",
            "text": "Data transfer OUT from Amazon EC2 to the public internet"
          },
          {
            "key": "B",
            "text": "Data transfer IN from the public internet to Amazon EC2 or Amazon S3"
          },
          {
            "key": "C",
            "text": "Data transfer between two different AWS Regions"
          },
          {
            "key": "D",
            "text": "Data transfer between two Availability Zones in the same Region"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "Inbound data transfer (**IN**) from the public internet into AWS is generally free ($0); outbound (**OUT**) is charged."
      },
      {
        "id": 23,
        "domain": "D3",
        "prompt": "A company wants to send an immediate alert to **multiple destinations at once** (an ops email address, an on-call SMS number, and an AWS Lambda function) whenever an order fails. Which pub/sub service should they use?",
        "options": [
          {
            "key": "A",
            "text": "AWS Step Functions"
          },
          {
            "key": "B",
            "text": "Amazon Simple Queue Service (Amazon SQS)"
          },
          {
            "key": "C",
            "text": "Amazon Simple Notification Service (Amazon SNS)"
          },
          {
            "key": "D",
            "text": "Amazon Simple Email Service (Amazon SES)"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**Amazon SNS** is a pub/sub push notification service that fans out alerts to email, SMS, and Lambda simultaneously."
      },
      {
        "id": 24,
        "domain": "D2",
        "prompt": "Which AWS service continuously scans **Amazon EC2 instances, AWS Lambda functions, and Amazon ECR container images** for known software vulnerabilities (CVEs) and unintended network exposure?",
        "options": [
          {
            "key": "A",
            "text": "Amazon GuardDuty"
          },
          {
            "key": "B",
            "text": "Amazon Inspector"
          },
          {
            "key": "C",
            "text": "Amazon Macie"
          },
          {
            "key": "D",
            "text": "AWS Shield"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Inspector** automates software vulnerability (CVE) and network exposure scanning for EC2, Lambda, and ECR."
      },
      {
        "id": 25,
        "domain": "D3",
        "prompt": "A small team of developers wants to deploy a Node.js web app by **simply uploading their code**, letting AWS automatically provision EC2 instances, Elastic Load Balancing, and Auto Scaling while keeping access to the underlying EC2 resources. Which service fits BEST?",
        "options": [
          {
            "key": "A",
            "text": "Amazon ECS"
          },
          {
            "key": "B",
            "text": "AWS Elastic Beanstalk"
          },
          {
            "key": "C",
            "text": "AWS Lambda"
          },
          {
            "key": "D",
            "text": "AWS Batch"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Elastic Beanstalk** is AWS's PaaS where you upload web app code and AWS manages EC2, ELB, and Auto Scaling automatically."
      },
      {
        "id": 26,
        "domain": "D1",
        "prompt": "Which design principle belongs to the **Performance Efficiency** pillar of the AWS Well-Architected Framework?",
        "options": [
          {
            "key": "A",
            "text": "Adopt a consumption model and measure overall financial efficiency"
          },
          {
            "key": "B",
            "text": "Democratize advanced technologies and use serverless architectures"
          },
          {
            "key": "C",
            "text": "Implement a strong identity foundation and enable traceability"
          },
          {
            "key": "D",
            "text": "Anticipate failure and refine operations procedures frequently"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Performance Efficiency** principles include democratizing advanced technologies, using serverless architectures, and going global in minutes."
      },
      {
        "id": 27,
        "domain": "D2",
        "prompt": "A security engineer needs to **explicitly DENY** traffic from a specific malicious IP address at the **subnet level** of a VPC. Which VPC security feature supports explicit deny rules at the subnet level?",
        "options": [
          {
            "key": "A",
            "text": "Security Groups"
          },
          {
            "key": "B",
            "text": "Network ACLs (NACLs)"
          },
          {
            "key": "C",
            "text": "AWS IAM Policies"
          },
          {
            "key": "D",
            "text": "Amazon GuardDuty"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Network ACLs (NACLs)** operate at the subnet level and support both allow and explicit deny rules. (Security Groups are allow-only.)"
      },
      {
        "id": 28,
        "domain": "D3",
        "prompt": "A company runs Linux EC2 instances across **three Availability Zones** and needs all instances to mount and share the **same elastic NFS file system** simultaneously. Which storage service should they choose?",
        "options": [
          {
            "key": "A",
            "text": "Amazon EBS"
          },
          {
            "key": "B",
            "text": "Amazon EFS"
          },
          {
            "key": "C",
            "text": "EC2 Instance Store"
          },
          {
            "key": "D",
            "text": "Amazon S3 Glacier"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon EFS** is a serverless, elastic Linux NFS file share mountable across multiple AZs simultaneously."
      },
      {
        "id": 29,
        "domain": "D4",
        "prompt": "A company runs a fault-tolerant, stateless video rendering job that can be interrupted and automatically restarted without losing work. Which EC2 purchasing option delivers the **lowest possible cost**?",
        "options": [
          {
            "key": "A",
            "text": "On-Demand Instances"
          },
          {
            "key": "B",
            "text": "Standard Reserved Instances"
          },
          {
            "key": "C",
            "text": "Spot Instances"
          },
          {
            "key": "D",
            "text": "Dedicated Hosts"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**EC2 Spot Instances** provide up to 90% savings for fault-tolerant, interruptible workloads."
      },
      {
        "id": 30,
        "domain": "D2",
        "prompt": "Which task can **ONLY** be performed by the **AWS account root user**?",
        "options": [
          {
            "key": "A",
            "text": "Creating an IAM Role for EC2"
          },
          {
            "key": "B",
            "text": "Closing the AWS account"
          },
          {
            "key": "C",
            "text": "Launching an Amazon RDS database"
          },
          {
            "key": "D",
            "text": "Enabling AWS CloudTrail"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "Closing an AWS account (and changing support plans) requires the **AWS account root user**."
      },
      {
        "id": 31,
        "domain": "D3",
        "prompt": "A company stores millions of documents in Amazon S3 with **completely unpredictable access patterns**—some files are read frequently for days and then untouched for months. They want automatic cost savings with **no retrieval fees**. Which S3 storage class fits BEST?",
        "options": [
          {
            "key": "A",
            "text": "S3 Standard-IA"
          },
          {
            "key": "B",
            "text": "S3 One Zone-IA"
          },
          {
            "key": "C",
            "text": "S3 Intelligent-Tiering"
          },
          {
            "key": "D",
            "text": "S3 Glacier Instant Retrieval"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**S3 Intelligent-Tiering** automatically optimizes storage costs for unknown/unpredictable access patterns with zero retrieval fees."
      },
      {
        "id": 32,
        "domain": "D1",
        "prompt": "A company moves its legacy on-premises HR application by subscribing to a **cloud-based SaaS HR platform** instead of migrating the old servers. Which of the **7 Rs** migration strategies is this?",
        "options": [
          {
            "key": "A",
            "text": "Rehost"
          },
          {
            "key": "B",
            "text": "Replatform"
          },
          {
            "key": "C",
            "text": "Repurchase"
          },
          {
            "key": "D",
            "text": "Retire"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**Repurchase** (\"Drop and Shop\") replaces legacy software with a third-party SaaS subscription."
      },
      {
        "id": 33,
        "domain": "D3",
        "prompt": "A global gaming studio runs a real-time **UDP** multiplayer server and wants players worldwide to connect over the AWS global private network using **two static Anycast IP addresses** for lower latency and instant failover. Which service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon CloudFront"
          },
          {
            "key": "B",
            "text": "AWS Global Accelerator"
          },
          {
            "key": "C",
            "text": "Amazon Route 53"
          },
          {
            "key": "D",
            "text": "AWS Direct Connect"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Global Accelerator** uses two static Anycast IPs to route TCP/UDP/HTTP traffic over the AWS private network."
      },
      {
        "id": 34,
        "domain": "D2",
        "prompt": "Which AWS service automatically discovers and classifies **Personally Identifiable Information (PII)** such as credit card numbers and SSNs stored inside **Amazon S3 buckets**?",
        "options": [
          {
            "key": "A",
            "text": "Amazon GuardDuty"
          },
          {
            "key": "B",
            "text": "Amazon Macie"
          },
          {
            "key": "C",
            "text": "Amazon Inspector"
          },
          {
            "key": "D",
            "text": "Amazon Detective"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Macie** uses ML to discover and classify PII/sensitive data stored in Amazon S3."
      },
      {
        "id": 35,
        "domain": "D4",
        "prompt": "A company wants to estimate its expected monthly AWS bill **before** deploying a new multi-tier web application. Which AWS tool should they use?",
        "options": [
          {
            "key": "A",
            "text": "AWS Cost Explorer"
          },
          {
            "key": "B",
            "text": "AWS Budgets"
          },
          {
            "key": "C",
            "text": "AWS Pricing Calculator"
          },
          {
            "key": "D",
            "text": "AWS Cost and Usage Report (CUR)"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**AWS Pricing Calculator** estimates monthly costs before deploying resources."
      },
      {
        "id": 36,
        "domain": "D3",
        "prompt": "An e-commerce company wants to **decouple** its payment microservice from its shipping microservice using a managed, pull-based **message queue** so traffic spikes never drop orders. Which service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SNS"
          },
          {
            "key": "B",
            "text": "Amazon SQS"
          },
          {
            "key": "C",
            "text": "Amazon SES"
          },
          {
            "key": "D",
            "text": "Amazon EventBridge"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon SQS** is a managed pull-based message queue for decoupling microservices and buffering spikes."
      },
      {
        "id": 37,
        "domain": "D2",
        "prompt": "A company wants a **single, centralized dashboard** that aggregates and prioritizes security findings from Amazon GuardDuty, Amazon Inspector, Amazon Macie, and AWS Firewall Manager across all AWS accounts. Which service provides this?",
        "options": [
          {
            "key": "A",
            "text": "AWS Config"
          },
          {
            "key": "B",
            "text": "AWS Security Hub"
          },
          {
            "key": "C",
            "text": "AWS CloudTrail"
          },
          {
            "key": "D",
            "text": "AWS Trusted Advisor"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Security Hub** aggregates and normalizes findings centrally from GuardDuty, Inspector, Macie, and more."
      },
      {
        "id": 38,
        "domain": "D1",
        "prompt": "Which **AWS Cloud Adoption Framework (AWS CAF)** perspective focuses on workforce readiness, cloud skills training, culture, and organizational change management?",
        "options": [
          {
            "key": "A",
            "text": "Business perspective"
          },
          {
            "key": "B",
            "text": "Governance perspective"
          },
          {
            "key": "C",
            "text": "People perspective"
          },
          {
            "key": "D",
            "text": "Platform perspective"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "The **People perspective** of AWS CAF addresses workforce skills, training, culture, and change management."
      },
      {
        "id": 39,
        "domain": "D3",
        "prompt": "A company needs to run Docker containers on Amazon ECS **serverlessly** without provisioning, patching, or scaling any underlying Amazon EC2 instances. Which service should they use?",
        "options": [
          {
            "key": "A",
            "text": "AWS Lambda"
          },
          {
            "key": "B",
            "text": "AWS Fargate"
          },
          {
            "key": "C",
            "text": "Amazon ECR"
          },
          {
            "key": "D",
            "text": "Amazon Lightsail"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Fargate** is the serverless compute engine for running ECS/EKS containers without managing EC2 instances."
      },
      {
        "id": 40,
        "domain": "D2",
        "prompt": "A web application behind Amazon CloudFront is being targeted by **SQL injection and cross-site scripting (XSS)** attacks at Layer 7. Which AWS service should be enabled to block these attacks?",
        "options": [
          {
            "key": "A",
            "text": "AWS Shield Standard"
          },
          {
            "key": "B",
            "text": "AWS WAF"
          },
          {
            "key": "C",
            "text": "Amazon Inspector"
          },
          {
            "key": "D",
            "text": "AWS Network Firewall only"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS WAF** is a Layer 7 Web Application Firewall that blocks SQL injection, XSS, and malicious HTTP patterns."
      },
      {
        "id": 41,
        "domain": "D3",
        "prompt": "A logistics company receives real-time GPS telemetry every second from 100,000 delivery vans and needs to **ingest and process this streaming data in real time**. Which AWS service is purpose-built for this?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Athena"
          },
          {
            "key": "B",
            "text": "Amazon Kinesis"
          },
          {
            "key": "C",
            "text": "AWS Glue"
          },
          {
            "key": "D",
            "text": "Amazon QuickSight"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Kinesis** ingests and processes real-time streaming data at scale."
      },
      {
        "id": 42,
        "domain": "D4",
        "prompt": "An enterprise requires a **dedicated Technical Account Manager (TAM)** and a **< 15-minute** target response time for business-critical system down incidents. Which AWS Support plan meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "AWS Business Support"
          },
          {
            "key": "B",
            "text": "AWS Enterprise On-Ramp Support"
          },
          {
            "key": "C",
            "text": "AWS Enterprise Support"
          },
          {
            "key": "D",
            "text": "AWS Developer Support"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**AWS Enterprise Support** includes a Dedicated TAM and a <15-minute Business-Critical Down SLA."
      },
      {
        "id": 43,
        "domain": "D1",
        "prompt": "A company notices its EC2 instances average 8% CPU utilization and wants an automated ML service to recommend smaller, cheaper instance types (**rightsizing**). Which AWS service provides these recommendations?",
        "options": [
          {
            "key": "A",
            "text": "AWS Compute Optimizer"
          },
          {
            "key": "B",
            "text": "AWS CloudFormation"
          },
          {
            "key": "C",
            "text": "AWS Migration Hub"
          },
          {
            "key": "D",
            "text": "AWS Application Discovery Service"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS Compute Optimizer** uses ML to analyze utilization and recommend optimal instance sizes (rightsizing)."
      },
      {
        "id": 44,
        "domain": "D3",
        "prompt": "An EC2 instance sits in a **private subnet** of a VPC and must NOT accept inbound internet connections, **but** needs outbound-only internet access to download OS security updates. Which VPC component enables this?",
        "options": [
          {
            "key": "A",
            "text": "Internet Gateway (IGW)"
          },
          {
            "key": "B",
            "text": "NAT Gateway"
          },
          {
            "key": "C",
            "text": "VPC Endpoint only"
          },
          {
            "key": "D",
            "text": "AWS Direct Connect"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**NAT Gateway** allows private subnet instances outbound-only internet access while blocking unsolicited inbound traffic."
      },
      {
        "id": 45,
        "domain": "D2",
        "prompt": "A security auditor needs to know **who** called the `DeleteDBInstance` API yesterday and **what** the database configuration looked like before it was deleted. Which **TWO** AWS services provide these answers? *(Choose TWO)*",
        "options": [
          {
            "key": "A",
            "text": "AWS CloudTrail"
          },
          {
            "key": "B",
            "text": "AWS Config"
          },
          {
            "key": "C",
            "text": "Amazon CloudWatch"
          },
          {
            "key": "D",
            "text": "AWS Shield"
          },
          {
            "key": "E",
            "text": "Amazon Macie"
          }
        ],
        "answers": [
          "A",
          "B"
        ],
        "rationale": "**AWS CloudTrail** tells you WHO made the API call; **AWS Config** tells you WHAT the resource configuration was before deletion."
      },
      {
        "id": 46,
        "domain": "D3",
        "prompt": "A company needs a cloud-native, PostgreSQL-compatible **relational database** that delivers up to **3x standard PostgreSQL throughput**, replicates data across 3 Availability Zones, and auto-scales storage up to 128 TB. Which service should they choose?",
        "options": [
          {
            "key": "A",
            "text": "Amazon DynamoDB"
          },
          {
            "key": "B",
            "text": "Amazon Aurora"
          },
          {
            "key": "C",
            "text": "Amazon Redshift"
          },
          {
            "key": "D",
            "text": "Amazon MemoryDB for Redis"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Aurora** delivers 5x MySQL / 3x PostgreSQL throughput, 6 copies across 3 AZs, and auto-scaling up to 128 TB."
      },
      {
        "id": 47,
        "domain": "D1",
        "prompt": "A company wants to migrate **80 TB** of seismic survey data from a remote desert site with no high-speed internet connection to Amazon S3 within 10 days. Which AWS service is BEST suited?",
        "options": [
          {
            "key": "A",
            "text": "AWS Direct Connect"
          },
          {
            "key": "B",
            "text": "AWS Snowball Edge"
          },
          {
            "key": "C",
            "text": "AWS DataSync"
          },
          {
            "key": "D",
            "text": "AWS Transfer Family"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Snowball Edge** physically transfers up to 80 TB per device offline when internet connectivity is unavailable or slow."
      },
      {
        "id": 48,
        "domain": "D2",
        "prompt": "A company wants to store Amazon RDS database passwords securely outside of source code and **automatically rotate** those credentials every 30 days. Which AWS service should they use?",
        "options": [
          {
            "key": "A",
            "text": "AWS KMS"
          },
          {
            "key": "B",
            "text": "AWS Secrets Manager"
          },
          {
            "key": "C",
            "text": "AWS Certificate Manager (ACM)"
          },
          {
            "key": "D",
            "text": "AWS Systems Manager Session Manager"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Secrets Manager** stores database credentials and supports native automatic rotation."
      },
      {
        "id": 49,
        "domain": "D3",
        "prompt": "A company wants to stream a legacy Windows CAD **desktop application** directly into remote contractors' **web browsers** without provisioning persistent full virtual desktops. Which AWS service fits BEST?",
        "options": [
          {
            "key": "A",
            "text": "Amazon WorkSpaces"
          },
          {
            "key": "B",
            "text": "Amazon AppStream 2.0"
          },
          {
            "key": "C",
            "text": "Amazon Connect"
          },
          {
            "key": "D",
            "text": "AWS Device Farm"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon AppStream 2.0** streams desktop applications securely into a web browser without full virtual desktops."
      },
      {
        "id": 50,
        "domain": "D4",
        "prompt": "A company has 15 AWS accounts managed under **AWS Organizations** with consolidated billing enabled. Which **TWO** benefits does consolidated billing provide? *(Choose TWO)*",
        "options": [
          {
            "key": "A",
            "text": "A single monthly invoice across all member accounts"
          },
          {
            "key": "B",
            "text": "Combined usage across accounts to reach volume pricing discounts faster"
          },
          {
            "key": "C",
            "text": "Free AWS Business Support for all member accounts"
          },
          {
            "key": "D",
            "text": "Free outbound internet data transfer"
          },
          {
            "key": "E",
            "text": "Automatic 70% discount on all On-Demand EC2 instances"
          }
        ],
        "answers": [
          "A",
          "B"
        ],
        "rationale": "Consolidated billing provides one single monthly bill (**A**) and combines usage across accounts to reach volume pricing tiers faster (**B**)."
      },
      {
        "id": 51,
        "domain": "D3",
        "prompt": "A telecom carrier wants to run ultra-low-latency mobile gaming workloads embedded directly inside its **5G mobile carrier network**. Which AWS infrastructure offering is designed for this?",
        "options": [
          {
            "key": "A",
            "text": "AWS Outposts"
          },
          {
            "key": "B",
            "text": "AWS Local Zones"
          },
          {
            "key": "C",
            "text": "AWS Wavelength"
          },
          {
            "key": "D",
            "text": "Amazon Route 53"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**AWS Wavelength** embeds AWS compute and storage inside 5G telecom carrier networks."
      },
      {
        "id": 52,
        "domain": "D2",
        "prompt": "Under the AWS Shared Responsibility Model, which **TWO** controls are **shared** between AWS and the customer? *(Choose TWO)*",
        "options": [
          {
            "key": "A",
            "text": "Patch Management"
          },
          {
            "key": "B",
            "text": "Physical security of AWS data centers"
          },
          {
            "key": "C",
            "text": "Configuration Management"
          },
          {
            "key": "D",
            "text": "Customer data encryption key selection"
          },
          {
            "key": "E",
            "text": "Hypervisor hardware maintenance"
          }
        ],
        "answers": [
          "A",
          "C"
        ],
        "rationale": "**Patch Management**, **Configuration Management**, and Awareness & Training are shared controls between AWS and the customer."
      },
      {
        "id": 53,
        "domain": "D3",
        "prompt": "A media company wants to automatically **convert recorded podcast audio files into written text transcripts** for accessibility captions. Which AWS AI/ML service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Polly"
          },
          {
            "key": "B",
            "text": "Amazon Transcribe"
          },
          {
            "key": "C",
            "text": "Amazon Textract"
          },
          {
            "key": "D",
            "text": "Amazon Comprehend"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Transcribe** converts spoken audio into written text (Speech-to-Text)."
      },
      {
        "id": 54,
        "domain": "D1",
        "prompt": "A company moves its self-managed on-premises Oracle database to **Amazon RDS for Oracle** to offload backups and OS patching without changing application code. Which **7 Rs** strategy is this?",
        "options": [
          {
            "key": "A",
            "text": "Rehost"
          },
          {
            "key": "B",
            "text": "Replatform"
          },
          {
            "key": "C",
            "text": "Refactor"
          },
          {
            "key": "D",
            "text": "Retain"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Replatform** (\"Lift, Tinker, and Shift\") moves a self-managed DB to a managed service like RDS without rewriting app code."
      },
      {
        "id": 55,
        "domain": "D3",
        "prompt": "A company needs a **dedicated, private physical fiber connection** from its on-premises headquarters to AWS for consistent, predictable bandwidth without traversing the public internet. Which service should they choose?",
        "options": [
          {
            "key": "A",
            "text": "AWS Site-to-Site VPN"
          },
          {
            "key": "B",
            "text": "AWS Direct Connect"
          },
          {
            "key": "C",
            "text": "Amazon CloudFront"
          },
          {
            "key": "D",
            "text": "Amazon API Gateway"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Direct Connect** provides a dedicated private physical fiber link bypassing the public internet."
      },
      {
        "id": 56,
        "domain": "D2",
        "prompt": "A company wants its internal employees to sign in once with their corporate directory credentials (**workforce SSO**) to access 20 different AWS accounts in AWS Organizations. Which service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Cognito"
          },
          {
            "key": "B",
            "text": "AWS IAM Identity Center (AWS Single Sign-On)"
          },
          {
            "key": "C",
            "text": "AWS Artifact"
          },
          {
            "key": "D",
            "text": "AWS Certificate Manager"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS IAM Identity Center (AWS SSO)** provides centralized workforce SSO across AWS Organizations accounts."
      },
      {
        "id": 57,
        "domain": "D3",
        "prompt": "A company must archive financial audit records in Amazon S3 for **10 years** at the **absolute lowest storage cost**, and a 12-to-48-hour retrieval delay is acceptable. Which storage class should they select?",
        "options": [
          {
            "key": "A",
            "text": "S3 Standard-IA"
          },
          {
            "key": "B",
            "text": "S3 Intelligent-Tiering"
          },
          {
            "key": "C",
            "text": "S3 Glacier Instant Retrieval"
          },
          {
            "key": "D",
            "text": "S3 Glacier Deep Archive"
          }
        ],
        "answers": [
          "D"
        ],
        "rationale": "**S3 Glacier Deep Archive** is the lowest-cost S3 archival tier (12-48 hour retrieval)."
      },
      {
        "id": 58,
        "domain": "D4",
        "prompt": "A company must run legacy enterprise software on EC2 under a **Bring Your Own License (BYOL)** contract that requires visibility into **physical server sockets and cores**. Which EC2 option is required?",
        "options": [
          {
            "key": "A",
            "text": "Dedicated Instances"
          },
          {
            "key": "B",
            "text": "Dedicated Hosts"
          },
          {
            "key": "C",
            "text": "Spot Instances"
          },
          {
            "key": "D",
            "text": "Compute Savings Plans"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**EC2 Dedicated Hosts** provide physical socket and core visibility required for BYOL licensing."
      },
      {
        "id": 59,
        "domain": "D1",
        "prompt": "Deploying stateless web servers across **multiple Availability Zones** behind an Elastic Load Balancer with Auto Scaling so the app automatically recovers from an AZ outage primarily aligns with which Well-Architected pillar?",
        "options": [
          {
            "key": "A",
            "text": "Reliability"
          },
          {
            "key": "B",
            "text": "Security"
          },
          {
            "key": "C",
            "text": "Sustainability"
          },
          {
            "key": "D",
            "text": "Cost Optimization"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**Reliability** focuses on Multi-AZ architecture, horizontal scaling, and automatic recovery from failures."
      },
      {
        "id": 60,
        "domain": "D3",
        "prompt": "A data engineering team wants a **serverless ETL (Extract, Transform, Load)** service and centralized Data Catalog to clean and transform raw S3 datasets before loading them into a data warehouse. Which AWS service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Athena"
          },
          {
            "key": "B",
            "text": "AWS Glue"
          },
          {
            "key": "C",
            "text": "Amazon QuickSight"
          },
          {
            "key": "D",
            "text": "Amazon Kinesis"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Glue** is AWS's serverless ETL service and Data Catalog."
      },
      {
        "id": 61,
        "domain": "D2",
        "prompt": "Which AWS service is enabled **automatically at NO extra charge** for all AWS customers to defend against common Layer 3 and Layer 4 **DDoS attacks**?",
        "options": [
          {
            "key": "A",
            "text": "AWS WAF"
          },
          {
            "key": "B",
            "text": "AWS Shield Standard"
          },
          {
            "key": "C",
            "text": "AWS Shield Advanced"
          },
          {
            "key": "D",
            "text": "Amazon GuardDuty"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Shield Standard** is enabled automatically at no extra cost for L3/L4 DDoS protection."
      },
      {
        "id": 62,
        "domain": "D3",
        "prompt": "An engineering team wants to **trace and debug latency bottlenecks** across a distributed microservices architecture running on AWS Lambda and Amazon ECS. Which AWS developer tool provides distributed tracing?",
        "options": [
          {
            "key": "A",
            "text": "AWS CodePipeline"
          },
          {
            "key": "B",
            "text": "AWS X-Ray"
          },
          {
            "key": "C",
            "text": "AWS CloudShell"
          },
          {
            "key": "D",
            "text": "AWS CodeBuild"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS X-Ray** provides distributed tracing and performance debugging across microservices."
      },
      {
        "id": 63,
        "domain": "D1",
        "prompt": "A company wants to deploy identical VPCs, subnets, and EC2 fleets across dev, test, and production accounts in a **repeatable, automated** manner using JSON or YAML templates. Which service enables this?",
        "options": [
          {
            "key": "A",
            "text": "AWS CloudFormation"
          },
          {
            "key": "B",
            "text": "AWS CloudTrail"
          },
          {
            "key": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "key": "D",
            "text": "AWS Control Tower only"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS CloudFormation** automates repeatable infrastructure provisioning via JSON/YAML IaC templates."
      },
      {
        "id": 64,
        "domain": "D2",
        "prompt": "An application running on an Amazon EC2 instance needs read access to an Amazon DynamoDB table. What is the **AWS security best practice** for granting these permissions?",
        "options": [
          {
            "key": "A",
            "text": "Store the AWS root user access keys in an environment variable on EC2"
          },
          {
            "key": "B",
            "text": "Hardcode an IAM user's access key in the application code"
          },
          {
            "key": "C",
            "text": "Attach an IAM Role with a least-privilege policy to the EC2 instance"
          },
          {
            "key": "D",
            "text": "Grant public read access to the DynamoDB table"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "Attaching an **IAM Role** provides temporary, auto-rotated credentials following least privilege."
      },
      {
        "id": 65,
        "domain": "D3",
        "prompt": "A company wants to register a custom domain name, resolve domain names to IP addresses, and route global traffic to the healthiest AWS Region using **managed DNS**. Which AWS service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon CloudFront"
          },
          {
            "key": "B",
            "text": "Amazon Route 53"
          },
          {
            "key": "C",
            "text": "Amazon VPC"
          },
          {
            "key": "D",
            "text": "AWS Global Accelerator"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Route 53** is AWS's highly available managed DNS service, domain registrar, and health-check router."
      }
    ]
  },
  "exam03": {
    "id": "exam03",
    "title": "Practice Exam 03 (Final Readiness Mock)",
    "subtitle": "65 Questions - 90 Minutes - Full CLF-C02 blueprint & edge-case scenarios",
    "durationMinutes": 90,
    "questions": [
      {
        "id": 1,
        "domain": "D1",
        "prompt": "A global retailer wants to expand into Europe and Asia within a week without building or leasing overseas data centers. Which advantage of AWS Cloud computing directly enables this?",
        "options": [
          {
            "key": "A",
            "text": "Trade fixed expense for variable expense"
          },
          {
            "key": "B",
            "text": "Go global in minutes"
          },
          {
            "key": "C",
            "text": "Benefit from massive economies of scale"
          },
          {
            "key": "D",
            "text": "Stop guessing capacity"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Go global in minutes** lets you deploy workloads into AWS Regions worldwide without building overseas data centers."
      },
      {
        "id": 2,
        "domain": "D3",
        "prompt": "A financial trading platform needs **single-digit millisecond latency** for users in Chicago—a major metro area without a full AWS Region—by running EC2 instances closer to end users in an AWS-managed metro facility. Which offering fits BEST?",
        "options": [
          {
            "key": "A",
            "text": "AWS Outposts"
          },
          {
            "key": "B",
            "text": "AWS Local Zones"
          },
          {
            "key": "C",
            "text": "AWS Wavelength"
          },
          {
            "key": "D",
            "text": "AWS Direct Connect"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Local Zones** place AWS compute/storage in major metro cities for single-digit ms latency. (Outposts = your own building.)"
      },
      {
        "id": 3,
        "domain": "D2",
        "prompt": "A company moves its database from a self-managed MySQL instance on Amazon EC2 to **Amazon DynamoDB**. Under the AWS Shared Responsibility Model, which responsibility remains with the **customer**?",
        "options": [
          {
            "key": "A",
            "text": "Patching the underlying database host operating system"
          },
          {
            "key": "B",
            "text": "Managing physical storage hardware redundancy"
          },
          {
            "key": "C",
            "text": "Managing IAM access policies and classifying customer data"
          },
          {
            "key": "D",
            "text": "Maintaining data center power and cooling"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "Even with serverless/managed DynamoDB, the customer always owns **IAM access policies and customer data classification**."
      },
      {
        "id": 4,
        "domain": "D3",
        "prompt": "A retail business wants to build interactive **business intelligence (BI) dashboards** and visual charts from sales data stored in Amazon S3 and Amazon Redshift, paying only per session without managing BI servers. Which service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Athena"
          },
          {
            "key": "B",
            "text": "AWS Glue"
          },
          {
            "key": "C",
            "text": "Amazon QuickSight"
          },
          {
            "key": "D",
            "text": "Amazon OpenSearch Service"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**Amazon QuickSight** is AWS's serverless BI dashboard and data visualization service."
      },
      {
        "id": 5,
        "domain": "D4",
        "prompt": "A finance manager wants an **automated email alert** whenever the company's monthly AWS spend is forecasted to exceed $10,000. Which AWS billing service should they configure?",
        "options": [
          {
            "key": "A",
            "text": "AWS Pricing Calculator"
          },
          {
            "key": "B",
            "text": "AWS Cost Explorer"
          },
          {
            "key": "C",
            "text": "AWS Budgets"
          },
          {
            "key": "D",
            "text": "AWS Billing Conductor"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**AWS Budgets** sets cost/usage thresholds and sends automated email/SNS alerts when actual or forecasted spend exceeds limits."
      },
      {
        "id": 6,
        "domain": "D2",
        "prompt": "Which AWS service inspects your AWS account and gives real-time recommendations across **Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits**?",
        "options": [
          {
            "key": "A",
            "text": "AWS Trusted Advisor"
          },
          {
            "key": "B",
            "text": "Amazon GuardDuty"
          },
          {
            "key": "C",
            "text": "AWS CloudTrail"
          },
          {
            "key": "D",
            "text": "AWS Artifact"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS Trusted Advisor** provides real-time best-practice checks across those exact 5 categories."
      },
      {
        "id": 7,
        "domain": "D3",
        "prompt": "A company wants to host a **static website** (HTML, CSS, JavaScript, and images) with 99.999999999% (11 nines) durability and global edge caching at the lowest cost. Which **TWO** services should they pair? *(Choose TWO)*",
        "options": [
          {
            "key": "A",
            "text": "Amazon S3"
          },
          {
            "key": "B",
            "text": "Amazon CloudFront"
          },
          {
            "key": "C",
            "text": "Amazon EBS"
          },
          {
            "key": "D",
            "text": "Amazon RDS"
          },
          {
            "key": "E",
            "text": "AWS Direct Connect"
          }
        ],
        "answers": [
          "A",
          "B"
        ],
        "rationale": "**Amazon S3** hosts static files with 11 nines durability, and **Amazon CloudFront** caches them globally at Edge Locations."
      },
      {
        "id": 8,
        "domain": "D1",
        "prompt": "A company has 50 legacy virtual machines running on-premises and must vacate its data center in 45 days. To migrate as quickly as possible with minimal changes, they move the VMs **as-is** to Amazon EC2 using AWS Application Migration Service. Which **7 Rs** strategy is this?",
        "options": [
          {
            "key": "A",
            "text": "Rehost"
          },
          {
            "key": "B",
            "text": "Replatform"
          },
          {
            "key": "C",
            "text": "Refactor"
          },
          {
            "key": "D",
            "text": "Repurchase"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**Rehost** (\"Lift and Shift\") is the fastest strategy, moving VMs as-is with minimal changes."
      },
      {
        "id": 9,
        "domain": "D3",
        "prompt": "A retail website needs a **serverless, event-driven** way to automatically generate image thumbnails whenever a user uploads a photo to Amazon S3—paying only for the milliseconds of execution time. Which compute service fits BEST?",
        "options": [
          {
            "key": "A",
            "text": "Amazon EC2"
          },
          {
            "key": "B",
            "text": "AWS Lambda"
          },
          {
            "key": "C",
            "text": "AWS Elastic Beanstalk"
          },
          {
            "key": "D",
            "text": "Amazon Lightsail"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Lambda** runs event-driven serverless functions triggered by S3 uploads, billed per request and millisecond."
      },
      {
        "id": 10,
        "domain": "D2",
        "prompt": "Which AWS service provisions, manages, and **automatically renews public SSL/TLS certificates** at no additional charge to encrypt HTTPS traffic on an Application Load Balancer or CloudFront distribution?",
        "options": [
          {
            "key": "A",
            "text": "AWS KMS"
          },
          {
            "key": "B",
            "text": "AWS Secrets Manager"
          },
          {
            "key": "C",
            "text": "AWS Certificate Manager (ACM)"
          },
          {
            "key": "D",
            "text": "AWS CloudHSM"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**AWS Certificate Manager (ACM)** provisions and auto-renews public SSL/TLS certificates for free."
      },
      {
        "id": 11,
        "domain": "D3",
        "prompt": "A healthcare company wants to analyze thousands of doctor notes in plain text to detect **patient sentiment, key medical phrases, and language** using Natural Language Processing (NLP). Which AWS AI/ML service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Textract"
          },
          {
            "key": "B",
            "text": "Amazon Comprehend"
          },
          {
            "key": "C",
            "text": "Amazon Rekognition"
          },
          {
            "key": "D",
            "text": "Amazon Kendra"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Comprehend** is AWS's Natural Language Processing (NLP) service for sentiment, entities, and key phrases."
      },
      {
        "id": 12,
        "domain": "D4",
        "prompt": "A company needs **Infrastructure Event Management (IEM)** included for an upcoming major launch, a **Concierge Support Team**, and access to a **pooled team of Technical Account Managers (TAMs)** at a lower price than full Enterprise Support. Which support plan fits?",
        "options": [
          {
            "key": "A",
            "text": "AWS Developer Support"
          },
          {
            "key": "B",
            "text": "AWS Business Support"
          },
          {
            "key": "C",
            "text": "AWS Enterprise On-Ramp Support"
          },
          {
            "key": "D",
            "text": "AWS Enterprise Support"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**AWS Enterprise On-Ramp** includes Pooled TAMs, Concierge Support, and 1 IEM/year at a lower cost than full Enterprise."
      },
      {
        "id": 13,
        "domain": "D1",
        "prompt": "Which **AWS Cloud Adoption Framework (AWS CAF)** perspective focuses on aligning cloud investments with digital transformation goals and tracking measurable **business value**?",
        "options": [
          {
            "key": "A",
            "text": "Operations perspective"
          },
          {
            "key": "B",
            "text": "Business perspective"
          },
          {
            "key": "C",
            "text": "Security perspective"
          },
          {
            "key": "D",
            "text": "Platform perspective"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "The **Business perspective** of AWS CAF aligns IT investments with business outcomes and value."
      },
      {
        "id": 14,
        "domain": "D3",
        "prompt": "A media startup needs a **fully managed NoSQL key-value database** that delivers consistent single-digit millisecond latency at any scale for storing user shopping carts and session state. Which service should they choose?",
        "options": [
          {
            "key": "A",
            "text": "Amazon RDS"
          },
          {
            "key": "B",
            "text": "Amazon DynamoDB"
          },
          {
            "key": "C",
            "text": "Amazon Neptune"
          },
          {
            "key": "D",
            "text": "Amazon Redshift"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon DynamoDB** is AWS's fully managed serverless NoSQL key-value/document database."
      },
      {
        "id": 15,
        "domain": "D2",
        "prompt": "Which **TWO** actions follow AWS best practices for securing the **AWS account root user**? *(Choose TWO)*",
        "options": [
          {
            "key": "A",
            "text": "Enable Multi-Factor Authentication (MFA) on the root user"
          },
          {
            "key": "B",
            "text": "Generate root user access keys for CI/CD pipelines"
          },
          {
            "key": "C",
            "text": "Do not use the root user for daily tasks; create IAM users/roles instead"
          },
          {
            "key": "D",
            "text": "Share the root password among all cloud administrators"
          },
          {
            "key": "E",
            "text": "Disable AWS CloudTrail in unused Regions"
          }
        ],
        "answers": [
          "A",
          "C"
        ],
        "rationale": "Always enable **MFA** on root (**A**) and avoid using root for daily tasks (**C**); never create root access keys."
      },
      {
        "id": 16,
        "domain": "D3",
        "prompt": "A company runs Windows-based applications on Amazon EC2 that require a fully managed, native **Windows SMB shared file system** integrated with Active Directory. Which AWS storage service is purpose-built for this?",
        "options": [
          {
            "key": "A",
            "text": "Amazon EFS"
          },
          {
            "key": "B",
            "text": "Amazon FSx for Windows File Server"
          },
          {
            "key": "C",
            "text": "Amazon EBS"
          },
          {
            "key": "D",
            "text": "EC2 Instance Store"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon FSx for Windows File Server** provides native Windows SMB file shares with Active Directory integration. (EFS = Linux NFS.)"
      },
      {
        "id": 17,
        "domain": "D4",
        "prompt": "A company wants to visualize its **past 12 months of AWS spending**, identify cost spikes by service, and forecast next quarter's spend. Which tool should they open?",
        "options": [
          {
            "key": "A",
            "text": "AWS Pricing Calculator"
          },
          {
            "key": "B",
            "text": "AWS Cost Explorer"
          },
          {
            "key": "C",
            "text": "AWS Service Catalog"
          },
          {
            "key": "D",
            "text": "AWS License Manager"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Cost Explorer** visualizes historical spending trends and forecasts up to 12 months ahead."
      },
      {
        "id": 18,
        "domain": "D2",
        "prompt": "A security analyst receives a high-severity Amazon GuardDuty alert and wants to **visually investigate the root cause** using graph-based analysis of logs across IAM users and EC2 instances. Which AWS service is purpose-built for security root-cause investigation?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Detective"
          },
          {
            "key": "B",
            "text": "Amazon Inspector"
          },
          {
            "key": "C",
            "text": "AWS Artifact"
          },
          {
            "key": "D",
            "text": "AWS Shield"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**Amazon Detective** uses graph analysis to investigate the root cause of security findings."
      },
      {
        "id": 19,
        "domain": "D3",
        "prompt": "A company wants to build an **enterprise search engine** powered by machine learning so employees can ask natural-language questions across internal SharePoint sites, S3 documents, and wikis. Which AWS AI/ML service is designed for intelligent enterprise search?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Lex"
          },
          {
            "key": "B",
            "text": "Amazon Kendra"
          },
          {
            "key": "C",
            "text": "Amazon Comprehend"
          },
          {
            "key": "D",
            "text": "Amazon SageMaker"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Kendra** is AWS's ML-powered intelligent enterprise search service."
      },
      {
        "id": 20,
        "domain": "D1",
        "prompt": "Which pillar of the AWS Well-Architected Framework focuses on **Cloud Financial Management**, adopting a consumption model, and analyzing/attributing expenditure to deliver business value at the lowest price?",
        "options": [
          {
            "key": "A",
            "text": "Sustainability"
          },
          {
            "key": "B",
            "text": "Cost Optimization"
          },
          {
            "key": "C",
            "text": "Operational Excellence"
          },
          {
            "key": "D",
            "text": "Performance Efficiency"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Cost Optimization** covers Cloud Financial Management, consumption models, and attributing expenditure."
      },
      {
        "id": 21,
        "domain": "D3",
        "prompt": "A company wants to orchestrate a **multi-step serverless checkout workflow** (validate inventory -> charge card -> send receipt -> refund on failure) using visual state machines. Which AWS application integration service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SQS"
          },
          {
            "key": "B",
            "text": "Amazon SNS"
          },
          {
            "key": "C",
            "text": "AWS Step Functions"
          },
          {
            "key": "D",
            "text": "Amazon SES"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**AWS Step Functions** orchestrates multi-step serverless workflows using visual state machines."
      },
      {
        "id": 22,
        "domain": "D2",
        "prompt": "A company wants to **continuously collect automated compliance evidence** mapped to HIPAA and PCI DSS controls to simplify its annual external audit. Which AWS service automates compliance evidence collection?",
        "options": [
          {
            "key": "A",
            "text": "AWS Artifact"
          },
          {
            "key": "B",
            "text": "AWS Audit Manager"
          },
          {
            "key": "C",
            "text": "AWS Shield"
          },
          {
            "key": "D",
            "text": "Amazon Macie"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Audit Manager** continuously audits AWS usage and collects automated compliance evidence."
      },
      {
        "id": 23,
        "domain": "D3",
        "prompt": "A data science team needs a **fully managed platform to build, train, and deploy custom machine learning models** from scratch using Jupyter notebooks. Which AWS service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Rekognition"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker"
          },
          {
            "key": "C",
            "text": "Amazon Kendra"
          },
          {
            "key": "D",
            "text": "Amazon Polly"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon SageMaker** is AWS's end-to-end platform to build, train, and deploy custom ML models."
      },
      {
        "id": 24,
        "domain": "D4",
        "prompt": "A company wants to break down its monthly AWS bill by **Environment (`Prod`, `Dev`) and Cost Center** inside Cost Explorer and the Cost and Usage Report. Which feature must they enable?",
        "options": [
          {
            "key": "A",
            "text": "AWS Cost Allocation Tags"
          },
          {
            "key": "B",
            "text": "AWS Resource Access Manager"
          },
          {
            "key": "C",
            "text": "AWS Compute Optimizer"
          },
          {
            "key": "D",
            "text": "AWS Trusted Advisor"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS Cost Allocation Tags** label resources to group and track costs by department/environment in billing reports."
      },
      {
        "id": 25,
        "domain": "D3",
        "prompt": "A company needs to quickly establish an **encrypted network tunnel** from its branch office to its Amazon VPC **over the public internet** within a few hours at low cost. Which connectivity option should they choose?",
        "options": [
          {
            "key": "A",
            "text": "AWS Direct Connect"
          },
          {
            "key": "B",
            "text": "AWS Site-to-Site VPN"
          },
          {
            "key": "C",
            "text": "AWS Snowball Edge"
          },
          {
            "key": "D",
            "text": "Amazon CloudFront"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Site-to-Site VPN** establishes a fast, low-cost encrypted tunnel over the public internet."
      },
      {
        "id": 26,
        "domain": "D2",
        "prompt": "A company discovers that an EC2 instance belonging to another AWS customer is running a port scan against their public servers. Who should they contact to report suspected abuse of AWS resources?",
        "options": [
          {
            "key": "A",
            "text": "AWS Trust and Safety (Abuse) team"
          },
          {
            "key": "B",
            "text": "AWS Concierge Support Team"
          },
          {
            "key": "C",
            "text": "AWS Marketplace Support"
          },
          {
            "key": "D",
            "text": "AWS Professional Services"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "Report suspected abuse of AWS resources to the **AWS Trust and Safety (Abuse) team**."
      },
      {
        "id": 27,
        "domain": "D3",
        "prompt": "A company runs a high-traffic web application that needs **persistent block storage** attached to an EC2 instance so database files survive instance stops and restarts. Which storage service should they attach?",
        "options": [
          {
            "key": "A",
            "text": "EC2 Instance Store"
          },
          {
            "key": "B",
            "text": "Amazon EBS"
          },
          {
            "key": "C",
            "text": "Amazon S3 Glacier"
          },
          {
            "key": "D",
            "text": "AWS Storage Gateway"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon EBS** provides persistent block storage that survives EC2 stops and restarts. (Instance Store is ephemeral.)"
      },
      {
        "id": 28,
        "domain": "D1",
        "prompt": "A company wants to deploy its application in two different AWS Regions—`us-east-1` and `eu-central-1`—to satisfy European data residency laws and provide disaster recovery. Which **TWO** benefits of multi-Region deployments does this achieve? *(Choose TWO)*",
        "options": [
          {
            "key": "A",
            "text": "Data sovereignty / compliance"
          },
          {
            "key": "B",
            "text": "Business continuity and disaster recovery"
          },
          {
            "key": "C",
            "text": "Zero data transfer charges between Regions"
          },
          {
            "key": "D",
            "text": "Automatic shared Instance Store volumes"
          },
          {
            "key": "E",
            "text": "Elimination of IAM policies"
          }
        ],
        "answers": [
          "A",
          "B"
        ],
        "rationale": "Multi-Region deployments provide **data sovereignty/compliance** (**A**) and **disaster recovery/business continuity** (**B**)."
      },
      {
        "id": 29,
        "domain": "D3",
        "prompt": "A mobile app team wants to build a **conversational AI chatbot** for customer support that understands both voice and text inputs (using the same engine that powers Alexa). Which AWS AI/ML service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Connect"
          },
          {
            "key": "B",
            "text": "Amazon Lex"
          },
          {
            "key": "C",
            "text": "Amazon Polly"
          },
          {
            "key": "D",
            "text": "Amazon Translate"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Lex** builds conversational voice and text AI chatbots (the engine behind Alexa)."
      },
      {
        "id": 30,
        "domain": "D2",
        "prompt": "How does an **Amazon VPC Security Group** evaluate return traffic for an allowed inbound HTTP request?",
        "options": [
          {
            "key": "A",
            "text": "Return traffic must be explicitly allowed in an outbound rule because Security Groups are stateless"
          },
          {
            "key": "B",
            "text": "Return traffic is automatically allowed because Security Groups are stateful"
          },
          {
            "key": "C",
            "text": "Return traffic is blocked unless a Network ACL allows it by default"
          },
          {
            "key": "D",
            "text": "Security Groups only filter outbound traffic"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "Security Groups are **stateful**, meaning return traffic for an allowed request is automatically permitted."
      },
      {
        "id": 31,
        "domain": "D3",
        "prompt": "A company needs a **centralized backup service** to automate and govern backup policies across Amazon EBS, Amazon RDS, Amazon DynamoDB, and Amazon EFS from one console. Which AWS service should they use?",
        "options": [
          {
            "key": "A",
            "text": "AWS Storage Gateway"
          },
          {
            "key": "B",
            "text": "AWS Backup"
          },
          {
            "key": "C",
            "text": "AWS Snow Family"
          },
          {
            "key": "D",
            "text": "Amazon S3 Lifecycle Policies"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Backup** centralizes and automates backup policies across EBS, RDS, DynamoDB, EFS, and more."
      },
      {
        "id": 32,
        "domain": "D4",
        "prompt": "A startup wants to hire an **AWS-certified third-party freelancer** for a 2-week architecture review and pay for the work through its existing AWS bill. Which AWS service connects customers with certified freelancers?",
        "options": [
          {
            "key": "A",
            "text": "AWS Managed Services (AMS)"
          },
          {
            "key": "B",
            "text": "AWS IQ"
          },
          {
            "key": "C",
            "text": "AWS Professional Services"
          },
          {
            "key": "D",
            "text": "AWS Activate"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS IQ** connects customers with AWS-certified third-party freelancers billed via AWS."
      },
      {
        "id": 33,
        "domain": "D3",
        "prompt": "A developer needs a **browser-based, pre-authenticated terminal** inside the AWS Management Console to run quick AWS CLI commands without installing anything locally. Which tool should they open?",
        "options": [
          {
            "key": "A",
            "text": "AWS Cloud9"
          },
          {
            "key": "B",
            "text": "AWS CloudShell"
          },
          {
            "key": "C",
            "text": "AWS CodeBuild"
          },
          {
            "key": "D",
            "text": "AWS AppConfig"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS CloudShell** is a browser-based, pre-authenticated shell inside the AWS Console."
      },
      {
        "id": 34,
        "domain": "D2",
        "prompt": "A company wants to centrally manage and enforce **AWS WAF rules and AWS Shield Advanced protections** across 50 AWS accounts in AWS Organizations. Which security service manages firewall rules across multiple accounts?",
        "options": [
          {
            "key": "A",
            "text": "AWS Firewall Manager"
          },
          {
            "key": "B",
            "text": "Amazon GuardDuty"
          },
          {
            "key": "C",
            "text": "AWS Secrets Manager"
          },
          {
            "key": "D",
            "text": "Amazon Inspector"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS Firewall Manager** centrally configures and manages WAF and Shield rules across AWS Organizations accounts."
      },
      {
        "id": 35,
        "domain": "D1",
        "prompt": "A company redesigns a monolithic on-premises ERP application into cloud-native microservices using AWS Lambda, Amazon API Gateway, and Amazon DynamoDB to maximize agility and scalability. Which **7 Rs** migration strategy is this?",
        "options": [
          {
            "key": "A",
            "text": "Rehost"
          },
          {
            "key": "B",
            "text": "Replatform"
          },
          {
            "key": "C",
            "text": "Refactor (Re-architect)"
          },
          {
            "key": "D",
            "text": "Retain"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**Refactor (Re-architect)** redesigns an application using cloud-native/serverless architectures."
      },
      {
        "id": 36,
        "domain": "D3",
        "prompt": "A company needs to send millions of **transactional order-confirmation emails and marketing newsletters** reliably at low cost. Which AWS business application service is built for bulk/transactional email?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SNS"
          },
          {
            "key": "B",
            "text": "Amazon Simple Email Service (Amazon SES)"
          },
          {
            "key": "C",
            "text": "Amazon SQS"
          },
          {
            "key": "D",
            "text": "Amazon Connect"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon SES** is built for high-volume transactional and marketing email delivery."
      },
      {
        "id": 37,
        "domain": "D2",
        "prompt": "Which AWS service allows a company to **centrally control permissions and apply Service Control Policies (SCPs)** as security guardrails across all AWS accounts in a multi-account environment?",
        "options": [
          {
            "key": "A",
            "text": "AWS IAM Identity Center"
          },
          {
            "key": "B",
            "text": "AWS Organizations"
          },
          {
            "key": "C",
            "text": "AWS Artifact"
          },
          {
            "key": "D",
            "text": "Amazon Cognito"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Organizations** centrally manages multiple accounts and enforces guardrails using Service Control Policies (SCPs)."
      },
      {
        "id": 38,
        "domain": "D3",
        "prompt": "A retail analytics team needs a **petabyte-scale cloud data warehouse** to run complex SQL joins and historical business intelligence queries across 5 years of structured transaction data. Which service is purpose-built for this?",
        "options": [
          {
            "key": "A",
            "text": "Amazon DynamoDB"
          },
          {
            "key": "B",
            "text": "Amazon Redshift"
          },
          {
            "key": "C",
            "text": "Amazon Athena"
          },
          {
            "key": "D",
            "text": "Amazon MemoryDB for Redis"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Redshift** is AWS's petabyte-scale cloud data warehouse for complex OLAP/BI analytics."
      },
      {
        "id": 39,
        "domain": "D4",
        "prompt": "Which AWS billing dataset provides the **most comprehensive, granular line-item breakdown** of hourly AWS resource usage and pricing, delivered directly to an Amazon S3 bucket?",
        "options": [
          {
            "key": "A",
            "text": "AWS Budgets"
          },
          {
            "key": "B",
            "text": "AWS Cost Explorer"
          },
          {
            "key": "C",
            "text": "AWS Cost and Usage Report (CUR)"
          },
          {
            "key": "D",
            "text": "AWS Pricing Calculator"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**AWS Cost and Usage Report (CUR)** delivers the most comprehensive, granular line-item billing files to S3."
      },
      {
        "id": 40,
        "domain": "D3",
        "prompt": "A gaming company needs a **Redis-compatible, durable in-memory database** delivering microsecond read latency and single-digit millisecond write latency for real-time player leaderboards. Which service fits BEST?",
        "options": [
          {
            "key": "A",
            "text": "Amazon RDS"
          },
          {
            "key": "B",
            "text": "Amazon MemoryDB for Redis"
          },
          {
            "key": "C",
            "text": "Amazon Neptune"
          },
          {
            "key": "D",
            "text": "Amazon S3"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon MemoryDB for Redis** is a durable, Redis-compatible in-memory database with microsecond reads."
      },
      {
        "id": 41,
        "domain": "D1",
        "prompt": "Which statement accurately describes **Availability Zones (AZs)** within an AWS Region?",
        "options": [
          {
            "key": "A",
            "text": "Availability Zones are physically isolated data centers with independent power and networking so they do not share single points of failure"
          },
          {
            "key": "B",
            "text": "Each AWS Region contains exactly one Availability Zone"
          },
          {
            "key": "C",
            "text": "Availability Zones are located on different continents to minimize latency"
          },
          {
            "key": "D",
            "text": "Availability Zones are identical to CloudFront Edge Locations"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "Availability Zones are physically isolated data centers with independent power/networking to eliminate single points of failure."
      },
      {
        "id": 42,
        "domain": "D2",
        "prompt": "A company wants to encrypt data **at rest** in Amazon EBS, Amazon RDS, and Amazon S3 using centrally managed cryptographic keys integrated natively across AWS services (multi-tenant HSMs). Which service should they use?",
        "options": [
          {
            "key": "A",
            "text": "AWS Key Management Service (AWS KMS)"
          },
          {
            "key": "B",
            "text": "AWS CloudHSM"
          },
          {
            "key": "C",
            "text": "AWS Certificate Manager (ACM)"
          },
          {
            "key": "D",
            "text": "AWS WAF"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS KMS** manages encryption keys integrated natively across AWS services using multi-tenant HSMs."
      },
      {
        "id": 43,
        "domain": "D3",
        "prompt": "A web development team wants a fast way to **build, host, and deploy a full-stack web and mobile frontend** (with CI/CD hosting, auth, and API integration) without manually configuring infrastructure. Which AWS service is designed for this?",
        "options": [
          {
            "key": "A",
            "text": "AWS Amplify"
          },
          {
            "key": "B",
            "text": "AWS Batch"
          },
          {
            "key": "C",
            "text": "Amazon Lightsail"
          },
          {
            "key": "D",
            "text": "AWS Outposts"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS Amplify** accelerates building, hosting, and deploying full-stack web and mobile apps."
      },
      {
        "id": 44,
        "domain": "D2",
        "prompt": "A security team wants to ensure that **every AWS API call** made across their accounts is logged for auditing and compliance, and also wants to **monitor CPU and memory metrics** with automated alarms. Which **TWO** services should they use? *(Choose TWO)*",
        "options": [
          {
            "key": "A",
            "text": "AWS CloudTrail"
          },
          {
            "key": "B",
            "text": "Amazon CloudWatch"
          },
          {
            "key": "C",
            "text": "AWS Artifact"
          },
          {
            "key": "D",
            "text": "AWS Shield"
          },
          {
            "key": "E",
            "text": "Amazon Macie"
          }
        ],
        "answers": [
          "A",
          "B"
        ],
        "rationale": "**AWS CloudTrail** logs API calls for auditing (**A**); **Amazon CloudWatch** monitors metrics and triggers alarms (**B**)."
      },
      {
        "id": 45,
        "domain": "D3",
        "prompt": "A company runs a fleet of 10,000 factory floor sensors that need to securely connect and publish MQTT telemetry to AWS, **plus** run local ML inference on an edge gateway when internet connectivity drops. Which **TWO** AWS IoT services fit? *(Choose TWO)*",
        "options": [
          {
            "key": "A",
            "text": "AWS IoT Core"
          },
          {
            "key": "B",
            "text": "AWS IoT Greengrass"
          },
          {
            "key": "C",
            "text": "AWS Snowmobile"
          },
          {
            "key": "D",
            "text": "Amazon Kinesis only"
          },
          {
            "key": "E",
            "text": "AWS Direct Connect"
          }
        ],
        "answers": [
          "A",
          "B"
        ],
        "rationale": "**AWS IoT Core** connects IoT devices to AWS (**A**); **AWS IoT Greengrass** runs local compute/ML on edge gateways (**B**)."
      },
      {
        "id": 46,
        "domain": "D1",
        "prompt": "A company wants to track the progress of multiple simultaneous server and database migrations from a **single centralized dashboard** in the AWS Console. Which service provides this?",
        "options": [
          {
            "key": "A",
            "text": "AWS Migration Hub"
          },
          {
            "key": "B",
            "text": "AWS Control Tower"
          },
          {
            "key": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "key": "D",
            "text": "AWS Service Catalog"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS Migration Hub** provides a single dashboard to track migration progress across tools."
      },
      {
        "id": 47,
        "domain": "D3",
        "prompt": "A security-conscious company wants to store **Docker container images** privately on AWS so Amazon ECS and AWS Fargate can pull them securely during deployments. Which service is AWS's managed container image registry?",
        "options": [
          {
            "key": "A",
            "text": "Amazon ECS"
          },
          {
            "key": "B",
            "text": "Amazon EKS"
          },
          {
            "key": "C",
            "text": "Amazon Elastic Container Registry (Amazon ECR)"
          },
          {
            "key": "D",
            "text": "AWS CodeArtifact"
          }
        ],
        "answers": [
          "C"
        ],
        "rationale": "**Amazon ECR** is AWS's managed private Docker container image registry."
      },
      {
        "id": 48,
        "domain": "D4",
        "prompt": "A company wants to reserve EC2 capacity for a steady-state 24/7 database server running a **fixed instance family in one specific Region for 3 years** to maximize its discount. Which purchasing option applies?",
        "options": [
          {
            "key": "A",
            "text": "Spot Instances"
          },
          {
            "key": "B",
            "text": "Standard Reserved Instances"
          },
          {
            "key": "C",
            "text": "On-Demand Instances"
          },
          {
            "key": "D",
            "text": "Dedicated Instances only"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Standard Reserved Instances** offer maximum RI savings for steady-state, fixed-family, single-Region 1- or 3-year workloads."
      },
      {
        "id": 49,
        "domain": "D3",
        "prompt": "A social media app wants to automatically **detect inappropriate content, faces, and objects** in millions of user-uploaded photos and videos. Which AWS AI/ML service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Textract"
          },
          {
            "key": "B",
            "text": "Amazon Rekognition"
          },
          {
            "key": "C",
            "text": "Amazon Comprehend"
          },
          {
            "key": "D",
            "text": "Amazon Transcribe"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Rekognition** analyzes images and videos for objects, faces, and content moderation."
      },
      {
        "id": 50,
        "domain": "D2",
        "prompt": "Which AWS service allows you to **share AWS resources** (such as VPC subnets, Transit Gateways, or License Manager configs) securely across multiple AWS accounts without duplicating them?",
        "options": [
          {
            "key": "A",
            "text": "AWS Resource Access Manager (AWS RAM)"
          },
          {
            "key": "B",
            "text": "AWS Artifact"
          },
          {
            "key": "C",
            "text": "AWS Secrets Manager"
          },
          {
            "key": "D",
            "text": "AWS Security Hub"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS Resource Access Manager (RAM)** securely shares AWS resources across accounts without duplication."
      },
      {
        "id": 51,
        "domain": "D3",
        "prompt": "A company wants a **serverless event bus** that routes events from AWS services, custom apps, and third-party SaaS partners (like Zendesk or Datadog) to downstream targets using pattern-matching rules. Which service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon EventBridge"
          },
          {
            "key": "B",
            "text": "Amazon SQS"
          },
          {
            "key": "C",
            "text": "Amazon SES"
          },
          {
            "key": "D",
            "text": "AWS CodeDeploy"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**Amazon EventBridge** is a serverless event bus routing events from AWS, custom apps, and SaaS partners."
      },
      {
        "id": 52,
        "domain": "D1",
        "prompt": "Which of the following is an example of **undifferentiated heavy lifting** that AWS removes when a company adopts managed cloud services?",
        "options": [
          {
            "key": "A",
            "text": "Designing proprietary customer-facing mobile app features"
          },
          {
            "key": "B",
            "text": "Racking, cabling, cooling, and replacing failed physical server hardware"
          },
          {
            "key": "C",
            "text": "Defining business pricing and marketing campaigns"
          },
          {
            "key": "D",
            "text": "Choosing which customer data requires encryption"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "Racking, cabling, cooling, and hardware replacement are \"undifferentiated heavy lifting\" handled by AWS."
      },
      {
        "id": 53,
        "domain": "D3",
        "prompt": "A global e-commerce store wants to **translate product descriptions** from English into 15 languages automatically in real time. Which AWS AI/ML service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Polly"
          },
          {
            "key": "B",
            "text": "Amazon Translate"
          },
          {
            "key": "C",
            "text": "Amazon Transcribe"
          },
          {
            "key": "D",
            "text": "Amazon Comprehend"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon Translate** provides fast, neural machine language translation."
      },
      {
        "id": 54,
        "domain": "D2",
        "prompt": "A company wants to purchase and deploy a **vetted third-party virtual firewall appliance** from Palo Alto Networks with billing consolidated directly onto its AWS invoice. Where should they find and subscribe to it?",
        "options": [
          {
            "key": "A",
            "text": "AWS Artifact"
          },
          {
            "key": "B",
            "text": "AWS Marketplace"
          },
          {
            "key": "C",
            "text": "AWS Service Catalog"
          },
          {
            "key": "D",
            "text": "AWS Knowledge Center"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**AWS Marketplace** is the curated digital catalog for third-party software billed directly to your AWS account."
      },
      {
        "id": 55,
        "domain": "D3",
        "prompt": "A startup wants a **simple, all-in-one virtual private server (VPS)** with a predictable flat monthly bundle price (compute + SSD + static IP + DNS) to host a small WordPress blog. Which AWS compute service is designed for this?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Lightsail"
          },
          {
            "key": "B",
            "text": "AWS Batch"
          },
          {
            "key": "C",
            "text": "Amazon EKS"
          },
          {
            "key": "D",
            "text": "AWS Outposts"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**Amazon Lightsail** offers simple, predictable flat-rate VPS bundles for small websites and apps."
      },
      {
        "id": 56,
        "domain": "D1",
        "prompt": "What is the difference between **High Availability** and **Elasticity** in AWS?",
        "options": [
          {
            "key": "A",
            "text": "High Availability keeps systems operational during failures (e.g., Multi-AZ); Elasticity automatically scales resources up and down to match demand"
          },
          {
            "key": "B",
            "text": "High Availability reduces monthly costs; Elasticity encrypts data at rest"
          },
          {
            "key": "C",
            "text": "High Availability is only for S3; Elasticity is only for RDS"
          },
          {
            "key": "D",
            "text": "They are identical terms for deploying in multiple Regions"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**High Availability** = staying online during failures (Multi-AZ); **Elasticity** = automatically scaling up/down with demand."
      },
      {
        "id": 57,
        "domain": "D3",
        "prompt": "A company wants to **automatically transition** Amazon S3 objects to S3 Standard-IA after 30 days, move them to S3 Glacier Deep Archive after 180 days, and **expire/delete** them after 7 years. Which S3 feature automates this?",
        "options": [
          {
            "key": "A",
            "text": "S3 Replication"
          },
          {
            "key": "B",
            "text": "S3 Lifecycle Policies"
          },
          {
            "key": "C",
            "text": "S3 Versioning"
          },
          {
            "key": "D",
            "text": "S3 Access Points"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**S3 Lifecycle Policies** automate transitioning objects to cheaper storage tiers and expiring old objects."
      },
      {
        "id": 58,
        "domain": "D2",
        "prompt": "Which AWS service provides a **managed Kubernetes** control plane so teams can run standard Kubernetes workloads on AWS without managing master nodes?",
        "options": [
          {
            "key": "A",
            "text": "Amazon ECS"
          },
          {
            "key": "B",
            "text": "Amazon EKS"
          },
          {
            "key": "C",
            "text": "AWS Elastic Beanstalk"
          },
          {
            "key": "D",
            "text": "AWS Lambda"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon EKS** is AWS's managed Kubernetes service. (ECS is AWS's native container orchestrator.)"
      },
      {
        "id": 59,
        "domain": "D4",
        "prompt": "A managed service provider (MSP) resells AWS environments to multiple clients and wants to **customize billing rates, hide internal discounts, and create custom pro-forma bills** per client group. Which AWS Cost Management service enables this?",
        "options": [
          {
            "key": "A",
            "text": "AWS Billing Conductor"
          },
          {
            "key": "B",
            "text": "AWS Pricing Calculator"
          },
          {
            "key": "C",
            "text": "AWS Budgets"
          },
          {
            "key": "D",
            "text": "AWS Cost Explorer"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS Billing Conductor** lets organizations and MSPs customize billing rates and pro-forma chargeback views."
      },
      {
        "id": 60,
        "domain": "D3",
        "prompt": "A company wants a **single front door** to create, publish, throttle, monitor, and secure REST and WebSocket APIs backed by AWS Lambda functions. Which AWS networking service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Route 53"
          },
          {
            "key": "B",
            "text": "Amazon API Gateway"
          },
          {
            "key": "C",
            "text": "AWS Direct Connect"
          },
          {
            "key": "D",
            "text": "AWS Global Accelerator"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon API Gateway** is the managed front door for creating, throttling, and securing REST/WebSocket APIs."
      },
      {
        "id": 61,
        "domain": "D1",
        "prompt": "A company wants to run a workload on AWS using **existing Windows Server licenses** on Dedicated Hosts versus paying AWS for **License Included** instances. Which Domain 1 cloud economics concept does this compare?",
        "options": [
          {
            "key": "A",
            "text": "Rightsizing"
          },
          {
            "key": "B",
            "text": "Licensing strategies (BYOL vs. License Included)"
          },
          {
            "key": "C",
            "text": "Economies of scale"
          },
          {
            "key": "D",
            "text": "Horizontal scaling"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "Comparing Bring Your Own License (BYOL) on Dedicated Hosts vs. License Included instances is evaluating **licensing strategies**."
      },
      {
        "id": 62,
        "domain": "D2",
        "prompt": "An administrator wants to **patch 300 Amazon EC2 instances** across Windows and Linux fleets on a scheduled maintenance window and securely open remote shell sessions without opening SSH port 22. Which AWS management service provides Patch Manager and Session Manager?",
        "options": [
          {
            "key": "A",
            "text": "AWS Systems Manager"
          },
          {
            "key": "B",
            "text": "AWS CloudFormation"
          },
          {
            "key": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "key": "D",
            "text": "AWS Config"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS Systems Manager** includes Patch Manager (fleet OS patching) and Session Manager (portless secure shell access)."
      },
      {
        "id": 63,
        "domain": "D3",
        "prompt": "A company needs to run massive **Apache Hadoop and Apache Spark** big data processing clusters on AWS with managed provisioning and scaling. Which AWS analytics service should they use?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Athena"
          },
          {
            "key": "B",
            "text": "Amazon EMR"
          },
          {
            "key": "C",
            "text": "Amazon QuickSight"
          },
          {
            "key": "D",
            "text": "Amazon Kinesis"
          }
        ],
        "answers": [
          "B"
        ],
        "rationale": "**Amazon EMR** runs managed Apache Hadoop and Apache Spark big data clusters."
      },
      {
        "id": 64,
        "domain": "D1",
        "prompt": "Which official AWS resource provides **community-driven Q&A forums** where AWS experts, partners, and customers answer technical questions?",
        "options": [
          {
            "key": "A",
            "text": "AWS re:Post"
          },
          {
            "key": "B",
            "text": "AWS Artifact"
          },
          {
            "key": "C",
            "text": "AWS Security Hub"
          },
          {
            "key": "D",
            "text": "AWS CloudTrail"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS re:Post** is AWS's official community-driven Q&A forum."
      },
      {
        "id": 65,
        "domain": "D3",
        "prompt": "A company wants to set up a **multi-account AWS landing zone** quickly with pre-configured security guardrails, centralized logging, and an Account Factory following AWS best practices. Which governance service automates this?",
        "options": [
          {
            "key": "A",
            "text": "AWS Control Tower"
          },
          {
            "key": "B",
            "text": "AWS Launch Wizard"
          },
          {
            "key": "C",
            "text": "AWS CloudShell"
          },
          {
            "key": "D",
            "text": "AWS AppSync"
          }
        ],
        "answers": [
          "A"
        ],
        "rationale": "**AWS Control Tower** automates setting up a secure, multi-account AWS landing zone with guardrails and Account Factory."
      }
    ]
  }
};
