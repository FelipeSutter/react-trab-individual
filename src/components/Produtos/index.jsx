import "./style.css";

function Produtos({ item }) {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <img
        src={item.url}
        width={item.width}
        height={item.height}
        className="my-img"
      />
    </div>
  );
}

export default Produtos;
