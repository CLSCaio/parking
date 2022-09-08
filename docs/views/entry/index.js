var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState } from "react";
import { useFormik, FormikProvider } from "formik";
import { entryPlate } from "../../api/index.js";
import { Form, Input, Button, Modal, Loading } from "../../components/index.js";
import validationSchema from "./validation.js";
export const Entry = () => {
    const [entry, confirmEntry] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadContent, setLoadContent] = useState({
        message: "",
        type: "sucess",
    });
    const onSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            setLoadContent({
                message: "Registrando…",
                type: "sucess",
            });
            confirmEntry(true);
            const { status } = yield entryPlate(form.values.entry);
            if (status === 200) {
                setLoadContent({
                    message: "REGISTRADO!",
                    type: "sucess",
                });
            }
            else {
                setLoadContent({
                    message: "Placa já foi validada.",
                    type: "error",
                });
            }
        }
        finally {
            setLoading(false);
        }
    });
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
    return entry ? (React.createElement(Modal, { withoutBase: true, isVisible: true, height: "170px", closeModal: confirmEntry },
        React.createElement(Loading, { text: loadContent.message, isLoading: loading, type: loadContent.type }))) : (React.createElement(FormikProvider, { value: form },
        React.createElement(Form, { onSubmit: form.handleSubmit },
            React.createElement(Input, { name: "entry", label: "N\u00FAmero da placa:", placeholder: "AAA-0000" }),
            React.createElement(Button, { label: "confirmar entrada", disabled: !(form.isValid && form.dirty) || form.isSubmitting }))));
};
//# sourceMappingURL=index.js.map