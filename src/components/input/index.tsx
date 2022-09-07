import React, { useEffect, useState, FocusEventHandler } from "react";
import { useField } from "formik";

import { ErrorMessage } from "../errorMessage";

import { InputProps } from "./interface";
import { Group, Label, Field } from "./styles";

export const Input = ({
  color,
  label,
  placeholder,
  error,
  ...rest
}: InputProps) => {
  const [field, meta] = useField(rest);
  const [err, setErr] = useState(false);
  const [errorStyle, setErrorStyle] = useState<"error" | undefined>(undefined);

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    field.onBlur(event);
  };

  useEffect(() => {
    if ((meta.touched && meta.error) || error) {
      setErr(true);
      setErrorStyle("error");
    }

    if (!meta.error || !error) {
      setErr(false);
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
      {err && <ErrorMessage error={error || meta.error} />}
    </Group>
  );
};
