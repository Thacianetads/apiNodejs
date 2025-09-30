import express from "express";

const app = express();
const PORT = 3000;
const arrResponse = [
    { name: "Thaciane", company: "Estágio Full Stack" },
    { name: "Thaciane", company: "Estágio em desenvolvimento de sistemas"},
];

app.get("/", (req, res) =>{
    res.json(arrResponse);
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
