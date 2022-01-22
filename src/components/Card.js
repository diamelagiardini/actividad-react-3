import "../styles/Card.scss";
const Card = ({ title, type, price, img, isAvailable, onSale }) => {
  return (
    <div>
      {isAvailable === false && (<span className="flex centrado posicion-relativa">SIN STOCK</span>)}
      <article
      className='flex column centrado card'
    > 

      <div className="contenedor-imagen">
        <img className={`imagen ${
        isAvailable === false && "opacidad"
      }`} src={img} alt=""></img>
        <div className="flex">
          <div className="contenedor-nombre-tipo flex column derecha">
            <h3 className="nombre-producto">{title}</h3>
            {onSale === true && <span className="verde">ON SALE!</span>}
            <p className="categoria">{type}</p>
          </div>

          <div className="contenedor-precio-icono flex column izquierda">
            <p className="precio">${price}</p>
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    </article>
    </div>
    
  );
};

export default Card;
