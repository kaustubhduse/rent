import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePageFooter from "./HomePageFooter";
import Header from "./Header";
import FormFilling from "./FormFilling";
import "./HomePageForm.css";

const HomePageForm = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    userType: "",
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleUserTypeChange = (event) => {
    setFormState({ ...formState, userType: event.target.value });
  };

  const handleNameChange = (event) => {
    setFormState({ ...formState, name: event.target.value });
  };

  const phoneNumberChange = (event) => {
    setFormState({ ...formState, phoneNumber: event.target.value });
  };

  const emailChangeHandler = (event) => {
    setFormState({ ...formState, email: event.target.value });
  };

  const validateEmail = (email) => {
    return email.includes("@");
  };

  const validatePhoneNumber = (phone) => {
    return phone.length === 10;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let formErrors = {};

    if (!formState.userType) {
      formErrors.userType = "Please select an option";
    }

    if (!formState.name) {
      formErrors.name = "Please enter your name";
    }

    if (!formState.email && !formState.phoneNumber) {
      formErrors.contact = "Please enter either your phone number or email";
    } else {
      if (formState.email && !validateEmail(formState.email)) {
        formErrors.email = "Please enter a valid email";
      }
      if (formState.phoneNumber && !validatePhoneNumber(formState.phoneNumber)) {
        formErrors.phone = "Please enter a valid 10-digit phone number";
      }
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      alert(Object.values(formErrors).join("\n"));
      return;
    }

    console.log(formState);

    // Clear form fields
    setFormState({
      userType: "",
      name: "",
      phoneNumber: "",
      email: "",
    });
    setErrors({});

    // Navigate to SellersFlow
    navigate("/list-your-property/property-details");
  };

  return (
    <div className="container">
      <Header />
      <FormFilling
        formState={formState}
        errors={errors}
        onUserTypeChange={handleUserTypeChange}
        onNameChange={handleNameChange}
        onPhoneNumberChange={phoneNumberChange}
        onEmailChange={emailChangeHandler}
        onSubmit={submitHandler}
      />
      <HomePageFooter submitHandler={submitHandler} />
    </div>
  );
};

export default HomePageForm;
