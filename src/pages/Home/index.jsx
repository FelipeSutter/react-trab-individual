import { useNavigate } from "react-router-dom";

function Home() {
  const nome = JSON.parse(localStorage.getItem("infos")).nome;
  const navigate = useNavigate();

  const limpar = () => {
    localStorage.clear();

    navigate(`/`);
  };

  return (
    <div className="my-container">
      <h1>Seja bem-vindo(a), {nome}</h1>
      <button onClick={limpar}>Logout</button>
    </div>
  );
}

export default Home;
