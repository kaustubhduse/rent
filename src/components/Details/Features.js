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

    const [nonVegAllowed, setNonVegAllowed] = useState(ctx.nonVegAllowed);
    const [petsAllowed, setPetsAllowed] = useState(ctx.petsAllowed);
    const [electricityStatus, setElectricityStatus] = useState(ctx.electricityStatus);
    const [waterSupply, setWaterSupply] = useState(ctx.waterSupply);
    const [furnishing, setFurnishing] = useState(ctx.furnishing);
    const [tiles, setTiles] = useState(ctx.tiles);
    const [gatedSecurity, setGatedSecurity] = useState(ctx.gatedSecurity);

    useEffect(() => {
        setNonVegAllowed(ctx.nonVegAllowed);
        setPetsAllowed(ctx.petsAllowed);
        setElectricityStatus(ctx.electricityStatus);
        setWaterSupply(ctx.waterSupply);
        setFurnishing(ctx.furnishing);
        setTiles(ctx.tiles);
        setGatedSecurity(ctx.gatedSecurity);
    }, [ctx.nonVegAllowed, ctx.petsAllowed, ctx.electricityStatus, ctx.waterSupply, ctx.furnishing, ctx.tiles, ctx.gatedSecurity]);

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

        if (!nonVegAllowed) {
            newErrors.nonVegAllowed = true;
            formIsValid = false;
        }
        if (!petsAllowed) {
            newErrors.petsAllowed = true;
            formIsValid = false;
        }
        if (!electricityStatus) {
            newErrors.electricityStatus = true;
            formIsValid = false;
        }
        if (!waterSupply) {
            newErrors.waterSupply = true;
            formIsValid = false;
        }
        if (!furnishing) {
            newErrors.furnishing = true;
            formIsValid = false;
        }
        if (!tiles) {
            newErrors.tiles = true;
            formIsValid = false;
        }
        if (!gatedSecurity) {
            newErrors.gatedSecurity = true;
            formIsValid = false;
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleSubmit = () => {
        if (handleValidation()) {
            setAuth(true);
            ctx.setNonVegAllowed(nonVegAllowed);
            ctx.setPetsAllowed(petsAllowed);
            ctx.setElectricityStatus(electricityStatus);
            ctx.setWaterSupply(waterSupply);
            ctx.setFurnishing(furnishing);
            ctx.setTiles(tiles);
            ctx.setGatedSecurity(gatedSecurity);
            navigate('/list-your-property/pricing-details');
        } else {
            return;
        }
    };

    return (
        <Fragment>
            <SellersFlow currPage={currPage} handleSubmit={handleSubmit}>
                <div>
                    <div className='headline'>
                        <p>General Features</p>
                    </div>

                    <div className="identity">
                        <img src={imp} alt="imp" className="imp" />
                        <p>Non-Veg</p>
                    </div>
                    <div className="radio-group">
                        <div className="radio-option">
                            <input type="radio" id="nonVegAllowed" name="nonVegAllowed" value="Allowed" checked={nonVegAllowed === "Allowed"} onChange={(e) => setNonVegAllowed(e.target.value)} />
                            <label htmlFor="nonVegAllowed">Allowed</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="nonVegNotAllowed" name="nonVegAllowed" value="Not-Allowed" checked={nonVegAllowed === "Not-Allowed"} onChange={(e) => setNonVegAllowed(e.target.value)} />
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
                            <input type="radio" id="petsAllowed" name="petsAllowed" value="Yes" checked={petsAllowed === "Yes"} onChange={(e) => setPetsAllowed(e.target.value)} />
                            <label htmlFor="petsAllowed">Yes</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="petsNotAllowed" name="petsAllowed" value="No" checked={petsAllowed === "No"} onChange={(e) => setPetsAllowed(e.target.value)} />
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
                            <input type="radio" id="noCut" name="electricityStatus" value="Rare/No Powercut" checked={electricityStatus === "Rare/No Powercut"} onChange={(e) => setElectricityStatus(e.target.value)} />
                            <label htmlFor="noCut">Rare/No Powercut</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="cut" name="electricityStatus" value="Frequent Powercut" checked={electricityStatus === "Frequent Powercut"} onChange={(e) => setElectricityStatus(e.target.value)} />
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
                            <input type="radio" id="municipal" name="waterSupply" value="Municipal Corporation (BMC)" checked={waterSupply === "Municipal Corporation (BMC)"} onChange={(e) => setWaterSupply(e.target.value)} />
                            <label htmlFor="municipal">Municipal Corporation (BMC)</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="borewell" name="waterSupply" value="Borewell" checked={waterSupply === "Borewell"} onChange={(e) => setWaterSupply(e.target.value)} />
                            <label htmlFor="borewell">Borewell</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="both" name="waterSupply" value="Both" checked={waterSupply === "Both"} onChange={(e) => setWaterSupply(e.target.value)} />
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
                            <input type="checkbox" id="full" name="furnishing" value="Fully Furnished (BMC)" checked={furnishing === "Fully Furnished (BMC)"} onChange={(e) => setFurnishing(e.target.value)} />
                            <label htmlFor="full">Fully Furnished (BMC)</label>
                        </div>
                        <div className="radio-option">
                            <input type="checkbox" id="semi" name="furnishing" value="Semi Furnished" checked={furnishing === "Semi Furnished"} onChange={(e) => setFurnishing(e.target.value)} />
                            <label htmlFor="semi">Semi Furnished</label>
                        </div>
                        <div className="radio-option">
                            <input type="checkbox" id="unfurnished" name="furnishing" value="Unfurnished" checked={furnishing === "Unfurnished"} onChange={(e) => setFurnishing(e.target.value)} />
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
                            <input type="checkbox" id="white" name="tiles" value="Normal White Tiles" checked={tiles === "Normal White Tiles"} onChange={(e) => setTiles(e.target.value)} />
                            <label htmlFor="white">Normal White Tiles</label>
                        </div>
                        <div className="radio-option">
                            <input type="checkbox" id="marble" name="tiles" value="Marble" checked={tiles === "Marble"} onChange={(e) => setTiles(e.target.value)} />
                            <label htmlFor="marble">Marble</label>
                        </div>
                        <div className="radio-option">
                            <input type="checkbox" id="vitrified" name="tiles" value="Vitrified Tiles" checked={tiles === "Vitrified Tiles"} onChange={(e) => setTiles(e.target.value)} />
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
                            <input type="checkbox" id="personnel" name="security" value="yes" checked={gatedSecurity === "yes"} onChange={(e) => setGatedSecurity(e.target.value)} />
                            <label htmlFor="Rent">24/7 Security personnel (Gated Security)</label>
                        </div>
                        <div className="radio-option">
                            <input type="checkbox" id="cctv" name="security" value="no" checked={gatedSecurity === "no"} onChange={(e) => setGatedSecurity(e.target.value)} />
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
