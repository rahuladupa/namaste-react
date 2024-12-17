import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setListOfRestaurants(json);
    setFilteredRestaurant(json);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
          className="searchBtn"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => {
               return res.title.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredLogic = listOfRestaurants.filter(
              (res) => res.rating.rate > 4
            );
            // console.log("test", listOfRestaurants);
            setFilteredRestaurant(filteredLogic);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => {
          // console.log("restaurant:", restaurant.id); // Debugging log
          // const restaurantId = restaurant?.id || index; // Fallback to index if id is missing
          return <RestaurantCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
