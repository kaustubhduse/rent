import { Fragment } from "react";
import "./HomePage.css";
import tick from "../../assets/tick.png";
import HomePageForm from "./HomePageForm";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="description">
        <p className="big">Sell or Rent your Property For Free</p>
        <p className="small">
          Whether you're ready to sell or looking for answers, we'll guide you
          with data and expertise specific to your needs.
        </p>
      </div>
      <div className="form-back">
        <div className="steps">
          <p className="steps-title">Upload your property in 4 simple steps</p>
          <div className="step-details">
            <div className="each-step">
              <img src={tick} alt="tick" className="tick" />
              <p className="step-text">Add your property's Basic Details</p>
            </div>
            <div className="each-step">
              <img src={tick} alt="tick" className="tick" />
              <p className="step-text">Add property Location</p>
            </div>
            <div className="each-step">
              <img src={tick} alt="tick" className="tick" />
              <p className="step-text">Add property Features and amenities</p>
            </div>
            <div className="each-step">
              <img src={tick} alt="tick" className="tick" />
              <p className="step-text">Add Price details</p>
            </div>
            <div className="each-step">
              <img src={tick} alt="tick" className="tick" />
              <p className="step-text">Add your best Property Shots</p>
            </div>
          </div>
        </div>
        <HomePageForm />
      </div>
    </div>
  );
};

export default HomePage;
