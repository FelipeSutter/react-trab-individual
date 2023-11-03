import "./style.css";

function Contato() {
  return (
    <div className="my-container-contact">
      <h1>Felipe Sutter</h1>
      <br />
      <hr />
      <h2>Link para Contatos</h2>
      <a
        href="https://www.instagram.com/felipe_sutter1/?igshid=YTQwZjQ0NmI0OA%3D%3D"
        target="_blank"
      >
        <button className="instagram-btn btn"></button>
      </a>
      <a href="https://github.com/FelipeSutter" target="_blank">
        <button className="github-btn btn"></button>
      </a>
      <a
        href="https://www.linkedin.com/in/felipe-sutter-526115251/"
        target="_blank"
      >
        <button className="linkedin-btn btn"></button>
      </a>
    </div>
  );
}

export default Contato;
