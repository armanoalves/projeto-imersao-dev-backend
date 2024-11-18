import { getTodosPosts } from "../models/postsModel";


export async function listarPosts(req, res) {
    // Chama a funcao para buscar os posts
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts
    res.status(200).json(posts);
}