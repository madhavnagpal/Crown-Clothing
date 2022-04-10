import { useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import styled from "@emotion/styled/macro";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import FormInput from "./FormInput";
import Button from "./Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [error, setError] = useState("");
  const { displayName, email, password, confirmPassword } = formFields;

  const onChange = (event) => {
    const { value, name } = event.target;
    setFormFields((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      let errorMessage = "Error while creating new user";
      console.log("Error while creating new user", error);
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Cannot create user, email already in use";
      }
      setError(errorMessage);
    }
  };

  return (
    <SignUpContainer>
      <SignUpHeading variant="h2">I do not have an account</SignUpHeading>
      <SignUpSubHeading variant="span">
        Sign up with your email and password
      </SignUpSubHeading>

      <StyledForm onSubmit={onSubmit}>
        <FormInput
          inputId="displayName__Signup"
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={onChange}
          value={displayName}
        />
        <FormInput
          inputId="email___Signup"
          label="Email"
          type="email"
          required
          name="email"
          onChange={onChange}
          value={email}
        />
        <FormInput
          inputId="password__Signup"
          label="Password"
          type="password"
          required
          name="password"
          onChange={onChange}
          value={password}
        />
        <FormInput
          inputId="confirmPassword__Signup"
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          onChange={onChange}
          value={confirmPassword}
        />
        <ActionsContainer>
          {error && (
            <MessageChip
              label={error}
              color="error"
              onDelete={() => setError("")}
            />
          )}
          <Button type="submit" buttonType="default">
            Sign Up
          </Button>
        </ActionsContainer>
      </StyledForm>
    </SignUpContainer>
  );
};

export default SignUp;

export const SignUpContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "380px",
});

export const SignUpHeading = styled(Typography)({
  margin: "10px 0",
  fontSize: "24px",
  fontWeight: 700,
});
export const SignUpSubHeading = styled(Typography)({
  marginBottom: "10px",
});

export const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
});

export const MessageChip = styled(Chip)({
  borderRadius: "5px",
  justifyContent: "space-between",
});

export const ActionsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "8px",
});
