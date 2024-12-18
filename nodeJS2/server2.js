const express = require("express"); 
const app = express();

app.get("/", (req, res) => {
    res.status(200);
    res.send("my home page");
    console.log("첫페이지 get요청 들어왔음.");
});

app.post("/go", (req, res) => {
    res.status(400);
    res.send("NO Accept");
    console.log("인증받지 못해 post요청 응답할 수 없음.");
});

app.get("/info/:food", (req, res) => {
    const food = req.params.food;
    const message = `my food is ${food}`;
    res.status(200).send(message);
    console.log(message);
});

app.get("/sum/:number", (req, res) => {
    const number = parseInt(req.params.number);
    const result = number + 100;
    res.status(200);
    res.send(`Result: ${result}`);
    console.log(`number값(${number})에 100을 더한 결과: ${result}`);
});

app.listen(2000, () => {
    console.log("==== my server port : 2000 ===");
});