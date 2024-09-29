import { CARD_IMG } from "../utils/constants";

const RestaurantCards = (props) => {
  const {resData} = props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
  const {deliveryTime} = resData?.info.sla;
  return(
    <div className="res-card" style={{backgroundColor: "#f2f2f2"}}>
      <img src={ CARD_IMG + cloudinaryImageId} 
      alt="res-logo" 
      className="res-img"/>
      <h4 style={{margin:"5px"}}>{name}</h4>
      <p style={{fontSize:"12px",margin:"5px"}}>{cuisines.join(",")}</p>
      <p style={{margin:"5px"}}>{avgRating} stars</p>
      <p style={{margin:"5px"}}>{costForTwo}</p>
      <p style={{margin:"5px"}}>{deliveryTime} Minutes</p>
    </div>
  )
}


export default RestaurantCards;