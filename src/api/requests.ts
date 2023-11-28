import { httpClient } from '@/services/http-client';
import { FETCH_PLANETS_ROUTES } from './apiRoutes';
import { type PlanetsResponse } from '@/models/business-models';
import loggerFactory from '@/services/logger';

const namespace = 'REQUESTS';

const logger = loggerFactory(namespace);

export const fetchPlanets = async () => {
  try {
    const response = await httpClient.get<PlanetsResponse>({
      url: FETCH_PLANETS_ROUTES
    });
    return response;
  } catch (error: any) {
    logger.error(error);
  }
};
