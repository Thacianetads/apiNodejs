import express from "express";

const app = express();
const PORT = 3000;
const arrResponse = [
    { name: "Thaciane", company: "Testando API" },
    { name: "Thaciane", company: "Meu objetivo é conseguir estágio em desenvolvimento de sistemas"},
];

app.get("/", (req, res) =>{
    res.json(arrResponse);
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));