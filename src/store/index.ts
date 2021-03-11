import { combineReducers } from 'redux';
import app from './app';
import pokemons, { IpokemonsInitialState } from './pokemons';

export interface initialState {
  pokemons: IpokemonsInitialState;
}

const createRootReducer = () =>
  combineReducers({
    app,
    pokemons,
  });

export default createRootReducer;
