# Domain 2: Security and Compliance (30% of Exam)

Domain 2 is the second largest domain (30%). It covers the AWS Shared Responsibility Model, IAM (Identity and Access Management), network security, encryption, compliance artifacts, and AWS threat detection services.

---

## 1. The AWS Shared Responsibility Model

The fundamental security concept tested on the exam is: **AWS is responsible for security OF the cloud, and the Customer is responsible for security IN the cloud.**

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CUSTOMER RESPONSIBILITY                         │
│                         "Security IN the Cloud"                        │
├────────────────────────────────────────────────────────────────────────┤
│ • Customer Data (Classification, Encryption at-rest and in-transit)   │
│ • Identity & Access Management (IAM users, passwords, MFA, roles)     │
│ • Operating System Configuration & Patching (on EC2 instances)         │
│ • Network & Firewall Configuration (Security Groups, Network ACLs)    │
│ • Application Code & Middleware Configuration                         │
└────────────────────────────────────────────────────────────────────────┘
                                    ▲
════════════════════════════════════╪═════════════════════════════════════
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                           AWS RESPONSIBILITY                           │
│                         "Security OF the Cloud"                        │
├────────────────────────────────────────────────────────────────────────┤
│ • Physical Data Center Security (guards, biometric access, cameras)    │
│ • Hardware & Global Infrastructure (servers, cables, power, racks)    │
│ • Software & Virtualization Layer (Hypervisors)                       │
│ • Networking Infrastructure (Edge Locations, Regions, AZs)            │
│ • Patching OS on Managed Services (RDS, DynamoDB, Lambda, S3)         │
└────────────────────────────────────────────────────────────────────────┘
```

### Shared Controls
- **Patch Management:** AWS is responsible for patching infrastructure and managed services (e.g., RDS OS); the customer is responsible for patching guest OS and applications on EC2.
- **Configuration Management:** AWS maintains configuration of infrastructure devices; customer configures their own guest OS, databases, and applications.
- **Awareness & Training:** AWS trains AWS employees; customer trains their own staff.

---

## 2. AWS Identity and Access Management (IAM)

IAM is a global service used to securely control individual and group access to AWS resources.

### Key IAM Components
1. **Root User:**
   - Created when the AWS account is first established.
   - Has complete, unrestricted access to all resources and billing.
   - **Best Practice:** Do NOT use the root user for everyday tasks. Lock away root credentials, create an IAM admin user, and **always enable MFA** on root.
2. **IAM Users:**
   - Persistent identities representing a person or application.
   - Have credentials (Console password or CLI Access Keys).
3. **IAM Groups:**
   - A collection of IAM users. Permissions applied to a group apply to all users in that group.
   - *Note:* Groups cannot contain other groups; groups cannot be identified as a Principal in a resource policy.
4. **IAM Roles:**
   - An identity with permission policies that determine what the identity can and cannot do.
   - Does **not** have permanent credentials (uses temporary security tokens).
   - Intended to be assumed by:
     - AWS services (e.g., granting an EC2 instance permission to read an S3 bucket).
     - External identities (e.g., federated users from Active Directory or Google).
5. **IAM Policies:**
   - JSON documents specifying permissions.
   - Structure includes:
     - `Effect`: `"Allow"` or `"Deny"`.
     - `Action`: The API calls allowed/denied (e.g., `"s3:GetObject"`).
     - `Resource`: The ARN (Amazon Resource Name) of the target (e.g., `"arn:aws:s3:::my-bucket/*"`).
   - **Principle of Least Privilege:** Grant only the permissions necessary to perform the job.

### IAM Security Best Practices
- **Multi-Factor Authentication (MFA):** Adds a second layer of defense (authenticator app, security key).
- **Rotate Access Keys periodically.**
- **IAM Credential Report:** A downloadable CSV report listing all IAM users in the account and the status of their credentials (passwords, access keys, MFA).
- **IAM Access Analyzer:** Identifies resources (like S3 buckets or IAM roles) that are shared with an external entity outside your AWS organization.
- **AWS IAM Identity Center (formerly AWS Single Sign-On):** Centralizes access management to multiple AWS accounts and business cloud apps.

---

## 3. Network Security: Security Groups vs. Network ACLs

> [!IMPORTANT]
> The exam **frequently contrasts Security Groups and Network Access Control Lists (NACLs)**.

| Feature | Security Group (SG) | Network ACL (NACL) |
| :--- | :--- | :--- |
| **Level** | Operates at the **Instance level** (virtual network interface) | Operates at the **Subnet level** |
| **State** | **Stateful:** Return traffic is automatically allowed regardless of inbound rules | **Stateless:** Return traffic must be explicitly allowed by outbound rules |
| **Rule Types** | Supports **ALLOW rules only** (everything else denied by default) | Supports both **ALLOW and DENY rules** |
| **Evaluation** | All rules evaluated before deciding to allow traffic | Rules evaluated in strict **numerical order** (lowest number first) |
| **Default behavior** | Default SG allows all outbound, blocks all inbound | Default NACL allows all inbound and outbound traffic |

---

## 4. AWS Security, Threat Detection & Compliance Services

### Defense & Firewalls
- **AWS WAF (Web Application Firewall):**
  - Operates at **Layer 7 (Application layer)**.
  - Protects web applications against common web exploits (SQL injection, Cross-Site Scripting / XSS).
  - Can inspect HTTP/HTTPS requests, block IP addresses, and enforce rate limits.
  - Integrates with Amazon CloudFront, Application Load Balancer (ALB), Amazon API Gateway, and AWS AppSync.
- **AWS Shield:**
  - Protects against **DDoS (Distributed Denial of Service)** attacks at Layers 3 and 4.
  - **AWS Shield Standard:** Automatically enabled for **FREE** for all AWS customers.
  - **AWS Shield Advanced:** Paid tier ($3,000/month) with 24/7 access to the AWS DDoS Response Team (DRT), Layer 7 DDoS mitigation, and financial protection against bill spikes from DDoS attacks.

### Threat Detection & Vulnerability Assessment
- **Amazon GuardDuty:**
  - Intelligent threat detection using Machine Learning and anomaly detection.
  - Continuously monitors **CloudTrail events, VPC Flow Logs, and DNS query logs**.
  - Detects compromised instances, unauthorized behavior, and crypto-mining.
- **Amazon Inspector:**
  - Automated vulnerability management service.
  - Scans **EC2 instances, Amazon ECR container images, and AWS Lambda functions** for software vulnerabilities and unintended network exposure.
- **Amazon Macie:**
  - Data security and privacy service powered by ML.
  - Scans **Amazon S3** buckets to discover, classify, and protect sensitive data (e.g., PII like SSNs, credit card numbers).
- **AWS Security Hub:**
  - Centralized single-pane-of-glass dashboard that aggregates security alerts and compliance checks from GuardDuty, Inspector, Macie, Firewall Manager, and AWS partner tools.
- **Amazon Detective:**
  - Analyzes, investigates, and quickly identifies the root cause of security findings or suspicious activity.

### Compliance & Governance
- **AWS Artifact:**
  - On-demand portal for direct access to **AWS compliance documentation and agreements**.
  - **AWS Artifact Reports:** Download compliance certifications (SOC 1/2/3, PCI DSS, ISO/IEC 27001, FedRAMP).
  - **AWS Artifact Agreements:** Review and accept agreements with AWS (e.g., HIPAA Business Associate Addendum - BAA).
- **AWS Audit Manager:**
  - Continuously audits your AWS usage to simplify risk and compliance assessments against industry standards.

### Encryption & Secrets Management
- **AWS KMS (Key Management Service):**
  - Managed service to create and control cryptographic encryption keys used to encrypt data across AWS services.
  - Shared hardware (multi-tenant) validated under FIPS 140-2 Level 2/3.
- **AWS CloudHSM:**
  - Dedicated hardware security module (single-tenant) physically isolated inside AWS data centers for regulatory compliance (FIPS 140-2 Level 3).
- **AWS Secrets Manager:**
  - Securely stores, retrieves, and **automatically rotates** database credentials, API keys, and passwords.
- **AWS Systems Manager Parameter Store:**
  - Secure, hierarchical storage for configuration data management and passwords/secrets (rotation is not built-in, but integrates with KMS).
