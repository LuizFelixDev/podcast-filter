import {IncomingMessage, ServerResponse} from 'http' 
import { serviceListEpisodes } from '../services/list-episodes-service';

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) =>{
  const content = await serviceListEpisodes("");

  response.writeHead(200, {"content-type": "application/json"})
  response.end(JSON.stringify(content)); 
};


export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await serviceListEpisodes("LuizDev");

  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify(content));
};