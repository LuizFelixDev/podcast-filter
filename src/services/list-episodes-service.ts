import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceListEpisodes = async () =>{
  const dados = await repositoryPodcast();

  return dados;
}

