import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceListEpisodes = async (podcastName?: string) =>{
  const dados = await repositoryPodcast();

  return dados;
}

