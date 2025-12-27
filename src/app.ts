import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { httpMethods } from './utils/http-methods';
import * as http from 'http'


export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const[baseUrl, queryString] = request.url?.split("?") ?? ["",""];

    console.log(baseUrl);
    console.log(queryString);

    //listar podcasts
    if(request.method === httpMethods.GET && baseUrl === Routes.LIST){
      await getListEpisodes(request, response);
    }
    //filtrar episódios de um podcast
    if(request.method === httpMethods.GET && baseUrl === Routes.EPISODE){
      await getFilterEpisodes(request, response);
    }
}