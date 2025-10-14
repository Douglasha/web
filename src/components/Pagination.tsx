import left from "../assets/left.svg";
import right from "../assets/right.svg";

import { Button } from "./Button";

type Props = {
  current: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
};

export function Pagination({ current, total, onNext, onPrevious }: Props) {
  return (
    <div className="flex justify-center items-center gap-2">
      <Button variant="iconSmall" onClick={onPrevious} disabled={current === 1}>
        <img src={left} alt="Seta para voltar" />
      </Button>
      <span className="text-sm text-gray-200">
        {current} de {total}
      </span>
      <Button variant="iconSmall" onClick={onNext} disabled={current === total}>
        <img src={right} alt="Seta para avançar" />
      </Button>
    </div>
  );
}
