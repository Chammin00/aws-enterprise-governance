# 50 Official-Style CLF-C02 Flashcards (Skill Builder Exam Prep Edition)

> Mirrors the **50 flashcards** referenced in the AWS Skill Builder *Exam Prep Plan (CLF-C02)*.  
> **How to drill:** Cover the right column, read the prompt, say the answer out loud, and mark any you miss to re-drill on Dec 1.

---

## Domain 1: Cloud Concepts (Cards 1–12)

| # | Front (Prompt / Scenario) | Back (Exam Answer) |
| :-: | :--- | :--- |
| 1 | Replacing upfront hardware spending with pay-as-you-go usage is trading ___ for ___. | **Fixed expense (CapEx)** for **Variable expense (OpEx)** |
| 2 | Which Well-Architected pillar covers "operations as code" and "game days"? | **Operational Excellence** |
| 3 | Which Well-Architected pillar covers "automatically recover from failure" and "scale horizontally"? | **Reliability** |
| 4 | Which Well-Architected pillar covers "democratize advanced technologies" and "serverless"? | **Performance Efficiency** |
| 5 | Which Well-Architected pillar covers "Graviton processors" and "minimizing environmental impact"? | **Sustainability** |
| 6 | What are the **6 perspectives** of the AWS Cloud Adoption Framework (CAF)? | Business, People, Governance *(Business)* + Platform, Security, Operations *(Technical)* |
| 7 | "Lift and Shift" migration strategy (fast, move as-is) = which R? | **Rehost** |
| 8 | "Lift, Tinker, and Shift" (e.g., moving self-managed DB to RDS) = which R? | **Replatform** |
| 9 | "Drop and Shop" (moving to a SaaS product) = which R? | **Repurchase** |
| 10 | Redesigning an app to be cloud-native/serverless = which R? | **Refactor (Re-architect)** |
| 11 | Matching EC2 instance types/sizes to actual workload demand is called ___. | **Rightsizing** (tool: **AWS Compute Optimizer**) |
| 12 | Physical ruggedized devices for offline petabyte/terabyte data transfer & edge compute? | **AWS Snow Family** (Snowcone, Snowball Edge, Snowmobile) |

---

## Domain 2: Security and Compliance (Cards 13–25)

| # | Front (Prompt / Scenario) | Back (Exam Answer) |
| :-: | :--- | :--- |
| 13 | AWS is responsible for Security ___ the Cloud; Customer is responsible for Security ___ the Cloud. | **OF** the Cloud (AWS) / **IN** the Cloud (Customer) |
| 14 | Name the 3 **Shared Controls** in the Shared Responsibility Model. | **Patch Management**, **Configuration Management**, **Awareness & Training** |
| 15 | Who patches the guest OS on **EC2** vs. the DB OS on **RDS**? | **Customer** patches EC2 guest OS; **AWS** patches RDS OS & DB engine |
| 16 | Where do you download AWS compliance reports (SOC, PCI, ISO) and sign a HIPAA BAA? | **AWS Artifact** |
| 17 | **CloudTrail** vs. **CloudWatch** vs. **AWS Config** — 3-word distinction? | CloudTrail = **API Auditing**; CloudWatch = **Metrics/Logs/Alarms**; Config = **Config History/Compliance** |
| 18 | **GuardDuty** vs. **Inspector** vs. **Macie** — 3-word distinction? | GuardDuty = **Threat Detection**; Inspector = **CVE Vulnerability Scans**; Macie = **S3 PII Discovery** |
| 19 | **AWS Shield** vs. **AWS WAF** — which OSI layers & attacks? | **Shield** = DDoS (L3/L4); **WAF** = Web App Firewall (L7: SQLi, XSS) |
| 20 | **Security Groups** vs. **Network ACLs** — level, statefulness, rules? | **SG** = Instance-level, **Stateful**, Allow-only; **NACL** = Subnet-level, **Stateless**, Allow & Deny |
| 21 | Best practice for granting an EC2 instance permission to access S3? | Attach an **IAM Role** (temporary credentials; never hardcode keys) |
| 22 | **IAM Identity Center** vs. **Amazon Cognito** — who logs in? | **IAM Identity Center** = Workforce/employees (SSO); **Cognito** = Web/mobile app end-users |
| 23 | **AWS KMS** vs. **AWS CloudHSM** — key difference? | **KMS** = Managed multi-tenant HSM; **CloudHSM** = Dedicated **single-tenant** HSM |
| 24 | Store database passwords with **automatic rotation**? | **AWS Secrets Manager** |
| 25 | Aggregate security findings from GuardDuty, Inspector, and Macie in one place? | **AWS Security Hub** |

---

## Domain 3: Cloud Technology and Services (Cards 26–41)

| # | Front (Prompt / Scenario) | Back (Exam Answer) |
| :-: | :--- | :--- |
| 26 | **Region** vs. **Availability Zone** vs. **Edge Location**? | **Region** = Geographic area (3+ AZs); **AZ** = Isolated data center(s); **Edge** = CloudFront/Route 53 caching PoP |
| 27 | **Local Zones** vs. **Wavelength** vs. **Outposts**? | **Local Zones** = Metro area latency; **Wavelength** = Inside 5G telecoms; **Outposts** = AWS racks in *your* data center |
| 28 | Serverless compute for **functions** vs. serverless compute for **containers**? | **AWS Lambda** (functions) / **AWS Fargate** (containers on ECS/EKS) |
| 29 | **Amazon S3** durability and max single object size? | **99.999999999% (11 nines)** durability; **5 TB** max object size |
| 30 | Cheapest S3 archival storage class (12–48 hr retrieval)? | **S3 Glacier Deep Archive** |
| 31 | S3 storage class for **unknown or changing** access patterns? | **S3 Intelligent-Tiering** |
| 32 | **EBS** vs. **Instance Store** vs. **EFS** vs. **FSx**? | **EBS** = Persistent block (1 AZ); **Instance Store** = Ephemeral block; **EFS** = Linux NFS multi-AZ; **FSx** = Windows/Lustre file share |
| 33 | **RDS** vs. **Aurora** vs. **DynamoDB** vs. **Redshift** vs. **Neptune**? | **RDS** = Managed SQL; **Aurora** = Cloud-native SQL (5x MySQL); **DynamoDB** = NoSQL; **Redshift** = Data Warehouse; **Neptune** = Graph |
| 34 | **AWS Site-to-Site VPN** vs. **AWS Direct Connect**? | **VPN** = Encrypted over public internet (fast setup); **Direct Connect** = Private dedicated fiber (consistent bandwidth) |
| 35 | **CloudFront** vs. **Global Accelerator**? | **CloudFront** = Caches content at Edge (HTTP/HTTPS); **Global Accelerator** = Static Anycast IPs over AWS network (TCP/UDP/HTTP) |
| 36 | Serverless **SQL queries directly on S3** vs. serverless **ETL**? | **Amazon Athena** (SQL on S3) / **AWS Glue** (ETL & Data Catalog) |
| 37 | **Polly** vs. **Transcribe** vs. **Translate**? | **Polly** = Text-to-Speech; **Transcribe** = Speech-to-Text; **Translate** = Language translation |
| 38 | **Rekognition** vs. **Textract** vs. **Comprehend** vs. **Kendra** vs. **Lex**? | **Rekognition** = Images/Video; **Textract** = Scanned Docs/OCR; **Comprehend** = NLP; **Kendra** = Enterprise Search; **Lex** = Chatbots |
| 39 | **SQS** vs. **SNS** vs. **EventBridge** vs. **Step Functions**? | **SQS** = Pull Queue; **SNS** = Push Pub/Sub; **EventBridge** = Event Bus; **Step Functions** = Workflow Orchestration |
| 40 | **Amazon WorkSpaces** vs. **Amazon AppStream 2.0**? | **WorkSpaces** = Cloud virtual desktops (VDI); **AppStream 2.0** = Stream desktop apps to a browser |
| 41 | Convert DB schema between different engines (Oracle → Postgres) + migrate data? | **AWS SCT** (schema conversion) + **AWS DMS** (data migration) |

---

## Domain 4: Billing, Pricing, and Support (Cards 42–50)

| # | Front (Prompt / Scenario) | Back (Exam Answer) |
| :-: | :--- | :--- |
| 42 | Up to **90% off** EC2 for fault-tolerant, interruptible workloads (2-min warning)? | **EC2 Spot Instances** |
| 43 | Most flexible 1- or 3-year compute discount (covers EC2 families, Regions, Fargate, Lambda)? | **Compute Savings Plans** |
| 44 | Physical EC2 server dedicated to you for **BYOL** (socket/core-bound licenses)? | **EC2 Dedicated Hosts** |
| 45 | Data transfer **IN** from internet vs. **OUT** to internet? | **IN** = Free ($0); **OUT** = Charged |
| 46 | **Pricing Calculator** vs. **Cost Explorer** vs. **Budgets** vs. **CUR**? | **Calculator** = Estimate before; **Cost Explorer** = Visualize past/forecast; **Budgets** = Spend alerts; **CUR** = Most granular line-item file |
| 47 | Consolidated billing + shared RIs/Savings Plans + volume discounts across accounts? | **AWS Organizations** |
| 48 | Lowest Support Plan with **Full Trusted Advisor checks** + 24/7 phone/chat/email? | **Business Support** (< 1 hr Production Down) |
| 49 | **Enterprise On-Ramp** vs. **Enterprise Support** (TAM & SLA)? | **On-Ramp** = Pooled TAM, < 30m Critical Down; **Enterprise** = Dedicated TAM, **< 15m** Critical Down |
| 50 | Hire certified AWS freelancers vs. buy 3rd-party software vs. have AWS run your ops? | **AWS IQ** (freelancers) / **AWS Marketplace** (3rd-party software) / **AWS Managed Services (AMS)** (AWS runs ops) |
