import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./Button.styles";

export const BUTTON_TYPES = {
  BASE: "BASE",
  GOOGLE_SIGN_IN: "GOOGLE_SIGN_IN",
  INVERTED: "INVERTED",
};

const getButtonType = (buttonType = "BASE") =>
  ({
    [BUTTON_TYPES.BASE]: BaseButton,
    [BUTTON_TYPES.GOOGLE_SIGN_IN]: GoogleSignInButton,
    [BUTTON_TYPES.INVERTED]: InvertedButton,
  }[buttonType] ?? BaseButton);

const Button = ({ children, buttonType, ...restProps }) => {
  const CustomButton = getButtonType(buttonType);
  return <CustomButton {...restProps}>{children}</CustomButton>;
};

export default Button;
