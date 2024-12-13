import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) =>{
    const { resData } = props;
    const {name, cuisines, avgRating, costForTwo, deliveryTime}  = resData?.data;
    return(
      <div className="res-card" style={{background:"#F0F0F0"}}>
        <img alt="res-logo" className="res-logo"
        src={CDN_URL}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>{costForTwo / 100}</h4>
        <h4>{deliveryTime}</h4>
        <h4>38 Mins</h4>
      </div>
    )
  }

  export default RestaurantCard