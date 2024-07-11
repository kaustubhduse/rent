import './Features.css';
import { Fragment, useContext, useEffect, useState } from 'react';
import SellersFlow from '../SellersFlow/SellersFlow';
import imp from "../../assets/imp.png";
import FeaturesPic from './FeaturesPic';
import AppContext from '../../store/use-context';
import { useNavigate } from 'react-router-dom';

const Features = () => {
    const navigate = useNavigate();
    const currPage = '3';
    const ctx = useContext(AppContext);
    const [auth, setAuth] = useState(false);
    const [errors, setErrors] = useState({
        nonVegAllowed: false,
        petsAllowed: false,
        electricityStatus: false,
        waterSupply: false,
        furnishing: false,
        tiles: false,
        gatedSecurity: false
    });

    const handleValidation = () => {
        let formIsValid = true;
        let newErrors = {
            nonVegAllowed: false,
            petsAllowed: false,
            electricityStatus: false,
            waterSupply: false,
            furnishing: false,
            tiles: false,
            gatedSecurity: false
        };

        if (!ctx.nonVegAllowed) {
            newErrors.nonVegAllowed = true;
            formIsValid = false;
        }
        if (!ctx.petsAllowed) {
            newErrors.petsAllowed = true;
            formIsValid = false;
        }
        if (!ctx.electricityStatus) {
            newErrors.electricityStatus = true;
            formIsValid = false;
        }
        if (!ctx.waterSupply) {
            newErrors.waterSupply = true;
            formIsValid = false;
        }
        if (!ctx.furnishing) {
            newErrors.furnishing = true;
            formIsValid = false;
        }
        if (!ctx.tiles) {
            newErrors.tiles = true;
            formIsValid = false;
        }
        if (!ctx.gatedSecurity) {
            newErrors.gatedSecurity = true;
            formIsValid = false;
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleSubmit = () => {
        if (handleValidation()) {
            setAuth(true);
            // Proceed with form submission logic
        } else {
            return
        }
        navigate('/list-your-property/pricing-details');
    };

    const nonVegAllowedHandler = (e) => {
        ctx.setNonVegAllowed(e.target.value);
    };

    useEffect(() => {
        ctx.setNonVegAllowed(ctx.nonVegAllowed);
    }, [ctx.nonVegAllowed]);

    const petsAllowedHandler = (e) => {
        ctx.setPetsAllowed(e.target.value);
    };

    useEffect(() => {
        ctx.setPetsAllowed(ctx.petsAllowed);
    }, [ctx.petsAllowed]);

    const electricityStatusHandler = (e) => {
        ctx.setElectricityStatus(e.target.value);
    };

    useEffect(() => {
        ctx.setElectricityStatus(ctx.electricityStatus);
    }, [ctx.electricityStatus]);

    const waterSupplyHandler = (e) => {
        ctx.setWaterSupply(e.target.value);
    };

    useEffect(() => {
        ctx.setWaterSupply(ctx.waterSupply);
    }, [ctx.waterSupply]);

    const furnishingHandler = (e) => {
        ctx.setFurnishing(e.target.value);
    };

    useEffect(() => {
        ctx.setFurnishing(ctx.furnishing);
    }, [ctx.furnishing]);

    const tilesHandler = (e) => {
        ctx.setTiles(e.target.value);
    };

    useEffect(() => {
        ctx.setTiles(ctx.tiles);
    }, [ctx.tiles]);

    const safetyhandler = (e) => {
        ctx.setGatedSecurity(e.target.value);
    };

    useEffect(() => {
        ctx.setGatedSecurity(ctx.gatedSecurity);
    }, [ctx.gatedSecurity]);

    return (
        <Fragment>
            <SellersFlow currPage={currPage} handleSubmit={handleSubmit}>
                <div onSubmit={handleSubmit}>
                    <div className='headline'>
                        <p>General Features</p>
                    </div>

                    <div className="identity">
                        <img src={imp} alt="imp" className="imp" />
                        <p>Non-Veg</p>
                    </div>
                    <div className="radio-group">
                        <div className="radio-option">
                            <input type="radio" id="nonVegAllowed" name="nonVegAllowed" value="Allowed" onChange={nonVegAllowedHandler} />
                            <label htmlFor="nonVegAllowed">Allowed</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="nonVegNotAllowed" name="nonVegAllowed" value="Not-Allowed" onChange={nonVegAllowedHandler} />
                            <label htmlFor="nonVegNotAllowed">Not Allowed</label>
                        </div>
                    </div>
                    {errors.nonVegAllowed && <div className="error">Non-Veg selection is required</div>}

                    <div className="identity">
                        <img src={imp} alt="imp" className="imp" />
                        <p>Pets Allowed</p>
                    </div>
                    <div className="radio-group">
                        <div className="radio-option">
                            <input type="radio" id="petsAllowed" name="petsAllowed" value="Yes" onChange={petsAllowedHandler} />
                            <label htmlFor="petsAllowed">Yes</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="petsNotAllowed" name="petsAllowed" value="No" onChange={petsAllowedHandler} />
                            <label htmlFor="petsNotAllowed">No</label>
                        </div>
                    </div>
                    {errors.petsAllowed && <div className="error">Pets Allowed selection is required</div>}

                    <div className="identity">
                        <img src={imp} alt="imp" className="imp" />
                        <p>Electricity</p>
                    </div>
                    <div className="radio-group">
                        <div className="radio-option">
                            <input type="radio" id="noCut" name="electricityStatus" value="Rare/No Powercut" onChange={electricityStatusHandler} />
                            <label htmlFor="noCut">Rare/No Powercut</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="cut" name="electricityStatus" value="Frequent Powercut" onChange={electricityStatusHandler} />
                            <label htmlFor="cut">Frequent Powercut</label>
                        </div>
                    </div>
                    {errors.electricityStatus && <div className="error">Electricity selection is required</div>}

                    <div className="identity">
                        <img src={imp} alt="imp" className="imp" />
                        <p>Water Supply</p>
                    </div>
                    <div className="radio-group">
                        <div className="radio-option">
                            <input type="radio" id="municipal" name="waterSupply" value="Municipal Corporation (BMC)" onChange={waterSupplyHandler} />
                            <label htmlFor="municipal">Municipal Corporation (BMC)</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="borewell" name="waterSupply" value="Borewell" onChange={waterSupplyHandler} />
                            <label htmlFor="borewell">Borewell</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="both" name="waterSupply" value="Both" onChange={waterSupplyHandler} />
                            <label htmlFor="both">Both</label>
                        </div>
                    </div>
                    {errors.waterSupply && <div className="error">Water Supply selection is required</div>}

                    <div className='line'></div>

                    <div className="identity">
                        <img src={imp} alt="imp" className="imp" />
                        <p>Furnishing</p>
                    </div>
                    <div className="radio-group">
                        <div className="radio-option" style={{ width: "33%" }}>
                            <input type="checkbox" id="full" name="furnishing" value="Fully Furnished (BMC)" onChange={furnishingHandler} />
                            <label htmlFor="full">Fully Furnished (BMC)</label>
                        </div>
                        <div className="radio-option">
                            <input type="checkbox" id="semi" name="furnishing" value="Semi Furnished" onChange={furnishingHandler} />
                            <label htmlFor="semi">Semi Furnished</label>
                        </div>
                        <div className="radio-option">
                            <input type="checkbox" id="unfurnished" name="furnishing" value="Unfurnished" onChange={furnishingHandler} />
                            <label htmlFor="unfurnished">Unfurnished</label>
                        </div>
                    </div>
                    {errors.furnishing && <div className="error">Furnishing selection is required</div>}

                    <div className='line'></div>

                    <div className="identity">
                        <p>Tiles</p>
                    </div>
                    <div className="radio-group">
                        <div className="radio-option" style={{ width: "33%" }}>
                            <input type="checkbox" id="white" name="tiles" value="Normal White Tiles" onChange={tilesHandler} />
                            <label htmlFor="white">Normal White Tiles</label>
                        </div>
                        <div className="radio-option">
                            <input type="checkbox" id="marble" name="tiles" value="Marble" onChange={tilesHandler} />
                            <label htmlFor="marble">Marble</label>
                        </div>
                        <div className="radio-option">
                            <input type="checkbox" id="vitrified" name="tiles" value="Vitrified Tiles" onChange={tilesHandler} />
                            <label htmlFor="vitrified">Vitrified Tiles</label>
                        </div>
                    </div>
                    {errors.tiles && <div className="error">Tiles selection is required</div>}

                    <div className='line'></div>

                    <div className="identity">
                        <img src={imp} alt="imp" className="imp" />
                        <p>Safety</p>
                    </div>
                    <div className="radio-group">
                        <div className="radio-option">
                            <input type="checkbox" id="personnel" name="security" value="yes" onChange={safetyhandler} />
                            <label htmlFor="Rent">24/7 Security personnel (Gated Security)</label>
                        </div>
                        <div className="radio-option">
                            <input type="checkbox" id="cctv" name="security" value="no" onChange={safetyhandler} />
                            <label htmlFor="Sale">Security Systems- CCTV</label>
                        </div>
                    </div>
                    {errors.gatedSecurity && <div className="error">Safety selection is required</div>}

                    <div className='line'></div>

                    <div className="identity">
                        <p>SOCIETY AMENITIES</p>
                    </div>

                    <FeaturesPic />

                    <div className='bottom'></div>

                </div>
            </SellersFlow>
        </Fragment>
    );
};

export default Features;
