import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const CarritoPage = () => {

  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
{listaCompras.map((item) => (
            <tr key={item.id}>
            <th>{item.title}</th>
            <td><button
            type='button'
            className='btn btn-outline-primary'
            onClick={()=> disminuirCantidad(item.id)}
            >-</button><button
            type='button'
            className='btn btn-primary'
            >{item.price}</button><button
            type='button'
            className='btn btn-outline-primary'
            onClick={()=> aumentarCantidad(item.id)}
            >+</button></td>
            <td>{item.cantidad}</td>
            <td><button
            type='button'
            className='btn btn-danger'
            onClick={()=>eliminarCompra(item.id)}
            >Eliminar</button></td>
          </tr>
))}
        <tr>
          <th><b>TOTAL:</b></th>
          <td></td>
          <td></td>
          <td>{listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)}</td>
        </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
        className="btn btn-primary"
        onClick={() => print()}
        disabled={listaCompras < 1}
        >COMPRAR</button>
      </div>
    </>
  )
}
