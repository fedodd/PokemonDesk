import Url from 'url';
import getUrlWithParamsConfig, { IQuery } from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: IQuery): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  return fetch(uri).then((res) => res.json());
}

export default req;
