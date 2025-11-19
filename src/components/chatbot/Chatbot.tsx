import { twMerge } from "tailwind-merge";
import { Chat } from "./Chat";
import { chats } from "../../data";

export const Chatbot = () => {
  return (
    <div className="max-w-[500px] bg-white h-full mx-auto overflow-auto">
      <ul className="p-4 space-y-4">
        {chats.map((chat, index) => {
          const className = twMerge(
            "flex",
            chat.type === "ai" && "justify-start",
            chat.type === "question" && "justify-center",
            chat.type === "user" && "justify-end"
          );
          return (
            <li key={index} className={className}>
              <Chat chat={chat} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
