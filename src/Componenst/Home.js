import React from "react";
import ViewLeft from "../views/ViewLeft";
import ViewRight from "../views/ViewRight";



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