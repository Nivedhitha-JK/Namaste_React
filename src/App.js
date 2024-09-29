import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/*
Header
  - logo
  - nav items
Body
  - search
  - restaurant container
     - restaurant cards
Footer
  - copyright
  - links
  - Address
  - contact

  we have to create 1 top level comp, which contains all the other comp
*/
// const styleCard = {
//   backgroundColor: "dodgerBlue"
// }

const Applayout = () =>{
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>)



