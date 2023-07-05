import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

function Circle({ bgColor }: ContainerProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;

interface PlayerObj {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerObj) =>
  `Hello ${playerObj.name} you are ${playerObj.age} old.`;

sayHello({ name: "nico", age: 12 });
