# 備忘録

## TypeScriptとNode.js
### インストール
調べたらなんやかんやでてくるから何とかなるよ。AIに聞いてくれ。

### コンパイルと実行
tsはjsにコンパイルしないといけないのでコンパイルしてから使おう。
```
tsc // すべてのtsファイルをコンパイル。
```
これで全部のtsファイルがコンパイルできるはず。それか自動でやってくれるこっち。
```
tsc --watch　// 自動でコンパイルしてくれる。
```

tconfig.jsonの変更をしておくといろいろと便利かも。
`outDir": "./dist"`これをしとくとdistフォルダにコンパイルされたjsファイルが全部入るのでめちゃくちゃにならなくていいよ。

## MongoDBAtlas
### 使い方
1. 普通にログインして、クラスターを作る
1. ConnectでVSCodeを選ぶと名前とパスワードを入れるところがあるから入れる
1. コピーしてMongoDBの拡張機能のやつにURLを入れる
1. 接続が完了すると左の葉っぱのアイコンから使えるようになるよ

### スキーマのつくり方
どうもデータベースを使うには一度node.jsを実行してスキーマを追加しないといけないらしい。
1. [スキーマを定義したjsかts](/src/models/question.ts)を作っておく
1. [データを保存するjsかts](/src/models/makeModels.ts)を作って実行する
    ```
    tsc
    node dist/models/???.js
    ```
    みたいな感じのコマンド
スキーマはモデル名とスキーマを定義しておくよ。第一引数がモデル名で、新しくスキーマを追加したいときはここの名前を変えて使ってね。
`const Question = mongoose.model('Question', quizSchema)`
あと.envファイルにURLを定義して使っているよ。
`mongoose.connect(process.env.MONGO_QUESTIONS_URL as string)`

