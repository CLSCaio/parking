import React, { useEffect, useState, PropsWithChildren } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

import { LeftArrow } from "../../assets";
import { consultPlate } from "../../api";
import { Modal } from "../../components";
import { useMenuContext } from "../../context";

import BoxHistory from "./boxHistory";
import { list } from "./interface";
import { Content, Container, Group, Button } from "./styles";

export const Box = ({ children }: PropsWithChildren<unknown>) => (
  <span>{children}</span>
);

export const History = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<list[] | null>(null);
  const { plate, changeView } = useMenuContext();
  const [modal, setModal] = useState(false);

  const plateHistory = async () => {
    const { data } = await consultPlate(plate);
    const reverseArray = data.reverse();
    if (data !== undefined) setHistory(reverseArray);
    else setModal(true);
  };

  const navigateToHome = () => {
    changeView("entry");
    navigate("/");
  };

  useEffect(() => changeView(), []);

  useEffect(() => {
    plateHistory();
  }, [plate]);

  return modal ? (
    <Modal isVisible closeModal={setModal} withoutClose>
      <Content>
        <h2>Não foi possível carregar os dados da placa.</h2>
        <Button type="button" onClick={() => navigateToHome()}>
          Voltar para home
        </Button>
      </Content>
    </Modal>
  ) : !history ? (
    <Skeleton count={3} inline wrapper={Box} />
  ) : (
    <Container>
      <Group>
        <Button onClick={() => navigateToHome()}>
          <LeftArrow />
        </Button>
        <h2>Placa {plate?.toUpperCase()}</h2>
      </Group>

      <BoxHistory list={history} />
    </Container>
  );
};
