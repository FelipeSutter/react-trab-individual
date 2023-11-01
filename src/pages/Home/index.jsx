import React from "react";

function Home() {
  const nome = JSON.parse(localStorage.getItem("infos")).nome;

  return (
    <div>
      <h1>Esta é a página de Home</h1>
      <h2>Seja bem-vindo(a), {nome}</h2>
    </div>
  );
}

export default Home;
