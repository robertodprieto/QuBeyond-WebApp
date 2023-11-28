export interface PlanetsResponse {
  count: Number;
  next: String | null;
  previous: String | null;
  results: PlanetsResults[];
}

interface PlanetsResults {
  name: String;
  rotation_period: String;
  orbital_period: String;
  diameter: String;
  climate: String;
  gravity: String;
  terrain: String;
  surface_water: String;
  population: String;
  residents: [];
  films: [];
  created: Date;
  edited: Date;
  url: String;
}
