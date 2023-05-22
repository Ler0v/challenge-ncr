const cuentasReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CUENTAS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default cuentasReducer;