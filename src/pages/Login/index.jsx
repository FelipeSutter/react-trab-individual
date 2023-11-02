import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const informacoes = {
    login: "Felipe",
    senha: "1234",
  };

  const navigate = useNavigate();

  const entrar = () => {
    if (nome == "" || senha == "") {
      alert("Há campos vazios.");
    } else if (nome == informacoes.login && senha == informacoes.senha) {
      const infos = {
        nome: nome,
        senha: senha,
      };
      localStorage.setItem("infos", JSON.stringify(infos));
      navigate(`home`);
    } else {
      alert("Usuário ou senha inválidos.");
    }
  };

  return (
    <div className="my-container">
      <h1>Login</h1>
      <form className="my-form">
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <label htmlFor="senha">Senha: </label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <div className="div-button">
          <button type="button" onClick={entrar}>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
