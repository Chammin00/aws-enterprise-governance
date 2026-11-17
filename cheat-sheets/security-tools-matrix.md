# AWS Security Services Matrix Cheat Sheet

AWS security questions often confuse candidates because names sound similar (Inspector vs GuardDuty vs Detective). Use this matrix to lock down the exact differentiators.

---

## 1. Quick-Fire Security Disambiguation

| Service | Category | Monitored Targets | Key Trigger Words / Use Case |
| :--- | :--- | :--- | :--- |
| **Amazon GuardDuty** | Threat Detection | AWS CloudTrail, VPC Flow Logs, DNS Query Logs | "Intelligent threat detection", "Machine learning anomaly detection", "Compromised AWS account", "Crypto-mining activity". |
| **Amazon Inspector** | Vulnerability Assessment | EC2 instances, ECR container images, Lambda code | "Automated vulnerability scanning", "CVE database checks", "Unintended network exposure", "Software vulnerabilities". |
| **Amazon Macie** | Data Privacy & DLP | Amazon S3 Buckets | "Sensitive data discovery", "Personally Identifiable Information (PII)", "SSNs / credit cards in S3", "Data compliance". |
| **AWS Security Hub** | Security Posture Management | Alerts from GuardDuty, Inspector, Macie, IAM, Firewall Manager | "Centralized dashboard", "Single pane of glass", "Aggregates security alerts", "Security benchmark compliance (CIS, PCI-DSS)". |
| **Amazon Detective** | Security Investigation | GuardDuty findings, VPC flow logs, CloudTrail | "Root cause investigation", "Visual graph timeline", "Why and how an attack happened", "Deep security forensics". |
| **AWS Artifact** | Compliance Documentation | AWS infrastructure certifications | "Download SOC 1/2/3 reports", "PCI-DSS compliance proof", "HIPAA Business Associate Addendum (BAA)", "Auditor requests". |
| **AWS WAF** | Application Firewall | CloudFront, ALB, API Gateway, AppSync | "Layer 7 inspection", "SQL injection (SQLi)", "Cross-site scripting (XSS)", "Block specific IP ranges or geographic countries". |
| **AWS Shield Standard** | DDoS Protection (Free) | All AWS customer endpoints | "Layer 3 and Layer 4 DDoS protection", "SYN floods, UDP reflection", "Automatically active at no cost". |
| **AWS Shield Advanced** | DDoS Protection (Paid) | CloudFront, Route 53, ALB, Global Accelerator | "DDoS Response Team (DRT) 24/7 access", "Financial protection against bill spikes", "Advanced Layer 7 mitigation". |
| **AWS Secrets Manager** | Secrets & Passwords | RDS, Redshift, DocumentDB, API tokens | "Automatic password rotation", "Rotate credentials without redeploying code", "Fine-grained secret access". |
| **AWS KMS** | Cryptographic Keys | All encrypted AWS services (S3, EBS, RDS) | "Customer Managed Keys (CMK)", "Envelope encryption", "FIPS 140-2 Level 2/3 validated multi-tenant HSM". |
| **AWS CloudHSM** | Dedicated HSM | Enterprise compliance workloads | "Dedicated hardware security module", "Single-tenant hardware", "FIPS 140-2 Level 3 dedicated control". |
| **AWS CloudTrail** | API Auditing | All AWS API calls across the account | "Who did what, when, and from where?", "API request history", "User activity audit log". |
| **AWS Config** | Resource Configuration | AWS resource configurations over time | "Configuration drift", "Audit resource compliance over time", "Did someone change an S3 bucket from private to public?". |
