import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

const [resInfo, setResInfo] = useState()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json1 = await data.json()
    setResInfo(json1)
  };

  return resInfo;
};

export default useRestaurantMenu;
