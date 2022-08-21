import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  StyledForm,
  SignUpContainer as SignInContainer,
  SignUpHeading as SignInHeading,
  SignUpSubHeading as SignInSubHeading,
  MessageChip,
  ActionsContainer,
} from "../components/SignUp";
import FormInput from "../components/FormInput";
import Button, { BUTTON_TYPES } from "./Button/Button";
import { googleSignInStart, emailSignInStart } from "../store/user/user.action";
import {
  selectCurrentUser,
  selectIsUserSigningIn,
  selectSignInError,
} from "../store/user/user.selector";

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
  const dispatch = useDispatch();
  const signInError = useSelector(selectSignInError);
  const currentUser = useSelector(selectCurrentUser);
  const isUserSigningIn = useSelector(selectIsUserSigningIn);

  const errorMessage =
    signInError &&
    (SIGN_IN_ERRORS[signInError.code] ||
      "Error while signing in with email and password");

  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const onSignIn = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(emailSignInStart(email, password));
    },
    [dispatch, email, password]
  );

  useEffect(() => {
    if (!isUserSigningIn && currentUser) {
      resetFormFields();
    }
  }, [isUserSigningIn, currentUser]);

  const onSignInWithGoogle = useCallback(() => {
    dispatch(googleSignInStart());
  }, [dispatch]);

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
        {errorMessage && (
          <MessageChip
            label={errorMessage}
            color="error"
            // onDelete={() => setError("")}
          />
        )}
        <ActionsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPES.GOOGLE_SIGN_IN}
            onClick={onSignInWithGoogle}
          >
            Sign In using Google
          </Button>
        </ActionsContainer>
      </StyledForm>
    </SignInContainer>
  );
};

export default SignIn;
