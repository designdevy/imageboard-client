import React from "react";
import { Link } from "react-router-dom";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignUpFormContainer from "./SignUpFormContainer"

function LogInButton({ showLogInForm, showSignUpForm }) {
  return (
    <div className="menu-bar">
      <button className="input-button" onClick={showLogInForm}>
        Log in
      </button>
      <button className="input-button" onClick={showSignUpForm}>
        Sign Up
      </button>
    </div>
  );
}

function MyFavoritesButton() {
  return (
    <Link to="/favorites">
      <button className="input-button">My favorite cities</button>
    </Link>
  );
}

function MyTravelPlanner() {
  return (
    <Link to="/travel-planner">
      <button className="input-button">My travel planner</button>
    </Link>
  )
}

function AddImageButton({ showImageForm }) {
  return (
    <button className="input-button" onClick={showImageForm}>
      Add Photo
    </button>
  );
}

export default function TopMenu({
  user,
  addingImage,
  loggingIn,
  signingUp,
  showLogInForm,
  showImageForm,
  showSignUpForm
}) {
  if (!user) {
    if (loggingIn === true) {
      return (
        <div>
          <LogInButton showLogInForm={showLogInForm} showSignUpForm={showSignUpForm} />
          <LoginFormContainer />
        </div>
      );
    } else if (signingUp === true) {
      return (
        <div>
          <LogInButton showLogInForm={showLogInForm} showSignUpForm={showSignUpForm} />
          <SignUpFormContainer />
        </div>
      );
    } else {
      return <LogInButton showLogInForm={showLogInForm} showSignUpForm={showSignUpForm} />;
    }
  } else {
    if (addingImage === true) {
      return (
        <div>
          <div className="menu-bar">
            <MyFavoritesButton />
            <MyTravelPlanner />
            <AddImageButton showImageForm={showImageForm} />
          </div>
          <CreateFormContainer />
        </div>
      );
    } else {
      return (
        <div>
          <div className="menu-bar">
            <MyFavoritesButton />
            <MyTravelPlanner />
            <AddImageButton showImageForm={showImageForm} />
          </div>
        </div>
      );
    }
  }
}
