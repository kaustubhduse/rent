import React, { createContext, useState } from 'react';


const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [sqft, setSqft] = useState(0);
    const [propertyOnFloor, setPropertyOnFloor] = useState('');
    const [totalFloors, setTotalFloors] = useState('');
    const [facing, setFacing] = useState('');
    const [balcony, setBalcony] = useState('');
    const [furnishing, setFurnishing] = useState('');
    const [tiles, setTiles] = useState('');
    const [tenantPreference, setTenantPreference] = useState('');
    const [flooring, setFlooring] = useState('');
    const [availability, setAvailability] = useState('');
    const [waterSupply, setWaterSupply] = useState('');
    const [petsAllowed, setPetsAllowed] = useState('');
    const [nonVegAllowed, setNonVegAllowed] = useState('');
    const [electricityStatus, setElectricityStatus] = useState('');
    const [propertyAge, setPropertyAge] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [gatedSecurity, setGatedSecurity] = useState('');
    const [amenities, setAmenities] = useState([]);
    const [description,setDescription] = useState('');

    const contextValue = {
        bedrooms,setBedrooms,
        bathrooms,setBathrooms,
        sqft,setSqft,
        propertyOnFloor,setPropertyOnFloor,
        totalFloors, setTotalFloors,
        facing,setFacing,
        balcony,setBalcony,
        furnishing,setFurnishing,
        tiles,setTiles,
        tenantPreference,setTenantPreference,
        flooring,setFlooring,
        availability,setAvailability,
        waterSupply,setWaterSupply,
        petsAllowed,setPetsAllowed,
        nonVegAllowed,setNonVegAllowed,
        electricityStatus,setElectricityStatus,
        propertyAge,setPropertyAge,
        propertyType,setPropertyType,
        gatedSecurity,setGatedSecurity,
        amenities,setAmenities,
        description,setDescription
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;
