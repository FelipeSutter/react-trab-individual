import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const entrar = () => {
    if (nome == "" || senha == "") {
      alert("Há campos vazios.");
    } else {
      const infos = {
        nome: nome,
        senha: senha,
      };
      localStorage.setItem("infos", JSON.stringify(infos));
      navigate(`home`);
    }
  };

  return (
    <div className="my-container">
      <h1>Login</h1>
      <Form className="container p-5 my-10 border">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={entrar}>
          Entrar
        </Button>
      </Form>
    </div>
  );
}

export default Login;
