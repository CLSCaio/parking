import React from "react";
import { useFormik, FormikProvider } from "formik";

import { outputPlate, payParking } from "../../../api";

import { ConfirmRequestProps } from "./interface";
import { Button } from "../../../components";
import { colors } from "../../../global";

import { Container, Group } from "./styles";

const ConfirmRequest = ({
  payOrOut,
  buttonLabel,
  text,
  plate,
  setLoading,
  setLoadContent,
  confirmEntry,
  setConfirm,
}: ConfirmRequestProps) => {
  const onSubmit = async () => {
    try {
      setConfirm(false);
      setLoading(true);
      setLoadContent({
        message: "Confirmando...",
        type: "sucess",
      });
      confirmEntry(true);

      if (payOrOut === "pay") {
        setLoading(true);
        const { status } = await payParking(plate);
        if (status === 204 || status === 200) {
          setLoadContent({
            message: "PAGO!",
            type: "sucess",
          });
        }
        if (status === undefined) {
          setLoadContent({
            message: "Esta placa já foi paga.",
            type: "error",
          });
        }
      } else {
        const { status } = await outputPlate(plate);
        if (status === 204 || status === 200) {
          setLoadContent({
            message: "Saída Liberada",
            type: "sucess",
          });
        }
        if (status === undefined) {
          setLoadContent({
            message: "Por favor faça o pagamento.",
            type: "error",
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const form = useFormik({
    initialValues: {
      plate,
    },
    onSubmit,
  });

  return (
    <FormikProvider value={form}>
      <Container onSubmit={form.handleSubmit}>
        <Group>
          <h4> {text} </h4>
          <h1> {plate}</h1>
        </Group>

        <Button label={buttonLabel} color={colors.others[2]} />
        <a href="/">Voltar</a>
      </Container>
    </FormikProvider>
  );
};

export default ConfirmRequest;
