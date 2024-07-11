import './HomePageFooter.css';
import React from 'react';

const HomePageFooter = ({ submitHandler }) => {
    return (
        <form className="ending" onSubmit={submitHandler}>
            <div className="home-form-actions">
                <p className="home-need-help">Need Help?</p>
                <p className='home-phoneno'>Call 999999999</p>
                <button type="submit" className="home-submit">Next</button>
            </div>
        </form>
    );
};

export default HomePageFooter;
