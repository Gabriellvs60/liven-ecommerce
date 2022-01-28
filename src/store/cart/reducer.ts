export type StateProps = {
    cart: any[]
  }
  
  export type Action =
    | { type: 'SET_CART'; payload: StateProps }
    | { type: 'default' }
  
  const reduce = (state: StateProps, action: Action) => {
    switch (action.type) {
      case 'SET_CART': {
        return { ...action.payload }
      }
      default: {
        return { ...state }
      }
    }
  }
  
  export default reduce
  