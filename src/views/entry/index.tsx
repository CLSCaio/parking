import React, { useState } from "react";
import { useFormik, FormikProvider } from "formik";

import { entryPlate } from "../../api";
import { Form, Input, Button, Modal, Loading } from "../../components";

import validationSchema from "./validation";

export const Entry = () => {
  const [entry, confirmEntry] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadContent, setLoadContent] = useState<{
    message: string;
    type: "sucess" | "error";
  }>({
    message: "",
    type: "sucess",
  });

  const onSubmit = async () => {
    try {
      setLoading(true);
      setLoadContent({
        message: "Registrando…",
        type: "sucess",
      });
      confirmEntry(true);
      const { status } = await entryPlate(form.values.entry);
      if (status === 200) {
        setLoadContent({
          message: "REGISTRADO!",
          type: "sucess",
        });
      } else {
        setLoadContent({
          message: "Placa já foi validada.",
          type: "error",
        });
      }
    } finally {
      form.setValues({ entry: "" });
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

  return entry ? (
    <Modal withoutBase isVisible height="170px" closeModal={confirmEntry}>
      <Loading
        text={loadContent.message}
        isLoading={loading}
        type={loadContent.type}
      />
    </Modal>
  ) : (
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
