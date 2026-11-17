export const saaExamQuestions = [
  {
    "id": 1,
    "qNum": 1,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing a solution where users will be directed to a backup static error page. If the primary website is unavailable, the primary website's DNS record are hosted in Amazon Route 53 where their domain is pointing to an application load balancer. Which configuration should be the solution architect used to meet the company's needs will minimizing the changes and infrastructure overhead?",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So basically if you observe this question carefully you will get some clue here that there should be backup static error page if the primary website is unavailable and DNS record are hosted in route 53. So basically what is happening here? Uh first have a look at the options and you can go through all the four options and uh you can have a guess uh as per your understanding that what could be the clue here. So first one is having Amazon CloudFront which is basically used for caching purpose and increasing the speed. So I don't think that's that is going to be the answer. Second option is with active passive failover and then latency based but we are not talking anything about latency here in this question. So I don't think this will be the correct answer. So uh I can cancel this as well and this is also cancelled uh already. And now set up a route 53 active active configuration with the ALB uh and an EC2 instance hosting a error page as endpoint. Route 53 will send request to [clears throat] the instance if the health check fail for the ALB. So active active configuration this also don't seems to be correct. Uh so obviously this is the correct [clears throat] and let's see how this is correct. So set up a route 53 active passive failover configuration direct traffic to static error page hosted within an Amazon S3 bucket when route 53 health checks determine that ALB endpoint is unhealthy. So basically uh what is the usage of this active passive failover. So basically we use an active passive failover configuration when we want a primary resource or a group of resource to be available the majority of the time. So like in majority of time and in ideal scenario that should be available and you want the secondary resource or group of resource to be on standby in case all the primary resources are unavailable. And when responding to the queries route 53 uh include only the healthy primary resources and if all the primary resources are unhealthy route 53 begins to include only healthy secondary resources. And what are healthy primary and healthy secondary resources here? So website is primary healthy resource here. And if that is unhealthy in any case then backup static error page will be our secondary resource and that will act as primary resource when website will be unavailable and uh this route 53 will redirect the traffic to this page. So option B will be the correct answer here. So now question second, a solution architect is designing a high performance computing workload on Amazon EC2. The EC2 instances need to communicate to each other frequently and require network performance with low latency and high throughput. Which EC2 configuration meet this requirement? So have a look at the options. So these are your options. So you can uh guess any answer if you are having any idea about it. So basically uh Q is here need to communicate frequently and require high network performance with low latency and high throughput. So basically whenever they need to communicate frequently and high performance is the requirement then they should be in cluster placement and correct answer will be a here. So cluster placement is suggested every time when network performance is the requirement in one availability zone. Spread placement are required when there is a requirement of high availability because instances will be spread out and if the particular location goes down then there may be the downtime. But if spread placement is there and instances are spread out in various locations then if even if one particular location or one particular rack goes down even then there will be availability. But what happens with cluster placement however there will be certainly high network performance and uh there they will be in like in one placement group but if that placement group goes down then all the instances will be down and it may create downtime. So that's the issue with the place cluster placement. So in simple words if you need high network performance then go for this and if you need high availability then go for network placement. So this is basically for high availability. So this is the difference here and rest of the options will be eliminated here because uh these are in two so definitely they can't have that much uh good network performance and it's also in uh spanning across multiple availability zones. So it will also not have that much good connectivity. So definitely cluster placement is the right answer here. So now question three. A company want to host a scalable web application on AWS. The application will be accessed by users from different geographic regions of the world. Applications user will be able to download and upload unique data up to gigabytes in size. The development team want a cost-effective solution to minimize upload and download latency and maximize performance. What should a solution architect do to accomplish this? So here are your options. You can have a guess here and after taking a pause of few seconds I'm revealing the answer. So answer is a here. So you have to use Amazon S3 with transfer acceleration to host the application here. So basically uh why we use transfer acceleration? So basically like mobile and application uploads and downloads many customer develop mobile or web application that feature file uploads to S3. So when these application have user data far from other destination S3 bucket upload and download may be slow. So aesthetic with transfer escalation can speed up these long distance transfer to provide user a better experience. So basically uh when users are at a long distance from the S3 transfer acceleration will be used to effectively increase performance and decrease the latency in the upload and download. So clearly A will be the answer here. So now question four. A company is migrating from an on premises infrastructure to AWS cloud. One of the company's application is store file on Windows file server. Farm that uses distributed file replication to keep data in sync. A solution architect need to replace the file server form. Which service suit the solution architect use? So here are your options. Amazon EFS, Amazon FSX, Amazon S3 and AWS storage gateway. So basically what happens Amazon FSX provide you with two file systems to choose. Amazon FSX for Windows file system server for business applications and Amazon FSX flesher for high performance workloads. But basically Amazon FSX for leer is used in Linux and uh Amazon FSX for Windows file server provide provides you fully managed highly reliable file storage that is accessible over the industry standard server message block that is SMB protocol. FSX is built on Windows server and provides a rich set of administrative features that includes end user file distor user kas and access control list that is ACL. Additionally, Amazon FSX for Windows file server support distributed file system replication that is GFSR that is the requirement in the question here itself in both single A and multi-AZ deployment. So option B will be the correct answer here. Now question five. A company has a legacy application that process data in two part. The secondary part of the process takes longer than the first. So the company has decided to rewrite the application as two microservices running on Amazon ECS that can scale independently. How should a solution architect create the microservices? So here are the options. So basically what is happening here we are decoupling the application. So which AWS service is used for decoupling? So Amazon SQS is used for decoupling and it is the best option and S3 obviously would not be used here and uh Amazon SNS is a pub sub model. Basically there will be a one publisher and many subscribers. So it will not be used here. And kinesis data stream is used for continuous data processing. And uh here only this option seems to be correct. And this is definitely correct here. Uh because like uh what we are doing here implement code in micros service one to send the data to an SQS. So basically uh data will be hold for some time in SQS and implement code in micros service 2 to process the message from the queue and there will be message for some time in SQS and micros service 2 will take the message from the queue to process them and hence the message will be processed one by one and there will be no dropage or loss of message and every message will be processed in this way. So option D is the correct answer here. And now question six. He captures [clears throat] click stream data from multiple websites, analyzes it using batch processing. The data is loaded nightly into Amazon red shift and is consumed by business analyst. The company want to move toward near realtime data processing for timely insights. The solution should process the streaming data with minimal effort and operational overhead. Which combination of AWS services are most cost effective for this solution? So always focus on this part as well which effective the question is asking to you is it cost effective or is it performance effective or which parameters is considered in the question and also you can see here that we have to choose two answer. So here are your options. Amazon EC2, AWS Lambda, Amazon Kinesis data streams, Amazon Kinesis data fires, Amazon Kinesis data analytics. So correct answer are D and E. Amazon Kinesis data fires and Amazon Kinesis data analytic. So [clears throat] basically what happens Amazon Kinesis data fires and Amazon Kinesis data stream can be used for data streaming and Kynesis data stream is for real time but Kinesis data fires is for near real time. The company want to move toward near real data processing. So, Kinesis data fire hose is the suitable answer for this and most important thing in the question is which combination of AWS services are most cost effective for this solution. As I already told you that you have to focus on this part as well. However, this can do the needful but we are finding the solution which is most cost effective. So this will be in use here and kinesis datos is surely uh cheaper than this because this is absolutely real time uh this is real time uh but this is near real time not real time and then we have to also uh like analyze the data and for that Amazon kinesis data analytics will be used. So D and E are the correct answer here. So this is also correct option. Now question seven. A company's application run on Amazon EC2 instances behind an application load balancer. The instances run in an Amazon EC2 autoscaling group across multiple availability zones. On the first day of every month at midnight the application becomes much slower. When the month end financial calculation batch executes, this causes the CPU utilization of the CPU instances to immediately peak to 100%. Which disrupts the application. What should a solution architect recommend to ensure the application is able to handle the workload and avoid the downtime. So here are the options. Configure an Amazon CloudFront in the front of ARB. Configure an EC2 autoscaling simple simple scaling policy based on CP utilization. Configure an EC2 autoscaling scheduled uh scaling policy based on the monthly schedule. Configure Amazon elastic to remove some workload from the EC2 instances. So basically uh it clearly seems that load is happening at a regular interval. So like and cloudfront is definitely not going to be the answer here because this is used for caching purposes not for this [clears throat] such type of scenarios. Auto scaling should work but as the load is coming at particular interval. So so autoscaling with the scheduled scaling policy based on the monthly schedule will be the correct answer here. So this is going to be the correct answer. Option C is definitely correct here. So now question eight. A company runs on a multi-ter web application that host news content. The application run on Amazon EC2 behind an application load balancer. The instances run in an EC2 autoscaling group across multiple availability zones and use an Amazon Aurora database. A solution architect need to make the application more resilient to periodic increase in request. Which architecture should the solution architect implement? Choose the two. So here are options. Add AWS Shield, Aurora Replica, AWS Direct Connect, AWS Global Accelerator and an Amazon CloudFront distribution in front of application load balancer. Uh so correct answer here are add Aurora replica and Amazon cloudfront distribution in front of application load balancer. So basically uh if you go to the inside for this question what will be happening here uh like we are adding or replica here for offloading some read request from the main uh uh data database instance as well as for standby for failover because in case the main or our primary database fails in that case Aurora replica will act as primary database and now we are also adding CloudFront here because CloudFront distribution in front of application load balancer will help us enabling fast content caching at the A's location nearest to the user. So it will give better experience as it will catch the content and it will help for better experience to the users. So these two will be the correct answer here. We are done with this question as well. And now question nine. An application running on AWS uses an Amazon Aurora multi-az deployment for its database when evaluating performance metrics. A solution architect discovered that database reads are causing high input output and adding latency to the right request against the database. What solution the solution architect do to separate the read request from the right request? So here are the options and correct answer here is create a read replica and modify the application to use the appropriate endpoint. And uh here is a trick that [clears throat] whenever we are getting in the question that reads are causing high input output always go for read replica. Whatever there may be the options that multi-AZ may attack you and you may go for this because like uh this is also a good solution but this will be the most economical solution that can help you and it will definitely help you because it will uh reduce the main load that is creating issue here because it is already mentioned clearly in the question that read are causing the issue and adding latency to the right request. These are not created by write request. These are created for the write request and these are posted by read request. So creating read replica will be the solution here.",
    "isMulti": false
  },
  {
    "id": 2,
    "qNum": 10,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "This is the last question of this video. A recently acquired company is required to build its own infrastructure on AWS and migrate applications to the cloud within a month. Each application has approximately 50 TB of data to be transferred. After the migration is complete, the company and its parent company both will require secure network connectivity with consistent throughput from their data centers to the application. A solution architect must ensure one-time data migration and ongoing network connectivity. Which solution will meet this requirement?",
    "options": [
      "Option A: Implementation path for This is the last question of t...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. So you can have a look and uh you can try to guess the answer. And after taking a pause, I'm just revealing the answer of this question that transfer will be AWS snowball for initial transfer and AWS direct connect for ongoing connectivity. So basically like it is obvious as the size is of uh 50 dB. So is snowball should be the correct answer here. And uh however this is there is option of snowball in the option D as well. But we have to consider second also because for because for ensuring pure network connectivity with consistent throughput we have to use AWS direct connect because AWS direct connect cloud service is the sole test path to your AWS resources will in transist your network traffic remains on the AWS global network and never touches the public internet. So this reduces the chance of hitting bottlenecks or unexpected increase in latency and at the same time it will be the secure one as it is not touching the public internet.",
    "isMulti": false
  },
  {
    "id": 3,
    "qNum": 11,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company serves content to its subscribers across the world using an application running on AWS. The application has several Amazon EC2 instances in a private subnet behind an application load balancer. Due to a recent change in copyright restriction, the chief information officer CIO wants to block access for certain countries. Which action will meet these requirements?",
    "options": [
      "Option A: Implementation path for A company serves content to it...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "So here are the options. So modify ALB security group, modify security group for EC2 instances, Amazon CloudFront to serve the application and deny access to block countries, ALB listener rules. So these are the options. So basically what is the clue here? We have to go for the clue only. A block access for certain countries. This is the requirement. And this could be fulfilled with ALB security group. No, this can't be. and now modify the security group of the instances. No, this can't be done because security group is generally used for allowing traffic from any particular location from any particular IP or whatever but it's not used for denying purpose and now Amazon CloudFront to serve the application and deny access to blocked countries. So basically what happens if you use CloudFront typically it serves the requested content regardless where user is located. But if you need to prevent the specific countries from accessing your content you can use this same CloudFront with georestriction. with georestriction. Uh what it will do, it will allow your users to access your content only if they are in the countries on a white list of approved countries and it will prevent your users from accessing your content if they are in one of the countries on a black list of banned countries. So correct answer here will be C. So option C is the correct answer here. And uh now next question,",
    "isMulti": false
  },
  {
    "id": 4,
    "qNum": 12,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is creating a new application that will store a large amount of data. The data will be analyzed early and modified by several Amazon EC2 Linux instances that are deployed across multiple availability zones. The application teams believes the amount of space needed will continue to grow for next 6 month. Which set of action should a solution architect take to support these needs?",
    "options": [
      "Option A: Implementation path for A company is creating a new ap...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So here are the options. So basically we have uh EBS here, EFS here, S3 glacier and EBS with provision IO. So which one should be the correct here? So basically clue is here multiple availability zones. So data can be across multiple availability zones but ABS can't be. So both these options are eliminated here. So option B will be correct here and we have already eliminated these options because EBS can't be across multiple availability zones. And this is not the only reason. This is also the reason that EFS will scale as per the usage and you pay for that you actually store and you can mount that particular file system anywhere in the world. So that will be the advantage with the EFS. So the limitation of EBS that it can't span across the multi availability zone is the limitation here and the advantage with the EFS that it can be flexible and it can scale as per the usage and you pay for that you actually store and it can span across multiple availability zone due to all these reasons option B will be the correct answer here.",
    "isMulti": false
  },
  {
    "id": 5,
    "qNum": 13,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is migrating a three- tier application to AWS. The application requires a MySQL database. In the past, the application user reported poor application performance when creating new entries. These performance issues were caused by users generating different real-time report from the application during working hours. Which solution will improve the performance of the application when it is moved to AWS?",
    "options": [
      "Option A: Implementation path for A company is migrating a three...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "So, here are the options and have a look and try to guess the answer. So correct answer here will be option C. Create an Amazon Aurora MySQL multi-AZDB cluster with multiple read replicas. Configure the application to use the reader endpoints for the report. So what is happening here? Basically, we are using Aurora replicas because Aurora replicas are independent of endpoints in Aurora DB cluster. Best used for scaling read operations and increasing availability and up to 15 Aurora replica can be distributed across availability zones that a DB cluster is spend within a AWS region. Although the DB cluster volume is made up of multiple copies of the data for the DB cluster, the data in cluster volume is represented as a single logical volume to the primary instance and to the Aurora replicas in the DB cluster. So option C will be the correct answer here. And also have a focus on this point. It will always improve your performance whatever may be the condition.",
    "isMulti": false
  },
  {
    "id": 6,
    "qNum": 14,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is developing a distributed database on a multiple Amazon EC2 instances. The database stores all data on a multiple instances so that it can withstand the loss of an instance. The database requires block storage with latency and throughput to support a several million transactions per second per server. Which storage solution should the solution architect use?",
    "options": [
      "Option A: Implementation path for A solution architect is develo...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So here are the options. So clue is here million of transactions per second and second clue is here it can withstand the loss of an instance. So keep these two points in mind. So basically loss of an instance is it possible with EBS? No. EBS is robust and reliable storage. So it can't be possible with this that instance loss could happen with EBS and now instance is stored. So loss of an instance can occur in this and at the same time it is very fast and it will be helpful for million of transaction per server. And if you want further explanation about this the data in an instance store persist only during the lifetime of its associated instance. You must be aware that because if any instance is using uh this Amazon EBS the data will be there even if the instance has been terminated and uh the deletion of ABS on the termination is not selected in that case data will be there even after the termination of the instance. So option B will be the correct answer here.",
    "isMulti": false
  },
  {
    "id": 7,
    "qNum": 15,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "Organizers for a global event want to put daily report online as static HTML pages. The pages are expected to generate millions of view from users around the world. The files are stored in Amazon S3 bucket. A solution architect has been asked to design an efficient and effective solution. Which solution should the solution architect take to accomplish this?",
    "options": [
      "Option A: Implementation path for Organizers for a global event ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "So here are your options. I'm directly going to the correct answer and it will be use Amazon CloudFront with Amazon S3 bucket as its origin. So what is the clue here? As is static HTML page. Whenever in any question this is the requirement as is static HTML pages go for S3 pages are expected to generate millions of views from around the world. So whenever this is the case that content has to be served to the whole world then Amazon CloudFront will be a very helpful thing. So due to this reason option D will be the correct answer here.",
    "isMulti": false
  },
  {
    "id": 8,
    "qNum": 16,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing a new service behind Amazon API gateway. The request pattern for the service will be unpredictable and can change suddenly from zero request to 1500 per second. The total size of the data that needs to be persisted in a backend database is currently less than 1 GB with unpredictable future growth. Data can be queried using simple key value request. Which combination of AWS service would meet these requirements?",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. So here are your options and correct answer here will be option B and C and why. So first talk about option B lambda. So it will be due to unpredictable pattern because it can handle unpredictable load. So it will be beneficial for this case. And now why Amazon Dynamob DB it is also mentioned here key value request. So just follow this these simple tricks follow the keyword that are used because Amazon Dynabob DB database is based on the key value based request. So Amazon Dynamob DB will be used. Option B and C will be correct here.",
    "isMulti": false
  },
  {
    "id": 9,
    "qNum": 17,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A startup company has a web application based in the US East one region with multiple Amazon EC2 instances running behind an application load balancer across multiple availability zones. As the company's user base grows in the Asan's user base grows in the US West one region, it needs a solution with low latency and high availability. What should a solution architect do to accomplish this?",
    "options": [
      "Option A: Implementation path for A startup company has a web ap...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "So, here are your options. And the correct answer here will be option C. Provision EC2 instances and configure an application load balancer in US West one. create an accelerator in AWS global accelerator that uses an endpoint that includes the load balancer endpoint in both the real. So why we are doing so because AWS global accelerator provides you with a set of static IP addresses that can map to multiple application endpoints across AWS regions to improve redundancy. And what is requirement here? this this basically endpoint should be across two regions. So due to this reason we are using AWS global accelerator here. So option C will be correct answer here.",
    "isMulti": false
  },
  {
    "id": 10,
    "qNum": 18,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing a solution to access a catalog of images and provide users with ability to submit request to customize images. Image customization parameter will be in any request sent to an AWS API gateway API. The customized image will be generated on demand and user will receive a link they can click on to view or to download their customized image. The solution must be highly available for viewing and customizing images. What is the most cost effective solution to meet this requirement?",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Yesterday also I told you that always focus this most cost effective or most performance effective or most reliable. What is the requirement? And here it is most cost effective. And here are your options. And here correct answer will be option B. Use AWS Lambda to manipulate original images to the requested customization. Store the original and manipulated images in Amazon S3. Configure an Amazon CloudFront distribution with the S3 bucket as origin. So basically what is happening here? AWS Lambda with API gateway provides a serverless cost effective and highly available solution for processing image because first requirement of ours is to process the image and after that we are using S3 to store the image because this is the reliable and at the same time cost effective solution for the storage purpose and second we are using cloud front because user will be all around the But it will help us to cache the content and it will give better user experience. So overall option B is the most cost effective solution here.",
    "isMulti": false
  },
  {
    "id": 11,
    "qNum": 19,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is planning to migrate a business critical data set to Amazon S3. The current solution design uses a single S3 bucket in the US East1 region with versioning enabled to store the data set. The company's disaster recovery policy states that all data multiple AWS region. Basically like your data should be in multiple AWS regions. How should a solution architect design the S3 solution?",
    "options": [
      "Option A: Implementation path for A company is planning to migra...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "So here are your options A, B, C and G and correct option here will be option C. create an additional ST bucket with versioning in another region and configure cross rean replication because cross rean replication can be enabled to replicate data across multiple real also key requirement for the cross rean replication is that the bucket should be enabled with versioning. So due to that reason we are using here versioning and cross region replication and why we are using cross region replication because multiple AWS region is the requirement in the question. So option C will be correct here.",
    "isMulti": false
  },
  {
    "id": 12,
    "qNum": 20,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has application running on Amazon EC2 instances in a VPC. One of the application need to call an Amazon S3 API to store and read object. The company's security policy restrict any internet bound traffic from the application. Which action will fulfill this requirement and maintain security?",
    "options": [
      "Option A: Implementation path for A company has application runn...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So option A, configure an S3 interface endpoint. Option B, configure an S3 gateway endpoint. Option C, create an S3 bucket in private subnet. Option D, create an S3 bucket in the same region as the EC2 instance. So option B will be correct here and this is why because interface endpoint cannot be used here because there is no interface endpoint for S3 or Dynamob services. Gateway endpoint is only applicable for S3 or Dynamob services. So here S3 was the requirement. So S3 gateway endpoint will be the correct answer here. So this is going to be 21st question of the series. A company's web application uses an Amazon RDS Postgrql DB instance to store its application data. During the financial closing period at the start of every month, accountants run large queries that impact the database performance due to high usage. The company want to minimize the impact that the reporting activity has on the web application. What should a solution architect do to reduce the impact on the database with least amount of effort? So here are your options. So here correct answer will be option A. Create a read replica and direct reporting traffic to read replica. So basically what is the concept here? An RDS read replica instance is an asynchronous read only replica of a primary or master database instance located upstream. It can be used by your application for any query that does not require changing the data. So here option A will be correct.",
    "isMulti": false
  },
  {
    "id": 13,
    "qNum": 22,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company want to migrate a high performance computing application and data from on premises to AWS cloud. The company uses tiered storage on premises with hot high performance parallel storage to support the application during periodic runs of the application and more economical cold storage to hold the data when the application is not running actively. Which combination of solution should a solution architect recommend to support the storage needs of the application?",
    "options": [
      "Option A: Implementation path for A company want to migrate a hi...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. So here are your options and here we have to choose two answer because it is already mentioned here. And such type of question will be in exam also that you have to select multiple choices not the just one. So what is the requirement here? high performance parallel storage and second one economical storage to hold the data when data is not basically when application is not actively running. So here correct answer will be option A and option D S3 for cold storage and FSX for lure for high parallel performance storage. So basically FSX for lasher has the highest performance and why we are using FSX for lure not for Windows because uh it has higher performance but in case Windows would have mentioned here in the question in that case you could have used only the last option that is option E. So keep that in mind that if Windows is given in question that you have to go for FSX for Windows and if nothing is given or if Linux is given then go for FSX for lashure and obviously it is very obvious that Amazon S3 is the most cost effective storage and so it will be used for cold data storage note EFS and note Amazon S3 for high performance because we are using for cold storage only and for high performance parallel storage only FSX for leure can be used.",
    "isMulti": false
  },
  {
    "id": 14,
    "qNum": 23,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "rd a company's application is running on Amazon EC2 instances in a single region. In the event of a disaster, a solution architect need to ensure that the resources can also be deployed to a second region. Which combination of actions should the solution architect take to accomplish this?",
    "options": [
      "Option A: Implementation path for rd a company's application is ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. So here we have to choose two options and here are our option. So correct option here will be option B and D and Y. So here L2 E will be seemed to be correct answer because here what we are doing copy an EBS volume from Amazon S3 and launch EC2 instance in the destination R using EBS volume. Yeah definitely it can be done but EBF snapshot copy is automatically done when you create EMI from your instance. By default, when you create uh an AMI from your instance, a snapshot are taken of each volume attached to the instance and AMIs can launch with multiple ABS volume attached allowing you to replicate both an instance configuration and the state of all EBS volume that are attached to the instance. So basically uh what happens with EBS? EBS can only uh replicate the data that you are having in that uh volume. But with AMI all the configuration of instance and all the configuration of EBS and data will be copied or replicated. So what we are doing here copy an Amazon machine image of an EC2 instance and specify a different for the destination. That's one step and launch a new instance from an Amazon AMI in a new so option B and D will be correct answer here.",
    "isMulti": false
  },
  {
    "id": 15,
    "qNum": 24,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect needs to ensure that API calls to Amazon Dynamob DB from Amazon EC2 instance in a VPC do not transfer the internet. What should the solution architect do to accomplish this?",
    "options": [
      "Option A: Implementation path for A solution architect needs to ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose to. So here are our options. Uh you can take a pause to guess the correct answer here. And correct answer here will be option A and option B. I have also told you in previous part that for S3 and for Dynamo DB and for Dynamo DB there is no interface gateway. There is only gateway endpoint. Uh so there will be gateway endpoint and here in the option you can see that create a new gateway endpoint for Dynamob and after that what you have to do you have to create a route table entry for the endpoint that's all that you have to do because create an ENI for the endpoint in each of the subnet that doesn't seem to be good. Create a security group. Uh obviously it has nothing to do with that. Create a new Dynamo DB table that uses the endpoint. So need of that Dynamo DB table is not there. Only route table entry is required for the endpoint. And obviously gateway endpoint will be required for Dynamo DB. So I hope this question is clear to you. And now next question.",
    "isMulti": false
  },
  {
    "id": 16,
    "qNum": 25,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "th. A company's legacy application is currently relying on a single instance Amazon RDS MySQL database without encryption. Due to new compliance requirement, all existing and new data in this database must be encrypted. How should this be accomplished?",
    "options": [
      "Option A: Implementation path for th. A company's legacy applica...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "So options are here. So what will be the correct answer here? So option C will be the correct answer here. Take a snapshot of RDS instance. Create an encrypted copy of the instance. Restore RDS instance from the encrypted snapshot. So basically by this way only we will be able to to encrypt the existing data and this is why because you can only enable encryption for an Amazon RDS DB instance when you create it not after the DB instance is created. However because you can encrypt a copy of an encrypted snapshot. You can effectively add encryption to an encrypted DB instance. that is you can create a snapshot of your DB instance and then create an encrypted copy of that snapshot. You can then restore DB instance from encrypted snapshot and thus you have an encrypted copy of your original DB instance. So I hope it will be clear to you and if not you can rewind this portion of the video.",
    "isMulti": false
  },
  {
    "id": 17,
    "qNum": 26,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A manufacturing company want to implement predictive maintenance on its machinery equipment. The company will install thousands of IoT sensors that will send data to AWS in real time. You should focus on this point in real time because these are clue in most of the question to your correct answer. A solution architect is tasked with implementing a solution that will receive event in an ordered manner for each machinery asset and ensure that data is saved for further processing at a later time. Which solution would be most efficient?",
    "options": [
      "Option A: Implementation path for A manufacturing company want t...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "So here are your options. And correct answer here will be option A. Use Amazon Kinesis data stream for real-time event with partition for each equipment asset. Use Amazon Kinesis data fires to save data to Amazon S3. So I already told you that real time is the clue here and you must be aware that Kynesis data stream are realtime services and this is also available in option B and but not in option C and option D. And why we are eliminating option C and D? Because it is also mentioned that it should be in ordered manner. But SQF can't ensure that it will be in ordered manner. So option A and B are is still available. But why only A? Because we have to save the data for processing at later time. And that can be done with both S3 and EBS. That is fine. But Amazon Kinesis data fire host can be used with Amazon S3 only not with EBS. So option B is also wrong here and uh option A will be correct.",
    "isMulti": false
  },
  {
    "id": 18,
    "qNum": 27,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "th. A company's website run on Amazon EC2 instance behind an application load balancer. The website has a mix of dynamic and static content. User around the globe are reporting that website is slow. Which set of action will improve website performance for user worldwide?",
    "options": [
      "Option A: Implementation path for th. A company's website run on...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So here are your options and correct answer here will be I hope you must have got some clue from this. It will be option A. create an Amazon CloudFront distribution and configure ALB as an origin. Then update Amazon Route 53 to point to the CloudFront distribution. So basically what happens CloudFront can provide low latency to both static and dynamic content for global users and can be integrated with route 53. So here option A will be kept. And why we are not analyzing and even looking at other options because if we are talking about website performance about the worldwide then only cloudfront will be the best option and there's nothing about cloudfront in any other option. So we can eliminate all these options by having just a look. So now next",
    "isMulti": false
  },
  {
    "id": 19,
    "qNum": 28,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has been storing analytics data in an Amazon RDS instance for past few years. The company asked a solution architect to find a solution that allows users to access this data using an API. The expectation is that the application will experience periods of inactivity and could receive burst of traffic within seconds. Which solution should the solution architect suggest here?",
    "options": [
      "Option A: Implementation path for A company has been storing ana...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. Clue is bust of traffic within seconds. So I hope you must have got the correct answer here as of now and correct answer here will be option C. AWS Lambda function. How is this Amazon API gateway is common in all the options? But Amazon lambda function is the main thing that you have to take care of here. Uh because lambda function can burst within few seconds and at the same time it is also cost effective and if you compare it with EC2 instances it is highly cost effective. So option C is the correct answer here.",
    "isMulti": false
  },
  {
    "id": 20,
    "qNum": 29,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "th. A company must generate sales report at the beginning of every month. The reporting process launches 20 Amazon EC2 instances on the first of the month. The process run for 7 days and cannot be interrupted. The company want to minimize the cost. Which pricing model should the company use here?",
    "options": [
      "Option A: Implementation path for th. A company must generate sa...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are your options. Reserved instance, sport block instance, on demand instance, and scheduled reserved instances. So here you may feel that option D is correct but this is not correct and here transfer will be option C and why because you cannot purchase a scheduled reserve instance at this time and AWS does not have any capacity available for scheduled reserve instances or any plans to make it available in future to reserve capacity use on demand capacity reservation for discount rate use saving plans And uh also like process cannot be interrupted for 7 days. So on demand will be used here.",
    "isMulti": false
  },
  {
    "id": 21,
    "qNum": 30,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A gaming company has multiple Amazon EC2 instances in single availability zone for its multiplayer game that communicate with user on layer 4. The chief technology officer want to make the architecture highly available and cost effective. What should a solution architect do to meet this requirement?",
    "options": [
      "Option A: Implementation path for A gaming company has multiple ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. Here are your options. Option C and option D. Network load balancer in front of EC2 instances and autoscaling group to remove instances. Why this is the correct answer here not the application load balancer? Because here it is mentioned that layer 4 should be used. So network network load balancer will be the correct answer here. And now it should be highly available and cost effective. For that purpose configure autoscaling group to add or remove instances in multiple availability zone. Multiple availability zone. Why? Because it should be highly available. And uh just increasing the number of EC2 instances or decreasing the number of EC2 instances will not work at all. I hope it must be very obvious point for you. And uh the confusion must be there in network load balancer and application load balancer. But application load balancer work on layer 7 not layer 4. So correct answer here will option C and E. And that is going to be",
    "isMulti": false
  },
  {
    "id": 22,
    "qNum": 31,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "st of this series. A company currently operates a web application backed by an Amazon RDS MySQL database. It has automated backups that are run daily and are not encrypted. A security audit requires future backups to be encrypted and the unencrypted backups to be destroyed. The company will make at least one encrypted backup before destroying the old backups. What should be done to enable encryption for future backups?",
    "options": [
      "Option A: Implementation path for st of this series. A company c...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are your options. So correct answer here will be option C. Create a snapshot of the database. Copy it to an encrypted snapshot. Restore the database from the encrypted snapshot because you can only encrypt an Amazon RDS DB instance when you create it and note after the DB instance is created. So here option C will be correct.",
    "isMulti": false
  },
  {
    "id": 23,
    "qNum": 32,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is hosting a website behind multiple application load balancer. The company has different distribution rights for its content around the world. A solution architect need to ensure that users are served correct content without violating distribution rights. Which configuration should the solution architect choose to meet these requirements?",
    "options": [
      "Option A: Implementation path for A company is hosting a website...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So here are your options. And correct transfer here will be option C. Configure Amazon route 53 with a geoloccation policy. And uh why here option C? Because here question says that website is running behind multiple application load balancer. So geoloccation routing lets you choose the resources that serve your traffic based on geographic locations of the user. meaning the location from which the DNS queries originate from. For example, you might want all the queries from Europe to be routed to an ELB load balancer in the Frankfurt region. When you use the geoloccation routing, you can localize your content and present some or all of your website in the language of your local users. So this is the benefit of geocation policy.",
    "isMulti": false
  },
  {
    "id": 24,
    "qNum": 33,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "rd. A solution architect has created a new AWS account and must secure AWS account root users access. Which combination of actions will accomplish this?",
    "options": [
      "Option A: Implementation path for rd. A solution architect has c...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. So here we have to choose two answers. And here are our options. So basically correct answer here would be option A and option B. Ensure that the root user has a strong password. Definitely this is going to be correct because a root user should have the strong password because root user can do anything in your environment. And now enable multiple factor authentication to the root user. So basically what will this multiple factor authentication basically MFA will do? If you are using MF you may configure your physical device for example your mobile phone. Whenever you uh log to your root user or your account as root user even though you know the password but still you need the authentication from your physical device that is mobile phone. So even if your password is leaked even then no one will be able to access your account being root user. So option A and option B are correct here.",
    "isMulti": false
  },
  {
    "id": 25,
    "qNum": 34,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "th. A solution architect at an e-commerce company wants to back up application log data to Amazon S3. The solution architect is unsure how frequently the logs will be accessed or which log will be accessed the most. The company want to keep the cost as low as possible by using the appropriate S3 storage class. Which S3 storage class should be implemented to meet these requirements?",
    "options": [
      "Option A: Implementation path for th. A solution architect at an...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So here are your options. U basically I can say uh very obvious question and with very obvious answer. So answer here will be S3 intelligent tearing. So why this is the correct answer? So basically uh here keyword is unknown workload because the solution architect is unsure of how frequently the logs will be accessed. So unknown workload is the keyword here and when you are not sure about uh uh the pattern that will be followed and how the uh content from that particular Amazon S3 will be uh used or how it will be accessed then S3 intelligent tearing is the best option always. So option B will be the correct answer here.",
    "isMulti": false
  },
  {
    "id": 26,
    "qNum": 35,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "th. A company's website is used to sell product to the public. The site run on Amazon EC2 instances in an autoscaling group behind an application load balancer. There is also an Amazon CloudFront distribution and AWS web is being used to protect against SQL injection attacks. The ALB is the origin for the CloudFront distribution. A recent review of the security logs revealed an external malacious IP that need to be blocked from accessing the website. What should a solution architect do to protect the application?",
    "options": [
      "Option A: Implementation path for th. A company's website is use...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So, here are the options. And here correct transfer will be option B. modify the configuration of AWS web to add an IP match condition to block the malacious IP address.",
    "isMulti": false
  },
  {
    "id": 27,
    "qNum": 36,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "th. A solution architect is designing an application for two-step order process. The first step is synchronous and must return to the user with little latency. Basically latency is allowed but it should be very little. The second step take longer. So it will be implemented in separate component. Order must be processed exactly once in the order in which they are received. How should the solution architect integrate these component?",
    "options": [
      "Option A: Implementation path for th. A solution architect is de...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "So here are your options and basically here is the clue exactly once and in the order. So for this FIFO should be used. So FIFO should be used for this first in first out. So FIFO is in this option and it is in this option and it is standard. So it should not be considered and it is standard. So it should also not be considered. And now here correct answer is option A. And why? Because Amazon SQS with FIFO is not compatible with SNS topic as of now. So option A will be correct here. Uh I have mistaken here. Uh option A will be correct here only.",
    "isMulti": false
  },
  {
    "id": 28,
    "qNum": 37,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "th. A web application is deployed in the AWS cloud. It consists of two tier architecture that includes a web layer and a database layer. The web server is vulnerable to cross-sight scripting attacks. What should the solution architect do to remediate the vulnerability?",
    "options": [
      "Option A: Implementation path for th. A web application is deplo...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. And correct option here will be option C. Create an application load balancer. Put the web layer behind the application load balancer and enable AWS web. So why it is the correct answer here? So basically for proide scripting attack AWS web is the solution. But uh AWS web is available in these three options. Why we are choosing this one particularly? So here logic will be web layer and web layer runs on layer 7. So web layer runs on layer 7 of OSI model and application load balancer is used for layer 7. So application load balancer will be used and uh along with AWS web. So this is the correct answer here. However, application load balancer is here as well but here they are using AWS shield standard but AWS web should be used. So correct answer here will be C only.",
    "isMulti": false
  },
  {
    "id": 29,
    "qNum": 38,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company's website is using an Amazon RDS MySQL multi-AZB instance for its transactional data storage. There are other internal systems that query this DB instance to fetch data for internal batch processing. The RDS instance slows down significantly when the internal systems fetch data. This impact the website's read and write performance and the user experiences slow response times. Which solution will improve the website's performance?",
    "options": [
      "Option A: Implementation path for A company's website is using a...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. I hope you must have got the correct answer as of now because correct answer here will be option D. And I have already told you that whenever there is a requirement of website performance, you may not neglect the red replica because in most of the question it is going to be the correct answer. So here also it is the correct answer. Add a red replica to the RDS DB instance and configure the internal system to query the read replica.",
    "isMulti": false
  },
  {
    "id": 30,
    "qNum": 39,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "th. An application run on Amazon EC2 instance across multiple availability zones. The instances run in Amazon EC2 autoscaling group behind an application load balancer. The application perform best when the CPU utilization of the EC2 instance is at or near 40%. What should a solution architect do to maintain the desired performance across all the instances in the group?",
    "options": [
      "Option A: Implementation path for th. An application run on Amaz...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So here are your options. Uh so basically simple escaling policy, target tracking policy, AWS lambda function and scheduled scaling actions. So these are the options. However, we are using uh autoscaling group in all the options. But here correct answer will be option B. use the target tracking policy to dynamically scale out the autoscaling group because particular CPU utilization is given. So we have to use target tracking policy whenever any particular number of CPU utilization is given like it may be 30% or it may be uh 70%. According to this utilization resources will dynamically scale out the autoscaling group. So target tracking policy is used in any question whatever may be the condition if particular number of CPU utilization is given that uh instances should be near around this particular number. So option B is the correct answer here.",
    "isMulti": false
  },
  {
    "id": 31,
    "qNum": 14,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company runs an internal browser based application. The application run on Amazon EC2 instances behind an application load balancer. The instances run in an Amazon EC2 autoscaling group across multiple availability zones. The autoscaling group is scales up to 20 instances during work hours but is scaled down to two instances overnight. Staff are complaining that application is very slow when the day begins. Although it runs well by the midm morning. How should the scaling be changed to address the staff complete and keep the cost to a minimum?",
    "options": [
      "Option A: Implementation path for A company runs an internal bro...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. So basically uh most probably you would go for uh scheduled action because uh you want the capacity to increase uh before the particular time but here correct transfer will be option C implement target tracking action triggered at a lower CPU threshold and decrease the cool down period. So basically what is happening here uh keyword here is cost. You have to keep the cost as low as possible because if you spin up 20 EC2 instances at the beginning of of the day unnecessarily the cost increases. So due to that reason this uh option is ruled out here and if you use this option target tracking action. So that will be helpful because user will not complain and CPU will be monitored and uh and machines will be spinned up quickly on the basis of requirement and on the basis of usage. So option C is the correct answer here. And this is going to be 41st question of this series. A financial service company has a web application that serves users in the United States and Europe. The application consists of a database tier and a web server tier. The database tier consists of a MySQL database hosted in US East one. The Amazon route 53 geoproximity routing is used to direct the traffic to instances in the closest triion. A performance review of the system reveals that European users are not receiving the same level of query performance as those in United States. Which changes should be made to the database year to improve the performance? And here are the options. And here correct option will be option D. Migrate the database to an Amazon Aurora global database in MySQL compatibility mode. Configure read replicas in one of the European region. So this is the correct answer here because Amazon Aurora global database is span across multiple AWS region and hence enables low latency global reads and provides fast recovery from the rare outage that might affect an entire AWS region. An Aurora global database has a primary DB cluster in one region and up to five secondary DB clusters in different region. So answer D is going to be correct here.",
    "isMulti": false
  },
  {
    "id": 32,
    "qNum": 42,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company host a static website on premises and want to migrate the website to AWS. The website should load as quickly as possible for users around the world. The company also want the most cost effective solution. What should a solution architect do to accomplish this?",
    "options": [
      "Option A: Implementation path for A company host a static websit...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and correct answer here will be option B and this must be uh very obvious for few of you because the most cost effective option is to migrate the website to Amazon S3. uh you must all be aware that Amazon S3 is the cheapest or most cost effective method for hosting a website and configure that bucket for a static website hosting. So obviously we can uh use Amazon S3 for only static website hosting it can be used for static website hosting and now to enable good performance for global users we have in the question around the world. So for global users the solution architect should then configure a cloudfront distribution with the S3 bucket as origin and this will catch the static content around the world closure to the user. So this option will help in both hosting the website at cheapest method and at the same time using the cloud front. It will help in caching the content around the world and hence it will improve the performance around the world for the users and it will improve the user experience at the same time.",
    "isMulti": false
  },
  {
    "id": 33,
    "qNum": 43,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "rd. A solution architect is designing a storage solution for high performance computing environment based on Amazon Linux. The workload stores and processes a large amount of engineering doing that requires shared storage and heavy computing. Which storage option should be the optimal solution here?",
    "options": [
      "Option A: Implementation path for rd. A solution architect is de...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Answer will be option B. And this is again very obvious here because we have two clue here. HPC high performance computing and Amazon Linux. This is the clue here. And whenever there is a requirement of high performance computing and Linux is also given then for sure answer will be FSX for lasher. And what does this lure means? Lesser actually stand for Linux plus cluster. So this simply stand for Linux plus cluster. So it is perfect for high performance computing. So answer is option B here.",
    "isMulti": false
  },
  {
    "id": 34,
    "qNum": 44,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is performing an AWS well architected framework review of an existing workload deployed on AWS. The review identified a public-f facing website running on the same Amazon EC2 instance as a Microsoft Active Directory domain controller that was installed recently to support other AWS services. A solution architect need to recommend a new design that would improve the security of the architecture and minimize the administrative demand on IT staff. What should the solution architect recommend here?",
    "options": [
      "Option A: Implementation path for A company is performing an AWS...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. and correct answer here will be option A. Use AWS directory service to create managed active directory uninstall the active directory on the current EC2 instance. So basically you can migrate AD to AWS managed d and keep the web server alone. So option A will be correct here and you can go for it.",
    "isMulti": false
  },
  {
    "id": 35,
    "qNum": 45,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "th. A company host a static website within Amazon S3 bucket. A solution architect need to ensure that the data can be recovered in case of accidental deletion. Which action will accomplish this?",
    "options": [
      "Option A: Implementation path for th. A company host a static we...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Enable Amazon S3 versioning. Enable uh Amazon S3 intelligent tiering. Enable an Amazon S3 life cycle policy. Enable Amazon S3 cross rean replication. So which should be correct answer here and uh correct answer here will be option A. Enable Amazon S3 versioning. And this is why because object versioning is mean for keeping the multiple variant of an object in the same Amazon S3 bucket. Basically whenever you uh create any modification in that particular content or any update or anything you do the previous version will also be saved for your uh future uh reference or for your future uh use if you want to make the use of that. And versioning provides the ability to recover both from unintended user action and application failures. Even if the data deletion or data modification is done by the user unintentionally then also it will recover even though it will also recover when the application fails due to any cause. So you can use versioning to preserve, retrieve and restore every version of every object is stored in your Amazon S3 bucket. So correct answer here will be option A only.",
    "isMulti": false
  },
  {
    "id": 36,
    "qNum": 46,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company's production application run online transaction processing on an Amazon RDS MySQL DB instance. The company is launching a new reporting tool that will access the same data. The reporting tool must be highly available and not impact the performance of the production application. How can this be achieved?",
    "options": [
      "Option A: Implementation path for A company's production applica...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So, here are the options. And correct answer here will be option B. Create a multi-AZ RDS read replica of the production RDS DB instance. So this is going to be the correct answer here because here option A is wrong as early snapshot help to provide backup and not to reduce load. So option A is wrong here. And now option C. Option C is also wrong as RDS does not support scaling for read replicas. So it is also wrong. And now option D is also wrong because single A read replica does not provide high availability. There is single a red replica. So it will not provide high availability. So option B is correct here only.",
    "isMulti": false
  },
  {
    "id": 37,
    "qNum": 47,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company runs an application in branch office within a small data closet with no virtualized comput resources. The application data is stored on an NFS volume. The compliance standard require a daily off-site backup of the NFS volume. Which solution meet this requirement?",
    "options": [
      "Option A: Implementation path for A company runs an application ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and correct answer here will be option B. install an AWS storage gateway file gateway hardware appliances on premises to replicate the data to Amazon S3 because question clearly states that a small data closet with no virtualized compute resources. This implies that there is a need for an on-site hardware appliances. So this is the correct answer here.",
    "isMulti": false
  },
  {
    "id": 38,
    "qNum": 48,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company's web application is using multiple Linux Amazon EC2 instances and is storing data on Amazon elastic blog store volumes. The company is looking for a solution to increase the resiliency of the application in case of a failure and to provide the storage that complies with atomicity, consistency, isolation and durability. Basically to comply with acid. What should a solution architect do to meet this requirement?",
    "options": [
      "Option A: Implementation path for A company's web application is...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options and correct option here will be option C. Create an application load balancer with autoscaling groups across multiple availability zones. Store data on Amazon elastic file system and mount a target on each instance. And this is correct answer here because relational database were built around the notion of acid and were easiest way to achieve acid and the easiest way to achieve acid was to keep everything on the same box. So here option C will be correct answer.",
    "isMulti": false
  },
  {
    "id": 39,
    "qNum": 49,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A security team to limit access to a specific services or actions in all of the teams AWS account. All account belong to a large organization in AWS organization. The solution must be scalable and there must be a single point where permissions can be maintained. What should a solution architect do to accomplish this?",
    "options": [
      "Option A: Implementation path for A security team to limit acces...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options and correct answer here will be option D. create a service control policy in the root organizational unit to deny access to the service or actions because SCPs or service control policies are one type of policies that you can use to manage your organization. SCPs offers central control over the maximum available permission for all account in your organization and this also allows you to ensure your account stay within your organization's access control guidelines. So option D will be correct here.",
    "isMulti": false
  },
  {
    "id": 40,
    "qNum": 50,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A data science team require a storage for nightly log processing. The size and number of logs is unknown and will persist for only 24 hours. What is the most cost effective solution here?",
    "options": [
      "Option A: Implementation path for A data science team require a ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. Amazon S3 Glacier, Amazon S3 standard, Amazon S3 intelligent hearing and Amazon S3 one Jone infrequent access. And correct answer here will be Amazon S3 standard. And this may be a little bit surprising for you because because you may think that S3 intelligent tearing is the correct answer because number of logs is unknown. But here we know that our data is stored only for 24 hours and we want the cost effective solution and intelligent tier will have additional monitoring and tiering charges even if it is extremely small charge. We should go for standard. There will be no benefit with intelligent plus additional cost. So option B is correct here. And this is going to be 51st question of the series. A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user uploaded document in Amazon elastic block store that is Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another availability zone. Placing both behind an application load balancer. After completing this chain, user reported that each time they refreshed the website, they could see one subset of their document or the other but never all the document at the same time. What should a solution architect propose to ensure users see all their document at once? And here are the options and correct answer here will be option C. Copy the data from both EBS volume to Amazon elastic file system that is Amazon EFS. Modify the application to save new document to Amazon EUFS. And this option is correct because EFS is highly scalable and highly available file share servers and also two EC2 instance can mount onto the same EFS to access same set of document. So basically like if there are two uh two instance and uh they want to access the data from this particular EFS they can access from this but this is not possible in case of EBS because there will be two EBS and also uh here it is already told that volume will be in another availability zone. First very first thing is that EBS can't span across availability zone. it can be attached to the instance in the same availability zone. So as there will be two EBS so it will not be feasible at all. So using EFS will be the solution here because as I already told you it is highly scalable, it is highly available and at the same time two instances can access the it at the same time. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 41,
    "qNum": 52,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is planning to use Amazon S3 to store images uploaded by its user. The image must be encrypted at rest in Amazon S3. The company does not want to spend time managing and rotating the keys, but it want to control who can access those keys. What should a solution architect use to accomplish this?",
    "options": [
      "Option A: Implementation path for A company is planning to use A...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. And you may be familiar with all these options. All these are used for encryption purpose only. And correct answer here will be option D. Serverside encryption with AWS KMS managed keys. So this is because if you want to control the access of the keys then you must use serverside encryption KMS IM authorization feature. This feature is not available in S3. Feature is not available in S3. So these options are eliminated. But now this option is also there. But here uh as it is already told you that company does not want to spend time in managing and and rotating the keys. So option D will be corrected here.",
    "isMulti": false
  },
  {
    "id": 42,
    "qNum": 53,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is running an e-commerce application on Amazon EC2 instances. The application consists of a stateless web server tier that requires a minimum of 10 instances and a peak of 250 instances to support the application's usage. The application require 50 instances 80% of the time. Which solution should be used to minimize the cost?",
    "options": [
      "Option A: Implementation path for A company is running an e-comm...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Let me first show you the correct answer. Correct answer here will be option D. Purchase reserved instances to cover 50 instances. use on demand and export instances to cover the remaining instance. So basically we are using basically we are using reserve instances for 50 instances and this is why because uh the application requires 50 instances 80% of the time. So at least 50 should be there already and peak can go to up to anywhere we should not focus that but the minimum that is required is 50. So at least 50 reserved instances should be there and for the rest of the things we can use on demand and in port instances to cover the remaining load. So correct answer is option D here.",
    "isMulti": false
  },
  {
    "id": 43,
    "qNum": 54,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has deployed an API in a VPC behind an internet facing application load balancer. An application that consumes the API as a client is deployed in the second account in private subnet behind a net gateway. When request to the client application increases, the net gateway cost are higher than expected. A solution architect has configured the ALB to be internal. Which combination of architectural changes will reduce the net gateway cost?",
    "options": [
      "Option A: Implementation path for A company has deployed an API ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "Choose two. So here are the options. And here we have five options and we have to select the two. So correct answer here will be option A and option B. Configure a VPC pairing connection between the two VPCs. Access the API using the private address. And second correct option will be configure a private link connection for the API into the client VPC. Access the API using the private link address. So basically when you establish pairing relationship between two VPCs across different AWS regions resources in VPC for example it may be uh EC2 instances and lambda function in different AWS region can communicate with each other using the private IP address without using a gateway VPN connection or network appliances. So the traffic remains in the private space. So option A and option D will be correct here.",
    "isMulti": false
  },
  {
    "id": 44,
    "qNum": 55,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is tasked with transferring 750TB of data from an on premises network attached file system located at a branch office Amazon S3 Glacier. The migration must not saturate the on premises 1 Mbps internet connection. Which solution will meet this requirement?",
    "options": [
      "Option A: Implementation path for A solution architect is tasked...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. And here correct option will be option D. Order 10 AWS is Snowball age storage optimized devices and select an Amazon S3 bucket as destination. Create a life cycle policy to transition the S3 object to Amazon S3 glaciers. So option D is correct here.",
    "isMulti": false
  },
  {
    "id": 45,
    "qNum": 56,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has a two-tier application architecture that runs in public and private subnet. Amazon EC2 instances running the web application are in the public subnet and a database run on private subnet. The web application instances and the database are running in single availability zone. Which combination of step should a solution architect take to provide high availability for this architecture?",
    "options": [
      "Option A: Implementation path for A company has a two-tier appli...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. And here are the options. So correct answer here will be option B and option E. Create an Amazon EC2 autoscaling group and application load balancer spanning multiple AGS and create new public and private subnet in the same VPC each in new A. Migrate the database to an Amazon RDS multi-AG deployment. And here the load balancer and autoscaling group should span across multiple instances across multiple ages. And using autoscaling and ELP by spanning the autoscaling group across the multiple ages within a region and then setting up the ELB to distribute incoming traffic across ages help us to take the advantage of the safety and reliability of the geographic redundancy. RDS multi-ag provides high availability by creating as standby instances in different ag. So option B and E are going to be correct here.",
    "isMulti": false
  },
  {
    "id": 46,
    "qNum": 57,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is implementing a document review application using an Amazon S3 bucket for storage. The solution must prevent an accidental deletion of the document and ensure that all the versions of the documents are available. User must be able to download, modify and upload the document. Which combination of actions should be taken to meet these requirements?",
    "options": [
      "Option A: Implementation path for A solution architect is implem...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. And here are the options and uh I think you must have guessed correct options here because I think it is repeated question here and option B and D will be correct here because enabling versioning you will be able to save all the versions of the document and enable MFA delete will require you to have multiffactor authentication. ation when deleting an object version. So deletion of any file or any data will not will not occur by mistake as it will need multiffactor authentication. So you will have uh the time to think twice before deleting any data or file.",
    "isMulti": false
  },
  {
    "id": 47,
    "qNum": 58,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "An application hosted on AWS is experiencing performance problem and the application vendor want to perform an analysis of the log file to troubleshoot further. The log file is stored on Amazon S3 and is 10 GB in size. The application owner will make the log file available to the vendor for a limited time. What is the most secure way to do this?",
    "options": [
      "Option A: Implementation path for An application hosted on AWS i...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. And correct answer here will be option C. generate a pre-signed URL and have the vendor download the file before it expires. Uh this is correct here because option A and B are providing public link. So these are eliminated here uh as it may cause security concern and option D is not suitable because here in the question it is a vendor user accessing a log file. So here user used to access the application which is hosted in AWS and he is not the one who has permission to AWS console management. So creating IM is not feasible. So it is not correct here at all because IM user for the vendor to provide access to S3 will not work here. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 48,
    "qNum": 59,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing a two-tier web application. The application consists of a public facing web tier hosted on Amazon EC2 instances in public subnet. The database tier consist of Microsoft SQL server running on Amazon EC2 in private subnet. Security is high priority for the company. How should security group be configured in the situation?",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. And here are the options. And correct option here will be option A and option C. Configure the security group for the web tier to allow inbound traffic on the port 443 from everywhere. Basically 0.0.0 means traffic from every IP is allowed. And now configure the security group for the database tier to allow inbound traffic on the port 1433 from the security group for the web tier. And this is because as a secure way to configure the communication is by defining inbound on 443 for all the public facing web tier and only inbound access on port 1433 on the database tier from the security group of the web tier as database work on this particular port 1433. So this is going to be the correct answer here.",
    "isMulti": false
  },
  {
    "id": 49,
    "qNum": 60,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company allows it developer to attach existing IM policies to existing IM roles to enable faster experimentation and agility. However, the security operation team is concerned that developer could attach the existing administrator policy which would allow the developers to to circumvent any other security policies. How should the solution architect address this issue?",
    "options": [
      "Option A: Implementation path for A company allows it developer ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. And correct answer here will be option D. Set an IM permission boundary on developer IM role that explicitly denies attaching administrator policy. Because if you have explicitly denied that administrator policy can't be attached, then it will not create any issue. So option D is correct here. And this is going to be 61st question of the series. A company has a multi-ter application that runs six front- end web server in an Amazon EC2 autoscaling group in a single availability zone behind an application load balancer. A solution architect need to modify the infrastructure to be highly available without modifying the application. Which architecture should the solution architect choose that provides high availability? So here are the options and the requirement of the question is that it should provide high availability. So basically we should focus on this term only. So correct answer here will be option B. modify the autoscaling group to use three instances across each of the two availability zones because high availability can be enabled for this architecture quite simply by modifying the existing autoscaling group to use multiple availability zones because if we use multiple availability zone and if one particular availability zone is impacted by any external factors such as earthquake or flood or anything it may be then we will have the availability due to second availability zone and the ASG will automatically balance the load. So you don't actually need to specify the instances per AG. So basically uh there should be two availability zones. There should be autoscaling group and it will automatically distribute the load and it will automatically handle everything. So it will give you high availability. That is the requirement of the question. So option B is correct here.",
    "isMulti": false
  },
  {
    "id": 50,
    "qNum": 62,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company runs an application on a group of Amazon EC2 instances for compliance reason. The company must retain all the application log for 7 years. The log files will be analyzed by a reporting tool data must access all the files concurrently. Which storage solution meet this requirement most cost",
    "options": [
      "Option A: Implementation path for A company runs an application ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "effectively. So all these are the keyword here for 7 years reporting tool concurrently and most cost effectively. And here are the options. So basically uh we have to find for most cost effectively which is exactly this one and for reporting tool. So basically it will be read only. It will be read only and concurrently. So multiple files can be accessed at the same time. So correct answer here is D. But why it is the correct answer? However, from the concurrently you may be confused with EFS because uh Amazon S3 doesn't support concurrently but it doesn't support write concurrently. If you are writing to Amazon S3 it will not support concurrently definitely but it can support concurrently in case of read and here we have to just analyze the log. So read will be the requirement. So option D that is Amazon S3 is absolutely correct here. So don't be confused with Amazon EFS.",
    "isMulti": false
  },
  {
    "id": 51,
    "qNum": 63,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A media streaming company collect realtime data and store it in a disk optimized database system. The company is not getting the expected throughput and want an in-memory database storage solution that performs faster and provides high availability using data replication. Which database should a solution architect recommend?",
    "options": [
      "Option A: Implementation path for A media streaming company coll...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "So here are the options. and correct option here will be uh let let me first show you clue here realtime data and inmemory maybe you must have got the correct answer here and it will be option C because radius and mem cache both are okay for inmemory that will be fine but only radius can make replication And that is the requirement of the question here. So only option C will be correct here. However, for inmemory both these options are suitable but due to replication that is only possible in case of radies. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 52,
    "qNum": 64,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company hosted product information web pages on AWS. The existing solution uses multiple Amazon EC2 instances behind an application load balancer in an autoscaling group. The website also uses a custom DNS name and communicates with HTTPS only using a dedicated SSL certificate. The company is planning a new product launch and want to be sure that user from around the world have best possible experience on new website. What should a solution architect do to meet this requirement?",
    "options": [
      "Option A: Implementation path for A company hosted product infor...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. And correct option here will be option A. Redesign the application and use the Amazon cloud front. And this is because uh you can clearly see company host its product information web page. Basically it is going to be a static information. So this is absolutely a static but here we are using Amazon EC2. So this will be very costly because we can use uh S3 for the same. So we have to redesign the application to use S3 because it is static content. And after redesigning the application as the requirement is uh to give the better experience for the user around the world and this is the clue for using the cloud front. In any question if you get the keyword around the word then you should go for Amazon cloudfront. So basically complete requirement of the question is we have to use S3 with cloudfront and that's why option A is correct here and cloudfront also integrate seamlessly with ALB and provide option to use custom DNS and SSL certificate. So this requirement will also be satisfied here. And that's why we are using cloud Amazon cloudfront here.",
    "isMulti": false
  },
  {
    "id": 53,
    "qNum": 65,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing the cloud architecture for a new application being deployed on AWS. The process should run in parallel with adding and removing application node as needed based on the number of jobs to be processed. The processor application is stateless. The solution architect must ensure that the application is loosely coupled and the jobs items are durably stored. Which design should the solution architect use?",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "So here are the options. And correct option here will be option C. And this is because here A and B are wrong because they are using launch configuration. And here also uh they are using launch configuration. And basically launch configuration are never preferred. Only launch template are preferred. So we should go for launch template. But uh if we talk about launch template they are available in both the options option C and option D. Then why we are choosing only option C. And this is because we are using SNS topic to send the job that need to be processed. But SNS topic is pub sub model basically uh publish and subscribe model. So it will send the job to many subscribers. So that is not the requirement here. So we are going to use Amazon SQS because for decoupling process this is the best solution in any scenario. So option C is the correct answer here.",
    "isMulti": false
  },
  {
    "id": 54,
    "qNum": 66,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A marketing company is storing CSV files in Amazon S3 bucket for statistical analysis. An application own Amazon EC2 instance need permission to efficiently process the CSV data stored in S3 bucket. Which action will most securely grant EC2 instance access to the S3 bucket?",
    "options": [
      "Option A: Implementation path for A marketing company is storing...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So here are the options. And correct answer here will be option C. Associate an IM role with list privilege permissions to the EC2 instance profile. So in any option or in any question list privilege should be the clue because in any scenario we just want to provide list privilege permissions and uh also as we are talking about a particular service so we are going to use IM role here. So there should not be any conflict with any other option because uh IM RO is not available in any other options and uh let me just further explain you for better understanding. Uh keyword here is privilege permissions. So keyword here is privilege permissions and IM role enables you to manage access to AWS service and resources securely. Using IM you can create and manage AWS users groups and use permissions to allow and deny their access to resources. Basically we are talking here about particular resource and also IM is a feature of your AWS account offered at no additional cost. You will be charged only for the use of other AWS service by the user. So basically IM is just free of charge.",
    "isMulti": false
  },
  {
    "id": 55,
    "qNum": 67,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has on premises servers that run a relational database. The database serves high read traffic for users in different locations. The company want to migrate the database to AWS with the least amount of effort. The database solution must support high availability and must not affect the company's current traffic flow. Which solution meet these requirements?",
    "options": [
      "Option A: Implementation path for A company has on premises serv...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. and option A use a database in Amazon RDS with multi-AZ and at least one read replica is the correct answer here and this is because the standby in multi-AZ deployment cannot take on read request so read request will not be taken by this option. Uh it is only meant for failover and is not used for read purposes. So A is correct in this regard because we need to access the replica for consistency when needed. So this will satisfy both the needs basically for failover and uh the read request as well. So option A is better and correct here.",
    "isMulti": false
  },
  {
    "id": 56,
    "qNum": 68,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company's application is running on Amazon EC2 instances within an autoscaling group behind an elastic load balancer. Based on the application history, the company anticipates a spike in traffic during a holiday each year. A solution architect must design a strategy to ensure that the autoscaling group proactively increases capacity to minimize any performance impact on the application user. Which solution will meet this requirement?",
    "options": [
      "Option A: Implementation path for A company's application is run...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct option here will be option B. Create a recurring scheduled action to scale up autoscaling group before the expected period of peak demand. So basically question mentions that company anticipates a spike in traffic during holiday each year. So it directly implies to schedule and as it is each year so we are using recurring here. So basically this is a correct answer recurring schedule action to scale up autoscaling group before the expected period of peak demand.",
    "isMulti": false
  },
  {
    "id": 57,
    "qNum": 69,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company host an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQSQ, writes for Amazon RDS table and deletes and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQSQ does not contain any duplicate messages. What should a solution architect do to ensure messages are being processed only once?",
    "options": [
      "Option A: Implementation path for A company host an application ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. And here option D is correct. Use the change message visibility API to increase the visibility timeout. And this is because increasing visibility timeout will allow more time for the message to be processed and deleted before it has a chance to become visible again to other subscriber to the SQSQ. So option D is correct here.",
    "isMulti": false
  },
  {
    "id": 58,
    "qNum": 17,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "An Amazon EC2 administrator created the following policy associated with an IM group containing several user. What is the effect of this policy?",
    "options": [
      "Option A: Implementation path for An Amazon EC2 administrator cr...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So here are the options. And correct answer here will be option C. And this is why. So basically uh from this we can see effect is allowed action is terminate instances. So uh terminate instances is allowed and from where from this source IP and this is not the exact IP. This is the subnet. And one more effect is here deny action for EC2 and we have to deny if string is not equal to focus on this part. This is a string not equal to US east one. If a string is not equal to US east one basically if ren is not equal to this one then it will be denied. So first requirement is that real should be this one us one and US east one is available in which options? It it is available in this option. It is available in this option. But here cannot terminate. This is obviously incorrect. And here can terminate. So this may be correct. And now user can terminate with this. Yeah this may be also correct. and user can terminate in any except note no this is not the case because user from this only region can terminate. So we are left with these two options and now this one is correct and why because we are provided with source IP should be this one and here we are given with this and definitely this is the subset IP of this uh subnet only and this is also the IP of this subnet but since 1000.1 is reserved IP and unavailable in the C block so it becomes invalid option and we are left with only this option so this is the correct answer Here a solution architect is optimizing a website for an upcoming musical event. Videos of the performances will be streamed in real time and then will be available on demand. The event is expected to attract a global online audience. Which service will improve the performance of both the real time and ondemand is streaming. And here are the options. Amazon CloudFront, AWS Global Accelerator, Amazon Route 53, Amazon S3 Acceleration and here correct answer will be option A, Amazon CloudFront because you can use CloudFront to deliver video on demand or live streaming video using any HTTP origin. Global accelerator is a good fit for non-HTTP use cases such as gaming based on UDP, IoT based on MQTT as per voice IP as well as for HTTP use cases that specifically require a static IP. So global accelerator can help you only in static IP that's the use case for this. So option A cloudfront will be helpful for you. And I have already told you that if it is talking about the world audience then cloudfront will be the correct answer.",
    "isMulti": false
  },
  {
    "id": 59,
    "qNum": 72,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has a three- tier image sharing application. It uses an Amazon EC2 instance for the front end layer, another for the backend layer and third for the MySQL database. A solution architect has been tasked with designing a solution that is highly available and require the least amount of changes to the application. Which solution meet this requirement?",
    "options": [
      "Option A: Implementation path for A company has a three- tier im...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and correct option here will be option D. Use load balance multi-AG AWS elastic bin stock environment for the front end and the back end layers. Move the database to an Amazon RDS instance with multi-AZ deployment. Use Amazon S3 to store and serve users image and this is because the keyword from the question is highly available obviously it should be highly available and second one it requires least amount of changes to the applications. So basically for highly available we are using multi-AZ and for least amount of changes to the application we are using elastic bean stock that automatically handles the deployment from capacity provisioning load balancing autoscaling to application health monitoring and also as it is steady content Amazon S3 will be used to serve users image",
    "isMulti": false
  },
  {
    "id": 60,
    "qNum": 73,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "a solution architect is designing a system to analyze the performance of the financial markets will the markets are closed. The system will run a series of compute intensive jobs for 4 hours every night. The time to complete the compute jobs is expected to remain constant and the job cannot be interrupted once started. Once completed, the system is expected to run for a minimum of 1 year. Which type of EC2 instances should be used to reduce the cost of the system?",
    "options": [
      "Option A: Implementation path for a solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. And here correct option will be option D is scheduled reserved instance. And this one is correct because scheduled reserved instance deserves the capacity that is scheduled to recur daily, weekly or monthly with a specified start time and duration for a one-year term. After you complete your purchase, the instances are available to launch during the time windows that you specified. So all the requirements will be satisfied here by using this instance type. So option D is correct.",
    "isMulti": false
  },
  {
    "id": 61,
    "qNum": 74,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company built a food ordering application that captures user data and stores it for future analysis. The application is static front end is deployed on an Amazon EC2 instance. The front end application sends the request to the backend application running on separate EC2 instance. The backend application then stores the data in Amazon RDS. What should a solution architect do to decouple the architecture and make it scalable?",
    "options": [
      "Option A: Implementation path for A company built a food orderin...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options and correct option here will be option D. use Amazon S3 to serve the static front end application. So basically this is an universal thing. Whenever there is a static content we have to use Amazon S3 note EC2 instance as it is using here and then send request to Amazon API gateway which writes the request to an Amazon SQSQ place the backend instances in an autoscaling group and is scale based on the QAP to process and store the data in Amazon RDS. And also as we want to decouple the application and the best solution for decoupling is to use SQS and that is available here. So option D is correct. And if you compare it with option C there is SQS but here they are using EC2 instance and that is not cost effective at all. And if you compare with option A and B they are using S3 that is fine but they are not using SQS that is missing here in both the options and that is the issue with rest of the three options. So option D is correct here.",
    "isMulti": false
  },
  {
    "id": 62,
    "qNum": 75,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect need to design a managed storage solution for a company's application that includes high performance machine learning functionality. These applications run on AWS far and connected storage needs to have concurrent access to files and deliver high performance. Which storage option should the solution architect recommend?",
    "options": [
      "Option A: Implementation path for A solution architect need to d...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And uh just by having a look on this high performance you must have got to the option Amazon FSX and this is not correct here. Option B is not correct here at all as option C create an Amazon EFS file share and establish an IM role that allow forget to communicate with Amazon EFS. This is correct here and the reason here is even though FSX for lure support concurrent process this requirement will be uh satisfied but the issue is that far doesn't support lure the fargate will not support this lure so this is the issue here and option C is going to be correct here",
    "isMulti": false
  },
  {
    "id": 63,
    "qNum": 76,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "a bicycle sharing company is developing a multi-ter architecture to track the location of its bicycle less during peak operating hours. The company want to use this data point in its existing analytics platform. A solution architect must determine the most viable multi-ter option to support this arc",
    "options": [
      "Option A: Implementation path for a bicycle sharing company is d...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "hitecture. The data point must be accessible from the rest APIs. Which action meet these requirement for storing and retrieving location data. And here are the options. So correct option here will be option B use Amazon API with AWS Lambda and keyword here is data point in its existing analytics platform plus data must be accessible from the rest API. These are the keyword here and track the location during the peak operating hours. So basically they already have analytic platform. So option A A and option D KSIS and data analytics are already out. Now B and C C will not support REST API. Uh so answer would be B.",
    "isMulti": false
  },
  {
    "id": 64,
    "qNum": 77,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing a web application that will run on Amazon EC2 instances behind an application load balancer. The company strictly requires that the application should be resilient against malicious internet activity and attacks and protect against new common vulnerabilities and exposures. What should the solution architect recommend?",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options and correct option here will be option C. Subscribe to AWS Shield Advance and ensure common vulnerabilities and exposures are blocked because web only doesn't cover the whole requirement. You may use web but it will not cover the complete requirement because for resilient against malicious internet activity and attacks, AWS shield will be fine and protect against new common vulnerabilities and exposure AWS web will be uh used for this. But for both the requirement AWS shield advance is required because AWS shield advance includes AWS web in its price subscription. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 65,
    "qNum": 78,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has an application that calls AWS Lambda functions. A code review shows that database credentials are stored in Lambda function source code which violates the company's security policy. The credentials must be securely stored and must be automatically rotated on an ongoing basis to meet security policies requirement. What should a solution architect recommend to meet these requirement in most secure manner?",
    "options": [
      "Option A: Implementation path for A company has an application t...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And this must be easy one for you and correct option here will be store the password in AWS secret manager. Associate the lambda function with a role that can use the secret ID to retrieve the password from the secret manager. Use secret manager to automatically rotate the password. So basically AWS secret manager is designed specifically for confidential information like database credentials, API keys that need to be encrypted. So the creation of secret entry has a encryption enabled by default. It also gives you additional functionality of rotation of keys. So that will also be satisfied here.",
    "isMulti": false
  },
  {
    "id": 66,
    "qNum": 79,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is managing health record on premises. The company must keep these record indefinitely, disable any modification to these record once they are stored and granularly audit access at all levels. The chief security officer is concerned because there are already millions of record not being used by any application and the current infrastructure is running out of space. The CTO has requested a solution architect design a solution to move existing data and support future record. Which service can a solution architect recommend to meet these requirement?",
    "options": [
      "Option A: Implementation path for A company is managing health r...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options and correct option here will be option A. Use AWS data sync to move existing data to AWS. Use Amazon S3 to store existing and new data. enable Amazon S3 object loop and enable AWS cloud trail with data event. So basically we have to use AWS data sync to migrate existing data to Amazon S3 and then use the file gateway configuration of AWS storage gateway to retain access to the migrated and for ongoing update from your on premises files based application. So for the solution to move existing data and support future record. So here AWS data sync will be used for migration and as granular audit access at all levels is required. So AWS cloud trail with data event is the requirement here and also modification to data is not possible. So Amazon S3 object log is required here. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 67,
    "qNum": 80,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company want to use Amazon S3 for secondary copy of its on premises data set. The company would rarely need to access this copy. The storage solution cost should be minimal. Which storage solution meet this requirement?",
    "options": [
      "Option A: Implementation path for A company want to use Amazon S...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and track option here will be S31 Jone infrequent axis because company would rarely need this axis and the cost should be minimal. So this is the best option for this. A company's operation team has an existing Amazon S3 bucket configured to notify an Amazon SQS when new objects are created within the bucket. The development team also want to receive event when new objects are created. The existing operations team workflow must remain intact. Which solution would satisfy these requirement? And here are the options. And correct option here is option D. Create an Amazon SNS topic and SQS for bucket updates. Update the buckets to send the event to the new topic. Add subscription for both the cues in the topic. So this is the correct answer here and this is why because it would allow the existing operation team workflow to remain intact while also allowing the development team to receive event when new objects are created in the S3 bucket. SNS can be used to broadcast messages to multiple subscribers including SQSQs and can be used to decouple the sending and receiving of the message and due to this reason option D is absolutely correct here.",
    "isMulti": false
  },
  {
    "id": 68,
    "qNum": 82,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "An application run on Amazon EC2 instances in private subnets. The application need to access an Amazon Dynamob table. What is the most secure way to access the table while ensuring that the traffic does not leave the AWS network?",
    "options": [
      "Option A: Implementation path for An application run on Amazon E...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "So here are the options. And here correct answer is option A. Use a VPC endpoint for Amazon Dynamo [clears throat] DB because a VPC endpoint for Dynamob DB enables the Amazon EC2 instance in your VPC to use their private IP address to access the Dynamo DB with no exposure to the public internet. Your EC2 instances do not require public IP address and you don't need an internet gateway, a net device or a virtual private gateway in your VPC. You use the endpoint policy to control the access to the Dynamo DB and the traffic between your VPC and the AWS service do not leave the AWS network. This is the very important point here and also the requirement in the question itself that traffic between the VPC and the AWS service does not leave the Amazon network. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 69,
    "qNum": 83,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company built an application that lets user check into the places they visit, rank the places and add the reviews about their experiences. The application is successful with a rapid increase in the number of users every month. The chief technology officer fears the database supporting the current",
    "options": [
      "Option A: Implementation path for A company built an application...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "infrastructure may not handle the new load the following month because the single Amazon RDS for MySQL instance has triggered alarms related to resource exhaustion due to the read request. What can a solution architect recommend to prevent service interruptions at the database layer with minimal changes to the code? And here are the options and correct answer here will be option A. Create RDS read replica and redirect the readonly traffic to the read replica endpoint. enable a multi- aure deployment and you may also get confused with Amazon elastic cache cluster but the correct answer here is option A only because here we are using read replicas which supports dynamic content the reason is dynamic content and uh if you go with elastic assay it supports only static content and uh now there may be query that why you are guessing that it is dynamic content because the location information is constantly getting updated. Due to that reason, it will be dynamic content and due to dynamic content, we are going to use RDS read replica and location is constantly getting updated because they may visit any different places. So certainly there will be change in the places and uh they will rank differently, they will add review differently. So it is going to be dynamic content only and this will be the correct option here.",
    "isMulti": false
  },
  {
    "id": 70,
    "qNum": 84,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is looking for a solution that can restore video archives in AWS from old news footage. The company needs to minimize the cost and will rarely need to restore these files. When the files are needed, they must be available in a maximum of 5 minutes. What is the most cost effective solution?",
    "options": [
      "Option A: Implementation path for A company is looking for a sol...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. And correct answer here will be option A. Store the video archives in Amazon S3 Glacier and use expedited retrivals because S3 glacier is cheapest option and also satisfies the retrieval requirements that is of 5 minutes and expedited retrivals allow you to quickly access your data. Here option A is correct because S3 glacier is the cheapest option and also satisfies the retrieval time requirement that is of 5 minutes.",
    "isMulti": false
  },
  {
    "id": 71,
    "qNum": 85,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has created a VPC with multiple private subnets in multiple availability zones and one public subnet in one of the AES. The public subnet is used to launch a net gateway. There are instances in the private subnet that use a net gateway to connect to the internet. In case of a a failure, the company want to ensure that the instances are not all experiencing the internet connectivity issues and that there is a backup plan ready. Which solution should a solution architect recommend that is most highly available?",
    "options": [
      "Option A: Implementation path for A company has created a VPC wi...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options and option C will be correct here. Create public subnet in each a and launch a net gateway in each subnet. configure the traffic from the private subnet in each a to the respective net gateway and this is correct here because net gateway is resilient within a single a so we must create multiple net gateways in multiple a forlerance and there is no close a failover needed because if an a goes down it doesn't need net if an a goes down all the e2 in that a will be down no point of connecting e2 in one a with the net gateway in other a so due to that reason option C is correct here.",
    "isMulti": false
  },
  {
    "id": 72,
    "qNum": 86,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A healthcare company stores highly sensitive patient records. The compliance requires that the multiple copies be stored in different location. Each record must be stored for 7 years. The company has a service level agreement to provide record to the government agency immediately for the first 30 days and then within 4 hours of a request thereafter. What would a solution architect recommend?",
    "options": [
      "Option A: Implementation path for A healthcare company stores hi...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And correct answer here will be option A. Use Amazon S3 with close rean replication enabled. After 30 days, transition the data to Amazon S3 glacier using the life cycle policy because there is no other suitable option uh among B, C and D as data is needed in 4 hours or less time. So correct answer here is option A because data should be accessed within 4 hours after the 30 days and it could be satisfied using Amazon S3 Glacier.",
    "isMulti": false
  },
  {
    "id": 73,
    "qNum": 87,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company recently deployed a new auditing system to centralize information about operating system versions, patchings and installed software for Amazon EC2 instances. A solution architect must ensure that all the instances provisioned through EC2 autoscaling group successfully send report to the auditing system as soon as they are launched and terminated. Which solution achieves these goals most efficiently?",
    "options": [
      "Option A: Implementation path for A company recently deployed a ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and correct option here will be option B. Use easy to autoscaling life cycle hook to run a custom script to send data to the audit system when the instances are launched and terminated because the life cycle hooks puts the instance into a weight state and then performs the custom action and will be able to run the custom script. So option B is the correct answer here.",
    "isMulti": false
  },
  {
    "id": 74,
    "qNum": 88,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company recently implemented hybrid cloud connectivity using AWS direct connect and is migrating the data to Amazon S3. A company is looking for a fully managed solution that will automate and accelerate the replication of the data between the on- premises storage systems and the AWS storage services. Which solution should a solution architect recommend to keep the data private?",
    "options": [
      "Option A: Implementation path for A company recently implemented...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options and correct answer here will be option A. Deploy a data sync agent for the on premises environment. Configure a sync job to replicate the data and connect it with the AWS service endpoint. Basically, you can use AWS data sync with your direct connect link to access the public endpoint or the private VPC endpoint. And when using the VPC endpoint, data transferred between the data sync agent and the AWS services does not transfers the public internet or need the public IP address. Increasing the security of the data as it is copied over the network and also data sync is for moving transferring migrating on-prim data to AWS storage gateway is for backups. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 75,
    "qNum": 89,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has a 150 TB of archived image data stored on premises that need to be moved to AWS cloud within the next month. The company's current network allows up to 100 Mbps upload for this purpose during the night only. What is the most cost effective mechanism to move this data and meet the migration deadline?",
    "options": [
      "Option A: Implementation path for A company has a 150 TB of arch...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct option here will be option B. Order multiple AWS Snowball devices to ship the data to AWS. And this is so because if you try to transfer the data over the network then if you uh work for 6 hours per night and uh there will be 360 minute for this and in 60 minute and if we convert it into second it will be 21,600 second and uh we have the connection speed of 100 Mbps and if we uh do the further calculation multiplying it by 100 it will 21600 MB. Basically uh it will be equal to 2.1 TB. So only this much data can be transferred over the network. So this will not meet our requirement. We can use two snowball age storage optimized devices. And the size of those devices is equal to 80TB. And let me also tell you the sizes of other devices. If we use uh a snowball that is age compute optimized, it will be compute optimized and the size of this will be 40 dB and uh size of snow cone is equal to 8 TB and the size of snow mobile which is the biggest is equal to 100 pabyte and one pab AB is equal to 1,000 TB. So this is the calculation for this. It is equal to 1,000 terabyte. So and this will not work as uh like you will be able to transfer just 2.1. If you use the connection of 100 Mbps and uh because uh like if you work 6 hours and convert it into minutes it will be equal to this much minute and it will be equal to this much second and per second it will be equal to this much data will be transferred per night only even if you calculate for the 30 days it will be just uh 63 if I'm not wrong here so you should use only snowball devices",
    "isMulti": false
  },
  {
    "id": 76,
    "qNum": 90,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "a public facing web application queries database hosted on an Amazon EC2 instances in private subnet. A large number of queries involved multiple table joins and the application performance has been degrading due to an increase in the complex queries. The application team will be performing the updates to improve the performance. What should a solution architect recommend to the application team?",
    "options": [
      "Option A: Implementation path for a public facing web applicatio...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "Choose two and here are the options. And here we will follow the reverse pattern. Basically correct option here are option B and option E. Create a read replica to offload the queries. Migrate the database to the Amazon RDS. A is wrong because SQS cannot catch the data. So it is wrong. And now Amazon Athena, it is used for quering the data in the S3. So it is also wrong. And now if we talk about uh Dynamob accelerator, it is also wrong because the question mentions multiple table joins which implies the relational database and Dynamob is the non- relational database. So it is also wrong here. So correct option here are option B and option E. A company is seeing access request by some suspicious IP address. The security team discovers that the requests are from different IP addresses under the same C range. What should a solution architect recommend to the team? And here are the options and correct answer here would be option C. Add a deny rule in the inbound table of the network ACL with a lower number than the other rules. So this will be correct option here. And why it is correct answer here? because you can only create deny rule in the network ACL only. So NACL will be used here and it is impossible with SGS to deny any traffic and also network ACL process the rules in order from the lowest number rule to the highest until they reach allow or deny. So basically like if we have created multiple rules like first one is with 100 then second one is 200 then third one is 300. So this rule will be processed first and after that this one and after that this one and you must have seen this uh pattern that rules are created with 100 200 300 this way and this is because if we want to insert any rule in between these two then we can create rule with 101 or 102. So this will be helpful in that case. So basically will be used here and for that we will add a inbound rule with a lower number than the other rules. Basically if we add rule with the lowest number then that will be calculated first and rest of them will be calculated or processed after that only. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 77,
    "qNum": 92,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company recently expanded globally and want to make its application accessible to the users in those geographic locations. The application is deployed on Amazon EC2 instances behind an application load balancer in an autoscaling group. The application need the ability to shift the traffic from resources in one region to another. What should a solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company recently expanded gl...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here correct answer will be option C. Configure an Amazon route 53 geoproximity routing rule. So this is the correct answer here and you may get confused with this option but this is wrong here in this case because geoloccation routing policy is used when you want to route the traffic based on the location of the users and you will use geoproximity routing policy when you want to route the traffic based on the location of the resources and optionally shift the traffic from resources in one location to resources in other location and this is the requirement of our question here. So we are going to use geoproximity here only.",
    "isMulti": false
  },
  {
    "id": 78,
    "qNum": 93,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company want to replicate its data to AWS to recover in the event of a disaster. Today system administrator has a script that copy data to a NFS share. Individual backup files need to be accessed with low latency by application administrators to deal with the errors in the processing. What should a solution architect recommend to meet these requirement?",
    "options": [
      "Option A: Implementation path for A company want to replicate it...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here correct answer will be option D. Modify the script to copy the data to an AWS storage gateway for file gateway virtual appliances instead of the on premises NFS share. So this is the correct answer here and why it is correct here. Here option A and B are wrong because question is about NFS and Amazon S3 is not meant for NFS. So due to this option A and B are eliminated and C is wrong since backup is required and this facility will not be provided here. So option D is correct. And also file gateway employs a local read and write cache to provide a low latency to access the data for the file share client in the same local area network as the file gateway. And here that is also the requirement of our question. So this is absolutely correct here.",
    "isMulti": false
  },
  {
    "id": 79,
    "qNum": 94,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "An application requires a development environment and production environment for several years. The dev instances will run for 10 hours each day during normal business hours. Will the pro instances will run 24 hours each day?",
    "options": [
      "Option A: Implementation path for An application requires a deve...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "A solution architect need to determine a compute instance purchase strategy to minimize the cost? Which solution is most cost effective? So here are the options and correct answer here would be option C. Dev with scheduled reserve resistance and pro with reserved instance. And this must be a obvious question for you because dev instances will run 10 hours each day during normal business hours. Due to that reason a scheduled reserve instances are used because for the rest of the time like uh 10 hours are utilization time and remaining 14 hours we'll be just causing the cost is due if we are not using a scheduled reserve instance and minimizing the cost is our requirement and pro with reserve instance because pro are running 24 hours. So it should be a standard reserved instance and uh this will be the correct answer obviously. And now a company runs multiple Amazon EC2 instances in VPC across two availability zones. The instances host application that use a hierarchal directory structure. The application need to read and write rapidly and concurrently to shared storage. What should a solution architect do to meet this requirement? And here are the options. And correct option here will be option A. Create an Amazon elastic file system that is Amazon EFS file system. Mount the EFS file system from each EC2 instance. And this is correct here because EFS is fast for read and write and also share the data. So all the requirement will be fulfilled here. And also if we go with EBS option which are already eliminated will cause the issue due to availability zones because EBS can be attached with the instance in the same availability zone but here they have clearly mentioned about two availability zone. So these options are already eliminated and option A is the only correct answer.",
    "isMulti": false
  },
  {
    "id": 80,
    "qNum": 96,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect observes that a nightly batch processing job is automatically scaled up for 1 hour before the desired Amazon EC2 capacity is reached. The peak capacity is the same every night and the best job always start at 1:00 a.m. The solution architect need to find a cost effective solution that will allow for the desired EC2 capacity to be reached quickly and allow the autoscaling group to scale down after the bad jobs are complete. What should the solution architect do to meet these requirement?",
    "options": [
      "Option A: Implementation path for A solution architect observes ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. and correct transfer here will be option C. Configure is scheduled scaling to scale up to the desired compute level. So from few key points you can clearly figure out that this is the correct transfer here. same every night 1 hour before the desired Amazon EC2 capacity is reached and uh at the same time we are finding cost effective and the job always start at 1:00 a.m. So due to particular time to mitigate the issue we have to use scheduled scaling to scale up to the desired compute level.",
    "isMulti": false
  },
  {
    "id": 81,
    "qNum": 96,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect must design a web application that will be hosted on AWS allowing users to purchase access to premium shared content that is stored in an S3 bucket. Upon payment, content will be available for download for 14 days before the user is denied access. Which of the following would be the least complicated implementation?",
    "options": [
      "Option A: Implementation path for A solution architect must desi...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options and correct answer here would be option D. Use an Amazon CloudFront distribution with an O AI. Configure the distribution with an Amazon S3 origin to provide access to the file through signed URL. design the application to set an expiration of 60 minute for the URL and recreate URL as necessary. So option D is correct here and this is because uh there is no need to remove the data but we have to just expire the pre-signed URLs and uh option A and B are talking about removing the data. So both these are eliminated. So option C and option D are left with us. And now maximum expiry for pre-signed URL is 7 days. And here we are setting expiration of 14 days. So this is also eliminated. So we are left with option D. And this is the correct answer here.",
    "isMulti": false
  },
  {
    "id": 82,
    "qNum": 98,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing a mission critical web application. It will consist of Amazon EC2 instances behind an application load balancer and a relational database. The database should be highly available and fall tolerant. Which database implementation will meet this requirement?",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And here we have to choose two options. Correct option here will be option D and E. MySQL compatible Amazon Aurora with multi-AZ and Amazon RDS for SQL server standard addition multiAZ. So here option A is eliminated because red shift is a cloud data warehouse and not a SQL database and option B is also wrong here because it does not say that global tables is active and it is a NoSQL database and Dynamo DB is a NoSQL database and C is wrong because it's a multi-AZ and it will not support it. So option D and E are correct here.",
    "isMulti": false
  },
  {
    "id": 83,
    "qNum": 99,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company's web application is running on Amazon EC2 instances behind an application load [clears throat] balancer. The company recently changed its policy which now requires the application to be exist from one specific country only. Which configuration will meet this requirement?",
    "options": [
      "Option A: Implementation path for A company's web application is...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. Correct option here is configure AWS web on the application load balancer in VPC and this is correct because security group cannot have the deny rules. So both these options are eliminated and the option C is satisfying both the need and the instances are also behind the application load balancer and it is also using AWS web which will help us to access from one specific country only. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 84,
    "qNum": 100,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect has created two IM policy policy one and policy 2. Both the policies are attached to an IM group. And uh here are the options. And here we have to find which particular action can be done by the user and correct answer here will be option C. Deleting Amazon EC2 instances and why?",
    "options": [
      "Option A: Implementation path for A solution architect has creat...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "So we have policy one this one and now here policy 2. So from here we can see effect is allow and we can do what? IM can get IM list KMS list uh and EC2 we can do anything with the EC2 and for DS directory we can do anything with that also logs we can get logs we can describe but here are the options deleting IM user is it allowed no it is not allowed and deleting directories yeah we can do anything with the directory so it is also possible now deleting Amazon EC2 instances yeah that is also allowed and deleting logs from the Amazon cloud watch logs can We get describe but can't be deleted. So this is also wrong. Option D is also eliminated. Option A is also eliminated. But deleting directories and deleting Amazon EC2 [clears throat] instances are left with us. Now let us look at policy two effect is deny and the action DS directory delete. So deleting of directories is explicitly denied. So it is explicitly denied. So option C is correct here. A company has an Amazon EC2 instance running on a private subnet that need to access a public website to download patches and updates. The company does not want external website to see the EC2 instance IP address or initiate connection to it. How can a solution architect achieve this objective? Here are the options for this. Correct answer here will be option B. Create a net gateway in a public subnet. Route outbound traffic from the private subnet through the net gateway. And this is correct here because net gateway is a network address translation service. Basically net service. So you can use net gateway so that the instances in private subnet can connect to the services outside your VPC but external service cannot initiate a connection with those instances. So basically this particular service is basically for this particular task only that is for preventing external website or external service to initiate the connection to our EC2 instances in the private subnet. So option B is correct here.",
    "isMulti": false
  },
  {
    "id": 85,
    "qNum": 102,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company must migrate 20 TB of data from a data center to AWS cloud within 30 days. The company's network bandwidth is limited to 15 Mbps and cannot exceed 70% utilization. What should a solution architect do to meet this requirement?",
    "options": [
      "Option A: Implementation path for A company must migrate 20 TB o...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And the correct answer here will be option A. Use AWS Snowball because with 50 Mbps connection and at 70% utilization it will take multiple month to transfer this 20TB of data. So using a snowball is the best option here and this is the correct transfer in this case.",
    "isMulti": false
  },
  {
    "id": 86,
    "qNum": 103,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has a website running on Amazon EC2 instances across to availability zone. The company is expecting a spike in traffic on a specific holidays and want to provide a consistent user experience. How can a solution architect meet this requirement?",
    "options": [
      "Option A: Implementation path for A company has a website runnin...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and correct answer here will be option D. use scheduled scaling and why because we are expecting traffic at predictable time and when load is predictable we have to use scheduled scaling always so this is the correct option here",
    "isMulti": false
  },
  {
    "id": 87,
    "qNum": 104,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "an e-commerce company is running a multi-ter application on AWS the front end and the back end tier both run on Amazon EC2 instance and the database run on Amazon RDS for MySQL the back end tier communicate with the RDS instance There are frequent calls to return identical data set from the database that are causing performance slowdowns. Which action should be taken to improve the performance at the back end?",
    "options": [
      "Option A: Implementation path for an e-commerce company is runni...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And options are here and correct option here will be option B. Implement Amazon elastic asset to cach the large data sets. So basically Amazon elastic caching will be used if same read request or same query is performed over and over again. And here also we are having the same scenario frequent call from the identical database. So due to that reason elastication will be used and here is a clue for other question as well. If identical or similar you found these terms then you should go to elastic essay always. So option B is correct here.",
    "isMulti": false
  },
  {
    "id": 88,
    "qNum": 105,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has an own premises data center that is running out of storage capacity. The company want to migrate its storage infrastructure to AWS while minimizing the bandwidth cost. The solution must allow for intermediate retrieval of data at no additional cost. How can these requirement be met?",
    "options": [
      "Option A: Implementation path for A company has an own premises ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. and correct to answer here will be option B. Deploy AWS storage gateway using cache to volumes. Use storage gateway to store data in Amazon S3 will retaining the copies of frequently accessed data subsets locally. So this is correct here because the company want to migrate its storage infrastructure to AWS. So cached volume would be available on premises and also caching the data. This is the speed in term of retrieval and here immediate retrieval is the requirement of the question and it will also occur at no additional cost.",
    "isMulti": false
  },
  {
    "id": 89,
    "qNum": 106,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is processing data on a daily basis. The result of the operations are stored in Amazon S3 bucket analyzed daily for one week and then must remain immediately accessible for occasional analysis. What is the most cost effective storage solution alternative to the current configuration?",
    "options": [
      "Option A: Implementation path for A company is processing data o...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and correct answer here will be option D. Configure a life cycle posty to transition the object to Amazon S3 one jone infrequent taxes after 30 days. So let me clear you one point. You must have gone for option C because this is standard infrequent axis and here it is one jone. So you may think that it may be risky to store the data in this particular option. But here we are going for the most cost effective storage. In case of high availability if HA is mentioned in the question then definitely we have to select option C. But here we are focusing on the most cost effective. So in this case we have to go for option D and that is the correct answer in this case.",
    "isMulti": false
  },
  {
    "id": 90,
    "qNum": 107,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company delivers files in Amazon S3 to certain users who do not have AWS credentials. These users must be given access for a limited time. What should a solution architect do to securely meet this requirement?",
    "options": [
      "Option A: Implementation path for A company delivers files in Am...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct answer here will be option B. Generate a pre-signed URL to share with the users. So this is going to be correct here because pre-signed URLs grant permission for limited time and also as they do not have AWS credentials. So due to that reason presigned URL becomes the most correct answer in this question.",
    "isMulti": false
  },
  {
    "id": 91,
    "qNum": 108,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company want to run a hybrid workload for data processing. The data needs to be accessed by on premises application for local data processing using an NFS protocol and must also be accessible from the AWS cloud for further analytics and batch processing. Which solution will meet this requirement?",
    "options": [
      "Option A: Implementation path for A company want to run a hybrid...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct option here will be option A. Use an AWS storage gateway file gateway to provide file storage to AWS then perform analytics on this data in AWS cloud. And this is correct here because AWS storage gateway volume gateway uses ISCI basically this one is CSI model and AWS storage gateway file gateway uses NFS. So it uses NFS. So we have to use A over D. So this one will be eliminated because we are not supposed to use volume gateway as NFS protocol is the requirement of our question.",
    "isMulti": false
  },
  {
    "id": 92,
    "qNum": 109,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company plans to store sensitive user data on Amazon S3. Internal security compliance requirement mandate the encryption of data before sending it to Amazon S3. What should the solution architect recommend to satisfies this requirement?",
    "options": [
      "Option A: Implementation path for A company plans to store sensi...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options and correct answer here will be option D. Client side encryption with a master key is stored in AWS key management that is AWS KMS. And here option A and C are eliminated because server side encryption conflict with the mandate of the encryption of data before sending it to Amazon. So it should be client side only. And now we are left with B and D and D is correct here because AWS key encryption is about KMS. So due to this reason option D is correct here.",
    "isMulti": false
  },
  {
    "id": 93,
    "qNum": 110,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is moving the static content from a public website hosted on Amazon EC2 instances to an Amazon S3 bucket. An Amazon CloudFront distribution will be used to deliver the static assets. The security group used by the EC2 instances restrict the access to a limited set of IP ranges. Access to static content should be similarly restricted. Which combination of step will meet these requirement?",
    "options": [
      "Option A: Implementation path for A solution architect is moving...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "Choose two. And here are the options. And now correct answer here will be option A and B. Create an origin access identity O AI and associate it with the distribution. change the permission in the bucket policy so that only the AI can read the object and along with that create an AWS web ACL that includes the same IP restriction that exists in the EC2 security group associate this with the new ACL with the cloudfront distribution. So basically C and D are eliminated here because security group cannot fulfill the purpose of denying the traffic. And now if we talk about E, the object permission in a bucket must be given to the files not to the bucket in general. So this one is also eliminated here. So option A and B are correct here. Option A will help us in restricting the access to content in Amazon S3 bucket and option B will help us because it is using AWS web web ACL. So option A and B are correct here. A company is investing a potential solution that would collect, process and store user service usage data. The business objective is to create an analytics capability that will enable the company to gather operational insight quickly using a standard SQL queries. The solution should be highly available and ensure atomicity, consistency, isolation and durability basically asset compliance in the data tier. Which solution should a solution architect recommend? And here are the options and correct option here will be option C. Use a fully managed Amazon RDS for MySQL database in multi-AZ design. And this is why because RDS always confirms the acid compliance which is the requirement of the question. Moreover, there are two more reasons for the option C being correct. Extended SQL queries is the requirement in the question. You can see from here which eliminates option A and option B because it will not be satisfied if we go for option A and option B and also high availability requirement in the question makes it option C because it is multi-AZ design. So option C is correct here in this question.",
    "isMulti": false
  },
  {
    "id": 94,
    "qNum": 112,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company recently launched its website to serve content to its global user base. The company want to store and accelerate the delivery of static content to its user by leveraging Amazon CloudFront with an Amazon EC2 instance attached as its origin. How should the solution architect optimize high availability for the application?",
    "options": [
      "Option A: Implementation path for A company recently launched it...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. and correct transfer here will be option C. Configure another EC2 instance in different availability zone as a part of origin group. And this is because you can set up Amazon CloudFront with origin failover for scenarios that require high availability. And to get started, you can create an origin group with two origins, a primary and a secondary. If the primary origin is unavailable or returns a specific HTTP status code that indicate a failure, CloudFront automatically switch to the secondary origin. And this is not something which I'm telling from my side. This is something which is stated in official AWS document. And I will share this document in the description. You can visit the document and can verify. Here is that document and it is stated here clearly. So due to that reason, option C is correct here.",
    "isMulti": false
  },
  {
    "id": 95,
    "qNum": 113,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "An application running on Amazon EC2 instance in VPCA need to access files in another EC2 instance in VPCB. Both are in separate AWS account. The network administrator need to design a solution to configure secure access to EC2 instance in VPCB from VPCA. The connectivity should not have a single point of failure or bandwidth concern. Which solution will meet this requirement?",
    "options": [
      "Option A: Implementation path for An application running on Amaz...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here [clears throat] are the options. And maybe this one is easy for you because correct answer here is option A. And when we are talking about VPCs or connectivity between VPCs, VPC pairing is the best option always. and also VPC pairing support close account and cross region and close VPC within the same account and does not have bandwidth limitation as well. So it will satisfy all the requirement of this question and it is going to be correct answer here only.",
    "isMulti": false
  },
  {
    "id": 96,
    "qNum": 114,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company currently stores symmetric encryption keys in hardware security module. A solution architect must design a solution to migrate key management to AWS. The solution should allow for the key rotation and support the use of customer provided keys. Where should the key material be stored to meet this requirement?",
    "options": [
      "Option A: Implementation path for A company currently stores sym...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and correct answer transfer here will be option D AWS key management service that is AWS KMS and this one is correct here because keys are used for encryption and secret manager is used to store secret used for authentication not for encryption and due to that reason these are eliminated and obviously you must be aware about what is the purpose of Amazon S3 so it is also wrong so option D that is AWSKMS is correct here",
    "isMulti": false
  },
  {
    "id": 97,
    "qNum": 115,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "a recent analysis of company's IT expenses highlights the need to reduce the backup cost the company's chief information officer want to simplify the on premises backup infrastructure and reduce cost by eliminating the use of physical backup tapes the The company must preserve the existing investment in the own premises backup application and workflows. What should a solution architect recommend?",
    "options": [
      "Option A: Implementation path for a recent analysis of company's...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options and correct transfer here will be option D. setup storage gateway to connect with the backup application using the ISCSI virtual tape library VTL interface. And this one is correct because tape gateway enables you to replace using the physical tape on premises with virtual tape in AWS without changing the existing backup workflows. So option D is correct here.",
    "isMulti": false
  },
  {
    "id": 98,
    "qNum": 116,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company host an application on Amazon EC2 instance that require a maximum of 200 GB storage space. The application is used infrequently with peaks during morning and evening. Disk IO varies but peaks at 3,000 IOPS. The chief financial officer of the company is concerned about the cost and has asked a solution architect to recommend the most cost effective option that does not sacrifice the performance. Which solution should the solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company host an application ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and correct answer here will be option B Amazon elastic block store general purpose SSD of type GP2. So this one is correct here because IOPS are reaching up to the limit of 3,000 and if you go with cold HDD SC1 IOPS limit is 250 and if you go with GP2 then the limit will be 16,000 and if you go with IO1 the limit of IOPS will be 64,000 and if you go with throughput optimized that HDD then IOPS limit will be 500. So u these two options are eliminated and at the same time however both these can satisfy the requirement but this will be costly option and we have to find the most cost effective storage option. So this one is going to be correct because you can use up to 16,000 diode. So GP2 option B is correct here.",
    "isMulti": false
  },
  {
    "id": 99,
    "qNum": 117,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company's application hosted on Amazon EC2 instances need to access an Amazon S3 bucket. Due to data sensitivity, traffic cannot transverse the internet. Household resolution architect configure the access. And here are the options. And correct answer here will be option B. Configure a VPC gateway",
    "options": [
      "Option A: Implementation path for A company's application hosted...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "endpoint for Amazon S3 in the VPC. And this is very obvious and we have also discussed it in our previous question and previous videos as well. S3 and Dynam are the two services which uses VPC gateway endpoint. So due to this reason option B will be corrected here because these are only two service which uses VPC gateway endpoint. So there is no confusion as such and this is going to be the correct answer.",
    "isMulti": false
  },
  {
    "id": 100,
    "qNum": 118,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has two application and it want to migrate to AWS. Both the application process a large set of files by accessing the same file at the same time. Both the application need to read the files with low latency. Which architecture should a solution architect recommend for the situation?",
    "options": [
      "Option A: Implementation path for A company has two application ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct answer transfer here will be option D. Configure two Amazon EC2 instances to run both the applications. Configure Amazon elastic file system that is Amazon EFS with general purpose performance mode and bursting throughput to store the data. And this one is correct here because here we are talking about concurrency. Both the application need to read and write the files at the same time. So due to this same time concurrency is occurring here and we have already discussed this point as well that concurrency is not supported by EBS and it will be supported by Amazon EFS and due to that reason option D is going to be correct here.",
    "isMulti": false
  },
  {
    "id": 101,
    "qNum": 11,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "An e-commerce company has noticed performance degradation of its Amazon RDS-based web application. The performance degradation is attributed to an increase in the number of readonly SQL queries triggered by business analyst. A solution architect need to solve the problem with minimal changes to the existing web application. What should a solution architect recommend?",
    "options": [
      "Option A: Implementation path for An e-commerce company has noti...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. over here will be option C create a read replica of the primary database and have the business analyst run their queries. So this one is correct here because there are two requirement minimal changes and increase in the number of read only request and read only is the issue here. So for that we can use read replica. Whenever there is slowness or latency due to read only traffic then we can always opt for read replica [clears throat] and also it will cause minimal changes. So this is the correct option here.",
    "isMulti": false
  },
  {
    "id": 102,
    "qNum": 120,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is running a highly sensitive application on Amazon EC2 backed by an Amazon RDS database. Compliance regulations mandate that all the personally identifiable information that is PII be encrypted at rest. Which solution should a solution architect recommend to meet this requirement with the least amount of changes to the infrastructure?",
    "options": [
      "Option A: Implementation path for A company is running a highly ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. And correct answer here is option D. Configure Amazon Elastic Block Store encryption with Amazon RDS encryption with AWS key management service key to encrypt instance and database volumes. And this one is correct here because SSL encryption occurs only when the data is in transit. But here requirement is data should be encrypted at the rest itself. So option D is correct here. A company running an on premises application is migrating the application to AWS to increase its elasticity and availability. The current architecture uses a Microsoft SQL server database with heavy read activity. The company want to explore alternate database options and migrate database engines if needed. Every 4 hours, the development team does a full copy of the production database to populate a test database. During this period, user experience latency. What should the solution architect recommend as a replacement database? And here are the options. And correct answer here will be option D. Use Amazon RDS for SQL server with multi-AZ deployment and read replicas and restore snapshot from RDS for the test database. And this is correct here because changing database engine is not easier option. So it will be better if we find the option with the existing DB engine. So due to that reason option D is going to be correct here. And now question number one2. A company has enabled AWS cloud trail logs to deliver log files to an Amazon S3 bucket for each of its developer account. The company has created a central AWS account for streamlining management and audit reviews. An internal auditor need to access the cloud trail logs yet access need to be restricted for all developer account users. The solution must be secure and optimized. How should a solution architect meet these requirement? And here are the options and the correct answer here will be option C. Configure cloud trail log from each developer account to deliver the log files to an S3 bucket in the central account. Create an IM role in the central account for the auditor. Attach an IM policy providing read only permissions to the bucket. And option C is correct because cloud trail can send logs directly to a S3 bucket in another account. Even you can have confirmation on this from this AWS official document. You can have cloud rail deliver log files from multiple AWS account into a single Amazon S3 bucket. For example, you have four AWS account with account ids. This one, this one, this one. and you want to configure the cloud trail log to deliver the log files from all four of these account to a bucket belonging to this account. So you can do this and uh I will also share the link of this document in the description. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 103,
    "qNum": 123,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has several business systems that require access to data stored in a fileshare. The business system will access the file share using the server SMB protocol. The file share solution should be accessible from both the company's legacy on premises environment and with AWS. Which service will meet these business requirement?",
    "options": [
      "Option A: Implementation path for A company has several business...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. And here are the options and correct answer here will be option C and E. Amazon FSX for Windows AWC storage file gateway. And both these options C and E are correct because by using Amazon FSX file gateway for on premises and FSX for Windows on cloud the application can provide access to SMB both on the on premises and on the cloud. So option C and E are correct here.",
    "isMulti": false
  },
  {
    "id": 104,
    "qNum": 124,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is using Amazon EC2 to run its big data analytics workload. These variable workload run each night and it is critical they finish by the start of the business the following day. A solution architect has been tasked with designing the most cost effective solution. Which solution will accomplish this?",
    "options": [
      "Option A: Implementation path for A company is using Amazon EC2 ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. And correct answer here is option A, esport fleet. And let's discuss what is esport fleet. Esport fleets allows you to automatically request and manage multiple esport instances that provide the lowest price per unit of the capacity for your cluster or application like a batch processing job or Hadoop workflow or a HPC grid computing. You can include the instance type that your application can use. You can also define a target capacity based on your application need and update the target capacity after the fleet is launched. Esport fleets enable you to launch and maintain the target capacity and no automatically request resources to replace any that are disrupted or manually terminated. So in short from all this description I can say you that sport fleet enable you to launch and maintain the target capacity. So basically target capacity will be maintained here and due to that reason you will be able to finish the work before the start of the following day by using the sport fleet. And due to this reason option A is correct here.",
    "isMulti": false
  },
  {
    "id": 105,
    "qNum": 125,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has a Microsoft window-based application that must be migrated to AWS. This application requires the use of shared Windows file system attached to multiple Amazon EC2 Windows instances. What should a solution architect do to accomplish this?",
    "options": [
      "Option A: Implementation path for A company has a Microsoft wind...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct transfer here will be option C. Configure Amazon FSX for window file server. Mount the Amazon FSX volume to each Windows instance. And this one is correct here because Amazon EFS is not supported on Windows instance and it is clearly mentioned window-based application. So due to this reason we will use Amazon FSX for Windows file server.",
    "isMulti": false
  },
  {
    "id": 106,
    "qNum": 126,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has created an isolated backup of its environment in another DN. The application is running in W standby mode and is fronted by an application load balancer. The current failover process is manual and requires updating a DNS alias record to point to the secondary LB in another region. What should a solution architect do to automate the failover process?",
    "options": [
      "Option A: Implementation path for A company has created an isola...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct answer here will be option B. Enable an Amazon route 53 health check. And this is because route 53 health check with active passive failover. And you can use active passive failover here. By using that you will be able to automate the failover process.",
    "isMulti": false
  },
  {
    "id": 107,
    "qNum": 127,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has a mobile chat application with a data store based in Amazon Dynamob. Users would like new messages to be read with as little latency as possible. A solution architect need to design an optimal solution that requires minimal application changes. Which method should the solution architect select?",
    "options": [
      "Option A: Implementation path for A company has a mobile chat ap...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. And correct answer here will be option A. Configure Amazon Dynamob DB accelerator DEX for the new messages table. Update the code to use the DEX endpoint. So basically if your traffic is read heavy consider using a caching service such as Amazon Dynamob accelerator that is Dex because Dex is fully managed highly available in memory cache for Dynamob DB that delivers up to 10x performance improvement from milliseconds to microcond and even at millions of request per second. So by using this Dex performance can be improved to 10x. So due to that reason option A is correct here.",
    "isMulti": false
  },
  {
    "id": 108,
    "qNum": 128,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is creating an architecture for a mobile app that requires minimal latency for its user. The company's architecture consists of Amazon EC2 instance behind an application load balancer running in an autoscaling group. The EC2 instances connect to Amazon RDS. Application beta testing showed there was a slowdown when reading the data. However, the metrics indicate that the EC2 instances do not cross any CPU utilization threshold. How can the issue be addressed?",
    "options": [
      "Option A: Implementation path for A company is creating an archi...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. And the answer here may be very obvious one for you and correct answer here is option C because here we are adding read replica for the RDS instances and directing the traffic to the read replica because what is happening in the question reading the data was becoming slow. So due to that reason adding the red replica will help us. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 109,
    "qNum": 129,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company host it website on Amazon S3. The website serves pabyte of outbound traffic monthly which account for most of the company's AWS cost. What should a solution architect do to reduce the cost?",
    "options": [
      "Option A: Implementation path for A company host it website on A...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct answer here will be option A. Configure Amazon CloudFront with the existing website as the origin. So this one is correct here because CloudFront help with the distribution of S3 data and less distribution cost for reads. However, CloudFront does not help for upload or we can say write to S3. If writing to S3 is the case then most likely it would be about transfer accelerator. So here only A makes the sense. So this is the correct transfer here. So let me explain you. If data is being read from S3 then go for CloudFront and if data is being returned to S3 in that case go for transfer accelerator. I hope this is clear to you.",
    "isMulti": false
  },
  {
    "id": 110,
    "qNum": 130,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has implemented one of its microservices on AWS Lambda that access an Amazon Dynamo DB table named books. A solution architect is designing an IM policy to be attached to the Lambda functions IM role giving it access to put, update, and delete in the book table. The IM policy must prevent functions from performing any other actions on the book table or any other. Which IM policy would fulfill these needs and provide the least privileged access?",
    "options": [
      "Option A: Implementation path for A company has implemented one ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. And here option B is wrong because it is using asterisk in the ARN name. Due to this it is wrong here. And now option C is wrong because it is allowing all the actions which is not required in the question. And now option D is wrong because it denies everything. It is denying everything. Uh so it is also wrong. And correct answer here is option A obviously because it is the only one which is left with us because this is granting insert by this put item and allowing to edit by this update and also allowing to remove by this delete on the book table and at the same time it is prohibiting any other action on the books table and any other table. So it is allowing action only on the book table and these are the actions. So it is prohibiting all the other actions. So option A is correct here. A company runs a website on Amazon EC2 instance behind an ELB application load balancer. Amazon route 53 is used for the DNS. The company want to set up a backup website with a message including a phone number and a email address that user can reach if the primary website is down. How should the company deploy this solution? And here are the options. And correct answer here will be option A. Use Amazon S3 website hosting for backup website and route 53 failover routing policy. So basically keyword here is in the event that the original website becomes unavailable. Basically when primary website goes down so we have to use route 53 failover policy. And here B is incorrect because uh we are not talking about latency and C is also incorrect because ELB is not cross real and cannot use ELB health check and no mention of route 53 policy is there. So it is also wrong and also option D deploy the application in another AWS and use server side redirection on the primary website. So it also doesn't make any sense. So option A is correct here only.",
    "isMulti": false
  },
  {
    "id": 111,
    "qNum": 132,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A media company is evaluating the possibility of moving its system to the AWS cloud. The company needs at least 10 TB of storage with maximum possible IO performance for video processing, 300 TB of very durable storage for restoring media content and 900 TB of storage to meet requirement for archival media that is not in use anymore. Which set of services should a solution architect recommend to meet these requirement?",
    "options": [
      "Option A: Implementation path for A media company is evaluating ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. and correct answer here will be option D. Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage and Amazon S3 Glacier for archival data storage. And here you may be confused with instance store. Why we are using it? Because Amazon S3 for durable storage is a very obvious and at the same time Amazon S3 glacia for archival storage is also very obvious but only this one is little bit tricky. So for this however question does not state if it need persistent or not only talk about highest performance. So considering only that instance store is suitable for this because instance store is over five times faster than EBS SSD for uncashed reads and it is equivalent to EBS SSD in case of cached reads and instance store at the same time is 10x faster than EBS SSD for rightes. So due to these reasons option D is correct here.",
    "isMulti": false
  },
  {
    "id": 112,
    "qNum": 133,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company uses Amazon S3 as it object storage solution. The company has thousands of S3 bucket it uses to store the data. Some of the S3 bucket have the data that is access less frequently than others. A solution architect found that life cycle policies are not consistently implemented or are implemented partially resulting in data being stored in high cost storage. Which solution will lower the cost without compromising the availability of the objects?",
    "options": [
      "Option A: Implementation path for A company uses Amazon S3 as it...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "So here are the options. and correct answer transfer here will be option C. Use S3 intelligent tiering and this one is correct because S3 intelligent taring is ideal storage class for the data with unknown changing or unpredictable axis pattern independent of the object size or retention period. You can use S3 intelligent taring as a default storage class for virtually any load especially data links, data analytics, new application and user generated content. And here also we are not sure about the data patterns or how it will be accessed. Here some of the files are accessed frequently and some of the files are not. So due to unknown nature we are using S3 intelligent tearing here.",
    "isMulti": false
  },
  {
    "id": 113,
    "qNum": 134,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "An application is running on Amazon EC2 instances. Sensitive information required for the application is stored in Amazon S3 bucket. The bucket need to be protected from internet access will only allowing services within the VPC access to the bucket. Which combination of action should the solution architect take to accomplish this?",
    "options": [
      "Option A: Implementation path for An application is running on A...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. And here are the options. And correct answer here will be option A and option C. Create VBC endpoint for Amazon S3 and apply a bucket policy to restrict access to the S3 endpoint. So basically the bucket need to be protected from the internet access. From here you can see the requirement and it will be done by option C and second requirement is only allowing the services within the VPC access to the bucket and it will be fulfilled by option A. So option A and C are the correct answer here.",
    "isMulti": false
  },
  {
    "id": 114,
    "qNum": 135,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A web applications run on Amazon EC2 instances behind an application load balancer. The application allow user to create custom report of historical weather data. Generating a report can take up to 5 minutes. These longunning request use many of the available incoming connections making the system unresponsive to the other users. How can a solution architect make the system more responsive?",
    "options": [
      "Option A: Implementation path for A web applications run on Amaz...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. and correct answer here will be option A. Use Amazon SPS with AWS Lambda to generate report. And this one is correct here because lambda timeout is 900 seconds. And here requirement is of just 5 minute. So it can meet the requirement of the question. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 115,
    "qNum": 136,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect must create a highly available bash and host architecture. The solution need to be resident within a single AWS region and should require minimal effort to maintain. What should the solution architect do to meet these requirement?",
    "options": [
      "Option A: Implementation path for A solution architect must crea...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. And correct answer here will be option D. Create a network load balancer backed by an autoscaling group with instances in multiple availability zone as the target. Here C is wrong because every time you add or delete a port or IP, you will have to manually change all the bashions. So option D will satisfy the requirement of minimal effort to maintain. So it is correct one and also load balancing and autoscaling often goes together. So due to that reason also option D is correct here.",
    "isMulti": false
  },
  {
    "id": 116,
    "qNum": 137,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A three- tier web application processes order from customers. The web tier consists of Amazon EC2 instances behind an application load balancer. A middle tier of three EC2 instances decoupled from the web tier using Amazon SQS and an Amazon Dynamob backend. At peak times, customer who submit orders using the site have to wait much longer than the normal to receive confirmation due to lengthy processing times. A solution architect need to reduce these processing time. Which action will be the most cost effective in accomplishing this?",
    "options": [
      "Option A: Implementation path for A three- tier web application ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options and correct answer transfer here will be option D. Use Amazon EC2 autoscaling to scale out middle tier instances based on the SQSQ depth. And here option A is wrong because Amazon Kynesis data firehouse is not used for app decoupling like SQS. And now option B is also wrong because caching content for DB doesn't help much for such a right related transaction in online order submission. And now option C is also wrong because web content caching for the app at the age doesn't help much for such a right related transaction in order submission. So only option D is correct here.",
    "isMulti": false
  },
  {
    "id": 117,
    "qNum": 138,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company relies on an application that needs at least four Amazon EC2 instances during regular traffic and must scale up to 12 EC2 instances during the peak loads. The application is critical to the business and must be highly available. Which solution will meet these requirement?",
    "options": [
      "Option A: Implementation path for A company relies on an applica...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct answer here is option C. Deploy the EC2 instances in an autoscaling group. Set the minimum to eight and maximum to 12 with four in availability zone A and four in availability zone B. And this one is correct because it requires high availability. If one availability zone is down then at least four instances will be active in another availability zone which is the key in the question because it requires at least four Amazon EC2 instances and you may be confused with option A but it is wrong because there will be two instances in availability zone A and two in availability zone B and if B is down let's suppose B is down in that case there will be just two instances which will be running in availability zone A and due to this the requirement ment of at least four Amazon EC2 instances will not be satisfied.",
    "isMulti": false
  },
  {
    "id": 118,
    "qNum": 139,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect must design a solution for a persistent database that is being migrated from on premises to AWS. The database requires 64,000 IOPS according to the database administrator. If possible, the database administrator want to use a single Amazon elastic block store volume to host the database instance. Which solution effectively meet the database administrator's criteria?",
    "options": [
      "Option A: Implementation path for A solution architect must desi...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options and correct answer here will be option B. Create a nitro based Amazon EC2 instance with Amazon elastic block store provisioned IOPS SSD IO1 volume. configure the volume to have 64,000 IOPS and this one is correct because EBS provisioned IOPS with volume type IO1 can go up to 64,000 IOPS and nitrobased EC2 will enhance the performance. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 119,
    "qNum": 140,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing an architecture for new application that requires low latency and high network throughput between Amazon EC2 instances. Which component should be included in the architectural design?",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and correct answer here will be option B. A placement group using a cluster placement strategy because low network latency is the requirement here. And let me inform you that server in cluster placement group are tightly coupled for low latency and high network throughput only. And let us discuss about a spread placement group also. A spread placement group places instances on distinct hardware so that it can increase the high availability. And here we are focusing on low network latency. In case of high availability, a spread placement group will be used. A company has global users accessing an application deployed in different AWS regions exposing public static IP addresses. The user are experiencing poor performance when accessing the application over the internet. What should a solution architect recommend to reduce the latency? And here are the options and correct answer here will be option A. Setup AWS global accelerator and add endpoints. And this is correct here because it is mentioned in the question public static IP address. AWS global accelerator provides you with a static IP addresses that survey fixed entry point to the application hosted in one or more regions. These IP addresses are anycast from AWS age locations. So they are announced from multiple AWS age location at the same time. This enables traffic to ingress onto AWS global network as close to your users as possible. So option A is going to be correct here.",
    "isMulti": false
  },
  {
    "id": 120,
    "qNum": 142,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company want to migrate a workload to AWS. The chief information security officer requires that all the data be encrypted at rest when stored in the cloud. The company want complete control of the encryption key life cycle management. The company must be able to immediately remove the key material and audit the key uses independently of AWS cloud trail. The chosen services should integrate with other storage services that will be used on AWS. Which service satisfies these security requirement?",
    "options": [
      "Option A: Implementation path for A company want to migrate a wo...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and correct answer here will be option B. AWS key management service that is AWSKS with AWS cloud HSM. And this is because you can store KMS customer master key in customer key store instead of standard customer KMS key store. Customer key stores are created using an AWS cloud HSM cluster that you own and manage. This provides you direct control of the hardware security module that generate the key material for your CMK and perform cryptographic operation with them. And to get started with custom key stores, you first need to create a AWS cloud HSM cluster. So option B is correct here.",
    "isMulti": false
  },
  {
    "id": 121,
    "qNum": 143,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company recently deployed a two-tier application in two availability zone in the US East one region. The database are deployed in private subnet. Will the web servers are deployed in the public subnet?",
    "options": [
      "Option A: Implementation path for A company recently deployed a ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "An internet gateway is attached to the VPC. The application and the database run on Amazon EC2 instances. The database server are unable to access the patches on the internet. A solution architect need to design a solution that maintains the database security with the least operational overhead. Which solution will meet this requirement and correct answer here will be option A. deploy a net gateway inside the public subnet for each availability zone and associate it with an elastic IP address. Update the routing table of the private subnet to use it as a default route. And this one is correct here because you can use network address translation gateway that is net gateway to enable instances in private subnet to connect to the internet or other AWS services but prevent the internet from initiating connection to those instances. However, all the options with net gateway and net instances are correct. But keyword here in the question is will incurring the least operational overhead and due to this option C and option D are out because net instance require EC2 which will incur cost and therefore option A is best because it should be in public subnet not in private subnet. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 122,
    "qNum": 144,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has an application with rest based interface that allows data to be received in near real time from a third party vendor. Once received, the application processes and stores the data for further analysis. The application is running on Amazon EC2 instances. The third party vendor has received many 5 node 3 service unavailable errors when sending data to the application. When the data volume spikes, the compute capacity reaches its maximum limit and the application is unable to process all request. Which design solution architect recommend to provide a more scalable solution?",
    "options": [
      "Option A: Implementation path for A company has an application w...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options and correct transfer here is option A. Use Amazon Kinesis data stream to ingest the data. Process the data using AWS Lambda function. And this one is correct here because Kinesis data stream work well with AWS Lambda for processing and real-time data can be stored for 24 hours to 7-day period giving ample time for lambda to process thereby reducing 53 error that the vendor is receiving and obviously lambda function will satisfy the need for processing. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 123,
    "qNum": 145,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect need to design a low latency solution for a static single page application accessed by users utilizing a custom domain name. The solution must be serverless, encrypted in transit and cost effective. Which combination of AWS services and features should the solution architect use?",
    "options": [
      "Option A: Implementation path for A solution architect need to d...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose do and here are the options and correct answer transfer here will be option A and option D Amazon S3 and Amazon CloudFront and here as serverless is the requirement and also content is static so Amazon S3 can be used for the same and also both CloudFront and Fargate are serverless. But this is a single page application and hence target gets ruled out and due to this only option A and D are cracked here.",
    "isMulti": false
  },
  {
    "id": 124,
    "qNum": 146,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is migrating to the AWS cloud. A file server is the first workload to migrate. Users must be able to access the file share using the server message block that is SMB protocol which AWS managed service will meet this requirement. And here are the options. And correct transfer here is option",
    "options": [
      "Option A: Implementation path for A company is migrating to the ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "C, Amazon FSX. However, Amazon FSX provide you with two file system to choose. Amazon FSX for Windows file server and Amazon FSX for lusher for high performance workload. But Amazon FSX for Windows provides you fully managed storage that is accessible over the industry standard server message block that is SMB protocol which is the requirement of the question. So this one is going to be correct here.",
    "isMulti": false
  },
  {
    "id": 125,
    "qNum": 147,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing customerf facing application. The application is expected to have a variable amount of reads and write depending on the time of year and clearly defined access pattern throughout the year. Management required that the database auditing and scaling be managed in the AWS cloud. The recovery point objective that is RPO must be less than 5 hours. Which solution can accomplish this?",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Choose two. And here are the options. And correct answer here will be option A and option E. Use Amazon Dynamob DB with autoscaling. Use on demand backup and AWS cloud trail. And option E use Amazon RDS with autoscaling. Enable database auditing parameter. configure the backup retention to at least one day. And here option A is correct because it is scalable with backup and AWS managed auditing. And now if we talk about option B, it is wrong because AWS Dynamob DB team can be used for auditing but it is not AWS managed auditing. So due to this reason option B is eliminated. And now if we talk about option C, Amazon Redshift is not a database, it is a data lake. So it is also eliminated. And now if we talk about option D, this one is also wrong as it will not be able to scale out. So only option A and option E are correct here.",
    "isMulti": false
  },
  {
    "id": 126,
    "qNum": 148,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has migrated an on premises Oracle database to an Amazon RDS for Oracle multi-AZ DB instance in the US East1 region. A solution architect is designing a disaster recovery strategy to have the database provisioned in the US west tour in case the database becomes unavailable in the US East1 region. The design must ensure that the database is provisioned in the US West Tion in a maximum of 2 hours with a data loss window of no more than 3 hours. How can these requirements be met?",
    "options": [
      "Option A: Implementation path for A company has migrated an on p...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. And correct answer here will be option C. Take automated snapshot of the database instance and copy them to US West 2 every 3 hours. Restore the latest snapshot to provision another database instance in US West 2 in case the disaster recovery environment need to be activated. And option C is correct here because if you have less intrent RTO and RPO requirement for your RDSQL servers using cross real estro and restore is one of the most cost effective and cross disaster recovery strategy. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 127,
    "qNum": 149,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A monolithic application was recently migrated to AWS and is now running on a single Amazon EC2 instance. Due to application limitation, it is not possible to use automatic scaling to scale out the application. The chief technology officer wants an automated solution to restore the EC2 instance in the unlikely event the underlying hardware fails. What would allow for automatic recovery of EC2 instance as quickly as possible?",
    "options": [
      "Option A: Implementation path for A monolithic application was r...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. And correct answer here will be option A. Configure an Amazon cloud host alarm that trigger the recovery of EC2 instance if it becomes impaired. And this one is correct here because using Cloudatch alarm actions you can create alarms that automatically stop, terminate, reboot or recover your EC2 instance. You can use the stop or terminate actions to help yourself to save the money when you no longer need an instance to be running. You can use the reboot and recover actions to automatically reboot those instances or recover them onto new hardware if a system impairment occurs. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 128,
    "qNum": 150,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is working on optimizing a legacy document management application running on Microsoft Windows server in an on premises data center. The application stores a large number of files on a network file share. The chief information officer want to reduce the onremises data center footprint and minimize a storage cost by moving on premises storage to AWS. What should the solution architect do to meet this requirement?",
    "options": [
      "Option A: Implementation path for A solution architect is workin...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. And correct answer transfer here will be option A. Set up an AWS storage gateway file gateway. And this one is correct here because file gateway allow your existing file-based application or devices to use secure and durable cloud storage without needing to be modified. With S3 file gateway, your configured S3 bucket will be available as network file system that is NFS mount point or server message block that is SMB file shares. So option A is correct here. A solution architect is designing a hybrid application using the AWS cloud. The network between the on premises data center and AWS will use an AWS direct connect connection. The application connectivity between AWS and the on premises data center must be highly resilient. Which DX configuration should be implemented to meet these requirement? And here are the options. And correct answer here will be option B. Configure DX connection at multiple DX locations. And please keep in mind that highly resilient and fall tolerant network connection are key to a well architected system. AWS recommends connecting from multiple data centers for physical local redundancy. So this one is correct here.",
    "isMulti": false
  },
  {
    "id": 129,
    "qNum": 152,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company runs an application on Amazon EC2 instances. The application is deployed in private subnets in three availability zone of the US one region. The instances must be able to connect to the internet to download files. The company wants a design that is highly available across the REN. Which solution should be implemented to ensure that there are no disruptions to internet connectivity?",
    "options": [
      "Option A: Implementation path for A company runs an application ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and correct answer over here will be option B. deploy a net gateway in public subnet of each availability zone. And this one is correct here because the question states that the application is deployed in private subnet which requires a net gateway to provide internet connectivity and net gateway are installed in the public subnet for this purpose. So this one is correct here.",
    "isMulti": false
  },
  {
    "id": 130,
    "qNum": 153,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "Application developers have noticed that a production application is very slow when business reporting users run large production report against the Amazon RDS instance backing the application. The CPU and memory utilization metrics for the RDS instance do not exceed 60%. Will the reporting queries are running?",
    "options": [
      "Option A: Implementation path for Application developers have no...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "The business reporting user must be able to generate report without affecting the application performance. Which action will meet this requirement? And here are the options. and correct transfer here will be option D. Create a read replica and connect the business report to it. And this one is correct here because for business reporting or data warehousing scenarios, you may want business reporting queries to run against a read replica rather than your primary or production DB instance. So basically you will ultimately reduce the load from your primary or production DB instance by using this read replica because it can satisfy the requirement of generating report. So due to all these option D is correct here.",
    "isMulti": false
  },
  {
    "id": 131,
    "qNum": 154,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is running a two-tier e-commerce website using AWS services. The current architect uses a public facing elastic load balancer that sends traffic to Amazon EC2 instances in private subnet. The static content is hosted on EC2 instances and the dynamic content is retrieved from a MySQL database. The application is running in the United States. The company recently started selling to users in Europe and Australia. A solution architect need to design the solution so that their international users have an improved browsing experience. Which solution is the most cost effective solution?",
    "options": [
      "Option A: Implementation path for A company is running a two-tie...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct transfer here will be option B. Use Amazon CloudFront and S3 to host static images. And this one is correct here because option C increase the number of public load balancer and EC2 instances. and option D deploy the two-tier website in AWS regions in Europe and Australia are not cost effective and the requirement of the question is most cost effective so due to this reason these are wrong and if we go with A it is also wrong because it will not be able to provide improved browsing experience that is the requirement of the question so it is also wrong and option B is the only correct here",
    "isMulti": false
  },
  {
    "id": 132,
    "qNum": 155,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "a company's website provide users with downloadable historical performance report. The website needs a solution that will scale to meet the company's website demand globally. The solution should be cost effective, limit the provisioning of infrastructure resources and provide the first possible response time. Which solution should a solution architect recommend to meet this requirement?",
    "options": [
      "Option A: Implementation path for a company's website provide us...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. And correct answer transfer here will be option A, Amazon CloudFront and Amazon S3 because Amazon S3 is the best fit for website and can grow when needed without adding any infra because EC2 are excluded here that will not be required and CloudFront adds the better content distribution. So due to this reason option A is correct here because it is providing us both the services CloudFront and Amazon S3.",
    "isMulti": false
  },
  {
    "id": 133,
    "qNum": 156,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company want to deploy a shared file system for its .NET application server and Microsoft SQL Server database running on Amazon EC2 instances with Windows Server 2016. The solution must be able to integrate into the corporate active directory domain, be highly available, be managed by AWS and provide high level of throughput and IOPS. Which solution meet these requirement?",
    "options": [
      "Option A: Implementation path for A company want to deploy a sha...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options and correct option here will be option A use Amazon FSX for window file server and this is because FSX for Windows can be integrated on on premises active directory. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 134,
    "qNum": 157,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company that develops web application has launched hundred of application load balancer in multiple regions. The company want to create an allow list for the IPs of all the load balancer on its firewall device. A solution architect is looking for a one-time highly available solution to address this request which will also help to reduce the number of IPs that need to be allowed by the firewall. What should the solution architect recommend to meet this requirement?",
    "options": [
      "Option A: Implementation path for A company that develops web ap...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. And correct answer here will be option C. Launch AWS global accelerator and create endpoint for all the reions. Register all the ALBs in different region to corresponding endpoint. And this is correct here because AWS global accelerator is the network layer service in which you create accelerators to improve availability and performance for internet application used by a global audience. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 135,
    "qNum": 158,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company runs an application using Amazon ECS. The application creates resized version of an original image and then makes an Amazon S3 API call to store the resized image in the Amazon S3. How can a solution architect ensure that the application has permission to access Amazon S3?",
    "options": [
      "Option A: Implementation path for A company runs an application ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and correct answer here will be option B. Create an IM role with S3 permission and then specify the role as task ro ARN in the task definition. And this one is correct here because this role grant the container in the task permission to call AWS APIs on your behalf. So option B is correct here.",
    "isMulti": false
  },
  {
    "id": 136,
    "qNum": 159,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is planning to migrate it virtual server-based workload to AWS. The company has internetf facing load balancer backed by application servers. The application servers rely on the patches from an internet hosted repositories. Which services should a solution architect recommend be hosted on the public subnet?",
    "options": [
      "Option A: Implementation path for A company is planning to migra...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. And here are the options and correct answer here will be option A and option C. Net gateway and application load balancer. Net gateway and application load balancer should be on the public subnet. So option A and option C are correct here. A company has established a new AWS account. The account is newly provisioned and no changes have been made to the default setting. The company is concerned about the security of the AWS account root user. What should be done to secure the root user? And here are the option and correct answer here will be option B. Create IM user for daily administrative task. enable multiffactor authentication on the root user and this must be very obvious for you and this is very basic question and this is not just the question this should be your approach if you are using AWS because you should use IM user for your daily administrative task and you should enable multiffactor authentication for the root user so that it may have better security and unauthorized person cannot access the same and if multiffactor authentication is enabled on the AWS account then even if Someone knows your password and if it is leaked due to some reason even then that person will not be allowed to access the AWS account because it will require multiffactor authentication and which may be approved only by your physical device which you are using. It may be your mobile phone. So option B is correct here. A company is using a tape backup solution to store its key application data offsite. The daily data volume is around 50 TB. The company need to retain backup for seven years for regulatory purposes. The backup are rarely access and a week's notice is typically given if a backup need to be restored. The company is now considering a cloud-based option to reduce the storage cost and operational burden of managing tapes. The company also want to make sure that the transition from tape backup to the cloud minimizes disruptions. Which storage solution is the most cost effective? And here are the options. And correct answer here will be option A. Use Amazon storage gateway to backup to Amazon Glacier deep archive. And this one is correct because the AWS storage gateway service now integrates tape gateway with Amazon S3 Glacier deep archive storage class. And due to that it allows you to store virtual tapes in the lowest cost Amazon storage. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 137,
    "qNum": 162,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company requires a durable backup storage solution for its on premises database server will ensuring on premises application maintain accesses to these backup for quick recovery. The company will use AWS storage service as the destination for these backups. A solution architect is designing a solution with minimal operational head. Which solution should the solution architect implement?",
    "options": [
      "Option A: Implementation path for A company requires a durable b...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct answer here will be option A. Deploy an AWS storage file gateway on premises and associate it with an Amazon S3 bucket. This one is correct here because your volumes are restored in Amazon S3 bucket maintained by the AWS storage gateway service. Your volumes are accessible for IO operations through AWS storage gateway. You cannot directly access them using Amazon S3 API actions. You can take point in time snapshot of gateway volumes that are made available in form of Amazon EBS snapshot which can be turned into either storage gateway volumes or EBS volumes. use the file gateway to work with the data natively in S3. So answer is A.",
    "isMulti": false
  },
  {
    "id": 138,
    "qNum": 163,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company decides to migrate its three- tier web application from on premises to AWS cloud. The new database must be capable of dynamically scaling it storage capacity and performing table joins. Which AWS service meet these requirement?",
    "options": [
      "Option A: Implementation path for A company decides to migrate i...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. And correct answer here will be option A. Amazon Aurora. And this one is correct here because Amazon Aurora allows you autoscaling and table join. But this one allows you table join but no autoscaling. And this one is not relational. And again this one is also not relational. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 139,
    "qNum": 164,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company mandates that an Amazon S3 gateway endpoint must allow traffic to trusted buckets only. Which method should a solution architect implement to meet this requirement?",
    "options": [
      "Option A: Implementation path for A company mandates that an Ama...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. And please take your time to guess the answer for this and correct answer here will be option D. Create an S3 policy for each of the company's S3 gateway endpoint that provide access to Amazon S3 resource name that is ARN of the trusted bucket. And this one is correct because B is to restrict the endpoint while D is to restrict the bucket. The question is to restrict the bucket not the endpoint. And due to that reason option D is correct here.",
    "isMulti": false
  },
  {
    "id": 140,
    "qNum": 165,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is using a VPC pairing strategy to connect it VPCs in a single region to allow for cross communication. A recent increase in account creation and VPCs has made it difficult to maintain the VPC pairing strategy and the company expect to grow to hundred of VPCs. There are also new requests to create sideto-side VPNs with some of the VPCs. A solution architect has been tasked with creating a centrally managed networking setup for multiple accounts, VPCs and VPNs. Which networking solution will meet these requirement?",
    "options": [
      "Option A: Implementation path for A company is using a VPC pairi...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options and correct answer here will be option D. configure a transit gateway with AWS transit gateway and connect all VPCs and VPN there. So this is correct and this is correct because a transit gateway enables you to attach VPCs and VPN connection in the same region and route traffic between them. So option D is correct.",
    "isMulti": false
  },
  {
    "id": 141,
    "qNum": 166,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is helping a developer design a new e-commerce shopping cart application using AWS services. The developer is unsure of the current database schema and expects to make changes as the e-commerce site grows. The solution need to be highly resilient and capable of automatically scaling read and write capacity. Which database solution will meet these requirement?",
    "options": [
      "Option A: Implementation path for A solution architect is helpin...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct answer here will be option B Amazon Dynamob DB with on demand enabled because it says unclear about database schema and due to that reason this option suits perfectly for this question. So this is the answer.",
    "isMulti": false
  },
  {
    "id": 142,
    "qNum": 167,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect must migrate a Windows internet information services that is IAS web application to AWS. If I talk about Linux, it will be called Apache servers, but in Windows, it is called IIS. The application currently relies on a fileshare hosted in users on premises network attached storag",
    "options": [
      "Option A: Implementation path for A solution architect must migr...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "e that is NAS. The solution architect has proposed migrating the IIS web server to Amazon EC2 instances in multiple availability zone that are connected to a storage solution and configuring an elastic load balancer attached to the instance. Which replacement on the on premises fileshare is most resilient and durable? And here are the options. And correct answer here will be option C. Migrate the file share to Amazon FSX for Windows file server. And this one is correct because if we talk about option A, migrate the file share to Amazon RDS, that is not valid. So it is wrong. And now option B migrate to the file share to AWS storage gateway. This is mainly to allow onpream application to access file in AWS. So it is not suitable here. And now if we talk about option C which is obviously correct here. It is appropriate as it supports window SMB protocol. Uh it allows SMB protocol. And if we talk about option D which is also wrong. It does not support SMB protocol and due to this reason this is also wrong. So option C is the correct answer here.",
    "isMulti": false
  },
  {
    "id": 143,
    "qNum": 168,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company needs to implement a relational database with multi-reion disaster recovery recovery point objective that is RPO of 1 second and recovery time objective that is RTO of 1 minute. Which AWS solution can achieve this?",
    "options": [
      "Option A: Implementation path for A company needs to implement a...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct answer here will be take your time to guess the answer and correct answer here will be option A Amazon Aurora global database and this one is correct because RDS won't be able to give such low recovery time and this recovery time RP of 1 second and RT of 1 minute is very below. So this can be achieved with this option only.",
    "isMulti": false
  },
  {
    "id": 144,
    "qNum": 169,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company runs a web service on Amazon EC2 instances behind an application load balancer. The instances run in an Amazon EC2 autoscaling group across two availability zone. The company needs a minimum of four instances at all the times to meet the required service level agreement while keeping the cost low. If an availability zone fail, how can the company remain compliant with the SLA?",
    "options": [
      "Option A: Implementation path for A company runs a web service o...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. And I will allow you enough time to guess the answer for this because this is really tricky and easy question. So you should take your time and you should guess the answer. And I hope you have guessed the answer. And uh you have guessed that option D is correct. But correct answer here is option C. Change the autoscaling group to use six server across three availability zone. And you must have guessed that change the autoscaling group to use eight server across two availability zone. And that will also work. There is no issue in this. But issue is that if you are using four servers across two availability zone so it will be equal to eight instances and in this case there will be three availability zone and two instances in each it will be equal to six. So very first factor that comes to mind is that if you are using just six and you are using eight here the cost will matter because we have to keep the cost low and it will incur high cost and it will cause low cost because two instances are less there and also at the same time this will provide you better compliant or we can say better availability because even if one availability zone is down. We have four instances running and also as we have option of using three availability zone here. So we will have more availability because even in case two availability zone fail which has rare chances still we will have two instances running but here in this case if two aility zone fail we will not have any instances running. So this is not the correct answer here. Only option C is the correct.",
    "isMulti": false
  },
  {
    "id": 145,
    "qNum": 170,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is reviewing its AWS cloud deployment to ensure its data is not accessed by anyone without appropriate authorization. A solution architect is tasked with identifying all open Amazon S3 bucket and recording any S3 bucket configuration changes. What should the solution architect do to accomplish this?",
    "options": [
      "Option A: Implementation path for A company is reviewing its AWS...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And please take your time to guess the answer for this. and correct answer here will be option A. Enable AWS config service with appropriate rules because AWS config is a service that enable you to assist, audit and evaluate the configuration of your AWS resources. Config continuously monitors and record your AWS resources configuration and allow you to automate the evaluation of recorded configuration against the desired configuration. So option A is absolutely correct here. A company is planning to build a new web application on AWS. The company expects predictable traffic most of the year and very high traffic on occasions. The web application need to be highly available and fall tolerant with a minimal latency. What s solution architect recommend to meet these requirement? And here are the options. You can try to guess the answer and correct answer here will be option B. Use Amazon EC2 instances in an autoscaling group with an application load balancer across multiple availability zones because autoscaling has to be included in the answer due to more traffic expected occasionally. You can have a look on this keyword high traffic on occasions. So due to this autoscaling has to be included and due to this reason option B is correct here.",
    "isMulti": false
  },
  {
    "id": 146,
    "qNum": 172,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is designing a web application using AWS that processes insurance codes. User will request cot from the applications. Codes must be separated by cure type must be responded to within 24 hours and must not be lost. The solution should be simple to set up and maintain. Which solution will meet this requirement?",
    "options": [
      "Option A: Implementation path for A company is designing a web a...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. You can take your time to guess the correct answer. And I hope you will take longer time to read all the options. So let me reveal the correct answer and the correct answer here will be option C. Create a single Amazon simple notification service that is Amazon SNS topic and subscribe to the Amazon SQSQ to SNS topic. Configure SNS message filtering to publish messages to proper SQSQ based on the queue type. Configure each backend server to work its own SQSQ. So this one is correct here because kinesis is for streaming data. So A and D are out. So both these option will not be correct here because of kinesis is for streaming data. Since the correct answer as you subscribe and not register to SNS. So here register is mentioned but register will not work in case of Amazon SNS because you need to subscribe and due to this reason this is the correct option.",
    "isMulti": false
  },
  {
    "id": 147,
    "qNum": 173,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect has configured the following IM policy. Which action will be allowed by the policy?",
    "options": [
      "Option A: Implementation path for A solution architect has confi...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. And you can take your time to guess the correct answer. And I hope you will be able to guess the same. So let me reveal the correct answer and the correct answer here will be option C. An AWS function can be deleted from 100.220.0.0/20 network. And this is why. So if you go to the policy effect is allow action on lambda. So any action can be done on lambda and after that resource is all. So all resources are allowed effect is deny on action delete function and from this particular subnet. So from this particular subnet there is explicit deny. So it can't be possible and also the delete function is not allowed from everywhere. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 148,
    "qNum": 174,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is using Amazon S3 to design the storage architecture of a new digital media application. The media file must be resilient to the loss of an ability zone. Some files are access frequently while other files are rarely exist in an unpredictable pattern. The solution must minimize the cost of storing and retrieving the media files. Which storage option meets this requirement?",
    "options": [
      "Option A: Implementation path for A solution architect is using ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And I hope it will be too easy for you. So I'm just revealing the correct answer. And correct answer here will be option B, S3 intelligent taring. So this one is correct here. And I hope you all know the reason for this already. But let me share the reason as well with you. So S3 intelligent tearing is perfect use case when you don't know the frequency of access or there are irregular pattern of usage. So definitely there are irregular pattern and because some files are exist frequently will others are rarely exist. So there is unpredictable pattern. So due to this reason S3 intelligent taring will be the answer.",
    "isMulti": false
  },
  {
    "id": 149,
    "qNum": 175,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is running a three- tier web application to process credit card payments. The front end user interface consists of a static web pages. The application tier can have long running processes. The database tier uses MySQL. The application is currently running on a single general purpose large Amazon EC2 instance. A solution architect need to decel the service to make the web application highly available. Which solution would provide the highest availability?",
    "options": [
      "Option A: Implementation path for A company is running a three- ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. You can take the time to guess the answer. So let me reveal the correct answer and the correct answer here will be option D. Move static content to Amazon S3. Move the application to Amazon ECS that is elastic container service with autoscaling enabled. Move the database to Amazon RDS to deploy multi-AZ. And this one is correct here because static content ultimately indicates about S3 which is already mentioned here and ECS helps in autoscaling and RDS multi-AG helps in high availability. So all the requirement of the questions will be satisfied because here what was the requirement? Static web pages were there highly available was the requirement. So option D is correct here.",
    "isMulti": false
  },
  {
    "id": 150,
    "qNum": 176,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A media company stores video content in Amazon EBS that is elastic block store volume. A certain video file has become popular and a large number of users across the world are accessing this content. This has resulted in cost increase. Which action will decrease cost without compromising the user accessibility?",
    "options": [
      "Option A: Implementation path for A media company stores video c...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct answer here will be you can take your time to guess answer and let me reveal the correct answer for you and correct answer here will be option B is store the video in an Amazon S3 bucket and create an Amazon CloudFront distribution. So why this is correct answer? Because you all must be aware that ABS is costlier than S3 and you can also use Amazon S3 with cloud front distribution. So S3 will help us in reducing the cost which was high in case of ABS and also when there are users across the world always think about Amazon CloudFront because it helps us in reducing the latency and enhance the experience for all the users around the world. So option B is correct here.",
    "isMulti": false
  },
  {
    "id": 151,
    "qNum": 177,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing the cloud architecture for a new application being deployed to AWS. The application allows users to interactively download and upload files. Files older than 2 years will be accessed less frequently. The solution architect need to ensure that the application can scale to any number of files while maintaining the high availability and durability. Which scalable solution should the solution architect recommend?",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. So here you have to choose two options and here are the options. You can take time to guess the correct answer. So let me reveal the correct answer now. And correct answer here will be option A and option B. Store the files on Amazon S3 with a life cycle policy that moves object older than 2 years to S3 Glacier. and store the files on Amazon S3 with a life cycle policy that moves object older than 2 years to S3 standard infrequent access. So both these options are correct because EFS does not have option of 2 year and maximum duration is 90 days for EFS. Uh so duration will be just 90 days for EFS. So due to this reason option A and option B are correct here. And now number 178. A company has recently updated its internal security standard. The company must now ensure all Amazon S3 bucket and Amazon elastic block store that is Amazon ABS volumes are encrypted with keys created and periodically rotated by internal security specialist. The company's looking for a native softwarebased AWS service to accomplish this goal. What should a solution architect recommend as a solution? And you have the options and correct answer here will be option B. Use AWS key management service that is AWSKMS with customer master keys that is CMKS to store master key material and apply a routine to recreate a new key periodically and replace it in AWS KMS. So option B is correct here because encryption keys are stored in KMS not in secret manager and secret manager store database credentials, API keys and O tokens. So option B is correct here.",
    "isMulti": false
  },
  {
    "id": 152,
    "qNum": 179,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company's website is hosted using on premises server in the United Stateates. The company is launching its product in Europe and it want to optimize site loading times for new European users. The site's back end must remain in the United State. The product is being launched in a few days and an immediate solution is needed. What should the solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company's website is hosted ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And now here are the options. You can take your time to guess the correct answer. and script transfer here will be use Amazon CloudFront with a custom origin pointing to the on- premises server because Amazon CloudFront work with any origin server that hold the origin definitive version of your content both static and dynamic and also there is no additional charge to use a custom origin. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 153,
    "qNum": 180,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A development team need to host a website that will be accessed by other team. The website content consists of HTML, CSS, client sidejs and images. Which method is the most cost effective for hosting the website?",
    "options": [
      "Option A: Implementation path for A development team need to hos...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Take your time to guess the correct answer. And correct answer here will be option B. Create an Amazon S3 bucket and host the website there. Because here we can see from the question itself that content is a static one. And for static content, Amazon S3 is most cost effective or we can say cheapest solution. So option B is the correct answer here. A company is hosting multiple websites for several lines of business under its registered parent domain. User accessing these website will be routed to appropriate backend Amazon EC2 instances based on the subdomain. The website host static web pages, images and serverside script like PHP and JavaScript. Some of the website experience peak access during the first two hour of the business with constant usage throughout the rest of the day. A solution architect need to design a solution that will automatically adjust the capacity of these traffic pattern while keeping the cost low. Which combination of AWS services or feature will meet this requirement? Choose to and here are the options. And also let me clear you one point that this thing can be achieved by multiple options and multiple services but we have to keep in mind that we have to keep the cost low. So we have to figure out the best possible combination and correct answer here will be option C and D application load balancer and Amazon EC2 autoscaling. So key points here in this question are several lines of business and then JS and static content and then P cards for some duration. So basically several lines of business correspond to URLs. This correspond to basically URLs and peak hours for some time correspond to auto scale for some URL. So it correspond to autoscale and static and JS correspond to need to host these environment and ALB can do URL based forwarding to EC2 instances and EC2 autoscale can operate based on the incoming load. So we have to automatically adjust the capacity. So automatic scaling will also help. So option C and D are absolutely correct here.",
    "isMulti": false
  },
  {
    "id": 154,
    "qNum": 182,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company uses an Amazon S3 bucket to store static images for its website. The company configured permissions to allow access to Amazon S3 by privileged user only. What should a solution architect do to protect against data loss?",
    "options": [
      "Option A: Implementation path for A company uses an Amazon S3 bu...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. And here are the options. And to be very frank, it is very easy question. I know. And you all must have figured out the answer as of now. But such easy question are also asked in the exam and question may be repeated in my series as well just to make you prepare better for the exam by having such questions on the tips and correct answer here will be option A and option E. Enable versioning on the S3 bucket. So basically it will save every version of the object that you have put in the S3 bucket. Like there is a file and you have updated it to B and then you have updated it to C. So every version of these file will be there and use MFA delete to require multiple factor authentication to delete an object. Basically it will ask you for multiple authentication when you try to delete an object. So it will also help you to prevent against data loss. So these are two correct option here.",
    "isMulti": false
  },
  {
    "id": 155,
    "qNum": 183,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "An operations team has a standard that states IM policies should not be applied directly to users. Some new team members have not been following this standard. The operation managers need a way to easily identify the users with attached policies. What should a solution architect do to accomplish this?",
    "options": [
      "Option A: Implementation path for An operations team has a stand...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And take your time to guess the correct answer. And correct answer here will be option B. Create an AWS config rule to run daily. So basically a new config rule is deployed in the account after you enable AWS security hub. The AWS config rule react to resource configuration and compliance changes and send these changes to AWS cloudatch. When AWS Cloudatch receives the compliance change, a cloud watch event triggers the AWS Lambda function. So basically option B is correct here because this will allow you to identify all the users with the attached policies.",
    "isMulti": false
  },
  {
    "id": 156,
    "qNum": 184,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company want to use an AWS rean as it disaster recovery location for its on premises infrastructure. The company has 10TB of existing data and the on premises data center has 1 Gbps internet connection. A solution architect must find a solution so the company can have its existing data on AWS in 72 hours without transmitting it using an encrypted channel. Which solution should the solution architect select?",
    "options": [
      "Option A: Implementation path for A company want to use an AWS r...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct answer here will be option C. Establish a VPN connection between Amazon VPC and the company's data center. And this one is correct here because if we talk about direct connect, it takes at least 1 month to set up. But what is the requirement? data should be replicated or copied just in 72 hours. And if we talk about using the snowball, it also take approx one week. So due to these reasons, option C is absolutely criteria and they also have very good internet connection 1 Gbps.",
    "isMulti": false
  },
  {
    "id": 157,
    "qNum": 185,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is building application in containers. The company want to migrate its on premises development and operation services from its on premises data center to AWS. Management states that production system must be cloud agnostic and use the same configuration and administrator tool across production systems. A solution architect need to design a manage solution that will align opensource software. Which solution will meet this requirement?",
    "options": [
      "Option A: Implementation path for A company is building applicat...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct answer here will be option B. Launch the containers on Amazon elastic kubernetes service and EKS worker nodes. Because here keyword is cloud agnostic and services like EKS, ECS is AWS native and cannot be extended to other cloud system like Azure or onpre. So correct answer here will be option B only.",
    "isMulti": false
  },
  {
    "id": 158,
    "qNum": 186,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company host it website on AWS to address the highly variable demand. The company has implemented Amazon EC2 autoscaling. Management is concerned that the company is overprovisioning its infrastructure especially at the front end of the three- tier application. A solution architect need to ensure cost are optimized without impacting the performance. What should the solution architect do to accomplish this?",
    "options": [
      "Option A: Implementation path for A company host it website on A...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Take your time to guess the correct answer and correct answer here will be option D because in very first option we have reserved instances that is RIS and these are meant for fixed cost irrespective of instance termination to we get uh upfront discount on the cost but there will be fixed cost. And now if we talk about option B scheduled a scaling policy but we have highly variable demand so it will also not help. And now EC2 autoscaling with suspend resume feature. This will also not be able to help us in this case. So option D use autoscaling group with target tracking scaling policy will be the correct answer here.",
    "isMulti": false
  },
  {
    "id": 159,
    "qNum": 187,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is performing a security review of recently migrated workload. The workload is a web application that consists of Amazon EC2 instances in an autoscaling group behind an application load balancer. The solution architect must improve the security posture and minimize the impact of DDoS attack on resources. Which solution is the most cost effective?",
    "options": [
      "Option A: Implementation path for A solution architect is perfor...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. Take your time to guess the answer. So correct answer here will be option A. Configure an AWS web ACL with rate based rules. Create an Amazon CloudFront distribution that points to the application load balancer. enable the web ACL on the cloud front distribution because here best solution is AWS shield and next solution should be option A because you can use AWS web that is web access control list to help to minimize the effect of distributed denial of services attack for additional protection against DDoS attacks. So option A is correct here",
    "isMulti": false
  },
  {
    "id": 160,
    "qNum": 188,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has multiple AWS account for various department. One of the department want to share an Amazon S3 bucket with all the other department. Which solution will require least amount of effort?",
    "options": [
      "Option A: Implementation path for A company has multiple AWS acc...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Take your time to guess answer. And correct answer here will be option C. Set the S3 bucket policy to allow close account access to other department. Because if we talk about option A enable cross account S3 replication for the account it will replicate but that is not the requirement you need to share not to replicate. So this is incorrect option. And now option B create a pre-signed URL for the bucket and share it with the department. So it will also not work because there could be two department or 100 department you don't know and you need to share with all the department. And now if we talk about option D, create IM user for each department and then configure a read only IM policy. This can work but there will be massive effort for this. So option C is the only correct answer.",
    "isMulti": false
  },
  {
    "id": 161,
    "qNum": 189,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company need to share an Amazon S3 bucket with an external vendor. The bucket owner must be able to access all the object. Which action should be taken to share the S3 bucket?",
    "options": [
      "Option A: Implementation path for A company need to share an Ama...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. and correct answer here will be option C. Create a bucket policy to require users to grant bucket owner full control when uploading objects. And this one is correct because by default an S3 object is owned by the AWS account that uploaded it. This is true even when the bucket is owned by another account. To get the access to the object, the object owner must explicitly grant you bucket owner access. The bucket owner can grant bucket owner full control of the object by updating the ACL that is access control list of the object. the bucket owner can update the ACL either during a put or copy operation or after the object is added to the bucket. So I hope this point is clear because owner should grant bucket owner full control when uploading or copying or even after uploading the object.",
    "isMulti": false
  },
  {
    "id": 162,
    "qNum": 190,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is developing a real-time multiplayer game that uses UDP for communication between client and servers in an autoscaling group. A spikes in demand are anticipated during the day. So the game server platform must adapt accordingly. Developer want to store gamer score and other non- relational data in a database solution that will scale without intervention. Which solution should a solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company is developing a real...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. Take your time to guess the answer. And uh correct option here will be option B. Use a network load balancer for traffic distribution and Amazon Dynamob DB on demand for data storage. And also this one is correct here because here in the question we are using UDP which indicates that NLB is the requirement network load balancer and we are also using non relational database which indicates Dynamo DB is the requirement because it is non relational database and we are getting both this network load balancer and Dynamo DB on demand in this option option B. So this one is correct here. A company collects temperature, humidity and atmospheric pressure data in cities across multiple continents. The average volume of data collected per site each day is 500 GB. Each site has a high-speed internet connection. The company's weather forecasting application are based in a single region and analyze the data daily. What is the fastest way to aggregate the data from all these global sites? And here are the options. You can take your time to guess the answer and correct answer here will be option A. Enable Amazon S3 transfer acceleration on the destination bucket. Use multipart upload to directly upload right data to the destination bucket. And this one is correct here because you might want to use transfer acceleration on a bucket for various reasons like you have a customer that upload a centralized bucket from all over the world and it could be due to the reason you want to transfer gigabytes to terabytes of data on a regular basis across continents. So both these are the requirement here in the question. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 163,
    "qNum": 192,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has a custom application running on an Amazon EC2 instance that reads a large amount of data from Amazon S3. Performs a multi-stage analysis. Writes the result to Amazon Dynamob. The application writes a significant number of large temporary files. During the multi-stage analysis, the process performance depend on the temporary storage performance. What would be the fastest storage option for holding the temporary files?",
    "options": [
      "Option A: Implementation path for A company has a custom applica...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And keyword here in the question is significant number of large temporary files. So this is the clue here and you must be aware that what we use for temporary files and where the performance should also be high and you can take your time to guess the answer and uh I'm going to reveal the answer now and correct answer here will be option D multiple instance store volumes with software rate zero because instance store is temporary and fastest storage option. So due to this reason option D is absolutely correct here.",
    "isMulti": false
  },
  {
    "id": 164,
    "qNum": 193,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A leasing company generates an email PDF statement every month for all its customer. Each statement is about 400 KB in size. Customer can download their statement from the website up to 30 days from when the statement were generated. At the end of their three-year lease, the customer are emailed a GIF file that contain all the statement. What is the most cost effective storage solution for this situation?",
    "options": [
      "Option A: Implementation path for A leasing company generates an...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. You can take your time to guess the correct answer and correct answer here will be option D. Store the statement using Amazon S3 standard infrequent access storage class. create a life cycle policy to move the statement to Amazon S3 storage after 30 days. So this one is correct here because uh it is not definite that customer will need this customer may obtain which means they would or would not request for the statement. So and at the same time it is the most cost-saving option. So due to this reason option D is correct here.",
    "isMulti": false
  },
  {
    "id": 165,
    "qNum": 194,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company recently released a new type of internet connected sensor. The company is expecting to sell thousands of sensor which are designed to stream high volumes of data each second to a central location. A solution architect must design a solution that ingest and store data so that the engineering team can analyze it in near real time with millisecond responsiveness. Which solution should the solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company recently released a ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. And correct option here will be option D. Use Amazon Kinesis data stream to ingest the data. Consume the data with an AWS Lambda which then stores the data in Amazon Dynamob DB. So this one is correct here because for data injection definitely there will be kindnesses that is Amazon kinesis data streams and this is also available in this option but this is not available in these options. So option A and option B are already eliminated but we are left with option C and D but only D is correct here because here we want to store the data and red is data warehousing service noted data store service so this one is also wrong here and we have Dynamo DB in this option so this one will be correct moreover lambda doesn't work with red shift so it will also not be suitable here however it perfectly works with Dynamo DB. So, option D is correct here. And now,",
    "isMulti": false
  },
  {
    "id": 166,
    "qNum": 195,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A website run a web application that receives a burst of traffic each day at noon. The users upload new picture and content daily, but have been complaining about timeouts. The architecture uses Amazon EC2 autoscaling groups and the custom application consistently takes 1 minute to initiate upon bootup before responding to users request. How should a solution architect redesign the architecture to better respond to changing traffic?",
    "options": [
      "Option A: Implementation path for A website run a web applicatio...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. You can check your time to guess the correct answer. And correct answer here will be option C. Configure an auto scaling step scaling policy with an instance warm-up condition. So option C is correct here because step scaling applies step adjustment which means you can set multiple actions to vary the scaling dependency on the size of alarm bridge. When you create a step scaling policy you can also specify the number of seconds that it takes for a newly launched instance to warm up. So option C is absolutely correct here.",
    "isMulti": false
  },
  {
    "id": 167,
    "qNum": 196,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is concerned that two N instances in use will no longer be able to support the traffic needed for the company's application. A solution architect want to implement a solution that is highly available, fall tolerant and automatically scalable. What should the solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company is concerned that tw...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. And you can take your time to guess the answer. And I hope this will be easy one for you. And correct one here will be option C. Remove the net instances and replace them with two net gateways in different availability zone. So option C is correct here and this is correct here because net gateway is highly available unlike net instances but within one availability zone. So we need to install at least each individual availability zone should have its own net gateway that is the primary requirement otherwise it is highly available.",
    "isMulti": false
  },
  {
    "id": 168,
    "qNum": 197,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "a company operates a website on Amazon EC2 Linux instances. Some of the instances are failing. Troubleshooting points are insufficient. Swap space on the failed instances. The operation team leads needs a solution to monitor these. What should the solution architect recommend?",
    "options": [
      "Option A: Implementation path for a company operates a website o...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. add the options. Now I am going to reveal the correct answer and correct transfer here will be option C. Install an Amazon Cloudatch agent on the instances. Run an appropriate script on a set schedule. Monitor swap utilization matrix in cloudatch. So crack transfer is definitely option C. But here I have one important point for you. The cloudatch monitoring script are deprecated now. So we recommend you to use cloudatch agent to collect metrics and logs instead of cloudatch monitoring script.",
    "isMulti": false
  },
  {
    "id": 169,
    "qNum": 198,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has a web server running on an Amazon EC2 instances in public subnet with an elastic IP address. The default security group is assigned to the EC2 instance. The default network ACL has been modified to block all the traffic. A solution architect need to make the web server accessible from everywhere on port 443. Which combination of step will accomplish this task?",
    "options": [
      "Option A: Implementation path for A company has a web server run...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Choose two. So basically here you have to choose two options and here are the options and you can have a look at the options and then try to guess the correct one. Let me reveal the correct answers for you. And correct options here will be option A and option E. Create a security group with a rule to allow TCP port 443 from source 0.0.0.0/ 0/0 basically from everywhere and update the network ACL to allow inbound TCP port 443 from source and outbound TCP port to destination this. So basically security group are stateful. So inbound will be enough but NACL is stateless basically birectional like if you allow only incoming traffic then only incoming will be allowed and if you allow outgoing traffic then only outgoing will be allowed. uh like if you allow from source A to destination B using NACL basically A can reach to B that doesn't mean that traffic from B will also reach A this is not the case you have to separately allow this rule so due to these reasons option A and option E are correct here",
    "isMulti": false
  },
  {
    "id": 170,
    "qNum": 199,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "a company must re-evaluate it need for the Amazon EC2 instances It currently has provisioned in autoscaling group at present the autoscaling group is configured for a minimum of two instances and a maximum of four instances across two availability zones. A solution architect reviewed the Amazon cloud watch matrix and found that CPU utilization is consistently low for all the EC2 instances. What should the solution architect recommend to maximize the utilization while ensuring the application remains fall tolerant?",
    "options": [
      "Option A: Implementation path for a company must re-evaluate it ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. And take your time to guess the answer because you should be able to and correct answer here will be option D. Create a new launch configuration that uses a smaller instance type. Update the existing autoscaling group. You may be confused with option C. which states modify the autoscaling group scaling to scale in and scale out on a higher CPU utilization because issue in our question is that we are having low CPU utilization I can say uh just 5% but it can go up to uh 80% without any issues so we can modify our autoscaling group scaling policy so that it can use 80% CPU but at the same time we have to ensure it remains fall tolerant. So instead of increasing that limit we have to focus that we use a smaller instance type in multiple aes or even in the same a at least if there is issue on one instance and continue our work with the remaining instances and we also need to update the autoscaling group. So basically just due to fall tolerant reason option D is correct here.",
    "isMulti": false
  },
  {
    "id": 171,
    "qNum": 200,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has an application that post messages to Amazon SQS. Another application ports the queue and process the messages in an IO intensive operation. The company has a service level agreement that specifies the maximum amount of time that can elapse between receiving the messages and responding to the users. Due to an increase in the number of messages, the company has difficulty meeting its SLA consistently. What should a solution architect do to help improve the application processing time and ensure it can handle the load at any level?",
    "options": [
      "Option A: Implementation path for A company has an application t...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. You can take your time to guess the answer. Let me reveal the correct answer and correct answer here will be option D. Create an Amazon machine image that is AMI from the instance used for processing. Create an autoscaling group using the image in its launch configuration. Configure the group with target tracking policy based on the age of the oldest message in the queue and D is correct here as the SLA is based on the age of message and this is what we are following in this option. A company is designing a new web service that will run on Amazon EC2 instances behind an elastic load balancer. However, many of the web service clients can only reach IP address whit listed on their firewalls. What should a solution architect recommend to meet the client's requirement? And here are the options. You can take your time to guess the correct answer. And let me reveal the correct answer. The correct answer here will be option A. a network load balancer with an associated elastic IP address because as per this requirement IP address was listed on their firewalls. network load balancer should be used and also UDP and TCP work on layer 4 and on layer 4 we have to use network load balancer and if we are talking about layer 7 that is HTTP or HTTPS then we can use application load balancer but for layer four that is TCP or UDP we have to use network load balancer and due to this reason option A is correct",
    "isMulti": false
  },
  {
    "id": 172,
    "qNum": 202,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company want to host a web application on AWS that will communicate to a database within a VPC. The application should be highly available. What solution should a solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company want to host a web a...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. You can take your time to guess the correct answer. Let me reveal the correct answer and correct answer here will be option B. Deploy a load balancer in multi availability zones with an autoscaling group for web servers and then deploy Amazon RDS in multiple availability zones. So this is going to be correct answer and you may get confused due to option C but this is wrong. However, it can work but question is pointing towards high availability. Due to this reason, option B will be correct only.",
    "isMulti": false
  },
  {
    "id": 173,
    "qNum": 203,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company's packaged application dynamically creates and returns single use text files in response to user request. The company is using Amazon CloudFront for distribution but want to further reduce data transfer cost. The company cannot modify the application source code. What should a solution architect do to reduce the cost?",
    "options": [
      "Option A: Implementation path for A company's packaged applicati...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. You can take your time to guess the answer and correct answer here will be option A. Use lambda at age to compress the files as they are sent to users. So see at the question written single use text files. So single use text file means that the file will be used only one time. So what's the benefit of crashing it to cloud front as it will not be able to use again. So what other thing can be done is to use lambda at age to compress the file which will reduce the size of file and hence less data will be transferred and less will be the transfer charges. So I hope this point is clear to you. So option A is correct here.",
    "isMulti": false
  },
  {
    "id": 174,
    "qNum": 204,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A database is on Amazon RDS MySQL 5.6 multi-AZDB instance that experiences highly dynamic reads. Application developer notice a significant slowdown when testing read performance from a secondary AWS real. The developer want a solution that provides less than 1 second of read replication latency. What should the solution architect recommend?",
    "options": [
      "Option A: Implementation path for A database is on Amazon RDS My...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And correct answer here will be option B. Migrate the database to Amazon Aurora with cross rean replicas because MySQL red replicas has rather high replication lag. Aurora can support less than 1 second but RDS MySQL cannot. So this is the correct option here.",
    "isMulti": false
  },
  {
    "id": 175,
    "qNum": 205,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is planning to deploy an Amazon RDSDB instance running Amazon Aurora. Company has a backup retention policy requirement of 90 days. Which solution should a solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company is planning to deplo...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Again, take your time to guess the correct answer. And the correct answer here will be option C. Create an AWS backup plan to perform a daily snapshot of RDS database with the retention set to 90 days. Create an AWS backup job to schedule the execution of the backup plan daily. So this one is correct here because creating an AWS backup plan to perform a daily snapshot of RDS database with the retention set to 90 days and scheduling the execution of backup plan daily is the recommended solution. And this one is correct here because AWS backup automate the backup process which simplifies backup management and ensures backup are retained for the required retention period. And also AWS backup provides an easy way to restore data from backups reducing the downtime and operational overhead. So option C is absolutely correct here.",
    "isMulti": false
  },
  {
    "id": 176,
    "qNum": 206,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company currently has 250TB of backup files stored in Amazon S3 in a vendor's proprietary format. Using a Linux- based software application provided by the vendor, the company want to retrieve the files from Amazon S3. Transform the files to an industry standard format and re-upload them to Amazon S3. The company want to minimize the data transfer charges associated with this conversion. What should a solution architect do to accomplish this?",
    "options": [
      "Option A: Implementation path for A company currently has 250TB ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. You can take your time to guess the correct answer. And correct answer here will be option D. Launch an Amazon EC2 instance in the same region as Amazon S3 and install the conversion software onto the instance. Perform the transformation and re-upload the files to Amazon S3 from the EC2 instance. because data is already in S3 and is snowball is to transfer the data from the data center to AWS. Hence B and C are wrong and also Lambda doesn't let you install the custom software. So only option D is correct here.",
    "isMulti": false
  },
  {
    "id": 177,
    "qNum": 207,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is migrating a NoSQL database cluster to Amazon EC2. The database automatically replicates data to maintain at least three copies of data. IO throughput of the servers is the highest priority. Which instance type should a solution architect recommend for the migration?",
    "options": [
      "Option A: Implementation path for A company is migrating a NoSQL...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. So you can take your time to guess the correct answer and I hope it may be easy one for you and correct answer here will be option A. Storage optimized instances with instance store because storage optimized will give you highest IOPS. So IOPS will be highest in case of storage optimized also stance store is a temporary storage but it can give you IOPS of magnitude of 1 million and we have three copies so lesser risk even if one instance goes down because automatically there will be three copies. So as per the requirement of high IOPS option A is best suitable and this is the correct answer here.",
    "isMulti": false
  },
  {
    "id": 178,
    "qNum": 208,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has a large Microsoft SharePoint deployment running on premises that requires Microsoft Windows shared file storage. The company want to migrate this workload to AWS cloud and is considering various storage options. The storage solution must be highly available and integrated with active d",
    "options": [
      "Option A: Implementation path for A company has a large Microsof...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "irectory for access control. Which solution will satisfy these requirement and here are the options. Take your time to guess the answer. Let me reveal the correct answer and the correct answer transfer will be option D. create an Amazon FSX for Windows file server file system on AWS and set the active directory domain for authentication because whenever we talk about FSX we have to go for Windows or vice versa and also in case of SMB it is also used in Windows those only. And if we talk about NFS or EFS then we have to always go for Linux. Basically anything of these can be present in the question. Uh like Windows, Linux, FSX, SMB. But this is the relation like FSX and SMB are used in Windows and NFS and EFS are used in Linux and here we are given with Windows. So we have to go for FSX because EFS can obviously not be used because it is for uh Linux only. So option D is only correct answer here and uh rest of the two options are obviously incorrect because we have to also configure active directory domain for authentication.",
    "isMulti": false
  },
  {
    "id": 179,
    "qNum": 209,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has a web application with sporadic usage pattern. There is heavy usage at the beginning of each month, moderate usage at the start of each week and unpredictable usage during the week. application consists of a web server and a MySQL database server running inside the data center. The company would like to move the application to AWS cloud and need to select a cost-effective database platform that will require database modification. Which solution will meet this requirement?",
    "options": [
      "Option A: Implementation path for A company has a web applicatio...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. Take your time to guess the correct answer. And let me reveal the correct answer for you. Option C will be the correct answer here. MySQL compatible Amazon Aurora serverless. So this is the correct answer here. RDS is cheaper than Aurora. That is fine. But the question is about unpredictable load. You can see from here Aurora serverless eliminates this option. So option C is correct here. Otherwise if only cost was the factor then this option could have been better. But we are also having unpredictable uses. So we are going with this option.",
    "isMulti": false
  },
  {
    "id": 180,
    "qNum": 210,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing the storage architecture for a new web application used for [snorts] storing and viewing engineering drawings. All application component will be deployed on the AWS infrastructure. The application design must support caching to minimize the amount of time that users wait for the engineering drawing to load. Application must be able to store pabyte of data. Which combination of storage and caching should the solution architect use?",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. You can take your time to guess the answer. And the correct answer here will be let me reveal the correct answer option Amazon S3 with Amazon CloudFront because Amazon S3 storage and cloudfront caching decrease the time users spend waiting and this is the requirement of our question. So option A is correct here. A solution architect is creating an application that will handle batch processing of large amount of data. The input data will be held in Amazon S3 and the output data will be stored in different S3 bucket. For processing, the application will transfer the data over network between multiple Amazon EC2 instances. What should the solution architect do to reduce the overall data transfer cost? And here are the options. Let me reveal the correct answer and the correct answer here will be option C. Place all the EC2 instances in the same availability zone. So this one is correct here because data transferred between Amazon EC2, Amazon RDS, Amazon Red Shift, Amazon Elastic S instances and even elastic network interface in the same availability zone is absolutely free. In the same availability zone, it will be absolutely free. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 181,
    "qNum": 212,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company host its core network service including directory service and DNS in its on premises data center. The data center is connected to AWS cloud using AWS direct connect. Additional AWS account are planned that will require quick cost effective and consistent access to these network services. What should a solution architect implement to meet these requirement with the least amount of operational head?",
    "options": [
      "Option A: Implementation path for A company host its core networ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. Take your time to guess the correct answer again. Let me reveal the correct answer for you. And correct answer here will be option D. Configure AWS transit gateway between the accounts. Assign DX to the transit gateway and route network traffic to the on premises servers. So option D is absolutely correct here because AWS transit gateway connect VPCs and on premises network through a central hub. This simplifies your network and puts an end to the complex pairing relationship. It acts as a cloud router. Each new connection is only made once. So option D is correct.",
    "isMulti": false
  },
  {
    "id": 182,
    "qNum": 213,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company operates an e-commerce website on Amazon EC2 instances behind an application load balancer in an autoscaling group. The site is experiencing performance issues related to a high request rate from illegitimate external system with changing IP address. The security team is worried about potential DDoS attack against the website. The company must block the illegitimate incoming request in a way that has minimal impact on the legitimate users. What should the solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company operates an e-commer...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and the correct answer here will be option B. Deploy AWS web associated with the ALB and configure rate limiting rule because IP address is changing here continuously. So NCL cannot be used. So this option is eliminated and AWS inspector assesses application for exposure vulnerabilities and deviations from best practice. So it's for penetration test and so on. So this is also eliminated. And now if I talk about AWS guard duty, AWS guard duty is a threat detection not prevention. So this is also wrong. So AWS web is the only best option and also wherever there is a possibility of DDOS attack always go for AWS web.",
    "isMulti": false
  },
  {
    "id": 183,
    "qNum": 214,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company receives structured and semistructured data from various sources once every day. A solution architect need to design a solution that leverages big data processing frameworks. The data should be accessible using SQL queries and business intelligence tools. What should the solution architect recommend to build the most high performing solution?",
    "options": [
      "Option A: Implementation path for A company receives structured ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Take your time to guess the correct answer and let me reveal the correct answer for you. Use Amazon EMR to process data and Amazon Red Shift to store the data. So option B is correct here and this one is correct here because because here is a clue leverage is big data processing and whenever there is a mention about big data always go for Amazon EMR that is a basic trick that may be helpful for you.",
    "isMulti": false
  },
  {
    "id": 184,
    "qNum": 215,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is hosting an election reporting website on AWS for users around the world. The website uses Amazon EC2 instances for the web and application tiers in an autoscaling group with application load balancer. The database tier uses an Amazon RDS for MySQL database. The website is updated with e",
    "options": [
      "Option A: Implementation path for A company is hosting an electi...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "lection result once an hour and has strictly observed hundred of users accessing the report. The company is expecting a significant increase in the demand because of upcoming election in different countries. A solution architect must improve the website's ability to handle additional demand while minimizing the need for the additional EC2 instances. Which solution will meet this requirement? And here are the options. And correct answer here will be option B. launch an Amazon CloudFront web distribution to c a commonly requested website content because it is mentioned here in the question that the users are around the world. So whenever there is a requirement of providing better experience for the users around the world always think about cloudfront and also it also requires cash invalidation every hour and it is also the requirement of the question as it is mentioned here. So due to these reasons, option B is correct here.",
    "isMulti": false
  },
  {
    "id": 185,
    "qNum": 216,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is building a website that relies on reading and writing to an Amazon Dynamob database. The traffic associated with the website predictably peaks during business hours on weekdays and declines overnight and during weekends. A solution architect need to design a cost effective solution that can handle the load. What solution should the solution architect do to meet this requirement?",
    "options": [
      "Option A: Implementation path for A company is building a websit...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. Take your time to guess the answer. And let me reveal the correct answer for you. And the correct answer here will be option C. Enable Dynamob autoscaling when creating the tables. And this one is correct here because the load is variable and predictable as it is mentioned here. So option C is best and if we talk about on demand it will be best for unknown workloads. So option C is correct here.",
    "isMulti": false
  },
  {
    "id": 186,
    "qNum": 217,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company uses Amazon Redshift for its data warehouse. The company want to ensure high durability for its data in case of any component failure. What should a solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company uses Amazon Redshift...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. You can have a look at the options and take your time. And let me reveal the cat transfer for you. And the cat transfer here will be option B. Enable cross real snapshots because this will improve durability and multiA is not supported with red shift. Due to this reason, this is the only best possible answer here.",
    "isMulti": false
  },
  {
    "id": 187,
    "qNum": 218,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has data is stored in an on premises data center that is used by several on premises application. The company want to maintain its existing application environment and be able to use AWS services for data analytics and future visualizations. Which storage service should the solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company has data is stored i...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. I hope you have guessed the correct answer as of now. Let me reveal the correct answer for you and the correct answer is AWS storage gateway for files because a storage gateway is the bridge between the on premises database and cloud. So answer is B only.",
    "isMulti": false
  },
  {
    "id": 188,
    "qNum": 219,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a static website. The company security policy requires that all the website traffic be inspected by AWS web. How should the solution architect comply with this requirement?",
    "options": [
      "Option A: Implementation path for A solution architect must desi...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 3,
    "answerLetter": "D",
    "explanation": "And here are the options. Take your time to guess the correct answer. Let me reveal the correct answer for you. And the correct answer here will be option D. Configure Amazon CloudFront and Amazon S3 to use an origin access identity O AI to restrict access to S3 bucket. Enable AWS web on the distribution. So this one is correct here because you can deploy AWS web on Amazon cloudfront as part of your CDN solution. The application load balancer that fronts your web server or origin servers running on EC2 Amazon API gateway for your REST APIs or AWS apps sync for your graph dual APIs. With AWS web you pay only for what you use and the pricing is based on how many rules you deploy and how many web request your application receives in any cases and not just any AWS incoming request are going to hit the firewall first. If it passes the firewall then it can continue to it next destination. So option D is correct here.",
    "isMulti": false
  },
  {
    "id": 189,
    "qNum": 220,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has a 143TB MySQL database that it want to migrate to AWS. The plan is to use Amazon Aurora MySQL as a platform going forward. The company has 100 Mbpsf AWS direct connection to Amazon VPC. Which solution will meet company's needs and take the least amount of time?",
    "options": [
      "Option A: Implementation path for A company has a 143TB MySQL da...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Take your time to guess the correct answer. And let me reveal the correct answer for you. And the correct answer here will be option D. Order 4 50TB AWS Snowball devices and copy the database backup onto them. Have AWS import the data into Amazon S3. Import the data into Aurora. So this one is get here because four is snowball will be required because if snowball of 50 TB size has only 42 TB of usable space and 42 into 3 will be equal to just 126 which is less than the required and required is 143 and 42 into 4 will be equal to 168 TB. So the requirement of this 143TB will be satisfied by ordering four is snowball devices. A company host an online swapping application that stores all orders in an Amazon RDS for postgraql single agb instance. Management want to eliminate single point of failure and has asked K solution architect to recommend an approach to minimize database downtime without requiring any changes to the application code. Which solution meet these requirements? And here are the options. So take your time to guess the correct answer. After that I will reveal the answer. Okay, let me reveal the answer. And the correct answer here is option A. Convert the existing database instance to a multi-az deployment by modifying the database instance. and is specifying the multi-AZ option because when a single AG DB instance is converted to multi-AZ deployment there is not any downtime just a little increased latency and that's why option A is best here and correct here so now question number two a company has a 10Gbps AWS direct connection from its on premises server to AWS the workload using the connection are critical the company requires a disaster recovery strategy with maximum resiliency that maintains the current connection bandwidth at minimum. What should a solution architect recommend? And here are the options. You can guess your answer. And you must take this point into consideration. Workload are critical here and it should have maximum resiliency. So correct option here will be option C. Set up two new direct connection one in the current AWS region and one in another AWS region. So basically like you must have been confused with option A which also seems to be fine. Set up a new direct connection in another AWCM. But this is not correct because they should have two direct connection in the current real in case of one device failure. it will be helpful and one direct connection in another re for the case of rean failure. So I hope you got my point. Basically the main region should have two direct connection. So that in case one direct connection fails another can be used but in case the ri itself fails ren itself is not working in that case it will use the dx of another ri that is what this question is asking for because it should have maximum resiliency.",
    "isMulti": false
  },
  {
    "id": 190,
    "qNum": 223,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing a VPC with public and private subnets. The VPC and the subnet use IPv4 CDR blocks. There is one public subnet and one private subnet in each of the three zones for high availability. An internet gateway is used to provide internet access for the public subnet. The private subnet required access to the internet to allow Amazon EC2 to download software updates. What should the solution architect do to enable internet access for the private subnets?",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. You can go through the options and you must have read this question earlier in the videos of the series itself. But still I would request you to guess the answer by going through all the options. So now let me reveal the correct answer and the correct answer here will be option A. Create three net gateways one for each public subnet in each A. Create a private route table for each A that forwards nonVBC traffic to net gateway in its AG. So option A is correct here. And why it is correct? There are two important points that you should take into consideration. Net gateways are always placed in public subnet. So public subnet is first requirement and that is satisfied here and it is not here. That is why it is incorrect. And option C and D are obviously incorrect because for connecting to internet from private subnets you need net gateway or net instances. But here we are using internet gateway which is used to connect from the public subnet or from the public instances. So both these options are incorrect. Both are using internet gateway. So now however uh this is enough for this uh occasion but still let me tell you one more point in the event of a failure the net gateway becomes unavailable and the resources within other availability zone losses the internet access to create a full tolerant architecture make sure that your AWS net gateways are deployed in at least 2 a or more and here what we are doing we are deploying in three a it is mentioned here in each Ag. So we have fall tolerance as well. So option A is absolutely correct here.",
    "isMulti": false
  },
  {
    "id": 191,
    "qNum": 224,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "As a part of budget planning, management wants a report of AWS build items listed by user. The data will be used to create department budgets. A solution architect need to determine the most efficient way to obtain this report information. Which solution meet these requirement?",
    "options": [
      "Option A: Implementation path for As a part of budget planning, ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And I hope this would be quite easy for you. Try to guess the answer. And here's the correct answer. Option number B, create a report in the cost explorer and download the report. And the reason is here you can filter the cost data associated with each member account in an organization using cost explorer. So option B is absolutely correct here.",
    "isMulti": false
  },
  {
    "id": 192,
    "qNum": 225,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company with facilities in North America, Europe and Asia is designing new distributed application to optimize its global supply chain and manufacturing process. The orders booked on one continent should be visible to all the real in a second or less. The database should be able to support failover with a sort recovery time objective. The uptime of the application is important to ensure that the manufacturing is not impacted. What should a solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company with facilities in N...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And this question must have been done by you multiple times. Not really sure about the question but the option which is best suited here. And let me reveal the correct answer here. And the correct answer here will be option B. Use Amazon Aurora global database because Amazon Aurora global database would provide low latency access to data in multiple regions. support automatic failover with a sort recovery time objective which is the requirement of the question itself. Uh you can see here and ensure that the application has a high up time to support manufacturing. It is a relational database that provides high performance, scalability and availability. Aurora global database allow a single Aurora database to span multiple AWS regions enabling low latency global reads disaster recovery from realwide outages. And if we talk about option A which in fact is wrong here because Amazon Dynamo DB global tables would provide low latency access to data in multiple regions but it is a NoSQL database and may not meet the requirement of the application that the company is designing. So option B is best suited here.",
    "isMulti": false
  },
  {
    "id": 193,
    "qNum": 226,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company's near realtime streaming application is running on AWS. As the data is ingested, a job runs on the data and takes 30 minute to complete. The workload frequently experience high latency due to large amount of incoming data. A solution architect need to design a scalable and serverless solution to enhance performance. Which combination of step should the solution architect take?",
    "options": [
      "Option A: Implementation path for A company's near realtime stre...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Take your time to guess the correct answer. So correct answer here will be option A and option E. Use Amazon Kynis data fire hose to ingest the data and option E use AWS firegate with Amazon elastic container service to process the data and here in the question you must focus on this point first 30 minute to complete. So AWS lambda cannot be used because the maximum time lambda can run is 15 minutes. You must be aware about that. And now why this option is not correct? Use AWS data migration service to ingest the data because it is totally irrelevant. This is used for migrating onpream database to AWS. And now use Amazon EC2 instances in an autoscaling group to process the data. This is also incorrect because serverless is the requirement. You can have a look here. And there should not be self-managed instances and EC2 instances are self-managed instances. So basically these are servers and this is the requirement. Serverless is the requirement and that's why option A and option E are correct here and also E is correct because in case of serverless lambda is used but as time is beyond the limit of lambda which is 30 minutes here and the limit is 15 minutes in case of lambda for the serverless ECS is the substitute of lambda and that's why we are going for this option and this option is absolutely correct. here and already you must be aware that for ingestion of the data Amazon Kinesis data fires is the best suitable service",
    "isMulti": false
  },
  {
    "id": 194,
    "qNum": 227,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "an application running on an Amazon EC2 instances need to access an Amazon Dynamob DB table both the EC2 instances and the Dynamob DB table are in the same AWS account. A solution architect must configure the necessary permission. Which solution will allow list privilege access to dynamic DB table from EC2 instances?",
    "options": [
      "Option A: Implementation path for an application running on an A...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Please go through these options. And as these options are little bit longer, so take your time. Okay, let me reveal the correct answer here. And the correct answer here will be option A. Create an IM role with appropriate policy to allow access to Dynamo DB table. Create an instance profile to assign this IM role to the EC2 instance. And let me tell you that EC2 instance can assume only IM role. So option C and option D are out because they are using IM user. But EC2 instance can use or assume only IM role. And now why option B is not correct? Even though IM role is also mentioned here with appropriate policy to access to the dynamic DB table. It is exactly same as this one is. But here this is correct because we need to create instance profile to assign IM role to the instance instead of trust relationship policy document to allow it to assume the role. This is not required here. So option A is only correct answer here.",
    "isMulti": false
  },
  {
    "id": 195,
    "qNum": 228,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A solution architect is designing a solution that involves orchestrating a series of Amazon elastic container service Amazon ECS task type running on Amazon EC2 instances that are part of an ECS cluster. The output and the state data for all the task need to be stored. The amount of output by each t",
    "options": [
      "Option A: Implementation path for A solution architect is design...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "ask is approximately 10 MB and there could be hundred of task running at a time. The system should be optimized for high frequency reading and writing as old output are archived and deleted. The storage size is not expected to exceed 1TB. Which storage solution should the solution architect recommend? And here are the options. And now let me reveal the correct answer. And the correct answer here will be option B. An Amazon elastic file system Amazon EFS with provisioned throughput. You should also take care of this point with provisioned throughput. And this one is correct here because when burst credit are available a file system can drive up to 100 Mbps per terabyte of storage with a minimum of 100 Mbps. If no burst credit are available a file system can drive up to 50 Mbps per storage with a minimum of 1 Mbps. It is mentioned that the size of EFS is not going to exceed 1TB and each job output 100 MB of data and there will be 100 of them. If we go with the bus throughput, we will have maximum 100 Mbps which will be enough for just 10 job output. So we need provision throughput which is option B here. So this one is correct here.",
    "isMulti": false
  },
  {
    "id": 196,
    "qNum": 229,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "An online photo application lets user upload photos and perform image editing operation. The application offers two classes of services free and paid. Photos submitted by paid users are processed before those submitted by free users. Photos are uploaded to Amazon S3 and the job information is sent to Amazon SQS. Which configuration should a solution architect recommend?",
    "options": [
      "Option A: Implementation path for An online photo application le...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Try to guess the answer first, then I will reveal the answer. And the correct answer here will be option C. Use two SQF standard cues, one for paid and one for free. Configure Amazon EC2 instances to prioritize polling for the paid queue over the free Q. And this one is correct because AWS recommend using separate cues when you need to provide prioritization of work. The logic can be implemented at the application layer to prioritize the queue for paid photos over the queue for the free photos or the free members we can say.",
    "isMulti": false
  },
  {
    "id": 197,
    "qNum": 230,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company want to migrate its MySQL database from on premises to AWS. The company recently experienced a database outage that significantly impacted the business. To ensure this does not happen again, the company want a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two nodes. Which solution will meet these requirements?",
    "options": [
      "Option A: Implementation path for A company want to migrate its ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Try to guess the answer. And the correct answer here is option B. Create an Amazon RDS MySQL instance with multi-AZ functionality unable to synchronously replicate the data. And this one is correct here because RDS multi-AG synchronously replicates the data. So it is the correct option here. A company stores user data in AWS. The data is used continuously with peak uses during business hours. Access patterns vary with some data not being used for month at a time. A solution architect must choose a cost effective solution that maintains the highest level of durability while maintaining high availability. Which storage solution meet this requirement? And here are the option. Try to guess the answer as it may be quite obvious for you. And the correct answer here is option B. Amazon S3 intelligent taring because intelligent taring moves data between storage classes based on its current degree of usage. So option B here is absolutely correct.",
    "isMulti": false
  },
  {
    "id": 198,
    "qNum": 232,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company receives inconsistent service from its data center provider because the company is headquartered in an area affected by natural disasters. The company is not ready to fully migrate to AWS cloud but it wants a failure environment on AWS in case the on premises data center fails. The company runs web servers that connect to external vendors. The data available on AWS and on premises must be uniform. Which solution should a solution architect recommend that has the least amount of the downtime?",
    "options": [
      "Option A: Implementation path for A company receives inconsisten...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "And here are the options. Take your time to guess the answer. So let me reveal the correct answer here. And the correct answer here is option A. Configure an Amazon route 53 failover record. Run application server on Amazon EC2 instances behind an application load balancer in an autoscaling group. Set up AWS storage gateway with stored volumes to back up the data to Amazon S3. So there could be multiple factors on which you can select answer. But here I'm going to share the clue with you. Very first clue is that it must has least amount of down time. So this is very first clue and due to which our options B, C and G are eliminated because it will take some time to deploy the resources. If we are using cloud formation template and here we already have Amazon EC2 instances. So it will take le time and it will have list downtime. So option A is correct here. Rest it is absolutely required configure Amazon route 53 failover record but this is available in all the four options so we can't select on the basis of this so yeah on the basis of cloud formation template rest three options are eliminated due to which option A is correct here",
    "isMulti": false
  },
  {
    "id": 199,
    "qNum": 233,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "a company has three VPCs named development testing production in the US east one region the Three VPCs need to be connected to an on premises data center and are designed to separate to maintain security and prevent any resource sharing. A solution architect need to find a scalable and secure solution. What solutions should a solution architect recommend?",
    "options": [
      "Option A: Implementation path for a company has three VPCs named...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. Try to guess the answer. And the correct answer here is option D. Create a new VPC called network. Within the network VPC, create an AWS transis gateway with an AWS direct connect connection back to data center. Attach all the other VPC to the network VPC. Because with AWS transit gateway you can simplify the connectivity between multiple VPCs and also connect to any VPC attached to AWS transit gateway with a single VPN connection.",
    "isMulti": false
  },
  {
    "id": 200,
    "qNum": 234,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "What should a solution architect do to ensure that all the objects uploaded to an Amazon S3 bucket are encrypted?",
    "options": [
      "Option A: Implementation path for What should a solution archite...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the option. Try to guess the answer. Let me reveal the correct answer. And the correct answer here is update the bucket policy to deny if the object does not have an X - AMZ server - side encryption header set. So correct answer is this one and I will share a reference document from AWS itself in the description of this video. You can refer it as well.",
    "isMulti": false
  },
  {
    "id": 201,
    "qNum": 235,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company needs a secure connection between its own premises environment and AWS. This connection does not need high bandwidth and will handle a small amount of traffic. The connection should be set up quickly. What is the most cost effective method to establish this type of connection?",
    "options": [
      "Option A: Implementation path for A company needs a secure conne...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options and the correct answer here will be option D. Implement an AWS side to side VPN connection. And clue is here does not need high bandwidth. So limited bandwidth side to side VPN connection is cheaper than direct connect. So option D is absolutely correct. Here we have to find such clues like what is the most important priority of the like and what is the requirement. So most effective is the requirement. It could be highly available. It could be mostly reliable. It could be anything. We have to answer on the basis of that only.",
    "isMulti": false
  },
  {
    "id": 202,
    "qNum": 236,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company uses application load balancer in different AWS region. The ALBs receive inconsistent traffic that can spike and drop throughout the year. The company's networking team need to allow the IP addresses of the ALBs in the on premises firewall to enable connectivity. Which solution is the most scalable with minimal configuration changes?",
    "options": [
      "Option A: Implementation path for A company uses application loa...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. Take your time to guess the correct answer. Let me reveal the correct answer for you. If you still haven't gone through all the options, please pause the video. Option C is correct here. Launch AWS global accelerator. Register the ALBs in different region to the accelerator. Update the on premises firewalls rules to allow a static IP addresses associated with the accelerator. Because using AWS global accelerator, you can have a static IP for whit listing on firewalls. No need to replace ALB with NLB. You can associate these addresses to regional AWS resources or endpoints such as application load balancer or network load balancer. So basically overall in this question what we are doing we are providing a static IP address using global accelerator. So that we are not supposed to change the IP all the time in the firewall of the organization. So option C is absolutely correct here.",
    "isMulti": false
  },
  {
    "id": 203,
    "qNum": 237,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company runs a high performance computing workload on AWS. The workload required low latency network performance and high network throughput with tightly coupled node to node communication. The Amazon EC2 are properly sized for compute and storage capacity and are launched using default options. What should a solution architect propose to improve the performance of the workload?",
    "options": [
      "Option A: Implementation path for A company runs a high performa...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. You have already done this question but the language of the question may be different this time but yeah you should try to answer and hopefully you will be able to answer this question and the correct answer here is option A. Choose a cluster placement group while launching Amazon EC2 instances. because it can improve your network performance and communication much better than any other and the requirement of the question is low latency network performance and high network throughput and it can increase both and with tightly coupled node to node communication. So all these refer to cluster placement group. In case it would have asked for better availability then you should have gone for a spread placement group. A spread placement. So this is the difference between these two.",
    "isMulti": false
  },
  {
    "id": 204,
    "qNum": 238,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company uses a legacy on premise analytics application that operates on gigabytes of dot CSV files and represents months of data. The legacy application cannot handle the growing size of dot CSV files. New CSV files are added daily from various data sources to a central on premises storage. The company want to continue to support the legacy application while users learn AWS analytics services. To achieve this, a solution architect want to maintain two synchronized copies of all the dot CSV files on premises and in Amazon S3. Which solution should the solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company uses a legacy on pre...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. You can go through all the options. Take your time. And the correct answer here will be option B. Deploy an on premises file gateway. Configure data sources to write the CSV files to the file gateway. point the legacy analytics application to the file gateway. The file gateway should replicate the dot CSV file to Amazon S3. And it is correct here because you can't use uh data sync here because you need to schedule task for data sync to do continuous transfer where storage gateway does it automatically. And keyword in the question is synchronized copies. You can have a look here. synchronized copies are required. So option B is absolutely correct here.",
    "isMulti": false
  },
  {
    "id": 205,
    "qNum": 239,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company has a media and application files that need to be shared internally. Users currently are authenticated using Active Directory and access files from a Microsoft Windows platform. The chief executive officer want to keep the same user permissions but want the company to improve the process as the company is reaching its storage capacity limit. What should a solution architect recommend?",
    "options": [
      "Option A: Implementation path for A company has a media and appl...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "And here are the options. And you can try to guess the correct answer. And the correct answer here will be option B. Configure Amazon FSX for Windows file server and move all the media and application files. Whenever you see in the question Microsoft Windows platform just go for Amazon FSX window file server and move all the media and application there. It is the correct answer here.",
    "isMulti": false
  },
  {
    "id": 206,
    "qNum": 240,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 1: SAA-C03 ONE SHOT Marathon (250+ Questions)",
    "videoUrl": "https://youtu.be/rbVhe5gJrZs",
    "question": "A company is developing a web portal. The company want to ensure that only the web portion of the application is publicly accessible. To accomplish this, the VPC was designed with two public subnet and two private subnet. The application will run on several Amazon EC2 instances in an autoscaling group. SSL termination must be offloaded from EC2 instances. What should a solution architect do to ensure these requirements are met?",
    "options": [
      "Option A: Implementation path for A company is developing a web ...",
      "Option B: Optimized architecture meeting all SLA requirements",
      "Option C: Alternative AWS managed service integration",
      "Option D: Multi-AZ decoupled configuration"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "And here are the options. Try to guess the answer. Let me reveal the correct answer for you. And the correct answer here is option C. Configure the application load balancer in the public subnet. Configure the autoscaling group in the private subnet and associate it with the application load balancer because internetf facing application load balancer and classic ELB must be provisioned exclusively in public subnet only. So it is the prime requirement here and due to which option C is correct here because application load balance cannot be in private subnet. So this was all in this video. Thanks for watching this video. Have a great learning and please do subscribe our channel it India.",
    "isMulti": false
  },
  {
    "id": 207,
    "qNum": 10,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Four independent teams must\neach receive every order event. One\nteam's consumer is regularly offline for\nmaintenance windows of up to 2 hours and\nno event may be lost. New consuming\nteams are expected next year.",
    "options": [
      "One SQSQ that all four teams read from.",
      "An SNS topic with the four consumers subscribe directly.",
      "An SNS topic with 4S QSQ subscribed, one per team.",
      "The producer calling each consumers API in sequence."
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "Compare B and C carefully. Both broadcast to four consumers and only C stores. The 2-hour offline window is the detail that makes durability essential.",
    "isMulti": false
  },
  {
    "id": 208,
    "qNum": 11,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A company must retain audit\nlogs in S3 for 7 years. They cannot be\naltered or deleted by anyone including\nthe account root user. A separate bucket\nholds working documents that staff edit\ndaily and the team wants protection\nagainst accidental overrides.",
    "options": [
      "Object log compliance mode for the logs and versioning for the documents.",
      "Object log governance mode for the logs and versioning for the documents.",
      "versioning for the logs and object log compliance mode for the documents.",
      "A bucket policy denying deletes for both."
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Refer to AWS documentation for architecture best practices.",
    "isMulti": false
  },
  {
    "id": 209,
    "qNum": 12,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A batch job processes files\nfor approximately 50 minutes per run and\nexecutes four times daily.\nIt currently runs on an always on EC2\ninstance. The team wants to remove\nserver management and pay only for\nprocessing time. Which solution is most\nappropriate?\nA relight the job as a lambda",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "function\ntriggered by event bridge?\nB. Run the job as a scheduled Farget\ntask. C. Split the job across chained\nlambda functions.\nD. Move the job to a smaller always on\ninstance.\nThe answer is B. 50 minutes rules lambda\nout immediately. Fargate is equally\nserverless, has no execution ceiling,\nand runs only when scheduled.",
    "isMulti": false
  },
  {
    "id": 210,
    "qNum": 13,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "12 EC2 instances run a\nLinux content system. They must all read\nand write the same set of files with\nchanges visible immediately across every\ninstance. The instances span three\navailability zones. Which storage\nservice should be used. A EBS volumes\nwith a synchronization script. B Amazo",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "n\nEFS.\nC FSX for Windows file server. D.\nInstance store volumes.\nThe answer is B. Multiple instances\nneeding simultaneous access to the same\nfiles is the definitive EFS case and\nspanning three availability zones rules\nout anything zone bound.",
    "isMulti": false
  },
  {
    "id": 211,
    "qNum": 14,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A Dynamo DB table is\nthrottling right requests. All items use\na status field with four possible values\nas the partition key. Provision right\ncapacity is more than double the\nmeasured request rate.\nWhat is the cause and fix? A\ninsufficient capacity so increase\nprovision right units. B a",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "hot partition\nso change to a high cardality partition.\nkey. C a missing cache, so add a D A X\ncluster. D a missing index, so add a\nglobal secondary index.\nThe answer is B. Four possible partition\nkey values across a whole table\nconcentrates every right onto a handful\nof partitions.\nCapacity is distributed per partition.\nSo the table throttles while most of its\ncapacity sits unused.",
    "isMulti": false
  },
  {
    "id": 212,
    "qNum": 15,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Streaming sensor readings\nmust be delivered to S3 for later\nanalysis.\nA delay of 1 to 2 minutes is acceptable.\nThe team has no capacity to write or\noperate stream processing code. The data\nmust be converted to park on the way in.",
    "options": [
      "Kinesis data streams with a custom consumer.",
      "Kinesis data fire hose.",
      "Amazon msk with Kafka connect.",
      "Amazon SQS with a Lambda consumer."
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Near realtime tolerance plus no code plus native format conversion is exactly what Firehost provides. Data streams becomes correct only when you need to process or replay records yourself.",
    "isMulti": false
  },
  {
    "id": 213,
    "qNum": 16,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A global audience downloads\nthe same catalog of PDF documents\nrepeatedly over HTTPS.\nUsers far from the origin region report\nslow downloads and outbound data\ntransfer dominates the billing. The\norigin is an S3 bucket that must not\nbecome publicly accessible.",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "The same documents downloaded repeatedly is highly cachable which is CloudFront's case rather than global accelerators. Origin access control is what keeps the bucket private.",
    "isMulti": false
  },
  {
    "id": 214,
    "qNum": 17,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A rendering work upload\nruns on 150 instances for 6 hours each\nnight. Jobs checkpoint every 2 minutes\nand any interrupted work is\nautomatically reassigned.\nThe company wants the largest possible\nsaving. Which purchasing option should\nbe used? A three-year reserved\ninstances. B. Spot ins",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "tances. C. A\none-year compute savings plan. D. On\ndemand with autoscaling.\nThe answer is B. Checkpointing every 2\nminutes with automatic reassignment is\nan explicit statement that interruption\nis tolerable which unlocks spots\ndiscount.",
    "isMulti": false
  },
  {
    "id": 215,
    "qNum": 18,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Instances in private\nsubnets transfer around 60 terabytes per\nmonth to and from S3 in the same region.\nAll rooted through a NAD gateway.\nThe NAD data processing charge is the\nlargest line on the bill. Instances must\nremain private.\nWhat is the most cost effective fix?",
    "options": [
      "A gateway VPC endpoint for S3.",
      "An interface VPC endpoint for S3.",
      "Additional lat gateways per availability zone.",
      "Moving the instances to public subnets."
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Both A and B keep the traffic private and remove the net charge and only the gateway endpoint is free. With the most cost effective qualifier, the free option wins.",
    "isMulti": false
  },
  {
    "id": 216,
    "qNum": 19,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Application logs in S3\nstandard are queried heavily for 14\ndays, occasionally until day 90, then\nretained for 5 years for compliance\nwithout being read. The bucket holds 600\ntab.\nWhich approach is most cost effective?\nA life cycle to standard infrequent\naccess at 14 days and Glacier dee",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "p\narchive at 90 days. B enable intelligent\ntearing on the bucket. C life cycle to\nglacia deep archive at 14 days. D keep\neverything in S3 standard.\nThe answer is a three phases with\nexplicit ages is a life cycle policy\nwritten out in pros. Intelligent taring\nis for when nobody knows the access\npattern which is not the case here.",
    "isMulti": false
  },
  {
    "id": 217,
    "qNum": 20,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "EC2 spending has grown 25% in a year\nwith no traffic increase. The team\nsuspects instances were oversized during\na migration and never revisited. There\nare 600 instances across nine accounts.\nLeadership has asked what to do first.\nWhat should the solutions architect\nrecommend first?",
    "options": [
      "Purchase three-year savings plans covering current usage.",
      "Use compute optimizer to identify overprovisioned instances and right size.",
      "Migrate all workloads to spot instances.",
      "Configure budgets alerts on the accounts."
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "The word first is decisive. Savings plans may well come later, but committing to years of payment for overprovision capacity makes the waste permanent. Always reduce consumption before discounting it. Score yourself out of 20. 14 is roughly the real pass mark. 17 or above means you are comfortably ready and should move on to the second exam after a day or two. 14 to 16 puts you around the line. So rewatch the domain your MS cluster in before continuing. 10 to 13 means two domains need revisiting fully. Below 10, work through the teaching modules again in order. And note that this is a perfectly normal first attempt result. The distribution matters more than the total questions 1 to six for security, 7 to 11 resilience, 12 to 16 performance, and 17 to 20 cost. Three or more misses in one domain tells you exactly what to rewatch. Practice exam two. 20 entirely new questions with the same domain waiting. The distractors in this paper are harder than the first. Several questions are deliberate counterparts to ones you have already seen where a single changed constraint moves the answer. Aim for 14 again and keep track of which domain your Mrs. land in. Question one. A development team must be allowed to create AM roles for their own applications without waiting on the security team. Security must guarantee that no created role can exceed the permissions the developer already holds. The company uses a single account for development. Which feature meets this requirement? A. A service control policy on the development account. B. A permissions boundary on the developers roles. C. Ania M group containing all developers. D. A session policy passed at assume role time. The answer is B. Note the contrast with question two of exam one where a service control policy was correct. There the requirement was accountwide and had to survive local administrators. Here the requirement is about what an individual principle may create which is a permissions boundary. Question two. A company must detect whether any object in its S3 buckets contains payment card numbers or personal identifiers. The buckets were populated by several teams over many years and the file formats vary. An ongoing report is required not a single audit. Which service should be used? A. Amazon Guard Duty. B. Amazon Inspector. C. Amazon Mcki. D. AWS Config with a custom rule. The answer is C. Fix these three by what they examine. Mackey looks inside S3 objects. Inspector looks at workloads and images and guard duty looks at logs. The requirement here is data inside documents which is Mackey's entire purpose. Question three. An application in account. I must read objects from a bucket in account. B. Encrypted with a customer managed KMS key in account. B. The role in A has a get object permission and the bucket policy permits it. request fail with access denied. What is missing? A the KMS key policy in account. B must permit the role in account. A B account A must create a KMS key with the matching alias. C the bucket must be replicated into account. A D KMS encrypted objects cannot be read cross account. The answer is A. The question carefully tells you the object permission was granted twice over through the identity policy and the bucket policy and says nothing about the key. That silence is the clue. Question four. A public web application behind an application load balancer is receiving automated requests attempting cross-sight scripting. Source addresses change constantly. The team also wants to limit each client to 500 requests per 5 minutes. Which solution meets both requirements? A. Network access control list denying the offending source ranges. B. VAF with managed rules and a rate based rule. C. Shield advanced on the load balancer. D. Security groups restricted to known client addresses. The answer is B. Cross-ite scripting is an application layer attack which only Raph can inspect and rate based rules cover the second requirement. Network access control lists operate on addresses and ports and cannot read request content. Question five. A company with 2,000 employees uses Opta as its identity provider. It is growing from three AWS accounts to 30. Staff currently have separate AM users per account and an audit found active users belonging to former employees. Which solution meets this with the least operational overhead? A a hub account holding EIM users with cross account roles elsewhere? B IM identity center federated with Octa. C a Lambda function reconciling a AM users against Octa nightly. D. An account password policy with 90-day rotation. The answer is B. An existing identity provider, a growing account count, and a joiners and levers problem all point at identity center. Option A solves duplication while leaving the life cycle problem the audit actually found. Question six. Compliance requires a record of what every security group looked like on any date in the last 2 years across 50 accounts. Notification is also required when a group allows unrestricted inbound access. The record must include the state before and after each change. Which solution meets these requirements? A cloud trail logs aggregated into a single S3 bucket. B AWS config with an organization aggregator and a config rule with SNS. C VPC flow logs with Cloudatch logs insights. D guard duty with security hub aggregation. The answer is B. The phrase state before and after each change is configuration state over time which only config maintains. Cloud trail would tell you who made the call but not what the group then looked like. Question seven. An Amazon RDS database serves an application comfortably, but a nightly analytics job runs long queries that slow the application badly while it executes. The business has raised no concern about availability and has not experienced a zone failure. What should the solutions architect implement? A. Convert the database to multi-availability zone. B. Create a read replica and point the analytics job at it. C. Increase the instance size by two sizes. D. Take more frequent automated backups. The answer is B. Read the second paragraph. It exists solely to eliminate option. A. The described problem is red load and red scaling is what a replica delivers. Question eight. An application processes messages from an SQS standard Q. Operations report duplicate processing and a small set of malformed messages retrying indefinitely delaying valid work. Processing takes about 50 seconds per message. The visibility timeout is 40 seconds. Which combination fixes both problems? A. Increase the visibility timeout above processing time and add a dead letter Q. B. Convert the queue to FIFO and extend retention. C. Enable long polling and reduce batch size. D. Add more consumers to clear the backlog. The answer is a 50 seconds of processing under a 40-cond timeout means the message becomes visible again 10 seconds before the work completes so another consumer takes it. Fix the cause rather than masking the symptom with FIFO. Question nine. A media workflow runs six sequential steps, some taking hours. Failures must retry three times, then notify an operator and hold a job for inspection. The logic currently lives in a script on an EC2 instance and restarts lose all in-flight jobs. Which service should coordinate this? A. Step functions. B. An SQSQ between each pair of steps. C. Event bridge schedule rules. D. A larger EC2 instance running the script as a service. The answer is A. The requirement list is a feature list for step functions. Option B is the thoughtful wrong answer because cues genuinely would survive restarts but you would be writing the orchestration logic yourself.",
    "isMulti": false
  },
  {
    "id": 218,
    "qNum": 10,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A company runs workloads\nacross 70 accounts using EBS, RDS,\nDynamob and EFS.\nEach team manages its own snapshot\nscripts.\nAn auditor requires proof that every\nproduction resource is backed up under\none retention policy.",
    "options": [
      "AWS backup with plans applied through organizations plus backup audit manager.",
      "Standardize the snapshot scripts and run them centrally.",
      "Enable each services own automated snapshots and export an inventory.",
      "Config rules checking for recent snapshots."
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Four elements together identify AWS backup. Option D is a sensible companion control that reports on a problem it cannot fix which never satisfies a requirement to actually perform the backups.",
    "isMulti": false
  },
  {
    "id": 219,
    "qNum": 11,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A gaming service uses a\ncustom protocol over UDP.\nClient firmware has destination\naddresses compiled in and cannot be\nupdated in the field. Servers run in\nfour regions and traffic must move to a\nhealthy region within seconds of a\nfailure.",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Three independent signals point the same way. Note particularly that compiled in addresses mean the clients never query DNS. That eliminates every DNS-based option regardless of time to live.",
    "isMulti": false
  },
  {
    "id": 220,
    "qNum": 12,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Hundreds of concurrent\nLambda functions each open a connection\nto an Amazon RDS for postgQL database.\nDuring peaks, the database refuses\nconnections and invocations fail. The\nteam must keep the relational database\nand cannot restructure the application.\nFunctions must succeed rather than be\nthrotted.",
    "options": [
      "Reserved concurrency on the Lambda function.",
      "Amazon RDS proxy in front of the database.",
      "Migrate the data to Dynamob.",
      "Add red replicas and spread connections across them."
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Compare this against the module 7 scenario where reserved concurrency was correct. There throttling was acceptable because messages waited in a queue. Here the requirement says functions must succeed which selects pooling instead.",
    "isMulti": false
  },
  {
    "id": 221,
    "qNum": 13,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A machine learning team\ntrains across 50 graphics processor\ninstances reading the same 150 terbte\ndata set held in S3. They need aggregate\nthroughput of hundreds of gigabytes per\nsecond. Copying the data set onto each\ninstance's EBS volume takes hours and\nreading directly from S3 is too slow.",
    "options": [
      "Amazon EFS in general purpose mode.",
      "FSX for luster linked to the S3 bucket.",
      "IO2 block express volumes on each instance.",
      "FSX for Windows file server."
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "The throughput figure is what rules out EFS, which would be right if the requirement was simply shared access. Take stated numbers seriously because hundreds of gigabytes per second is not a generalpurpose file system requirement.",
    "isMulti": false
  },
  {
    "id": 222,
    "qNum": 14,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "and AP I gateway and lambda\nAPI serves 300 partner organizations\none partner's faulty client send 50\ntimes its usual volume exhausting lambda\nconcurrency and degrading the API for\neveryone\nthe company wants per partner limits\nwithout changing application code which\nsolution meets this A",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "reserve\nconcurrency on the lambda function B A I\ngateway way usage plans with per partner\nAPI keys. C W AF rate based rules on the\nAPI. D rate limiting logic inside the\nlambda function.\nThe answer is B. Reserve concurrency\nwould protect the back end while\npunishing the innocent alongside the\noffender because it cannot distinguish\nbetween callers. [snorts] Usage plans\napply limits per API key.",
    "isMulti": false
  },
  {
    "id": 223,
    "qNum": 15,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "An analytics team runs\nabout 400 complex queries daily which\njoins across several large tables and\nexpects dashboards to respond in under 2\nseconds.\nThe data is 15 tab in S3. They currently\nuse Athena and report both slow\ndashboards and ling cost. What should\nthe solutions architect rec",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "ommend? A add\nmore partitions to reduce data scanned\nby Athena. B load the data into Amazon\nRed Shift. C move the data into Dynamob\nwith global secondary indexes.\nD. Run the queries on an EMR cluster\nwith Spark Sequin.\nThe answer is B. 400 complex queries\ndaily with a subsecond dashboard\nexpectation is past what Athena suits at\nthat frequency. A running cluster cost\nless than paying per scan.",
    "isMulti": false
  },
  {
    "id": 224,
    "qNum": 16,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A simulation runs across 96\nEC2 instances that exchange data with\none another continuously throughout each\nrun. Performance is far below\nexpectation and profiling shows the\nbottleneck is inter node network latency\nrather than processor or disk.",
    "options": [
      "Distribute the instances across three availability zones.",
      "Launch them in a cluster placement group with elastic fabric adapter.",
      "Use a spread placement group.",
      "Attach IO2 block express volumes to every instance."
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Option A is the trap because spreading across availability zones has been correct repeatedly elsewhere in this course. Here it would actively hurt since the physical separation that gives independent failure also adds latency.",
    "isMulti": false
  },
  {
    "id": 225,
    "qNum": 17,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A company's steady\nproduction workload costs about $25,000\nmonthly across EC2, Fargate, and Lambda\nand has been stable for 3 years. The\nplatform team expects to migrate several\nservices to Graviton instance families\nand may shift workloads between two\nregions. Which purchasing option is",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "most\nappropriate? A standard reserved\ninstances for the current families. B\nany C2 instance savings plan. C a\ncompute savings plan. D spot instances\nacross the estate.\nThe answer is C. Option B is the\ndifficult distractor. It offers a\nmarginally better rate in exchange for\nlocking to one family in one region and\ncovers neither Fargate nor Lambda.\nWhen a question emphasizes change, take\nthe flexible option.",
    "isMulti": false
  },
  {
    "id": 226,
    "qNum": 18,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A media company stores user\nuploads in S3. A small number become\nvery popular and are accessed constantly\nfor months.\nMost are never opened after the first\nweek and there is no way to predict\nwhich will be which. The company wants\nlower storage cost without risking slow\naccess to any fi",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "le. Which storage class\nshould be used? A standard infrequent\naccess with a life cycle transition at 7\ndays. B intelligent tearing. C onezone\ninfrequent access. D. Glacier flexible\nretrieval.\nThe answer is B. Compare with",
    "isMulti": false
  },
  {
    "id": 227,
    "qNum": 19,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "question\n19 in exam one where the pattern was\ndescribed by age and a life cycle policy\nwas right.\nHere the question states plainly that\nthe pattern cannot be predicted which is\nwhat intelligent taring exists for.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "",
    "isMulti": false
  },
  {
    "id": 228,
    "qNum": 19,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A three- tier application\nspreads its tiers across three\navailability zones. The application tier\nmakes very frequent small calls to the\ndatabase tier producing a large\ncross-zone data transfer charge. The\narchitecture team asked whether they\nshould consolidate into one zone to save\nmon",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "ey. What should the solutions\narchitect advise? A consolidate all\ntiers into a single availability zone. B\nkeep the multiszone design and reduce\nthe call volume through caching or\nbatching.\nC move the database into the application\ntier subnet. D route internal traffic\nthrough a NAD gateway.\nThe answer is B. Options A and C both\ndiscard resilience to save money and C\nis the more dangerous because it sound\nlike a networking optimization. A subnet\nexists in exactly one availability zone.",
    "isMulti": false
  },
  {
    "id": 229,
    "qNum": 20,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Choose to an account shows\nunexplained charges. Investigation finds\n200 unattached EBS volumes, 4,000\nsnapshots going back 5 years, and 20\nunassociated elastic addresses.\nThe team wants to reduce the cost and\nstop it recurring.",
    "options": [
      "Delete the unattached volumes and addresses and use data life cycle manager to expire old snapshots.",
      "convert the unattached volumes from GP2 to GP3.",
      "Use trusted advisor cost optimization checks on an ongoing basis.",
      "Purchase reserved instances to offset the charges. The answers are A and C. The requirement has two halves. Reduce the cost and stop it recurring and choose two questions frequently. Pair an immediate fix with a preventive control. [snorts] Option B optimizes the cost of volumes that should simply be deleted. Score this out of 20, then compare it against exam one rather than reading it alone. An improvement of three or more means your revision is working. The same score with different questions wrong suggest patchy recall rather than a domain gap. So review the confusion pays module. The same questions wrong price is a genuine knowledge gap in that area and you should rewatch that domain properly. A lower score usually means fatigue or rushing rather than lost knowledge. So sit the third exam rest it rather than straight away. The domain split is the same as before. Questions 1 to six security 7 to 11 resilience 12 to 16 performance and 17 to 20 cost. Practice exam three same waiting again but this paper leans harder on two things. The real exam uses two separate candidates. Choose two questions where answering half earns nothing and judgment questions where the most impressive option is wrong. 14 is still the target. Question one. An external audit firm with its own AWS account needs read access to one S3 bucket for a 6 week engagement. The auditors already have AM identities in their account. Access must end automatically and the company will not create or manage identities for them. Which solution is most appropriate? A create AM users for each auditor and issue access keys. B create a role in the company account trusting the auditor's account. C enable public read access on the bucket for the engagement. D generate presigned URLs for every object each morning."
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Presign URLs are a legitimate technique for granting temporary access to a few specific objects with no AM identity, but ongoing access to an entire bucket calls for a role. Question two, an existing unencrypted Amazon RDS for MySQL production database must be encrypted at rest. A customer managed key is required so that key usage can be audited. The team asks whether encryption can be enabled during the next maintenance window. What should the solutions architect tell them? A. Enable encryption on the existing instance in a maintenance window. B. Snapshot the instance. Copy the snapshot with encryption and restore it. C. Create an encrypted read replica and promote it. D. Enable encryption on the underlying EBS volumes. The answer is B. This is one of the few places where straight memorization is right. The same three-step pattern applies to unencrypted EBS volumes as well. Question three, choose two. A company must prevent any account in its organization from creating resources outside to approved regions. Must also be alerted if an existing resource is found outside them. Several accounts have their own administrators. Which combination meets both requirements? A. A service control policy denying actions outside the approved regions. B. A config rule detecting resources outside the approved regions. C. A m policies on every user and role denying other regions. D. A cloudatch alarm on the accounts billing metric. The answers are A and B. Elsewhere in this course, detective answers have been wrong because the requirement said prevent. Here the question asked for both prevention and detection. So both controls are needed. Read the stem carefully rather than applying the rule mechanically. Question four. Database credentials for an Amazon RDS instance must rotate every 30 days with no downtime and no manual steps. The team has no capacity to write or maintain rotation code. The credentials are currently in an environment variable. Which solution meets these requirements? A. Secrets manager with manage rotation for RDS. B. Parameter store secure string with a scheduled lambda rotation function. C. An encrypted S3 object read at application startup. D. AKMS encrypted environment variable redeployed monthly. The answer is A. The sentence about having no capacity to write rotation code exists to eliminate option. B. That is otherwise a perfectly workable architecture and many teams run it. Question five. A company's public website suffered a 2-hour outage when its TLS certificate expired. The certificate was bought externally, installed by hand, and the renewal reminder went to an employee who had left. The company wants this to be impossible in future at the lowest cost. The site is served through CloudFront. What should the solutions architect recommend? A. Buy a three-year certificate and add a shared calendar reminder. B. Request a public certificate from certificate manager. C. Use private certificate authority to issue the certificate. D. Store the certificate in secrets manager with rotation enabled. The answer is B. Certificate manager. Public certificates are free when used with CloudFront and renew automatically. Option C sounds more managed and more secure while failing on both public trust and cost. Question six. 18 BPCs across two regions are connected by a mesh of 21 peering connections. Adding a 19th VPC would require many new connections and some teams report that certain VPC pairs cannot reach each other. The networking team spends most of its time maintaining root tables. Which solution reduces this complexity? A. Complete the peering mesh with the missing connections. B. Replace the mesh with transit gateway peered across regions. C. Consolidate all workloads into one VPC per region. D. Replace peering with private link between every VPC pair. The answer is B. Notice how the question describes non-transitive peering through its symptoms rather than naming it. Recognizing a property from its symptoms is a skill this exam rewards throughout. Question seven. A stateless web tier runs across three availability zones in an autoscaling group. The team proposes an active active second region at roughly double the cost to improve availability. The application has had three outages in two years all caused by faulty deployments rather than infrastructure failure. What should the solutions architect advise? A. Proceed. since multi-reion is the highest availability design. B advise that a second region would not have prevented any of the outages and improve the deployment process. C add a fourth availability zone instead. D. Replace autoscaling with reserved capacity. The answer is B. All three outages came from faulty deployments and a faulty deployment replicates to every region you run in. Option A would have produced two identical broken regions at twice the price. Question eight. An internal reporting system is busy between 7 and 9 each weekday morning and idle otherwise. Instances take about 8 minutes to boot and warm caches. With target tracking on processor utilization, users report the first half hour each morning is slow. What is the most appropriate change? A. Lower the target tracking threshold. B. Add shadow scaling to raise capacity before 7. C. Run at maximum capacity continuously. D. Replace the group with one larger instance. The answer is B. Eight minutes of warm-up against a reactive policy is exactly the half hour of slowness reported. Scheduled scaling puts capacity in place before demand arrives. Question nine. A global software product must stay available if an entire region fails, tolerate only seconds of data loss, and require no manual intervention. Users are in Europe, North America, and Asia with latency complaints from Asia. The data store is DynamoB and budget for multi-reion is approved. Which approach best meets these requirements? A DynamoB global tables with the application deployed in three regions. B Dynamob with point in time recovery and nightly cross region backups. C. Dynamob in one region with DAX clusters in the others. D. Dynamob with a read replica in each region. The answer is A. The course has warned repeatedly against reaching for multi-reion. So note what makes it right here. The question explicitly requires surviving a region failure, allows only seconds of loss, forbids manual intervention, and approves the budget.",
    "isMulti": false
  },
  {
    "id": 230,
    "qNum": 10,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A disaster recovery plan\nclaims a two-hour recovery time\nobjective based on restoring snapshots\ninto a second region and running cloud\nformation templates. It has never been\ntested. A tabletop exercise found the\ntemplates reference a machine image that\nexists only in the primary region and\nnobody knows how long a restore takes.\nWhat should the solutions architect\nrecommend first?",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "The two R objective is not a measured property of the system. It is a hope. Testing both validates it and finds the other faults that the tabletop exercise suggests are waiting.",
    "isMulti": false
  },
  {
    "id": 231,
    "qNum": 11,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A company is migrating a\nlegacy system to AWS over 6 months. Both\nthe old and new systems must run live\nwith traffic shifting gradually in 10%\nincrements.\nThey need to monitor error rates after\neach shift and revert instantly if\nproblems appear.\nWhich route 53 routing policy supports\nth",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "is? A failover routing? B. We waited\nrouting. C latency based routing. D\nmultivalue answer routing.\nThe answer is B. The routing policy\nalways follows from what the split is\nbased on. And here it is a proportion\nyou control which is weighted routing.",
    "isMulti": false
  },
  {
    "id": 232,
    "qNum": 12,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A company runs 20\nmicroservices in containers on\nself-managed EC2 hosts.\nThe platform team spends most of its\ntime patching hosts, planning cluster\ncapacity, and handling scaling.\nTraffic is steady and modest. The\ncompany does not use Kubernetes.",
    "options": [
      "Amazon EKS with managed node groups.",
      "Amazon ECS with the Fargate launch type.",
      "Amazon ECS on EC2 with autoscaling.",
      "Lambda container images."
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "The clause about not using Kubernetes exists to eliminate option A. Option C is the near miss because autoscaling addresses only one of the three tasks the team actually spends its time on.",
    "isMulti": false
  },
  {
    "id": 233,
    "qNum": 13,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A read heavy product\ncatalog on Amazon RDS is at 85%\nprocessor utilization during business\nhours. 95% of queries request the same\n3,000 popular items. The application\nteam can change the code and wants to\nreduce database load.\nWhat is the most effective change? A add\nAmazon Elastic Edge and catch the\npopular queries. B. Add a Dynamo DB\naccelerator cluster. C. Enable multi\navailability zone so the standby serves\nreads. D. Migrate the catalog to Amazon\nRed Shift.\nThe answer is",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Refer to AWS documentation for architecture best practices.",
    "isMulti": false
  },
  {
    "id": 234,
    "qNum": 14,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A retailer ingests point of\nsale events. A fraud engine must react\nwithin 2 seconds. An inventory service\nconsumes the same events. An analytics\nteam periodically reprocesses the last 7\ndays after changing its logic. No\nconsumer may miss an event.",
    "options": [
      "Kinesis data fire host delivering to S3.",
      "Kinesis data streams.",
      "A single S QS standard Q.",
      "SNS with email subscriptions."
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Three requirements each eliminate a different option and reprocessing the last 7 days is the decisive one because replay requires retained rereadable records.",
    "isMulti": false
  },
  {
    "id": 235,
    "qNum": 15,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A video rendering workload\nwrites large temporary files during each\njob and reads them back within the same\njob. The files are discarded when the\njob ends.\nThe chosen instance type includes local\nNVME storage. The team currently writes\nto provisioned IOPS EBS and finds it\nslow and expensive. What should the\nsolutions architect recommend?",
    "options": [
      "Write temporary files to the instance store volumes.",
      "Increase the provisioned IOPS on the EBS volume.",
      "Write temporary files to Amazon EFS.",
      "Write temporary files to S3 with transfer acceleration."
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Instance store is usually wrong because data disappears on stock and candidates learn to avoid it. This question inverts that by making the data genuinely temporary.",
    "isMulti": false
  },
  {
    "id": 236,
    "qNum": 16,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A 4 TBTE Oracle database\nmust move to Amazon Aurora post gray\nSQL. The application must keep running\nwith a cuta window of 15 minutes.\nThe schema uses Oracle specific data\ntypes and stored procedures with no\ndirect postsql equivalent.\nWhich combination should be used? A\ndatabase migration service with the\nschema conversion tool and ongoing\nreplication.\nB export via Snowball and import into\nAurora.\nC. Take an Oracle dump, restore into\nAurora, then switch over. D. Use data\nsync to copy the database files.\nThe answer is",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Refer to AWS documentation for architecture best practices.",
    "isMulti": false
  },
  {
    "id": 237,
    "qNum": 17,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "NAP.\nI receives around 600 requests per day\narriving unpredictably. It runs on two\ncontinuously running instances behind a\nload balancer.\nEach request completes in under 3\nseconds. The team wants lower cost and\nis willing to change the deployment\nmodel.\nWhich architecture is most cost\ne",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "ffective? A reserved instances for the\ntwo existing instances. B A P I gateway\nwith Lambda. C. One smaller instance\nwithout the load balancer.\nD. Farget tasks running continuously\nbehind the load balancer.\nThe answer is B. 600 requests a day at\nunder 3 seconds. Each means the\ninstances are idle for over 99% of the\ntime. Options A, C, and D all reduce the\ncost of running something continuously\nwhile B stops running anything\ncontinuously.",
    "isMulti": false
  },
  {
    "id": 238,
    "qNum": 18,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Choose two. A company\ngenerates intermediate processing files\nin S3. A downstream job reads them\nwithin hours and they are never needed\nafterwards, but nobody deletes them. The\nbucket holds 300 TB.\nThe files can be regenerated from source\ndata at any time.",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "Refer to AWS documentation for architecture best practices.",
    "isMulti": false
  },
  {
    "id": 239,
    "qNum": 19,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A development team runs 60\nEC2 instances for testing. Engineers\nwork 9 until 6:00 on weekdays and the\ninstances run continuously.\nManagement wants cost reduction without\naffecting engineers during business\nhours and without any long-term\ncommitment. Which approach delivers the\nlargest s",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "aving? A one year reserved\ninstances for the 60 instances. B a\nscheduled stop and start outside working\nhours. C move the instances to spot. D.\nRight size the instances one size\nsmaller.\nThe answer is B. A week has 168 hours\nand the working window is 45. So the\ninstances are idle for about 73% of the\nweek. Stopping them removes almost 3/4\nof the bill immediately.",
    "isMulti": false
  },
  {
    "id": 240,
    "qNum": 20,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A company running 180\nworkloads across 22 accounts wants\nregular identification of idle load\nbalancers underutilized instances\nunassociated elastic addresses. Service\nlimits being approached. They will not\nbuild custom tooling and they have\nenterprise support. Which service should\nbe used? A trusted adviser. B cost\nexplorer. C. The well architected tool.\nD. Cloudatch dashboards.\nThe answer is",
    "options": [
      "The mention of service limits is decisive because limits are one of trusted advisor's five check categories and no other option covers them. The enterprise support detail confirms the full check set is available. You now have three scores and the trend matters more than any one of them. 15 or above and rising means you are ready. So keep exam 4 as a final check nearer your booking. A consistent score in the low to mid teens without improvement means solid but not comfortable. The fix is to target the specific question types you keep missing rather than re-watching everything. If choose two questions are your weak point, you are likely answering half of them. So reread every stem for the number of answers required. And if judgment questions catch you, revisit modules 5, 6, and 17 because the most impressive option is frequently wrong. A flat line across three papers means changing how you revise rather than revising more. The final practice exam. Sit this one close to your booking rather than immediately after the third because its real value is as a readiness check. 20 new questions, same waiting. At the end, we will look at reading the trend across all four papers and deciding whether you are ready to book. Question one, choose two. Application servers in private subnets must download operating system patches from the internet and read objects from an S3 bucket in the same region. Nothing on the internet may initiate a connection to them and the S3 traffic must not traverse the internet. Which combination meets these requirements? A a NAT gateway in a public subnet with a route from the private subnets. B a gateway VPC C endpoint for S3 in the private subnets route tables. C an internet gateway route added to the private subnets. D. Public addresses assigned to the application servers. The answers are A and",
      "Two distinct requirements each need their own component. Outbound only internet access is a NAD gateway and keeping S3 traffic of the internet is a gateway endpoint. Options C and D both make the servers reachable from outside. Question two, choose to. A security team must be notified whenever an AM policy granting full administrative access is attached to any principle in any of 40 accounts. They also want a record of who attached it and when. Which combination meets both requirements? A. AWS config with a rule detecting overly permissive policies. aggregated organizationwide. B. Cloud trail with an organization trail delivering to a central S3 bucket.",
      "Macy scanning AM policy documents.",
      "Public addresses assigned to the application servers. The answers are A and B. Two distinct requirements each need their own component. Outbound only internet access is a NAD gateway and keeping S3 traffic of the internet is a gateway endpoint. Options C and D both make the servers reachable from outside. Question two, choose to. A security team must be notified whenever an AM policy granting full administrative access is attached to any principle in any of 40 accounts. They also want a record of who attached it and when. Which combination meets both requirements? A. AWS config with a rule detecting overly permissive policies. aggregated organizationwide. B. Cloud trail with an organization trail delivering to a central S3 bucket. C. Macy scanning AM policy documents. D. VPC C flow logs with a metric filter. The answers are A and B. This is the config and cloud trail pair once more. Config evaluates state and can notify on non-compliance while cloud trail supplies the identity and time stamp behind each change. Question three. A specific range of addresses has been sending malicious traffic to a subnet. It must be blocked regardless of any security group configuration. The block must apply to every instance in that subnet. Which control should be used? A. A security group rule denying the address range. B. A network access control list rule denying the range on the subnet. C. An AM policy condition on the source address. D. A route table entry black holeing the range."
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Security groups are allow only. So blocking a specific address range is the one job that requires a network access control list. The phrase regardless of security group configuration also points at the subnet boundary. Question four, choose to. A company wants CloudFront to serve content from an S3 bucket. The bucket itself must never be publicly accessible and only the distribution may read it. Content must be served through the company's own domain name over HTTPS. Which combination should be configured? A origin access control on the distribution with a bucket policy permitting only that distribution. B an ACM public certificate for the custom domain associated with the distribution. C S3 static website hosting with public read access. D assigned URL generated for every object request. The answers are A and B. Origin access control is what reconciles global delivery with a completely private bucket. A certificate manager certificate provides HTTPS on the custom domain at no charge. Question five. An organization must ensure that cloud trail logging cannot be stopped or deleted by anyone in any of its accounts including local account administrators. The security team currently receives an alert when logging stops and reenables it by hand. Which solution meets the requirement? A. A config rule with automatic remediation in each account. B. A service control policy denying cloud trail stop and delete actions. C. An AM policy attached to every principle denying those actions. D. A cloudatch alarm notifying the security team faster. The answer is B. Two options here, detect and respond, and both leave a window where logging is off. The word cannot is about capability rather than how quickly you notice. So, the answer must be preventive. Question six, a financial services firm requires that encryption keys be generated and stored in single tenant hardware. That hardware must meet a specific FIPS level and be under the firm's exclusive control. Regulation does not permit shared key infrastructure. Which service should be used? A. KMS with a customer managed key. B cloud HSM. C. KMS with imported key material. D. Secrets manager with automatic rotation. The answer is B. Cloud HSM appears rarely and its signal is narrow. Dedicated single tenant hardware or a specific FIPS validation level named in the question. Option C is the near miss because importing key material still leaves it in shared infrastructure. Question seven. A photo sharing application must generate a thumbnail, scan for prohibited content, and update a search index whenever an image is uploaded. Three separate teams own these. The scanning service is offline for maintenance most Sunday nights, and no upload event may be lost. Which architecture meets these requirements? A. S3 events to an SNS topic with the three services subscribed directly. B. S3 events to an SNS topic with three SQSQ subscribed. C. S3 events to a single SQSQ read by all three services. D. The upload service calling each of the three in sequence. The answer is B. Compare A and B carefully because that pair is the whole question. Both broadcast to three consumers and only B stores. The Sunday night maintenance window is the detail that makes durability essential. Question eight. A business runs a relational workload. A region failure must cause no more than a few seconds of data loss and no more than a few minutes of downtime. Budget has been approved for continuously running infrastructure in a second region. Which approach is most appropriate? A backup and restore from cross region snapshots? B pilot light with core services switched off. C warm standby with an Aurora global database. D nightly database dumps copied to the second region. The answer is C. Elsewhere, the course has warned against overengineering. So note what makes warm standby correct here. A recovery time of a few minutes is tighter than pilot light achieves and the question explicitly approves budget for continuously running infrastructure. Question n. An application uses an autoscaling group behind an application load balancer across two availability zones. During a zone impairment, the surviving zones instances became overwhelmed and the service degraded. The group's minimum is four instances, two per zone, and scaling took several minutes to react. Which change would most improve resilience? A spread across three availability zones and size capacity to survive losing one. B. Increase the maximum capacity of the existing group. C. Add a second application load balancer. D. Move to a single larger instance per zone. The answer is a. The arithmetic is the point. With two zones, losing one removes half your capacity and with three, it removes a third. Combined with sizing for that loss, you stop depending on scaling that takes minutes to react.",
    "isMulti": false
  },
  {
    "id": 241,
    "qNum": 10,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A company must keep a copy\nof critical S3 data in a second region\nfor disaster recovery.\nMust be able to prove to auditors that\nevery object has been replicated.\nObjects are added continuously\nthroughout the day.",
    "options": [
      "S3 cross region replication with versioning enabled and replication metrics.",
      "A nightly data sync task copying the bucket.",
      "A life cycle policy transitioning objects to the second region.",
      "S3 transfer acceleration to the destination bucket."
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Two details are worth noting. Versioning is required on both buckets for application to work at all. Life cycle policies change storage class rather than region which makes option C a description of something that does not exist.",
    "isMulti": false
  },
  {
    "id": 242,
    "qNum": 11,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "An order service writes to\na queue consumed by a fulfillment\nservice. A recent deployment bug caused\nmalformed messages that the consumer\ncannot parse. Those messages are\nretrieded endlessly, blocking valid\norders behind them. The team needs valid\norders to keep flowing and wants to\ninspect the failures afterwards. What\nshould be configured?\nA a dead letter Q with a maximum receive\ncount. B. A longer message retention\nperiod.\nC. A FOQ to guarantee ordering. D. A\nshorter visibility timeout.\nThe answer is",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Refer to AWS documentation for architecture best practices.",
    "isMulti": false
  },
  {
    "id": 243,
    "qNum": 12,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A company must run 40,000\nindependent analysis jobs each week.\nJobs take between 15 minutes and 8\nhours. Some need graphics processor\ninstances and some must wait for an\nearlier job to finish. Custom scripts\ncurrently manage queuing and\nprovisioning and frequently leave\ninstances running after jobs complete.",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "The word independent is the discriminator against EMR which spreads one job across a cluster. Batch runs many separate jobs each on its own compute and terminates it afterwards.",
    "isMulti": false
  },
  {
    "id": 244,
    "qNum": 13,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Click stream events arrive\nat 40,000 records per second and must be\nwritten to S3 in park format. A delay of\na minute or two is acceptable. The team\nwill not write or operate stream\nprocessing code.",
    "options": [
      "Kinesis data streams with a lambda consumer.",
      "Kinesis data fire hose with format conversion.",
      "Amazon msk with a Kafka connect S3 sync.",
      "SQS with a Lambda function batching rights."
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Two phrases. Select fire hose. A minute or two being acceptable rules out the need for real time. No stream processing code rules out every option requiring a consumer you maintain.",
    "isMulti": false
  },
  {
    "id": 245,
    "qNum": 14,
    "domain": "Design High-Performing Architectures",
    "domainId": 3,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "An on premises imaging\napplication must read and write to a\nlocal file share for performance.\nThe authoritative copy of the data lives\nin S3 where cloud analytics uses it. The\nsite cannot hold the full archive\nlocally, but staff must open recent\nfiles immediately.",
    "options": [
      "Data sync on an hourly schedule.",
      "Storage gateway in file gateway mode.",
      "Amazon EFS mounted over a VPN.",
      "Snowball Edge kept permanently on site."
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Data sync and storage gateway are frequently confused and the separation is clean. Data sync moves data and then it is done. Storage gateway provides continuing hybrid access with local caching.",
    "isMulti": false
  },
  {
    "id": 246,
    "qNum": 15,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A logistics company must\nmove 90 terabytes of archives to S3. The\nsite has a 200 megabit per second\ninternet connection shared with daily\noperations and it cannot be saturated.\nThe migration must finish within 3\nweeks. Which approach should be used?\nA data sync over the existing\nconnect",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "ion. B snowball edge devices. C S\nthree transfer acceleration with\nmulti-art upload. D order a direct\nconnect circuit and transfer over it.\nThe answer is B. 200 megabits per second\nis about 25 megabytes per second,\nroughly 2 terabytes a day at full rate.\n90 terabytes therefore needs about 45\ndays of a saturated link against a\n21-day deadline.",
    "isMulti": false
  },
  {
    "id": 247,
    "qNum": 16,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "12 EC. Two instances must\nshare a Windows 5 system with Active\nDirectory integration and SMB access.\nThe application is a legacy Windows\nproduct that cannot be modified.\nWhich storage service should be used? A\nAmazon EFS, B. FSX for Windows file\nserver,\nC. FSX for Luster,\nD. Amazon S3 w",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "ith a mounted file\ninterface.\nThe answer is B. The P keywords Windows,\nSMB, and Active Directory together\nidentify FSX for Windows file server.\nEFS is the Linux equivalent rather than\nan alternative. Here,",
    "isMulti": false
  },
  {
    "id": 248,
    "qNum": 17,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "question 17. A public web application\nruns an autoscaling group between 10 and\n80 instances. 10 are required at all\ntimes and the rest scale with\nunpredictable demand. The application is\nstateless and instances can be replaced\nat any time. The company wants lower\ncost with the service continuously\na",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "vailable. Which approach is most cost\neffective? A run all instances on spot.\nB cover the 10 baseline instances with a\nsavings plan and use spot above that. C.\nPurchase reserved instances for 80\ninstances.\nD. Run everything on demand.\nThe answer is B.\nThe question deliberately describes two\ndistinct parts of the workload and they\nhave different pricing answers. Reserve\nor commit to the floor and run the\nunpredictable surge on spot.",
    "isMulti": false
  },
  {
    "id": 249,
    "qNum": 18,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A company must retain\nseismic survey data for 30 years to\nsatisfy regulation. Less than half a\npercent is ever retrieved and when it is\na weight of up to a day is acceptable.\nThe archive is 1 and a half pabytes and\nthe priority is the lowest possible\nstorage cost.",
    "options": [
      "Glacia flexible retrievven. Retrieven.",
      "Glacier deep archive.",
      "Standard infrequent access.",
      "Glacia instant retrievven."
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Up to a day of tolerance plus lowest storage cost. as the stated priority points at deep archive. Option A is the near miss for anyone who reads quickly since minutes to hours would justify flexible retrieval and a full day justifies deep archive.",
    "isMulti": false
  },
  {
    "id": 250,
    "qNum": 19,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A finance team cannot\nexplain why the S3 bill has risen\nsteadily across 80 buckets in 16\naccounts. There is no inventory of what\neach bucket holds or how it is accessed.\nThey want to understand where the cost\nis concentrated before changing\nanything. What should the solutions\narchitect",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "recommend? A apply intelligent\ntearing to every bucket immediately.\nB enable storage length with the\nadvanced tier across the organization.\nC. Set a life cycle policy on every\nbucket transitioning to Glacier at 30\ndays. D. Enable versioning to track\nobject changes.\nThe answer is B. Read what the team asks\nfor which is to understand where cost is\nconcentrated before changing anything.\nThat is a visibility requirement and\noption D would actively increase the\nbill.",
    "isMulti": false
  },
  {
    "id": 251,
    "qNum": 20,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Choose two. A company's\nmonthly bill rose by $14,000 with no\nknown change. Leadership wants to know\nwhich service account and resource\ncaused it. Wants automatic notification\nif it recurs. Wants raw line item data\nfor their own analysts. They have no\nexisting cost tooling configured. Which\ncombination meets these requirements?\nA cost explorer to investigate plus cost\nanomaly detection for future alerts. B.\nThe cost and usage report delivered to\nS3 and queried with Athena. C. A budget\nset at last month's total. D. Config\nrecording resource changes.\nThe answers are A and B.\nCompare option C against anomaly\ndetection.\ncarefully because both alert. A budget\nfires when a fixed figure is crossed. So\ngradual growth to just below it never\nalerts.\nAnomaly detection fires when the pattern\nitself is unusual.\nYou now have four scores and their shape\nmatters more than any single number.\nRising and finishing at 16 or above\nmeans book the exam. Flat in the mid-\nteens means passing is plausible but not\ncomfortable. So target your weakest\ndomain specifically rather than\nre-watching everything.\nRising but finishing at 13 or 14 means\nthe trend is right and the level is not\nthere yet. So give it another week of\nfocused work. And scores swinging by\nfour or more between papers usually\nindicate reading speed rather than\nmissing knowledge. So practice the\nfive-step routine from module 17. One\nhonest caveat,\npractice scores tend to run slightly\nhigh because these questions were\nwritten alongside the course you have\njust watched. Leave yourself a margin\nabove 14 before booking.\nOne last thought to take with you.\nNobody walks into this exam knowing\neverything and you do not need to. What\nseparates people who pass from people\nwho do not is the ability to read a\nscenario. Find the sentence that\neliminates two options. Apply the\nqualifier to what remains.\nThat is a skill. You have now practiced\nit across 80 questions and it will carry\nyou through services you have never\nseen. Good luck.\nFive things for exam day. Read the last\nline of every question first because the\nqualifier is what your answer is judged\nagainst. Never leave a blank since there\nis no penalty for a wrong answer.\nflag and move on at about 90 seconds,\naiming to finish the first pass in a 100\nminutes. Trust your first reading unless\nyou can articulate a specific reason to\nchange it. And remember that 15\nquestions are unscored lives, so an\nunreasonably obscure question may simply\nnot count.\nThat is the course complete.\n18 modules, AP original practice\nquestions, and every scenario written\nfrom scratch rather than borrowed. Good\nluck with the exam.\nThe fifth and final practice exam. Same\ndomain waiting as the others, but this\npaper draws more heavily on modules 13,\n14, and 15, the monitoring, migration,\nand identity material.\nIf you sat the first four before\nwatching those modules, this is the\npaper that tells you whether the newer\ncontent has landed.\nQuestion one, choose two. A consumer\napplication will have around 5 million\nregistered users who sign in with email\nor a social provider.\nUsers must also upload files directly\nfrom the browser to a private S3 bucket,\neach restricted to their own folder. No\nfile may pass through an application\nserver.",
    "options": [
      "A cognto user pool for signin and social federation.",
      "A cognto identity pool issuing temporary credentials mapped to a scoped AM role.",
      "An AM user created for each registered customer.",
      "A publicly writable S3 bucket with postupload validation. The answers are A and B. Two requirements each map to one half of Cognito. Signing 5 million customers in is a user pool and letting the browser call S3 directly requires AWS credentials which only an identity pool issues. Question two. A security team must be paged automatically when the string root login appears more than three times in 10 minutes across an application's Cloudatch log group. Nobody should have to run a query to discover this. Which approach meets this requirement? A. A. A Cloudatch logs metric filter with an alarm and SNS. B. A. Logs insights query run on a schedule. C. Messy scanning the log group. D. Config with a custom rule."
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "A pattern in log text becoming a metric is the metric filter. A count over a window is the alarm and paging is SNS. Logs insights is for a human investigating and it cannot trigger an alarm. Question three. Employees must sign in to a new internal web application on EC2 behind an application load balancer using their existing corporate identity provider. The team does not want to implement authentication logic in the application and does not want a second set of passwords. Which approach meets this requirement? A load balancer authentication against a cognto user pool federated to the corporate provider. B E AM users for each employee with access keys. C a cognto identity pool with guest access enabled. B. Employee password stored in secrets manager. The answer is a. The feature people miss is that an application load balancer can perform authentication itself. So unauthenticated requests never reach your instances and the application contains no sign-in code at all. Question four. 200 EC2 instances across 14 accounts must be patched monthly with evidence of compliance. No inbound ports may be opened and no SSH keys distributed. Instances run both Linux and Windows. Which solution meets these requirements? A. Systems Manager, patch manager with maintenance windows. B. A baston host running a configuration management tool monthly. C. Config rules reporting on patch compliance. D. Rebuilding every instance monthly from a flesh machine image. The answer is a. The agent connects outbound so nothing opens inbound. Option C repeats a pattern from throughout the course where a detective control cannot satisfy a requirement to actually perform the work. Question five. An insurer receives 60,000 scanned claim forms monthly with varying layouts. It needs the policy number, claim value, and claimment name loaded into a database. The team will not train a machine learning model. Which service should be used? A recognition? B. Textract. C. Comprehend. D. Sage Maker with a custom model. The answer is B. Recognition and text both take images which is why they are confused. Recognition returns detected strings without knowing which value is the claim amount while text returns form fields as key and value pairs. Question six. Regulation requires encryption keys to be generated and held in dedicated single tenant hardware under the company's exclusive control. Shared key infrastructure is not permitted. Which service should be used? A KMS with a customer managed key. B KMS with imported key material. C cloud HSM. D Secrets manager. The answer is C. Option B is the near miss because importing your own key material sounds like exclusive control. The material still lives in shared KMS infrastructure which the regulation rules out. Question seven. An on call team is paged whenever any single instance in a large autoscaling group breaches its processor alarm. The group replaces it automatically and the service stays healthy. They want paging only when high processor utilization coincides with the load balancer reporting unhealthy targets. What should be configured? A a composite alarm combining both alarms with a logical a b a higher processor alarm threshold. C more evaluation periods on the alarm. D. Notifications routed to an unsubscribed SNS topic. The answer is A. Options B and C. Both reduce noise by reducing sensitivity to genuine problems. and the exam consistently treats suppressing a signal as worse than refining it. Question eight. A checkout page was broken for 50 minutes overnight by a faulty third party script. Instances were healthy. Cloudatch metrics were normal and the server returned pages successfully. Nobody noticed until customers complained. Which solution would detect this in future? A a Cloudatch synthetics canary running the checkout journey. B a Cloudatch alarm on load balancer request count. C detailed monitoring on the web instances. D a metric filter on the web server access logs. The answer is a. Every option except A monitors infrastructure and infrastructure was healthy throughout. Only a canary exercises the actual journey a customer takes. Question nine. A disaster recovery plan claims a 3-hour recovery time objective based on restoring snapshots into a second region. It has never been tested and a tabletop exercise found the templates reference resources that do not exist there. Nobody knows how long a restore actually takes. What should the solutions architect recommend first? A. Upgrade to warm standby. B. Run a full disaster recovery test to measure the actual recovery time and fix what it reveals. C. Copy the missing resources and consider the plan complete. D. Increase snapshot frequency. The answer is B. The 3-hour figure is not a measured property of the system. Testing both validates it and finds the faults the tabletop exercise suggests are waiting.",
    "isMulti": false
  },
  {
    "id": 252,
    "qNum": 10,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A Nike report is triggered\nby a Chrome job on a small EC2 instance.\nThat instance exists only to invoke a\nlambda function at 3:00 in the morning.\nThe [snorts] instance was terminated\naccidentally and report stopped silently\nfor 2 weeks. What should replace the\nchrome job? A an event bridge schedule\nrule invoking the function. B a second\ninstance running the same chrome job. C\nan autoscaling group with a minimum of\none instance. D a cloudatch alarm\ntriggering the function.\nThe answer is",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Refer to AWS documentation for architecture best practices.",
    "isMulti": false
  },
  {
    "id": 253,
    "qNum": 11,
    "domain": "Design Resilient Architectures",
    "domainId": 2,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A company's backup software writes to a\nphysical tape library reaching end of\nlife.\nReplacing the software would need\nretraining and revalidation the business\nwill not fund. Backups should be stored\ndurably in AWS instead.\nWhich solution should be used?\nA storage gateway in tape gateway mode.\nB storage gateway in file gateway mode.\nC. AWS backup against the on- premises\nservers. D. Data sync copying tape\ncontains Nike.\nThe answer is",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Refer to AWS documentation for architecture best practices.",
    "isMulti": false
  },
  {
    "id": 254,
    "qNum": 12,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Requests through a nine\nservice microservices chain occasionally\ntakes 7 seconds while most finish in\nunder one.\nEvery individual service reports\nresponse times within its normal range.\nThe team cannot determine where the time\nis spent.",
    "options": [
      "X-ray with tracing across the services.",
      "Cloudatch logs insights across all log groups.",
      "Cloudatch detailed monitoring on each service.",
      "VP. C. Flow logs between the services."
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Refer to AWS documentation for architecture best practices.",
    "isMulti": false
  },
  {
    "id": 255,
    "qNum": 13,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "An operations team wants\nalerts when memory utilization exceeds\n85% on a fleet of EC2 instances. They\ncannot find a memory metric in\nCloudatch. They ask whether a third\nparty tool is required.\nWhat should the solutions architect tell\nthem?",
    "options": [
      "Enable detailed monitoring to expose memory metrics.",
      "Install the Cloudatch agent to publish memory as a custom metric.",
      "Memory cannot be monitored without a third party tool.",
      "Derive memory pressure from processor credit balance."
    ],
    "answer": 1,
    "answerLetter": "B",
    "explanation": "Option A catches almost everyone who half remembers this because detailed monitoring sounds like it would give more detail. Memory and file system usage live inside the operating system which AWS cannot see.",
    "isMulti": false
  },
  {
    "id": 256,
    "qNum": 14,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A mobile app must push live\nupdates to all connected devices within\na second. Let each screen request only\nthe fields it needs. Work offline with\nsynchronization on reconnect. The team\ndoes not want to operate websocket\nservers. Which service should be used? A\napp sync.\nB. AP. High gateway rest. AP is with\nclient polling. C. An application load\nbalancer with EC2 websocket servers. D S\nN S mobile mobile push.\nThe answer is",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Refer to AWS documentation for architecture best practices.",
    "isMulti": false
  },
  {
    "id": 257,
    "qNum": 15,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Factory control software\nmust respond to equipment within 5\nmilliseconds and regulation requires\nproduction data never to leave the site.\nThe company wants consistent AWS RP is\nacross its estate. Which solution meets\nthese requirements? A outpost in the\ncompany's data center. B. A local zone\nin the nearest city. C. Wavelength in\nthe local fifth generation network. D.\nThe nearest region with direct connect.\nThe answer is",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Refer to AWS documentation for architecture best practices.",
    "isMulti": false
  },
  {
    "id": 258,
    "qNum": 16,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Choose two. A contact\ncenter must produce searchable\ntranscripts of recorded calls and\nidentify which calls contain customer\nfrustration. The company will not build\nor train models. Which combination meets\nthese requirements?\nA transcribe on the recordings.\nB. Comprehend on the transcri",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "pts. C.\nPoly on the recordings. D. Recognition\non the recordings.\nThe answers are A and B. A two-stage\npipeline that appears repeatedly.\nFix the direction firmly.\nTranscribe is audio in, text out.\nPoly is text in, audio out.",
    "isMulti": false
  },
  {
    "id": 259,
    "qNum": 17,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A company plans to migrate\n500 servers within 5 months.\nApplications are stable. The business\nwill not fund code changes during the\nmove and speed is the priority. A\nconsultant proposes refactoring\neverything to containers as part of the\nmigration.\nWhat should the solutions architect\nadvise?",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "The question is not saying containers are a bad idea. It tests whether you match the strategy to the stated constraints rather than to what is architecturally fashionable.",
    "isMulti": false
  },
  {
    "id": 260,
    "qNum": 18,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A migration assessment\ncovers 600 servers. 80. Run\napplications. No department claims with\nno login in two years and no traffic\nbeyond monitoring. The migration budget\nis under pressure.",
    "options": [
      "Retire them.",
      "Rehost them onto the smallest instances available.",
      "Retain them on premises until an owner appears.",
      "Replatform them onto managed services."
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Retire is easy to overlook because it feels like a non-answer and here the evidence is stacked deliberately. No owner, no login, no traffic.",
    "isMulti": false
  },
  {
    "id": 261,
    "qNum": 19,
    "domain": "Design Secure Architectures",
    "domainId": 1,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "Choose to a team stores\napplication logs from 400 instances in\nCloudatch logs. Log groups were created\nyears ago and retention was never\nconfigured. The finance team has queried\na steadily growing Cloudatch bill. Audit\nrequires 12 months of logs.",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 2,
    "answerLetter": "C",
    "explanation": "Refer to AWS documentation for architecture best practices.",
    "isMulti": false
  },
  {
    "id": 262,
    "qNum": 20,
    "domain": "Design Cost-Optimized Architectures",
    "domainId": 4,
    "source": "Video 2: SAA-C03 Full Course (Practice Exams & Scenarios)",
    "videoUrl": "https://www.youtube.com/watch?v=YDxTIgENyjw",
    "question": "A retailer wants\npersonalized product recommendations\nfrom 3 years of customer browsing and\npurchase history. The team has no\nmachine learning specialists and wants\nresults within weeks. Which service\nshould be used? A personalize.\nB. Forecast.\nC. Sage Maker with a custom model.\nThe answer is",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 0,
    "answerLetter": "A",
    "explanation": "Refer to AWS documentation for architecture best practices.",
    "isMulti": false
  }
];
