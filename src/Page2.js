import React from 'react';
import { Link } from 'react-router-dom';
import scale from 'C:/Users/lenovo/realdeal/src/icons/Scale.svg'
import {useLocation} from 'react-router-dom';

function Page2(props) {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <div id="background">
      <div className='pagetwocontainer'>
      <h2>Q U E T T A</h2>
      </div>
      <div className='pagetwocontainer'>
      <img className="large" src={scale}  />
      </div>
      <div className='introduction'>Please put your phone on the scale to weigh your data usage</div>
      <br></br><br></br>

      <h2>{data}</h2>
   <div className="pagetwocontainer">
    <Link to='/Page3'>
     <div className='Checkout'>Pay</div>
    </Link>
   </div>
   
</div>
  );
}
export default Page2;