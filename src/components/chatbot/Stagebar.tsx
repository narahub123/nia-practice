import { twMerge } from "tailwind-merge";

interface Stage {
  index: number;
  curStage: number;
}

const Stage = ({ index, curStage }: Stage) => {
  const className = twMerge(
    "w-full h-full bg-gray-400",
    index <= curStage && "bg-white"
  );

  return <li key={index} className={className}></li>;
};

interface Stagebar {
  curStage: number;
}

export const Stagebar = ({ curStage }: Stagebar) => {
  const NumofStage = 6;

  return (
    <ul className="max-w-[500px] h-10 flex gap-4 mx-auto">
      {Array.from({ length: NumofStage }).map((_, index) => (
        <Stage index={index} curStage={curStage} key={index} />
      ))}
    </ul>
  );
};
