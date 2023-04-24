import axios, { AxiosInstance } from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

export function CreateHttpClient(baseURL: string): AxiosInstance {
  return applyCaseMiddleware(
    axios.create({
      baseURL: baseURL,
      headers: {
        'Content-type': 'application/json',
      },
    })
  );
}
