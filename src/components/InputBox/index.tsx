import * as S from "./styles";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { primaryGray, primaryRed, thirdPurple } from "@/styles/colors";

interface InputInterface {
  id: string;
  name: string;
  placeholder?: string;
  type: string;
  value: string;
  onChange: any;
  error: boolean;
  required?: boolean;
}

export const InputBox = ({
  id,
  name,
  placeholder,
  type,
  value,
  onChange,
  error,
  required,
}: InputInterface) => {
  const [adornment, setAdornment] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const inputProps =
    isFocused || value.length > 0
      ? {
          startAdornment: (
            <InputAdornment position="start">{adornment}</InputAdornment>
          ),
          style: { fontSize: "1.6rem", color: "black" },
          disableUnderline: true,
        }
      : {
          style: { fontSize: "1.6rem", color: "black" },
          disableUnderline: true,
        };

  useEffect(() => {
    switch (type) {
      case "money":
        setAdornment("R$");
        break;
      case "percentage":
        setAdornment("%");
        break;
      default:
        setAdornment("");
        break;
    }
  }, [adornment]);

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <TextField
            error={error}
            required={required}
            type="number"
            id={id}
            name={name}
            label={placeholder}
            value={value}
            onChange={onChange}
            variant="standard"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{ width: "100%" }}
            InputProps={inputProps}
            InputLabelProps={{
              style: {
                fontSize: "1.6rem",
                color: error ? primaryRed : primaryGray,
              },
            }}
          />
        </S.Wrapper>
      </S.Container>
    </>
  );
};
