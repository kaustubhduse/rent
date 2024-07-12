import React, { useContext } from 'react';
import AppContext from '../../store/use-context';
import './PreviewPage.css';
import bedroom from '../../assets/overview/bedroom.png';
import bathroom from '../../assets/overview/bathroom.png';
import sqft from '../../assets/overview/sqft.png';
import propertyonfloor from '../../assets/overview/propertyonfloor.png';
import totalfloors from '../../assets/overview/totalfloors.png';
import facing from '../../assets/overview/facing.png';
import balcony from '../../assets/overview/balcony.png';
import furnishing from '../../assets/overview/furnishing.png';
import tenantpreference from '../../assets/overview/tenantpreference.png';
import flooring from '../../assets/overview/flooring.png';
import availability from '../../assets/overview/availability.png';
import watersupply from '../../assets/overview/watersupply.png';
import petsallowed from '../../assets/overview/petsallowed.png';
import nonveg from '../../assets/overview/nonveg.png';
import electricitystatus from '../../assets/overview/electricitystatus.png';
import propertyage from '../../assets/overview/propertyage.png';
import propertytype from '../../assets/overview/propertytype.png';
import gatedsecurity from '../../assets/overview/gated-security.png';

import Amenities from './Amenities';
const PreviewPage = () => {
  const ctx = useContext(AppContext);

  const details = [
    { img: bedroom, label: 'Bedrooms', value: ctx.bedrooms },
    { img: bathroom, label: 'Bathrooms', value: ctx.bathrooms },
    { img: sqft, label: 'Built-up Area', value: `${ctx.sqft} sqft` },
    { img: propertyonfloor, label: 'Property on Floor', value: ctx.propertyOnFloor },
    { img: totalfloors, label: 'Total Floors', value: ctx.totalFloors },
    { img: facing, label: 'Property Facing', value: ctx.facing },
    { img: balcony, label: 'Balcony', value: ctx.balcony },
    { img: furnishing, label: 'Furnishing', value: ctx.furnishing },
    { img: tenantpreference, label: 'Tenant Preference', value: ctx.tenantPreference },
    { img: flooring, label: 'Flooring', value: ctx.flooring },
    { img: availability, label: 'Availability', value: ctx.availability },
    { img: watersupply, label: 'Water Supply', value: ctx.waterSupply },
    { img: petsallowed, label: 'Pets Allowed', value: ctx.petsAllowed },
    { img: nonveg, label: 'Non-Veg Allowed', value: ctx.nonVegAllowed },
    { img: electricitystatus, label: 'Electricity Status', value: ctx.electricityStatus },
    { img: propertyage, label: 'Property Age', value: `${ctx.propertyAge} age` },
    { img: propertytype, label: 'Property Type', value: ctx.propertyType },
    { img: gatedsecurity, label: 'Gated Security', value: ctx.gatedSecurity },
  ];

  console.log(ctx.searchedLocation, ctx.searchedName);

  return (
    <div className='page'>
      <div className='page-style'>
      <div className='location'>
        <p className='location-title'>{`${ctx.bedrooms} BHK ${ctx.propertyType} for ${ctx.propertyFor} in ${ctx.buildingName} ${ctx.locality}` } <br></br>{`(${ctx.sqft} Sq.ft.)`}</p>
        <p className='locality'>{`${ctx.buildingName} ${ctx.landmark} ${ctx.locality}`}</p>
      </div>

        
        {ctx.propertyImages.map((img, index) => (
          <img src={img} alt='property' key={index} className='property-image' />
        ))}
        
      
 
      <p className='overview'>Property Overview</p>
      <div className='property-details'>
        {details.map((detail, index) => (
          <div className='property-item' key={index}>
            {detail.img && <img src={detail.img} alt={detail.label} className='property-icon' />}
            <div className='property-text'>
              <p className='property-value'>{detail.value}</p>
              <p className='property-label'>{detail.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='line'></div>

      <p className='amenities-title'>Amenities</p>
      <Amenities />

      <div className='line'></div>

       <p className='description-title'>Description</p>
        <p className='desc-desc'>{ctx.description}</p>

      <div className='line'></div>
      </div>
    </div>
  );
}

export default PreviewPage;
