import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('must get 2 params getPokemons and {id} and return {pathname: , protocol: , host: , query: {  } }', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
