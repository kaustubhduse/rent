import './Amenities.css';
import AppContext from '../../store/use-context';
import { useContext } from 'react';
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

const Amenities = () => {
  const ctx = useContext(AppContext);

  const amenitiesList = [
    { name: 'cctv', img: cctv },
    { name: 'clubhouse', img: clubhouse },
    { name: 'communityhall', img: communityhall },
    { name: 'firesafety', img: firesafety },
    { name: 'garden', img: garden },
    { name: 'gym', img: gym },
    { name: 'intercom', img: intercom },
    { name: 'kidsarea', img: kidsarea },
    { name: 'lift', img: lift },
    { name: 'maintainence', img: maintainence },
    { name: 'parking', img: parking },
    { name: 'powerfull', img: powerfull },
    { name: 'powerpartial', img: powerpartial },
    { name: 'security', img: security },
    { name: 'shoppingcenter', img: shoppingcenter },
    { name: 'sport', img: sport },
    { name: 'swimmingpool', img: swimmingpool },
    { name: 'watersupply', img: watersupply }
  ];

  const filteredAmenities = amenitiesList.filter(amenity => ctx.amenities.includes(amenity.name));
  console.log(filteredAmenities);

  return (
    <div className="amenities-container">
      {filteredAmenities.map((amenity, index) => (
        <div className="aminities-item" key={index}>
          <img src={amenity.img} alt={amenity.name} className="aminities-img" />
        </div>
      ))}
    </div>
  );
};

export default Amenities;
