import axios from 'axios';

const Index = ({dados}) => (
    <div>
        <h1>Artigos</h1>
        {console.log(dados)}

        <ul>
            {dados.map(artigo => (
                <li key={artigo._id}>
                    <h2>{artigo.titulo}</h2>
                    <p>{artigo.conteudo}</p>
                </li>
            ))}
        </ul>
    </div>
);

Index.getInitialProps = async () =>{
    const response = await axios.get(
        'http://localhost:8080/artigo'
    );

    return { dados:  response.data}
};

export default Index;