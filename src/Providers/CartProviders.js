import { createContext, useContext, useEffect, useReducer, useState } from 'react'

const Cartcontext = createContext()
const CartcontextDispatcher = createContext()

const initialState = {
  cart: [],
  total: 0,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedcart = [...state.cart]
      const index = updatedcart.findIndex(
        (item) => item._id === action.payload._id,
      )
      if (index < 0) {
        updatedcart.push({ ...action.payload, quantity: 1 })
      } else {
        const updatedItem = { ...updatedcart[index] }
        updatedItem.quantity++
        updatedcart[index] = updatedItem
      }
      return { ...state, cart: updatedcart ,total:state.total + action.payload.offPrice}

    case 'REMOVE_PRODUCT': {
      const updatedcart = [...state.cart]
      const index = updatedcart.findIndex(
        (item) => item._id === action.payload._id,
      )
      const updatedItem = {...updatedcart[index]}
      if(updatedItem.quantity ===1){
        const filterd=updatedcart.filter((item)=> item._id !== action.payload._id)
return {...state, cart:filterd ,total:state.total - action.payload.offPrice}
      }else{
        updatedItem.quantity--
        updatedcart[index]=updatedItem
        return {...state , cart:updatedcart , total:state.total - action.payload.offPrice}
      }
    }
    default:
      return state
  }
}

const CartProviders = ({ children }) => {
 
  const [cart, dispatch] = useReducer(reducer, initialState)
  // console.log(cart)
useEffect(()=>{
  const data =JSON.parse(localStorage.getItem("PRODUCTS")) || false

},[])

  return (
    <Cartcontext.Provider value={cart}>
      <CartcontextDispatcher.Provider value={dispatch}>
        {children}
      </CartcontextDispatcher.Provider>
    </Cartcontext.Provider>
  )
}

export default CartProviders

export const useCart = () => useContext(Cartcontext)
export const useCartActions = () => useContext(CartcontextDispatcher)
