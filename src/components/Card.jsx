import '../styles/card.css'

export const Card = ({ image, title, description, price, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra, isAdded }) => {

  return (
    <div className="tarjeta">
      <img src={image} alt={title} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{title}</h3>
        <p className="tarjeta-descripcion">{description}</p>
        <p className="tarjeta-precio">${price}</p>
        {isAdded ? (
          <button type="button" className="boton-quitar" onClick={eliminarCompra}>
            Quitar del carrito
          </button>
        ) : (
          <button type="button" className="boton-agregar" onClick={agregarCompra}>
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  )
}
