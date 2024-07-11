import React from "react";
import imp from "../../assets/imp.png";
import countries from "../Countries";
import "./FormFilling.css";

const FormFilling = ({
  formState,
  errors,
  onUserTypeChange,
  onNameChange,
  onPhoneNumberChange,
  onEmailChange,
  onSubmit,
}) => {
  return (
    <div className="whole-form">
      <form className="form" onSubmit={onSubmit}>
        <div className="information">
          <div className="identity">
            <img src={imp} alt="imp" className="imp" />
            <p>I am:</p>
          </div>
          <div className="radio-group">
            <div className="radio-option">
              <input
                type="radio"
                id="owner"
                name="userType"
                value="owner"
                checked={formState.userType === "owner"}
                onChange={onUserTypeChange}
              />
              <label htmlFor="owner">Owner</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="builder"
                name="userType"
                value="builder"
                checked={formState.userType === "builder"}
                onChange={onUserTypeChange}
              />
              <label htmlFor="builder">Builder</label>
            </div>
          </div>
          {errors.userType && <p className="error">{errors.userType}</p>}

          <div className="name">
            <label htmlFor="name">
              Your Name <img src={imp} alt="imp" className="imp1" />
            </label>
            <div className="name-input">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="rec-box"
                value={formState.name}
                onChange={onNameChange}
              />
            </div>
          </div>
          {errors.name && <p className="error">{errors.name}</p>}

          <div className="name">
            <label htmlFor="country">
              Country <img src={imp} alt="imp" className="imp1" />
            </label>
            <div className="name-input">
              <select
                id="country"
                name="country"
                defaultValue="India"
                className="rec-box"
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="name">
            <label htmlFor="phoneCode">
              Phone <img src={imp} alt="imp" className="imp1" />
            </label>
            <div className="name-input">
              <select
                id="phoneCode"
                name="phoneCode"
                defaultValue="91"
                className="small-rec-box"
              >
                <option value="91">+91</option>
                <option value="1">+1</option>
                {/* Add more options as needed */}
              </select>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                className="big-rec-box"
                value={formState.phoneNumber}
                onChange={onPhoneNumberChange}
              />
            </div>
          </div>
          {errors.phone && <p className="error">{errors.phone}</p>}

          <div className="or">
            <label htmlFor="or">OR</label>
          </div>

          <div className="name-marg">
            <label htmlFor="email">
              Email <img src={imp} alt="imp" className="imp1" />
            </label>
            <div className="name-input">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="rec-box"
                value={formState.email}
                onChange={onEmailChange}
              />
            </div>
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
          {errors.contact && <p className="error">{errors.contact}</p>}
        </div>
      </form>
    </div>
  );
};

export default FormFilling;
