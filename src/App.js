import Navigation from "./components/Navbar";
import HomePage from "./components/HomePage/HomePage";
import PropertyDetails from "./components/Details/PropertyDetails";
import LocationDetails from "./components/Details/LocationDetails";
import Features from "./components/Details/Features";
import PriceDetails from "./components/Details/PriceDetails";
import PropertyImages from "./components/Details/PropertyImages";
import ModalPage from "./components/SellersFlow/ModalPage";
import ConfirmationPage from "./components/SellersFlow/ConfimationPage";
import PreviewPage from "./components/Preview/PreviewPage";
import Review from "./components/Preview/Review";
import { AppContextProvider } from "./store/use-context";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <AppContextProvider>
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route
            path="/"
            exact
            element={<Navigate to="/list-your-property" />}
          />
          <Route path="/list-your-property" exact element={<HomePage />} />
          <Route
            path="/list-your-property/property-details"
            exact
            element={<PropertyDetails />}
          />
          <Route
            path="/list-your-property/location-details"
            exact
            element={<LocationDetails />}
          />
          <Route
            path="/list-your-property/features-and-amenities"
            exact
            element={<Features/>}
          />
          <Route
            path="/list-your-property/pricing-details"
            exact
            element={<PriceDetails />}
          />
          <Route
            path="/list-your-property/property-images"
            exact
            element={<PropertyImages/>}
          />
          <Route
            path="/list-your-property/modal"
            exact
            element={<ModalPage/>}
          />
          <Route
            path="/list-your-property/confirmationPage"
            exact
            element={<ConfirmationPage/>}
          />
          <Route
            path="/list-your-property/previewpage"
            exact
            element={<PreviewPage/>}
          />
          <Route
            path="/list-your-property/previewpage/review"
            exact
            element={<Review/>}
          />
          

          <Route path="*" exact element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
    </AppContextProvider>
  );
}

export default App;
