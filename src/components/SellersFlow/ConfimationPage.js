import './ConfirmationPage.css';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
   const navigate = useNavigate();
   const priewPropertyHandler = () => {
      navigate('/list-your-property/previewpage');
   }
   return(
    <div className='confirm-page'>
      <p className='first-c'>Thank you for listing your property with us,</p>
      <p className='second-c'>Your listing will be reviewed and will go live within 24 hours.</p>
      <p className='third-c'>We will now manage your listing and get in touch with you after finding the best suitable tenant<br></br> as per your preference. 
      </p>
      <p className='fourth-c'>-Dylan Estates</p>
      <div className='all-buttons'>
        <button className='button'>Edit Property Listing</button>
        <button className='button' onClick={priewPropertyHandler}>Preview Property Listing</button>
      </div>
    </div>
   )
}

export default ConfirmationPage;