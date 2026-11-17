# Domain 4: Billing, Pricing, and Support (12% of Exam)

Domain 4 tests your knowledge of how AWS charges for services, cost management and budgeting tools, consolidated billing through AWS Organizations, and the four AWS Support Plans.

---

## 1. AWS Pricing Principles

AWS follows three fundamental pricing principles:
1. **Pay-as-you-go:** Pay only for the individual services you need, for as long as you use them, without requiring long-term contracts or complex licensing.
2. **Save when you commit:** Commit to 1- or 3-year plans (Savings Plans, Reserved Instances) for compute or database services to receive discounts up to 72%.
3. **Pay less by using more:** Benefit from volume-based tiered discounts (e.g., the more data you store in Amazon S3 or transfer via CloudFront, the less you pay per GB).

### Data Transfer Pricing Rules (High Yield)
- **Data Transfer IN to AWS** is **FREE** from the internet across all services.
- **Data Transfer OUT from AWS to the Internet** is **charged per GB** (tiered pricing).
- **Data Transfer between AWS services in the same Region and same AZ** is generally free.
- **Data Transfer between different Regions** incurs inter-region transfer charges.

---

## 2. AWS Free Tier

The AWS Free Tier allows customers to explore and try out AWS services free of charge up to specified limits:
1. **Always Free:** Never expires; available to all AWS customers.
   - *Examples:* AWS Lambda (1 million free requests/month), Amazon DynamoDB (25 GB free storage), Amazon SNS (1 million free publishes).
2. **12 Months Free:** Available for 12 months following initial AWS sign-up date.
   - *Examples:* Amazon EC2 (750 hours/month of `t2.micro` or `t3.micro`), Amazon S3 (5 GB standard storage), Amazon RDS (750 hours/month of single-AZ micro database).
3. **Short-Term Trials:** Short trial period starting from service activation.
   - *Examples:* Amazon GuardDuty (30-day free trial), Amazon Inspector (15-day trial).

---

## 3. Cost Management & Billing Tools

> [!IMPORTANT]
> Be sure you can distinguish between **Pricing Calculator**, **Cost Explorer**, and **AWS Budgets**.

| Tool | Purpose | When to Use |
| :--- | :--- | :--- |
| **AWS Pricing Calculator** | **Pre-deployment cost estimation** | You are planning a new architecture or solution and want to estimate monthly costs **before building it**. |
| **AWS Cost Explorer** | **Post-deployment analysis & forecasting** | You want to visualize, analyze, and understand historical spending patterns (up to 12 months past) and **forecast future costs** (up to 12 months ahead). |
| **AWS Budgets** | **Spend tracking & threshold alerts** | You want to set custom spending or usage limits and receive **alerts (email/SNS)** when costs exceed (or are forecasted to exceed) your defined threshold. |
| **AWS Cost and Usage Report (CUR)** | **Deep, granular billing data** | The most detailed and comprehensive billing dataset available. Automatically delivers hourly/daily CSV files directly to an Amazon S3 bucket. |
| **Cost Allocation Tags** | **Categorizing & attributing costs** | Key-value pairs (e.g., `Environment: Production`, `Department: Marketing`) attached to resources to organize billing by department, application, or owner. |
| **AWS Billing Conductor** | **Customized billing rates** | Used by MSPs (Managed Service Providers) or enterprises to customize billing rates and financial reporting for internal chargebacks. |

---

## 4. AWS Organizations & Consolidated Billing

**AWS Organizations** allows you to centrally manage and govern multiple AWS accounts:
- **Consolidated Billing:**
  - One single monthly bill for all accounts in the organization.
  - Combines usage across all member accounts to qualify for **volume discounts** (e.g., aggregated S3 storage tiers).
  - Automatically shares **Reserved Instances (RIs)** and **Savings Plans** discounts across all accounts in the organization family.
- **Hierarchical Structure:**
  - Root -> Organizational Units (OUs) -> AWS Accounts.
- **Service Control Policies (SCPs):**
  - Centralized guardrails that specify the **maximum available permissions** for accounts in an OU.
  - Even account root users cannot bypass an SCP rule!

---

## 5. AWS Support Plans Comparison (Guaranteed Exam Questions)

```
┌────────────────────────────────────────────────────────────────────────┐
│                        AWS Support Plan Tiers                          │
│                                                                        │
│   Basic ──► Developer ──► Business ──► Enterprise On-Ramp ──► Enterprise
│   (Free)     ($29/mo)      ($100/mo)        ($5,500/mo)         ($15,000/mo)│
└────────────────────────────────────────────────────────────────────────┘
```

| Feature | Basic | Developer | Business | Enterprise On-Ramp | Enterprise |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Monthly Cost** | Free | Greater of $29 or 3% of monthly bill | Greater of $100 or 10%–3% | Greater of $5,500 or 10% | Greater of $15,000 or 10%–3% |
| **Target Audience** | All AWS accounts, experimentation | Testing and development workloads | Production workloads | Business-critical workloads | Mission-critical workloads |
| **Who Can Open Cases?** | Customer service / billing only | 1 primary contact | Unlimited contacts | Unlimited contacts | Unlimited contacts |
| **Access Channels** | Docs, Whitepapers, Forums | Business hours email access | **24/7 phone, chat, and email** | **24/7 phone, chat, and email** | **24/7 phone, chat, and email** |
| **Response Times** | N/A | General guidance: < 24h<br>System impaired: < 12h | Production system impaired: < 4h<br>**Production system down: < 1h** | Business-critical system down: **< 30 mins** | Business-critical system down: **< 15 mins** |
| **Trusted Advisor** | 7 core checks | 7 core checks | **Full checks (all categories)** | **Full checks** | **Full checks** |
| **Technical Account Manager (TAM)** | None | None | None | **Pool of TAMs** | **Designated TAM** |
| **Support Concierge** | None | None | None | Yes | **Designated Concierge** (Billing & account specialist) |
| **Infrastructure Event Management (IEM)** | None | None | Available for additional fee | Included | **Included** |
| **Third-Party Software Support** | None | None | Common operating systems and software components | Full support | Full support |
