const express = require("express");

const app = express()

const port = 3000;

// ルーティングの設定
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
    // 指定したファイルを返却する『　res.sendFile　』

    console.log("/ へアクセスしました")
})

app.get("/image/:file", (req,res) => {
    const file = req.params.file;

    res.sendFile(`${__dirname}/public/image/${file}`);
    console.log(`/public/image/${file} へアクセスしました`);
})

// HTTPサーバーを起動する
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})