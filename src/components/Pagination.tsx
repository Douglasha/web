import left from "../assets/left.svg";
import right from "../assets/right.svg";

import { Button } from "./Button";

type Props = {
  current: number;
  total: number;
};

export function Pagination({ current, total }: Props) {
  return (
    <div className="flex justify-center items-center gap-4">
      <Button variant="iconSmall">
        <img src={left} alt="Seta para voltar" />
      </Button>
      <span className="text-sm text-gray-200">
        {current} de {total}
      </span>
      <Button variant="iconSmall">
        <img src={right} alt="Seta para avançar" />
      </Button>
    </div>
  );
}
