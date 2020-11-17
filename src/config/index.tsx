export const config = {
  server: {
    protocol: 'http',
    host: 'zar.hosthot.ru',
  },
  client: {
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
    },
  },
};

export default config;
