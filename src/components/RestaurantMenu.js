import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();
  console.log(resId)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  };
  console.log('resInfo', resInfo)

  // const { category } = resInfo;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      {/* Display the first product's title as the main heading */}
      {/* <h1>{resInfo.title || "No Title"}</h1> */}

      {/* Display the category name in a subheading */}
      <h2>{resInfo.category || "No Category"}</h2>
<ul>
  <li>$:{resInfo.price}</li>
  <li>{resInfo.description}</li>
</ul>
      {/* Map through the product list and render as <li> */}
      {/* <ul>
        {resInfo.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
