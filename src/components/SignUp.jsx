import { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Typography,
  Button,
} from "@mui/material";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import styled from "@emotion/styled/macro";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [error, setError] = useState(null);
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
    setError(null);
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        setError("Cannot create user, email already in use");
      }
    }
  };

  return (
    <Box>
      <Typography variant="h5">Sign up with your email and password</Typography>
      <Typography variant="h6">{error}</Typography>
      <form onSubmit={onSubmit}>
        <FormControl>
          <InputLabel htmlFor="display-name">Display Name</InputLabel>
          <Input
            id="display-name"
            type="text"
            required
            name="displayName"
            onChange={onChange}
            value={displayName}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            type="email"
            required
            name="email"
            onChange={onChange}
            value={email}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            required
            name="password"
            onChange={onChange}
            value={password}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
          <Input
            id="confirm-password"
            type="password"
            required
            name="confirmPassword"
            onChange={onChange}
            value={confirmPassword}
          />
        </FormControl>
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
