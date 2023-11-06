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

  // TODO: Verificar o css que está dando conflito entre as páginas e mudando a cor do container

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
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            value={nome}
            required=""
            onChange={(e) => setNome(e.target.value)}
          />
          <label>Nome </label>
        </div>
        <div className="user-box">
          <input
            type="password"
            value={senha}
            required=""
            onChange={(e) => setSenha(e.target.value)}
          />
          <label>Senha </label>
        </div>
        <button type="button" onClick={entrar}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
