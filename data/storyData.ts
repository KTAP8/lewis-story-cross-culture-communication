export type StyleType = "linear" | "multi" | "reactive";

export type StoryNode = {
  text: string;
  options: { text: string; next: string; style?: StyleType }[];
};

export const story: Record<string, StoryNode> = {
  start: {
    text: "You arrive at a conference room in Tokyo for an important cross-cultural business meeting.",
    options: [
      {
        text: "Start by setting up your slides and opening your laptop.",
        next: "slideSetup",
        style: "linear",
      },
      {
        text: "Introduce yourself warmly and ask about their hobbies.",
        next: "warmIntro",
        style: "multi",
      },
      {
        text: "Bow lightly and wait quietly for the host to speak first.",
        next: "respectfulWait",
        style: "reactive",
      },
    ],
  },

  slideSetup: {
    text: "You begin to organize your slide deck and take the lead. Your hosts seem surprised.",
    options: [
      {
        text: "Continue presenting your agenda directly.",
        next: "directPitch",
        style: "linear",
      },
      {
        text: "Apologize and ask if they’d like to begin instead.",
        next: "apologizeBacktrack",
        style: "reactive",
      },
    ],
  },

  warmIntro: {
    text: "You bring up your love for sushi and ask about favorite places. Your hosts smile politely but don’t answer much.",
    options: [
      {
        text: "Keep talking to break the ice.",
        next: "keepChatting",
        style: "multi",
      },
      {
        text: "Sense the awkwardness and shift focus to their lead.",
        next: "backOff",
        style: "reactive",
      },
    ],
  },

  respectfulWait: {
    text: "You offer a small bow and wait. After a pause, the host smiles and begins. The mood is warm and smooth.",
    options: [
      {
        text: "Listen closely and ask clarifying questions.",
        next: "smoothFlow",
        style: "reactive",
      },
      {
        text: "Try to match their structure and mirror their tone.",
        next: "mirrorMatch",
        style: "reactive",
      },
    ],
  },

  // 🔵 Linear-Active branch
  directPitch: {
    text: "Your clear, goal-driven style feels abrupt. The hosts appreciate the data but seem a bit distant.",
    options: [
      { text: "Restart", next: "start" },
      { text: "See Result", next: "result" },
    ],
  },
  apologizeBacktrack: {
    text: "Your awareness improves the atmosphere. The host leads the meeting smoothly after that.",
    options: [
      { text: "Restart", next: "start" },
      { text: "See Result", next: "result" },
    ],
  },

  // 🔴 Multi-Active branch
  keepChatting: {
    text: "The more you talk, the more your hosts withdraw. The meeting feels off-balance.",
    options: [
      { text: "Restart", next: "start" },
      { text: "See Result", next: "result" },
    ],
  },
  backOff: {
    text: "You adjust and allow the local tone to take the lead. Respect earns you favor.",
    options: [
      { text: "Restart", next: "start" },
      { text: "See Result", next: "result" },
    ],
  },

  // 🟢 Reactive branch
  smoothFlow: {
    text: "Your careful listening is valued. The host offers deeper insights and respects your style.",
    options: [
      { text: "Restart", next: "start" },
      { text: "See Result", next: "result" },
    ],
  },
  mirrorMatch: {
    text: "You match the tone and build rapport slowly. Trust grows naturally.",
    options: [
      { text: "Restart", next: "start" },
      { text: "See Result", next: "result" },
    ],
  },
  result: {
    text: "Let's see what kind of communicator you are!",
    options: [], // No options needed — we'll trigger showResult manually
  },
};
