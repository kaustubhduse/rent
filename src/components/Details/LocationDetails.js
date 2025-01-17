import './LocationDetails.css';
import imp from "../../assets/imp.png";
import SellersFlow from '../SellersFlow/SellersFlow';
import { Fragment, useEffect, useState } from 'react';
import Map from '../UI/Map';
import AppContext from '../../store/use-context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const currPage = '2';

const LocationDetails = () => {
    const ctx = useContext(AppContext);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        ctx.setBuildingName(ctx.buildingName);
        ctx.setLocality(ctx.locality);
        ctx.setLandmark(ctx.landmark);
        ctx.setCity(ctx.city);
    },[ctx]);

    const validateForm = () => {
        let errors = {};
        if (!ctx.buildingName.trim()) {
            errors.buildingName = 'Building/ Society Name is required.';
        }
        if (!ctx.locality.trim()) {
            errors.locality = 'Locality/ Area is required.';
        }
        if (!ctx.city.trim()) {
            errors.city = 'City is required.';
        }
        return errors;
    }

    const handleSubmit = () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({}); // Clear errors if validation passes
        // Proceed with further actions like saving to context or backend
        navigate('/list-your-property/features-and-amenities');
    }

    return (
        <Fragment>
            <SellersFlow currPage={currPage} handleSubmit={handleSubmit}>
                <div className="square" style={{ marginTop: "-3rem" }}>
                    <div className="square-area">
                        <p>
                            Building/ Society Name <img src={imp} alt="important" className="imp" />
                        </p>
                        <input
                            type="text"
                            placeholder="Enter Apartment Name"
                            className="text-box"
                            value={ctx.buildingName}
                            onChange={(e) => ctx.setBuildingName(e.target.value)}
                        />
                        {errors.buildingName && <p className="error">{errors.buildingName}</p>}
                    </div>
                    <div className="square-area">
                        <p>
                            Locality / Area <img src={imp} alt="important" className="imp" />
                        </p>
                        <input
                            type="text"
                            placeholder="Eg : sheetal nagar"
                            className="text-box"
                            value={ctx.locality}
                            onChange={(e) => ctx.setLocality(e.target.value)}
                        />
                        {errors.locality && <p className="error">{errors.locality}</p>}
                    </div>
                </div>

                <div className="square" style={{ marginTop: "1rem" }}>
                    <div className="square-area">
                        <p>
                            Landmark / Street Name
                        </p>
                        <input
                            type="text"
                            placeholder="Prominent Landmark"
                            className="text-box"
                            value={ctx.landmark}
                            onChange={(e) => ctx.setLandmark(e.target.value)}
                        />
                    </div>
                    <div className="square-area">
                        <p>
                            City
                        </p>
                        <input
                            type="text"
                            placeholder="Mumbai, Maharashtra"
                            className="text-box"
                            value={ctx.city}
                            onChange={(e) => ctx.setCity(e.target.value)}
                        />
                        {errors.city && <p className="error">{errors.city}</p>}
                    </div>
                </div>
                <Map />
            </SellersFlow>
        </Fragment>
    );
}

export default LocationDetails;
