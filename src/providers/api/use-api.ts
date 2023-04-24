import { useContext } from 'solid-js';
import { Api, ApiContext } from './api-context';

export function useApi(): Api {
  const api = useContext(ApiContext);

  if (api === undefined) {
    throw new Error(
      'No ApiContext found. Please provide one upper in the component tree'
    );
  }

  return api;
}
