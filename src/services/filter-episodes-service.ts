import { PodcastModel } from "../models/podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"

export const serviceListEpisodes = async (podcastName: string = ""): Promise<PodcastModel[]>  =>{
  const data = await repositoryPodcast(podcastName);

  return data;
}