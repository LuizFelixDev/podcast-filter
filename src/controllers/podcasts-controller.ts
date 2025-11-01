import {IncomingMessage, ServerResponse} from 'http' 
import { json } from 'stream/consumers'

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) =>{
    response.writeHead(200, {"content-type": "aplication/json"})
    response.end({
        "name": ""
    })
}