import { LuCheck } from "react-icons/lu";
import type { JobCardType } from "../../types";

interface LandingJobCardProps {
  job: JobCardType;
  selected: string;
  setSelected: (field: string) => void;
}

export const LandingJobCard = ({
  job,
  selected,
  setSelected,
}: LandingJobCardProps) => {
  const { field, id, url } = job;

  const isSelected = selected === id;

  const handleClick = (field: string) => {
    setSelected(field);
  };
  return (
    <button
      className="relative w-full h-full bg-slate-100/15 from-white/20 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 hover:bg-slate-100/10"
      onClick={() => handleClick(id)}
    >
      <p className="absolute top-[10%] left-[10%] text-3xl text-white">
        {field}
      </p>
      {isSelected && (
        <span className="absolute top-[10%] right-[15%] text-2xl text-white">
          <LuCheck />
        </span>
      )}
      <img src={url} alt="" className="w-[70%] absolute bottom-0 right-0" />
    </button>
  );
};
