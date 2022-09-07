import React, { useState } from "react";
import { useFormik, FormikProvider } from "formik";

import { entryPlate } from "../../api";
import { Form, Input, Button } from "../../components";

import validationSchema from "./validation";

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
          label="confirmar entrada"
          disabled={!(form.isValid && form.dirty) || form.isSubmitting}
        />
      </Form>
    </FormikProvider>
  );
};
