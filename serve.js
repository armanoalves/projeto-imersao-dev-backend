import express from 'express';

const posts = [
    {   
        id: 1,
        descricao: "Um gato fofo dormindo",
        imagem: "https://placekitten.com/400/200"
    },
    {   
        id: 2,
        descricao: "Uma paisagem montanhosa",
        imagem: "https://placekitten.com/400/200"
    },
    {   
        id: 3,
        descricao: "Um cachorro brincando com uma bola",
        imagem: "https://placekitten.com/400/200"
    },
    {   
        id: 4,
        descricao: "Uma cidade à noite",
        imagem: "https://placekitten.com/400/200"
    },
    {   
        id: 5,
        descricao: "Uma comida deliciosa",
        imagem: "https://placekitten.com/400/200"
    },
    {
        id: 6,
        descricao: "Uma comida meio ruim",
        imagem: "https://placekitten.com/400/200"
    }
];

const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("Servidor escutando...")
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/post/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id == Number(id);
    });
}