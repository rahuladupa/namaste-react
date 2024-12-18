const RestaurantCard = ({ resData = {} }) => {
  // console.log('resData', resData)
  const { 
    title = "Unknown", 
    category = "N/A", 
    rating = {}, 
    price = 0, 
    image = "https://via.placeholder.com/150" 
  } = resData || {};

  return (
    <div className="res-card" style={{ background: "#F0F0F0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src={image}
      />
      <h3>{title}</h3>
      <h4>{category}</h4>
      <h4>{rating.rate || 0}⭐</h4>
      <h4>{price}</h4>
    </div>
  );
};

export default RestaurantCard;
