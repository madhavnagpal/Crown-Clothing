import { useState } from "react";

import {
  StyledForm,
  SignUpContainer as SignInContainer,
  SignUpHeading as SignInHeading,
  SignUpSubHeading as SignInSubHeading,
  MessageChip,
  ActionsContainer,
} from "../components/SignUp";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SIGN_IN_ERRORS = {
  "auth/user-not-found": "No user exists with this email.",
  "auth/wrong-password": "Incorrect password for email.",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [error, setError] = useState("");
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      const errorMessage =
        SIGN_IN_ERRORS[error.code] ||
        "Error while signing in with email and password";
      console.log(error);
      setError(errorMessage);
    }
  };

  return (
    <SignInContainer>
      <SignInHeading variant="h2">I already have an account</SignInHeading>
      <SignInSubHeading variant="span">
        Sign in with your email and password
      </SignInSubHeading>
      <StyledForm onSubmit={onSignIn}>
        <FormInput
          label="Email"
          type="email"
          required
          inputId="emial__Signin"
          name="email"
          onChange={onChange}
          value={email}
        />
        <FormInput
          type="password"
          label="Password"
          required
          inputId="password__Signin"
          name="password"
          onChange={onChange}
          value={password}
        />
        {error && (
          <MessageChip
            label={error}
            color="error"
            onDelete={() => setError("")}
          />
        )}
        <ActionsContainer>
          <Button type="submit" buttonType="default">
            Sign In
          </Button>
          <Button buttonType="google" onClick={signInWithGooglePopup}>
            Sign In using Google
          </Button>
        </ActionsContainer>
      </StyledForm>
    </SignInContainer>
  );
};

export default SignIn;
