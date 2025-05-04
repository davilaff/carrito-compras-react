import { useReducer } from 'react'
import { CarritoContext } from './CarritoContext'

export const CarritoProvider = ({ children }) => {

    const initialState = []

    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar Compra':
                return [...state, { ...action.payload, cantidad: 1 }]
            case '[CARRITO] Aumentar Cantidad Compra': // pendiente
                return state.map(item => item.id === action.payload ? { ...item, cantidad: item.cantidad + 1 } : item)
            case '[CARRITO] Disminuir Cantidad Compra': // pendiente
                return state.map(item => item.id === action.payload && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item)
            case '[CARRITO] Eliminar Compra':
                return state.filter(compra => compra.id !== action.payload)
            default:
                return state
            }
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compra
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad Compra',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad Compra',
            payload: id
        }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        }
        dispatch(action)
    }

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}