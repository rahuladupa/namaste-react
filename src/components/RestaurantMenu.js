import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Get the restaurant ID from the URL
  const resInfo = useRestaurantMenu(resId); // Fetch menu data based on restaurant ID

  console.log("Restaurant Info:", resInfo); // Debugging API response

  // Safely access the data using optional chaining
  return !resInfo ? (
    <Shimmer /> // Show shimmer while data is loading
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-7 text-2xl">Restaurant Name</h1>
      <p className="font-semibold">Namaste Restaurant</p>
    </div>
  );
};

export default RestaurantMenu;
