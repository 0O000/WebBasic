const express = require("express");

const app = express(); //express할 수 있는 객체 리턴

app.get("/", (req, res) => {
    console.log("/ 주소로 GET요청 들어옴.");
    res.status(200); //http header
    res.sendFile(__dirname + "/index.html");

});
app.get("/home", (req, res) => {
    console.log("/home 주소로 GET요청 들어옴.");
    res.status(200); //http header
    res.sendFile(__dirname + "/home.html")
});

app.get("/weather", (req, res) => {
    console.log("/weather 주소로 GET요청 들어옴.");
    res.status(200);
    let data = {
        temp: -1,
        high: 5,
        low: -7,
        vi: 100
    }
    res.json(data);
})

app.get("/contact", (req, res) => {
    console.log("/finance 주소로 GET요청 들어옴.");
    res.status(200);
    res.sendFile(__dirname + "/contact.html")
})

app.listen(3000, () => {
    console.log("-------------------------");
    console.log("3000번 포트 서버 시작됨.");
    console.log("-------------------------");
});