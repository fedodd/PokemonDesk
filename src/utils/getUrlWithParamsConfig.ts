import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: any) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {},
  };

  const pathname = Object.keys(query).reduce((acc, key) => {
    if (acc.indexOf(`{${key}}`) !== -1) {
      const result = acc.replace(`{${key}}`, query[key]);
      delete query[key];
      return result;
    }

    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = {
    ...query,
  };
  return url;
}

export default getUrlWithParamsConfig;
