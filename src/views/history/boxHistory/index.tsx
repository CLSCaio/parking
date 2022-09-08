import React, { useEffect } from "react";

import { BoxProps } from "./interface";
import { Container, Group, Divider } from "./styles";

const BoxHistory = ({ list }: BoxProps) => (
  <Container>
    {list?.map(({ time, paid }) => (
      <Group key={time}>
        <Divider>
          <h6> tempo atual </h6>
          <h2>
            {time
              .replace("hours", "h")
              .replace("minutes", "min")
              .replace("seconds", "sec")
              .replaceAll(" ", "")}
          </h2>
        </Divider>
        <Divider>
          <h6> pagamento </h6>
          <h2>{paid ? "Pago" : <hr />}</h2>
        </Divider>
      </Group>
    ))}
  </Container>
);

export default BoxHistory;
