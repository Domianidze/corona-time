export const getTotals = (countries: any[]) => {
  const newCases = countries
    .reduce((prev, cur) => {
      return prev + cur.statistics.confirmed;
    }, 0)
    .toLocaleString();

  const recovered = countries
    .reduce((prev, cur) => {
      return prev + cur.statistics.recovered;
    }, 0)
    .toLocaleString();

  const deaths = countries
    .reduce((prev, cur) => {
      return prev + cur.statistics.deaths;
    }, 0)
    .toLocaleString();

  return {
    newCases,
    recovered,
    deaths,
  };
};
