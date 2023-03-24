import { convertNumberToString } from 'utils/common';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

export type CirclePercentProps = {
  number1: number;
  number2: number;
};

export default function CirclePercent({ number1, number2 }: CirclePercentProps) {
  const newNumber1 = convertNumberToString(number1);
  const newNumber2 = convertNumberToString(number2);
  const percent = Math.round((number1 / number2) * 100);

  return (
    <div className="relative w-fit rounded-full">
      <CircularProgressbar
        value={percent}
        strokeWidth={2}
        styles={buildStyles({
          trailColor: 'transparent',
          pathColor: '#FFFFFF'
        })}
      />
      ;
      <div className="text-light font-secondary flex items-end absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-shadow-primary text-lg w-fit">
          {newNumber1}/{newNumber2}
        </div>
        <div className="text-shadow-primary text-[25px] leading-[30px] ml-1">{percent}%</div>
      </div>
    </div>
  );
}
