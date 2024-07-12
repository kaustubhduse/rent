import "./PriceDetails.css";
import { Fragment, useState, useEffect, useContext } from "react";
import SellersFlow from "../SellersFlow/SellersFlow";
import imp from "../../assets/imp.png";
import { useNavigate } from "react-router-dom";
import AppContext from "../../store/use-context";

const PriceDetails = () => {
  const navigate = useNavigate();
  const currPage = "4";
  const ctx = useContext(AppContext);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // No need to update context state here, values are directly from context
    ctx.setRent(ctx.rent);
    ctx.setSecurity(ctx.security);
    ctx.setIsMaintainence(ctx.isMaintainence);
    ctx.setExtraMaintainence(ctx.extraMaintainence);
    
  }, [ctx]);

  const handleRentChange = (event) => {
    ctx.setRent(event.target.value);
  };

  const handleSecurityChange = (event) => {
    ctx.setSecurity(event.target.value);
  };

  const handleMaintainence = (event) => {
    ctx.setIsMaintainence(event.target.value);
  };

  const handleExtraMaintainenceChange = (event) => {
    ctx.setExtraMaintainence(event.target.value);
  };

  const validateForm = () => {
    let errors = {};
    if (!ctx.rent.trim()) {
      errors.rent = "Rent amount is required.";
    }
    if (!ctx.security.trim()) {
      errors.security = "Security amount is required.";
    }
    if (!ctx.isMaintainence.trim()) {
      errors.isMaintainence = "Maintenance type is required.";
    }
    if (ctx.isMaintainence === "extra" && !ctx.extraMaintainence.trim()) {
      errors.extraMaintainence = "Extra maintenance amount is required.";
    }
    return errors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({}); // Clear errors if validation passes
    // Proceed with further actions like saving to context or backend
    navigate('/list-your-property/property-images');
  };

  return (
    <Fragment>
      <SellersFlow currPage={currPage} handleSubmit={handleSubmit}>
        <div className="square" style={{ marginTop: "-3rem" }}>
          <div className="square-area">
            <p>
              Rent <img src={imp} alt="important" className="imp" />
            </p>
            <input
              type="text"
              placeholder="₹"
              className="text-box"
              value={ctx.rent}
              onChange={handleRentChange}
            />
            {errors.rent && <p className="error">{errors.rent}</p>}
          </div>
          <div className="square-area">
            <p>
              Security <img src={imp} alt="important" className="imp" />
            </p>
            <input
              type="text"
              placeholder="₹"
              className="text-box"
              value={ctx.security}
              onChange={handleSecurityChange}
            />
            {errors.security && <p className="error">{errors.security}</p>}
          </div>
        </div>

        <div className="square">
          <div className="square-area">
            <p>
              Maintenance <img src={imp} alt="important" className="imp" />
            </p>
            <select
              className="text-box"
              value={ctx.isMaintainence}
              onChange={handleMaintainence}
            >
              <option value="" disabled className="disabled-option">Maintenance</option>
              <option value="rent">Included in rent</option>
              <option value="extra">Extra maintenance</option>
            </select>
            {errors.isMaintainence && <p className="error">{errors.isMaintainence}</p>}
          </div>
          {ctx.isMaintainence === "extra" && (
            <div className="square-area">
              <p>
                Extra Maintenance <img src={imp} alt="important" className="imp" />
              </p>
              <input
                type="text"
                placeholder="₹ Extra Maintenance"
                className="text-box"
                value={ctx.extraMaintainence}
                onChange={handleExtraMaintainenceChange}
              />
              {errors.extraMaintainence && <p className="error">{errors.extraMaintainence}</p>}
            </div>
          )}
        </div>

        {ctx.isMaintainence === "extra" && (
          <div className="square-area">
            <p>Additional Pricing details to convey to agent?</p>
            <input
              style={{ height: "5rem" }}
              type="text"
              placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us."
              className="property-description"
            />
          </div>
        )}

        <div className="leave-margin"></div>
      </SellersFlow>
    </Fragment>
  );
};

export default PriceDetails;
