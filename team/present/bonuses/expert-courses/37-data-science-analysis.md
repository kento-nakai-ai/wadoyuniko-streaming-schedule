# 特典37: データサイエンス・分析スキル完全マスターガイド

## 🎯 概要
AI駆動開発におけるデータサイエンス・分析スキルを網羅的に習得するための実践的ガイド。実データを用いた分析手法から、機械学習プロジェクトでの活用まで、現場で即戦力となるスキルを体系的に学習できます。

## 📋 学習目標
- [ ] データサイエンスの基礎概念と工程を理解する
- [ ] pandas/NumPyを使ったデータ前処理をマスターする
- [ ] 統計分析と探索的データ分析（EDA）を実践する
- [ ] データ可視化技術を習得する
- [ ] 機械学習パイプラインを構築する
- [ ] A/Bテスト設計と統計的検定を実装する
- [ ] 時系列分析と予測モデルを構築する
- [ ] ビッグデータ処理技術を習得する

## 🚀 Phase 1: データサイエンス基礎

### 1.1 データサイエンスの概念と工程

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix
import warnings
warnings.filterwarnings('ignore')

class DataScienceWorkflow:
    """
    データサイエンスプロジェクトの標準ワークフローを実装
    """
    
    def __init__(self, data_path=None):
        self.data_path = data_path
        self.raw_data = None
        self.processed_data = None
        self.model = None
        self.results = {}
    
    def load_data(self, data=None):
        """データの読み込み"""
        if data is not None:
            self.raw_data = data
        elif self.data_path:
            # CSVファイルの読み込み例
            self.raw_data = pd.read_csv(self.data_path)
        else:
            # サンプルデータの生成
            self.raw_data = self._generate_sample_data()
        
        print(f"データ読み込み完了: {self.raw_data.shape}")
        return self.raw_data
    
    def _generate_sample_data(self):
        """サンプルデータの生成"""
        np.random.seed(42)
        n_samples = 1000
        
        data = {
            'age': np.random.normal(35, 10, n_samples),
            'income': np.random.normal(50000, 15000, n_samples),
            'education_years': np.random.poisson(16, n_samples),
            'experience': np.random.exponential(5, n_samples),
            'satisfaction_score': np.random.beta(2, 5, n_samples) * 10
        }
        
        # ターゲット変数の生成（購入確率）
        purchase_prob = (
            0.1 * data['age'] / 100 +
            0.3 * data['income'] / 100000 +
            0.2 * data['education_years'] / 20 +
            0.2 * data['experience'] / 10 +
            0.2 * data['satisfaction_score'] / 10
        )
        
        data['purchased'] = np.random.binomial(1, purchase_prob, n_samples)
        
        return pd.DataFrame(data)
    
    def explore_data(self):
        """探索的データ分析（EDA）"""
        print("=== データ概要 ===")
        print(self.raw_data.info())
        print("\n=== 統計サマリー ===")
        print(self.raw_data.describe())
        
        # 欠損値チェック
        print("\n=== 欠損値 ===")
        missing_data = self.raw_data.isnull().sum()
        print(missing_data[missing_data > 0])
        
        # 相関マトリックス
        plt.figure(figsize=(10, 8))
        correlation_matrix = self.raw_data.corr()
        sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0)
        plt.title('変数間の相関関係')
        plt.tight_layout()
        plt.show()
        
        return correlation_matrix
    
    def preprocess_data(self):
        """データ前処理"""
        processed = self.raw_data.copy()
        
        # 欠損値処理
        for column in processed.select_dtypes(include=[np.number]).columns:
            processed[column].fillna(processed[column].median(), inplace=True)
        
        for column in processed.select_dtypes(include=[object]).columns:
            processed[column].fillna(processed[column].mode()[0], inplace=True)
        
        # 外れ値処理（IQR法）
        for column in processed.select_dtypes(include=[np.number]).columns:
            if column != 'purchased':  # ターゲット変数は除外
                Q1 = processed[column].quantile(0.25)
                Q3 = processed[column].quantile(0.75)
                IQR = Q3 - Q1
                lower_bound = Q1 - 1.5 * IQR
                upper_bound = Q3 + 1.5 * IQR
                processed[column] = processed[column].clip(lower_bound, upper_bound)
        
        self.processed_data = processed
        print("データ前処理完了")
        return self.processed_data

# 使用例
workflow = DataScienceWorkflow()
data = workflow.load_data()
correlation_matrix = workflow.explore_data()
processed_data = workflow.preprocess_data()
```

### 1.2 pandas活用術

```python
class PandasMasterClass:
    """
    pandasの高度な活用技術を習得
    """
    
    @staticmethod
    def advanced_data_manipulation():
        """高度なデータ操作技術"""
        # サンプルデータ作成
        np.random.seed(42)
        dates = pd.date_range('2024-01-01', periods=365, freq='D')
        
        sales_data = pd.DataFrame({
            'date': np.repeat(dates, 3),
            'product': np.tile(['A', 'B', 'C'], 365),
            'sales': np.random.poisson(100, 365 * 3),
            'region': np.random.choice(['North', 'South', 'East', 'West'], 365 * 3),
            'price': np.random.uniform(10, 100, 365 * 3)
        })
        
        print("=== 基本操作 ===")
        # グループ化と集計
        monthly_sales = sales_data.groupby([
            sales_data['date'].dt.to_period('M'), 'product'
        ])['sales'].agg(['sum', 'mean', 'std']).round(2)
        
        print("月次売上サマリー:")
        print(monthly_sales.head(10))
        
        # ピボットテーブル
        print("\n=== ピボットテーブル ===")
        pivot_table = sales_data.pivot_table(
            values='sales',
            index='product',
            columns='region',
            aggfunc=['sum', 'mean'],
            fill_value=0
        )
        print(pivot_table)
        
        # ウィンドウ関数
        print("\n=== 移動平均 ===")
        sales_data['sales_ma7'] = sales_data.groupby('product')['sales'].rolling(7).mean()
        sales_data['sales_cumsum'] = sales_data.groupby('product')['sales'].cumsum()
        
        # 条件分岐による新カラム作成
        sales_data['performance'] = np.select(
            [
                sales_data['sales'] > sales_data['sales'].quantile(0.8),
                sales_data['sales'] > sales_data['sales'].quantile(0.6),
                sales_data['sales'] > sales_data['sales'].quantile(0.4),
                sales_data['sales'] > sales_data['sales'].quantile(0.2)
            ],
            ['Excellent', 'Good', 'Average', 'Below Average'],
            default='Poor'
        )
        
        return sales_data
    
    @staticmethod
    def time_series_operations():
        """時系列データ操作"""
        # 時系列データ生成
        dates = pd.date_range('2024-01-01', periods=365, freq='D')
        ts_data = pd.DataFrame({
            'date': dates,
            'value': np.random.randn(365).cumsum() + 100,
            'seasonal': 10 * np.sin(2 * np.pi * np.arange(365) / 365.25),
            'trend': np.arange(365) * 0.1
        })
        ts_data['total'] = ts_data['value'] + ts_data['seasonal'] + ts_data['trend']
        ts_data.set_index('date', inplace=True)
        
        # リサンプリング
        weekly_data = ts_data.resample('W').agg({
            'total': ['mean', 'max', 'min'],
            'value': 'sum'
        })
        
        # ラグ特徴量
        ts_data['lag_1'] = ts_data['total'].shift(1)
        ts_data['lag_7'] = ts_data['total'].shift(7)
        ts_data['lag_30'] = ts_data['total'].shift(30)
        
        # 差分
        ts_data['diff_1'] = ts_data['total'].diff()
        ts_data['pct_change'] = ts_data['total'].pct_change()
        
        return ts_data, weekly_data

# 実行例
pandas_master = PandasMasterClass()
sales_data = pandas_master.advanced_data_manipulation()
ts_data, weekly_data = pandas_master.time_series_operations()
```

## 🔬 Phase 2: 統計分析と探索的データ分析

### 2.1 統計的検定とA/Bテスト

```python
import scipy.stats as stats
from scipy.stats import chi2_contingency, mannwhitneyu, kruskal
import statsmodels.api as sm
from statsmodels.stats.power import ttest_power
from statsmodels.stats.proportion import proportions_ztest

class StatisticalAnalysis:
    """
    統計分析とA/Bテストの実装
    """
    
    def __init__(self):
        self.results = {}
    
    def ab_test_design(self, effect_size=0.1, alpha=0.05, power=0.8):
        """A/Bテストのサンプルサイズ設計"""
        # 必要サンプルサイズ計算
        sample_size = ttest_power(effect_size, power, alpha, alternative='two-sided')
        
        print(f"=== A/Bテスト設計 ===")
        print(f"効果サイズ: {effect_size}")
        print(f"有意水準 (α): {alpha}")
        print(f"検出力 (1-β): {power}")
        print(f"必要サンプルサイズ: {int(sample_size * 2)} (各群)")
        
        return int(sample_size * 2)
    
    def generate_ab_test_data(self, n_per_group=1000, effect_size=0.1):
        """A/Bテストデータの生成"""
        np.random.seed(42)
        
        # コントロール群
        control_conversion = np.random.binomial(1, 0.1, n_per_group)
        
        # テスト群（効果サイズ分だけ改善）
        test_conversion = np.random.binomial(1, 0.1 + effect_size, n_per_group)
        
        # データフレーム作成
        data = pd.DataFrame({
            'group': ['control'] * n_per_group + ['test'] * n_per_group,
            'converted': np.concatenate([control_conversion, test_conversion]),
            'revenue': np.concatenate([
                np.random.exponential(50, n_per_group) * control_conversion,
                np.random.exponential(55, n_per_group) * test_conversion
            ])
        })
        
        return data
    
    def analyze_ab_test(self, data):
        """A/Bテスト結果の分析"""
        # 基本統計
        summary = data.groupby('group').agg({
            'converted': ['count', 'sum', 'mean'],
            'revenue': ['mean', 'sum']
        }).round(4)
        
        print("=== A/Bテスト結果 ===")
        print(summary)
        
        # コンバージョン率の比較（Z検定）
        control_conversions = data[data['group'] == 'control']['converted'].sum()
        test_conversions = data[data['group'] == 'test']['converted'].sum()
        control_n = len(data[data['group'] == 'control'])
        test_n = len(data[data['group'] == 'test'])
        
        conversions = np.array([control_conversions, test_conversions])
        nobs = np.array([control_n, test_n])
        
        z_stat, p_value = proportions_ztest(conversions, nobs)
        
        print(f"\n=== コンバージョン率比較 ===")
        print(f"Z統計量: {z_stat:.4f}")
        print(f"p値: {p_value:.4f}")
        print(f"統計的有意性: {'有意' if p_value < 0.05 else '非有意'}")
        
        # 売上の比較（Mann-Whitney U検定）
        control_revenue = data[data['group'] == 'control']['revenue']
        test_revenue = data[data['group'] == 'test']['revenue']
        
        u_stat, u_p_value = mannwhitneyu(
            control_revenue, test_revenue, alternative='two-sided'
        )
        
        print(f"\n=== 売上比較 ===")
        print(f"Mann-Whitney U統計量: {u_stat:.4f}")
        print(f"p値: {u_p_value:.4f}")
        print(f"統計的有意性: {'有意' if u_p_value < 0.05 else '非有意'}")
        
        return {
            'conversion_z_stat': z_stat,
            'conversion_p_value': p_value,
            'revenue_u_stat': u_stat,
            'revenue_p_value': u_p_value
        }
    
    def cohort_analysis(self, data):
        """コホート分析の実装"""
        # サンプルデータの生成（ユーザーの行動データ）
        np.random.seed(42)
        n_users = 1000
        
        # 登録日の生成
        start_date = pd.Timestamp('2024-01-01')
        registration_dates = pd.date_range(
            start_date, periods=90, freq='D'
        )
        
        cohort_data = []
        for reg_date in registration_dates:
            daily_users = np.random.poisson(10)
            for _ in range(daily_users):
                user_id = len(cohort_data)
                
                # リテンション確率（日数が経つほど低下）
                retention_probs = np.exp(-np.arange(30) * 0.1)
                
                for day in range(30):
                    if np.random.random() < retention_probs[day]:
                        cohort_data.append({
                            'user_id': user_id,
                            'registration_date': reg_date,
                            'activity_date': reg_date + pd.Timedelta(days=day),
                            'day_number': day
                        })
        
        cohort_df = pd.DataFrame(cohort_data)
        
        # コホートテーブルの作成
        cohort_table = cohort_df.pivot_table(
            index='registration_date',
            columns='day_number',
            values='user_id',
            aggfunc='nunique'
        )
        
        # リテンション率の計算
        cohort_sizes = cohort_df.groupby('registration_date')['user_id'].nunique()
        retention_table = cohort_table.divide(cohort_sizes, axis=0)
        
        print("=== コホートリテンション率 ===")
        print(retention_table.iloc[:10, :10].round(3))
        
        return retention_table

# 使用例
stat_analyzer = StatisticalAnalysis()
sample_size = stat_analyzer.ab_test_design(effect_size=0.05)
ab_data = stat_analyzer.generate_ab_test_data(n_per_group=sample_size//2)
ab_results = stat_analyzer.analyze_ab_test(ab_data)
retention_table = stat_analyzer.cohort_analysis(ab_data)
```

### 2.2 高度な可視化技術

```python
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import plotly.express as px

class AdvancedVisualization:
    """
    高度なデータ可視化技術
    """
    
    def __init__(self):
        plt.style.use('seaborn-v0_8')
        sns.set_palette("husl")
    
    def create_dashboard_chart(self, data):
        """ダッシュボード形式の総合チャート"""
        fig = make_subplots(
            rows=2, cols=2,
            subplot_titles=(
                'コンバージョン率推移', '売上分布',
                'セグメント別パフォーマンス', 'ファネル分析'
            ),
            specs=[[{"secondary_y": True}, {"type": "box"}],
                   [{"type": "bar"}, {"type": "funnel"}]]
        )
        
        # 時系列データ（コンバージョン率）
        dates = pd.date_range('2024-01-01', periods=30, freq='D')
        conversion_rates = np.random.beta(2, 18, 30)
        
        fig.add_trace(
            go.Scatter(
                x=dates, y=conversion_rates,
                mode='lines+markers',
                name='コンバージョン率',
                line=dict(color='blue', width=2)
            ),
            row=1, col=1
        )
        
        # 売上分布（ボックスプロット）
        segments = ['新規', 'リピート', 'VIP']
        revenue_data = [
            np.random.lognormal(3, 0.5, 1000),
            np.random.lognormal(3.5, 0.4, 800),
            np.random.lognormal(4, 0.3, 200)
        ]
        
        for i, (segment, revenue) in enumerate(zip(segments, revenue_data)):
            fig.add_trace(
                go.Box(y=revenue, name=segment),
                row=1, col=2
            )
        
        # セグメント別パフォーマンス
        fig.add_trace(
            go.Bar(
                x=segments,
                y=[250000, 180000, 420000],
                name='総売上',
                marker_color=['lightblue', 'lightgreen', 'lightcoral']
            ),
            row=2, col=1
        )
        
        # ファネル分析
        stages = ['訪問', 'カート追加', '決済開始', '購入完了']
        values = [10000, 3000, 1200, 800]
        
        fig.add_trace(
            go.Funnel(
                y=stages,
                x=values,
                textinfo="value+percent initial"
            ),
            row=2, col=2
        )
        
        fig.update_layout(
            height=800,
            title_text="データサイエンス ダッシュボード",
            showlegend=False
        )
        
        return fig
    
    def correlation_network(self, correlation_matrix):
        """相関関係のネットワーク図"""
        # 強い相関のペアを抽出
        strong_correlations = []
        for i in range(len(correlation_matrix.columns)):
            for j in range(i+1, len(correlation_matrix.columns)):
                corr_value = correlation_matrix.iloc[i, j]
                if abs(corr_value) > 0.3:  # 閾値
                    strong_correlations.append({
                        'source': correlation_matrix.columns[i],
                        'target': correlation_matrix.columns[j],
                        'weight': abs(corr_value),
                        'correlation': corr_value
                    })
        
        # NetworkXを使用してネットワーク作成（概念的な例）
        print("=== 強い相関関係 ===")
        for corr in strong_correlations:
            print(f"{corr['source']} ↔ {corr['target']}: {corr['correlation']:.3f}")
        
        return strong_correlations
    
    def anomaly_detection_plot(self, data):
        """異常検知の可視化"""
        from sklearn.ensemble import IsolationForest
        from sklearn.preprocessing import StandardScaler
        
        # データの準備
        numeric_data = data.select_dtypes(include=[np.number])
        scaler = StandardScaler()
        scaled_data = scaler.fit_transform(numeric_data)
        
        # 異常検知
        isolation_forest = IsolationForest(contamination=0.1, random_state=42)
        anomaly_labels = isolation_forest.fit_predict(scaled_data)
        
        # 可視化
        fig, axes = plt.subplots(2, 2, figsize=(15, 10))
        
        # 異常スコア分布
        anomaly_scores = isolation_forest.decision_function(scaled_data)
        axes[0, 0].hist(anomaly_scores, bins=50, alpha=0.7)
        axes[0, 0].axvline(np.percentile(anomaly_scores, 10), color='red', linestyle='--')
        axes[0, 0].set_title('異常スコア分布')
        axes[0, 0].set_xlabel('異常スコア')
        axes[0, 0].set_ylabel('頻度')
        
        # 2次元での異常点表示
        if len(numeric_data.columns) >= 2:
            normal_mask = anomaly_labels == 1
            axes[0, 1].scatter(
                numeric_data.iloc[normal_mask, 0],
                numeric_data.iloc[normal_mask, 1],
                c='blue', alpha=0.6, label='正常'
            )
            axes[0, 1].scatter(
                numeric_data.iloc[~normal_mask, 0],
                numeric_data.iloc[~normal_mask, 1],
                c='red', alpha=0.8, label='異常'
            )
            axes[0, 1].set_xlabel(numeric_data.columns[0])
            axes[0, 1].set_ylabel(numeric_data.columns[1])
            axes[0, 1].set_title('異常点検出結果')
            axes[0, 1].legend()
        
        # 時系列異常検知（時間軸がある場合）
        if 'date' in data.columns or data.index.dtype == 'datetime64[ns]':
            time_index = data.index if data.index.dtype == 'datetime64[ns]' else range(len(data))
            axes[1, 0].plot(time_index, anomaly_scores, alpha=0.7)
            axes[1, 0].scatter(
                np.array(time_index)[~normal_mask],
                anomaly_scores[~normal_mask],
                c='red', s=50, alpha=0.8
            )
            axes[1, 0].set_title('時系列異常検知')
            axes[1, 0].set_xlabel('時間')
            axes[1, 0].set_ylabel('異常スコア')
        
        # 特徴量重要度（異常検知への寄与）
        feature_importance = np.abs(isolation_forest.score_samples(scaled_data)).mean()
        axes[1, 1].bar(numeric_data.columns, np.random.random(len(numeric_data.columns)))
        axes[1, 1].set_title('特徴量重要度（異常検知）')
        axes[1, 1].tick_params(axis='x', rotation=45)
        
        plt.tight_layout()
        plt.show()
        
        return anomaly_labels, anomaly_scores

# 使用例
viz = AdvancedVisualization()
dashboard_fig = viz.create_dashboard_chart(sales_data)
# dashboard_fig.show()  # Plotlyチャートの表示

correlation_network = viz.correlation_network(correlation_matrix)
anomaly_labels, anomaly_scores = viz.anomaly_detection_plot(processed_data)
```

## 📊 Phase 3: 機械学習パイプライン

### 3.1 特徴量エンジニアリング

```python
from sklearn.feature_selection import SelectKBest, f_classif, mutual_info_classif
from sklearn.preprocessing import PolynomialFeatures
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE

class FeatureEngineering:
    """
    高度な特徴量エンジニアリング技術
    """
    
    def __init__(self):
        self.feature_transformers = {}
        self.selected_features = []
    
    def create_polynomial_features(self, X, degree=2):
        """多項式特徴量の生成"""
        poly = PolynomialFeatures(degree=degree, include_bias=False)
        X_poly = poly.fit_transform(X)
        feature_names = poly.get_feature_names_out(X.columns)
        
        print(f"多項式特徴量生成: {X.shape[1]} → {X_poly.shape[1]}")
        
        self.feature_transformers['polynomial'] = poly
        return pd.DataFrame(X_poly, columns=feature_names, index=X.index)
    
    def create_interaction_features(self, X):
        """交互作用特徴量の作成"""
        interaction_features = X.copy()
        
        # 数値カラムの組み合わせ
        numeric_cols = X.select_dtypes(include=[np.number]).columns
        
        for i, col1 in enumerate(numeric_cols):
            for col2 in numeric_cols[i+1:]:
                # 乗算
                interaction_features[f'{col1}_x_{col2}'] = X[col1] * X[col2]
                # 除算（ゼロ除算対策）
                interaction_features[f'{col1}_div_{col2}'] = X[col1] / (X[col2] + 1e-8)
                # 差分
                interaction_features[f'{col1}_diff_{col2}'] = X[col1] - X[col2]
        
        print(f"交互作用特徴量生成: {X.shape[1]} → {interaction_features.shape[1]}")
        return interaction_features
    
    def create_binning_features(self, X, n_bins=5):
        """ビニング（カテゴリ化）特徴量"""
        binned_features = X.copy()
        
        for col in X.select_dtypes(include=[np.number]).columns:
            # 等頻度ビニング
            binned_features[f'{col}_binned'] = pd.qcut(
                X[col], q=n_bins, labels=False, duplicates='drop'
            )
            
            # 等幅ビニング
            binned_features[f'{col}_uniform_binned'] = pd.cut(
                X[col], bins=n_bins, labels=False
            )
        
        return binned_features
    
    def feature_selection(self, X, y, method='mutual_info', k=10):
        """特徴量選択"""
        if method == 'mutual_info':
            selector = SelectKBest(score_func=mutual_info_classif, k=k)
        elif method == 'f_classif':
            selector = SelectKBest(score_func=f_classif, k=k)
        else:
            raise ValueError("method must be 'mutual_info' or 'f_classif'")
        
        X_selected = selector.fit_transform(X, y)
        selected_features = X.columns[selector.get_support()].tolist()
        
        # 特徴量重要度の可視化
        scores = selector.scores_
        feature_scores = pd.DataFrame({
            'feature': X.columns,
            'score': scores
        }).sort_values('score', ascending=False)
        
        plt.figure(figsize=(10, 6))
        sns.barplot(data=feature_scores.head(k), x='score', y='feature')
        plt.title(f'特徴量重要度 ({method})')
        plt.tight_layout()
        plt.show()
        
        self.selected_features = selected_features
        self.feature_transformers['selector'] = selector
        
        print(f"特徴量選択: {X.shape[1]} → {len(selected_features)}")
        return pd.DataFrame(X_selected, columns=selected_features, index=X.index)
    
    def dimensionality_reduction(self, X, method='pca', n_components=2):
        """次元削減"""
        if method == 'pca':
            reducer = PCA(n_components=n_components)
            X_reduced = reducer.fit_transform(X)
            
            # 寄与率の表示
            explained_variance = reducer.explained_variance_ratio_
            print(f"PCA寄与率: {explained_variance}")
            
        elif method == 'tsne':
            reducer = TSNE(n_components=n_components, random_state=42)
            X_reduced = reducer.fit_transform(X)
        
        self.feature_transformers['dimensionality_reducer'] = reducer
        
        # 可視化
        if n_components == 2:
            plt.figure(figsize=(10, 6))
            plt.scatter(X_reduced[:, 0], X_reduced[:, 1], alpha=0.6)
            plt.title(f'{method.upper()} - 2次元可視化')
            plt.xlabel(f'{method.upper()}1')
            plt.ylabel(f'{method.upper()}2')
            plt.show()
        
        return X_reduced

# 使用例
feature_eng = FeatureEngineering()

# 数値特徴量のみを抽出
numeric_features = processed_data.select_dtypes(include=[np.number]).drop('purchased', axis=1)
target = processed_data['purchased']

# 特徴量エンジニアリング実行
poly_features = feature_eng.create_polynomial_features(numeric_features, degree=2)
interaction_features = feature_eng.create_interaction_features(numeric_features)
binned_features = feature_eng.create_binning_features(numeric_features)

# 特徴量選択
selected_features = feature_eng.feature_selection(
    interaction_features, target, method='mutual_info', k=15
)

# 次元削減
reduced_features = feature_eng.dimensionality_reduction(
    selected_features, method='pca', n_components=5
)
```

### 3.2 モデル評価とパフォーマンス最適化

```python
from sklearn.model_selection import cross_val_score, GridSearchCV, StratifiedKFold
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.metrics import (
    roc_auc_score, roc_curve, precision_recall_curve,
    classification_report, confusion_matrix
)
import joblib

class ModelEvaluation:
    """
    機械学習モデルの評価と最適化
    """
    
    def __init__(self):
        self.models = {}
        self.results = {}
        self.best_model = None
    
    def setup_models(self):
        """複数モデルのセットアップ"""
        self.models = {
            'logistic_regression': LogisticRegression(random_state=42),
            'random_forest': RandomForestClassifier(random_state=42),
            'gradient_boosting': GradientBoostingClassifier(random_state=42),
            'svm': SVC(probability=True, random_state=42)
        }
        
    def cross_validation_comparison(self, X, y, cv=5):
        """クロスバリデーションによるモデル比較"""
        cv_results = {}
        
        for name, model in self.models.items():
            scores = cross_val_score(
                model, X, y, cv=StratifiedKFold(n_splits=cv, shuffle=True, random_state=42),
                scoring='roc_auc'
            )
            cv_results[name] = {
                'mean_score': scores.mean(),
                'std_score': scores.std(),
                'scores': scores
            }
            
            print(f"{name}: {scores.mean():.4f} (+/- {scores.std() * 2:.4f})")
        
        # 結果の可視化
        plt.figure(figsize=(12, 6))
        
        # ボックスプロット
        plt.subplot(1, 2, 1)
        scores_data = [cv_results[name]['scores'] for name in cv_results.keys()]
        plt.boxplot(scores_data, labels=cv_results.keys())
        plt.title('クロスバリデーション結果')
        plt.ylabel('ROC AUC Score')
        plt.xticks(rotation=45)
        
        # 平均スコア比較
        plt.subplot(1, 2, 2)
        means = [cv_results[name]['mean_score'] for name in cv_results.keys()]
        stds = [cv_results[name]['std_score'] for name in cv_results.keys()]
        plt.bar(cv_results.keys(), means, yerr=stds, capsize=5)
        plt.title('平均スコア比較')
        plt.ylabel('ROC AUC Score')
        plt.xticks(rotation=45)
        
        plt.tight_layout()
        plt.show()
        
        return cv_results
    
    def hyperparameter_tuning(self, X, y, model_name='random_forest'):
        """ハイパーパラメータチューニング"""
        model = self.models[model_name]
        
        # パラメータグリッドの定義
        if model_name == 'random_forest':
            param_grid = {
                'n_estimators': [100, 200, 300],
                'max_depth': [None, 5, 10, 15],
                'min_samples_split': [2, 5, 10],
                'min_samples_leaf': [1, 2, 4]
            }
        elif model_name == 'gradient_boosting':
            param_grid = {
                'n_estimators': [100, 200],
                'learning_rate': [0.01, 0.1, 0.2],
                'max_depth': [3, 5, 7],
                'min_samples_split': [2, 5]
            }
        elif model_name == 'logistic_regression':
            param_grid = {
                'C': [0.01, 0.1, 1, 10, 100],
                'penalty': ['l1', 'l2'],
                'solver': ['liblinear', 'saga']
            }
        else:
            param_grid = {}
        
        # グリッドサーチ実行
        grid_search = GridSearchCV(
            model, param_grid, cv=5, scoring='roc_auc',
            n_jobs=-1, verbose=1
        )
        
        grid_search.fit(X, y)
        
        print(f"=== {model_name} ハイパーパラメータチューニング結果 ===")
        print(f"最高スコア: {grid_search.best_score_:.4f}")
        print(f"最適パラメータ: {grid_search.best_params_}")
        
        # チューニング結果の可視化
        if len(param_grid) >= 2:
            param_names = list(param_grid.keys())[:2]
            results_df = pd.DataFrame(grid_search.cv_results_)
            
            pivot_table = results_df.pivot_table(
                values='mean_test_score',
                index=f'param_{param_names[0]}',
                columns=f'param_{param_names[1]}',
                aggfunc='mean'
            )
            
            plt.figure(figsize=(10, 6))
            sns.heatmap(pivot_table, annot=True, cmap='viridis', fmt='.4f')
            plt.title(f'{model_name} - パラメータ最適化結果')
            plt.show()
        
        self.best_model = grid_search.best_estimator_
        return grid_search.best_estimator_, grid_search.best_score_
    
    def detailed_evaluation(self, model, X_train, X_test, y_train, y_test):
        """詳細なモデル評価"""
        # 予測
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        y_pred_proba = model.predict_proba(X_test)[:, 1]
        
        # 基本メトリクス
        print("=== 分類レポート ===")
        print(classification_report(y_test, y_pred))
        
        # 混同行列
        cm = confusion_matrix(y_test, y_pred)
        plt.figure(figsize=(15, 5))
        
        plt.subplot(1, 3, 1)
        sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
        plt.title('混同行列')
        plt.ylabel('実際のラベル')
        plt.xlabel('予測ラベル')
        
        # ROC曲線
        fpr, tpr, _ = roc_curve(y_test, y_pred_proba)
        roc_auc = roc_auc_score(y_test, y_pred_proba)
        
        plt.subplot(1, 3, 2)
        plt.plot(fpr, tpr, label=f'ROC曲線 (AUC = {roc_auc:.4f})')
        plt.plot([0, 1], [0, 1], 'k--', label='ランダム')
        plt.xlabel('偽陽性率')
        plt.ylabel('真陽性率')
        plt.title('ROC曲線')
        plt.legend()
        
        # Precision-Recall曲線
        precision, recall, _ = precision_recall_curve(y_test, y_pred_proba)
        
        plt.subplot(1, 3, 3)
        plt.plot(recall, precision, label='PR曲線')
        plt.xlabel('再現率')
        plt.ylabel('適合率')
        plt.title('Precision-Recall曲線')
        plt.legend()
        
        plt.tight_layout()
        plt.show()
        
        # 特徴量重要度（可能な場合）
        if hasattr(model, 'feature_importances_'):
            feature_importance = pd.DataFrame({
                'feature': X_train.columns,
                'importance': model.feature_importances_
            }).sort_values('importance', ascending=False)
            
            plt.figure(figsize=(10, 6))
            sns.barplot(data=feature_importance.head(15), x='importance', y='feature')
            plt.title('特徴量重要度')
            plt.tight_layout()
            plt.show()
            
            return feature_importance
        
        return None
    
    def save_model(self, model, filepath):
        """モデルの保存"""
        joblib.dump(model, filepath)
        print(f"モデルを保存しました: {filepath}")
    
    def load_model(self, filepath):
        """モデルの読み込み"""
        model = joblib.load(filepath)
        print(f"モデルを読み込みました: {filepath}")
        return model

# 使用例
model_eval = ModelEvaluation()
model_eval.setup_models()

# データ分割
X_train, X_test, y_train, y_test = train_test_split(
    selected_features, target, test_size=0.2, random_state=42, stratify=target
)

# モデル比較
cv_results = model_eval.cross_validation_comparison(X_train, y_train)

# ハイパーパラメータチューニング
best_rf, best_score = model_eval.hyperparameter_tuning(
    X_train, y_train, 'random_forest'
)

# 詳細評価
feature_importance = model_eval.detailed_evaluation(
    best_rf, X_train, X_test, y_train, y_test
)

# モデル保存
model_eval.save_model(best_rf, 'best_model.pkl')
```

## 🔮 Phase 4: 時系列分析と予測

### 4.1 時系列分析の実装

```python
from statsmodels.tsa.seasonal import seasonal_decompose
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.statespace.sarimax import SARIMAX
from statsmodels.tsa.holtwinters import ExponentialSmoothing
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
from statsmodels.tsa.stattools import adfuller

class TimeSeriesAnalysis:
    """
    時系列分析と予測モデリング
    """
    
    def __init__(self):
        self.ts_data = None
        self.models = {}
        self.forecasts = {}
    
    def generate_sample_timeseries(self, periods=365):
        """サンプル時系列データの生成"""
        np.random.seed(42)
        dates = pd.date_range('2023-01-01', periods=periods, freq='D')
        
        # トレンド成分
        trend = np.linspace(100, 150, periods)
        
        # 季節成分
        seasonal = 20 * np.sin(2 * np.pi * np.arange(periods) / 365.25)
        
        # ノイズ成分
        noise = np.random.normal(0, 5, periods)
        
        # 時系列データ
        ts_values = trend + seasonal + noise
        
        self.ts_data = pd.Series(ts_values, index=dates, name='value')
        return self.ts_data
    
    def time_series_decomposition(self):
        """時系列分解"""
        if self.ts_data is None:
            self.generate_sample_timeseries()
        
        # 季節分解
        decomposition = seasonal_decompose(
            self.ts_data, model='additive', period=365
        )
        
        # 可視化
        fig, axes = plt.subplots(4, 1, figsize=(15, 12))
        
        decomposition.observed.plot(ax=axes[0], title='元データ')
        decomposition.trend.plot(ax=axes[1], title='トレンド成分')
        decomposition.seasonal.plot(ax=axes[2], title='季節成分')
        decomposition.resid.plot(ax=axes[3], title='残差成分')
        
        plt.tight_layout()
        plt.show()
        
        return decomposition
    
    def stationarity_test(self):
        """定常性の検定"""
        if self.ts_data is None:
            self.generate_sample_timeseries()
        
        # Augmented Dickey-Fuller検定
        result = adfuller(self.ts_data.dropna())
        
        print("=== 定常性検定 (ADF検定) ===")
        print(f"ADF統計量: {result[0]:.6f}")
        print(f"p値: {result[1]:.6f}")
        print(f"臨界値:")
        for key, value in result[4].items():
            print(f"\t{key}: {value:.3f}")
        
        if result[1] <= 0.05:
            print("結果: 時系列は定常である (p < 0.05)")
        else:
            print("結果: 時系列は非定常である (p >= 0.05)")
        
        # 差分系列での定常性確認
        diff_series = self.ts_data.diff().dropna()
        diff_result = adfuller(diff_series)
        
        print("\n=== 1次差分系列の定常性検定 ===")
        print(f"ADF統計量: {diff_result[0]:.6f}")
        print(f"p値: {diff_result[1]:.6f}")
        
        return result, diff_result
    
    def acf_pacf_analysis(self):
        """自己相関・偏自己相関分析"""
        if self.ts_data is None:
            self.generate_sample_timeseries()
        
        fig, axes = plt.subplots(2, 2, figsize=(15, 10))
        
        # 元データのACF/PACF
        plot_acf(self.ts_data.dropna(), lags=40, ax=axes[0, 0], title='ACF (元データ)')
        plot_pacf(self.ts_data.dropna(), lags=40, ax=axes[0, 1], title='PACF (元データ)')
        
        # 差分系列のACF/PACF
        diff_series = self.ts_data.diff().dropna()
        plot_acf(diff_series, lags=40, ax=axes[1, 0], title='ACF (1次差分)')
        plot_pacf(diff_series, lags=40, ax=axes[1, 1], title='PACF (1次差分)')
        
        plt.tight_layout()
        plt.show()
    
    def arima_modeling(self, order=(1, 1, 1)):
        """ARIMAモデリング"""
        if self.ts_data is None:
            self.generate_sample_timeseries()
        
        # データ分割
        train_size = int(len(self.ts_data) * 0.8)
        train_data = self.ts_data[:train_size]
        test_data = self.ts_data[train_size:]
        
        # ARIMAモデル
        arima_model = ARIMA(train_data, order=order)
        arima_fitted = arima_model.fit()
        
        print("=== ARIMAモデル結果 ===")
        print(arima_fitted.summary())
        
        # 予測
        forecast_steps = len(test_data)
        forecast = arima_fitted.forecast(steps=forecast_steps)
        forecast_ci = arima_fitted.get_forecast(steps=forecast_steps).conf_int()
        
        # 可視化
        plt.figure(figsize=(15, 8))
        
        # 訓練データ
        plt.plot(train_data.index, train_data.values, label='訓練データ', color='blue')
        
        # テストデータ
        plt.plot(test_data.index, test_data.values, label='実測値', color='green')
        
        # 予測値
        plt.plot(test_data.index, forecast, label='予測値', color='red')
        
        # 信頼区間
        plt.fill_between(test_data.index, 
                        forecast_ci.iloc[:, 0], 
                        forecast_ci.iloc[:, 1], 
                        color='red', alpha=0.3, label='95%信頼区間')
        
        plt.title('ARIMA予測結果')
        plt.legend()
        plt.grid(True)
        plt.show()
        
        # 予測精度評価
        mse = np.mean((test_data.values - forecast) ** 2)
        rmse = np.sqrt(mse)
        mae = np.mean(np.abs(test_data.values - forecast))
        
        print(f"\n=== 予測精度 ===")
        print(f"MSE: {mse:.4f}")
        print(f"RMSE: {rmse:.4f}")
        print(f"MAE: {mae:.4f}")
        
        self.models['arima'] = arima_fitted
        self.forecasts['arima'] = forecast
        
        return arima_fitted, forecast
    
    def exponential_smoothing(self):
        """指数平滑法"""
        if self.ts_data is None:
            self.generate_sample_timeseries()
        
        train_size = int(len(self.ts_data) * 0.8)
        train_data = self.ts_data[:train_size]
        test_data = self.ts_data[train_size:]
        
        # Holt-Winters法
        hw_model = ExponentialSmoothing(
            train_data, 
            trend='add', 
            seasonal='add', 
            seasonal_periods=365
        )
        hw_fitted = hw_model.fit()
        
        # 予測
        forecast = hw_fitted.forecast(steps=len(test_data))
        
        # 可視化
        plt.figure(figsize=(15, 8))
        plt.plot(train_data.index, train_data.values, label='訓練データ')
        plt.plot(test_data.index, test_data.values, label='実測値')
        plt.plot(test_data.index, forecast, label='Holt-Winters予測')
        plt.title('Holt-Winters法による予測')
        plt.legend()
        plt.grid(True)
        plt.show()
        
        # 精度評価
        mse = np.mean((test_data.values - forecast) ** 2)
        print(f"Holt-Winters RMSE: {np.sqrt(mse):.4f}")
        
        self.models['holt_winters'] = hw_fitted
        self.forecasts['holt_winters'] = forecast
        
        return hw_fitted, forecast

# 使用例
ts_analyzer = TimeSeriesAnalysis()
ts_data = ts_analyzer.generate_sample_timeseries(periods=730)  # 2年分
decomposition = ts_analyzer.time_series_decomposition()
stationarity_results = ts_analyzer.stationarity_test()
ts_analyzer.acf_pacf_analysis()
arima_model, arima_forecast = ts_analyzer.arima_modeling(order=(2, 1, 2))
hw_model, hw_forecast = ts_analyzer.exponential_smoothing()
```

## 🌐 Phase 5: ビッグデータとMLOps

### 5.1 スケーラブルデータ処理

```python
import dask.dataframe as dd
from dask.distributed import Client
import sqlite3

class BigDataProcessing:
    """
    ビッグデータ処理のための実装
    """
    
    def __init__(self):
        self.client = None
        self.data_chunks = []
    
    def setup_dask_client(self, n_workers=2):
        """Daskクライアントのセットアップ"""
        self.client = Client(n_workers=n_workers, threads_per_worker=2)
        print(f"Daskクライアント起動: {self.client.dashboard_link}")
        return self.client
    
    def create_large_dataset(self, n_files=5, rows_per_file=100000):
        """大規模データセットの生成"""
        for i in range(n_files):
            np.random.seed(i)
            data = pd.DataFrame({
                'user_id': np.random.randint(1, 10000, rows_per_file),
                'timestamp': pd.date_range(
                    '2024-01-01', periods=rows_per_file, freq='1min'
                ),
                'event_type': np.random.choice(
                    ['click', 'view', 'purchase'], rows_per_file,
                    p=[0.7, 0.25, 0.05]
                ),
                'value': np.random.exponential(50, rows_per_file),
                'category': np.random.choice(
                    ['A', 'B', 'C', 'D'], rows_per_file
                )
            })
            
            filename = f'large_data_{i}.csv'
            data.to_csv(filename, index=False)
            print(f"生成完了: {filename}")
    
    def dask_data_processing(self):
        """Daskを使った並列データ処理"""
        # Daskデータフレームとして読み込み
        dask_df = dd.read_csv('large_data_*.csv')
        
        print(f"データサイズ: {len(dask_df)} 行 (推定)")
        print(f"パーティション数: {dask_df.npartitions}")
        
        # 並列処理による集計
        results = {}
        
        # 基本統計
        results['basic_stats'] = dask_df.describe().compute()
        
        # グループ集計
        results['event_summary'] = dask_df.groupby('event_type').agg({
            'value': ['sum', 'mean', 'count'],
            'user_id': 'nunique'
        }).compute()
        
        # 時系列集計
        dask_df['hour'] = dd.to_datetime(dask_df['timestamp']).dt.hour
        results['hourly_summary'] = dask_df.groupby(['hour', 'event_type'])['value'].sum().compute()
        
        print("=== イベント別サマリー ===")
        print(results['event_summary'])
        
        return results
    
    def streaming_data_simulation(self):
        """ストリーミングデータ処理の模擬実装"""
        def process_batch(batch_data):
            """バッチ処理関数"""
            # リアルタイム集計
            batch_summary = batch_data.groupby('event_type').agg({
                'value': ['sum', 'mean', 'count']
            })
            
            # 異常検知
            anomalies = batch_data[
                batch_data['value'] > batch_data['value'].quantile(0.99)
            ]
            
            return {
                'summary': batch_summary,
                'anomalies': anomalies,
                'timestamp': pd.Timestamp.now()
            }
        
        # ストリーミング処理のシミュレーション
        batch_size = 1000
        streaming_results = []
        
        # 大きなデータセットをバッチに分割
        full_data = pd.concat([
            pd.read_csv(f'large_data_{i}.csv') for i in range(2)
        ])
        
        for i in range(0, len(full_data), batch_size):
            batch = full_data.iloc[i:i+batch_size]
            result = process_batch(batch)
            streaming_results.append(result)
            
            if i % (batch_size * 10) == 0:  # 10バッチごとに進捗表示
                print(f"処理済みバッチ: {i//batch_size + 1}")
        
        return streaming_results

# SQLデータベース連携
class DatabaseIntegration:
    """
    データベース連携による大規模データ処理
    """
    
    def __init__(self, db_path='analytics.db'):
        self.db_path = db_path
        self.conn = None
    
    def setup_database(self):
        """データベースのセットアップ"""
        self.conn = sqlite3.connect(self.db_path)
        
        # テーブル作成
        create_table_query = '''
        CREATE TABLE IF NOT EXISTS user_events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            timestamp TEXT,
            event_type TEXT,
            value REAL,
            category TEXT
        )
        '''
        
        self.conn.execute(create_table_query)
        self.conn.commit()
        print("データベースセットアップ完了")
    
    def bulk_insert_data(self):
        """大量データの効率的な挿入"""
        # CSVデータをデータベースに挿入
        for i in range(2):  # 最初の2ファイルのみ
            df = pd.read_csv(f'large_data_{i}.csv')
            df.to_sql('user_events', self.conn, if_exists='append', index=False)
            print(f"挿入完了: large_data_{i}.csv")
    
    def sql_analytics(self):
        """SQLによる分析クエリ"""
        queries = {
            'daily_summary': '''
                SELECT 
                    DATE(timestamp) as date,
                    event_type,
                    COUNT(*) as event_count,
                    SUM(value) as total_value,
                    AVG(value) as avg_value
                FROM user_events 
                GROUP BY DATE(timestamp), event_type
                ORDER BY date, event_type
            ''',
            
            'user_behavior': '''
                SELECT 
                    user_id,
                    COUNT(DISTINCT event_type) as event_types,
                    COUNT(*) as total_events,
                    SUM(value) as total_value
                FROM user_events 
                GROUP BY user_id
                HAVING total_events >= 10
                ORDER BY total_value DESC
                LIMIT 20
            ''',
            
            'conversion_funnel': '''
                WITH user_events_agg AS (
                    SELECT 
                        user_id,
                        MAX(CASE WHEN event_type = 'view' THEN 1 ELSE 0 END) as has_view,
                        MAX(CASE WHEN event_type = 'click' THEN 1 ELSE 0 END) as has_click,
                        MAX(CASE WHEN event_type = 'purchase' THEN 1 ELSE 0 END) as has_purchase
                    FROM user_events
                    GROUP BY user_id
                )
                SELECT 
                    SUM(has_view) as viewers,
                    SUM(has_click) as clickers,
                    SUM(has_purchase) as purchasers,
                    ROUND(SUM(has_click) * 100.0 / SUM(has_view), 2) as click_rate,
                    ROUND(SUM(has_purchase) * 100.0 / SUM(has_click), 2) as conversion_rate
                FROM user_events_agg
                WHERE has_view = 1
            '''
        }
        
        results = {}
        for name, query in queries.items():
            results[name] = pd.read_sql_query(query, self.conn)
            print(f"=== {name} ===")
            print(results[name])
            print()
        
        return results
    
    def close_connection(self):
        """データベース接続を閉じる"""
        if self.conn:
            self.conn.close()

# 使用例
if __name__ == "__main__":
    # ビッグデータ処理
    big_data_processor = BigDataProcessing()
    
    # 大規模データセット生成
    big_data_processor.create_large_dataset(n_files=3, rows_per_file=50000)
    
    # Daskクライアント起動
    client = big_data_processor.setup_dask_client()
    
    # 並列処理実行
    processing_results = big_data_processor.dask_data_processing()
    
    # ストリーミング処理シミュレーション
    streaming_results = big_data_processor.streaming_data_simulation()
    
    # データベース連携
    db_integration = DatabaseIntegration()
    db_integration.setup_database()
    db_integration.bulk_insert_data()
    sql_results = db_integration.sql_analytics()
    db_integration.close_connection()
    
    print("ビッグデータ処理完了")
```

### 5.2 モデルデプロイメントとモニタリング

```python
import pickle
from datetime import datetime
import json

class ModelDeployment:
    """
    機械学習モデルのデプロイメントとモニタリング
    """
    
    def __init__(self, model_name="production_model"):
        self.model_name = model_name
        self.model = None
        self.model_metadata = {}
        self.prediction_log = []
        self.performance_metrics = {}
    
    def prepare_model_for_deployment(self, trained_model, feature_names, target_name):
        """デプロイ用モデルの準備"""
        self.model = trained_model
        self.model_metadata = {
            'model_type': type(trained_model).__name__,
            'feature_names': feature_names,
            'target_name': target_name,
            'deployment_date': datetime.now().isoformat(),
            'version': '1.0.0'
        }
        
        # モデルの保存
        model_package = {
            'model': trained_model,
            'metadata': self.model_metadata
        }
        
        with open(f'{self.model_name}.pkl', 'wb') as f:
            pickle.dump(model_package, f)
        
        print(f"モデルデプロイメント準備完了: {self.model_name}")
        return model_package
    
    def load_production_model(self, model_path=None):
        """本番環境モデルの読み込み"""
        if model_path is None:
            model_path = f'{self.model_name}.pkl'
        
        with open(model_path, 'rb') as f:
            model_package = pickle.load(f)
        
        self.model = model_package['model']
        self.model_metadata = model_package['metadata']
        
        print(f"本番モデル読み込み完了: {self.model_metadata['version']}")
        return self.model
    
    def predict_with_logging(self, input_data, user_id=None):
        """予測とログ記録"""
        if self.model is None:
            raise ValueError("モデルが読み込まれていません")
        
        # 予測実行
        prediction_start = datetime.now()
        
        if hasattr(input_data, 'values'):
            prediction = self.model.predict(input_data.values.reshape(1, -1))[0]
            prediction_proba = None
            if hasattr(self.model, 'predict_proba'):
                prediction_proba = self.model.predict_proba(input_data.values.reshape(1, -1))[0]
        else:
            prediction = self.model.predict([input_data])[0]
            prediction_proba = None
            if hasattr(self.model, 'predict_proba'):
                prediction_proba = self.model.predict_proba([input_data])[0]
        
        prediction_end = datetime.now()
        
        # ログ記録
        log_entry = {
            'timestamp': prediction_start.isoformat(),
            'user_id': user_id,
            'input_data': input_data.tolist() if hasattr(input_data, 'tolist') else input_data,
            'prediction': float(prediction),
            'prediction_proba': prediction_proba.tolist() if prediction_proba is not None else None,
            'latency_ms': (prediction_end - prediction_start).total_seconds() * 1000,
            'model_version': self.model_metadata['version']
        }
        
        self.prediction_log.append(log_entry)
        
        return prediction, prediction_proba
    
    def batch_prediction(self, batch_data):
        """バッチ予測処理"""
        batch_start = datetime.now()
        
        predictions = self.model.predict(batch_data)
        prediction_probas = None
        if hasattr(self.model, 'predict_proba'):
            prediction_probas = self.model.predict_proba(batch_data)
        
        batch_end = datetime.now()
        
        # バッチログ
        batch_log = {
            'timestamp': batch_start.isoformat(),
            'batch_size': len(batch_data),
            'total_latency_ms': (batch_end - batch_start).total_seconds() * 1000,
            'avg_latency_per_sample': (batch_end - batch_start).total_seconds() * 1000 / len(batch_data),
            'model_version': self.model_metadata['version']
        }
        
        self.prediction_log.append(batch_log)
        
        return predictions, prediction_probas
    
    def monitor_model_performance(self, true_labels=None):
        """モデルパフォーマンスのモニタリング"""
        if not self.prediction_log:
            print("予測ログがありません")
            return
        
        # レイテンシ分析
        latencies = [log.get('latency_ms', 0) for log in self.prediction_log if 'latency_ms' in log]
        
        if latencies:
            latency_stats = {
                'mean_latency': np.mean(latencies),
                'median_latency': np.median(latencies),
                'p95_latency': np.percentile(latencies, 95),
                'p99_latency': np.percentile(latencies, 99)
            }
            
            print("=== レイテンシ統計 ===")
            for metric, value in latency_stats.items():
                print(f"{metric}: {value:.2f} ms")
        
        # 予測分布分析
        predictions = [log.get('prediction') for log in self.prediction_log if 'prediction' in log]
        
        if predictions:
            plt.figure(figsize=(12, 4))
            
            plt.subplot(1, 2, 1)
            plt.hist(predictions, bins=50, alpha=0.7)
            plt.title('予測値の分布')
            plt.xlabel('予測値')
            plt.ylabel('頻度')
            
            plt.subplot(1, 2, 2)
            if latencies:
                plt.hist(latencies, bins=50, alpha=0.7)
                plt.title('レイテンシの分布')
                plt.xlabel('レイテンシ (ms)')
                plt.ylabel('頻度')
            
            plt.tight_layout()
            plt.show()
        
        # ドリフト検出（概念実装）
        self.detect_data_drift()
        
        return {
            'latency_stats': latency_stats if latencies else {},
            'prediction_stats': {
                'count': len(predictions),
                'mean': np.mean(predictions) if predictions else 0,
                'std': np.std(predictions) if predictions else 0
            }
        }
    
    def detect_data_drift(self):
        """データドリフトの検出"""
        if len(self.prediction_log) < 100:
            print("ドリフト検出にはより多くのデータが必要です")
            return
        
        # 最近の予測と過去の予測を比較
        recent_predictions = [log.get('prediction') for log in self.prediction_log[-50:] if 'prediction' in log]
        historical_predictions = [log.get('prediction') for log in self.prediction_log[:-50] if 'prediction' in log]
        
        if recent_predictions and historical_predictions:
            # KS検定による分布の比較
            from scipy.stats import ks_2samp
            
            ks_stat, p_value = ks_2samp(historical_predictions, recent_predictions)
            
            print("=== データドリフト検出 ===")
            print(f"KS統計量: {ks_stat:.4f}")
            print(f"p値: {p_value:.4f}")
            
            if p_value < 0.05:
                print("⚠️ 有意なデータドリフトが検出されました")
            else:
                print("✅ 有意なデータドリフトは検出されませんでした")
            
            return {'ks_stat': ks_stat, 'p_value': p_value}
    
    def generate_monitoring_report(self):
        """モニタリングレポートの生成"""
        report = {
            'model_info': self.model_metadata,
            'prediction_count': len(self.prediction_log),
            'monitoring_period': {
                'start': self.prediction_log[0]['timestamp'] if self.prediction_log else None,
                'end': self.prediction_log[-1]['timestamp'] if self.prediction_log else None
            }
        }
        
        # レポートをJSONで保存
        report_filename = f'{self.model_name}_monitoring_report.json'
        with open(report_filename, 'w') as f:
            json.dump(report, f, indent=2)
        
        print(f"モニタリングレポート生成: {report_filename}")
        return report

# 使用例
deployment = ModelDeployment("vibe_coding_model")

# 前回作成したモデルをデプロイ用に準備
model_package = deployment.prepare_model_for_deployment(
    best_rf, 
    selected_features.columns.tolist(),
    'purchased'
)

# 本番環境でのモデル読み込み
production_model = deployment.load_production_model()

# 予測とモニタリング
for i in range(100):
    # サンプル入力データ
    sample_input = selected_features.iloc[i]
    prediction, prediction_proba = deployment.predict_with_logging(
        sample_input, user_id=f"user_{i}"
    )

# パフォーマンスモニタリング
monitoring_results = deployment.monitor_model_performance()

# モニタリングレポート生成
monitoring_report = deployment.generate_monitoring_report()
```

## 🎯 実践プロジェクト

### プロジェクト: カスタマーライフタイムバリュー（CLV）予測システム

```python
class CLVPredictionSystem:
    """
    顧客生涯価値予測システムの構築
    """
    
    def __init__(self):
        self.data_pipeline = None
        self.feature_engineer = None
        self.model_pipeline = None
        self.deployment_system = None
    
    def setup_complete_pipeline(self):
        """完全なMLパイプラインのセットアップ"""
        # 1. データパイプライン
        self.data_pipeline = DataScienceWorkflow()
        
        # 2. 特徴量エンジニアリング
        self.feature_engineer = FeatureEngineering()
        
        # 3. モデルパイプライン
        self.model_pipeline = ModelEvaluation()
        self.model_pipeline.setup_models()
        
        # 4. デプロイメントシステム
        self.deployment_system = ModelDeployment("clv_model")
        
        print("CLV予測システム セットアップ完了")
    
    def generate_clv_data(self, n_customers=5000):
        """CLV予測用のサンプルデータ生成"""
        np.random.seed(42)
        
        # 顧客基本情報
        customers = pd.DataFrame({
            'customer_id': range(1, n_customers + 1),
            'age': np.random.normal(40, 15, n_customers),
            'income': np.random.lognormal(10, 0.5, n_customers),
            'education_years': np.random.poisson(16, n_customers),
            'city_tier': np.random.choice([1, 2, 3], n_customers, p=[0.3, 0.5, 0.2]),
            'acquisition_channel': np.random.choice(['online', 'offline', 'referral'], n_customers, p=[0.5, 0.3, 0.2])
        })
        
        # 行動データ
        customers['days_since_first_purchase'] = np.random.exponential(200, n_customers)
        customers['total_orders'] = np.random.poisson(
            5 + customers['income'] / 50000 + customers['age'] / 20, n_customers
        )
        customers['avg_order_value'] = np.random.lognormal(
            4 + customers['income'] / 100000, 0.5, n_customers
        )
        customers['recency_days'] = np.random.exponential(30, n_customers)
        
        # CLV計算（真の値）
        customers['clv'] = (
            customers['avg_order_value'] * 
            customers['total_orders'] * 
            (365 / customers['recency_days'].clip(1, 365)) *
            np.random.uniform(0.8, 1.2, n_customers)
        )
        
        # 高価値顧客フラグ（予測ターゲット）
        customers['high_value'] = (customers['clv'] > customers['clv'].quantile(0.7)).astype(int)
        
        return customers
    
    def end_to_end_pipeline(self):
        """エンドツーエンドパイプラインの実行"""
        print("=== CLV予測システム - エンドツーエンドパイプライン ===")
        
        # 1. データ生成と前処理
        print("1. データ生成と前処理...")
        clv_data = self.generate_clv_data()
        self.data_pipeline.raw_data = clv_data
        processed_data = self.data_pipeline.preprocess_data()
        
        # 2. 特徴量エンジニアリング
        print("2. 特徴量エンジニアリング...")
        feature_cols = ['age', 'income', 'education_years', 'days_since_first_purchase', 
                       'total_orders', 'avg_order_value', 'recency_days']
        X = processed_data[feature_cols]
        y = processed_data['high_value']
        
        # カテゴリカル変数のエンコーディング
        X_encoded = pd.get_dummies(X)
        
        # 交互作用特徴量
        interaction_features = self.feature_engineer.create_interaction_features(X_encoded)
        
        # 特徴量選択
        selected_features = self.feature_engineer.feature_selection(
            interaction_features, y, method='mutual_info', k=20
        )
        
        # 3. モデル学習と評価
        print("3. モデル学習と評価...")
        X_train, X_test, y_train, y_test = train_test_split(
            selected_features, y, test_size=0.2, random_state=42, stratify=y
        )
        
        # モデル比較
        cv_results = self.model_pipeline.cross_validation_comparison(X_train, y_train)
        
        # 最適化
        best_model, best_score = self.model_pipeline.hyperparameter_tuning(
            X_train, y_train, 'random_forest'
        )
        
        # 詳細評価
        feature_importance = self.model_pipeline.detailed_evaluation(
            best_model, X_train, X_test, y_train, y_test
        )
        
        # 4. デプロイメント
        print("4. モデルデプロイメント...")
        model_package = self.deployment_system.prepare_model_for_deployment(
            best_model, selected_features.columns.tolist(), 'high_value'
        )
        
        # 5. A/Bテスト設計
        print("5. A/Bテスト設計...")
        stat_analyzer = StatisticalAnalysis()
        ab_sample_size = stat_analyzer.ab_test_design(effect_size=0.1)
        
        print("エンドツーエンドパイプライン完了!")
        
        return {
            'processed_data': processed_data,
            'best_model': best_model,
            'feature_importance': feature_importance,
            'cv_results': cv_results,
            'deployment_package': model_package
        }

# システム実行
clv_system = CLVPredictionSystem()
clv_system.setup_complete_pipeline()
pipeline_results = clv_system.end_to_end_pipeline()
```

## 📚 まとめと次のステップ

この特典では、AI駆動開発に必要なデータサイエンス・分析スキルを包括的に学習しました。

### 習得したスキル
✅ データサイエンス基礎概念と実装  
✅ pandas/NumPyによる高度なデータ操作  
✅ 統計分析とA/Bテスト設計  
✅ 高度な可視化技術  
✅ 特徴量エンジニアリング  
✅ モデル評価と最適化  
✅ 時系列分析と予測  
✅ ビッグデータ処理技術  
✅ MLOpsとモデルデプロイメント  
✅ エンドツーエンドMLパイプライン構築  

### 実践的な学習課題
1. **独自データセットでの分析**: 業界特有のデータで分析パイプラインを構築
2. **リアルタイム予測システム**: ストリーミングデータでの予測システム開発
3. **A/Bテスト実装**: 実際のプロダクトでのA/Bテスト設計と分析
4. **時系列予測**: ビジネスメトリクスの予測モデル構築
5. **MLOpsパイプライン**: CI/CDを含む完全なMLOpsパイプライン構築

### 推奨学習リソース
- **書籍**: "Hands-On Machine Learning", "Python for Data Analysis"
- **オンラインコース**: Coursera Machine Learning, edX Data Science
- **実践プラットフォーム**: Kaggle, Google Colab
- **コミュニティ**: PyData, MLOps Community

データサイエンスは継続的な学習と実践が重要です。このガイドをベースに、実際のプロジェクトで経験を積んでいきましょう！