import { CapacitorHttp } from "@capacitor/core";

export const fetchCharacters = async (page, filters) => {
  const query = new URLSearchParams({ page, ...filters }).toString();
  const response = await CapacitorHttp.get({
    url: `https://rickandmortyapi.com/api/character/?${query}`,
  });
  return response.data;
};
