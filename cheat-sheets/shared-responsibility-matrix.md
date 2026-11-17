# Shared Responsibility Model Cheat Sheet

The AWS Shared Responsibility Model answers one crucial question: **Who is responsible for what?**

---

## The Core Rule

$$\text{AWS} = \textbf{Security OF the Cloud} \quad \Big| \quad \text{Customer} = \textbf{Security IN the Cloud}$$

---

## 1. Responsibility Classification Table

| Task / Item | AWS Responsibility | Customer Responsibility | Key Exam Notes |
| :--- | :---: | :---: | :--- |
| **Physical Data Center Security** (biometrics, security guards, cameras) | ✅ | ❌ | Customers never have physical access to AWS data centers. |
| **Hardware Lifecycle & Disposal** (shredding hard drives, server racks) | ✅ | ❌ | AWS guarantees NIST 800-88 compliant physical media destruction. |
| **Virtualization Hypervisor Patching** | ✅ | ❌ | AWS patches Xen / Nitro hypervisors transparently. |
| **EC2 Operating System Patching** | ❌ | ✅ | Customer is root/admin on EC2 and must install OS updates. |
| **RDS Operating System Patching** | ✅ | ❌ | AWS manages the underlying OS on RDS; customer manages DB schema & queries. |
| **Lambda Infrastructure & Runtime** | ✅ | ❌ | AWS manages execution environment; customer writes application code. |
| **Network & Firewall Rules** (Security Groups & NACLs) | ❌ | ✅ | Customer configures open/closed ports and IP allowances. |
| **Customer Data Encryption** (at rest & in transit) | ❌ | ✅ | AWS provides KMS/SSL tools; customer is responsible for enabling and managing encryption. |
| **IAM User Credentials, Passwords, MFA** | ❌ | ✅ | Customer defines policies, manages users, and enforces MFA. |
| **S3 Bucket Public/Private Permissions** | ❌ | ✅ | Customer configures S3 Block Public Access and bucket policies. |
| **Edge Location & Global Network Cables** | ✅ | ❌ | AWS maintains fiber cables, routers, and PoPs globally. |

---

## 2. Infrastructure as a Service (IaaS) vs. Managed Services vs. Serverless

```
┌────────────────────────────────────────────────────────┐
│ EC2 (IaaS):                                            │
│   AWS: Physical hardware, hypervisor, data center      │
│   YOU: OS patching, middleware, runtime, code, data    │
├────────────────────────────────────────────────────────┤
│ RDS / Elastic Beanstalk (PaaS / Managed):              │
│   AWS: Physical hardware, hypervisor, OS patching      │
│   YOU: Database engine settings, schema, data, code    │
├────────────────────────────────────────────────────────┤
│ S3 / DynamoDB / Lambda (Serverless):                   │
│   AWS: Hardware, OS, runtime, scaling, backups engine  │
│   YOU: IAM access permissions, data content, API calls │
└────────────────────────────────────────────────────────┘
```
