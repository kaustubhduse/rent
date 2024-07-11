import './ModalPage.css'
import Modal from '../UI/Modal';
import imp from '../../assets/imp.png';
import { useNavigate } from 'react-router-dom';



const ModalPage = () => {
    const navigate = useNavigate();
    const confirmHandler = () => {
        navigate('/list-your-property/confirmationPage');
    }
   return(
    <Modal>
        <div className="modal-page">
            <p>POST PROPERTY ON DYLAN ESTATE?<img src={imp} alt='important' className='imp' /></p>
            
            <button className='button' onClick={confirmHandler}>Continue</button>
            <div className='content'>
            <p className='p1'>By continuing you agree to our </p>
            <p className='p2'>Terms and Conditions & Privacy Policy</p>
            </div>
        </div>
    </Modal>
   )
}

export default ModalPage;