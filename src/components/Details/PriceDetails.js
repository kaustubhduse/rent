import "./PriceDetails.css";
import { Fragment, useState } from "react";
import SellersFlow from "../SellersFlow/SellersFlow";
import imp from "../../assets/imp.png";
import { useNavigate } from "react-router-dom";

const PriceDetails = () => {
  const navigate = useNavigate();
  const currPage = "4";
  const [rent, setRent] = useState("");
  const [security, setSecurity] = useState("");
  const [isMaintainence, setIsMaintainence] = useState("");
  const [extraMaintainence, setExtraMaintainence] = useState("");
  const [errors, setErrors] = useState({});

  const handleRentChange = (event) => {
    setRent(event.target.value);
  };

  const handleSecurityChange = (event) => {
    setSecurity(event.target.value);
  };

  const handleMaintainence = (event) => {
    setIsMaintainence(event.target.value);
  };

  const handleExtraMaintainenceChange = (event) => {
    setExtraMaintainence(event.target.value);
  };

  const validateForm = () => {
    let errors = {};
    if (!rent.trim()) {
      errors.rent = "Rent amount is required.";
    }
    if (!security.trim()) {
      errors.security = "Security amount is required.";
    }
    if (!isMaintainence.trim()) {
      errors.Maintainence = "Maintainence is required.";
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
              value={rent}
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
              value={security}
              onChange={handleSecurityChange}
            />
            {errors.security && <p className="error">{errors.security}</p>}
          </div>
        </div>

        <div className="square">
          <div className="square-area">
            <p>
              Maintainence <img src={imp} alt="important" className="imp" />
            </p>
            <select
              className="text-box"
              value={isMaintainence}
              onChange={handleMaintainence}
            >
              <option value="" disabled className="disabled-option">Maintainence</option>
              <option value="rent">Included in rent</option>
              <option value="extra">Extra maintainence</option>
            </select>
            {errors.Maintainence && <p className="error">{errors.Maintainence}</p>}
          </div>
          <div className="square-area">
            <p style={{ marginLeft: "8rem" }}>
              Maintainence <img src={imp} alt="important" className="imp" />
            </p>
            <input
              type="text"
              placeholder="₹   Maintainence"
              className="text-box"
              style={{ width: "53%", marginLeft: "8rem" }}
              onChange={handleExtraMaintainenceChange}
            />
             {errors.extraMaintainence && <p className="error">{errors.extraMaintainence}</p>}
          </div>
          <div className="square-area">
            <input
              type="text"
              placeholder="Monthly"
              className="text-box"
              style={{
                width: "53%",
                marginTop: "1.5rem",
                marginLeft: "2.5rem",
              }}
            />
          </div>
        </div>

        {isMaintainence === "extra" && (
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
