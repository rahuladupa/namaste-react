import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

import Shimmer from "./Shimmer";
import { Link } from "react-router";


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
          
          return <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}> <RestaurantCard  resData={restaurant} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
