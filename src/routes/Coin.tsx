import { useParams } from "react-router-dom";

interface RoutePrams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<RoutePrams>();
  return <h1>Coin : {coinId}</h1>;
}

export default Coin;
