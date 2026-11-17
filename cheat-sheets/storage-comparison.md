# AWS Storage Comparison Cheat Sheet

Use this comparison matrix to instantly solve any storage question on the AWS Cloud Practitioner exam.

---

## 1. Primary AWS Storage Services At A Glance

| Service | Architecture | Protocol / Interface | Scope | Ideal Workload / Key Phrases |
| :--- | :--- | :--- | :--- | :--- |
| **Amazon S3** | Object Storage (unlimited size, files up to 5 TB) | REST API (HTTP/HTTPS) | Regional (Global namespace) | Static website hosting, backups, data lake, media hosting, write-once read-many (WORM). |
| **Amazon EBS** | Block Storage (virtual hard drive) | Block-level (attached via hypervisor) | Single Availability Zone (AZ) | EC2 root OS boot volume, transactional relational database storage, low-latency IOPS. |
| **Amazon EFS** | File Storage (NFSv4) | Network File System (Linux only) | Multi-AZ (Regional) | Shared file storage across hundreds of Linux EC2 instances simultaneously, content management systems. |
| **Amazon FSx for Windows** | File Storage (SMB) | Server Message Block (Windows & Linux) | Single or Multi-AZ | Native Microsoft Windows file system, Active Directory integration, enterprise Windows apps. |
| **Amazon FSx for Lustre** | High-Performance File System | POSIX-compliant | Single or Multi-AZ | High-Performance Computing (HPC), machine learning, financial modeling, fast processing of S3 data. |

---

## 2. Amazon S3 Storage Classes Decision Tree

```
Are you archiving data?
├── NO
│   ├── Frequently accessed? ──────────► S3 Standard
│   ├── Unpredictable access pattern? ─► S3 Intelligent-Tiering
│   └── Infrequently accessed?
│       ├── Multi-AZ resilience needed? ─► S3 Standard-IA
│       └── Non-critical / reproducible? ─► S3 One Zone-IA (cheapest IA)
└── YES (Archive)
    ├── Need immediate retrieval (ms)? ──► S3 Glacier Instant Retrieval
    ├── Can wait minutes to hours? ──────► S3 Glacier Flexible Retrieval (formerly S3 Glacier)
    └── 12 to 48 hours is acceptable? ──► S3 Glacier Deep Archive (Lowest cost in the entire cloud!)
```

---

## 3. Data Migration & The Snow Family

| Device | Usable Capacity | Compute Available? | Best For |
| :--- | :--- | :--- | :--- |
| **AWS Snowcone** | 8 TB (HDD) or 14 TB (SSD) | Yes (2 vCPU, 4 GB RAM) | Extreme edge locations, drones, space-constrained mobile environments. Can run on battery. |
| **AWS Snowball Edge Storage Optimized** | 80 TB | Yes (40 vCPUs) | Large-scale local storage migration and compute edge jobs. |
| **AWS Snowball Edge Compute Optimized** | 42 TB | Yes (104 vCPUs) | Advanced machine learning and edge computing in disconnected environments. |
| **AWS Snowmobile** | Up to 100 PB per truck | Integrated in shipping container | Migrating entire data centers (exabytes of data) via 45-foot ruggedized truck. |

---

## 4. AWS Storage Gateway (Hybrid Cloud)

- **Amazon S3 File Gateway:** Connects on-premises file applications to Amazon S3 via NFS or SMB file shares.
- **FSx File Gateway:** Low-latency local caching for on-premises access to cloud Amazon FSx for Windows File Server.
- **Volume Gateway:** Block storage via iSCSI.
  - *Cached Volumes:* Entire data stored in S3; frequently accessed data cached locally.
  - *Stored Volumes:* Entire data stored locally; asynchronous backups stored in S3.
- **Tape Gateway:** Virtual Tape Library (VTL) to replace physical magnetic tape backups in S3 and Glacier.
