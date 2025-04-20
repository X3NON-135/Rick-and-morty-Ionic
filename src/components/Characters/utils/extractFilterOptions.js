const getUniqueOptions = (results, key) => [...new Set(results.map(item => item[key]))];

const extractFilterOptions = (results) => ({
  species: getUniqueOptions(results, 'species'),
  status: getUniqueOptions(results, 'status'),
  gender: getUniqueOptions(results, 'gender'),
});

export default extractFilterOptions;
