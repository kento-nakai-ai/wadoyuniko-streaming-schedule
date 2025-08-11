# 反省文テンプレート / Reflection Template

## 基本情報 / Basic Information
- **日時 / Date & Time**: YYYY-MM-DD HH:MM JST
- **記録者 / Recorder**: [エージェント名 / Agent Name]
- **関連タスク / Related Task**: [Task ID or Description]
- **影響度 / Impact Level**: 🔴 高 / 🟡 中 / 🟢 低
- **カテゴリ / Category**: [ ] バグ [ ] 設計ミス [ ] プロセス [ ] コミュニケーション [ ] その他

## 事象の詳細 / Incident Details

### 何が起きたか / What Happened
```
[具体的な事象を時系列で記述]
```

### 期待されていた結果 / Expected Outcome
```
[本来どうあるべきだったか]
```

### 実際の結果 / Actual Outcome
```
[実際に何が起きたか]
```

### 影響範囲 / Impact Scope
- **影響を受けたシステム / Affected Systems**: 
- **影響を受けたユーザー / Affected Users**: 
- **ビジネスへの影響 / Business Impact**: 
- **技術的負債 / Technical Debt Created**: 

## 根本原因分析 / Root Cause Analysis

### 5 Whys 分析 / 5 Whys Analysis
1. **Why 1**: なぜこの問題が発生したか？
   - **Answer**: 
2. **Why 2**: なぜ[Answer 1]が起きたか？
   - **Answer**: 
3. **Why 3**: なぜ[Answer 2]が起きたか？
   - **Answer**: 
4. **Why 4**: なぜ[Answer 3]が起きたか？
   - **Answer**: 
5. **Why 5**: なぜ[Answer 4]が起きたか？
   - **Answer**: 

### 要因分類 / Factor Classification
#### 技術的要因 / Technical Factors
- [ ] コードの品質問題
- [ ] アーキテクチャの欠陥
- [ ] テスト不足
- [ ] 依存関係の問題
- [ ] パフォーマンス問題
- **詳細**: 

#### プロセス的要因 / Process Factors
- [ ] レビュー不足
- [ ] ドキュメント不足
- [ ] コミュニケーション不足
- [ ] 承認プロセスの問題
- [ ] 時間的制約
- **詳細**: 

#### 人的要因 / Human Factors
- [ ] スキル不足
- [ ] 知識不足
- [ ] 注意不足
- [ ] 判断ミス
- [ ] 過負荷
- **詳細**: 

## 改善アクション / Improvement Actions

### 即時対応 / Immediate Actions (24時間以内)
| アクション | 担当者 | 期限 | ステータス |
|-----------|--------|------|------------|
| | | | [ ] 未着手 |
| | | | [ ] 進行中 |
| | | | [ ] 完了 |

### 短期改善 / Short-term Improvements (1週間以内)
| アクション | 担当者 | 期限 | ステータス |
|-----------|--------|------|------------|
| | | | [ ] 未着手 |
| | | | [ ] 進行中 |
| | | | [ ] 完了 |

### 長期改善 / Long-term Improvements (1ヶ月以内)
| アクション | 担当者 | 期限 | ステータス |
|-----------|--------|------|------------|
| | | | [ ] 未着手 |
| | | | [ ] 進行中 |
| | | | [ ] 完了 |

## 学習ポイント / Learning Points

### 得られた知見 / Key Insights
1. 
2. 
3. 

### ベストプラクティス / Best Practices Identified
1. 
2. 
3. 

### アンチパターン / Anti-patterns to Avoid
1. 
2. 
3. 

### 他チームへの共有事項 / Knowledge to Share
```
[他のチームやプロジェクトに役立つ情報]
```

## 再発防止策 / Prevention Measures

### プロセス改善 / Process Improvements
- [ ] チェックリストの更新
- [ ] レビュープロセスの強化
- [ ] 自動化の導入
- [ ] モニタリングの追加
- **具体的な実装**: 

### 技術的対策 / Technical Countermeasures
- [ ] コードの修正
- [ ] テストの追加
- [ ] 監視の強化
- [ ] アラートの設定
- **具体的な実装**: 

### 教育・トレーニング / Education & Training
- [ ] ドキュメントの作成・更新
- [ ] ナレッジ共有セッション
- [ ] トレーニングプログラム
- **具体的な内容**: 

## フォローアップ / Follow-up

### レビュー計画 / Review Plan
- **1週間後レビュー日 / 1-week Review**: YYYY-MM-DD
- **1ヶ月後レビュー日 / 1-month Review**: YYYY-MM-DD
- **効果測定方法 / Effectiveness Metrics**: 

### 成功基準 / Success Criteria
1. 
2. 
3. 

## 承認・レビュー / Approval & Review

### 必須承認者 / Required Approvers
- [ ] **CTO承認 / CTO Approval**: 
  - 承認日時: 
  - コメント: 
- [ ] **Security Officer承認 / Security Approval**: 
  - 承認日時: 
  - コメント: 
- [ ] **関連エンジニア承認 / Engineer Approval**: 
  - 承認者: 
  - 承認日時: 
  - コメント: 

### オプション承認者 / Optional Reviewers
- [ ] **HR Manager レビュー**: 
- [ ] **Product Manager レビュー**: 
- [ ] **QA Lead レビュー**: 

## メタデータ / Metadata
- **文書ID / Document ID**: REF-YYYY-MM-DD-XXX
- **バージョン / Version**: 1.0
- **最終更新 / Last Updated**: YYYY-MM-DD HH:MM
- **次回レビュー / Next Review**: YYYY-MM-DD
- **公開レベル / Visibility**: [ ] Public [ ] Internal [ ] Confidential

---

### 記入ガイド / Filling Guide
1. すべての必須フィールドを記入してください
2. 具体的で測定可能な改善アクションを設定してください
3. 感情的な表現を避け、事実ベースで記述してください
4. 他者への非難を避け、システム改善に焦点を当ててください
5. 成功と失敗の両方から学びを抽出してください