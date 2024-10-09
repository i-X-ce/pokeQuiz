#備忘録

##MongoDBAtlas
-使い方
1.普通にログインして、クラスターを作る
1.ConnectでVSCodeを選ぶと名前とパスワードを入れるところがあるから入れる
1.コピーしてMongoDBの拡張機能のやつにURLを入れる
1.接続が完了すると左の葉っぱのアイコンから使えるようになるよ

-スキーマのつくり方
1.[スキーマを定義したjsかts](/src/models/question.ts)を作っておく
1.[データを保存するjsかts](/src/models/makeModels.ts)を作って実行する
    ```
    tsc
    node dist/models/???.js
    ```
    みたいな感じのコマンド