import axios, { type AxiosRequestConfig } from 'axios';

export interface IHttpClientRequestParameters<T> {
  url: string;
  payload?: T;
}

export interface IHttpClient {
  get<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>;
  //  Other methods (post, delete, put) are not declared to keep the project simple having only the things needed to achieve the purpose
}

export class AxiosHttpClient implements IHttpClient {
  get<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // extract the individual parameters
      const { url } = parameters;

      // axios request options like headers etc
      const options: AxiosRequestConfig = {
        headers: {}
      };

      // if API endpoint requires a token, we'll need to add a way to add this to the headers, in general configuring interceptors, which is not needed for this simple project.

      // finally execute the GET request with axios:
      axios
        .get(url, options)
        .then((response: any) => {
          resolve(response.data as T);
        })
        .catch((response: any) => {
          reject(response);
        });
    });
  }
}

//  This will be better to use a DI library, export an interface token a resolves the implementation with DI mappings, but again I will keep it simple for this project
export const httpClient = new AxiosHttpClient();
