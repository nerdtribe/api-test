import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

const api_key = 'API KEY HERE';
const tmdb_url = 'https://api.themoviedb.org/3';

interface HelloResponse {
  hello: string;
}

type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = name => ({ hello: name });

export const rootHandler = (_req: Request, res: Response) => {
  return res.send('API is working 🤓');
};

export const helloHandler = (req: Request, res: Response) => {
  const { params } = req;
  const { name = 'World' } = params;
  const response = helloBuilder(name);

  return res.json(response);
};

export const tmdbMovieSearchHandler = async (req: Request, res: Response) => {
  const { params } = req;
  const { query } = params;
  const response = await tmdbApiSearchBuilder(query);
  return res.json(response);
};

const tmdbApiSearchBuilder: (query: string) => Promise<AxiosResponse<any> | void> = (query: string) => {
  const url = `${tmdb_url}/search/movie?api_key=${api_key}&query=${query}`;
  return axios.get(url)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      // handle error
      console.log(error);
    });
};

export const tmdbHandler = async (req: Request, res: Response) => {
  const response = await tmdbApiBuilder();
  return res.json(response);
};

function tmdbApiBuilder() {
  const url = `${tmdb_url}/trending/all/week?api_key=${api_key}`;
  return axios.get(url)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      // handle error
      console.log(error);
    });
}
