import React, { useState } from "react";
import { useFormik, FormikProvider } from "formik";

import { colors } from "../../global";
import { Form, Input, Button } from "../../components";

import validationSchema from "./validation";

export const Output = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (): void => console.log(form.values);

  const form = useFormik({
    initialValues: {
      output: "",
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
        <Input name="output" label="Número da placa:" placeholder="AAA-0000" />

        <Button
          label="Pagamento"
          color={colors.others[2]}
          disabled={!(form.isValid && form.dirty) || form.isSubmitting}
        />

        <Button
          label="Saída"
          color={colors.others[2]}
          variant="outline"
          disabled={!(form.isValid && form.dirty) || form.isSubmitting}
        />
      </Form>
    </FormikProvider>
  );
};
