# AWS Database Comparison Cheat Sheet

Use this cheat sheet to quickly identify the exact database AWS wants you to choose based on exam scenario keywords.

---

## 1. Quick Match Keyword Guide

| If the question mentions... | The answer is... | Key Rationale |
| :--- | :--- | :--- |
| "Traditional relational DB", "SQL", "PostgreSQL", "MySQL", "Oracle", "SQL Server", "OLTP" | **Amazon RDS** | Managed relational database engine with automated backups, patching, and Multi-AZ failover. |
| "Highest performance SQL", "5x MySQL / 3x PostgreSQL throughput", "self-healing cloud-native storage" | **Amazon Aurora** | AWS proprietary relational database with enterprise speed and 6-way cross-AZ replication. |
| "NoSQL", "Key-Value", "Document", "Serverless", "Single-digit millisecond latency at any scale", "JSON documents" | **Amazon DynamoDB** | Fully managed serverless NoSQL database designed for internet-scale applications. |
| "Data warehouse", "OLAP", "Business Intelligence (BI)", "Petabyte-scale analytics", "Columnar storage" | **Amazon Redshift** | Massively parallel processing (MPP) data warehouse for complex analytical queries. |
| "In-memory caching", "Sub-millisecond latency", "Reduce database read load", "Redis", "Memcached" | **Amazon ElastiCache** | In-memory key-value data store used as a caching layer in front of databases. |
| "Graph database", "Social networks", "Recommendation engines", "Knowledge graphs", "Fraud patterns" | **Amazon Neptune** | Highly connected graph database supporting Apache TinkerPop Gremlin and SPARQL. |
| "MongoDB-compatible", "JSON document store" | **Amazon DocumentDB** | Managed document database service compatible with existing MongoDB code and drivers. |
| "Cassandra-compatible", "Wide-column store" | **Amazon Keyspaces** | Serverless, scalable Apache Cassandra-compatible database. |
| "Immutable ledger", "Cryptographically verifiable transaction log", "Audit trail" | **Amazon QLDB** (Quantum Ledger Database) | Transparent, immutable, cryptographically verifiable ledger. |

---

## 2. Amazon RDS: Multi-AZ vs. Read Replicas (High-Yield Exam Concept)

```
Multi-AZ Deployment (HA / Disaster Recovery):
┌─────────────────────────┐               ┌─────────────────────────┐
│ Primary DB Instance     │  Synchronous  │ Standby DB Instance     │
│ Availability Zone A     ├──────────────►│ Availability Zone B     │
│ (Active: Read & Write)  │  Replication  │ (Passive: Standby only) │
└─────────────────────────┘               └─────────────────────────┘

Read Replicas (Performance / Scaling Reads):
┌─────────────────────────┐               ┌─────────────────────────┐
│ Primary DB Instance     │ Asynchronous  │ Read Replica 1          │
│ Availability Zone A     ├──────────────►│ (Active: Read-Only)     │
│ (Active: Read & Write)  │  Replication  ├─────────────────────────┤
└─────────────────────────┘               │ Read Replica 2          │
                                          │ (Active: Read-Only)     │
                                          └─────────────────────────┘
```

| Dimension | Multi-AZ Deployments | Read Replicas |
| :--- | :--- | :--- |
| **Primary Purpose** | **High Availability & Disaster Recovery** | **Read Performance & Scalability** |
| **Replication Type** | **Synchronous** (zero data loss) | **Asynchronous** (eventual consistency) |
| **Accessibility** | Standby instance is **NOT accessible** until failover occurs | Read replicas are **fully accessible for READ queries** |
| **Location** | Cross-AZ (within the same Region) | Cross-AZ, Cross-Region, or same AZ |
| **Automated Failover** | **Yes** (automatic DNS failover to standby if primary fails) | **No** (can be manually promoted to standalone DB) |
