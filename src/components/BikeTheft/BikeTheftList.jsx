import { useState, useEffect } from "react";
import { fetchBikeThefts } from "@/services/api";
import Pagination from "@/ui/Pagination";
import BikeTheftItem from "./BikeTheftItem";
import BikeTheftFilters from "./BikeTheftFilters";

const BikeTheftList = () => {
  const [thefts, setThefts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCases, setTotalCases] = useState(0);
  const [filters, setFilters] = useState({
    query: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchBikeThefts(
          page,
          filters.query,
          filters.startDate,
          filters.endDate
        );
        setThefts(data.bikes);
        setTotalCases(data.bikes.length); // Assuming the API returns total cases count
      } catch (error) {
        setError("Failed to fetch bike thefts");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [page, filters]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (thefts.length === 0) return <div>No results found</div>;

  return (
    <div>
      <BikeTheftFilters setFilters={setFilters} />
      <div className="grid grid-cols-1 gap-4">
        {thefts.map((theft) => (
          <BikeTheftItem key={theft.id} theft={theft} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalCases={totalCases}
        setPage={setPage}
      />
    </div>
  );
};

export default BikeTheftList;
