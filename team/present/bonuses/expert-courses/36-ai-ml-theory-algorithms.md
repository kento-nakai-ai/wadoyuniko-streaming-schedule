# AI/ML理論とアルゴリズム完全マスターガイド 🧠
## バイブコーディングで理解する機械学習の数学的基盤
**専門講座・教材特典**

---

## 🎯 なぜAI/ML理論が重要なのか？

### 理論理解の重要性
- **適切なアルゴリズム選択**: 問題に最適な手法を見極める
- **ハイパーパラメータ調整**: 理論背景を理解した最適化
- **問題解決能力**: 新しい課題への応用力
- **デバッグ・改善**: モデルの問題点を特定・解決する力

### バイブコーディングによる理論学習
```javascript
従来の理論学習 → バイブコーディング理論学習
- 数式暗記 → 直感的理解
- 抽象的学習 → 実装で体感
- 受動的学習 → インタラクティブ学習
- 孤立した知識 → 体系的理解
```

---

## 📊 機械学習の数学的基盤

### 線形代数の基礎
```python
import numpy as np
import matplotlib.pyplot as plt
from typing import Tuple, List

class LinearAlgebraFoundation:
    """線形代数の基礎実装"""
    
    @staticmethod
    def vector_operations_demo():
        """ベクトル演算のデモンストレーション"""
        
        # ベクトルの定義
        v1 = np.array([2, 3])
        v2 = np.array([1, 4])
        
        print("=== ベクトル演算 ===")
        print(f"v1 = {v1}")
        print(f"v2 = {v2}")
        
        # 基本演算
        addition = v1 + v2
        subtraction = v1 - v2
        scalar_mult = 3 * v1
        
        print(f"v1 + v2 = {addition}")
        print(f"v1 - v2 = {subtraction}")
        print(f"3 * v1 = {scalar_mult}")
        
        # 内積
        dot_product = np.dot(v1, v2)
        print(f"v1 · v2 = {dot_product}")
        
        # ノルム（長さ）
        norm_v1 = np.linalg.norm(v1)
        print(f"||v1|| = {norm_v1:.3f}")
        
        # 正規化
        normalized_v1 = v1 / norm_v1
        print(f"正規化v1 = {normalized_v1}")
        
        return {
            'vectors': (v1, v2),
            'operations': (addition, subtraction, scalar_mult),
            'dot_product': dot_product,
            'norm': norm_v1
        }
    
    @staticmethod
    def matrix_operations_demo():
        """行列演算のデモンストレーション"""
        
        # 行列の定義
        A = np.array([[1, 2], [3, 4]])
        B = np.array([[5, 6], [7, 8]])
        
        print("\n=== 行列演算 ===")
        print(f"A = \n{A}")
        print(f"B = \n{B}")
        
        # 基本演算
        matrix_add = A + B
        matrix_mult = np.dot(A, B)  # または A @ B
        transpose_A = A.T
        
        print(f"A + B = \n{matrix_add}")
        print(f"A × B = \n{matrix_mult}")
        print(f"A^T = \n{transpose_A}")
        
        # 行列式と逆行列
        det_A = np.linalg.det(A)
        inv_A = np.linalg.inv(A)
        
        print(f"det(A) = {det_A}")
        print(f"A^(-1) = \n{inv_A}")
        
        # 固有値・固有ベクトル
        eigenvalues, eigenvectors = np.linalg.eig(A)
        print(f"固有値: {eigenvalues}")
        print(f"固有ベクトル: \n{eigenvectors}")
        
        return {
            'matrices': (A, B),
            'operations': (matrix_add, matrix_mult, transpose_A),
            'determinant': det_A,
            'inverse': inv_A,
            'eigenvalues': eigenvalues,
            'eigenvectors': eigenvectors
        }
    
    @staticmethod
    def linear_transformation_visualization():
        """線形変換の可視化"""
        
        # 基本ベクトル
        original_vectors = np.array([[1, 0], [0, 1], [1, 1]])
        
        # 変換行列の例
        transformations = {
            'rotation_90': np.array([[0, -1], [1, 0]]),
            'scaling': np.array([[2, 0], [0, 0.5]]),
            'shearing': np.array([[1, 0.5], [0, 1]]),
            'reflection': np.array([[-1, 0], [0, 1]])
        }
        
        fig, axes = plt.subplots(2, 2, figsize=(12, 10))
        fig.suptitle('線形変換の可視化', fontsize=16)
        
        for i, (name, transform_matrix) in enumerate(transformations.items()):
            ax = axes[i//2, i%2]
            
            # 元のベクトル
            for j, vec in enumerate(original_vectors):
                ax.arrow(0, 0, vec[0], vec[1], head_width=0.1, 
                        head_length=0.1, fc='blue', ec='blue', alpha=0.7)
            
            # 変換後のベクトル
            transformed_vectors = original_vectors @ transform_matrix.T
            for j, vec in enumerate(transformed_vectors):
                ax.arrow(0, 0, vec[0], vec[1], head_width=0.1, 
                        head_length=0.1, fc='red', ec='red', alpha=0.7)
            
            ax.set_xlim(-3, 3)
            ax.set_ylim(-3, 3)
            ax.grid(True)
            ax.set_title(f'{name.replace("_", " ").title()}')
            ax.set_aspect('equal')
        
        plt.tight_layout()
        plt.savefig('linear_transformations.png', dpi=150, bbox_inches='tight')
        plt.show()

# 使用例
def linear_algebra_demo():
    """線形代数の実践例"""
    foundation = LinearAlgebraFoundation()
    
    # ベクトル演算
    vector_results = foundation.vector_operations_demo()
    
    # 行列演算
    matrix_results = foundation.matrix_operations_demo()
    
    # 可視化
    foundation.linear_transformation_visualization()
    
    return vector_results, matrix_results
```

### 微積分とOptimization
```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import minimize
from typing import Callable

class CalculusAndOptimization:
    """微積分と最適化の基礎"""
    
    @staticmethod
    def gradient_descent_demo():
        """勾配降下法のデモンストレーション"""
        
        # 目的関数: f(x) = (x-3)^2 + 2
        def objective_function(x):
            return (x - 3)**2 + 2
        
        # 勾配（導関数）: f'(x) = 2(x-3)
        def gradient(x):
            return 2 * (x - 3)
        
        # 勾配降下法の実装
        def gradient_descent(start_x, learning_rate, num_iterations):
            x = start_x
            history = [x]
            
            for i in range(num_iterations):
                grad = gradient(x)
                x = x - learning_rate * grad
                history.append(x)
            
            return x, history
        
        # 実行
        start_point = 0.0
        learning_rate = 0.1
        iterations = 50
        
        final_x, x_history = gradient_descent(start_point, learning_rate, iterations)
        
        print("=== 勾配降下法 ===")
        print(f"開始点: {start_point}")
        print(f"学習率: {learning_rate}")
        print(f"最終点: {final_x:.6f}")
        print(f"最小値: {objective_function(final_x):.6f}")
        print(f"理論的最小点: 3.0")
        
        # 可視化
        x_range = np.linspace(-1, 7, 100)
        y_range = [objective_function(x) for x in x_range]
        
        plt.figure(figsize=(12, 5))
        
        # 目的関数
        plt.subplot(1, 2, 1)
        plt.plot(x_range, y_range, 'b-', label='f(x) = (x-3)² + 2')
        plt.plot(x_history, [objective_function(x) for x in x_history], 
                'ro-', markersize=4, label='勾配降下の軌跡')
        plt.xlabel('x')
        plt.ylabel('f(x)')
        plt.title('勾配降下法による最適化')
        plt.legend()
        plt.grid(True)
        
        # 収束過程
        plt.subplot(1, 2, 2)
        plt.plot(range(len(x_history)), x_history, 'ro-', markersize=4)
        plt.axhline(y=3.0, color='g', linestyle='--', label='理論的最適値')
        plt.xlabel('反復回数')
        plt.ylabel('x値')
        plt.title('収束過程')
        plt.legend()
        plt.grid(True)
        
        plt.tight_layout()
        plt.savefig('gradient_descent.png', dpi=150, bbox_inches='tight')
        plt.show()
        
        return final_x, x_history
    
    @staticmethod
    def multivariable_optimization_demo():
        """多変数最適化のデモ"""
        
        # 目的関数: f(x,y) = x^2 + y^2 - 2x - 4y + 5
        def objective_2d(params):
            x, y = params
            return x**2 + y**2 - 2*x - 4*y + 5
        
        # 勾配
        def gradient_2d(params):
            x, y = params
            dx = 2*x - 2
            dy = 2*y - 4
            return np.array([dx, dy])
        
        # 2D勾配降下法
        def gradient_descent_2d(start_params, learning_rate, num_iterations):
            params = np.array(start_params)
            history = [params.copy()]
            
            for i in range(num_iterations):
                grad = gradient_2d(params)
                params = params - learning_rate * grad
                history.append(params.copy())
            
            return params, history
        
        # 実行
        start_point = [0.0, 0.0]
        learning_rate = 0.1
        iterations = 50
        
        final_params, param_history = gradient_descent_2d(start_point, learning_rate, iterations)
        
        print("\n=== 多変数最適化 ===")
        print(f"開始点: {start_point}")
        print(f"最終点: [{final_params[0]:.6f}, {final_params[1]:.6f}]")
        print(f"最小値: {objective_2d(final_params):.6f}")
        print(f"理論的最小点: [1.0, 2.0]")
        print(f"理論的最小値: 0.0")
        
        # 等高線プロット
        x = np.linspace(-2, 4, 100)
        y = np.linspace(-1, 5, 100)
        X, Y = np.meshgrid(x, y)
        Z = X**2 + Y**2 - 2*X - 4*Y + 5
        
        plt.figure(figsize=(10, 8))
        plt.contour(X, Y, Z, levels=20, alpha=0.6)
        plt.colorbar(label='f(x,y)')
        
        # 最適化の軌跡
        history_array = np.array(param_history)
        plt.plot(history_array[:, 0], history_array[:, 1], 'ro-', 
                markersize=4, label='勾配降下の軌跡')
        plt.plot(1, 2, 'g*', markersize=15, label='理論的最適点')
        
        plt.xlabel('x')
        plt.ylabel('y')
        plt.title('多変数関数の最適化')
        plt.legend()
        plt.grid(True)
        plt.savefig('multivariable_optimization.png', dpi=150, bbox_inches='tight')
        plt.show()
        
        return final_params, param_history

# 使用例
def calculus_demo():
    """微積分と最適化のデモ"""
    calc_opt = CalculusAndOptimization()
    
    # 1次元最適化
    result_1d = calc_opt.gradient_descent_demo()
    
    # 多次元最適化
    result_2d = calc_opt.multivariable_optimization_demo()
    
    return result_1d, result_2d
```

### 確率・統計の基礎
```python
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats
import seaborn as sns

class ProbabilityStatistics:
    """確率・統計の基礎実装"""
    
    @staticmethod
    def probability_distributions_demo():
        """確率分布のデモンストレーション"""
        
        # 各種確率分布
        distributions = {
            'normal': stats.norm(loc=0, scale=1),
            'uniform': stats.uniform(loc=-2, scale=4),
            'exponential': stats.expon(scale=1),
            'beta': stats.beta(a=2, b=5)
        }
        
        fig, axes = plt.subplots(2, 2, figsize=(12, 10))
        fig.suptitle('主要な確率分布', fontsize=16)
        
        x_ranges = {
            'normal': np.linspace(-4, 4, 100),
            'uniform': np.linspace(-3, 3, 100),
            'exponential': np.linspace(0, 5, 100),
            'beta': np.linspace(0, 1, 100)
        }
        
        for i, (name, dist) in enumerate(distributions.items()):
            ax = axes[i//2, i%2]
            x = x_ranges[name]
            
            # 確率密度関数
            pdf = dist.pdf(x)
            ax.plot(x, pdf, 'b-', label=f'PDF')
            
            # サンプル生成と ヒストグラム
            samples = dist.rvs(1000)
            ax.hist(samples, bins=30, density=True, alpha=0.7, 
                   color='lightblue', label='サンプル')
            
            ax.set_title(f'{name.capitalize()} Distribution')
            ax.set_xlabel('x')
            ax.set_ylabel('Density')
            ax.legend()
            ax.grid(True, alpha=0.3)
        
        plt.tight_layout()
        plt.savefig('probability_distributions.png', dpi=150, bbox_inches='tight')
        plt.show()
        
        return distributions
    
    @staticmethod
    def central_limit_theorem_demo():
        """中心極限定理のデモンストレーション"""
        
        # 元の分布（一様分布）
        original_dist = stats.uniform(loc=0, scale=10)
        
        sample_sizes = [1, 5, 10, 30]
        num_samples = 1000
        
        fig, axes = plt.subplots(2, 2, figsize=(12, 10))
        fig.suptitle('中心極限定理のデモンストレーション', fontsize=16)
        
        for i, n in enumerate(sample_sizes):
            ax = axes[i//2, i%2]
            
            # n個の標本の平均を num_samples 回計算
            sample_means = []
            for _ in range(num_samples):
                sample = original_dist.rvs(n)
                sample_means.append(np.mean(sample))
            
            # ヒストグラム
            ax.hist(sample_means, bins=30, density=True, alpha=0.7, 
                   color='lightgreen', label=f'標本平均 (n={n})')
            
            # 理論的な正規分布
            mean_theoretical = original_dist.mean()
            std_theoretical = original_dist.std() / np.sqrt(n)
            
            x = np.linspace(min(sample_means), max(sample_means), 100)
            theoretical_pdf = stats.norm.pdf(x, mean_theoretical, std_theoretical)
            ax.plot(x, theoretical_pdf, 'r-', linewidth=2, 
                   label='理論値 N(μ, σ²/n)')
            
            ax.set_title(f'標本サイズ: {n}')
            ax.set_xlabel('標本平均')
            ax.set_ylabel('密度')
            ax.legend()
            ax.grid(True, alpha=0.3)
        
        plt.tight_layout()
        plt.savefig('central_limit_theorem.png', dpi=150, bbox_inches='tight')
        plt.show()
        
        return sample_means
    
    @staticmethod
    def hypothesis_testing_demo():
        """仮説検定のデモンストレーション"""
        
        # シナリオ: 新しい学習方法の効果検証
        # H0: 新方法と従来方法に差はない（μ1 = μ2）
        # H1: 新方法の方が効果的（μ1 > μ2）
        
        np.random.seed(42)
        
        # データ生成
        traditional_scores = np.random.normal(75, 10, 30)  # 従来方法
        new_method_scores = np.random.normal(80, 10, 30)   # 新方法
        
        print("=== 仮説検定の例 ===")
        print("シナリオ: 新しい学習方法の効果検証")
        print(f"従来方法の平均点: {np.mean(traditional_scores):.2f}")
        print(f"新方法の平均点: {np.mean(new_method_scores):.2f}")
        
        # t検定
        t_statistic, p_value = stats.ttest_ind(new_method_scores, traditional_scores)
        
        print(f"t統計量: {t_statistic:.4f}")
        print(f"p値: {p_value:.4f}")
        
        alpha = 0.05
        if p_value < alpha:
            print(f"結論: p値 < {alpha} なので、帰無仮説を棄却")
            print("新方法は従来方法より効果的である可能性が高い")
        else:
            print(f"結論: p値 ≥ {alpha} なので、帰無仮説を採択")
            print("新方法と従来方法に有意な差は認められない")
        
        # 可視化
        plt.figure(figsize=(12, 5))
        
        # ヒストグラム比較
        plt.subplot(1, 2, 1)
        plt.hist(traditional_scores, bins=15, alpha=0.7, 
                label='従来方法', color='blue')
        plt.hist(new_method_scores, bins=15, alpha=0.7, 
                label='新方法', color='red')
        plt.xlabel('スコア')
        plt.ylabel('頻度')
        plt.title('両方法のスコア分布比較')
        plt.legend()
        plt.grid(True, alpha=0.3)
        
        # ボックスプロット
        plt.subplot(1, 2, 2)
        data_for_box = [traditional_scores, new_method_scores]
        plt.boxplot(data_for_box, labels=['従来方法', '新方法'])
        plt.ylabel('スコア')
        plt.title('ボックスプロット比較')
        plt.grid(True, alpha=0.3)
        
        plt.tight_layout()
        plt.savefig('hypothesis_testing.png', dpi=150, bbox_inches='tight')
        plt.show()
        
        return {
            'traditional_scores': traditional_scores,
            'new_method_scores': new_method_scores,
            't_statistic': t_statistic,
            'p_value': p_value
        }

# 使用例
def probability_statistics_demo():
    """確率統計のデモ"""
    prob_stats = ProbabilityStatistics()
    
    # 確率分布
    distributions = prob_stats.probability_distributions_demo()
    
    # 中心極限定理
    sample_means = prob_stats.central_limit_theorem_demo()
    
    # 仮説検定
    test_results = prob_stats.hypothesis_testing_demo()
    
    return distributions, sample_means, test_results
```

---

## 🤖 機械学習アルゴリズム実装

### 線形回帰
```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_regression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

class LinearRegressionFromScratch:
    """線形回帰の自作実装"""
    
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = None
        self.cost_history = []
    
    def fit(self, X, y):
        """モデルの訓練"""
        # 初期化
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        # 勾配降下法
        for i in range(self.n_iterations):
            # 予測
            y_pred = self.predict(X)
            
            # コスト計算
            cost = self._compute_cost(y, y_pred)
            self.cost_history.append(cost)
            
            # 勾配計算
            dw = (1/n_samples) * np.dot(X.T, (y_pred - y))
            db = (1/n_samples) * np.sum(y_pred - y)
            
            # パラメータ更新
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
    
    def predict(self, X):
        """予測"""
        return np.dot(X, self.weights) + self.bias
    
    def _compute_cost(self, y_true, y_pred):
        """コスト関数（平均二乗誤差）"""
        return np.mean((y_true - y_pred) ** 2)
    
    def get_params(self):
        """パラメータの取得"""
        return {
            'weights': self.weights,
            'bias': self.bias,
            'final_cost': self.cost_history[-1] if self.cost_history else None
        }

def linear_regression_demo():
    """線形回帰のデモンストレーション"""
    
    # データ生成
    X, y = make_regression(n_samples=100, n_features=1, noise=20, random_state=42)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # モデル訓練
    model = LinearRegressionFromScratch(learning_rate=0.01, n_iterations=1000)
    model.fit(X_train, y_train)
    
    # 予測
    y_train_pred = model.predict(X_train)
    y_test_pred = model.predict(X_test)
    
    # 評価
    train_mse = mean_squared_error(y_train, y_train_pred)
    test_mse = mean_squared_error(y_test, y_test_pred)
    train_r2 = r2_score(y_train, y_train_pred)
    test_r2 = r2_score(y_test, y_test_pred)
    
    print("=== 線形回帰結果 ===")
    print(f"訓練MSE: {train_mse:.2f}")
    print(f"テストMSE: {test_mse:.2f}")
    print(f"訓練R²: {train_r2:.3f}")
    print(f"テストR²: {test_r2:.3f}")
    
    params = model.get_params()
    print(f"重み: {params['weights'][0]:.3f}")
    print(f"バイアス: {params['bias']:.3f}")
    
    # 可視化
    plt.figure(figsize=(12, 5))
    
    # 回帰線
    plt.subplot(1, 2, 1)
    plt.scatter(X_train, y_train, alpha=0.7, label='訓練データ')
    plt.scatter(X_test, y_test, alpha=0.7, label='テストデータ')
    
    # 回帰線描画
    X_line = np.linspace(X.min(), X.max(), 100).reshape(-1, 1)
    y_line = model.predict(X_line)
    plt.plot(X_line, y_line, 'r-', label='回帰線')
    
    plt.xlabel('X')
    plt.ylabel('y')
    plt.title('線形回帰結果')
    plt.legend()
    plt.grid(True, alpha=0.3)
    
    # コスト関数の収束
    plt.subplot(1, 2, 2)
    plt.plot(model.cost_history)
    plt.xlabel('反復回数')
    plt.ylabel('コスト (MSE)')
    plt.title('コスト関数の収束')
    plt.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('linear_regression.png', dpi=150, bbox_inches='tight')
    plt.show()
    
    return model, (train_mse, test_mse, train_r2, test_r2)
```

### ロジスティック回帰
```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split

class LogisticRegressionFromScratch:
    """ロジスティック回帰の自作実装"""
    
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = None
        self.cost_history = []
    
    def _sigmoid(self, z):
        """シグモイド関数"""
        # オーバーフロー対策
        z = np.clip(z, -500, 500)
        return 1 / (1 + np.exp(-z))
    
    def fit(self, X, y):
        """モデルの訓練"""
        # 初期化
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        # 勾配降下法
        for i in range(self.n_iterations):
            # 線形結合
            linear_pred = np.dot(X, self.weights) + self.bias
            
            # シグモイド適用
            predictions = self._sigmoid(linear_pred)
            
            # コスト計算
            cost = self._compute_cost(y, predictions)
            self.cost_history.append(cost)
            
            # 勾配計算
            dw = (1/n_samples) * np.dot(X.T, (predictions - y))
            db = (1/n_samples) * np.sum(predictions - y)
            
            # パラメータ更新
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
    
    def predict(self, X):
        """予測（確率）"""
        linear_pred = np.dot(X, self.weights) + self.bias
        return self._sigmoid(linear_pred)
    
    def predict_classes(self, X):
        """クラス予測"""
        return (self.predict(X) >= 0.5).astype(int)
    
    def _compute_cost(self, y_true, y_pred):
        """ログ損失"""
        # 数値安定性のためのクリッピング
        y_pred = np.clip(y_pred, 1e-15, 1 - 1e-15)
        return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))

def logistic_regression_demo():
    """ロジスティック回帰のデモンストレーション"""
    
    # データ生成
    X, y = make_classification(n_samples=1000, n_features=2, n_redundant=0, 
                             n_informative=2, n_clusters_per_class=1, random_state=42)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # モデル訓練
    model = LogisticRegressionFromScratch(learning_rate=0.1, n_iterations=1000)
    model.fit(X_train, y_train)
    
    # 予測
    y_train_pred = model.predict_classes(X_train)
    y_test_pred = model.predict_classes(X_test)
    y_train_proba = model.predict(X_train)
    y_test_proba = model.predict(X_test)
    
    # 精度計算
    train_accuracy = np.mean(y_train_pred == y_train)
    test_accuracy = np.mean(y_test_pred == y_test)
    
    print("=== ロジスティック回帰結果 ===")
    print(f"訓練精度: {train_accuracy:.3f}")
    print(f"テスト精度: {test_accuracy:.3f}")
    
    # 可視化
    plt.figure(figsize=(15, 5))
    
    # データ分布
    plt.subplot(1, 3, 1)
    plt.scatter(X_train[y_train==0, 0], X_train[y_train==0, 1], 
               alpha=0.7, label='クラス 0', c='blue')
    plt.scatter(X_train[y_train==1, 0], X_train[y_train==1, 1], 
               alpha=0.7, label='クラス 1', c='red')
    plt.xlabel('特徴量 1')
    plt.ylabel('特徴量 2')
    plt.title('訓練データ分布')
    plt.legend()
    plt.grid(True, alpha=0.3)
    
    # 決定境界
    plt.subplot(1, 3, 2)
    h = 0.02
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
    xx, yy = np.meshgrid(np.arange(x_min, x_max, h),
                         np.arange(y_min, y_max, h))
    
    mesh_points = np.c_[xx.ravel(), yy.ravel()]
    Z = model.predict(mesh_points)
    Z = Z.reshape(xx.shape)
    
    plt.contourf(xx, yy, Z, levels=50, alpha=0.6, cmap=plt.cm.RdYlBu)
    plt.colorbar(label='予測確率')
    plt.scatter(X_test[y_test==0, 0], X_test[y_test==0, 1], 
               alpha=0.7, label='クラス 0', c='blue', edgecolors='black')
    plt.scatter(X_test[y_test==1, 0], X_test[y_test==1, 1], 
               alpha=0.7, label='クラス 1', c='red', edgecolors='black')
    plt.xlabel('特徴量 1')
    plt.ylabel('特徴量 2')
    plt.title('決定境界とテストデータ')
    plt.legend()
    
    # コスト関数の収束
    plt.subplot(1, 3, 3)
    plt.plot(model.cost_history)
    plt.xlabel('反復回数')
    plt.ylabel('ログ損失')
    plt.title('コスト関数の収束')
    plt.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('logistic_regression.png', dpi=150, bbox_inches='tight')
    plt.show()
    
    return model, (train_accuracy, test_accuracy)
```

### k-means クラスタリング
```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_blobs

class KMeansFromScratch:
    """k-meansクラスタリングの自作実装"""
    
    def __init__(self, k=3, max_iters=100, random_state=None):
        self.k = k
        self.max_iters = max_iters
        self.random_state = random_state
        
    def fit(self, X):
        """クラスタリングの実行"""
        if self.random_state:
            np.random.seed(self.random_state)
        
        # 初期化
        n_samples, n_features = X.shape
        
        # 重心の初期化（ランダムに選択）
        self.centroids = X[np.random.choice(n_samples, self.k, replace=False)]
        
        # 履歴保存用
        self.centroid_history = [self.centroids.copy()]
        self.inertia_history = []
        
        for i in range(self.max_iters):
            # 各点を最近い重心に割り当て
            distances = self._calculate_distances(X)
            self.labels = np.argmin(distances, axis=1)
            
            # イナーシャ（クラスタ内分散）計算
            inertia = self._calculate_inertia(X)
            self.inertia_history.append(inertia)
            
            # 重心の更新
            new_centroids = np.zeros((self.k, n_features))
            for j in range(self.k):
                if np.sum(self.labels == j) > 0:
                    new_centroids[j] = X[self.labels == j].mean(axis=0)
                else:
                    new_centroids[j] = self.centroids[j]
            
            # 収束判定
            if np.allclose(self.centroids, new_centroids):
                print(f"収束しました (反復回数: {i+1})")
                break
                
            self.centroids = new_centroids
            self.centroid_history.append(self.centroids.copy())
        
        return self
    
    def _calculate_distances(self, X):
        """各点と各重心との距離を計算"""
        distances = np.zeros((X.shape[0], self.k))
        for i, centroid in enumerate(self.centroids):
            distances[:, i] = np.sqrt(np.sum((X - centroid)**2, axis=1))
        return distances
    
    def _calculate_inertia(self, X):
        """イナーシャ（クラスタ内分散の合計）を計算"""
        inertia = 0
        for i in range(self.k):
            cluster_points = X[self.labels == i]
            if len(cluster_points) > 0:
                inertia += np.sum((cluster_points - self.centroids[i])**2)
        return inertia
    
    def predict(self, X):
        """新しいデータ点のクラスタを予測"""
        distances = self._calculate_distances(X)
        return np.argmin(distances, axis=1)

def kmeans_demo():
    """k-meansクラスタリングのデモンストレーション"""
    
    # データ生成
    X, y_true = make_blobs(n_samples=300, centers=4, cluster_std=0.60, 
                          random_state=42)
    
    # k-means実行
    kmeans = KMeansFromScratch(k=4, max_iters=100, random_state=42)
    kmeans.fit(X)
    
    print("=== k-meansクラスタリング結果 ===")
    print(f"最終イナーシャ: {kmeans.inertia_history[-1]:.2f}")
    print(f"反復回数: {len(kmeans.centroid_history)}")
    
    # 可視化
    fig, axes = plt.subplots(2, 2, figsize=(12, 10))
    fig.suptitle('k-meansクラスタリングの可視化', fontsize=16)
    
    # 元のデータ
    axes[0, 0].scatter(X[:, 0], X[:, 1], c=y_true, cmap='viridis', alpha=0.7)
    axes[0, 0].set_title('元のデータ（真のクラスタ）')
    axes[0, 0].set_xlabel('特徴量 1')
    axes[0, 0].set_ylabel('特徴量 2')
    
    # 最終クラスタリング結果
    axes[0, 1].scatter(X[:, 0], X[:, 1], c=kmeans.labels, cmap='viridis', alpha=0.7)
    axes[0, 1].scatter(kmeans.centroids[:, 0], kmeans.centroids[:, 1], 
                      c='red', marker='x', s=200, linewidths=3, label='重心')
    axes[0, 1].set_title('k-meansクラスタリング結果')
    axes[0, 1].set_xlabel('特徴量 1')
    axes[0, 1].set_ylabel('特徴量 2')
    axes[0, 1].legend()
    
    # 重心の変化
    axes[1, 0].scatter(X[:, 0], X[:, 1], c=kmeans.labels, cmap='viridis', alpha=0.3)
    colors = ['red', 'blue', 'green', 'orange']
    for i in range(kmeans.k):
        centroid_path = np.array([centroids[i] for centroids in kmeans.centroid_history])
        axes[1, 0].plot(centroid_path[:, 0], centroid_path[:, 1], 
                       color=colors[i], marker='o', markersize=4, 
                       label=f'重心 {i+1}')
    axes[1, 0].set_title('重心の移動軌跡')
    axes[1, 0].set_xlabel('特徴量 1')
    axes[1, 0].set_ylabel('特徴量 2')
    axes[1, 0].legend()
    
    # イナーシャの変化
    axes[1, 1].plot(range(1, len(kmeans.inertia_history) + 1), kmeans.inertia_history, 
                   marker='o')
    axes[1, 1].set_title('イナーシャの変化')
    axes[1, 1].set_xlabel('反復回数')
    axes[1, 1].set_ylabel('イナーシャ')
    axes[1, 1].grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('kmeans_clustering.png', dpi=150, bbox_inches='tight')
    plt.show()
    
    return kmeans, X, y_true

# エルボー法による最適なk値の決定
def elbow_method_demo():
    """エルボー法のデモンストレーション"""
    
    # データ生成
    X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=42)
    
    # 異なるk値でクラスタリング
    k_range = range(1, 11)
    inertias = []
    
    for k in k_range:
        kmeans = KMeansFromScratch(k=k, max_iters=100, random_state=42)
        kmeans.fit(X)
        inertias.append(kmeans.inertia_history[-1])
    
    # 可視化
    plt.figure(figsize=(10, 6))
    plt.plot(k_range, inertias, marker='o', linewidth=2, markersize=8)
    plt.xlabel('クラスタ数 (k)')
    plt.ylabel('イナーシャ')
    plt.title('エルボー法による最適なk値の決定')
    plt.grid(True, alpha=0.3)
    
    # エルボー点の強調
    plt.axvline(x=4, color='red', linestyle='--', alpha=0.7, label='推奨k=4')
    plt.legend()
    
    plt.savefig('elbow_method.png', dpi=150, bbox_inches='tight')
    plt.show()
    
    print("=== エルボー法結果 ===")
    for k, inertia in zip(k_range, inertias):
        print(f"k={k}: イナーシャ={inertia:.2f}")
    
    return k_range, inertias
```

---

## 🔬 深層学習の基礎

### ニューラルネットワークの実装
```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_classification, make_circles

class NeuralNetworkFromScratch:
    """ニューラルネットワークの自作実装"""
    
    def __init__(self, layers, learning_rate=0.01, epochs=1000):
        self.layers = layers  # [入力層, 隠れ層, 出力層]のノード数
        self.learning_rate = learning_rate
        self.epochs = epochs
        
        # 重みとバイアスの初期化
        self.weights = []
        self.biases = []
        
        for i in range(len(layers) - 1):
            # Xavier初期化
            w = np.random.randn(layers[i], layers[i+1]) * np.sqrt(2.0 / layers[i])
            b = np.zeros((1, layers[i+1]))
            self.weights.append(w)
            self.biases.append(b)
        
        self.loss_history = []
    
    def _sigmoid(self, z):
        """シグモイド活性化関数"""
        z = np.clip(z, -500, 500)  # オーバーフロー対策
        return 1 / (1 + np.exp(-z))
    
    def _sigmoid_derivative(self, z):
        """シグモイド関数の微分"""
        return z * (1 - z)
    
    def _relu(self, z):
        """ReLU活性化関数"""
        return np.maximum(0, z)
    
    def _relu_derivative(self, z):
        """ReLU関数の微分"""
        return (z > 0).astype(float)
    
    def _forward_propagation(self, X):
        """順伝播"""
        self.activations = [X]
        self.z_values = []
        
        for i in range(len(self.weights)):
            z = np.dot(self.activations[i], self.weights[i]) + self.biases[i]
            self.z_values.append(z)
            
            if i < len(self.weights) - 1:  # 隠れ層
                a = self._relu(z)
            else:  # 出力層
                a = self._sigmoid(z)
            
            self.activations.append(a)
        
        return self.activations[-1]
    
    def _backward_propagation(self, X, y):
        """逆伝播"""
        m = X.shape[0]
        
        # 出力層のエラー
        delta = self.activations[-1] - y
        
        # 重みとバイアスの勾配を保存
        dw = []
        db = []
        
        # 逆向きに計算
        for i in range(len(self.weights) - 1, -1, -1):
            # 勾配計算
            dw_i = (1/m) * np.dot(self.activations[i].T, delta)
            db_i = (1/m) * np.sum(delta, axis=0, keepdims=True)
            
            dw.insert(0, dw_i)
            db.insert(0, db_i)
            
            # 前の層のエラー計算
            if i > 0:
                delta = np.dot(delta, self.weights[i].T) * self._relu_derivative(self.activations[i])
        
        return dw, db
    
    def _compute_loss(self, y_true, y_pred):
        """損失関数（バイナリクロスエントロピー）"""
        y_pred = np.clip(y_pred, 1e-15, 1 - 1e-15)
        return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))
    
    def fit(self, X, y):
        """モデルの訓練"""
        for epoch in range(self.epochs):
            # 順伝播
            predictions = self._forward_propagation(X)
            
            # 損失計算
            loss = self._compute_loss(y, predictions)
            self.loss_history.append(loss)
            
            # 逆伝播
            dw, db = self._backward_propagation(X, y)
            
            # パラメータ更新
            for i in range(len(self.weights)):
                self.weights[i] -= self.learning_rate * dw[i]
                self.biases[i] -= self.learning_rate * db[i]
            
            if epoch % 100 == 0:
                print(f"Epoch {epoch}, Loss: {loss:.4f}")
    
    def predict(self, X):
        """予測"""
        predictions = self._forward_propagation(X)
        return (predictions > 0.5).astype(int)
    
    def predict_proba(self, X):
        """確率予測"""
        return self._forward_propagation(X)

def neural_network_demo():
    """ニューラルネットワークのデモンストレーション"""
    
    # 非線形データの生成（同心円）
    X, y = make_circles(n_samples=1000, noise=0.1, factor=0.3, random_state=42)
    y = y.reshape(-1, 1)
    
    # モデルの作成と訓練
    # アーキテクチャ: 2入力 -> 10隠れ -> 5隠れ -> 1出力
    model = NeuralNetworkFromScratch(layers=[2, 10, 5, 1], 
                                   learning_rate=0.1, epochs=2000)
    model.fit(X, y)
    
    # 予測
    predictions = model.predict(X)
    probabilities = model.predict_proba(X)
    
    # 精度計算
    accuracy = np.mean(predictions == y)
    print(f"\n最終精度: {accuracy:.3f}")
    
    # 可視化
    plt.figure(figsize=(15, 5))
    
    # 元のデータ
    plt.subplot(1, 3, 1)
    plt.scatter(X[y.ravel()==0, 0], X[y.ravel()==0, 1], 
               alpha=0.7, label='クラス 0', c='blue')
    plt.scatter(X[y.ravel()==1, 0], X[y.ravel()==1, 1], 
               alpha=0.7, label='クラス 1', c='red')
    plt.xlabel('特徴量 1')
    plt.ylabel('特徴量 2')
    plt.title('元のデータ（非線形問題）')
    plt.legend()
    plt.grid(True, alpha=0.3)
    
    # 決定境界
    plt.subplot(1, 3, 2)
    h = 0.02
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
    xx, yy = np.meshgrid(np.arange(x_min, x_max, h),
                         np.arange(y_min, y_max, h))
    
    mesh_points = np.c_[xx.ravel(), yy.ravel()]
    Z = model.predict_proba(mesh_points)
    Z = Z.reshape(xx.shape)
    
    plt.contourf(xx, yy, Z, levels=50, alpha=0.6, cmap=plt.cm.RdYlBu)
    plt.colorbar(label='予測確率')
    plt.scatter(X[y.ravel()==0, 0], X[y.ravel()==0, 1], 
               alpha=0.7, c='blue', edgecolors='black')
    plt.scatter(X[y.ravel()==1, 0], X[y.ravel()==1, 1], 
               alpha=0.7, c='red', edgecolors='black')
    plt.xlabel('特徴量 1')
    plt.ylabel('特徴量 2')
    plt.title(f'ニューラルネットワーク決定境界 (精度: {accuracy:.3f})')
    
    # 損失の変化
    plt.subplot(1, 3, 3)
    plt.plot(model.loss_history)
    plt.xlabel('エポック')
    plt.ylabel('損失')
    plt.title('訓練損失の変化')
    plt.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('neural_network.png', dpi=150, bbox_inches='tight')
    plt.show()
    
    return model, accuracy

# 活性化関数の比較
def activation_functions_demo():
    """活性化関数の可視化と比較"""
    
    x = np.linspace(-5, 5, 100)
    
    # 各種活性化関数
    sigmoid = 1 / (1 + np.exp(-x))
    tanh = np.tanh(x)
    relu = np.maximum(0, x)
    leaky_relu = np.where(x > 0, x, 0.01 * x)
    
    plt.figure(figsize=(12, 8))
    
    # 活性化関数
    plt.subplot(2, 2, 1)
    plt.plot(x, sigmoid, label='Sigmoid', linewidth=2)
    plt.plot(x, tanh, label='Tanh', linewidth=2)
    plt.plot(x, relu, label='ReLU', linewidth=2)
    plt.plot(x, leaky_relu, label='Leaky ReLU', linewidth=2)
    plt.xlabel('入力')
    plt.ylabel('出力')
    plt.title('活性化関数の比較')
    plt.legend()
    plt.grid(True, alpha=0.3)
    
    # 微分（勾配）
    plt.subplot(2, 2, 2)
    sigmoid_grad = sigmoid * (1 - sigmoid)
    tanh_grad = 1 - tanh**2
    relu_grad = (x > 0).astype(float)
    leaky_relu_grad = np.where(x > 0, 1, 0.01)
    
    plt.plot(x, sigmoid_grad, label='Sigmoid', linewidth=2)
    plt.plot(x, tanh_grad, label='Tanh', linewidth=2)
    plt.plot(x, relu_grad, label='ReLU', linewidth=2)
    plt.plot(x, leaky_relu_grad, label='Leaky ReLU', linewidth=2)
    plt.xlabel('入力')
    plt.ylabel('勾配')
    plt.title('活性化関数の微分')
    plt.legend()
    plt.grid(True, alpha=0.3)
    
    # 特徴比較表
    plt.subplot(2, 1, 2)
    plt.axis('off')
    
    comparison_text = """
    活性化関数の特徴比較:
    
    Sigmoid:
    • 出力範囲: (0, 1)
    • 確率的解釈が可能
    • 勾配消失問題あり
    • 計算コスト高
    
    Tanh:
    • 出力範囲: (-1, 1)
    • ゼロ中心
    • 勾配消失問題あり
    • Sigmoidより高速
    
    ReLU:
    • 出力範囲: [0, ∞)
    • 計算が簡単
    • 勾配消失問題を軽減
    • 死んだニューロン問題
    
    Leaky ReLU:
    • 出力範囲: (-∞, ∞)
    • 死んだニューロン問題を軽減
    • 負の値でも学習可能
    • ReLUの改良版
    """
    
    plt.text(0.1, 0.9, comparison_text, transform=plt.gca().transAxes, 
             fontsize=11, verticalalignment='top', fontfamily='monospace')
    
    plt.tight_layout()
    plt.savefig('activation_functions.png', dpi=150, bbox_inches='tight')
    plt.show()
```

---

## 🎁 特典コンテンツ

### バイブコーディング限定リソース
1. **理論実装演習プロジェクト**
   - アルゴリズム自作課題集
   - 数学理論の実装練習
   - 段階的難易度設定

2. **インタラクティブ学習ツール**
   - 数式の視覚化ツール
   - パラメータ調整シミュレーター
   - リアルタイム理解度チェック

3. **応用研究プロジェクト**
   - 最新論文の実装
   - 独自アルゴリズム開発
   - 学会発表レベルの研究

4. **メンタリング・サポート**
   - 理論質問専用チャンネル
   - 大学院レベルの議論会
   - 研究者とのネットワーキング

---

## 🚀 学習ロードマップ

### Phase 1: 数学基盤 (2-3ヶ月)
```yaml
Month 1: 線形代数
  Week 1-2: ベクトル・行列演算
  Week 3-4: 固有値・固有ベクトル・線形変換

Month 2: 微積分・最適化
  Week 1-2: 微分・偏微分
  Week 3-4: 勾配降下法・最適化手法

Month 3: 確率・統計
  Week 1-2: 確率分布・ベイズ統計
  Week 3-4: 仮説検定・推定理論
```

### Phase 2: 機械学習理論 (3-4ヶ月)
```yaml
Month 4-5: 基本アルゴリズム
  - 線形回帰・ロジスティック回帰
  - 決定木・ランダムフォレスト
  - SVM・k-means

Month 6-7: 高度なアルゴリズム
  - アンサンブル学習
  - 次元削減手法
  - 時系列分析
```

### Phase 3: 深層学習理論 (2-3ヶ月)
```yaml
Month 8-9: ニューラルネットワーク
  - パーセプトロン・多層ニューラルネットワーク
  - 逆伝播・活性化関数
  - 正則化・ドロップアウト

Month 10: 発展的アーキテクチャ
  - CNN・RNN・LSTM
  - 注意機構・Transformer
  - GAN・VAE
```

---

**🧠 AI/ML理論をマスターして、真の理解に基づく開発者になろう！**

*バイブコーディング 専門講座・教材特典*
*AI/ML Theory & Algorithms Mastery v1.0*