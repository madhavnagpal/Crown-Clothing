import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";

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

  const onSignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response, " response on signin");
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
          <Button buttonType="google" onClick={onSignInWithGoogle}>
            Sign In using Google
          </Button>
        </ActionsContainer>
      </StyledForm>
    </SignInContainer>
  );
};

export default SignIn;
