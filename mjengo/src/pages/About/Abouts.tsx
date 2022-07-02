import React from 'react';
import './about.css';
import img1 from "../../assets/p1.jpg";
import img2 from "../../assets/p2.jpg";


export const Abouts = () => {
  return (
    <div>

 {/* <nav></nav>   */}
<div className="header">
{/* <img src={img1} alt=""/> */}

</div>

<div className="container">
   
   <div className="about">
      <div className="left">
         <h1>About us</h1>
         <hr />
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      </div>
      <div className="right">
         <img src={img2} alt='' />
      </div>
      <div className="clear"></div>
   </div>
   
   
   
   <div className="mission">
     
      <div className="left">
         <img src={img1} alt=""/>
      </div>
        <div className="right">
         <h1>Mission Statement</h1>
         <hr/>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      </div>
      <div className="clear"></div>
      
   </div>
   
   
  
       <div className="team">
      <h1> Our Team<hr/></h1>
          
          
          
      <div  className="card">
         <div className="circle-container">
            <h1>M</h1>
         </div>
         <h2>Mahesh E U</h2>
         <h4>Technical Lead</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
          
          
          
      <div className="card">
         <div className="circle-container">
            <h1 >M</h1>
         </div>
         <h2>Mridul</h2>
         <h4>Evangelist</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
          
          
          
      <div className="card">
         <div className="circle-container">
            {/* <h1>R</h1> */}
            {/* <img src={img1} alt=""/> */}

         </div>
         <h2>Rajesh</h2>
         <h4>Evangelist</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
          
          
          
      <div className="card jones">
      {/* <img src={img1} alt=""/>  */}
        <div className="circle-container jones"  >
            {/* <h1 >B</h1> */}
            {/* <img src={img1} alt=""/> */}

         </div>
         <h2>Bharti</h2>
         <h4>Evangelist</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
          
             <div className="card">
         <div className="circle-container">
            <h1 >A</h1>
         </div>
         <h2>Anhsuman</h2>
         <h4> Advisor</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>       
      </div>
          
          
          
      <div className="card">
        <div className="circle-container">
            <h1 >S</h1>
         </div>
         <h2>Shruti</h2>
         <h4> Advisor</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
          
          
   </div>

   
</div>
<footer>
   <br />
   <p>Copyright ©2020 @@@@@@@@. All rights reserved</p>
</footer>
    </div>
  )
}
