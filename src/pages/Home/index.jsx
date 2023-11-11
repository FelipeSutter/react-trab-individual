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

  const pesquisarProduto = (e) => {
    const text = e.target.value;
    setNovoProduto(text);
    const arrayFiltrado = produtos.filter((item) =>
      item.title.toLowerCase().startsWith(text)
    );
    setProdutosFiltrados(arrayFiltrado);
  };

  const comprarProduto = (item) => {
    alert(`Parabéns, você comprou o produto ${item.title}!`);
    excluir(item.id);
  };

  const excluir = (id) => {
    const array = produtos.filter((item) => item.id != id);
    setProdutos(array);
  };

  return (
    <div className="my-container">
      <h1>Seja bem-vindo(a), {nome}</h1>
      <button onClick={limpar}>Logout</button>
      <input
        type="text"
        placeholder="Pesquisar"
        value={novoProduto}
        onChange={(e) => pesquisarProduto(e)}
        className="input-icon"
      />
      {produtosFiltrados.map((item) => (
        <Produtos key={item.id} item={item} fn={() => comprarProduto(item)} />
      ))}
      <img
        src="https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7740c50c88d17b12c3eccbf1c57af9163929add6c63bba7fbad663f574bc6307.png"
        alt="Imagem de uma carta chamada LEEEEEERROYYYY JENNNKINNSSSS"
      ></img>
    </div>
  );
}

export default Home;
