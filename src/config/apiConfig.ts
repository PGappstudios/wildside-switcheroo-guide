
export interface ApiEndpoint {
  name: string;
  url: string;
  description: string;
  parameters?: string[];
  category: 'fishing' | 'hunting' | 'both';
}

export const apiConfig: ApiEndpoint[] = [
  // Fishing APIs
  {
    name: "NOAA Fisheries",
    url: "https://www.fisheries.noaa.gov/webapi/species",
    description: "US fish species data and regulations",
    parameters: ["species", "region", "season"],
    category: "fishing"
  },
  {
    name: "Fish and Wildlife Service",
    url: "https://ecos.fws.gov/ServCatServices/servcat/v4/rest/",
    description: "Federal wildlife and fisheries data",
    parameters: ["species", "location"],
    category: "both"
  },
  {
    name: "Global Fishing Watch",
    url: "https://globalfishingwatch.org/our-apis/",
    description: "Global fishing activity and vessel tracking",
    parameters: ["vessel", "location", "time"],
    category: "fishing"
  },
  {
    name: "OpenWeather Marine API",
    url: "https://api.openweathermap.org/data/2.5/marine",
    description: "Marine weather conditions for fishing",
    parameters: ["lat", "lon", "appid"],
    category: "fishing"
  },
  {
    name: "Biodiversity Heritage Library",
    url: "https://www.biodiversitylibrary.org/api3",
    description: "Species information and historical data",
    parameters: ["species", "format"],
    category: "both"
  },
  // Hunting APIs
  {
    name: "iNaturalist",
    url: "https://api.inaturalist.org/v1/",
    description: "Wildlife observations and species data",
    parameters: ["taxon_id", "place_id", "observed_on"],
    category: "both"
  },
  {
    name: "eBird API",
    url: "https://ebird.org/ws2.0/",
    description: "Bird observation data for hunting",
    parameters: ["regionCode", "back", "maxResults"],
    category: "hunting"
  },
  {
    name: "GBIF Species API",
    url: "https://api.gbif.org/v1/species",
    description: "Global biodiversity and species occurrence",
    parameters: ["name", "rank", "kingdom"],
    category: "both"
  },
  {
    name: "Wildlife Tracker",
    url: "https://www.wildlifetracker.org/api/",
    description: "Animal tracking and migration patterns",
    parameters: ["species", "region", "season"],
    category: "hunting"
  }
];

export const getApisByCategory = (category: 'fishing' | 'hunting' | 'both') => {
  return apiConfig.filter(api => api.category === category || api.category === 'both');
};
