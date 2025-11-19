import { useState } from "react";
import { Button, Chatbot, Stagebar } from "../components";

export const ChatbotPage = () => {
  const [curStage, setCurStage] = useState(3);
  return (
    <div className="flex flex-col h-screen px-10 py-20 space-y-4">
      <header>
        <Stagebar curStage={curStage} />
      </header>
      <main className="flex-1 overflow-auto">
        <Chatbot />
      </main>
      <footer>
        <div className="max-w-[500px] mx-auto">
          <Button className="w-full">다음</Button>
        </div>
      </footer>
    </div>
  );
};
