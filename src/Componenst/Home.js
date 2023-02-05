import React from "react";
import ViewLeft from "./home/ViewLeft";
import ViewRight from "./home/ViewRight";



const Home = () => {
  return(
    <div className="row">
      <div className='content-left'>
        <ViewLeft/>
      </div>
      <div className='content-right backImage'>
        <ViewRight/>
      </div>
  </div>
  )
}

export default Home;

