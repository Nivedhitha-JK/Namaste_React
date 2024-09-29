import RestaurantCards from "./RestaurantCards";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";



const Body = () => {

  const [resDataList,setresDataList] = useState(resList);
  useEffect(()=>{console.log("useeffect called")},[])
  // useEffect(()=>{fetchData()},[]);
  console.log("Body component rendered");


  // const fetchData = async() =>{
  //   let data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   //after having data convert to json
  //   const json = await data.json();
  //   console.log(json);
  // }

//   let resVarJs = [
//     {
//       "info": {
//         "id": "75316",
//         "name": "Mudita Ni Mithaio",
//         "cloudinaryImageId": "tzmhqmaypsz11rjkthbz",
//         "locality": "Navdi Bandar Road",
//         "areaName": "Nanpura",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Sweets",
//           "Desserts",
//           "Fast Food"
//         ],
//         "avgRating": 4.6,
//         "avgRatingString": "4.6",
//         "sla": {
//           "deliveryTime": 31,
//           "lastMileTravel": 6.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "6.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//       }
//     },
//     {
//       "info": {
//         "id": "84562",
//         "name": "G Dada",
//         "cloudinaryImageId": "cbf6dda38f6e908be6dd706d5dea010a",
//         "locality": "Adajan Gam",
//         "areaName": "Adajan Gam",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Gujarati",
//           "Snacks",
//           "Street Food",
//           "North Indian",
//           "Punjabi",
//           "Thalis"
//         ],
//         "avgRating": 4.4,
//         "parentId": "419400",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "41K+",
//         "sla": {
//           "deliveryTime": 34,
//           "lastMileTravel": 6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "6.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         }, 
//        },
//     },
//     {
//       "info": {
//         "id": "152983",
//         "name": "Jani Locho",
//         "cloudinaryImageId": "nni5t4imm0m5odzlqav6",
//         "locality": "Navyug College Road",
//         "areaName": "Adajan Patiya",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Gujarati",
//           "Snacks"
//         ],
//         "avgRating": 3.8,
//         "veg": true,
//         "parentId": "22262",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "7.6K+",
//         "sla": {
//           "deliveryTime": 32,
//           "lastMileTravel": 6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "6.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },



//     }
//     },
//     {
//       "info": {
//         "id": "923640",
//         "name": "Jani Locho & Khaman House",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/10/3dce66eb-b8f2-4315-98d0-636ff5da53d8_923640.jpg",
//         "locality": "Salabatpura Main Road",
//         "areaName": "Athwa",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Gujarati",
//           "Snacks",
//           "Fast Food"
//         ],
//         "avgRating": 3.2,
//         "veg": true,
//         "parentId": "7626",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "34",
//         "sla": {
//           "deliveryTime": 21,
//           "lastMileTravel": 3.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "3.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//     }
//     }
// ]
  return (
    <div className="body">
      <div className="filter">
      <button className="filter_btn" 

      onClick = {()=> {
        console.log('Button clicked');
        console.log(resDataList);

        const filterData = resDataList.filter((res)=> res.info.avgRating > 4);
        console.log(filterData);
        setresDataList(filterData)
      }}
        >
        Top Rated Restaurants</button>
      </div>
      <div className="res-container">
          {
          resDataList.map(restaurant => <RestaurantCards key={restaurant.info.id} resData = {restaurant}/>)
          }
      </div>
    </div>
  )
}

export default Body;