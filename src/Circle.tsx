import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  const [value, setValue] = useState<number | string>(1);

  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;

interface PlayerObj {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerObj) =>
  `Hello ${playerObj.name} you are ${playerObj.age} old.`;

sayHello({ name: "nico", age: 12 });
