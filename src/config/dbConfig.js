import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    let mongoCLient;

    try {
        mongoCLient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoCLient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoCLient;
    } catch (erro) {
        console.error('Falha na conexäo com o banco!', erro);
        process.exit();
    }
}