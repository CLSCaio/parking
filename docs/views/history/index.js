var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { LeftArrow } from "../../assets/index.js";
import { consultPlate } from "../../api/index.js";
import { Modal } from "../../components/index.js";
import { useMenuContext } from "../../context/index.js";
import BoxHistory from "./boxHistory/index.js";
import { Content, Container, Group, Button } from "./styles.js";
export const Box = ({ children }) => (React.createElement("span", null, children));
export const History = () => {
    const navigate = useNavigate();
    const [history, setHistory] = useState(null);
    const { plate, changeView } = useMenuContext();
    const [modal, setModal] = useState(false);
    const plateHistory = () => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield consultPlate(plate);
        const reverseArray = data.reverse();
        if (data !== undefined)
            setHistory(reverseArray);
        else
            setModal(true);
    });
    const navigateToHome = () => {
        changeView("entry");
        navigate("/");
    };
    useEffect(() => changeView(), []);
    useEffect(() => {
        plateHistory();
    }, [plate]);
    return modal ? (React.createElement(Modal, { isVisible: true, closeModal: setModal, withoutClose: true },
        React.createElement(Content, null,
            React.createElement("h2", null, "N\u00E3o foi poss\u00EDvel carregar os dados da placa."),
            React.createElement(Button, { type: "button", onClick: () => navigateToHome() }, "Voltar para home")))) : !history ? (React.createElement(Skeleton, { count: 3, inline: true, wrapper: Box })) : (React.createElement(Container, null,
        React.createElement(Group, null,
            React.createElement(Button, { onClick: () => navigateToHome() },
                React.createElement(LeftArrow, null)),
            React.createElement("h2", null,
                "Placa ", plate === null || plate === void 0 ? void 0 :
                plate.toUpperCase())),
        React.createElement(BoxHistory, { list: history })));
};
//# sourceMappingURL=index.js.map