import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Produtos from "../../components/Produtos";
import "./style.css";

const url = "https://6542c2c401b5e279de1f8b8f.mockapi.io/produtos";

function Home() {
  const nome = JSON.parse(localStorage.getItem("infos")).nome;
  const navigate = useNavigate();
  const [novoProduto, setNovoProduto] = useState();
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  const getProdutos = async () => {
    try {
      const { data } = await axios.get(url);
      setProdutos(data);
      setProdutosFiltrados(data);
    } catch (e) {
      console.log(e);
    }
  };

  // TODO: Fazer aba de pesquisa para mostrar o produto pesquisado.

  // const pesquisarProduto = () => {

  // };

  useEffect(() => {
    getProdutos();
  }, []);

  const limpar = () => {
    localStorage.clear();

    navigate(`/`);
  };

  const pesquisarProduto = (text) => {
    setNovoProduto(text);
    const arrayFiltrado = produtos.filter((item) =>
      item.toLowerCase().include(text.toLowerCase())
    );
    setProdutosFiltrados(arrayFiltrado);
  };

  return (
    <div className="my-container">
      <h1>Seja bem-vindo(a), {nome}</h1>
      <button onClick={limpar}>Logout</button>
      <input
        type="text"
        placeholder="Pesquisar"
        value={novoProduto}
        onChange={(e) => pesquisarProduto(e.target.value)}
        className="input-icon"
      />
      {produtosFiltrados.map((item) => (
        <Produtos key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Home;
