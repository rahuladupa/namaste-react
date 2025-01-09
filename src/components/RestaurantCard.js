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
    <div className="m-4 p-4 w-[250px] rounded-lg" style={{ background: "#F0F0F0" }}  >
      <img
        alt="res-logo"
        className="rounded-lg"
        src={image}
      />
      <h3 className="font-bold">{title}</h3>
      <h4>{category}</h4>
      <h4>{rating.rate || 0}⭐</h4>
      <h4>{price}</h4>
    </div>
  );
};

// Higher order component

// it takes the input =  promoted like we as jewlwery category

export const withPromotedLabel = (RestaurantCard) =>{
  return (props) =>{
    return (
      <div >
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
