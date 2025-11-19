export const chats = [
  {
    type: "ai",
    text: "이번에는 이걸 해보자",
  },
  {
    type: "question",
    ques: {
      qType: "ox",
      q: "OX 퀴즈",
      qAnswer: 1,
    },
  },
  {
    type: "question",
    ques: {
      qType: "balance",
      q: "밸런스 게임",
      qChoices: ["ENFP", "ISTJ"],
      qAnswer: 1,
    },
  },
  {
    type: "question",
    ques: {
      qType: "multi",
      q: "다지선다",
      qChoices: ["1.졸리다", "2.집에가고싶다", "3.모르겠다"],
      qAnswer: 1,
    },
  },
  {
    type: "question",
    ques: {
      qType: "dnd",
      q: "드래그 앤 드롭",
      qChoices: [
        [
          {
            id: 1,
            text: "오늘은 점심 뭐 먹지?",
          },
          {
            id: 1,
            text: "낙지볶음",
          },
        ],
        [
          {
            id: 2,
            text: "오늘 몇 시 퇴근?",
          },
          {
            id: 2,
            text: "12시",
          },
        ],
      ],
      qAnswer: 1,
    },
  },
  {
    type: "user",
    text: "머냐?",
  },
];
