import  {createStore}  from 'redux';
import cuentasReducer from './reducers';

const store = createStore(cuentasReducer);

export default store;
