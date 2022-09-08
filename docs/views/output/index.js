import React, { useState } from "react";
import { useFormik, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import { useMenuContext } from "../../context/index.js";
import { colors } from "../../global/index.js";
import { Form, Input, Button, Modal, Loading } from "../../components/index.js";
import ConfirmRequest from "./confirmRequest/index.js";
import validationSchema from "./validation.js";
export const Output = () => {
    const navigate = useNavigate();
    const { setPlate } = useMenuContext();
    const [payOrOut, setPayOrOut] = useState("pay");
    const [confirm, setConfirm] = useState(false);
    const [entry, confirmEntry] = useState(false);
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState({ text: "string", buttonLabel: "string" });
    const [loadContent, setLoadContent] = useState({
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
        }
        else {
            setMessages({
                text: "Confirma a saída do veiculo da placa abaixo?",
                buttonLabel: "Liberar Saída",
            });
        }
    };
    const navigateToHistory = (event) => {
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
    return (React.createElement(FormikProvider, { value: form },
        entry && (React.createElement(Modal, { isVisible: true, height: "294px", closeModal: confirmEntry },
            React.createElement(Loading, { text: loadContent.message, isLoading: loading, type: loadContent.type }))),
        confirm && (React.createElement(Modal, { isVisible: true, height: "294px", closeModal: setConfirm },
            React.createElement(ConfirmRequest, { setLoadContent: setLoadContent, setLoading: setLoading, confirmEntry: confirmEntry, payOrOut: payOrOut, plate: form.values.output, buttonLabel: messages.buttonLabel, text: messages.text, setConfirm: setConfirm }))),
        React.createElement(Form, { onSubmit: form.handleSubmit },
            React.createElement(Input, { name: "output", label: "N\u00FAmero da placa:", placeholder: "AAA-0000" }),
            React.createElement(Button, { label: "Pagamento", color: colors.others[2], disabled: !(form.isValid && form.dirty) || form.isSubmitting || loading, onClick: () => setPayOrOut("pay") }),
            React.createElement(Button, { label: "Sa\u00EDda", color: colors.others[2], variant: "outline", onClick: () => setPayOrOut("out"), disabled: !(form.isValid && form.dirty) || form.isSubmitting || loading }),
            React.createElement("a", { href: "/history", onClick: (e) => navigateToHistory(e) }, "historico"))));
};
