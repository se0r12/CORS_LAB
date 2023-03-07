# CORS LAB

## lab1

origin情報を元に、`Access-Control-Allow-Origin`を生成。
`Access-Control-Allow-credential`は`true`

### シナリオ

被害者userしか見ることができないサイト内の情報(`http://localhost:3000/lab1/secret`)があり、攻撃者はその中の情報を奪えるか。

`http://localhost:3000`は、`Access-Control-Allow-Origin`を、`request header`の`Origin`から生成をしていて、`Access-Controll-Allow-Credentials`が`true`になってしまっている。

`credentials: username: user, password: user`
