import { createContext, useContext, useReducer } from 'react'

import reduce, { StateProps, Action } from './reducer'

export type Dispatch = (action: Action) => void
type ProviderProps = { children: React.ReactNode }

export const StateContext = createContext<
  { state: StateProps; dispatch: Dispatch } | undefined
>(undefined)

const CartProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reduce, {
    cart: [],
  })

  const value = { state, dispatch }
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

const useCartInfo = () => {
  const context = useContext(StateContext)
  if (context === undefined) {
    throw new Error('Ocorreu um erro inesperado.')
  }
  return context
}

export { CartProvider, useCartInfo }
