import React, { useState } from "react";
import axios from "axios";
import { useFormik, FormikProvider } from "formik";

import { entryPlate } from "../../api";
import { Input } from "../../components";

import validationSchema from "./validation";
import { Form, Button } from "./styles";

export const Entry = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    try {
      setLoading(true);
      const response = entryPlate(form.values.entry);
      return response;
    } finally {
      setLoading(false);
    }
  };

  const form = useFormik({
    initialValues: {
      entry: "",
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit,
  });

  return (
    <FormikProvider value={form}>
      <Form onSubmit={form.handleSubmit}>
        <Input name="entry" label="Número da placa:" placeholder="AAA-0000" />

        <Button
          disabled={
            !(form.isValid && form.dirty) || form.isSubmitting || loading
          }
          type="submit"
        >
          Confirmar entrada
        </Button>
      </Form>
    </FormikProvider>
  );
};
