# Domain 1: Cloud Concepts (24% of Exam)

Domain 1 focuses on the fundamental concepts of cloud computing, why organizations move to the cloud, the 6 core advantages, the AWS Well-Architected Framework, and the AWS Cloud Adoption Framework (CAF).

---

## 1. What is Cloud Computing?
**Definition:** Cloud computing is the **on-demand delivery of IT resources** over the internet with **pay-as-you-go pricing**. Instead of buying, owning, and maintaining physical data centers and servers, you access technology services (computing power, storage, databases) as needed from a cloud provider like Amazon Web Services (AWS).

### The Three Main Cloud Service Models
| Service Model | Description | What AWS Manages | What You Manage | Example |
| :--- | :--- | :--- | :--- | :--- |
| **IaaS (Infrastructure as a Service)** | Basic building blocks for cloud IT. Provides networking, computers (virtual or hardware), and data storage. | Physical data center, virtualization layer, hardware. | OS, middleware, runtime, applications, data. | Amazon EC2 |
| **PaaS (Platform as a Service)** | Removes the need for you to manage the underlying infrastructure (OS, patching, hardware). | Hardware, OS, provisioning, patching, scaling. | Application code and data configuration. | AWS Elastic Beanstalk |
| **SaaS (Software as a Service)** | A complete product run and managed by the service provider. | Everything (hardware, OS, application, maintenance). | Only your data, user access, and preferences. | AWS WorkDocs, QuickSight, Salesforce, Gmail |

### Cloud Deployment Models
1. **Public Cloud (Cloud-native):** Fully deployed in the cloud. All parts of the application run in the cloud (e.g., all infrastructure in AWS).
2. **Private Cloud (On-premises):** Deployed on-premises using virtualization technologies. Resources are dedicated to a single organization (higher CapEx).
3. **Hybrid Cloud:** Bridges existing on-premises infrastructure with AWS Cloud infrastructure (e.g., using AWS Direct Connect or AWS Outposts).
4. **Multi-cloud:** Using two or more different public cloud providers (e.g., AWS + Azure/GCP).

---

## 2. Six Core Advantages of Cloud Computing (High-Yield Exam Focus)

> [!IMPORTANT]
> The exam **regularly asks questions directly testing these 6 advantages**. Memorize them!

1. **Trade Fixed Expense (CapEx) for Variable Expense (OpEx):**
   - No upfront capital expenditure on physical servers and data centers.
   - Pay only for what you consume, when you consume it.
2. **Benefit from Massive Economies of Scale:**
   - Because AWS aggregates hundreds of thousands of customers, it achieves higher economies of scale, translating into lower pay-as-you-go prices.
3. **Stop Guessing Capacity:**
   - Eliminate guesswork about your infrastructure capacity needs.
   - Scale up or scale down automatically with demand (Elasticity).
4. **Increase Speed and Agility:**
   - New IT resources are only a click away, reducing the time to make resources available to developers from weeks to just minutes.
5. **Stop Spending Money Running and Maintaining Data Centers:**
   - Eliminate the "undifferentiated heavy lifting" of racking, stacking, powering, and cooling physical servers. Focus on your business projects.
6. **Go Global in Minutes:**
   - Deploy applications in multiple AWS Regions around the world with just a few clicks, providing lower latency and better user experience.

---

## 3. High Availability, Fault Tolerance, Scalability, and Elasticity

- **High Availability (HA):** Systems designed to operate continuously without failure for a long time. Achieved by deploying resources across multiple **Availability Zones (AZs)** or Regions.
- **Fault Tolerance (FT):** The ability of a system to continue operating properly in the event of the failure of one or more components (zero downtime).
- **Scalability:** The ability to accommodate larger loads by adding resources.
  - **Vertical Scaling (Scale Up / Down):** Increasing instance size (e.g., moving from `t3.micro` to `t3.2xlarge` - adding more RAM/CPU).
  - **Horizontal Scaling (Scale Out / In):** Adding or removing instances (e.g., going from 2 EC2 instances to 10 EC2 instances via Auto Scaling).
- **Elasticity:** The ability to automatically acquire resources as you need them and release them when you don’t (e.g., EC2 Auto Scaling responding to traffic spikes).

---

## 4. AWS Well-Architected Framework (6 Pillars)

The AWS Well-Architected Framework helps cloud architects build secure, high-performing, resilient, and efficient infrastructure.

```
       ┌────────────────────────────────────────────────────────┐
       │             AWS Well-Architected Framework             │
       ├────────────────────────────────────────────────────────┤
       │ 1. Operational Excellence   4. Performance Efficiency  │
       │ 2. Security                 5. Cost Optimization       │
       │ 3. Reliability              6. Sustainability          │
       └────────────────────────────────────────────────────────┘
```

| Pillar | Focus | Key Design Principles |
| :--- | :--- | :--- |
| **1. Operational Excellence** | Running and monitoring systems to deliver business value and continually improving processes. | Perform operations as code (IaC), annotate documentation, make frequent small reversible changes, anticipate failure, learn from all operational failures. |
| **2. Security** | Protecting information, systems, and assets while delivering business value through risk assessments and mitigation strategies. | Implement a strong identity foundation, enable traceability (CloudTrail), apply security at all layers, protect data in transit and at rest, automate security best practices. |
| **3. Reliability** | Ensuring a workload performs its intended function correctly and consistently when expected. | Automatically recover from failure, test recovery procedures, scale horizontally to increase aggregate workload availability, stop guessing capacity. |
| **4. Performance Efficiency** | Using computing resources efficiently to meet requirements and maintaining efficiency as demand changes. | Democratize advanced technologies, go global in minutes, use serverless architectures, experiment more often. |
| **5. Cost Optimization** | Avoiding unnecessary costs and optimizing spending over time. | Implement cloud financial management, adopt a consumption model, measure overall efficiency, stop spending money on undifferentiated heavy lifting, analyze and attribute expenditure. |
| **6. Sustainability** | Minimizing the environmental impacts of running cloud workloads (reducing carbon footprint). | Understand your impact, establish sustainability goals, maximize utilization, adopt new and more efficient hardware/software offerings, use managed services. |

---

## 5. AWS Cloud Adoption Framework (AWS CAF)

AWS CAF organizes guidance into **6 Perspectives**, divided into two groups:

### Business Capabilities (Focus on Business Strategy)
1. **Business Perspective:** Ensures that cloud investments align with business outcomes and goals. (Roles: Business managers, finance, budget owners).
2. **People Perspective:** Focuses on culture, change management, training, organizational structure, and upskilling staff for cloud adoption. (Roles: HR, organizational leaders).
3. **Governance Perspective:** Aligns IT investments with business strategy, managing risks, program management, and portfolio management. (Roles: CIO, program managers, enterprise architects).

### Technical Capabilities (Focus on Implementation)
4. **Platform Perspective:** Focuses on architecture principles, provisioning, migrating workloads, and modernizing applications. (Roles: CTO, technical architects, engineers).
5. **Security Perspective:** Focuses on compliance, data privacy, IAM, incident response, and infrastructure protection. (Roles: CISO, security managers).
6. **Operations Perspective:** Ensures that cloud workloads are delivered and operated according to SLAs, monitoring health and incident management. (Roles: Operations managers, SREs).

---

## 6. Cloud Migration Strategies: The 7 Rs

When migrating existing applications to AWS:
1. **Rehost ("Lift and Shift"):** Move applications without changes (e.g., using AWS Application Migration Service - MGN).
2. **Replatform ("Lift, Tinker, and Shift"):** Make cloud optimizations to achieve tangible benefits without changing core application architecture (e.g., moving self-hosted DB to Amazon RDS).
3. **Refactor / Re-architect:** Re-imagine and rewrite how the application is architected, often using cloud-native features (e.g., serverless microservices with Lambda and DynamoDB).
4. **Repurchase ("Drop and Shop"):** Moving to a different product, typically a SaaS model (e.g., moving from custom CRM to Salesforce or AWS Marketplace software).
5. **Retain:** Keep the application on-premises because it's not ready, or due to compliance constraints.
6. **Retire:** Decommission applications that are no longer needed.
7. **Relocate:** Hypervisor-level lift and shift without modifying hardware or rewriting code (e.g., VMware Cloud on AWS).
