import React, { useEffect, useState, FocusEventHandler } from "react";
import { useField } from "formik";

import { ErrorMessage } from "../errorMessage";

import { InputProps } from "./interface";
import { Group, Label, Field } from "./styles";

export const Input = ({ color, label, placeholder, ...rest }: InputProps) => {
  const [field, meta] = useField(rest);
  const [error, setError] = useState(false);
  const [errorStyle, setErrorStyle] = useState<"error" | undefined>(undefined);

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    field.onBlur(event);
  };

  useEffect(() => {
    if (meta.touched && meta.error) {
      setError(true);
      setErrorStyle("error");
    }

    if (!meta.error) {
      setError(false);
      setErrorStyle(undefined);
    }
  }, [meta.touched && meta.error]);

  return (
    <Group>
      <Label>{label}</Label>
      <Field
        {...rest}
        {...field}
        errorStyle={errorStyle}
        type="text"
        placeholder={placeholder}
        onBlur={handleBlur}
      />
      {error && <ErrorMessage error={meta.error || "Occorreu um erro"} />}
    </Group>
  );
};
