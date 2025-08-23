# JavaScript 学習教材 by Gemini CLI

このリポジトリは、JavaScriptの基本的な構文を学ぶための学習教材です。
Dockerコンテナ内でVitestフレームワークを使用して、問題の答え合わせを行うことができます。

## 🚀 使い方

### 必要なもの

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/) (Docker Desktop には同梱されています)

### 学習の進め方

1.  **Dockerコンテナを起動する (初回のみ)**

    まず、プロジェクトのルートディレクトリで以下のコマンドを実行し、学習環境となるDockerコンテナをバックグラウンドで起動します。

    ```bash
    docker-compose up -d --build
    ```

2.  **問題ファイルを開いてコードを書く**

    ホストマシン（あなたのPC）のエディタで `Lesson_X-X.js` ファイルを開き、コメントの指示に従ってJavaScriptのコードを記述してください。

    ファイルへの変更は、自動的にコンテナ内に同期されるため、イメージを再ビルドする必要はありません。

3.  **テストを実行して答え合わせをする**

    コードが書けたら、まず以下のコマンドで実行中のコンテナ内に入ります。

    ```bash
    docker-compose exec app sh
    ```

    コンテナのシェルが起動したら、学習したいレッスンに対応するテストコマンドを実行します。

    ```bash
    # Lesson 1-1 のテストを実行
    npm run test:1-1

    # Lesson 1-2 のテストを実行
    npm run test:1-2
    ```

    ターミナルにテスト結果が出力されます。すべてのテストが `PASS` になれば正解です。

    テストが終わったら `exit` と入力するか、`Ctrl + D` を押してコンテナから出ます。

4.  **学習を終了する**

    学習を完全に終了する場合は、以下のコマンドでコンテナを停止・削除します。

    ```bash
    docker-compose down
    ```

## 📚 レッスン一覧

- **Lesson 1-1:** 変数宣言と基本的な算術演算子
- **Lesson 1-2:** 文字列の操作
- ... (今後のレッスン)
