export interface PlanetsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PlanetsResults[];
}

export interface PlanetsResults {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: [];
  films: [];
  created: Date;
  edited: Date;
  url: string;
}

export const PlanetsDataTableHeaders = [
  { value: 'Name', key: 'name', sortable: true, isExpanded: false },
  { value: 'Rotation Period', key: 'rotation_period', sortable: true, isExpanded: false },
  { value: 'Orbital Period', key: 'orbital_period', sortable: false, isExpanded: false },
  { value: 'Diameter', key: 'diameter', sortable: false, isExpanded: false },
  { value: 'Climate', key: 'climate', sortable: false, isExpanded: false },
  { value: 'Gravity', key: 'gravity', sortable: false, isExpanded: false },
  { value: 'Terrain', key: 'terrain', sortable: false },
  { value: 'Surface Water', key: 'surface_water', sortable: false },
  { value: 'Population', key: 'population', sortable: false },
  { value: 'Residents', key: 'residents', sortable: false },
  { value: 'Films', key: 'films', sortable: false },
  { value: 'Created', key: 'created', sortable: false },
  { value: 'Edited', key: 'edited', sortable: false },
  { value: 'URL', key: 'url', sortable: false }
];

export enum SORTING_ORDER {
  NoOrder,
  Ascending,
  Descending
}
