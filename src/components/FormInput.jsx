import { FormControl, Input, InputLabel } from "@mui/material";
import styled from "@emotion/styled/macro";

const FormInput = ({ label, inputId, ...restProps }) => {
  return (
    <StyledFormControl>
      {label && <StyledLabel htmlFor={inputId}>{label}</StyledLabel>}
      <StyledInput id={inputId} {...restProps} />
    </StyledFormControl>
  );
};

export default FormInput;

const StyledFormControl = styled(FormControl)({
  margin: "10px 0",
});

const StyledLabel = styled(InputLabel)({
  fontSize: "16px",
});

const StyledInput = styled(Input)({
  fontSize: "18px",
  padding: "10px",
});
