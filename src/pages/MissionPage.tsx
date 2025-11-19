import { useState } from "react";
import { video1 } from "../assets";
import { Button, MissionVideo } from "../components";
import type { MissionType } from "../types";
import { Link } from "react-router-dom";

export const MissionPage = () => {
  const [isOn, setIsOn] = useState(false);
  const mission: MissionType = {
    videoUrl: video1,
    story: `안녕하세요\n ㅋㅋㅋ\n 어떻게 하는겨`,
  };

  const handleClick = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="flex flex-col h-inert px-10 py-20">
      <main>
        <MissionVideo mission={mission} className="mx-auto" isStoryOn={isOn} />
      </main>
      <footer className="flex justify-center mt-8 gap-4">
        <Button onClick={handleClick}>스토리 보기</Button>
        <Link to="/chatbot">
          <Button>SKIP</Button>
        </Link>
      </footer>
    </div>
  );
};
