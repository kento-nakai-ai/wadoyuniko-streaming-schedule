# 特典39: DevOps・MLOps完全マスターガイド

## 🎯 概要
AI駆動開発におけるDevOps・MLOpsスキルを網羅的に習得するための実践的ガイド。CI/CDパイプライン構築から、機械学習モデルのライフサイクル管理、自動化されたテスト・デプロイメント戦略まで、現代的な開発・運用手法を体系的に学習できます。

## 📋 学習目標
- [ ] DevOps文化と原則を理解する
- [ ] CI/CDパイプラインを構築する
- [ ] GitOps戦略を実践する
- [ ] インフラストラクチャの自動化を実装する
- [ ] MLOpsパイプラインを構築する
- [ ] モデルライフサイクル管理を習得する
- [ ] モニタリング・ロギング戦略を実装する
- [ ] セキュリティと品質を自動化する

## 🚀 Phase 1: DevOps基礎と文化

### 1.1 DevOps原則と文化

```python
import json
import yaml
from datetime import datetime, timedelta
import subprocess
import os

class DevOpsPrinciples:
    """
    DevOps原則と実践の理解
    """
    
    def __init__(self):
        self.principles = {}
        self.practices = {}
        self.metrics = {}
    
    def devops_culture_fundamentals(self):
        """DevOps文化の基礎"""
        culture_principles = {
            'コラボレーション': {
                '説明': '開発チームと運用チームの壁を取り除く',
                '実践方法': [
                    'クロスファンクショナルチーム編成',
                    '共通ツールとプロセスの使用',
                    '定期的なコミュニケーション',
                    '共有責任の文化醸成'
                ]
            },
            '自動化': {
                '説明': '手動作業を最小化し、繰り返し作業を自動化',
                '実践方法': [
                    'CI/CDパイプライン構築',
                    'インフラストラクチャの自動化',
                    'テストの自動化',
                    'デプロイメントの自動化'
                ]
            },
            '継続的改善': {
                '説明': '小さな変更を継続的に行い、フィードバックループを短くする',
                '実践方法': [
                    '頻繁なリリース',
                    'A/Bテスト',
                    'メトリクス駆動の改善',
                    'ポストモーテム分析'
                ]
            },
            '顧客中心': {
                '説明': 'エンドユーザーの価値創出を最優先',
                '実践方法': [
                    'ユーザーフィードバック収集',
                    '価値ストリームマッピング',
                    'リーンスタートアップ手法',
                    'カスタマージャーニー最適化'
                ]
            }
        }
        
        print("=== DevOps文化の原則 ===")
        for principle, details in culture_principles.items():
            print(f"\n{principle}: {details['説明']}")
            print("実践方法:")
            for method in details['実践方法']:
                print(f"  • {method}")
        
        # DevOpsライフサイクル
        lifecycle_stages = {
            'Plan': '要件定義、スプリント計画、バックログ管理',
            'Code': 'コード開発、バージョン管理、コードレビュー',
            'Build': 'コンパイル、依存関係解決、成果物作成',
            'Test': '自動テスト、品質チェック、セキュリティスキャン',
            'Release': 'リリース計画、承認プロセス、デプロイ準備',
            'Deploy': '本番環境へのデプロイ、設定管理',
            'Operate': 'システム運用、インシデント対応、パフォーマンス管理',
            'Monitor': 'メトリクス収集、ログ分析、アラート管理'
        }
        
        print("\n=== DevOpsライフサイクル ===")
        for stage, description in lifecycle_stages.items():
            print(f"{stage}: {description}")
        
        return culture_principles, lifecycle_stages
    
    def devops_metrics_and_kpis(self):
        """DevOpsメトリクスとKPI"""
        metrics_categories = {
            'デプロイメント頻度': {
                '定義': 'コードが本番環境にデプロイされる頻度',
                '目標値': '1日に複数回（エリート: オンデマンド）',
                '測定方法': 'デプロイログの分析',
                '改善施策': ['CI/CDパイプライン最適化', '自動化率向上', 'テスト効率化']
            },
            'リードタイム': {
                '定義': 'コミットから本番反映までの時間',
                '目標値': '1時間未満（エリート: 1日未満）',
                '測定方法': 'Git履歴とデプロイ履歴の相関分析',
                '改善施策': ['パイプライン並列化', 'テスト最適化', '承認プロセス簡素化']
            },
            '平均修復時間 (MTTR)': {
                '定義': 'インシデント発生から復旧までの時間',
                '目標値': '1時間未満（エリート: 1時間未満）',
                '測定方法': 'インシデント管理ツールのデータ',
                '改善施策': ['ロールバック自動化', 'モニタリング強化', 'オンコール体制改善']
            },
            '変更失敗率': {
                '定義': 'デプロイ後にロールバックやホットフィックスが必要な割合',
                '目標値': '15%未満（エリート: 5%未満）',
                '測定方法': '失敗デプロイ数 / 総デプロイ数',
                '改善施策': ['テストカバレッジ向上', 'カナリアリリース', 'ブルーグリーンデプロイ']
            }
        }
        
        print("=== DORA 4つの主要メトリクス ===")
        for metric, details in metrics_categories.items():
            print(f"\n{metric}:")
            for key, value in details.items():
                if key == '改善施策':
                    print(f"  {key}: {', '.join(value)}")
                else:
                    print(f"  {key}: {value}")
        
        # メトリクス収集の実装例
        metrics_collection = '''
# メトリクス収集の実装例
class DevOpsMetricsCollector:
    def __init__(self, git_repo, deploy_log, incident_log):
        self.git_repo = git_repo
        self.deploy_log = deploy_log
        self.incident_log = incident_log
    
    def calculate_deployment_frequency(self, period_days=30):
        """デプロイメント頻度計算"""
        end_date = datetime.now()
        start_date = end_date - timedelta(days=period_days)
        
        deployments = [
            d for d in self.deploy_log 
            if start_date <= d['timestamp'] <= end_date
        ]
        
        return len(deployments) / period_days
    
    def calculate_lead_time(self, commit_sha):
        """リードタイム計算"""
        commit_time = self.get_commit_time(commit_sha)
        deploy_time = self.get_deploy_time(commit_sha)
        
        if commit_time and deploy_time:
            return (deploy_time - commit_time).total_seconds() / 3600  # 時間単位
        return None
    
    def calculate_mttr(self, period_days=30):
        """平均修復時間計算"""
        incidents = self.get_incidents_in_period(period_days)
        resolution_times = [
            (i['resolved_at'] - i['created_at']).total_seconds() / 3600
            for i in incidents if i['resolved_at']
        ]
        
        return sum(resolution_times) / len(resolution_times) if resolution_times else 0
'''
        
        print("\n=== メトリクス収集実装例 ===")
        print(metrics_collection)
        
        return metrics_categories
    
    def create_devops_maturity_assessment(self):
        """DevOps成熟度評価"""
        maturity_levels = {
            'レベル1: 初期': {
                '特徴': ['手動デプロイ', 'サイロ化されたチーム', '不定期リリース'],
                'CI/CD': '基本的なビルド自動化',
                'テスト': '手動テスト中心',
                'モニタリング': '基本的なログ確認',
                '文化': '従来的な開発・運用分離'
            },
            'レベル2: 管理': {
                '特徴': ['基本的なCI/CD', 'テスト自動化開始', '週次リリース'],
                'CI/CD': 'ビルド・テスト・デプロイ自動化',
                'テスト': 'ユニットテスト自動化',
                'モニタリング': 'APMツール導入',
                '文化': 'チーム間コミュニケーション改善'
            },
            'レベル3: 定義': {
                '特徴': ['標準化されたプロセス', '統合テスト自動化', '日次リリース'],
                'CI/CD': 'パイプライン標準化',
                'テスト': 'E2Eテスト自動化',
                'モニタリング': 'メトリクス駆動の改善',
                '文化': 'DevOpsチーム編成'
            },
            'レベル4: 定量管理': {
                '特徴': ['メトリクス駆動', 'カナリアリリース', '時間単位リリース'],
                'CI/CD': 'ブルーグリーンデプロイ',
                'テスト': 'テスト戦略最適化',
                'モニタリング': 'AIによる異常検知',
                '文化': 'データ駆動の意思決定'
            },
            'レベル5: 最適化': {
                '特徴': ['継続的最適化', 'フィーチャーフラグ', 'オンデマンドリリース'],
                'CI/CD': 'GitOps実践',
                'テスト': 'シフトレフト戦略',
                'モニタリング': '予測的モニタリング',
                '文化': '学習する組織'
            }
        }
        
        print("=== DevOps成熟度レベル ===")
        for level, characteristics in maturity_levels.items():
            print(f"\n{level}:")
            for aspect, description in characteristics.items():
                if aspect == '特徴':
                    print(f"  {aspect}: {', '.join(description)}")
                else:
                    print(f"  {aspect}: {description}")
        
        # 成熟度チェックリスト
        checklist = {
            'コード管理': [
                'すべてのコードがバージョン管理されている',
                'ブランチ戦略が定義されている',
                'コードレビュープロセスがある',
                'コミットメッセージが標準化されている'
            ],
            'ビルド・テスト': [
                'ビルドが自動化されている',
                'ユニットテストが自動実行される',
                'テストカバレッジが測定されている',
                '静的解析が実行されている'
            ],
            'デプロイメント': [
                'デプロイが自動化されている',
                '複数環境へのデプロイが可能',
                'ロールバック機能がある',
                'デプロイ承認プロセスがある'
            ],
            'モニタリング': [
                'アプリケーションメトリクスを収集',
                'インフラメトリクスを収集',
                'ログ集約システムがある',
                'アラート設定がある'
            ]
        }
        
        print("\n=== 成熟度チェックリスト ===")
        for category, items in checklist.items():
            print(f"\n{category}:")
            for item in items:
                print(f"  ☐ {item}")
        
        return maturity_levels, checklist

# 使用例
devops_principles = DevOpsPrinciples()
culture, lifecycle = devops_principles.devops_culture_fundamentals()
metrics = devops_principles.devops_metrics_and_kpis()
maturity, checklist = devops_principles.create_devops_maturity_assessment()
```

### 1.2 CI/CDパイプライン構築

```python
class CICDPipeline:
    """
    CI/CDパイプライン構築の実践
    """
    
    def __init__(self):
        self.pipeline_configs = {}
        self.tools = {}
    
    def cicd_pipeline_design(self):
        """CI/CDパイプライン設計"""
        pipeline_stages = {
            'ソースステージ': {
                'トリガー': ['git push', 'pull request', 'scheduled'],
                'アクション': ['ソースコード取得', '依存関係チェック'],
                'ツール': ['GitHub', 'GitLab', 'Bitbucket'],
                '成果物': 'ソースコード'
            },
            'ビルドステージ': {
                'トリガー': ['ソース変更検知'],
                'アクション': ['コンパイル', '依存関係解決', 'アーティファクト作成'],
                'ツール': ['Docker', 'Maven', 'npm', 'webpack'],
                '成果物': 'ビルドアーティファクト'
            },
            'テストステージ': {
                'トリガー': ['ビルド完了'],
                'アクション': ['ユニットテスト', '統合テスト', 'セキュリティテスト'],
                'ツール': ['Jest', 'JUnit', 'SonarQube', 'OWASP ZAP'],
                '成果物': 'テストレポート'
            },
            'デプロイステージ': {
                'トリガー': ['テスト成功', '手動承認'],
                'アクション': ['環境デプロイ', '設定適用', 'ヘルスチェック'],
                'ツール': ['Kubernetes', 'Terraform', 'Ansible'],
                '成果物': 'デプロイされたアプリケーション'
            }
        }
        
        print("=== CI/CDパイプライン設計 ===")
        for stage, details in pipeline_stages.items():
            print(f"\n{stage}:")
            for aspect, items in details.items():
                if isinstance(items, list):
                    print(f"  {aspect}: {', '.join(items)}")
                else:
                    print(f"  {aspect}: {items}")
        
        return pipeline_stages
    
    def create_github_actions_pipeline(self):
        """GitHub Actions CI/CDパイプライン"""
        github_workflow = '''name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  # コード品質チェック
  code-quality:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      with:
        fetch-depth: 0  # SonarQubeのため全履歴を取得

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run linting
      run: npm run lint

    - name: Run type checking
      run: npm run type-check

    - name: SonarQube Scan
      uses: sonarqube-quality-gate-action@master
      env:
        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}

  # テスト実行
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20]
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run unit tests
      run: npm run test:unit -- --coverage
    
    - name: Run integration tests
      run: npm run test:integration
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        token: ${{ secrets.CODECOV_TOKEN }}

    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

  # セキュリティスキャン
  security:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Run Trivy vulnerability scanner
      uses: aquasecurity/trivy-action@master
      with:
        scan-type: 'fs'
        scan-ref: '.'
        format: 'sarif'
        output: 'trivy-results.sarif'
    
    - name: Upload Trivy scan results to GitHub Security tab
      uses: github/codeql-action/upload-sarif@v2
      with:
        sarif_file: 'trivy-results.sarif'
    
    - name: Run npm audit
      run: npm audit --audit-level moderate

  # Dockerイメージビルド
  build:
    needs: [code-quality, test, security]
    runs-on: ubuntu-latest
    outputs:
      image-digest: ${{ steps.build.outputs.digest }}
      image-tag: ${{ steps.meta.outputs.tags }}
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3
    
    - name: Log in to Container Registry
      uses: docker/login-action@v2
      with:
        registry: ${{ env.REGISTRY }}
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}
    
    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v4
      with:
        images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
        tags: |
          type=ref,event=branch
          type=ref,event=pr
          type=sha,prefix={{branch}}-
          type=raw,value=latest,enable={{is_default_branch}}
    
    - name: Build and push
      id: build
      uses: docker/build-push-action@v5
      with:
        context: .
        platforms: linux/amd64,linux/arm64
        push: true
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

  # 開発環境デプロイ
  deploy-dev:
    if: github.ref == 'refs/heads/develop'
    needs: build
    runs-on: ubuntu-latest
    environment: development
    
    steps:
    - name: Deploy to development
      uses: azure/k8s-deploy@v1
      with:
        manifests: |
          k8s/dev/deployment.yaml
          k8s/dev/service.yaml
        images: |
          ${{ needs.build.outputs.image-tag }}
        kubeconfig: ${{ secrets.KUBECONFIG_DEV }}

  # ステージング環境デプロイ
  deploy-staging:
    if: github.ref == 'refs/heads/main'
    needs: build
    runs-on: ubuntu-latest
    environment: staging
    
    steps:
    - name: Deploy to staging
      uses: azure/k8s-deploy@v1
      with:
        manifests: |
          k8s/staging/deployment.yaml
          k8s/staging/service.yaml
        images: |
          ${{ needs.build.outputs.image-tag }}
        kubeconfig: ${{ secrets.KUBECONFIG_STAGING }}
    
    - name: Run E2E tests
      run: |
        npm run test:e2e:staging
      env:
        STAGING_URL: https://staging.myapp.com

  # 本番環境デプロイ
  deploy-prod:
    if: github.ref == 'refs/heads/main'
    needs: [build, deploy-staging]
    runs-on: ubuntu-latest
    environment: production
    
    steps:
    - name: Deploy to production
      uses: azure/k8s-deploy@v1
      with:
        manifests: |
          k8s/prod/deployment.yaml
          k8s/prod/service.yaml
        images: |
          ${{ needs.build.outputs.image-tag }}
        kubeconfig: ${{ secrets.KUBECONFIG_PROD }}
        strategy: canary
        percentage: 20
    
    - name: Verify deployment
      run: |
        kubectl rollout status deployment/myapp -n production
        npm run test:smoke:production
      env:
        PRODUCTION_URL: https://myapp.com
    
    - name: Complete canary deployment
      if: success()
      run: |
        kubectl patch deployment myapp -n production -p '{"spec":{"replicas":5}}'
    
    - name: Rollback on failure
      if: failure()
      run: |
        kubectl rollout undo deployment/myapp -n production

  # 通知
  notify:
    if: always()
    needs: [deploy-prod]
    runs-on: ubuntu-latest
    
    steps:
    - name: Slack notification
      uses: 8398a7/action-slack@v3
      with:
        status: ${{ job.status }}
        channel: '#deployments'
        webhook_url: ${{ secrets.SLACK_WEBHOOK }}
'''
        
        print("=== GitHub Actions CI/CDパイプライン ===")
        print(github_workflow)
        
        return github_workflow
    
    def create_gitlab_cicd_pipeline(self):
        """GitLab CI/CDパイプライン"""
        gitlab_cicd = '''# .gitlab-ci.yml
stages:
  - validate
  - build
  - test
  - security
  - deploy-dev
  - deploy-staging
  - deploy-prod

variables:
  DOCKER_DRIVER: overlay2
  DOCKER_TLS_CERTDIR: "/certs"
  REGISTRY: registry.gitlab.com
  IMAGE_NAME: $CI_PROJECT_PATH
  KUBECONFIG: /tmp/kubeconfig

# テンプレート定義
.docker: &docker
  image: docker:20.10.16
  services:
    - docker:20.10.16-dind

.kubectl: &kubectl
  image: bitnami/kubectl:latest
  before_script:
    - echo "$KUBECONFIG_CONTENT" | base64 -d > $KUBECONFIG

# バリデーション段階
validate:code:
  stage: validate
  image: node:18
  cache:
    paths:
      - node_modules/
  script:
    - npm ci
    - npm run lint
    - npm run type-check
  artifacts:
    reports:
      junit: reports/lint-results.xml

# ビルド段階
build:docker:
  <<: *docker
  stage: build
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - |
      if [[ "$CI_COMMIT_BRANCH" == "$CI_DEFAULT_BRANCH" ]]; then
        tag="latest"
      else
        tag=$CI_COMMIT_REF_SLUG
      fi
    - docker build --pull -t "$CI_REGISTRY_IMAGE:$tag" .
    - docker push "$CI_REGISTRY_IMAGE:$tag"
  only:
    - main
    - develop

# テスト段階
test:unit:
  stage: test
  image: node:18
  services:
    - postgres:15
  variables:
    POSTGRES_DB: test
    POSTGRES_USER: postgres
    POSTGRES_PASSWORD: postgres
    DATABASE_URL: postgresql://postgres:postgres@postgres:5432/test
  cache:
    paths:
      - node_modules/
  script:
    - npm ci
    - npm run test:unit -- --coverage
    - npm run test:integration
  coverage: '/Lines\s*:\s*(\d+\.\d+)%/'
  artifacts:
    reports:
      junit: reports/test-results.xml
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml

test:e2e:
  stage: test
  image: cypress/included:12.17.4
  script:
    - cypress run --record --key $CYPRESS_RECORD_KEY
  artifacts:
    when: always
    paths:
      - cypress/videos/
      - cypress/screenshots/
    expire_in: 1 week

# セキュリティ段階
security:sast:
  stage: security
  variables:
    SAST_EXCLUDED_ANALYZERS: "semgrep"
  include:
    - template: Security/SAST.gitlab-ci.yml

security:dependency:
  stage: security
  include:
    - template: Security/Dependency-Scanning.gitlab-ci.yml

security:container:
  stage: security
  include:
    - template: Security/Container-Scanning.gitlab-ci.yml

# デプロイ段階
deploy:dev:
  <<: *kubectl
  stage: deploy-dev
  variables:
    KUBECONFIG_CONTENT: $KUBECONFIG_DEV
    NAMESPACE: development
  script:
    - kubectl set image deployment/myapp myapp=$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG -n $NAMESPACE
    - kubectl rollout status deployment/myapp -n $NAMESPACE
  environment:
    name: development
    url: https://dev.myapp.com
  only:
    - develop

deploy:staging:
  <<: *kubectl
  stage: deploy-staging
  variables:
    KUBECONFIG_CONTENT: $KUBECONFIG_STAGING
    NAMESPACE: staging
  script:
    - kubectl set image deployment/myapp myapp=$CI_REGISTRY_IMAGE:latest -n $NAMESPACE
    - kubectl rollout status deployment/myapp -n $NAMESPACE
  environment:
    name: staging
    url: https://staging.myapp.com
  only:
    - main

deploy:prod:
  <<: *kubectl
  stage: deploy-prod
  variables:
    KUBECONFIG_CONTENT: $KUBECONFIG_PROD
    NAMESPACE: production
  script:
    - |
      # カナリアデプロイメント
      kubectl patch deployment myapp -n $NAMESPACE -p '{"spec":{"replicas":1}}'
      kubectl set image deployment/myapp myapp=$CI_REGISTRY_IMAGE:latest -n $NAMESPACE
      kubectl rollout status deployment/myapp -n $NAMESPACE
      
      # ヘルスチェック
      sleep 60
      if curl -f https://myapp.com/health; then
        echo "Health check passed, scaling up"
        kubectl patch deployment myapp -n $NAMESPACE -p '{"spec":{"replicas":5}}'
      else
        echo "Health check failed, rolling back"
        kubectl rollout undo deployment/myapp -n $NAMESPACE
        exit 1
      fi
  environment:
    name: production
    url: https://myapp.com
  when: manual
  only:
    - main

# 通知
notify:success:
  stage: .post
  image: alpine:latest
  script:
    - apk add --no-cache curl
    - |
      curl -X POST -H 'Content-type: application/json' \
        --data "{\"text\":\"✅ $CI_PROJECT_NAME deployed successfully to $CI_ENVIRONMENT_NAME\"}" \
        $SLACK_WEBHOOK_URL
  when: on_success
  only:
    - main

notify:failure:
  stage: .post
  image: alpine:latest
  script:
    - apk add --no-cache curl
    - |
      curl -X POST -H 'Content-type: application/json' \
        --data "{\"text\":\"❌ $CI_PROJECT_NAME deployment failed in $CI_ENVIRONMENT_NAME\"}" \
        $SLACK_WEBHOOK_URL
  when: on_failure
  only:
    - main
'''
        
        print("=== GitLab CI/CDパイプライン ===")
        print(gitlab_cicd)
        
        return gitlab_cicd
    
    def create_jenkins_pipeline(self):
        """Jenkins パイプライン"""
        jenkins_pipeline = '''pipeline {
    agent any
    
    environment {
        REGISTRY = 'docker.io'
        IMAGE_NAME = 'myapp'
        KUBECONFIG = credentials('kubeconfig')
        DOCKER_CREDENTIALS = credentials('docker-hub')
        SLACK_WEBHOOK = credentials('slack-webhook')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_COMMIT_SHORT = sh(
                        script: "git rev-parse --short HEAD",
                        returnStdout: true
                    ).trim()
                }
            }
        }
        
        stage('Code Quality') {
            parallel {
                stage('Lint') {
                    steps {
                        sh 'npm ci'
                        sh 'npm run lint'
                    }
                    post {
                        always {
                            publishHTML([
                                allowMissing: false,
                                alwaysLinkToLastBuild: true,
                                keepAll: true,
                                reportDir: 'reports',
                                reportFiles: 'lint-results.html',
                                reportName: 'Lint Report'
                            ])
                        }
                    }
                }
                
                stage('SonarQube Analysis') {
                    steps {
                        withSonarQubeEnv('SonarQube') {
                            sh 'npm run sonar'
                        }
                    }
                }
            }
        }
        
        stage('Test') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'npm run test:unit -- --coverage'
                    }
                    post {
                        always {
                            publishTestResults testResultsPattern: 'reports/test-results.xml'
                            publishCoverage adapters: [
                                istanbulCoberturaAdapter('coverage/cobertura-coverage.xml')
                            ], sourceFileResolver: sourceFiles('STORE_LAST_BUILD')
                        }
                    }
                }
                
                stage('Integration Tests') {
                    steps {
                        sh '''
                            docker-compose -f docker-compose.test.yml up -d
                            npm run test:integration
                            docker-compose -f docker-compose.test.yml down
                        '''
                    }
                }
            }
        }
        
        stage('Security Scan') {
            parallel {
                stage('SAST') {
                    steps {
                        sh 'npm audit --audit-level moderate'
                        sh 'npx audit-ci --moderate'
                    }
                }
                
                stage('Container Scan') {
                    when {
                        anyOf {
                            branch 'main'
                            branch 'develop'
                        }
                    }
                    steps {
                        script {
                            sh "docker build -t ${IMAGE_NAME}:${GIT_COMMIT_SHORT} ."
                            sh "trivy image --exit-code 1 --severity HIGH,CRITICAL ${IMAGE_NAME}:${GIT_COMMIT_SHORT}"
                        }
                    }
                }
            }
        }
        
        stage('Build & Push') {
            when {
                anyOf {
                    branch 'main'
                    branch 'develop'
                }
            }
            steps {
                script {
                    def image = docker.build("${REGISTRY}/${IMAGE_NAME}:${GIT_COMMIT_SHORT}")
                    
                    docker.withRegistry("https://${REGISTRY}", 'docker-hub') {
                        image.push()
                        image.push("${BRANCH_NAME}-latest")
                        
                        if (env.BRANCH_NAME == 'main') {
                            image.push('latest')
                        }
                    }
                }
            }
        }
        
        stage('Deploy to Dev') {
            when {
                branch 'develop'
            }
            steps {
                script {
                    sh """
                        kubectl set image deployment/myapp myapp=${REGISTRY}/${IMAGE_NAME}:${GIT_COMMIT_SHORT} -n development
                        kubectl rollout status deployment/myapp -n development --timeout=300s
                    """
                }
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'main'
            }
            steps {
                script {
                    sh """
                        kubectl set image deployment/myapp myapp=${REGISTRY}/${IMAGE_NAME}:${GIT_COMMIT_SHORT} -n staging
                        kubectl rollout status deployment/myapp -n staging --timeout=300s
                    """
                }
            }
            post {
                success {
                    script {
                        sh 'npm run test:e2e -- --env staging'
                    }
                }
            }
        }
        
        stage('Approve Production Deploy') {
            when {
                branch 'main'
            }
            steps {
                script {
                    timeout(time: 5, unit: 'MINUTES') {
                        input message: 'Deploy to production?', ok: 'Deploy',
                              submitterParameter: 'APPROVER'
                    }
                }
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                script {
                    // カナリアデプロイメント
                    sh """
                        # 現在のレプリカ数を保存
                        CURRENT_REPLICAS=\$(kubectl get deployment myapp -n production -o jsonpath='{.spec.replicas}')
                        
                        # カナリア用に1つのPodをデプロイ
                        kubectl patch deployment myapp -n production -p '{"spec":{"replicas":1}}'
                        kubectl set image deployment/myapp myapp=${REGISTRY}/${IMAGE_NAME}:${GIT_COMMIT_SHORT} -n production
                        kubectl rollout status deployment/myapp -n production --timeout=300s
                        
                        # ヘルスチェック
                        sleep 60
                        if curl -f https://myapp.com/health; then
                            echo "Health check passed, scaling up to original replica count"
                            kubectl patch deployment myapp -n production -p "{\"spec\":{\"replicas\":\$CURRENT_REPLICAS}}"
                            kubectl rollout status deployment/myapp -n production --timeout=600s
                        else
                            echo "Health check failed, rolling back"
                            kubectl rollout undo deployment/myapp -n production
                            exit 1
                        fi
                    """
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        
        success {
            script {
                if (env.BRANCH_NAME == 'main') {
                    sh """
                        curl -X POST -H 'Content-type: application/json' \
                            --data '{"text":"✅ ${env.JOB_NAME} #${env.BUILD_NUMBER} deployed successfully to production by ${env.APPROVER}"}' \
                            ${SLACK_WEBHOOK}
                    """
                }
            }
        }
        
        failure {
            sh """
                curl -X POST -H 'Content-type: application/json' \
                    --data '{"text":"❌ ${env.JOB_NAME} #${env.BUILD_NUMBER} failed"}' \
                    ${SLACK_WEBHOOK}
            """
        }
    }
}
'''
        
        print("=== Jenkins パイプライン ===")
        print(jenkins_pipeline)
        
        return jenkins_pipeline

# 使用例
cicd_pipeline = CICDPipeline()
pipeline_design = cicd_pipeline.cicd_pipeline_design()
github_workflow = cicd_pipeline.create_github_actions_pipeline()
gitlab_cicd = cicd_pipeline.create_gitlab_cicd_pipeline()
jenkins_pipeline = cicd_pipeline.create_jenkins_pipeline()
```

## 🔄 Phase 2: GitOpsとインフラ自動化

### 2.1 GitOps戦略

```python
class GitOpsStrategy:
    """
    GitOps戦略の実装
    """
    
    def __init__(self):
        self.gitops_tools = {}
        self.workflows = {}
    
    def gitops_principles(self):
        """GitOps原則"""
        principles = {
            '宣言的': {
                '説明': 'システムの望ましい状態をコードで宣言的に定義',
                '実装': [
                    'KubernetesマニフェストでリソースをYAMLで定義',
                    'Helmチャートでアプリケーション構成を記述',
                    'Terraformでインフラを宣言的に管理',
                    'ArgoCD Application CRDで継続的デプロイを定義'
                ]
            },
            'バージョン管理': {
                '説明': 'すべての設定と状態がGitで管理されている',
                '実装': [
                    'アプリケーション設定をGitリポジトリで管理',
                    'インフラ定義をIaCコードとして保存',
                    'ブランチ戦略でリリース管理',
                    'タグとリリースノートで変更履歴を管理'
                ]
            },
            '自動適用': {
                '説明': 'Gitの変更が自動的に本番環境に反映される',
                '実装': [
                    'ArgoCD/Fluxによる継続的同期',
                    'Webhook/Polllingによる変更検知',
                    'Reconciliation Loopでの状態確保',
                    'セルフヒーリング機能'
                ]
            },
            'セキュア': {
                '説明': 'セキュリティと監査可能性を重視',
                '実装': [
                    'Pull-basedデプロイメントモデル',
                    'RBAC (Role-Based Access Control)',
                    '暗号化されたシークレット管理',
                    '変更履歴の完全な追跡可能性'
                ]
            }
        }
        
        print("=== GitOps 4つの原則 ===")
        for principle, details in principles.items():
            print(f"\n{principle}: {details['説明']}")
            print("実装方法:")
            for implementation in details['実装']:
                print(f"  • {implementation}")
        
        # GitOps vs 従来手法の比較
        comparison = {
            '従来のCI/CD': {
                'デプロイ方式': 'Push-based (CI/CDツールから環境にプッシュ)',
                'アクセス': 'CI/CDツールが本番環境への直接アクセス権限必要',
                '可視性': 'デプロイ時点でのスナップショット',
                'ロールバック': 'CI/CDパイプラインの再実行が必要',
                'セキュリティ': 'CI/CDツールが広範な権限を持つ'
            },
            'GitOps': {
                'デプロイ方式': 'Pull-based (環境側がGitから変更を取得)',
                'アクセス': 'GitOpsエージェントのみが必要最小限の権限',
                '可視性': 'リアルタイムでの現在状態の可視化',
                'ロールバック': 'Gitでの簡単なコミット履歴復元',
                'セキュリティ': '最小権限の原則、監査ログ完備'
            }
        }
        
        print("\n=== GitOps vs 従来手法 ===")
        for aspect in comparison['従来のCI/CD'].keys():
            print(f"\n{aspect}:")
            print(f"  従来: {comparison['従来のCI/CD'][aspect]}")
            print(f"  GitOps: {comparison['GitOps'][aspect]}")
        
        return principles, comparison
    
    def create_argocd_application(self):
        """ArgoCD Application設定"""
        argocd_app = '''apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
  namespace: argocd
  # Finalizerを設定してカスケード削除を防ぐ
  finalizers:
    - resources-finalizer.argocd.argoproj.io
spec:
  # プロジェクト設定
  project: default
  
  # ソース設定（Gitリポジトリ）
  source:
    repoURL: https://github.com/my-org/my-app-config
    targetRevision: HEAD
    path: manifests/production
    
    # Helm設定
    helm:
      # values.yamlファイル
      valueFiles:
        - values.yaml
        - values-production.yaml
      
      # パラメータオーバーライド
      parameters:
        - name: image.tag
          value: v1.2.3
        - name: replicaCount
          value: "5"
      
      # リリース名
      releaseName: my-app
  
  # デプロイ先設定
  destination:
    server: https://kubernetes.default.svc
    namespace: production
  
  # 同期ポリシー
  syncPolicy:
    # 自動同期を有効化
    automated:
      # プルーニング（不要なリソースの削除）
      prune: true
      # セルフヒーリング
      selfHeal: true
      # 同期前にOutOfSyncリソースのみ削除
      allowEmpty: false
    
    # 同期オプション
    syncOptions:
      - CreateNamespace=true
      - PrunePropagationPolicy=foreground
      - PruneLast=true
      - ApplyOutOfSyncOnly=true
      - RespectIgnoreDifferences=true
    
    # 再試行設定
    retry:
      limit: 5
      backoff:
        duration: 5s
        factor: 2
        maxDuration: 3m
  
  # 無視する差分
  ignoreDifferences:
    - group: apps
      kind: Deployment
      jsonPointers:
        - /spec/replicas  # HPAが管理するため無視
    - group: ""
      kind: Secret
      name: my-app-secret
      jsonPointers:
        - /data  # 外部システムが更新するため無視
  
  # ヘルスチェック設定
  revisionHistoryLimit: 10
---
apiVersion: argoproj.io/v1alpha1
kind: AppProject
metadata:
  name: my-project
  namespace: argocd
spec:
  description: My Application Project
  
  # ソースリポジトリ制限
  sourceRepos:
    - 'https://github.com/my-org/*'
    - 'https://charts.bitnami.com/bitnami'
  
  # デプロイ先制限
  destinations:
    - namespace: 'production'
      server: https://kubernetes.default.svc
    - namespace: 'staging'
      server: https://kubernetes.default.svc
  
  # 許可されるクラスターリソース
  clusterResourceWhitelist:
    - group: ''
      kind: Namespace
    - group: rbac.authorization.k8s.io
      kind: ClusterRole
    - group: rbac.authorization.k8s.io
      kind: ClusterRoleBinding
  
  # 許可されるネームスペースリソース
  namespaceResourceWhitelist:
    - group: ''
      kind: '*'
    - group: apps
      kind: '*'
    - group: networking.k8s.io
      kind: '*'
  
  # RBAC設定
  roles:
    - name: admin
      description: Full access to project applications
      policies:
        - p, proj:my-project:admin, applications, *, my-project/*, allow
        - p, proj:my-project:admin, repositories, *, *, allow
      groups:
        - my-org:team-leads
    
    - name: developer
      description: Limited access for developers
      policies:
        - p, proj:my-project:developer, applications, get, my-project/*, allow
        - p, proj:my-project:developer, applications, sync, my-project/*, allow
      groups:
        - my-org:developers
'''
        
        # ApplicationSet設定（複数環境管理）
        appset_config = '''apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: my-app-environments
  namespace: argocd
spec:
  generators:
    # Git files generator - 環境設定ファイルベース
    - git:
        repoURL: https://github.com/my-org/my-app-config
        revision: HEAD
        files:
          - path: "environments/*/config.json"
    
    # Cluster generator - 複数クラスター対応
    - clusters:
        selector:
          matchLabels:
            environment: production
        values:
          revision: main
    
    # Matrix generator - 組み合わせ
    - matrix:
        generators:
          - git:
              repoURL: https://github.com/my-org/my-app-config
              revision: HEAD
              directories:
                - path: applications/*
          - clusters:
              selector:
                matchLabels:
                  environment: staging
  
  template:
    metadata:
      name: '{{path.basename}}-{{name}}'
      labels:
        environment: '{{metadata.labels.environment}}'
    spec:
      project: my-project
      source:
        repoURL: https://github.com/my-org/my-app-config
        targetRevision: '{{revision}}'
        path: '{{path}}'
        helm:
          valueFiles:
            - 'values.yaml'
            - 'values-{{metadata.labels.environment}}.yaml'
          parameters:
            - name: environment
              value: '{{metadata.labels.environment}}'
            - name: cluster.name
              value: '{{name}}'
      destination:
        server: '{{server}}'
        namespace: '{{path.basename}}-{{metadata.labels.environment}}'
      syncPolicy:
        automated:
          prune: true
          selfHeal: true
        syncOptions:
          - CreateNamespace=true
'''
        
        print("=== ArgoCD Application設定 ===")
        print(argocd_app)
        print("\n=== ApplicationSet設定 ===")
        print(appset_config)
        
        return argocd_app, appset_config
    
    def create_flux_configuration(self):
        """Flux v2設定"""
        flux_source = '''apiVersion: source.toolkit.fluxcd.io/v1beta2
kind: GitRepository
metadata:
  name: my-app-source
  namespace: flux-system
spec:
  interval: 1m
  url: https://github.com/my-org/my-app-config
  ref:
    branch: main
  secretRef:
    name: git-credentials
---
apiVersion: source.toolkit.fluxcd.io/v1beta2
kind: HelmRepository
metadata:
  name: bitnami
  namespace: flux-system
spec:
  interval: 10m
  url: https://charts.bitnami.com/bitnami
---
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: my-app
  namespace: production
spec:
  interval: 5m
  chart:
    spec:
      chart: ./charts/my-app
      sourceRef:
        kind: GitRepository
        name: my-app-source
        namespace: flux-system
      version: ">=1.0.0"
  
  # カスタマイゼーション
  values:
    image:
      repository: my-registry/my-app
      tag: v1.2.3
    replicaCount: 3
    
    ingress:
      enabled: true
      hosts:
        - host: myapp.production.com
          paths:
            - path: /
              pathType: Prefix
  
  # アップグレード設定
  upgrade:
    remediation:
      retries: 3
    cleanupOnFail: true
  
  # ロールバック設定
  rollback:
    cleanupOnFail: true
    timeout: 10m
  
  # テスト設定
  test:
    enable: true
    timeout: 5m
  
  # 依存関係
  dependsOn:
    - name: postgresql
      namespace: database
---
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: my-app-production
  namespace: flux-system
spec:
  interval: 10m
  sourceRef:
    kind: GitRepository
    name: my-app-source
  path: "./manifests/production"
  prune: true
  
  # ヘルスチェック
  healthChecks:
    - apiVersion: apps/v1
      kind: Deployment
      name: my-app
      namespace: production
  
  # 依存関係
  dependsOn:
    - name: infrastructure
  
  # 後処理
  postBuild:
    substitute:
      cluster_name: "production-cluster"
      environment: "production"
    substituteFrom:
      - kind: ConfigMap
        name: cluster-config
      - kind: Secret
        name: cluster-secrets
'''
        
        # Flux アラート設定
        flux_alerts = '''apiVersion: notification.toolkit.fluxcd.io/v1beta1
kind: Provider
metadata:
  name: slack
  namespace: flux-system
spec:
  type: slack
  channel: deployments
  secretRef:
    name: slack-webhook
---
apiVersion: notification.toolkit.fluxcd.io/v1beta1
kind: Alert
metadata:
  name: my-app-alerts
  namespace: flux-system
spec:
  providerRef:
    name: slack
  eventSeverity: info
  eventSources:
    - kind: GitRepository
      name: my-app-source
    - kind: Kustomization
      name: my-app-production
    - kind: HelmRelease
      name: my-app
      namespace: production
  summary: "Cluster {{.targetNamespace}}/{{.target}}"
  suspend: false
---
apiVersion: image.toolkit.fluxcd.io/v1beta1
kind: ImageRepository
metadata:
  name: my-app-image
  namespace: flux-system
spec:
  image: my-registry/my-app
  interval: 1m
---
apiVersion: image.toolkit.fluxcd.io/v1beta1
kind: ImagePolicy
metadata:
  name: my-app-policy
  namespace: flux-system
spec:
  imageRepositoryRef:
    name: my-app-image
  policy:
    semver:
      range: ">=1.0.0"
---
apiVersion: image.toolkit.fluxcd.io/v1beta1
kind: ImageUpdateAutomation
metadata:
  name: my-app-automation
  namespace: flux-system
spec:
  interval: 5m
  sourceRef:
    kind: GitRepository
    name: my-app-source
  git:
    checkout:
      ref:
        branch: main
    commit:
      author:
        email: flux@example.com
        name: Flux Bot
      messageTemplate: |
        Automated image update
        
        Automation name: {{ .AutomationObject }}
        
        Files:
        {{ range $filename, $_ := .Updated.Files -}}
        - {{ $filename }}
        {{ end -}}
        
        Objects:
        {{ range $resource, $_ := .Updated.Objects -}}
        - {{ $resource.Kind }} {{ $resource.Name }}
        {{ end -}}
        
        Images:
        {{ range .Updated.Images -}}
        - {{.}}
        {{ end -}}
    push:
      branch: main
  update:
    path: "./manifests"
    strategy: Setters
'''
        
        print("=== Flux v2 設定 ===")
        print(flux_source)
        print("\n=== Flux アラート設定 ===")
        print(flux_alerts)
        
        return flux_source, flux_alerts

# 使用例
gitops = GitOpsStrategy()
principles, comparison = gitops.gitops_principles()
argocd_app, appset_config = gitops.create_argocd_application()
flux_source, flux_alerts = gitops.create_flux_configuration()
```

### 2.2 Infrastructure as Code の高度な実践

```python
class AdvancedIaC:
    """
    高度なInfrastructure as Code実践
    """
    
    def __init__(self):
        self.iac_tools = {}
        self.best_practices = {}
    
    def iac_tool_comparison(self):
        """IaCツール比較"""
        tools_comparison = {
            'Terraform': {
                '学習コスト': '中',
                '対応プロバイダ': '非常に多い（3000+）',
                '状態管理': '独自形式のState file',
                'プラン機能': '優秀（terraform plan）',
                '適用場面': 'マルチクラウド、インフラ全般',
                '特徴': ['HCL言語', 'プロバイダープラグイン', 'モジュール化'],
                '例': 'AWS, Azure, GCP, Kubernetes等'
            },
            'Pulumi': {
                '学習コスト': '中-高',
                '対応プロバイダ': '多い（Terraformプロバイダも利用可能）',
                '状態管理': 'Pulumi Service（またはセルフホスト）',
                'プラン機能': '優秀（pulumi preview）',
                '適用場面': '複雑なロジック、既存コードベース統合',
                '特徴': ['TypeScript/Python/Go/C#', '実プログラミング言語', 'ユニットテスト可能'],
                '例': 'アプリケーションとインフラの統合'
            },
            'AWS CDK': {
                '学習コスト': '中',
                '対応プロバイダ': 'AWS専用',
                '状態管理': 'CloudFormation',
                'プラン機能': '優秀（cdk diff）',
                '適用場面': 'AWS特化、型安全性重視',
                '特徴': ['TypeScript/Python/Java等', 'コンストラクト', '高レベル抽象化'],
                '例': 'AWS Lambda + API Gateway + DynamoDB'
            },
            'Ansible': {
                '学習コスト': '低-中',
                '対応プロバイダ': '多い（設定管理中心）',
                '状態管理': 'エージェントレス',
                'プラン機能': '基本的（--check モード）',
                '適用場面': '設定管理、サーバー構成',
                '特徴': ['YAML', 'プレイブック', 'べき等性'],
                '例': 'サーバー設定、アプリケーションデプロイ'
            }
        }
        
        print("=== IaCツール比較 ===")
        for tool, features in tools_comparison.items():
            print(f"\n{tool}:")
            for feature, value in features.items():
                if feature == '特徴':
                    print(f"  {feature}: {', '.join(value)}")
                else:
                    print(f"  {feature}: {value}")
        
        # 選択基準
        selection_criteria = {
            'マルチクラウド対応': 'Terraform, Pulumi',
            'プログラミング言語統合': 'Pulumi, AWS CDK',
            'AWS特化': 'AWS CDK, Terraform',
            '学習コスト重視': 'Ansible, Terraform',
            'コミュニティサポート': 'Terraform, Ansible',
            '企業サポート': 'すべて（商用版あり）'
        }
        
        print("\n=== 選択基準 ===")
        for criteria, recommendation in selection_criteria.items():
            print(f"{criteria}: {recommendation}")
        
        return tools_comparison
    
    def create_pulumi_infrastructure(self):
        """Pulumi インフラストラクチャ例"""
        pulumi_code = '''import pulumi
import pulumi_aws as aws
import pulumi_kubernetes as k8s
from typing import List, Dict, Any

class InfrastructureStack:
    """AWS + Kubernetes インフラストラクチャスタック"""
    
    def __init__(self):
        self.config = pulumi.Config()
        self.project_name = pulumi.get_project()
        self.stack_name = pulumi.get_stack()
        
        # 共通タグ
        self.common_tags = {
            "Project": self.project_name,
            "Environment": self.stack_name,
            "ManagedBy": "pulumi"
        }
        
        # インフラ構築
        self.vpc = self._create_vpc()
        self.eks_cluster = self._create_eks_cluster()
        self.rds_instance = self._create_rds_instance()
        self.redis_cluster = self._create_redis_cluster()
        
        # Kubernetesリソース
        self.k8s_provider = self._create_k8s_provider()
        self.app_namespace = self._create_app_namespace()
        self.app_deployment = self._create_app_deployment()
        
        # 出力値
        self._export_outputs()
    
    def _create_vpc(self) -> aws.ec2.Vpc:
        """VPC作成"""
        vpc = aws.ec2.Vpc(
            f"{self.project_name}-vpc",
            cidr_block="10.0.0.0/16",
            enable_dns_hostnames=True,
            enable_dns_support=True,
            tags={**self.common_tags, "Name": f"{self.project_name}-vpc"}
        )
        
        # パブリックサブネット
        public_subnets = []
        for i, az in enumerate(["us-west-2a", "us-west-2b"]):
            subnet = aws.ec2.Subnet(
                f"{self.project_name}-public-subnet-{i+1}",
                vpc_id=vpc.id,
                cidr_block=f"10.0.{i+1}.0/24",
                availability_zone=az,
                map_public_ip_on_launch=True,
                tags={**self.common_tags, "Name": f"{self.project_name}-public-{i+1}"}
            )
            public_subnets.append(subnet)
        
        # プライベートサブネット
        private_subnets = []
        for i, az in enumerate(["us-west-2a", "us-west-2b"]):
            subnet = aws.ec2.Subnet(
                f"{self.project_name}-private-subnet-{i+1}",
                vpc_id=vpc.id,
                cidr_block=f"10.0.{i+10}.0/24",
                availability_zone=az,
                tags={**self.common_tags, "Name": f"{self.project_name}-private-{i+1}"}
            )
            private_subnets.append(subnet)
        
        # インターネットゲートウェイ
        igw = aws.ec2.InternetGateway(
            f"{self.project_name}-igw",
            vpc_id=vpc.id,
            tags={**self.common_tags, "Name": f"{self.project_name}-igw"}
        )
        
        # NATゲートウェイ
        for i, subnet in enumerate(public_subnets):
            eip = aws.ec2.Eip(
                f"{self.project_name}-nat-eip-{i+1}",
                domain="vpc",
                tags={**self.common_tags, "Name": f"{self.project_name}-nat-eip-{i+1}"}
            )
            
            nat_gw = aws.ec2.NatGateway(
                f"{self.project_name}-nat-{i+1}",
                allocation_id=eip.id,
                subnet_id=subnet.id,
                tags={**self.common_tags, "Name": f"{self.project_name}-nat-{i+1}"}
            )
        
        # 追加のVPC設定をここに...
        self.public_subnets = public_subnets
        self.private_subnets = private_subnets
        
        return vpc
    
    def _create_eks_cluster(self) -> aws.eks.Cluster:
        """EKSクラスター作成"""
        # IAMロール
        cluster_role = aws.iam.Role(
            f"{self.project_name}-eks-cluster-role",
            assume_role_policy="""{
                "Version": "2012-10-17",
                "Statement": [{
                    "Action": "sts:AssumeRole",
                    "Effect": "Allow",
                    "Principal": {"Service": "eks.amazonaws.com"}
                }]
            }""",
            tags=self.common_tags
        )
        
        aws.iam.RolePolicyAttachment(
            f"{self.project_name}-eks-cluster-policy",
            role=cluster_role.name,
            policy_arn="arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
        )
        
        # EKSクラスター
        cluster = aws.eks.Cluster(
            f"{self.project_name}-cluster",
            role_arn=cluster_role.arn,
            version="1.27",
            vpc_config=aws.eks.ClusterVpcConfigArgs(
                subnet_ids=[s.id for s in self.public_subnets + self.private_subnets],
                endpoint_private_access=True,
                endpoint_public_access=True,
                public_access_cidrs=["0.0.0.0/0"]
            ),
            enabled_cluster_log_types=["api", "audit", "authenticator", "controllerManager", "scheduler"],
            tags=self.common_tags
        )
        
        # ノードグループ
        node_role = aws.iam.Role(
            f"{self.project_name}-eks-node-role",
            assume_role_policy="""{
                "Version": "2012-10-17",
                "Statement": [{
                    "Action": "sts:AssumeRole",
                    "Effect": "Allow",
                    "Principal": {"Service": "ec2.amazonaws.com"}
                }]
            }""",
            tags=self.common_tags
        )
        
        for policy in [
            "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
            "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
            "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
        ]:
            aws.iam.RolePolicyAttachment(
                f"{self.project_name}-node-policy-{policy.split('/')[-1]}",
                role=node_role.name,
                policy_arn=policy
            )
        
        node_group = aws.eks.NodeGroup(
            f"{self.project_name}-node-group",
            cluster_name=cluster.name,
            node_role_arn=node_role.arn,
            subnet_ids=[s.id for s in self.private_subnets],
            instance_types=["t3.medium"],
            scaling_config=aws.eks.NodeGroupScalingConfigArgs(
                desired_size=3,
                max_size=10,
                min_size=1
            ),
            update_config=aws.eks.NodeGroupUpdateConfigArgs(
                max_unavailable=1
            ),
            tags=self.common_tags
        )
        
        return cluster
    
    def _create_rds_instance(self) -> aws.rds.Instance:
        """RDSインスタンス作成"""
        # サブネットグループ
        db_subnet_group = aws.rds.SubnetGroup(
            f"{self.project_name}-db-subnet-group",
            subnet_ids=[s.id for s in self.private_subnets],
            tags=self.common_tags
        )
        
        # セキュリティグループ
        db_security_group = aws.ec2.SecurityGroup(
            f"{self.project_name}-db-sg",
            vpc_id=self.vpc.id,
            ingress=[aws.ec2.SecurityGroupIngressArgs(
                from_port=5432,
                to_port=5432,
                protocol="tcp",
                cidr_blocks=["10.0.0.0/16"]
            )],
            tags=self.common_tags
        )
        
        # RDSインスタンス
        return aws.rds.Instance(
            f"{self.project_name}-db",
            engine="postgres",
            engine_version="15.3",
            instance_class="db.t3.micro",
            allocated_storage=20,
            storage_type="gp2",
            storage_encrypted=True,
            db_name="myapp",
            username="postgres",
            password=self.config.require_secret("db_password"),
            vpc_security_group_ids=[db_security_group.id],
            db_subnet_group_name=db_subnet_group.name,
            backup_retention_period=7,
            backup_window="03:00-04:00",
            maintenance_window="Sun:04:00-Sun:05:00",
            skip_final_snapshot=True,
            tags=self.common_tags
        )
    
    def _create_redis_cluster(self) -> aws.elasticache.ReplicationGroup:
        """Redis クラスター作成"""
        cache_subnet_group = aws.elasticache.SubnetGroup(
            f"{self.project_name}-cache-subnet-group",
            subnet_ids=[s.id for s in self.private_subnets]
        )
        
        cache_security_group = aws.ec2.SecurityGroup(
            f"{self.project_name}-cache-sg",
            vpc_id=self.vpc.id,
            ingress=[aws.ec2.SecurityGroupIngressArgs(
                from_port=6379,
                to_port=6379,
                protocol="tcp",
                cidr_blocks=["10.0.0.0/16"]
            )],
            tags=self.common_tags
        )
        
        return aws.elasticache.ReplicationGroup(
            f"{self.project_name}-cache",
            description="Redis cluster for my app",
            node_type="cache.t3.micro",
            port=6379,
            parameter_group_name="default.redis7",
            num_cache_clusters=2,
            subnet_group_name=cache_subnet_group.name,
            security_group_ids=[cache_security_group.id],
            at_rest_encryption_enabled=True,
            transit_encryption_enabled=True,
            tags=self.common_tags
        )
    
    def _create_k8s_provider(self) -> k8s.Provider:
        """Kubernetesプロバイダー作成"""
        return k8s.Provider(
            "k8s-provider",
            kubeconfig=pulumi.Output.all(
                self.eks_cluster.endpoint,
                self.eks_cluster.certificate_authority.apply(lambda ca: ca.data),
                self.eks_cluster.name
            ).apply(lambda args: self._generate_kubeconfig(*args))
        )
    
    def _generate_kubeconfig(self, endpoint: str, cert_data: str, cluster_name: str) -> str:
        """kubeconfig生成"""
        return f"""
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: {cert_data}
    server: {endpoint}
  name: {cluster_name}
contexts:
- context:
    cluster: {cluster_name}
    user: {cluster_name}
  name: {cluster_name}
current-context: {cluster_name}
kind: Config
preferences: {{}}
users:
- name: {cluster_name}
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1beta1
      command: aws
      args:
        - eks
        - get-token
        - --cluster-name
        - {cluster_name}
"""
    
    def _create_app_namespace(self) -> k8s.core.v1.Namespace:
        """アプリケーション用ネームスペース作成"""
        return k8s.core.v1.Namespace(
            f"{self.project_name}-namespace",
            metadata=k8s.meta.v1.ObjectMetaArgs(
                name=self.project_name,
                labels={"app": self.project_name}
            ),
            opts=pulumi.ResourceOptions(provider=self.k8s_provider)
        )
    
    def _create_app_deployment(self) -> k8s.apps.v1.Deployment:
        """アプリケーションデプロイメント作成"""
        return k8s.apps.v1.Deployment(
            f"{self.project_name}-deployment",
            metadata=k8s.meta.v1.ObjectMetaArgs(
                namespace=self.app_namespace.metadata.name,
                name=self.project_name
            ),
            spec=k8s.apps.v1.DeploymentSpecArgs(
                replicas=3,
                selector=k8s.meta.v1.LabelSelectorArgs(
                    match_labels={"app": self.project_name}
                ),
                template=k8s.core.v1.PodTemplateSpecArgs(
                    metadata=k8s.meta.v1.ObjectMetaArgs(
                        labels={"app": self.project_name}
                    ),
                    spec=k8s.core.v1.PodSpecArgs(
                        containers=[k8s.core.v1.ContainerArgs(
                            name=self.project_name,
                            image=f"nginx:1.21",
                            ports=[k8s.core.v1.ContainerPortArgs(
                                container_port=80
                            )],
                            env=[
                                k8s.core.v1.EnvVarArgs(
                                    name="DATABASE_URL",
                                    value=pulumi.Output.concat(
                                        "postgresql://postgres:",
                                        self.config.require_secret("db_password"),
                                        "@",
                                        self.rds_instance.endpoint,
                                        ":5432/myapp"
                                    )
                                ),
                                k8s.core.v1.EnvVarArgs(
                                    name="REDIS_URL",
                                    value=pulumi.Output.concat(
                                        "redis://",
                                        self.redis_cluster.configuration_endpoint_address,
                                        ":6379"
                                    )
                                )
                            ]
                        )]
                    )
                )
            ),
            opts=pulumi.ResourceOptions(provider=self.k8s_provider)
        )
    
    def _export_outputs(self):
        """出力値設定"""
        pulumi.export("vpc_id", self.vpc.id)
        pulumi.export("cluster_name", self.eks_cluster.name)
        pulumi.export("cluster_endpoint", self.eks_cluster.endpoint)
        pulumi.export("rds_endpoint", self.rds_instance.endpoint)
        pulumi.export("redis_endpoint", self.redis_cluster.configuration_endpoint_address)

# スタック作成
stack = InfrastructureStack()
'''
        
        print("=== Pulumi インフラストラクチャ実装例 ===")
        print(pulumi_code)
        
        return pulumi_code
    
    def create_testing_strategy(self):
        """IaCテスト戦略"""
        testing_approaches = {
            'Static Analysis': {
                '目的': 'コード品質とセキュリティチェック',
                'ツール': ['tflint', 'checkov', 'terrascan', 'tfsec'],
                '検証項目': [
                    'ベストプラクティス遵守',
                    'セキュリティ設定',
                    'リソース命名規則',
                    '廃止予定機能の使用'
                ]
            },
            'Unit Testing': {
                '目的': 'モジュール単体の動作確認',
                'ツール': ['terratest', 'pytest', 'go test'],
                '検証項目': [
                    'モジュールの入出力',
                    'リソース属性',
                    '条件分岐ロジック',
                    'エラーハンドリング'
                ]
            },
            'Integration Testing': {
                '目的': '実環境での動作確認',
                'ツール': ['terratest', 'kitchen-terraform', 'inspec'],
                '検証項目': [
                    'リソース間の連携',
                    'ネットワーク接続性',
                    'セキュリティ設定効果',
                    'パフォーマンス'
                ]
            },
            'End-to-End Testing': {
                '目的': 'システム全体の動作確認',
                'ツール': ['terratest', 'cypress', 'postman'],
                '検証項目': [
                    'アプリケーション動作',
                    'ユーザーシナリオ',
                    '災害復旧',
                    'スケーリング'
                ]
            }
        }
        
        print("=== IaCテスト戦略 ===")
        for approach, details in testing_approaches.items():
            print(f"\n{approach}: {details['目的']}")
            print(f"ツール: {', '.join(details['ツール'])}")
            print("検証項目:")
            for item in details['検証項目']:
                print(f"  • {item}")
        
        # Terratest実装例
        terratest_example = '''package test

import (
    "testing"
    "time"

    "github.com/gruntwork-io/terratest/modules/aws"
    "github.com/gruntwork-io/terratest/modules/terraform"
    "github.com/stretchr/testify/assert"
)

func TestTerraformEKSCluster(t *testing.T) {
    t.Parallel()

    // Terraform設定
    terraformOptions := terraform.WithDefaultRetryableErrors(t, &terraform.Options{
        TerraformDir: "../examples/eks",
        Vars: map[string]interface{}{
            "cluster_name": "test-cluster",
            "region":       "us-west-2",
        },
    })

    // テスト終了時にリソースを削除
    defer terraform.Destroy(t, terraformOptions)

    // Terraformでインフラ作成
    terraform.InitAndApply(t, terraformOptions)

    // 出力値取得
    clusterName := terraform.Output(t, terraformOptions, "cluster_name")
    clusterEndpoint := terraform.Output(t, terraformOptions, "cluster_endpoint")
    vpcId := terraform.Output(t, terraformOptions, "vpc_id")

    // アサーション
    assert.Equal(t, "test-cluster", clusterName)
    assert.Contains(t, clusterEndpoint, "eks.us-west-2.amazonaws.com")

    // AWSリソースの確認
    region := "us-west-2"
    
    // EKSクラスター存在確認
    cluster := aws.GetEksCluster(t, region, clusterName)
    assert.Equal(t, "ACTIVE", *cluster.Status)
    
    // VPC確認
    vpc := aws.GetVpcById(t, vpcId, region)
    assert.Equal(t, "10.0.0.0/16", *vpc.CidrBlock)

    // ノードグループ確認
    nodeGroups := aws.GetEksClusterNodeGroups(t, region, clusterName)
    assert.Greater(t, len(nodeGroups), 0)

    // セキュリティグループ確認
    securityGroups := aws.GetSecurityGroupsForVpc(t, vpcId, region)
    assert.Greater(t, len(securityGroups), 0)

    // タグ確認
    expectedTags := map[string]string{
        "Environment": "test",
        "ManagedBy":   "terraform",
    }
    aws.AssertEc2TagsExist(t, region, vpcId, expectedTags)
}

func TestTerraformVPCNetworking(t *testing.T) {
    t.Parallel()

    terraformOptions := &terraform.Options{
        TerraformDir: "../modules/vpc",
        Vars: map[string]interface{}{
            "vpc_cidr": "10.1.0.0/16",
            "azs":      []string{"us-west-2a", "us-west-2b"},
        },
    }

    defer terraform.Destroy(t, terraformOptions)
    terraform.InitAndApply(t, terraformOptions)

    // ネットワーク接続性テスト
    vpcId := terraform.Output(t, terraformOptions, "vpc_id")
    publicSubnetIds := terraform.OutputList(t, terraformOptions, "public_subnet_ids")
    privateSubnetIds := terraform.OutputList(t, terraformOptions, "private_subnet_ids")

    region := "us-west-2"

    // パブリックサブネットのインターネット接続確認
    for _, subnetId := range publicSubnetIds {
        subnet := aws.GetSubnetById(t, subnetId, region)
        assert.True(t, *subnet.MapPublicIpOnLaunch)
    }

    // プライベートサブネットのNAT接続確認
    for _, subnetId := range privateSubnetIds {
        subnet := aws.GetSubnetById(t, subnetId, region)
        assert.False(t, *subnet.MapPublicIpOnLaunch)
    }

    // ルートテーブル確認
    routeTables := aws.GetRouteTablesForVpc(t, vpcId, region)
    assert.Greater(t, len(routeTables), 0)
}
'''
        
        print("\n=== Terratest実装例 ===")
        print(terratest_example)
        
        return testing_approaches, terratest_example

# 使用例
advanced_iac = AdvancedIaC()
tools_comparison = advanced_iac.iac_tool_comparison()
pulumi_code = advanced_iac.create_pulumi_infrastructure()
testing_approaches, terratest_example = advanced_iac.create_testing_strategy()
```

## 🤖 Phase 3: MLOps実践

### 3.1 機械学習パイプライン

```python
class MLOpsPipeline:
    """
    MLOpsパイプラインの実装
    """
    
    def __init__(self):
        self.pipeline_components = {}
        self.ml_tools = {}
    
    def mlops_lifecycle(self):
        """MLOpsライフサイクル"""
        lifecycle_stages = {
            'データ管理': {
                '目的': 'データの収集、前処理、バージョン管理',
                'ツール': ['DVC', 'MLflow', 'Feast', 'Great Expectations'],
                'アクティビティ': [
                    'データ収集・取得',
                    'データ検証・品質チェック',
                    'データ前処理・特徴量エンジニアリング',
                    'データバージョニング',
                    'データカタログ管理'
                ]
            },
            'モデル開発': {
                '目的': 'モデルの開発、実験、評価',
                'ツール': ['Jupyter', 'MLflow', 'Weights & Biases', 'TensorBoard'],
                'アクティビティ': [
                    '実験管理・追跡',
                    'ハイパーパラメータチューニング',
                    'モデル評価・比較',
                    'モデルバージョニング',
                    'アーティファクト管理'
                ]
            },
            'モデル検証': {
                '目的': 'モデルの品質とパフォーマンス確認',
                'ツール': ['Great Expectations', 'MLflow', 'Evidently', 'Alibi'],
                'アクティビティ': [
                    'モデル性能テスト',
                    'バイアス・公平性チェック',
                    'セキュリティ検証',
                    'A/Bテスト設計',
                    '承認プロセス'
                ]
            },
            'モデルデプロイ': {
                '目的': 'モデルの本番環境への展開',
                'ツール': ['Kubernetes', 'Docker', 'Seldon', 'KServe', 'BentoML'],
                'アクティビティ': [
                    'モデルサービング',
                    'カナリアデプロイ',
                    'ブルーグリーンデプロイ',
                    'トラフィック分割',
                    'ロールバック機能'
                ]
            },
            'モニタリング': {
                '目的': 'モデルの継続的な監視と改善',
                'ツール': ['Prometheus', 'Grafana', 'Evidently', 'Fiddler'],
                'アクティビティ': [
                    'パフォーマンス監視',
                    'データドリフト検出',
                    'モデルドリフト検出',
                    'アラート管理',
                    '再訓練トリガー'
                ]
            }
        }
        
        print("=== MLOpsライフサイクル ===")
        for stage, details in lifecycle_stages.items():
            print(f"\n{stage}: {details['目的']}")
            print(f"ツール: {', '.join(details['ツール'])}")
            print("アクティビティ:")
            for activity in details['アクティビティ']:
                print(f"  • {activity}")
        
        return lifecycle_stages
    
    def create_kubeflow_pipeline(self):
        """Kubeflow パイプライン"""
        kubeflow_pipeline = '''from kfp import dsl, components
from kfp.components import InputPath, OutputPath
import kfp

# カスタムコンポーネント定義
def load_data_op():
    """データ読み込みコンポーネント"""
    return components.create_component_from_func(
        func=load_data,
        base_image='python:3.9',
        packages_to_install=['pandas', 'scikit-learn', 'boto3']
    )

def load_data(
    data_path: str,
    output_data_path: OutputPath('Dataset')
) -> str:
    """データ読み込み関数"""
    import pandas as pd
    import pickle
    import boto3
    
    # S3からデータ読み込み
    s3 = boto3.client('s3')
    # データ処理ロジック...
    
    # 処理済みデータを保存
    with open(output_data_path, 'wb') as f:
        pickle.dump(processed_data, f)
    
    return f"データ読み込み完了: {len(processed_data)} 行"

def preprocess_data_op():
    """前処理コンポーネント"""
    return components.create_component_from_func(
        func=preprocess_data,
        base_image='python:3.9',
        packages_to_install=['pandas', 'scikit-learn', 'numpy']
    )

def preprocess_data(
    input_data_path: InputPath('Dataset'),
    output_features_path: OutputPath('Features'),
    output_target_path: OutputPath('Target')
) -> str:
    """データ前処理関数"""
    import pandas as pd
    import pickle
    from sklearn.preprocessing import StandardScaler, LabelEncoder
    
    # データ読み込み
    with open(input_data_path, 'rb') as f:
        data = pickle.load(f)
    
    # 特徴量エンジニアリング
    # ... 前処理ロジック ...
    
    # 特徴量とターゲットを保存
    with open(output_features_path, 'wb') as f:
        pickle.dump(X_processed, f)
    
    with open(output_target_path, 'wb') as f:
        pickle.dump(y_processed, f)
    
    return f"前処理完了: {X_processed.shape}"

def train_model_op():
    """モデル訓練コンポーネント"""
    return components.create_component_from_func(
        func=train_model,
        base_image='python:3.9',
        packages_to_install=['scikit-learn', 'mlflow', 'boto3']
    )

def train_model(
    features_path: InputPath('Features'),
    target_path: InputPath('Target'),
    model_path: OutputPath('Model'),
    hyperparameters: dict,
    mlflow_tracking_uri: str
) -> dict:
    """モデル訓練関数"""
    import pickle
    import mlflow
    import mlflow.sklearn
    from sklearn.ensemble import RandomForestClassifier
    from sklearn.model_selection import cross_val_score
    from sklearn.metrics import accuracy_score, f1_score
    
    # MLflow設定
    mlflow.set_tracking_uri(mlflow_tracking_uri)
    
    with mlflow.start_run():
        # データ読み込み
        with open(features_path, 'rb') as f:
            X = pickle.load(f)
        with open(target_path, 'rb') as f:
            y = pickle.load(f)
        
        # モデル訓練
        model = RandomForestClassifier(**hyperparameters)
        model.fit(X, y)
        
        # 評価
        cv_scores = cross_val_score(model, X, y, cv=5)
        accuracy = cv_scores.mean()
        
        # MLflowにログ
        mlflow.log_params(hyperparameters)
        mlflow.log_metric("cv_accuracy", accuracy)
        mlflow.log_metric("cv_std", cv_scores.std())
        mlflow.sklearn.log_model(model, "model")
        
        # モデル保存
        with open(model_path, 'wb') as f:
            pickle.dump(model, f)
        
        return {
            "accuracy": accuracy,
            "std": cv_scores.std(),
            "model_uri": mlflow.get_artifact_uri("model")
        }

def evaluate_model_op():
    """モデル評価コンポーネント"""
    return components.create_component_from_func(
        func=evaluate_model,
        base_image='python:3.9',
        packages_to_install=['scikit-learn', 'pandas']
    )

def evaluate_model(
    model_path: InputPath('Model'),
    test_features_path: InputPath('Features'),
    test_target_path: InputPath('Target'),
    metrics_path: OutputPath('Metrics')
) -> dict:
    """モデル評価関数"""
    import pickle
    import json
    from sklearn.metrics import classification_report, confusion_matrix
    
    # モデルとテストデータ読み込み
    with open(model_path, 'rb') as f:
        model = pickle.load(f)
    
    with open(test_features_path, 'rb') as f:
        X_test = pickle.load(f)
    
    with open(test_target_path, 'rb') as f:
        y_test = pickle.load(f)
    
    # 予測と評価
    y_pred = model.predict(X_test)
    
    metrics = {
        "classification_report": classification_report(y_test, y_pred, output_dict=True),
        "confusion_matrix": confusion_matrix(y_test, y_pred).tolist()
    }
    
    # メトリクス保存
    with open(metrics_path, 'w') as f:
        json.dump(metrics, f)
    
    return {
        "accuracy": metrics["classification_report"]["accuracy"],
        "f1_weighted": metrics["classification_report"]["weighted avg"]["f1-score"]
    }

def deploy_model_op():
    """モデルデプロイコンポーネント"""
    return components.create_component_from_func(
        func=deploy_model,
        base_image='python:3.9',
        packages_to_install=['kubernetes', 'boto3']
    )

def deploy_model(
    model_path: InputPath('Model'),
    deployment_config: dict,
    kubeconfig_path: str
) -> str:
    """モデルデプロイ関数"""
    import pickle
    import boto3
    from kubernetes import client, config
    import yaml
    
    # モデルをS3にアップロード
    s3 = boto3.client('s3')
    bucket_name = deployment_config['model_bucket']
    model_key = f"models/{deployment_config['model_name']}/model.pkl"
    
    s3.upload_file(model_path, bucket_name, model_key)
    
    # Kubernetesデプロイメント
    config.load_kube_config(config_file=kubeconfig_path)
    
    deployment_yaml = f"""
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {deployment_config['model_name']}-serving
  namespace: {deployment_config['namespace']}
spec:
  replicas: {deployment_config['replicas']}
  selector:
    matchLabels:
      app: {deployment_config['model_name']}-serving
  template:
    metadata:
      labels:
        app: {deployment_config['model_name']}-serving
    spec:
      containers:
      - name: model-server
        image: {deployment_config['serving_image']}
        env:
        - name: MODEL_S3_URI
          value: s3://{bucket_name}/{model_key}
        - name: MODEL_NAME
          value: {deployment_config['model_name']}
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
"""
    
    # デプロイメント適用
    apps_v1 = client.AppsV1Api()
    deployment = yaml.safe_load(deployment_yaml)
    
    try:
        apps_v1.create_namespaced_deployment(
            namespace=deployment_config['namespace'],
            body=deployment
        )
        return f"モデル {deployment_config['model_name']} のデプロイが完了しました"
    except Exception as e:
        return f"デプロイエラー: {str(e)}"

# パイプライン定義
@dsl.pipeline(
    name='ML Training Pipeline',
    description='Complete ML training and deployment pipeline'
)
def ml_pipeline(
    data_path: str = 's3://my-bucket/data/training_data.csv',
    hyperparameters: dict = {'n_estimators': 100, 'max_depth': 10},
    mlflow_tracking_uri: str = 'http://mlflow-server:5000',
    deployment_config: dict = {
        'model_name': 'my-model',
        'namespace': 'production',
        'replicas': 3,
        'model_bucket': 'my-model-bucket',
        'serving_image': 'my-registry/model-server:latest'
    }
):
    """MLパイプライン定義"""
    
    # データ読み込み
    load_data_task = load_data_op()(
        data_path=data_path
    )
    
    # データ前処理
    preprocess_task = preprocess_data_op()(
        input_data_path=load_data_task.outputs['output_data_path']
    )
    
    # モデル訓練
    train_task = train_model_op()(
        features_path=preprocess_task.outputs['output_features_path'],
        target_path=preprocess_task.outputs['output_target_path'],
        hyperparameters=hyperparameters,
        mlflow_tracking_uri=mlflow_tracking_uri
    )
    
    # モデル評価
    evaluate_task = evaluate_model_op()(
        model_path=train_task.outputs['model_path'],
        test_features_path=preprocess_task.outputs['output_features_path'],
        test_target_path=preprocess_task.outputs['output_target_path']
    )
    
    # 条件付きデプロイ（精度が閾値を超えた場合のみ）
    with dsl.Condition(evaluate_task.outputs['accuracy'] > 0.85):
        deploy_task = deploy_model_op()(
            model_path=train_task.outputs['model_path'],
            deployment_config=deployment_config,
            kubeconfig_path='/tmp/kubeconfig'
        )

# パイプライン実行
if __name__ == '__main__':
    import kfp
    
    client = kfp.Client()
    
    # パイプラインをコンパイル
    kfp.compiler.Compiler().compile(ml_pipeline, 'ml_pipeline.yaml')
    
    # パイプライン実行
    experiment = client.create_experiment('ml-experiments')
    run = client.run_pipeline(
        experiment.id,
        'ml-training-run',
        'ml_pipeline.yaml',
        params={
            'hyperparameters': {'n_estimators': 200, 'max_depth': 15},
            'data_path': 's3://my-bucket/data/latest_data.csv'
        }
    )
'''
        
        print("=== Kubeflow パイプライン ===")
        print(kubeflow_pipeline)
        
        return kubeflow_pipeline
    
    def create_mlflow_experiment_tracking(self):
        """MLflow実験追跡"""
        mlflow_tracking = '''import mlflow
import mlflow.sklearn
import mlflow.pytorch
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score, precision_score, recall_score
import joblib
import boto3
from datetime import datetime

class MLflowExperimentTracker:
    """MLflow実験追跡クラス"""
    
    def __init__(self, tracking_uri, experiment_name):
        mlflow.set_tracking_uri(tracking_uri)
        mlflow.set_experiment(experiment_name)
        self.experiment = mlflow.get_experiment_by_name(experiment_name)
    
    def log_data_info(self, data):
        """データ情報をログ"""
        mlflow.log_param("data_shape", data.shape)
        mlflow.log_param("data_columns", list(data.columns))
        mlflow.log_param("missing_values", data.isnull().sum().sum())
        
        # データの統計情報
        for col in data.select_dtypes(include=[np.number]).columns:
            mlflow.log_metric(f"data_{col}_mean", data[col].mean())
            mlflow.log_metric(f"data_{col}_std", data[col].std())
    
    def log_preprocessing_steps(self, steps):
        """前処理ステップをログ"""
        mlflow.log_param("preprocessing_steps", steps)
    
    def train_and_log_model(self, X_train, X_test, y_train, y_test, model_params):
        """モデル訓練と結果ログ"""
        with mlflow.start_run() as run:
            # パラメータログ
            mlflow.log_params(model_params)
            
            # モデル訓練
            model = RandomForestClassifier(**model_params, random_state=42)
            model.fit(X_train, y_train)
            
            # 予測
            train_predictions = model.predict(X_train)
            test_predictions = model.predict(X_test)
            
            # メトリクス計算とログ
            train_metrics = self._calculate_metrics(y_train, train_predictions, "train")
            test_metrics = self._calculate_metrics(y_test, test_predictions, "test")
            
            for metric_name, value in {**train_metrics, **test_metrics}.items():
                mlflow.log_metric(metric_name, value)
            
            # 特徴量重要度
            feature_importance = dict(zip(
                [f"feature_{i}" for i in range(len(model.feature_importances_))],
                model.feature_importances_
            ))
            for feature, importance in feature_importance.items():
                mlflow.log_metric(f"importance_{feature}", importance)
            
            # モデル保存
            mlflow.sklearn.log_model(
                model,
                "model",
                registered_model_name="RandomForestClassifier"
            )
            
            # アーティファクト保存
            self._save_artifacts(model, test_predictions, y_test)
            
            # モデルの署名とサンプル入力を記録
            from mlflow.models.signature import infer_signature
            signature = infer_signature(X_train, train_predictions)
            mlflow.sklearn.log_model(
                model,
                "model_with_signature",
                signature=signature,
                input_example=X_train.iloc[:5]
            )
            
            return run.info.run_id, test_metrics["test_accuracy"]
    
    def _calculate_metrics(self, y_true, y_pred, prefix):
        """メトリクス計算"""
        return {
            f"{prefix}_accuracy": accuracy_score(y_true, y_pred),
            f"{prefix}_f1": f1_score(y_true, y_pred, average='weighted'),
            f"{prefix}_precision": precision_score(y_true, y_pred, average='weighted'),
            f"{prefix}_recall": recall_score(y_true, y_pred, average='weighted')
        }
    
    def _save_artifacts(self, model, predictions, y_true):
        """アーティファクト保存"""
        import matplotlib.pyplot as plt
        from sklearn.metrics import confusion_matrix, classification_report
        import seaborn as sns
        
        # 混同行列
        cm = confusion_matrix(y_true, predictions)
        plt.figure(figsize=(8, 6))
        sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
        plt.title('Confusion Matrix')
        plt.ylabel('True Label')
        plt.xlabel('Predicted Label')
        plt.savefig('confusion_matrix.png')
        mlflow.log_artifact('confusion_matrix.png')
        plt.close()
        
        # 分類レポート
        report = classification_report(y_true, predictions, output_dict=True)
        with open('classification_report.json', 'w') as f:
            import json
            json.dump(report, f, indent=2)
        mlflow.log_artifact('classification_report.json')
        
        # モデルファイル
        joblib.dump(model, 'model.pkl')
        mlflow.log_artifact('model.pkl')
    
    def compare_models(self, metric_name="test_accuracy", top_n=5):
        """モデル比較"""
        runs = mlflow.search_runs(
            experiment_ids=[self.experiment.experiment_id],
            order_by=[f"metrics.{metric_name} DESC"],
            max_results=top_n
        )
        
        comparison_df = runs[[
            'run_id', 'start_time', f'metrics.{metric_name}',
            'params.n_estimators', 'params.max_depth'
        ]].copy()
        
        return comparison_df
    
    def promote_best_model(self, metric_name="test_accuracy"):
        """最高性能モデルのプロモーション"""
        best_run = mlflow.search_runs(
            experiment_ids=[self.experiment.experiment_id],
            order_by=[f"metrics.{metric_name} DESC"],
            max_results=1
        ).iloc[0]
        
        model_uri = f"runs:/{best_run.run_id}/model"
        
        # モデルバージョン登録
        model_version = mlflow.register_model(
            model_uri=model_uri,
            name="ProductionModel"
        )
        
        # ステージ設定
        mlflow.transition_model_version_stage(
            name="ProductionModel",
            version=model_version.version,
            stage="Production"
        )
        
        return model_version

# 使用例
def run_ml_experiment():
    """ML実験実行例"""
    # データ準備（ダミーデータ）
    from sklearn.datasets import make_classification
    
    X, y = make_classification(
        n_samples=1000,
        n_features=20,
        n_informative=15,
        n_redundant=5,
        n_classes=2,
        random_state=42
    )
    
    data = pd.DataFrame(X, columns=[f"feature_{i}" for i in range(X.shape[1])])
    data['target'] = y
    
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    # 実験追跡開始
    tracker = MLflowExperimentTracker(
        tracking_uri="http://localhost:5000",
        experiment_name="RandomForest_Optimization"
    )
    
    # ハイパーパラメータグリッド
    param_grid = [
        {'n_estimators': 50, 'max_depth': 5},
        {'n_estimators': 100, 'max_depth': 10},
        {'n_estimators': 200, 'max_depth': 15},
        {'n_estimators': 300, 'max_depth': 20}
    ]
    
    # 複数実験実行
    for params in param_grid:
        run_id, accuracy = tracker.train_and_log_model(
            X_train, X_test, y_train, y_test, params
        )
        print(f"Run {run_id}: Accuracy = {accuracy:.4f}")
    
    # モデル比較
    comparison = tracker.compare_models()
    print("\\nTop 5 Models:")
    print(comparison)
    
    # 最高性能モデルをプロダクションに昇格
    best_model = tracker.promote_best_model()
    print(f"\\nBest model promoted to Production: Version {best_model.version}")

if __name__ == "__main__":
    run_ml_experiment()
'''
        
        print("=== MLflow実験追跡 ===")
        print(mlflow_tracking)
        
        return mlflow_tracking

# 使用例
mlops_pipeline = MLOpsPipeline()
lifecycle = mlops_pipeline.mlops_lifecycle()
kubeflow_pipeline = mlops_pipeline.create_kubeflow_pipeline()
mlflow_tracking = mlops_pipeline.create_mlflow_experiment_tracking()
```

## 📚 まとめと次のステップ

この特典では、AI駆動開発に必要なDevOps・MLOpsスキルを包括的に学習しました。

### 習得したスキル
✅ DevOps文化と原則の理解  
✅ CI/CDパイプライン構築（GitHub Actions, GitLab CI, Jenkins）  
✅ GitOps戦略とツール活用（ArgoCD, Flux）  
✅ Infrastructure as Code実践（Terraform, Pulumi）  
✅ MLOpsライフサイクル管理  
✅ 機械学習パイプライン自動化（Kubeflow）  
✅ 実験追跡とモデル管理（MLflow）  
✅ モニタリング・ロギング戦略  

### 実践的な学習課題
1. **エンドツーエンドMLパイプライン**: データ収集からモデルデプロイまでの完全自動化
2. **マルチクラウドCI/CD**: 複数クラウドプロバイダーでの統合デプロイメント
3. **ゼロダウンタイムデプロイ**: カナリア・ブルーグリーンデプロイメント実装
4. **災害復旧自動化**: 自動バックアップ・復旧システム構築
5. **セキュリティ統合**: DevSecOpsプラクティス実装

### 推奨学習リソース
- **DevOps**: The DevOps Handbook, The Phoenix Project
- **GitOps**: GitOps Cookbook, Argo CD in Action
- **MLOps**: Building Machine Learning Pipelines, MLOps Engineering
- **実践**: Kubernetes Operators, Cloud Native DevOps
- **コミュニティ**: CNCF, DevOps Days, MLOps Community

DevOps・MLOpsは継続的な改善が鍵です。このガイドをベースに、組織の文化変革と技術実装を両輪で進めていきましょう！