+++
title = "AWS - NORMAL: NovaTech - Stateful web server"
date = 2025-03-06 16:49:52
draft = false
categories = ["Computer Science", "Cloud Computing"]
+++

{{% callout "warning" %}}
- 比賽有 DB 了話，先用 VPC，接著做 DB
- VPC 在還沒跑完前，不可以把頁面切走，只能另開分頁做
- 如果 VPC 中途被切掉，要砍掉重做
{{% /callout %}}

1. 先用 VPC 開起虛擬網路

接著照著題目要求做

```yaml
Name: NovaTech-vpc
IPv4 CIDR b1ock: 10.0.0.0/24
IPv6 CIDR block: No IPv6 CIDR block
Number of Availability Zones (AZs): 2
Number of public subnets: 2
Number of private subnets: 2
Public subnet CIDR block in us-east-1a: 10.0.0.0/27
Public subnet CIDR block in us-east-1b: 10.0.0.32/27
Private subnet CIDR block in us-east-1a: 10.0.0.64/27
Private subnet CIDR block in us-east-1b: 10.0.0.96/27
NAT gateways: In 1 AZ
VPC endpoints: None
```

2. 用 EC2 做 InternalAPI

```yaml
Name: InternalAPI
AMI: Amazon Linux 2023 AMI
Architecture: 64-bit (x86)
Instance type: t2.micro
VPC: NovaTech-vpc
Subnet: NovaTech-subnet-private1
Primary IP: 10.0.0.87 # Don't forget to set this!
Auto-assign public IP: Disable
Security group:
  Name: InternalAPI-sg
  Description: A1low HTTP (80/tcp） port from 10.0.0.0/24
```
user data
```bash
#!/bin/bash
sudo yum install python3-pip -y
wget https://cis-training-assets.s3.us-east-1.amazonaws.com/novatech/internal.zip
unzip internal.zip
cd internal/
pip3 install -r requirements.txt
sudo cp internal_server.service /etc/systemd/system/internal_server.service
sudo systemctl daemon-reload
sudo systemctl enable internal_server.service
sudo systemctl start internal_server.service
sudo systemctl status internal_server.service
```

{{% callout "warning" %}}
- 要注意 Primary IP 在 Advanced network configuration 下拉選單裡面
- user data 最後面要記得多一行換行
{{% /callout %}}

3. 接著用 EC2 做 Flask Web Server (Template)

```yaml
Launch template: WebServerTemplate
AMI: Amazon Linux 2023 AMI
Architecture: 64-bit (x86)
Instance type: t2.micro
VPC: NovaTech-vpc
Subnet: NovaTech-subnet-public1
Auto-assign public IP: Enable
Security group:
	Name: Web-sg
	Description: Allow HTTP (80/tcp) port from 10.0.0.0/24
```

user data
```bash
#!/bin/bash
sudo yum install python3-pip -y
wget https://cis-training-assets.s3.us-east-1.amazonaws.com/novatech/web.zip
unzip web.zip
cd web/
pip3 install -r requirements.txt
sudo cp web_server.service /etc/systemd/system/web_server.service
sudo systemctl daemon-reload
sudo systemctl enable web_server.service
sudo systemctl start web_server.service
sudo systemctl status web_server.service
```