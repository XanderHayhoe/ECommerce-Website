import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";
import "./Authentication.styles.scss";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";
const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
