import { httpClient } from '@/services/http-client';
import { type PlanetsResponse } from '@/models/business-models';
import loggerFactory from '@/services/logger';

const namespace = 'REQUESTS';

const logger = loggerFactory(namespace);

export const fetchPlanets = async (url: string) => {
  try {
    const response = await httpClient.get<PlanetsResponse>({
      url
    });
    return response;
  } catch (error: any) {
    logger.error(error);
  }
};
