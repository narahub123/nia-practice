import { useState } from "react";
import { LuCircle, LuX } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import { useModalStore } from "../../stores";

interface Chat {
  chat: {
    type: string;
    text?: string;
    ques?: {
      qType: string;
      q: string;
      qAnswer: number;
      qChoices?: any[];
    };
  };
}

export const Chat = ({ chat }: Chat) => {
  const [selected, setSelected] = useState(5);
  const { type, text, ques } = chat;

  const { onOpen } = useModalStore();

  const className = twMerge(
    "px-4 py-2 rounded-lg space-y-4 shadow-lg",
    type === "ai" && "bg-yellow-200",
    type === "question" && "bg-green-200 w-full py-8",
    type === "user" && "bg-blue-200"
  );

  const handleClick = (index: number) => {
    setSelected(index);

    onOpen();
  };
  return (
    <>
      {text && <span className={className}>{text} </span>}
      {ques && (
        <div className={className}>
          <p className="text-center text-2xl font-bold">{ques.q}</p>
          {/* OX */}
          {ques.qType === "ox" && (
            <ul className="flex mt-8">
              {Array.from({ length: 2 }).map((_, index) => {
                const buttonClassName = twMerge(
                  "text-5xl p-4 bg-white inline-block rounded-xl shadow-lg cursor-pointer",
                  selected === index
                    ? "bg-orange-300 text-white"
                    : "hover:bg-gray-200 hover:text-white"
                );
                return (
                  <li
                    className="flex-1 flex justify-center items-center "
                    key={index}
                  >
                    <button
                      className={buttonClassName}
                      onClick={() => handleClick(index)}
                    >
                      {index === 0 ? <LuCircle /> : <LuX />}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          {/* 밸런스 */}
          {ques.qType === "balance" && (
            <ul className="flex mt-8">
              {ques.qChoices?.map((c, index) => {
                const buttonClassName = twMerge(
                  "text-5xl p-4 bg-white inline-block rounded-xl shadow-lg cursor-pointer",
                  selected === index
                    ? "bg-orange-300 text-white"
                    : "hover:bg-gray-200 hover:text-white"
                );
                return (
                  <li
                    className="flex-1 flex justify-center items-center"
                    key={c}
                    onClick={() => handleClick(index)}
                  >
                    <button className={buttonClassName}>{c}</button>
                  </li>
                );
              })}
            </ul>
          )}
          {/* 다지선다 */}
          {ques.qType === "multi" && (
            <ul className="mt-8 flex flex-col space-y-4">
              {ques.qChoices?.map((c, index) => {
                const buttonClassName = twMerge(
                  "flex-1 text-2xl p-4 bg-white inline-block rounded-xl shadow-lg  cursor-pointer",
                  selected === index
                    ? "bg-orange-300 text-white"
                    : "hover:bg-gray-200 hover:text-white"
                );
                return (
                  <li
                    className="flex-1 flex justify-center items-center"
                    key={c}
                  >
                    <button
                      className={buttonClassName}
                      onClick={() => handleClick(index)}
                    >
                      {c}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          {/* 드래그앤드롭 */}
          {ques.qType === "dnd" && (
            <ul className="mt-8 flex flex-col space-y-4">
              {ques.qChoices?.map((dd, index) => {
                console.log(dd);
                return (
                  <li key={index} className="flex items-center justify-between">
                    <span className="bg-white p-4 rounded-lg relative">
                      <button className=" w-4 h-4 bg-red-400 rounded-full absolute -right-2 top-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer">
                        {/* <span className="inline-block w-2 h-2 bg-gray-400 rounded-full"></span> */}
                      </button>
                      {dd[0].text}
                    </span>
                    <span className="bg-white p-4 rounded-lg relative">
                      <button className=" w-4 h-4 bg-blue-400 rounded-full absolute -left-2 top-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer">
                        {/* <span className="inline-block w-2 h-2 bg-gray-400 rounded-full"></span> */}
                      </button>
                      {dd[1].text}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </>
  );
};
