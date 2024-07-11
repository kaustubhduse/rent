// SellersFlow.jsx
import React from "react";
import "./SellersFlow.css"; // Import the CSS file where you added the .sellers-flow class
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const SellersFlow = ({ children, currPage, handleSubmit }) => {

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        
        if(currPage === '1'){
          handleSubmit();
        }

        if(currPage === '2'){
          handleSubmit();
          
        }

        if(currPage === '3'){
          handleSubmit();
        }

        if(currPage === '4'){
          handleSubmit();
        }

        if(currPage === '5'){
          navigate('/list-your-property/modal');
        }
    }

  return (
    <form className="sellers-flow" onSubmit={submitHandler}>
      <div className="seller-box">
        <div className="index-box">
          <div className="upper-box">
            <div className={currPage === '1' ? "box-highlighted" : "normal-box"} 
              style={{ borderRadius: '16px 0px 0px 0px' }}>
              <p>
                PROPERTY<br></br> DETAILS
              </p>
            </div>
            <div className={currPage === '2' ? "box-highlighted" : "normal-box"}>
              <p>
                LOCATION<br></br>DETAILS
              </p>
            </div>
            <div className={currPage === '3' ? "box-highlighted" : "normal-box"}>
              <p>
                FEATURES &<br></br> AMENITIES
              </p>
            </div>
            <div className={currPage === '4' ? "box-highlighted" : "normal-box"}>
              <p>PRICE DETAILS</p>
            </div>
            <div className={currPage === '5' ? "box-highlighted" : "normal-box"}
               style={{ borderRadius: '0px 16px 0px 0px'}}> 
              <p>
                PROPERTY<br></br>IMAGES
              </p>
            </div>
          </div>
          <div className="small-box"></div>
        </div>
        <div className="full-box">
          <div className="content-box">{children}</div>
        </div>
        <Footer currPage={currPage}/>
      </div>
    </form>
  );
};

export default SellersFlow;
