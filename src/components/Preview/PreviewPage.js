import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import ImageSection from './ImageSection';
import profile from '../../assets/profile.png'


const PreviewPage = () => {
  const ctx = useContext(AppContext);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const navigate = useNavigate();



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
    { img: flooring, label: 'Flooring', value: ctx.tiles },
    { img: availability, label: 'Availability', value: ctx.availability },
    { img: watersupply, label: 'Water Supply', value: ctx.waterSupply },
    { img: petsallowed, label: 'Pets Allowed', value: ctx.petsAllowed },
    { img: nonveg, label: 'Non-Veg Allowed', value: ctx.nonVegAllowed },
    { img: electricitystatus, label: 'Electricity Status', value: ctx.electricityStatus },
    { img: propertyage, label: 'Property Age', value: `${ctx.propertyAge} age` },
    { img: propertytype, label: 'Property Type', value: ctx.propertyType },
    { img: gatedsecurity, label: 'Gated Security', value: ctx.gatedSecurity },
  ];

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const toggleAboutExpanded = () => {
    setIsAboutExpanded(!isAboutExpanded);

  };

  

  const handlereviewHandler = () => {
     navigate('/list-your-property/previewpage/review');
  }

  
  return (
    <div className='page'>
      <div className='page-style'>
        <div className='location'>
          <p className='location-title'>{`${ctx.bedrooms} BHK ${ctx.propertyType} for ${ctx.propertyFor} in ${ctx.buildingName} ${ctx.locality}` } <br></br>{`(${ctx.sqft} Sq.ft.)`}</p>
          <p className='locality'>{`${ctx.buildingName} ${ctx.landmark} ${ctx.locality}`}</p>
        </div>

        <ImageSection>
          {ctx.propertyImages.map((img, index) => (
            <img src={img} alt='property' key={index} className='property-image' />
          ))}
        </ImageSection>

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
        <div className={`desc-desc ${isDescriptionExpanded ? 'expanded' : 'collapsed'}`}>{ctx.description}</div>
        {ctx.description.length > 400 && ( // Arbitrary length to decide when to show the toggle
          <button className='toggle-button' onClick={toggleDescriptionExpanded}>
            {isDescriptionExpanded ? 'Show less' : 'Show more'}
          </button>
        )}

        <div className='line'></div>

        <div className='review-box'>
           <p className='ratings-title'>Ratings and Reviews</p>
           <div className='ratings'>
              <div className='review-number'>
                <img src={profile} alt='profile' className='profile'/>
                <div className='profile-right'>
                <p className='review-name'>Aishwarya Malik</p>
                <p className='review-period'>Tenant(8 months)</p>
                </div>
                <p className='review-tilename'>Good Society</p>
                <p className='review-para'>The garden view is mesmerizing, the exposure of natural light is good.
                Easy access to stores, markets and schools.</p>
              </div>

              <div className='review-number'>
                <img src={profile} alt='profile' className='profile'/>
                <div className='profile-right'>
                <p className='review-name'>Aishwarya Malik</p>
                <p className='review-period'>Tenant(8 months)</p>
                </div>
                <p className='review-tilename'>Good Society</p>
                <p className='review-para'>The garden view is mesmerizing, the exposure of natural light is good.
                Easy access to stores, markets and schools.</p>
              </div>
           </div>
           <button className='write-review' onClick={handlereviewHandler}>Write review</button>
        </div>

        <div className='mira-road'>
          <p className='about-title'>About Miraroad</p>
          <div className={`about-text ${isAboutExpanded ? 'expanded' : 'collapsed'}`}>
            Mira Road is situated at the northern outskirts of Mumbai and has emerged as a preferred residential destination owing to affordable property options, smooth connectivity and decent social infrastructure. Placed along Mira-Bhayandar Road, the locality is dominated by multi-storey apartments. Some notable residential projects in the locality are Kalpataru Srishti, Hubtown Gardenia, JP North, Lodha Aqua, and Unique Aurum.
            Physical infrastructure
            The locality enjoys decent physical connectivity to various locations of Mumbai, Thane and Navi Mumbai through extensive road network. It is well connected to key employment hubs such as BandraKurla Complex, Lower Parel and Nariman Point, via the Western Express Highway and Western Suburban Railway Line. The Mira Road Railway Station is a preferred medium of transport and connects it to various parts of the city. Also, the under-construction Line 7 of Mumbai Metro (Dahisar East - Andheri East), is scheduled to be completed by 2020 which would offer metro connectivity to Mira Road since it is adjacent to Dahisar East.
            Social & retail infra
            The locality has ample social and retail amenities comprising schools, colleges, malls, eateries, multiplexes, amusement park, and banks. Popular shopping centres here are Maxus Mall, Thakur Mall, Rassaz Shopping Mall and Shanti Shopping Centre, all of which are under 15 mins from the locality. It also hosts many prominent schools namely St. Xavier's High School, N.L. Dalmia High School, Sardar Vallabh bhai Patel Vidyalaya, RBK School, Queen Mary's High School and A.P. International School, among others. The locality also boasts presence of several hospitals nearby such as Bhaktivedanta Hospital & Research Institute, Thunga Hospital, Karuna Hospital, and Lotus Multispecialty Hospital.
          </div>
          <button className='toggle-button' onClick={toggleAboutExpanded}>
            {isAboutExpanded ? 'Read less' : 'Read more'}
          </button>
          <br></br>
          <button className='write-review' onClick={handlereviewHandler}>
            Write review
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewPage;
