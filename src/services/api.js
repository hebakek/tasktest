const BASE_URL = "https://bikeindex.org:443/api/v3";

export const fetchBikeThefts = async (page, query, startDate, endDate) => {
  const url = new URL(`${BASE_URL}/search`);
  url.searchParams.append("location", "Munich");
  url.searchParams.append("distance", "10");
  url.searchParams.append("stolenness", "proximity");
  url.searchParams.append("page", page);
  if (query) url.searchParams.append("query", query);
  if (startDate)
    url.searchParams.append(
      "occurred_after",
      new Date(startDate).getTime() / 1000
    );
  if (endDate)
    url.searchParams.append(
      "occurred_before",
      new Date(endDate).getTime() / 1000
    );

  const response = await fetch(url);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};
