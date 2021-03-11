interface configI {
  client: {
    server: {
      protocol: string;
      host: string;
    };
    endpoint: {
      [n: string]: {
        method: string;
        uri: {
          pathname: string;
        };
      };
    };
  };
}

export const config: configI = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      getPokemonsTypes: {
        method: 'GET',
        uri: {
          pathname: `/api/v1/types`,
        },
      },
      getPokemon: {
        method: 'GET',
        uri: {
          pathname: `/api/v1/pokemon/{id}`,
        },
      },
    },
  },
};

export default config;
