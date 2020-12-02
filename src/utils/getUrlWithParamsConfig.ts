import config from '../config';

export interface IQuery {
  [key: string]: number | string;
}

function getUrlWithParamsConfig(endpointConfig: string, query: IQuery) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {},
  };

  const updatedQuery: IQuery = {};

  const pathname = Object.keys(query).reduce((acc, key) => {
    if (acc.indexOf(`{${key}}`) !== -1) {
      const result = acc.replace(`{${key}}`, query[key].toString());
      return result;
    }

    updatedQuery[key] = query[key];

    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = {
    ...updatedQuery,
  };
  return url;
}

export default getUrlWithParamsConfig;
