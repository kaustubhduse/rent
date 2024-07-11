import React from 'react';
import './Footer.css';

const Footer = ({currPage, handleSubmit}) => {

    

    return (
        <div className="form-end">
          <div className="form-actions">
            <p className="need-help">Need Help?</p>
            <p className="phoneno">Call 999999999</p>
            {currPage!=5 && <button type="submit" className="submit" >NEXT</button>}
            {currPage==5 && <button type="submit" className="submit">SAVE AND POST</button>}
          </div>
        </div>
    );
}

export default Footer;
