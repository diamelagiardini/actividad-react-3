import { useState } from "react";
import "../styles/Card.scss";

const Card = ({ title, type, price, img, isAvailable, onSale }) => {
  const [HandleMouseEnter, setHandleMouseEnter] = useState(false);
  const [modalCarrito, setModalCarrito] = useState(false);
  const mouseEnterCard = () => {
    setHandleMouseEnter(true);
  };

  const mouseLeaveCard = () => {
    setHandleMouseEnter(false);
  };

  const mostrarModalCarrito = () => {
    setModalCarrito(true);
  };

  const cerrarModalCarrito = () => {
    setModalCarrito(false)
  }

  return (
    <div>
      {isAvailable === false && (
        <span className="flex centrado posicion-relativa">SIN STOCK</span>
      )}
      <article
        className={`flex column centrado card ${
          HandleMouseEnter && "estilo-mouse-tarjeta"
        }`}
        onMouseEnter={mouseEnterCard}
        onMouseLeave={mouseLeaveCard}
      >
        <div className="contenedor-imagen">
          <img
            className={`imagen ${isAvailable === false && "opacidad"}`}
            src={img}
            alt=""
          ></img>
          <div className="flex">
            <div className="contenedor-nombre-tipo flex column derecha">
              <h3 className="nombre-producto">{title}</h3>
              {onSale === true && <span className="verde">ON SALE!</span>}
              <p className="categoria">{type}</p>
            </div>

            <div className="contenedor-precio-icono flex column izquierda">
              <p className="precio">${price}</p>
              <i class="fas fa-shopping-cart" onClick={mostrarModalCarrito}></i>
            </div>
          </div>
        </div>
      </article>

      {modalCarrito && (
        <article className="modal">
          <button onClick={cerrarModalCarrito}>Cancelar</button>
          <h2>COMPRAR</h2>
          <button>Aceptar</button>
        </article>
      )}
    </div>
  );
};

export default Card;
