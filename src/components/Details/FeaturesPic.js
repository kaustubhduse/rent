import './FeaturesPic.css';
import cctv from '../../assets/amenities/cctv.png';
import clubhouse from '../../assets/amenities/clubhouse.png';
import communityhall from '../../assets/amenities/community-hall.png';
import firesafety from '../../assets/amenities/fire-safety.png';
import garden from '../../assets/amenities/garden.png';
import gym from '../../assets/amenities/gym.png';
import intercom from '../../assets/amenities/intercom.png';
import kidsarea from '../../assets/amenities/kids-area.png';
import lift from '../../assets/amenities/lift.png';
import maintainence from '../../assets/amenities/maintainence.png';
import parking from '../../assets/amenities/parking.png';
import powerfull from '../../assets/amenities/power-full.png';
import powerpartial from '../../assets/amenities/power-partial.png';
import security from '../../assets/amenities/security.png';
import shoppingcenter from '../../assets/amenities/shopping-center.png';
import sport from '../../assets/amenities/sport.png';
import swimmingpool from '../../assets/amenities/swimming-pool.png';
import watersupply from '../../assets/amenities/water-supply.png';

import AppContext from '../../store/use-context';
import { useContext, useEffect } from 'react';


const FeaturesPic = () => {
   const ctx = useContext(AppContext);
   const amenitiesHandler = (e) => {
         if(ctx.amenities.includes(e.target.value)){
            ctx.setAmenities(ctx.amenities.filter(amenity => amenity !== e.target.value));
         }
         else{
            ctx.setAmenities([...ctx.amenities, e.target.value]);
         }
   }

   useEffect(() => {
      ctx.setAmenities(ctx.amenities);
      console.log(ctx.amenities);
   },[ctx.amenities]);

   return(
    <div className='features-pic-container'>
    
    <div className='feature-item'>
       <img src={security} alt="security" className="feature-img" />
       <input type="checkbox" id="security" name="security" value="security" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={cctv} alt="cctv" className="feature-img" />
       <input type="checkbox" id="cctv" name="cctv" value="cctv" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={lift} alt="lift" className="feature-img" />
       <input type="checkbox" id="lift" name="lift" value="lift" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={parking} alt="parking" className="feature-img" />
       <input type="checkbox" id="parking" name="parking" value="parking" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>

    <div className='feature-item'>
       <img src={watersupply} alt="watersupply" className="feature-img" />
       <input type="checkbox" id="watersupply" name="watersupply" value="watersupply" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={powerpartial} alt="powerpartial" className="feature-img" />
       <input type="checkbox" id="powerpartial" name="powerpartial" value="powerpartial" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={powerfull} alt="powerfull" className="feature-img" />
       <input type="checkbox" id="powerfull" name="powerfull" value="powerfull" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={maintainence} alt="maintainence" className="feature-img" />
       <input type="checkbox" id="maintainence" name="maintainence" value="maintainence" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>

    <div className='feature-item'>
       <img src={garden} alt="garden" className="feature-img" />
       <input type="checkbox" id="garden" name="garden" value="garden" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={kidsarea} alt="kidsarea" className="feature-img" />
       <input type="checkbox" id="kidsarea" name="kidsarea" value="kidsarea" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={sport} alt="sport" className="feature-img" />
       <input type="checkbox" id="sport" name="sport" value="sport" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={gym} alt="gym" className="feature-img" />
       <input type="checkbox" id="gym" name="gym" value="gym" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>

    <div className='feature-item'>
       <img src={communityhall} alt="communityhall" className="feature-img" />
       <input type="checkbox" id="communityhall" name="communityhall" value="communityhall" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={shoppingcenter} alt="shoppingcenter" className="feature-img" />
       <input type="checkbox" id="shoppingcenter" name="shoppingcenter" value="shoppingcenter" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={clubhouse} alt="clubhouse" className="feature-img" />
       <input type="checkbox" id="clubhouse" name="clubhouse" value="clubhouse" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={swimmingpool} alt="swimmingpool" className="feature-img" />
       <input type="checkbox" id="swimmingpool" name="swimmingpool" value="swimmingpool" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>

    <div className='feature-item'>
       <img src={intercom} alt="intercom" className="feature-img" />
       <input type="checkbox" id="intercom" name="intercom" value="intercom" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={firesafety} alt="firesafety" className="feature-img" />
       <input type="checkbox" id="firesafety" name="firesafety" value="firesafety" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={clubhouse} alt="clubhouse" className="feature-img" />
       <input type="checkbox" id="clubhouse" name="clubhouse" value="clubhouse" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    <div className='feature-item'>
       <img src={swimmingpool} alt="swimmingpool" className="feature-img" />
       <input type="checkbox" id="swimmingpool" name="swimmingpool" value="swimmingpool" className="feature-checkbox" onChange={amenitiesHandler}/>
    </div>
    {/* Add more items as needed */}
 </div>
   )
}

export default FeaturesPic;