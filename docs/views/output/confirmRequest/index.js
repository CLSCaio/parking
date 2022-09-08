var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from "react";
import { useFormik, FormikProvider } from "formik";
import { outputPlate, payParking } from "../../../api/index.js";
import { Button } from "../../../components/index.js";
import { colors } from "../../../global/index.js";
import { Container, Group } from "./styles.js";
const ConfirmRequest = ({ payOrOut, buttonLabel, text, plate, setLoading, setLoadContent, confirmEntry, setConfirm, }) => {
    const onSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
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
                const { status } = yield payParking(plate);
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
            }
            else {
                const { status } = yield outputPlate(plate);
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
        }
        finally {
            setLoading(false);
        }
    });
    const form = useFormik({
        initialValues: {
            plate,
        },
        onSubmit,
    });
    return (React.createElement(FormikProvider, { value: form },
        React.createElement(Container, { onSubmit: form.handleSubmit },
            React.createElement(Group, null,
                React.createElement("h4", null,
                    " ",
                    text,
                    " "),
                React.createElement("h1", null,
                    " ",
                    plate)),
            React.createElement(Button, { label: buttonLabel, color: colors.others[2] }),
            React.createElement("a", { href: "/" }, "Voltar"))));
};
export default ConfirmRequest;
//# sourceMappingURL=index.js.map