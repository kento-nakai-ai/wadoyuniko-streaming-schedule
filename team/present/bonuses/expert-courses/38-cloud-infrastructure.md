# 特典38: クラウド・インフラスキル完全マスターガイド

## 🎯 概要
AI駆動開発におけるクラウド・インフラスキルを網羅的に習得するための実践的ガイド。AWS、Azure、GCPの主要サービスから、Kubernetes、Docker、Infrastructure as Codeまで、現代的なクラウドネイティブ開発に必要なスキルを体系的に学習できます。

## 📋 学習目標
- [ ] クラウドサービスの基礎概念を理解する
- [ ] AWS/Azure/GCPの主要サービスを習得する
- [ ] Dockerコンテナ技術をマスターする
- [ ] Kubernetesでのオーケストレーションを実践する
- [ ] Infrastructure as Code (IaC)を実装する
- [ ] CI/CDパイプラインを構築する
- [ ] モニタリングとログ管理を実装する
- [ ] セキュリティとコンプライアンスを確保する

## 🚀 Phase 1: クラウド基礎とAWS入門

### 1.1 クラウドコンピューティング基礎

```python
import boto3
import json
from datetime import datetime, timedelta
import pandas as pd
import matplotlib.pyplot as plt

class CloudFoundations:
    """
    クラウドコンピューティングの基礎概念と実装
    """
    
    def __init__(self):
        self.cloud_services = {
            'compute': ['EC2', 'Lambda', 'ECS', 'EKS'],
            'storage': ['S3', 'EBS', 'EFS', 'Glacier'],
            'database': ['RDS', 'DynamoDB', 'Redshift', 'ElastiCache'],
            'networking': ['VPC', 'CloudFront', 'Route53', 'ELB'],
            'security': ['IAM', 'KMS', 'Secrets Manager', 'WAF'],
            'monitoring': ['CloudWatch', 'X-Ray', 'CloudTrail', 'Config']
        }
    
    def explain_cloud_models(self):
        """クラウドサービスモデルの説明"""
        models = {
            'IaaS': {
                'description': 'Infrastructure as a Service',
                'examples': ['AWS EC2', 'Azure VMs', 'GCP Compute Engine'],
                'control_level': 'OS, Runtime, Middleware, Data, Applications',
                'use_cases': ['Legacy migration', 'Development environments', 'Custom configurations']
            },
            'PaaS': {
                'description': 'Platform as a Service',
                'examples': ['AWS Elastic Beanstalk', 'Azure App Service', 'Google App Engine'],
                'control_level': 'Data, Applications',
                'use_cases': ['Web applications', 'API development', 'Rapid prototyping']
            },
            'SaaS': {
                'description': 'Software as a Service',
                'examples': ['Salesforce', 'Office 365', 'Google Workspace'],
                'control_level': 'Configuration only',
                'use_cases': ['Business applications', 'Collaboration', 'End-user services']
            }
        }
        
        for model, details in models.items():
            print(f"\n=== {model} ({details['description']}) ===")
            print(f"制御レベル: {details['control_level']}")
            print(f"例: {', '.join(details['examples'])}")
            print(f"用途: {', '.join(details['use_cases'])}")
        
        return models
    
    def aws_service_overview(self):
        """AWS主要サービス概要"""
        for category, services in self.cloud_services.items():
            print(f"\n=== {category.upper()} ===")
            for service in services:
                print(f"  • {service}")
        
        # サービス選択ガイド
        selection_guide = {
            'compute': {
                'EC2': 'フルコントロールが必要な場合',
                'Lambda': 'サーバーレス、イベント駆動',
                'ECS': 'Dockerコンテナ管理',
                'EKS': 'Kubernetes管理'
            },
            'storage': {
                'S3': 'オブジェクトストレージ、静的サイト',
                'EBS': 'EC2用ブロックストレージ',
                'EFS': 'NFSファイルシステム',
                'Glacier': '長期アーカイブ'
            },
            'database': {
                'RDS': 'リレーショナルDB管理',
                'DynamoDB': 'NoSQL、高パフォーマンス',
                'Redshift': 'データウェアハウス',
                'ElastiCache': 'インメモリキャッシュ'
            }
        }
        
        print("\n=== サービス選択ガイド ===")
        for category, services in selection_guide.items():
            print(f"\n{category.upper()}:")
            for service, use_case in services.items():
                print(f"  {service}: {use_case}")

class AWSHandsOn:
    """
    AWS実践ハンズオン
    """
    
    def __init__(self, region='us-east-1'):
        # 注意: 実際のAWSクレデンシャルが必要
        # self.session = boto3.Session(region_name=region)
        # self.ec2 = self.session.client('ec2')
        # self.s3 = self.session.client('s3')
        # self.lambda_client = self.session.client('lambda')
        
        # デモ用の模擬実装
        self.region = region
        self.mock_resources = {}
        
    def mock_ec2_operations(self):
        """EC2操作のデモ実装"""
        print("=== EC2インスタンス管理 ===")
        
        # インスタンス起動の例
        instance_config = {
            'ImageId': 'ami-12345678',  # Amazon Linux 2
            'InstanceType': 't3.micro',
            'MinCount': 1,
            'MaxCount': 1,
            'SecurityGroupIds': ['sg-12345678'],
            'SubnetId': 'subnet-12345678',
            'UserData': '''#!/bin/bash
yum update -y
yum install -y docker
systemctl start docker
systemctl enable docker
usermod -a -G docker ec2-user
'''
        }
        
        print("インスタンス設定:")
        for key, value in instance_config.items():
            print(f"  {key}: {value}")
        
        # 実際のコード例
        ec2_code = '''
# 実際のEC2インスタンス起動コード
response = ec2.run_instances(**instance_config)
instance_id = response['Instances'][0]['InstanceId']
print(f"インスタンス起動: {instance_id}")

# インスタンス一覧取得
response = ec2.describe_instances()
for reservation in response['Reservations']:
    for instance in reservation['Instances']:
        print(f"ID: {instance['InstanceId']}, State: {instance['State']['Name']}")

# インスタンス停止
ec2.stop_instances(InstanceIds=[instance_id])
'''
        
        print("\n実装例:")
        print(ec2_code)
        
        return instance_config
    
    def mock_s3_operations(self):
        """S3操作のデモ実装"""
        print("\n=== S3バケット管理 ===")
        
        s3_operations = {
            'bucket_creation': '''
# バケット作成
bucket_name = 'my-unique-bucket-name'
s3.create_bucket(Bucket=bucket_name)
''',
            'file_upload': '''
# ファイルアップロード
s3.upload_file('local_file.txt', bucket_name, 'remote_file.txt')

# メタデータ付きアップロード
s3.upload_file(
    'data.csv',
    bucket_name,
    'data/data.csv',
    ExtraArgs={
        'Metadata': {'source': 'analytics', 'version': '1.0'},
        'ContentType': 'text/csv'
    }
)
''',
            'file_download': '''
# ファイルダウンロード
s3.download_file(bucket_name, 'data/data.csv', 'local_data.csv')

# オブジェクト一覧
response = s3.list_objects_v2(Bucket=bucket_name, Prefix='data/')
for obj in response.get('Contents', []):
    print(f"Key: {obj['Key']}, Size: {obj['Size']}")
''',
            'lifecycle_policy': '''
# ライフサイクルポリシー設定
lifecycle_config = {
    'Rules': [
        {
            'ID': 'TransitionRule',
            'Status': 'Enabled',
            'Transitions': [
                {
                    'Days': 30,
                    'StorageClass': 'STANDARD_IA'
                },
                {
                    'Days': 90,
                    'StorageClass': 'GLACIER'
                }
            ]
        }
    ]
}
s3.put_bucket_lifecycle_configuration(
    Bucket=bucket_name,
    LifecycleConfiguration=lifecycle_config
)
'''
        }
        
        for operation, code in s3_operations.items():
            print(f"\n{operation}:")
            print(code)
        
        return s3_operations
    
    def mock_lambda_function(self):
        """Lambda関数のデモ実装"""
        print("\n=== Lambda関数管理 ===")
        
        # Lambda関数コード例
        lambda_code = '''
import json
import boto3
from datetime import datetime

def lambda_handler(event, context):
    """
    S3イベント処理用Lambda関数
    """
    s3 = boto3.client('s3')
    
    # S3イベントから情報抽出
    for record in event['Records']:
        bucket = record['s3']['bucket']['name']
        key = record['s3']['object']['key']
        
        print(f"Processing file: {bucket}/{key}")
        
        # ファイル処理ロジック
        try:
            # オブジェクト情報取得
            response = s3.head_object(Bucket=bucket, Key=key)
            file_size = response['ContentLength']
            
            # メタデータ更新
            s3.copy_object(
                Bucket=bucket,
                Key=key,
                CopySource={'Bucket': bucket, 'Key': key},
                Metadata={
                    'processed': 'true',
                    'processed_at': datetime.now().isoformat(),
                    'file_size': str(file_size)
                },
                MetadataDirective='REPLACE'
            )
            
            return {
                'statusCode': 200,
                'body': json.dumps(f'Successfully processed {key}')
            }
            
        except Exception as e:
            print(f"Error processing {key}: {str(e)}")
            return {
                'statusCode': 500,
                'body': json.dumps(f'Error processing {key}')
            }
'''
        
        # Lambda設定
        lambda_config = {
            'FunctionName': 's3-file-processor',
            'Runtime': 'python3.9',
            'Role': 'arn:aws:iam::123456789012:role/lambda-execution-role',
            'Handler': 'lambda_function.lambda_handler',
            'Code': {'ZipFile': lambda_code.encode()},
            'Timeout': 300,
            'MemorySize': 512,
            'Environment': {
                'Variables': {
                    'LOG_LEVEL': 'INFO'
                }
            }
        }
        
        print("Lambda関数設定:")
        for key, value in lambda_config.items():
            if key != 'Code':
                print(f"  {key}: {value}")
        
        print("\nLambda関数コード:")
        print(lambda_code)
        
        # イベントトリガー設定
        trigger_config = '''
# S3イベントトリガー設定
s3.put_bucket_notification_configuration(
    Bucket='my-bucket',
    NotificationConfiguration={
        'LambdaConfigurations': [
            {
                'Id': 'ProcessNewFiles',
                'LambdaFunctionArn': 'arn:aws:lambda:us-east-1:123456789012:function:s3-file-processor',
                'Events': ['s3:ObjectCreated:*'],
                'Filter': {
                    'Key': {
                        'FilterRules': [
                            {
                                'Name': 'prefix',
                                'Value': 'uploads/'
                            },
                            {
                                'Name': 'suffix',
                                'Value': '.csv'
                            }
                        ]
                    }
                }
            }
        ]
    }
)
'''
        
        print("\nイベントトリガー設定:")
        print(trigger_config)
        
        return lambda_config

# 使用例
cloud_foundations = CloudFoundations()
cloud_models = cloud_foundations.explain_cloud_models()
cloud_foundations.aws_service_overview()

aws_demo = AWSHandsOn()
ec2_config = aws_demo.mock_ec2_operations()
s3_operations = aws_demo.mock_s3_operations()
lambda_config = aws_demo.mock_lambda_function()
```

### 1.2 VPCとネットワーキング

```python
class NetworkArchitecture:
    """
    VPCとネットワーキング設計
    """
    
    def __init__(self):
        self.vpc_design = {}
        self.security_groups = {}
        self.routing_tables = {}
    
    def design_vpc_architecture(self):
        """VPCアーキテクチャ設計"""
        vpc_design = {
            'vpc': {
                'cidr_block': '10.0.0.0/16',
                'enable_dns_hostnames': True,
                'enable_dns_support': True
            },
            'subnets': {
                'public_subnet_1a': {
                    'cidr_block': '10.0.1.0/24',
                    'availability_zone': 'us-east-1a',
                    'map_public_ip_on_launch': True
                },
                'public_subnet_1b': {
                    'cidr_block': '10.0.2.0/24',
                    'availability_zone': 'us-east-1b',
                    'map_public_ip_on_launch': True
                },
                'private_subnet_1a': {
                    'cidr_block': '10.0.3.0/24',
                    'availability_zone': 'us-east-1a',
                    'map_public_ip_on_launch': False
                },
                'private_subnet_1b': {
                    'cidr_block': '10.0.4.0/24',
                    'availability_zone': 'us-east-1b',
                    'map_public_ip_on_launch': False
                }
            },
            'internet_gateway': {
                'attached_to_vpc': True
            },
            'nat_gateway': {
                'subnet': 'public_subnet_1a',
                'elastic_ip': True
            }
        }
        
        print("=== VPCアーキテクチャ設計 ===")
        print(f"VPC CIDR: {vpc_design['vpc']['cidr_block']}")
        print("\nサブネット設計:")
        for subnet_name, config in vpc_design['subnets'].items():
            subnet_type = "パブリック" if config['map_public_ip_on_launch'] else "プライベート"
            print(f"  {subnet_name} ({subnet_type}): {config['cidr_block']} - {config['availability_zone']}")
        
        # Terraform設定例
        terraform_vpc = '''
# VPC作成
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true
  
  tags = {
    Name = "main-vpc"
  }
}

# インターネットゲートウェイ
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id
  
  tags = {
    Name = "main-igw"
  }
}

# パブリックサブネット
resource "aws_subnet" "public_1a" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "us-east-1a"
  map_public_ip_on_launch = true
  
  tags = {
    Name = "public-subnet-1a"
  }
}

# プライベートサブネット
resource "aws_subnet" "private_1a" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.3.0/24"
  availability_zone = "us-east-1a"
  
  tags = {
    Name = "private-subnet-1a"
  }
}

# NATゲートウェイ用Elastic IP
resource "aws_eip" "nat" {
  domain = "vpc"
  
  tags = {
    Name = "nat-eip"
  }
}

# NATゲートウェイ
resource "aws_nat_gateway" "main" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public_1a.id
  
  tags = {
    Name = "main-nat"
  }
}
'''
        
        print("\nTerraform設定例:")
        print(terraform_vpc)
        
        self.vpc_design = vpc_design
        return vpc_design
    
    def design_security_groups(self):
        """セキュリティグループ設計"""
        security_groups = {
            'web_server_sg': {
                'description': 'Security group for web servers',
                'ingress_rules': [
                    {
                        'protocol': 'tcp',
                        'port': 80,
                        'source': '0.0.0.0/0',
                        'description': 'HTTP access from internet'
                    },
                    {
                        'protocol': 'tcp',
                        'port': 443,
                        'source': '0.0.0.0/0',
                        'description': 'HTTPS access from internet'
                    },
                    {
                        'protocol': 'tcp',
                        'port': 22,
                        'source': '10.0.0.0/16',
                        'description': 'SSH access from VPC'
                    }
                ],
                'egress_rules': [
                    {
                        'protocol': 'all',
                        'port': 'all',
                        'destination': '0.0.0.0/0',
                        'description': 'All outbound traffic'
                    }
                ]
            },
            'database_sg': {
                'description': 'Security group for database servers',
                'ingress_rules': [
                    {
                        'protocol': 'tcp',
                        'port': 3306,
                        'source_sg': 'web_server_sg',
                        'description': 'MySQL access from web servers'
                    },
                    {
                        'protocol': 'tcp',
                        'port': 22,
                        'source_sg': 'bastion_sg',
                        'description': 'SSH access from bastion'
                    }
                ],
                'egress_rules': [
                    {
                        'protocol': 'tcp',
                        'port': 80,
                        'destination': '0.0.0.0/0',
                        'description': 'HTTP for package updates'
                    },
                    {
                        'protocol': 'tcp',
                        'port': 443,
                        'destination': '0.0.0.0/0',
                        'description': 'HTTPS for package updates'
                    }
                ]
            },
            'load_balancer_sg': {
                'description': 'Security group for load balancer',
                'ingress_rules': [
                    {
                        'protocol': 'tcp',
                        'port': 80,
                        'source': '0.0.0.0/0',
                        'description': 'HTTP from internet'
                    },
                    {
                        'protocol': 'tcp',
                        'port': 443,
                        'source': '0.0.0.0/0',
                        'description': 'HTTPS from internet'
                    }
                ]
            }
        }
        
        print("=== セキュリティグループ設計 ===")
        for sg_name, config in security_groups.items():
            print(f"\n{sg_name}:")
            print(f"  説明: {config['description']}")
            print("  インバウンドルール:")
            for rule in config['ingress_rules']:
                source = rule.get('source', rule.get('source_sg', 'N/A'))
                print(f"    {rule['protocol']}:{rule['port']} <- {source}")
        
        # Terraform設定例
        terraform_sg = '''
resource "aws_security_group" "web_server" {
  name        = "web-server-sg"
  description = "Security group for web servers"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "web-server-sg"
  }
}
'''
        
        print("\nTerraform設定例:")
        print(terraform_sg)
        
        self.security_groups = security_groups
        return security_groups
    
    def network_monitoring_setup(self):
        """ネットワークモニタリング設定"""
        monitoring_config = {
            'vpc_flow_logs': {
                'log_destination': 'CloudWatch Logs',
                'traffic_type': 'ALL',  # ACCEPT, REJECT, ALL
                'log_format': '${srcaddr} ${dstaddr} ${srcport} ${dstport} ${protocol} ${packets} ${bytes} ${start} ${end} ${action}'
            },
            'cloudwatch_metrics': [
                'NetworkIn',
                'NetworkOut',
                'NetworkPacketsIn',
                'NetworkPacketsOut'
            ],
            'alarms': [
                {
                    'name': 'HighNetworkUtilization',
                    'metric': 'NetworkIn',
                    'threshold': 1000000000,  # 1GB
                    'comparison': 'GreaterThanThreshold',
                    'evaluation_periods': 2
                }
            ]
        }
        
        print("=== ネットワークモニタリング ===")
        print(f"VPCフローログ: {monitoring_config['vpc_flow_logs']['traffic_type']}")
        print(f"送信先: {monitoring_config['vpc_flow_logs']['log_destination']}")
        print(f"監視メトリクス: {', '.join(monitoring_config['cloudwatch_metrics'])}")
        
        # CloudFormation テンプレート例
        cloudformation_template = '''
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "VPCFlowLog": {
      "Type": "AWS::EC2::FlowLog",
      "Properties": {
        "ResourceType": "VPC",
        "ResourceId": {"Ref": "VPC"},
        "TrafficType": "ALL",
        "LogDestinationType": "cloud-watch-logs",
        "LogGroupName": "/aws/vpc/flowlogs"
      }
    },
    "NetworkAlarm": {
      "Type": "AWS::CloudWatch::Alarm",
      "Properties": {
        "AlarmName": "HighNetworkUtilization",
        "AlarmDescription": "Alert when network utilization is high",
        "MetricName": "NetworkIn",
        "Namespace": "AWS/EC2",
        "Statistic": "Average",
        "Period": 300,
        "EvaluationPeriods": 2,
        "Threshold": 1000000000,
        "ComparisonOperator": "GreaterThanThreshold"
      }
    }
  }
}
'''
        
        print("\nCloudFormationテンプレート例:")
        print(cloudformation_template)
        
        return monitoring_config

# 使用例
network_arch = NetworkArchitecture()
vpc_design = network_arch.design_vpc_architecture()
security_groups = network_arch.design_security_groups()
monitoring_config = network_arch.network_monitoring_setup()
```

## 🐳 Phase 2: Dockerコンテナ技術

### 2.1 Docker基礎から実践

```python
import os
import subprocess

class DockerMastery:
    """
    Docker技術の習得
    """
    
    def __init__(self):
        self.docker_commands = {}
        self.dockerfiles = {}
        self.compose_files = {}
    
    def docker_fundamentals(self):
        """Docker基礎概念"""
        concepts = {
            'コンテナ': 'アプリケーションとその依存関係をパッケージ化した軽量な実行環境',
            'イメージ': 'コンテナの設計図。読み取り専用のテンプレート',
            'Dockerfile': 'イメージを構築するための命令ファイル',
            'レジストリ': 'イメージを保存・共有するためのサービス (Docker Hub等)',
            'ボリューム': 'データの永続化とコンテナ間での共有メカニズム',
            'ネットワーク': 'コンテナ間の通信を管理する仕組み'
        }
        
        print("=== Docker基礎概念 ===")
        for concept, description in concepts.items():
            print(f"{concept}: {description}")
        
        # 基本コマンド集
        basic_commands = {
            'イメージ管理': [
                'docker images                    # イメージ一覧',
                'docker pull nginx               # イメージダウンロード',
                'docker build -t myapp .         # イメージ構築',
                'docker rmi myapp                # イメージ削除'
            ],
            'コンテナ管理': [
                'docker ps                       # 実行中コンテナ一覧',
                'docker ps -a                    # 全コンテナ一覧',
                'docker run -d nginx             # コンテナ起動',
                'docker stop container_id        # コンテナ停止',
                'docker rm container_id          # コンテナ削除'
            ],
            'コンテナ操作': [
                'docker exec -it container bash  # コンテナ内でコマンド実行',
                'docker logs container_id        # ログ確認',
                'docker cp file container:/path  # ファイルコピー',
                'docker inspect container_id     # コンテナ詳細情報'
            ]
        }
        
        print("\n=== 基本コマンド ===")
        for category, commands in basic_commands.items():
            print(f"\n{category}:")
            for command in commands:
                print(f"  {command}")
        
        return concepts, basic_commands
    
    def create_python_app_dockerfile(self):
        """Pythonアプリケーション用Dockerfile"""
        dockerfile_content = '''# Pythonアプリケーション用Dockerfile
FROM python:3.9-slim

# 作業ディレクトリ設定
WORKDIR /app

# システムパッケージ更新とツール追加
RUN apt-get update && apt-get install -y \\
    gcc \\
    && rm -rf /var/lib/apt/lists/*

# 依存関係ファイルをコピー
COPY requirements.txt .

# Python依存関係インストール
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションコードをコピー
COPY . .

# 非特権ユーザー作成
RUN useradd --create-home --shell /bin/bash app \\
    && chown -R app:app /app
USER app

# ポート公開
EXPOSE 8000

# ヘルスチェック
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
    CMD curl -f http://localhost:8000/health || exit 1

# アプリケーション起動
CMD ["python", "app.py"]
'''
        
        # requirements.txt例
        requirements_content = '''flask==2.3.2
gunicorn==21.2.0
redis==4.6.0
psycopg2-binary==2.9.7
prometheus_client==0.17.1
'''
        
        # サンプルアプリケーション
        app_content = '''from flask import Flask, jsonify
import redis
import os
from prometheus_client import Counter, generate_latest

app = Flask(__name__)

# Redis接続
redis_client = redis.Redis(
    host=os.getenv('REDIS_HOST', 'localhost'),
    port=int(os.getenv('REDIS_PORT', 6379)),
    db=0
)

# Prometheusメトリクス
REQUEST_COUNT = Counter('http_requests_total', 'Total HTTP requests')

@app.route('/')
def hello():
    REQUEST_COUNT.inc()
    try:
        visits = redis_client.incr('visits')
        return jsonify({
            'message': 'Hello from Docker!',
            'visits': visits
        })
    except:
        return jsonify({
            'message': 'Hello from Docker!',
            'visits': 'Redis unavailable'
        })

@app.route('/health')
def health():
    return jsonify({'status': 'healthy'})

@app.route('/metrics')
def metrics():
    return generate_latest()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=False)
'''
        
        print("=== Dockerfile作成例 ===")
        print(dockerfile_content)
        print("\n=== requirements.txt ===")
        print(requirements_content)
        print("\n=== サンプルアプリケーション ===")
        print(app_content)
        
        # マルチステージビルドの例
        multistage_dockerfile = '''# マルチステージビルド例
# ビルドステージ
FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# 本番ステージ
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
'''
        
        print("\n=== マルチステージビルド例 ===")
        print(multistage_dockerfile)
        
        self.dockerfiles['python_app'] = dockerfile_content
        return dockerfile_content
    
    def create_docker_compose(self):
        """Docker Compose設定"""
        compose_content = '''version: '3.8'

services:
  # Webアプリケーション
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    environment:
      - REDIS_HOST=redis
      - REDIS_PORT=6379
      - DATABASE_URL=postgresql://user:password@db:5432/myapp
    depends_on:
      - redis
      - db
    volumes:
      - ./logs:/app/logs
    restart: unless-stopped
    networks:
      - app-network

  # Redis キャッシュ
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped
    networks:
      - app-network

  # PostgreSQL データベース
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    restart: unless-stopped
    networks:
      - app-network

  # Nginx リバースプロキシ
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - web
    restart: unless-stopped
    networks:
      - app-network

  # Prometheus モニタリング
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/etc/prometheus/console_libraries'
      - '--web.console.templates=/etc/prometheus/consoles'
    networks:
      - app-network

  # Grafana ダッシュボード
  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana
    networks:
      - app-network

volumes:
  postgres_data:
  redis_data:
  prometheus_data:
  grafana_data:

networks:
  app-network:
    driver: bridge
'''
        
        # Nginx設定
        nginx_config = '''events {
    worker_connections 1024;
}

http {
    upstream web_backend {
        server web:8000;
    }

    server {
        listen 80;
        server_name localhost;

        location / {
            proxy_pass http://web_backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        location /health {
            access_log off;
            proxy_pass http://web_backend/health;
        }
    }
}
'''
        
        # Prometheus設定
        prometheus_config = '''global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'web-app'
    static_configs:
      - targets: ['web:8000']
    metrics_path: '/metrics'
    scrape_interval: 5s

  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
'''
        
        print("=== Docker Compose設定 ===")
        print(compose_content)
        print("\n=== Nginx設定 ===")
        print(nginx_config)
        print("\n=== Prometheus設定 ===")
        print(prometheus_config)
        
        # Docker Composeコマンド例
        compose_commands = [
            'docker-compose up -d              # バックグラウンドで起動',
            'docker-compose down               # 停止・削除',
            'docker-compose logs web           # 特定サービスのログ',
            'docker-compose exec web bash      # サービス内でコマンド実行',
            'docker-compose ps                 # サービス状態確認',
            'docker-compose pull               # イメージ更新',
            'docker-compose build web          # 特定サービスをビルド'
        ]
        
        print("\n=== Docker Composeコマンド ===")
        for command in compose_commands:
            print(f"  {command}")
        
        self.compose_files['full_stack'] = compose_content
        return compose_content
    
    def docker_best_practices(self):
        """Dockerベストプラクティス"""
        best_practices = {
            'イメージ最適化': [
                'マルチステージビルドを使用してイメージサイズを削減',
                '.dockerignoreファイルで不要なファイルを除外',
                '軽量なベースイメージ（alpine等）を使用',
                'レイヤーキャッシュを活用するために命令順序を最適化',
                '1つのRUNコマンドで複数の操作をまとめる'
            ],
            'セキュリティ': [
                '非特権ユーザーでアプリケーションを実行',
                'シークレット情報を環境変数で管理',
                '定期的にベースイメージを更新',
                '不要なパッケージをインストールしない',
                'イメージの脆弱性スキャンを実施'
            ],
            '運用': [
                'ヘルスチェックを設定',
                'ログを標準出力に出力',
                'シグナルハンドリングを適切に実装',
                'リソース制限を設定',
                'タグを適切に管理（latest避ける）'
            ]
        }
        
        print("=== Dockerベストプラクティス ===")
        for category, practices in best_practices.items():
            print(f"\n{category}:")
            for practice in practices:
                print(f"  • {practice}")
        
        # 最適化されたDockerfile例
        optimized_dockerfile = '''# 最適化されたDockerfile例
FROM python:3.9-slim as base

# ビルド時引数
ARG BUILD_DATE
ARG VERSION
ARG VCS_REF

# メタデータ
LABEL org.opencontainers.image.created=$BUILD_DATE \\
      org.opencontainers.image.version=$VERSION \\
      org.opencontainers.image.revision=$VCS_REF \\
      org.opencontainers.image.title="My Python App" \\
      org.opencontainers.image.description="Optimized Python application"

# システム依存関係（1つのレイヤーで）
RUN apt-get update && apt-get install -y --no-install-recommends \\
    gcc \\
    && rm -rf /var/lib/apt/lists/* \\
    && apt-get clean

# Python依存関係（分離してキャッシュ効率向上）
COPY requirements.txt /tmp/
RUN pip install --no-cache-dir --upgrade pip \\
    && pip install --no-cache-dir -r /tmp/requirements.txt \\
    && rm /tmp/requirements.txt

# アプリケーションユーザー作成
RUN useradd --create-home --shell /bin/bash --uid 1000 app

# 作業ディレクトリとアプリコード
WORKDIR /app
COPY --chown=app:app . /app/

# 非特権ユーザーに切り替え
USER 1000

# ポート公開
EXPOSE 8000

# ヘルスチェック
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')"

# アプリケーション起動
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]
'''
        
        print("\n=== 最適化されたDockerfile ===")
        print(optimized_dockerfile)
        
        return best_practices

# 使用例
docker_master = DockerMastery()
concepts, commands = docker_master.docker_fundamentals()
dockerfile = docker_master.create_python_app_dockerfile()
compose_config = docker_master.create_docker_compose()
best_practices = docker_master.docker_best_practices()
```

### 2.2 コンテナオーケストレーション

```python
class ContainerOrchestration:
    """
    コンテナオーケストレーション技術
    """
    
    def __init__(self):
        self.orchestration_tools = {}
        self.deployment_strategies = {}
    
    def orchestration_comparison(self):
        """オーケストレーションツール比較"""
        tools = {
            'Docker Swarm': {
                '学習コスト': '低',
                'スケーラビリティ': '中',
                '機能の豊富さ': '中',
                '適用場面': '小〜中規模アプリケーション',
                '特徴': ['Dockerに組み込まれている', '設定が簡単', '軽量']
            },
            'Kubernetes': {
                '学習コスト': '高',
                'スケーラビリティ': '高',
                '機能の豊富さ': '高',
                '適用場面': '大規模エンタープライズアプリケーション',
                '特徴': ['業界標準', '豊富なエコシステム', '高い可用性']
            },
            'Amazon ECS': {
                '学習コスト': '中',
                'スケーラビリティ': '高',
                '機能の豊富さ': '中',
                '適用場面': 'AWSベースのアプリケーション',
                '特徴': ['AWSサービスとの統合', 'マネージド', 'Fargate対応']
            },
            'Docker Compose': {
                '学習コスト': '低',
                'スケーラビリティ': '低',
                '機能の豊富さ': '低',
                '適用場面': '開発環境、単一サーバー',
                '特徴': ['シンプル', '開発に最適', '軽量']
            }
        }
        
        print("=== コンテナオーケストレーションツール比較 ===")
        for tool, features in tools.items():
            print(f"\n{tool}:")
            for feature, value in features.items():
                if feature == '特徴':
                    print(f"  {feature}: {', '.join(value)}")
                else:
                    print(f"  {feature}: {value}")
        
        return tools
    
    def docker_swarm_example(self):
        """Docker Swarm実装例"""
        # Swarm初期化
        swarm_commands = [
            '# Swarmクラスター初期化',
            'docker swarm init --advertise-addr <MANAGER-IP>',
            '',
            '# ワーカーノード追加',
            'docker swarm join --token <TOKEN> <MANAGER-IP>:2377',
            '',
            '# ノード確認',
            'docker node ls',
            '',
            '# サービス作成',
            'docker service create --name web --replicas 3 --publish 80:80 nginx',
            '',
            '# サービススケーリング',
            'docker service scale web=5',
            '',
            '# サービス確認',
            'docker service ls',
            'docker service ps web'
        ]
        
        # Docker Stack（複数サービス）
        stack_compose = '''version: '3.8'

services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
    networks:
      - web-network

  api:
    image: myapp:latest
    ports:
      - "8000:8000"
    deploy:
      replicas: 2
      placement:
        constraints:
          - node.role == worker
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
    networks:
      - web-network
      - db-network

  db:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.role == manager
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - db-network

volumes:
  db-data:

networks:
  web-network:
    driver: overlay
  db-network:
    driver: overlay
'''
        
        stack_commands = [
            '# Stack デプロイ',
            'docker stack deploy -c docker-compose.yml myapp',
            '',
            '# Stack 確認',
            'docker stack ls',
            'docker stack services myapp',
            '',
            '# Stack 削除',
            'docker stack rm myapp'
        ]
        
        print("=== Docker Swarm ===")
        print("\n".join(swarm_commands))
        print("\n=== Stack Compose ===")
        print(stack_compose)
        print("\n=== Stack Commands ===")
        print("\n".join(stack_commands))
        
        return {'swarm_commands': swarm_commands, 'stack_compose': stack_compose}
    
    def container_networking(self):
        """コンテナネットワーキング"""
        networking_concepts = {
            'bridge': 'デフォルトネットワーク。同一ホスト内のコンテナ通信',
            'host': 'ホストのネットワークを直接使用',
            'overlay': 'マルチホスト間でのコンテナ通信（Swarm/Kubernetes）',
            'none': 'ネットワークなし',
            'custom': 'ユーザー定義ネットワーク'
        }
        
        print("=== コンテナネットワーク種類 ===")
        for network_type, description in networking_concepts.items():
            print(f"{network_type}: {description}")
        
        # ネットワーク作成例
        network_examples = '''# カスタムネットワーク作成
docker network create --driver bridge my-network

# サブネット指定でネットワーク作成
docker network create \\
  --driver bridge \\
  --subnet=172.20.0.0/16 \\
  --ip-range=172.20.240.0/20 \\
  --gateway=172.20.0.1 \\
  my-custom-network

# オーバーレイネットワーク作成（Swarm）
docker network create --driver overlay --attachable my-overlay

# ネットワーク一覧
docker network ls

# ネットワーク詳細情報
docker network inspect my-network

# コンテナをネットワークに接続
docker run -d --name web --network my-network nginx
docker network connect my-network existing-container

# ネットワーク切断
docker network disconnect my-network container-name
'''
        
        print("\n=== ネットワーク操作例 ===")
        print(network_examples)
        
        # サービスディスカバリー例
        service_discovery = '''# Docker Compose でのサービスディスカバリー
version: '3.8'
services:
  web:
    image: nginx
    # 他のサービスから "web" という名前でアクセス可能
  
  api:
    image: myapi
    environment:
      # サービス名で他のサービスにアクセス
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
      - REDIS_URL=redis://cache:6379
  
  db:
    image: postgres
  
  cache:
    image: redis
'''
        
        print("\n=== サービスディスカバリー例 ===")
        print(service_discovery)
        
        return networking_concepts

# 使用例
orchestration = ContainerOrchestration()
tools_comparison = orchestration.orchestration_comparison()
swarm_example = orchestration.docker_swarm_example()
networking = orchestration.container_networking()
```

## ☸️ Phase 3: Kubernetes実践

### 3.1 Kubernetes基礎

```python
class KubernetesMastery:
    """
    Kubernetes技術の習得
    """
    
    def __init__(self):
        self.k8s_resources = {}
        self.manifests = {}
        self.helm_charts = {}
    
    def kubernetes_architecture(self):
        """Kubernetesアーキテクチャ"""
        architecture = {
            'Control Plane': {
                'API Server': 'REST APIサーバー、クラスターの入口',
                'etcd': 'クラスター状態を保存する分散KVS',
                'Controller Manager': 'コントローラーを実行',
                'Scheduler': 'PodをNodeに配置する'
            },
            'Node Components': {
                'kubelet': 'Nodeエージェント、Podライフサイクル管理',
                'kube-proxy': 'ネットワークプロキシ、ロードバランシング',
                'Container Runtime': 'コンテナ実行環境（Docker、containerd等）'
            },
            'Add-ons': {
                'DNS': 'クラスター内名前解決',
                'Dashboard': 'Web UI',
                'Ingress Controller': 'L7ロードバランサー',
                'CNI': 'Container Network Interface'
            }
        }
        
        print("=== Kubernetesアーキテクチャ ===")
        for component_type, components in architecture.items():
            print(f"\n{component_type}:")
            for component, description in components.items():
                print(f"  {component}: {description}")
        
        # 基本的なkubectlコマンド
        kubectl_commands = [
            '# クラスター情報',
            'kubectl cluster-info',
            'kubectl get nodes',
            '',
            '# リソース操作',
            'kubectl get pods',
            'kubectl get services',
            'kubectl get deployments',
            'kubectl get all',
            '',
            '# リソース詳細',
            'kubectl describe pod <pod-name>',
            'kubectl logs <pod-name>',
            'kubectl exec -it <pod-name> -- /bin/bash',
            '',
            '# リソース作成・更新',
            'kubectl apply -f deployment.yaml',
            'kubectl create deployment nginx --image=nginx',
            'kubectl expose deployment nginx --port=80 --type=LoadBalancer',
            '',
            '# リソース削除',
            'kubectl delete pod <pod-name>',
            'kubectl delete -f deployment.yaml'
        ]
        
        print("\n=== 基本kubectl コマンド ===")
        print("\n".join(kubectl_commands))
        
        return architecture
    
    def create_pod_manifest(self):
        """Pod マニフェスト作成"""
        pod_manifest = '''apiVersion: v1
kind: Pod
metadata:
  name: my-app-pod
  namespace: default
  labels:
    app: my-app
    version: v1.0
  annotations:
    prometheus.io/scrape: "true"
    prometheus.io/port: "8080"
spec:
  # Podの設定
  restartPolicy: Always
  serviceAccountName: my-app-sa
  
  # セキュリティコンテキスト
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 2000
  
  # コンテナ定義
  containers:
  - name: my-app
    image: my-app:v1.0
    imagePullPolicy: IfNotPresent
    
    # ポート設定
    ports:
    - containerPort: 8080
      name: http
      protocol: TCP
    
    # 環境変数
    env:
    - name: DATABASE_URL
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: url
    - name: REDIS_HOST
      value: "redis-service"
    - name: LOG_LEVEL
      value: "INFO"
    
    # リソース制限
    resources:
      requests:
        cpu: "100m"
        memory: "128Mi"
      limits:
        cpu: "500m"
        memory: "512Mi"
    
    # ヘルスチェック
    livenessProbe:
      httpGet:
        path: /health
        port: 8080
      initialDelaySeconds: 30
      periodSeconds: 10
      timeoutSeconds: 5
      failureThreshold: 3
    
    readinessProbe:
      httpGet:
        path: /ready
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 5
      timeoutSeconds: 3
      failureThreshold: 3
    
    # ボリュームマウント
    volumeMounts:
    - name: config-volume
      mountPath: /etc/config
      readOnly: true
    - name: data-volume
      mountPath: /data
  
  # サイドカーコンテナ（ログ収集）
  - name: log-collector
    image: fluent/fluent-bit:latest
    volumeMounts:
    - name: log-volume
      mountPath: /var/log
    - name: fluent-bit-config
      mountPath: /fluent-bit/etc
  
  # ボリューム定義
  volumes:
  - name: config-volume
    configMap:
      name: my-app-config
  - name: data-volume
    persistentVolumeClaim:
      claimName: my-app-pvc
  - name: log-volume
    emptyDir: {}
  - name: fluent-bit-config
    configMap:
      name: fluent-bit-config
  
  # ノード選択
  nodeSelector:
    node-type: worker
  
  # Toleration（汚染されたノードでも実行可能）
  tolerations:
  - key: "app"
    operator: "Equal"
    value: "my-app"
    effect: "NoSchedule"
'''
        
        print("=== Pod マニフェスト ===")
        print(pod_manifest)
        
        self.manifests['pod'] = pod_manifest
        return pod_manifest
    
    def create_deployment_manifest(self):
        """Deployment マニフェスト作成"""
        deployment_manifest = '''apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-deployment
  namespace: default
  labels:
    app: my-app
spec:
  # レプリカ数
  replicas: 3
  
  # セレクタ
  selector:
    matchLabels:
      app: my-app
  
  # デプロイメント戦略
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1
  
  # Pod テンプレート
  template:
    metadata:
      labels:
        app: my-app
        version: v1.0
    spec:
      containers:
      - name: my-app
        image: my-app:v1.0
        ports:
        - containerPort: 8080
        
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        
        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "500m"
            memory: "512Mi"
        
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
  labels:
    app: my-app
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 8080
    protocol: TCP
    name: http
  selector:
    app: my-app
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-app-config
data:
  app.properties: |
    server.port=8080
    logging.level.root=INFO
    spring.profiles.active=production
  
  nginx.conf: |
    server {
        listen 80;
        location / {
            proxy_pass http://localhost:8080;
        }
    }
---
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  # base64エンコード済み
  url: cG9zdGdyZXNxbDovL3VzZXI6cGFzc0BkYjozNDUyL215YXBw
  username: dXNlcg==
  password: cGFzcw==
'''
        
        print("=== Deployment マニフェスト ===")
        print(deployment_manifest)
        
        self.manifests['deployment'] = deployment_manifest
        return deployment_manifest
    
    def create_ingress_manifest(self):
        """Ingress マニフェスト作成"""
        ingress_manifest = '''apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-app-ingress
  annotations:
    # Nginx Ingress Controller設定
    kubernetes.io/ingress.class: "nginx"
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    
    # SSL/TLS設定
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
    
    # レート制限
    nginx.ingress.kubernetes.io/rate-limit: "100"
    nginx.ingress.kubernetes.io/rate-limit-window: "1m"
    
    # CORS設定
    nginx.ingress.kubernetes.io/enable-cors: "true"
    nginx.ingress.kubernetes.io/cors-allow-methods: "GET, PUT, POST, DELETE, PATCH, OPTIONS"
    nginx.ingress.kubernetes.io/cors-allow-headers: "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization"
spec:
  tls:
  - hosts:
    - my-app.example.com
    secretName: my-app-tls
  
  rules:
  - host: my-app.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-app-service
            port:
              number: 80
      
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: my-app-api-service
            port:
              number: 8080
  
  - host: admin.my-app.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-app-admin-service
            port:
              number: 3000
---
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: admin@example.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
    - http01:
        ingress:
          class: nginx
'''
        
        print("=== Ingress マニフェスト ===")
        print(ingress_manifest)
        
        self.manifests['ingress'] = ingress_manifest
        return ingress_manifest
    
    def create_hpa_manifest(self):
        """Horizontal Pod Autoscaler マニフェスト"""
        hpa_manifest = '''apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app-deployment
  
  minReplicas: 2
  maxReplicas: 10
  
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  
  # カスタムメトリクス（例：リクエスト数）
  - type: Pods
    pods:
      metric:
        name: http_requests_per_second
      target:
        type: AverageValue
        averageValue: "100"
  
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Percent
        value: 100
        periodSeconds: 15
      - type: Pods
        value: 2
        periodSeconds: 60
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60
---
apiVersion: v1
kind: ServiceMonitor
metadata:
  name: my-app-monitor
spec:
  selector:
    matchLabels:
      app: my-app
  endpoints:
  - port: http
    path: /metrics
    interval: 30s
'''
        
        print("=== HPA マニフェスト ===")
        print(hpa_manifest)
        
        self.manifests['hpa'] = hpa_manifest
        return hpa_manifest

# 使用例
k8s_master = KubernetesMastery()
architecture = k8s_master.kubernetes_architecture()
pod_manifest = k8s_master.create_pod_manifest()
deployment_manifest = k8s_master.create_deployment_manifest()
ingress_manifest = k8s_master.create_ingress_manifest()
hpa_manifest = k8s_master.create_hpa_manifest()
```

### 3.2 Helmチャートとパッケージ管理

```python
class HelmMastery:
    """
    Helmパッケージ管理の習得
    """
    
    def __init__(self):
        self.charts = {}
        self.values = {}
    
    def helm_fundamentals(self):
        """Helm基礎概念"""
        concepts = {
            'Chart': 'Kubernetesアプリケーションのパッケージ',
            'Release': 'クラスターにインストールされたChartのインスタンス',
            'Repository': 'Chartを保存・共有する場所',
            'Values': 'Chartのカスタマイズ設定',
            'Template': 'Kubernetesマニフェストのテンプレート',
            'Hook': 'リリースライフサイクル中の処理'
        }
        
        print("=== Helm基礎概念 ===")
        for concept, description in concepts.items():
            print(f"{concept}: {description}")
        
        # 基本コマンド
        helm_commands = [
            '# リポジトリ管理',
            'helm repo add stable https://charts.helm.sh/stable',
            'helm repo update',
            'helm repo list',
            'helm search repo nginx',
            '',
            '# チャート操作',
            'helm install my-release stable/nginx',
            'helm list',
            'helm status my-release',
            'helm upgrade my-release stable/nginx',
            'helm rollback my-release 1',
            'helm uninstall my-release',
            '',
            '# チャート開発',
            'helm create my-chart',
            'helm lint my-chart',
            'helm template my-chart',
            'helm package my-chart',
            '',
            '# Values ファイル',
            'helm install my-release my-chart -f values.yaml',
            'helm install my-release my-chart --set image.tag=v2.0'
        ]
        
        print("\n=== 基本Helmコマンド ===")
        print("\n".join(helm_commands))
        
        return concepts
    
    def create_helm_chart(self):
        """Helmチャート作成"""
        # Chart.yaml
        chart_yaml = '''apiVersion: v2
name: my-app
description: A Helm chart for my application
type: application
version: 0.1.0
appVersion: "1.0"

maintainers:
  - name: Your Name
    email: your.email@example.com

keywords:
  - web
  - api
  - microservice

home: https://my-app.example.com
sources:
  - https://github.com/example/my-app

dependencies:
  - name: postgresql
    version: "^11.0.0"
    repository: "https://charts.bitnami.com/bitnami"
    condition: postgresql.enabled
  
  - name: redis
    version: "^16.0.0"
    repository: "https://charts.bitnami.com/bitnami"
    condition: redis.enabled
'''
        
        # values.yaml
        values_yaml = '''# Default values for my-app
replicaCount: 3

image:
  repository: my-app
  pullPolicy: IfNotPresent
  tag: "latest"

imagePullSecrets: []
nameOverride: ""
fullnameOverride: ""

serviceAccount:
  create: true
  annotations: {}
  name: ""

podAnnotations: {}

podSecurityContext:
  fsGroup: 2000

securityContext:
  capabilities:
    drop:
    - ALL
  readOnlyRootFilesystem: true
  runAsNonRoot: true
  runAsUser: 1000

service:
  type: ClusterIP
  port: 80
  targetPort: 8080

ingress:
  enabled: true
  className: "nginx"
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/rate-limit: "100"
  hosts:
    - host: my-app.example.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: my-app-tls
      hosts:
        - my-app.example.com

resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 100m
    memory: 128Mi

autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70
  targetMemoryUtilizationPercentage: 80

nodeSelector: {}

tolerations: []

affinity: {}

# アプリケーション設定
config:
  logLevel: INFO
  database:
    host: ""
    port: 5432
    name: myapp
  redis:
    host: ""
    port: 6379

# 依存サービス設定
postgresql:
  enabled: true
  auth:
    postgresPassword: "changeme"
    database: "myapp"

redis:
  enabled: true
  auth:
    enabled: false

# モニタリング
monitoring:
  enabled: true
  serviceMonitor:
    enabled: true
    interval: 30s
    path: /metrics
'''
        
        # deployment.yaml template
        deployment_template = '''apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "my-app.fullname" . }}
  labels:
    {{- include "my-app.labels" . | nindent 4 }}
spec:
  {{- if not .Values.autoscaling.enabled }}
  replicas: {{ .Values.replicaCount }}
  {{- end }}
  selector:
    matchLabels:
      {{- include "my-app.selectorLabels" . | nindent 6 }}
  template:
    metadata:
      {{- with .Values.podAnnotations }}
      annotations:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      labels:
        {{- include "my-app.selectorLabels" . | nindent 8 }}
    spec:
      {{- with .Values.imagePullSecrets }}
      imagePullSecrets:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      serviceAccountName: {{ include "my-app.serviceAccountName" . }}
      securityContext:
        {{- toYaml .Values.podSecurityContext | nindent 8 }}
      containers:
        - name: {{ .Chart.Name }}
          securityContext:
            {{- toYaml .Values.securityContext | nindent 12 }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          ports:
            - name: http
              containerPort: {{ .Values.service.targetPort }}
              protocol: TCP
          env:
            - name: LOG_LEVEL
              value: {{ .Values.config.logLevel }}
            - name: DATABASE_URL
              value: "postgresql://postgres:{{ .Values.postgresql.auth.postgresPassword }}@{{ include "my-app.fullname" . }}-postgresql:{{ .Values.config.database.port }}/{{ .Values.config.database.name }}"
            {{- if .Values.redis.enabled }}
            - name: REDIS_URL
              value: "redis://{{ include "my-app.fullname" . }}-redis-master:{{ .Values.config.redis.port }}"
            {{- end }}
          livenessProbe:
            httpGet:
              path: /health
              port: http
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /ready
              port: http
            initialDelaySeconds: 5
            periodSeconds: 5
          resources:
            {{- toYaml .Values.resources | nindent 12 }}
      {{- with .Values.nodeSelector }}
      nodeSelector:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      {{- with .Values.affinity }}
      affinity:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      {{- with .Values.tolerations }}
      tolerations:
        {{- toYaml . | nindent 8 }}
      {{- end }}
'''
        
        # _helpers.tpl
        helpers_template = '''{{/*
Expand the name of the chart.
*/}}
{{- define "my-app.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
*/}}
{{- define "my-app.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "my-app.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "my-app.labels" -}}
helm.sh/chart: {{ include "my-app.chart" . }}
{{ include "my-app.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "my-app.selectorLabels" -}}
app.kubernetes.io/name: {{ include "my-app.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "my-app.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "my-app.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}
'''
        
        print("=== Chart.yaml ===")
        print(chart_yaml)
        print("\n=== values.yaml ===")
        print(values_yaml)
        print("\n=== deployment.yaml template ===")
        print(deployment_template)
        print("\n=== _helpers.tpl ===")
        print(helpers_template)
        
        return {
            'chart_yaml': chart_yaml,
            'values_yaml': values_yaml,
            'deployment_template': deployment_template,
            'helpers_template': helpers_template
        }
    
    def helm_advanced_features(self):
        """Helm高度な機能"""
        # Hooks例
        hooks_example = '''apiVersion: batch/v1
kind: Job
metadata:
  name: "{{ include "my-app.fullname" . }}-db-migration"
  labels:
    {{- include "my-app.labels" . | nindent 4 }}
  annotations:
    "helm.sh/hook": pre-upgrade,pre-install
    "helm.sh/hook-weight": "-5"
    "helm.sh/hook-delete-policy": before-hook-creation,hook-succeeded
spec:
  template:
    metadata:
      name: "{{ include "my-app.fullname" . }}-db-migration"
    spec:
      restartPolicy: Never
      containers:
      - name: db-migration
        image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
        command: ["python", "manage.py", "migrate"]
        env:
        - name: DATABASE_URL
          value: "postgresql://postgres:{{ .Values.postgresql.auth.postgresPassword }}@{{ include "my-app.fullname" . }}-postgresql:5432/{{ .Values.config.database.name }}"
'''
        
        # Tests例
        test_example = '''apiVersion: v1
kind: Pod
metadata:
  name: "{{ include "my-app.fullname" . }}-test"
  labels:
    {{- include "my-app.labels" . | nindent 4 }}
  annotations:
    "helm.sh/hook": test
spec:
  restartPolicy: Never
  containers:
    - name: wget
      image: busybox
      command: ['wget']
      args: ['{{ include "my-app.fullname" . }}:{{ .Values.service.port }}/health']
'''
        
        # カスタムValues例
        custom_values = '''# production-values.yaml
replicaCount: 5

image:
  tag: "v1.2.3"

resources:
  limits:
    cpu: 1000m
    memory: 1Gi
  requests:
    cpu: 200m
    memory: 256Mi

ingress:
  hosts:
    - host: my-app.production.com
      paths:
        - path: /
          pathType: Prefix

postgresql:
  auth:
    postgresPassword: "super-secure-password"
  primary:
    persistence:
      size: 20Gi
      storageClass: "fast-ssd"

monitoring:
  enabled: true
  serviceMonitor:
    enabled: true

# 本番環境固有の設定
config:
  logLevel: WARN
  database:
    maxConnections: 100
  cache:
    ttl: 3600
'''
        
        print("=== Helm Hooks例 ===")
        print(hooks_example)
        print("\n=== Test例 ===")
        print(test_example)
        print("\n=== カスタムValues例 ===")
        print(custom_values)
        
        # デプロイメントコマンド例
        deployment_commands = [
            '# 開発環境デプロイ',
            'helm install my-app ./my-app --namespace dev --create-namespace',
            '',
            '# 本番環境デプロイ',
            'helm install my-app ./my-app -f production-values.yaml --namespace prod',
            '',
            '# アップグレード',
            'helm upgrade my-app ./my-app --set image.tag=v1.2.4',
            '',
            '# ドライラン',
            'helm install my-app ./my-app --dry-run --debug',
            '',
            '# テスト実行',
            'helm test my-app',
            '',
            '# ロールバック',
            'helm rollback my-app 1'
        ]
        
        print("\n=== デプロイメントコマンド例 ===")
        print("\n".join(deployment_commands))
        
        return {
            'hooks': hooks_example,
            'tests': test_example,
            'custom_values': custom_values
        }

# 使用例
helm_master = HelmMastery()
helm_concepts = helm_master.helm_fundamentals()
helm_chart = helm_master.create_helm_chart()
advanced_features = helm_master.helm_advanced_features()
```

## 🏗️ Phase 4: Infrastructure as Code (IaC)

### 4.1 Terraformによるインフラ自動化

```python
class TerraformMastery:
    """
    Terraformによるインフラ自動化
    """
    
    def __init__(self):
        self.terraform_configs = {}
        self.modules = {}
    
    def terraform_fundamentals(self):
        """Terraform基礎概念"""
        concepts = {
            'Provider': 'クラウドプロバイダーとの接続を定義',
            'Resource': '作成・管理するインフラリソース',
            'Data Source': '既存リソースの情報を取得',
            'Variable': '設定の変数化',
            'Output': '他のモジュールで使用する値を出力',
            'State': 'インフラの現在状態を保存',
            'Module': '再利用可能な設定のパッケージ'
        }
        
        print("=== Terraform基礎概念 ===")
        for concept, description in concepts.items():
            print(f"{concept}: {description}")
        
        # 基本コマンド
        terraform_commands = [
            '# 初期化',
            'terraform init',
            '',
            '# 計画表示',
            'terraform plan',
            '',
            '# 適用',
            'terraform apply',
            '',
            '# 状態確認',
            'terraform show',
            'terraform state list',
            '',
            '# 破棄',
            'terraform destroy',
            '',
            '# フォーマット',
            'terraform fmt',
            '',
            '# 検証',
            'terraform validate'
        ]
        
        print("\n=== 基本コマンド ===")
        print("\n".join(terraform_commands))
        
        return concepts
    
    def create_aws_infrastructure(self):
        """AWS インフラ構築例"""
        # main.tf
        main_tf = '''# Terraform設定
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  
  backend "s3" {
    bucket = "my-terraform-state-bucket"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
    
    dynamodb_table = "terraform-state-lock"
    encrypt        = true
  }
}

# プロバイダー設定
provider "aws" {
  region = var.aws_region
  
  default_tags {
    tags = {
      Environment = var.environment
      Project     = var.project_name
      ManagedBy   = "terraform"
    }
  }
}

# VPC
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true
  
  tags = {
    Name = "${var.project_name}-vpc"
  }
}

# インターネットゲートウェイ
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id
  
  tags = {
    Name = "${var.project_name}-igw"
  }
}

# パブリックサブネット
resource "aws_subnet" "public" {
  count = length(var.availability_zones)
  
  vpc_id                  = aws_vpc.main.id
  cidr_block              = cidrsubnet(var.vpc_cidr, 8, count.index)
  availability_zone       = var.availability_zones[count.index]
  map_public_ip_on_launch = true
  
  tags = {
    Name = "${var.project_name}-public-subnet-${count.index + 1}"
    Type = "public"
  }
}

# プライベートサブネット
resource "aws_subnet" "private" {
  count = length(var.availability_zones)
  
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(var.vpc_cidr, 8, count.index + length(var.availability_zones))
  availability_zone = var.availability_zones[count.index]
  
  tags = {
    Name = "${var.project_name}-private-subnet-${count.index + 1}"
    Type = "private"
  }
}

# Elastic IP for NAT Gateway
resource "aws_eip" "nat" {
  count = length(var.availability_zones)
  
  domain = "vpc"
  
  tags = {
    Name = "${var.project_name}-nat-eip-${count.index + 1}"
  }
  
  depends_on = [aws_internet_gateway.main]
}

# NAT Gateway
resource "aws_nat_gateway" "main" {
  count = length(var.availability_zones)
  
  allocation_id = aws_eip.nat[count.index].id
  subnet_id     = aws_subnet.public[count.index].id
  
  tags = {
    Name = "${var.project_name}-nat-${count.index + 1}"
  }
}

# ルートテーブル - パブリック
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id
  
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }
  
  tags = {
    Name = "${var.project_name}-public-rt"
  }
}

# ルートテーブル - プライベート
resource "aws_route_table" "private" {
  count = length(var.availability_zones)
  
  vpc_id = aws_vpc.main.id
  
  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.main[count.index].id
  }
  
  tags = {
    Name = "${var.project_name}-private-rt-${count.index + 1}"
  }
}

# ルートテーブル関連付け
resource "aws_route_table_association" "public" {
  count = length(aws_subnet.public)
  
  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "private" {
  count = length(aws_subnet.private)
  
  subnet_id      = aws_subnet.private[count.index].id
  route_table_id = aws_route_table.private[count.index].id
}
'''
        
        # variables.tf
        variables_tf = '''variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
  
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod."
  }
}

variable "project_name" {
  description = "Project name"
  type        = string
  default     = "my-app"
}

variable "vpc_cidr" {
  description = "CIDR block for VPC"
  type        = string
  default     = "10.0.0.0/16"
  
  validation {
    condition     = can(cidrhost(var.vpc_cidr, 0))
    error_message = "VPC CIDR must be a valid IPv4 CIDR block."
  }
}

variable "availability_zones" {
  description = "List of availability zones"
  type        = list(string)
  default     = ["us-east-1a", "us-east-1b"]
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "key_name" {
  description = "EC2 Key Pair name"
  type        = string
  default     = ""
}

variable "allowed_cidr_blocks" {
  description = "CIDR blocks allowed to access resources"
  type        = list(string)
  default     = ["0.0.0.0/0"]
}
'''
        
        # outputs.tf
        outputs_tf = '''output "vpc_id" {
  description = "ID of the VPC"
  value       = aws_vpc.main.id
}

output "vpc_cidr_block" {
  description = "CIDR block of the VPC"
  value       = aws_vpc.main.cidr_block
}

output "public_subnet_ids" {
  description = "IDs of the public subnets"
  value       = aws_subnet.public[*].id
}

output "private_subnet_ids" {
  description = "IDs of the private subnets"
  value       = aws_subnet.private[*].id
}

output "internet_gateway_id" {
  description = "ID of the Internet Gateway"
  value       = aws_internet_gateway.main.id
}

output "nat_gateway_ids" {
  description = "IDs of the NAT Gateways"
  value       = aws_nat_gateway.main[*].id
}

output "nat_gateway_ips" {
  description = "Elastic IPs of the NAT Gateways"
  value       = aws_eip.nat[*].public_ip
}
'''
        
        print("=== main.tf ===")
        print(main_tf)
        print("\n=== variables.tf ===")
        print(variables_tf)
        print("\n=== outputs.tf ===")
        print(outputs_tf)
        
        return {
            'main_tf': main_tf,
            'variables_tf': variables_tf,
            'outputs_tf': outputs_tf
        }
    
    def create_terraform_modules(self):
        """Terraformモジュール作成"""
        # モジュール構造例
        module_structure = '''
modules/
├── networking/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── README.md
├── compute/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── README.md
└── database/
    ├── main.tf
    ├── variables.tf
    ├── outputs.tf
    └── README.md
'''
        
        # EKSモジュール例
        eks_module = '''# modules/eks/main.tf
resource "aws_eks_cluster" "main" {
  name     = var.cluster_name
  role_arn = aws_iam_role.cluster.arn
  version  = var.kubernetes_version
  
  vpc_config {
    subnet_ids              = var.subnet_ids
    endpoint_private_access = var.endpoint_private_access
    endpoint_public_access  = var.endpoint_public_access
    public_access_cidrs     = var.public_access_cidrs
  }
  
  encryption_config {
    provider {
      key_arn = var.kms_key_arn
    }
    resources = ["secrets"]
  }
  
  enabled_cluster_log_types = var.cluster_log_types
  
  depends_on = [
    aws_iam_role_policy_attachment.cluster_AmazonEKSClusterPolicy,
  ]
  
  tags = var.tags
}

resource "aws_eks_node_group" "main" {
  cluster_name    = aws_eks_cluster.main.name
  node_group_name = "${var.cluster_name}-node-group"
  node_role_arn   = aws_iam_role.node_group.arn
  subnet_ids      = var.private_subnet_ids
  
  instance_types = var.node_instance_types
  capacity_type  = var.capacity_type
  
  scaling_config {
    desired_size = var.desired_capacity
    max_size     = var.max_capacity
    min_size     = var.min_capacity
  }
  
  update_config {
    max_unavailable = var.max_unavailable
  }
  
  remote_access {
    ec2_ssh_key = var.key_name
    source_security_group_ids = var.ssh_security_group_ids
  }
  
  depends_on = [
    aws_iam_role_policy_attachment.node_group_AmazonEKSWorkerNodePolicy,
    aws_iam_role_policy_attachment.node_group_AmazonEKS_CNI_Policy,
    aws_iam_role_policy_attachment.node_group_AmazonEC2ContainerRegistryReadOnly,
  ]
  
  tags = var.tags
}

# IAM Role for EKS Cluster
resource "aws_iam_role" "cluster" {
  name = "${var.cluster_name}-cluster-role"
  
  assume_role_policy = jsonencode({
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "eks.amazonaws.com"
      }
    }]
    Version = "2012-10-17"
  })
}

resource "aws_iam_role_policy_attachment" "cluster_AmazonEKSClusterPolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.cluster.name
}

# IAM Role for EKS Node Group
resource "aws_iam_role" "node_group" {
  name = "${var.cluster_name}-node-group-role"
  
  assume_role_policy = jsonencode({
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "ec2.amazonaws.com"
      }
    }]
    Version = "2012-10-17"
  })
}

resource "aws_iam_role_policy_attachment" "node_group_AmazonEKSWorkerNodePolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
  role       = aws_iam_role.node_group.name
}

resource "aws_iam_role_policy_attachment" "node_group_AmazonEKS_CNI_Policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
  role       = aws_iam_role.node_group.name
}

resource "aws_iam_role_policy_attachment" "node_group_AmazonEC2ContainerRegistryReadOnly" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role       = aws_iam_role.node_group.name
}
'''
        
        # モジュール使用例
        module_usage = '''# 本体のmain.tfでモジュール使用
module "vpc" {
  source = "./modules/networking"
  
  vpc_cidr           = var.vpc_cidr
  availability_zones = var.availability_zones
  project_name       = var.project_name
  environment        = var.environment
}

module "eks" {
  source = "./modules/eks"
  
  cluster_name        = "${var.project_name}-${var.environment}"
  kubernetes_version  = "1.27"
  subnet_ids          = module.vpc.public_subnet_ids
  private_subnet_ids  = module.vpc.private_subnet_ids
  
  node_instance_types = ["t3.medium"]
  desired_capacity    = 3
  max_capacity        = 10
  min_capacity        = 1
  
  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}

module "monitoring" {
  source = "./modules/monitoring"
  
  cluster_name = module.eks.cluster_name
  vpc_id       = module.vpc.vpc_id
  subnet_ids   = module.vpc.private_subnet_ids
}
'''
        
        print("=== モジュール構造 ===")
        print(module_structure)
        print("\n=== EKSモジュール例 ===")
        print(eks_module)
        print("\n=== モジュール使用例 ===")
        print(module_usage)
        
        return {
            'module_structure': module_structure,
            'eks_module': eks_module,
            'module_usage': module_usage
        }
    
    def terraform_best_practices(self):
        """Terraformベストプラクティス"""
        best_practices = {
            'コード構成': [
                'モジュールを使って再利用可能なコードを作成',
                '環境ごとにディレクトリを分離',
                '変数とアウトプットを適切に定義',
                'リソースの命名規則を統一',
                'タグ付けルールを徹底'
            ],
            'State管理': [
                'リモートBackend（S3 + DynamoDB）を使用',
                'State ファイルの暗号化を有効化',
                'State ロックを使用して競合を防止',
                '適切なワークスペースを使用',
                '定期的なState ファイルのバックアップ'
            ],
            'セキュリティ': [
                'IAMロールの最小権限の原則',
                'シークレット情報をコードに含めない',
                'Terraformクレデンシャルの安全な管理',
                'リソースの暗号化を有効化',
                'セキュリティグループルールの最小化'
            ],
            '運用': [
                'terraform plan の結果を必ず確認',
                'CI/CDパイプラインでの自動化',
                'コードレビューの徹底',
                'ドキュメントの整備',
                'リソースの依存関係を理解'
            ]
        }
        
        print("=== Terraformベストプラクティス ===")
        for category, practices in best_practices.items():
            print(f"\n{category}:")
            for practice in practices:
                print(f"  • {practice}")
        
        # CI/CD例
        github_actions = '''name: Terraform CI/CD

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  TF_VERSION: 1.5.0

jobs:
  terraform:
    name: Terraform
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
    
    - name: Setup Terraform
      uses: hashicorp/setup-terraform@v2
      with:
        terraform_version: ${{ env.TF_VERSION }}
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Terraform Format
      run: terraform fmt -check
    
    - name: Terraform Init
      run: terraform init
    
    - name: Terraform Validate
      run: terraform validate
    
    - name: Terraform Plan
      run: terraform plan -no-color
      continue-on-error: true
    
    - name: Terraform Apply
      if: github.ref == 'refs/heads/main' && github.event_name == 'push'
      run: terraform apply -auto-approve
'''
        
        print("\n=== CI/CD例 (GitHub Actions) ===")
        print(github_actions)
        
        return best_practices

# 使用例
terraform_master = TerraformMastery()
terraform_concepts = terraform_master.terraform_fundamentals()
aws_infrastructure = terraform_master.create_aws_infrastructure()
terraform_modules = terraform_master.create_terraform_modules()
best_practices = terraform_master.terraform_best_practices()
```

## 📚 まとめと次のステップ

この特典では、AI駆動開発に必要なクラウド・インフラスキルを包括的に学習しました。

### 習得したスキル
✅ クラウドコンピューティング基礎概念  
✅ AWS主要サービス活用  
✅ Dockerコンテナ技術  
✅ Kubernetesオーケストレーション  
✅ Helmパッケージ管理  
✅ Infrastructure as Code (Terraform)  
✅ ネットワーキングとセキュリティ  
✅ モニタリングとロギング  

### 実践的な学習課題
1. **マルチクラウド環境構築**: AWS、Azure、GCPでの横断的インフラ管理
2. **マイクロサービスアーキテクチャ**: Kubernetesベースの分散システム構築
3. **CI/CDパイプライン**: GitOpsを活用した自動デプロイメント
4. **災害復旧システム**: マルチリージョンでの高可用性インフラ
5. **コスト最適化**: クラウドリソースの効率的な運用

### 推奨学習リソース
- **AWS**: AWS Well-Architected Framework
- **Kubernetes**: CNCF Landscape
- **Terraform**: HashiCorp Learn
- **実践**: Kubernetes the Hard Way
- **コミュニティ**: CNCF, AWS User Groups

クラウド・インフラ技術は急速に進化しています。このガイドをベースに、最新技術トレンドを追いながら実践的な経験を積んでいきましょう！