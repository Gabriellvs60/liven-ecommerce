import { FC } from 'react'
import { CartProvider, useCartInfo } from './cart'


const StoreProvider: FC = ({ children }) => (
  <CartProvider>{children}</CartProvider>
)

export { useCartInfo }

export default StoreProvider
