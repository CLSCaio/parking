import React, { useState } from "react";
import { useFormik, FormikProvider } from "formik";

import { useNavigate } from "react-router-dom";
import { useMenuContext } from "../../context";
import { colors } from "../../global";
import { Form, Input, Button, Modal, Loading } from "../../components";

import ConfirmRequest from "./confirmRequest";
import validationSchema from "./validation";

export const Output = () => {
  const navigate = useNavigate();
  const { setPlate } = useMenuContext();
  const [payOrOut, setPayOrOut] = useState<"pay" | "out">("pay");
  const [confirm, setConfirm] = useState(false);
  const [entry, confirmEntry] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{
    text: string;
    buttonLabel: string;
  }>({ text: "string", buttonLabel: "string" });
  const [loadContent, setLoadContent] = useState<{
    message: string;
    type: "sucess" | "error";
  }>({
    message: "",
    type: "sucess",
  });

  const onSubmit = () => {
    setConfirm(true);
    if (payOrOut === "pay") {
      setMessages({
        text: "Confima o pagamento da placa abaixo?",
        buttonLabel: "CONFIRMAR",
      });
    } else {
      setMessages({
        text: "Confirma a saída do veiculo da placa abaixo?",
        buttonLabel: "Liberar Saída",
      });
    }
  };

  const navigateToHistory = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate("/history");
    setPlate(form.values.output);
  };

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
      {entry && (
        <Modal isVisible height="294px" closeModal={confirmEntry}>
          <Loading
            text={loadContent.message}
            isLoading={loading}
            type={loadContent.type}
          />
        </Modal>
      )}

      {confirm && (
        <Modal isVisible height="294px" closeModal={setConfirm}>
          <ConfirmRequest
            setLoadContent={setLoadContent}
            setLoading={setLoading}
            confirmEntry={confirmEntry}
            payOrOut={payOrOut}
            plate={form.values.output}
            buttonLabel={messages.buttonLabel}
            text={messages.text}
            setConfirm={setConfirm}
          />
        </Modal>
      )}

      <Form onSubmit={form.handleSubmit}>
        <Input name="output" label="Número da placa:" placeholder="AAA-0000" />

        <Button
          label="Pagamento"
          color={colors.others[2]}
          disabled={
            !(form.isValid && form.dirty) || form.isSubmitting || loading
          }
          onClick={() => setPayOrOut("pay")}
        />

        <Button
          label="Saída"
          color={colors.others[2]}
          variant="outline"
          onClick={() => setPayOrOut("out")}
          disabled={
            !(form.isValid && form.dirty) || form.isSubmitting || loading
          }
        />

        <a href="/history" onClick={(e) => navigateToHistory(e)}>
          historico
        </a>
      </Form>
    </FormikProvider>
  );
};
