import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductsContext } from "../context/ProductsContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPage = () => {

  const { products } = useContext(ProductsContext)

  const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  return (
    <>
      <h1>Compras</h1>
      <hr />
      {products.map(product => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          cantidad={product.cantidad}
          agregarCompra={() => agregarCompra(product)}
          aumentarCantidad={() => aumentarCantidad(product.id)}
          disminuirCantidad={() => disminuirCantidad(product.id)}
          eliminarCompra={() => eliminarCompra(product.id)}
          isAdded={listaCompras.some(item => item.id === product.id)}
        />
      ))}
    </>
  )
}
