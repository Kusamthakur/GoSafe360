import React from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../utils/config";
import TourCard from "../../shared/TourCard";

const FeaturedTourList = () => {
  const { apiData: featuredToursData, error, loading } = useFetch(
    `${BASE_URL}/tour`
  );

  return (
    <>
      {loading && <h4 className="text-center text-blue-500">Loading...</h4>}
      {error && <h4 className="text-center text-red-500">{error}</h4>}
      {!loading && !error && Array.isArray(featuredToursData) && (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredToursData.map((tour) => (
            <div key={tour._id}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FeaturedTourList;
