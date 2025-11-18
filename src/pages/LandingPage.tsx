import { TbUserHexagon } from "react-icons/tb";
import { Button, LandingJobCard } from "../components";
import { fieldsOfJobs } from "../data";
import { useState } from "react";

export const LandingPage = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col h-inert px-10 py-20">
      {/* <header>헤더</header> */}
      <main className="flex-1 space-y-8">
        <p className="text-3xl text-white">
          <TbUserHexagon />
        </p>
        <div className="text-white text-4xl font-bold">
          <p>자, 캐릭터를 고르고</p>
          <p>챌린지에 도전해 볼까요?</p>
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-8">
            {fieldsOfJobs.map((job) => {
              return (
                <li className="w-full aspect-square" key={job.id}>
                  <LandingJobCard
                    job={job}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-white text-center text-xl">
          <p>직장인 AI 윤리 퀴즈 첼린지,</p>
          <p>지금 바로 시작합니다.🎉</p>
        </div>
      </main>
      <footer className="flex justify-center mt-8">
        <Button>다음으로</Button>
      </footer>
    </div>
  );
};
