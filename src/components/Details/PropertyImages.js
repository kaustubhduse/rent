import './PropertyImages.css';
import { Fragment, useRef } from 'react';
import SellersFlow from '../SellersFlow/SellersFlow';
import camera from '../../assets/camera.png';

const PropertyImages = () => {
    const currPage = '5';
    const fileInputRef = useRef(null);

    const handleAddPhotosClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (event) => {
        const files = event.target.files;
        // Handle file upload logic here
        console.log(files);
    }

    return (
        <Fragment>
            <SellersFlow currPage={currPage}>
                <p className='first-line'>Add Photos / videos to attract more tenants! </p>
                <p className='second-line'>Add Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood, etc</p>
                <div className="add-photos" onClick={handleAddPhotosClick}>
                    <img src={camera} alt="camera" className='camera-icon'/>
                    <div className="add-photos-text"><p>+  Add Photos New</p></div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        multiple
                    />
                </div>
            </SellersFlow>
        </Fragment>
    );
}

export default PropertyImages;
