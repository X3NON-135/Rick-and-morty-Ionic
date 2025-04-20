import { useEffect, useState } from "react";
import { fetchCharacters } from "../utils/api";
import extractFilterOptions from "../utils/extractFilterOptions";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    species: '',
    status: '',
    gender: '',
  });
  const [filterOptions, setFilterOptions] = useState({
    species: [],
    status: [],
    gender: [],
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCharacters(page, filters);
        setCharacters(data.results);
        setPages(data.info.pages);
        setFilterOptions(extractFilterOptions(data.results));
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    loadData();
  }, [page, filters]);

  return {
    characters,
    page,
    pages,
    setPage,
    filters,
    setFilters,
    filterOptions,
  };
};

export default useCharacters;
