import './PropertyImages.css';
import { Fragment, useRef, useContext } from 'react';
import SellersFlow from '../SellersFlow/SellersFlow';
import camera from '../../assets/camera.png';
import AppContext from '../../store/use-context';

const PropertyImages = () => {
    const ctx = useContext(AppContext);
    const currPage = '5';
    const fileInputRef = useRef(null);

    const handleAddPhotosClick = () => {
        fileInputRef.current.click();
    }

    console.log(ctx.propertyImages);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const imagesArray = [];
    
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = e.target.result;
                imagesArray.push(imageData);
                ctx.setPropertyImages(imagesArray); // Update context with the selected image data
            };
            reader.readAsDataURL(file);
        });
    };
    
    

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
