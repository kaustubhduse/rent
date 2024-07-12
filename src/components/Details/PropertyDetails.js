import React, { Fragment, useState, useContext, useEffect } from "react";
import SellersFlow from "../SellersFlow/SellersFlow";
import imp from "../../assets/imp.png";
import "./PropertyDetails.css";
import SmallCard from "../UI/SmallCard";
import AppContext from "../../store/use-context";
import { useNavigate } from "react-router-dom";

const PropertyDetails = () => {
  const navigate = useNavigate();
  const ctx = useContext(AppContext);
  const PropertyFacing = [
    "North",
    "South",
    "East",
    "West",
    "North-East",
    "North-West",
    "South-East",
    "South-West",
  ];

  const [isresidential, setIsResidential] = useState(
    ctx.propertyType &&
      ["Flat Apartment", "House / Villa"].includes(ctx.propertyType)
      ? "Residential"
      : ""
  );
  const [iscommercial, setIsCommercial] = useState(
    ctx.propertyType &&
      !["Flat Apartment", "House / Villa"].includes(ctx.propertyType) &&
      ctx.propertyType !== "Land / Plot"
      ? "Commercial"
      : ""
  );
  const [island, setIsLand] = useState(
    ctx.propertyType === "Land / Plot" ? "Land / Plot" : ""
  );
  const [propertyFor, setPropertyFor] = useState(ctx.propertyFor || "");
  const [errors, setErrors] = useState({});

  const handlePropertyFor = (event) => {
    setPropertyFor(event.target.value);
    ctx.setPropertyFor(event.target.value);
  };

  const handleResidential = (event) => {
    setIsResidential(event.target.value);
    setIsCommercial("");
    setIsLand("");
  };

  const handleCommercial = (event) => {
    setIsCommercial(event.target.value);
    setIsResidential("");
    setIsLand("");
  };

  const handleLand = (event) => {
    setIsLand(event.target.value);
    setIsResidential("");
    setIsCommercial("");
  };

  const handleValidation = () => {
    let errors = {};
    if (!propertyFor) {
      errors.propertyFor = "Please select property for";
    }
    if (!isresidential && !iscommercial && !island) {
      errors.propertyType = "Please select a property type";
    }
    if (!ctx.sqft) {
      errors.sqft = "Built up area is required";
    }
    if (!ctx.propertyOnFloor) {
      errors.propertyOnFloor = "Property floor number is required";
    }
    if (!ctx.totalFloors) {
      errors.totalFloors = "Total floors is required";
    }
    if (!ctx.facing) {
      errors.facing = "Property facing direction is required";
    }
    if (!ctx.propertyAge) {
      errors.propertyAge = "Property age is required";
    }
    if (!ctx.bedrooms) {
      errors.bedrooms = "Number of bedrooms is required";
    }
    if (!ctx.bathrooms) {
      errors.bathrooms = "Number of bathrooms is required";
    }
    if (!ctx.balcony) {
      errors.balcony = "Number of balconies is required";
    }
    if (!ctx.tenantPreference) {
      errors.tenantPreference = "Tenant preference is required";
    }
    if (!ctx.availability) {
      errors.availability = "Availability is required";
    }
    if (!ctx.description) {
      errors.description = "Property description is required";
    }
    return errors;
  };

  const handleSubmit = () => {
    const validationErrors = handleValidation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    navigate("/list-your-property/location-details");
  };

  const currPage = "1";

  //1
  const propertyTypeHandler = (propertyType) => {
    ctx.setPropertyType(propertyType);
  };

  //2
  const builtupAreaHandler = (event) => {
    ctx.setSqft(event.target.value);
  };
  useEffect(() => {
    ctx.setSqft(ctx.sqft);
    console.log(ctx.sqft);
  }, [ctx.sqft]);

  //3
  const propertyOnFloorHandler = (event) => {
    ctx.setPropertyOnFloor(event.target.value);
  };
  useEffect(() => {
    ctx.setPropertyOnFloor(ctx.propertyOnFloor);
  }, [ctx.propertyOnFloor]);

  //4
  const totalFloorsHandler = (event) => {
    ctx.setTotalFloors(event.target.value);
  };
  useEffect(() => {
    ctx.setTotalFloors(ctx.totalFloors);
  }, [ctx.totalFloors]);

  //5
  const propertyFacingHandler = (event) => {
    ctx.setFacing(event.target.value);
  };
  useEffect(() => {
    ctx.setFacing(ctx.facing);
  }, [ctx.facing]);

  //6
  const propertyAgeHandler = (propertyAge) => {
    ctx.setPropertyAge(propertyAge);
  };
  useEffect(() => {
    ctx.setPropertyAge(ctx.propertyAge);
  }, [ctx.propertyAge]);

  //7
  const bedroomsHandler = (bedrooms) => {
    ctx.setBedrooms(bedrooms);
  };
  useEffect(() => {
    ctx.setBedrooms(ctx.bedrooms);
  }, [ctx.bedrooms]);

  //8
  const bathroomsHandler = (bathrooms) => {
    ctx.setBathrooms(bathrooms);
  };
  useEffect(() => {
    ctx.setBathrooms(ctx.bathrooms);
  }, [ctx.bathrooms]);

  //9
  const balconyHandler = (balcony) => {
    ctx.setBalcony(balcony);
  };
  useEffect(() => {
    ctx.setBalcony(ctx.balcony);
  }, [ctx.balcony]);

  //10
  const tenantPreferenceHandler = (tenantPreference) => {
    ctx.setTenantPreference(tenantPreference);
  };
  useEffect(() => {
    ctx.setTenantPreference(ctx.tenantPreference);
  }, [ctx.tenantPreference]);

  //11
  const availabilityHandler = (availability) => {
    ctx.setAvailability(availability);
  };
  useEffect(() => {
    ctx.setAvailability(ctx.availability);
  }, [ctx.availability]);

  //12
  const descriptionHandler = (event) => {
    ctx.setDescription(event.target.value);
  };
  useEffect(() => {
    ctx.setDescription(ctx.description);
    console.log(ctx.description);
  }, [ctx.description]);

  return (
    <Fragment>
      <SellersFlow currPage={currPage} handleSubmit={handleSubmit}>
        <div className="property-for">
          <img src={imp} alt="important" className="imp" />
          <p>Property For :</p>
        </div>
        <div className="radio-group">
          <div className="radio-option">
            <input
              type="radio"
              id="Rent"
              name="userType"
              value="Rent"
              checked={propertyFor === "Rent"}
              onChange={handlePropertyFor}
            />
            <label htmlFor="Rent">Rent</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="Sale"
              name="userType"
              value="Sale"
              checked={propertyFor === "Sale"}
              onChange={handlePropertyFor}
            />
            <label htmlFor="Sale">Sale</label>
          </div>
        </div>
        {errors.propertyFor && <p className="error">{errors.propertyFor}</p>}

        <div className="property-for-1">
          <img src={imp} alt="important" className="imp" />
          <p>Property Type :</p>
        </div>
        <div className="radio-group">
          <div className="radio-option-1">
            <input
              type="radio"
              id="Residential"
              name="Residential"
              value="Residential"
              checked={isresidential === "Residential"}
              onClick={handleResidential}
            />
            <label htmlFor="Rent">Residential</label>
          </div>
          <div className="radio-option-1">
            <input
              type="radio"
              id="Commercial"
              name="Commercial"
              value="Commercial"
              checked={iscommercial === "Commercial"}
              onClick={handleCommercial}
            />
            <label htmlFor="Sale">Commercial</label>
          </div>
          <div className="radio-option-1">
            <input
              type="radio"
              id="Land / Plot"
              name="Land / Plot"
              value="Land / Plot"
              checked={island === "Land / Plot"}
              onClick={handleLand}
            />
            <label htmlFor="Sale">Land / Plot</label>
          </div>
        </div>

        {isresidential && (
          <div className="residential-box">
            <SmallCard onClick={() => propertyTypeHandler("Flat Apartment")}>
              Flat Apartment
            </SmallCard>
            <SmallCard onClick={() => propertyTypeHandler("House / Villa")}>
              House / Villa
            </SmallCard>
          </div>
        )}
        {iscommercial && (
          <div className="residential-box">
            <SmallCard onClick={() => propertyTypeHandler("Office Space")}>
              Office Space
            </SmallCard>
            <SmallCard onClick={() => propertyTypeHandler("Co Working")}>
              Co Working
            </SmallCard>
            <SmallCard onClick={() => propertyTypeHandler("Restaurant /Cafe")}>
              Restaurant /Cafe
            </SmallCard>
            <SmallCard onClick={() => propertyTypeHandler("Shop / Showroom")}>
              Shop / Showroom
            </SmallCard>
            <SmallCard onClick={() => propertyTypeHandler("Industrial Building")}>
              Industrial Building
            </SmallCard>
            <SmallCard onClick={() => propertyTypeHandler("Industrial Building")}>
              Industrial Shed
            </SmallCard>
            <SmallCard onClick={() => propertyTypeHandler("Warehouse")}>
              Warehouse/Godown
            </SmallCard>
            
          </div>
        )}

        {island && (
          <div className="land-box">
            <SmallCard onClick={() => propertyTypeHandler("Land / Plot")}>
              Land / Plot
            </SmallCard>
          </div>
        )}
        {errors.propertyType && <p className="error">{errors.propertyType}</p>}

        <div className="square">
          <div className="square-area">
            <p>
              Built up Area <img src={imp} alt="important" className="imp" />
            </p>
            <input
              type="number"
              id="built-up-area"
              placeholder="0"
              value={ctx.sqft}
              className="text-box"
              onChange={builtupAreaHandler}
            />
          </div>
          <div className="square-area">
            <p>
              Carpet Area <img src={imp} alt="important" className="imp" />
            </p>
            <input type="text" placeholder="0" className="text-box"  />
          </div>
        </div>
        {errors.sqft && <p className="error">{errors.sqft}</p>}

        <div className="square">
          <div className="square-area">
            <p>
              Property on Floor{" "}
              <img src={imp} alt="important" className="imp" />
            </p>
            <input
              type="text"
              placeholder="Floor"
              className="floor-1"
              onChange={propertyOnFloorHandler}
            />
            {errors.propertyOnFloor && (
              <p className="error">{errors.propertyOnFloor}</p>
            )}
          </div>

          <div className="square-area">
            <p>
              Total Floors <img src={imp} alt="important" className="imp" />
            </p>
            <input
              type="text"
              placeholder="Total Floor"
              className="floor-2"
              onChange={totalFloorsHandler}
            />
            {errors.totalFloors && (
              <p className="error">{errors.totalFloors}</p>
            )}
          </div>

          <div className="square-area">
            <p>
              Property Facing <img src={imp} alt="important" className="imp" />
            </p>
            <select
              id="facing"
              name="property"
              className="floor-3"
              onChange={propertyFacingHandler}
            >
              <option value="">Select</option>
              {PropertyFacing.map((property, index) => (
                <option key={index} value={property}>
                  {property}
                </option>
              ))}
            </select>
            {errors.facing && <p className="error">{errors.facing}</p>}
          </div>
        </div>

        <div className="property-for-1">
          <img src={imp} alt="important" className="imp" />
          <p>Property Age</p>
        </div>
        <div className="property-options">
          <SmallCard onClick={propertyAgeHandler}>Less than 1 Year</SmallCard>
          <SmallCard onClick={propertyAgeHandler}>1- 3 Years</SmallCard>
          <SmallCard onClick={propertyAgeHandler}>3- 5 Years</SmallCard>
          <SmallCard onClick={propertyAgeHandler}>5 - 10 Years</SmallCard>
          <SmallCard onClick={propertyAgeHandler}>
            Greater than 10 Years
          </SmallCard>
        </div>
        {errors.propertyAge && <p className="error">{errors.propertyAge}</p>}

        <div className="property-for-1">
          <img src={imp} alt="important" className="imp" />
          <p>BHK Type</p>
        </div>
        <div className="property-options">
          <SmallCard
            onClick={() => {
              bedroomsHandler("One(0)");
            }}
          >
            1RK
          </SmallCard>
          <SmallCard
            onClick={() => {
              bedroomsHandler("One(1)");
            }}
          >
            1BHK
          </SmallCard>
          <SmallCard
            onClick={() => {
              bedroomsHandler("Two(2)");
            }}
          >
            2BHK
          </SmallCard>
          <SmallCard
            onClick={() => {
              bedroomsHandler("Three(3)");
            }}
          >
            3BHK
          </SmallCard>
          <SmallCard
            onClick={() => {
              bedroomsHandler("Four(4)");
            }}
          >
            4BHK
          </SmallCard>
          <SmallCard
            onClick={() => {
              bedroomsHandler("Five(5+)");
            }}
          >
            5+ BHK
          </SmallCard>
        </div>
        {errors.bedrooms && <p className="error">{errors.bedrooms}</p>}

        <div className="property-for-1">
          <img src={imp} alt="important" className="imp" />
          <p>Bathrooms/Toilets</p>
        </div>
        <div className="property-options">
          <SmallCard
            onClick={() => {
              bathroomsHandler("Zero(0)");
            }}
          >
            0
          </SmallCard>
          <SmallCard
            onClick={() => {
              bathroomsHandler("One(1)");
            }}
          >
            1
          </SmallCard>
          <SmallCard
            onClick={() => {
              bathroomsHandler("Two(2)");
            }}
          >
            2
          </SmallCard>
          <SmallCard
            onClick={() => {
              bathroomsHandler("Three(3)");
            }}
          >
            3
          </SmallCard>
          <SmallCard
            onClick={() => {
              bathroomsHandler("Four(4)");
            }}
          >
            4
          </SmallCard>
          <SmallCard
            onClick={() => {
              bathroomsHandler("Five(5)");
            }}
          >
            5
          </SmallCard>
          <SmallCard
            onClick={() => {
              bathroomsHandler("Six(6+)");
            }}
          >
            6+
          </SmallCard>
        </div>
        {errors.bathrooms && <p className="error">{errors.bathrooms}</p>}

        <div className="property-for-1">
          <img src={imp} alt="important" className="imp" />
          <p>Balcony</p>
        </div>
        <div className="property-options">
          <SmallCard onClick={balconyHandler}>0</SmallCard>
          <SmallCard onClick={balconyHandler}>1</SmallCard>
          <SmallCard onClick={balconyHandler}>2</SmallCard>
          <SmallCard onClick={balconyHandler}>3</SmallCard>
          <SmallCard onClick={balconyHandler}>4+</SmallCard>
        </div>
        {errors.balcony && <p className="error">{errors.balcony}</p>}

        <div className="property-for-1">
          <img src={imp} alt="important" className="imp" />
          <p>Tenant Preference</p>
        </div>
        <div className="property-options">
          <SmallCard onClick={tenantPreferenceHandler}>Any</SmallCard>
          <SmallCard onClick={tenantPreferenceHandler}>Family</SmallCard>
          <SmallCard onClick={tenantPreferenceHandler}>Bachelor(Man)</SmallCard>
          <SmallCard onClick={tenantPreferenceHandler}>
            Bachekor(Women)
          </SmallCard>
        </div>
        {errors.tenantPreference && (
          <p className="error">{errors.tenantPreference}</p>
        )}

        <div className="property-for-1">
          <img src={imp} alt="important" className="imp" />
          <p>Availabiliy</p>
        </div>
        <div className="property-options">
          <SmallCard onClick={availabilityHandler}>Immediate</SmallCard>
          <SmallCard onClick={availabilityHandler}>within 15 days</SmallCard>
          <SmallCard onClick={availabilityHandler}>within 1 month</SmallCard>
          <SmallCard onClick={availabilityHandler}>within 2 months</SmallCard>
        </div>
        {errors.availability && <p className="error">{errors.availability}</p>}

        <div className="square-area">
          <p>
            <img src={imp} alt="important" className="imp" />
            Property Description
          </p>
          <input
            type="text"
            placeholder="Add a description for your property to attract the best tenant"
            className="property-description"
            onChange={descriptionHandler}
          />
        </div>
        {errors.description && <p className="error">{errors.description}</p>}

        <div className="leave-margin"></div>
      </SellersFlow>
    </Fragment>
  );
};

export default PropertyDetails;
